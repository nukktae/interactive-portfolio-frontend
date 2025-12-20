import type { VisitData, AnalyticsInsights } from '@/types/analytics';
import { analyticsStorage } from './storage';

// Load analytics data
async function loadAnalytics(): Promise<VisitData[]> {
  try {
    const data = await analyticsStorage.get<VisitData>();
    console.log(`Loaded ${data.length} analytics entries`);
    return data;
  } catch (error) {
    console.error('Error loading analytics:', error);
    return [];
  }
}

// Save analytics data
async function saveAnalytics(visits: VisitData[]): Promise<void> {
  try {
    await analyticsStorage.set(visits);
    console.log(`Saved ${visits.length} analytics entries`);
  } catch (error) {
    console.error('Error saving analytics:', error);
    throw error;
  }
}

// Get client IP address from request
export function getClientIP(request: Request): string {
  // Check various headers for IP address
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip'); // Cloudflare
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  if (cfConnectingIP) {
    return cfConnectingIP;
  }
  
  return 'unknown';
}

// Get geolocation data from IP address
async function getGeolocation(ip: string): Promise<{
  country?: string;
  city?: string;
  region?: string;
  district?: string;
  street?: string;
  houseNumber?: string;
  latitude?: number;
  longitude?: number;
}> {
  // Skip for localhost/private IPs - these cannot be geolocated
  if (ip === 'unknown' || 
      ip === '::1' || 
      ip === '127.0.0.1' ||
      ip.startsWith('127.') || 
      ip.startsWith('192.168.') || 
      ip.startsWith('10.') || 
      ip.startsWith('172.') ||
      ip.startsWith('::ffff:127.') || // IPv4-mapped IPv6 localhost
      ip.startsWith('::ffff:192.168.') ||
      ip.startsWith('::ffff:10.') ||
      ip.startsWith('::ffff:172.')) {
    return {};
  }

  try {
    // Try ipapi.co first (free tier: 1000 requests/day)
    const response = await fetch(`https://ipapi.co/${ip}/json/`, {
      headers: {
        'User-Agent': 'Portfolio Analytics'
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      
      // Check if we got valid data
      if (data.latitude && data.longitude) {
        // For Korean addresses, improve the city/region/district handling
        let city = data.city;
        let region = data.region;
        let district: string | undefined;
        
        // Handle Korean addresses - districts end with -gu
        if (data.country_code === 'KR' && city) {
          // If city is a district (ends with -gu), extract it as district
          // Common Seoul districts: Yangcheon-gu, Gangnam-gu, etc.
          if (city.endsWith('-gu') || city.endsWith('구')) {
            district = city;
            // Set region to Seoul if not already set
            if (!region || region === '') {
              region = 'Seoul';
            }
            city = 'Seoul'; // Set city to Seoul since district is the specific area
          }
          // If region contains Seoul but city doesn't, keep both
          else if (region && (region.includes('Seoul') || region.includes('서울'))) {
            // City is the main city, region is the administrative region
          }
        }
        
        return {
          country: data.country_name || data.country_code,
          city: city,
          region: region || data.region_code,
          district: district,
          latitude: data.latitude,
          longitude: data.longitude
        };
      }
    }
    
    // Fallback to ip-api.com (free tier: 45 requests/minute)
    const fallbackResponse = await fetch(`http://ip-api.com/json/${ip}?fields=status,message,country,city,regionName,lat,lon`);
    if (fallbackResponse.ok) {
      const fallbackData = await fallbackResponse.json();
      if (fallbackData.status === 'success' && fallbackData.lat && fallbackData.lon) {
        let district: string | undefined;
        let city = fallbackData.city;
        
        // Check if city is a Korean district
        if (fallbackData.country === 'South Korea' && city && (city.endsWith('-gu') || city.endsWith('구'))) {
          district = city;
          city = 'Seoul';
        }
        
        return {
          country: fallbackData.country,
          city: city,
          region: fallbackData.regionName,
          district: district,
          latitude: fallbackData.lat,
          longitude: fallbackData.lon
        };
      }
    }
    
    return {};
  } catch (error) {
    console.error('Error fetching geolocation:', error);
    return {};
  }
}

// Add a new visit
export async function addVisit(
  ip: string,
  page: string,
  referrer?: string,
  userAgent?: string,
  language?: string,
  timezone?: string,
  providedLatitude?: number,
  providedLongitude?: number
): Promise<VisitData> {
  const visits = await loadAnalytics();
  
  // Get geolocation from IP if coordinates not provided
  let geo: {
    country?: string;
    city?: string;
    region?: string;
    district?: string;
    street?: string;
    houseNumber?: string;
    latitude?: number;
    longitude?: number;
  } = {};
  
  if (providedLatitude != null && providedLongitude != null) {
    // Use provided coordinates and reverse geocode to get location details
    // Use OpenStreetMap Nominatim for better precision, especially for Korean districts
    try {
      // Try OpenStreetMap Nominatim first (better for Korean districts/구)
      const nominatimResponse = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${providedLatitude}&lon=${providedLongitude}&zoom=18&addressdetails=1`,
        {
          headers: {
            'User-Agent': 'Portfolio Analytics App'
          }
        }
      );
      
      if (nominatimResponse.ok) {
        const nominatimData = await nominatimResponse.json();
        const address = nominatimData.address || {};
        
        // Extract location details
        let country = address.country;
        let city = address.city || address.town || address.village || address.municipality;
        let region = address.state || address.province || address.region;
        let district: string | undefined;
        let street: string | undefined;
        let houseNumber: string | undefined;
        
        // Extract street and house number (available for all addresses)
        street = address.road || address.street || address.pedestrian || address.path;
        houseNumber = address.house_number || address.house_name;
        
        // For Korean addresses, extract district (구)
        if (address.country_code === 'kr' || address.country_code === 'KR') {
          // Korean addresses: district is often in 'city_district' or 'suburb'
          district = address.city_district || address.suburb || address.neighbourhood;
          
          // If district ends with '구', it's a district
          if (district && district.endsWith('구')) {
            // Keep district as is
          } else if (city && city.endsWith('구')) {
            // City might actually be the district
            district = city;
            city = address.state || 'Seoul'; // Seoul or other major city
          }
          
          // If we have coordinates in Seoul area, try to get better city info
          if (!city || city === 'Seoul') {
            city = 'Seoul';
          }
          
          // For Korean addresses, also check neighbourhood for street-level detail
          if (!street && address.neighbourhood) {
            street = address.neighbourhood;
          }
        } else {
          // For non-Korean addresses, district might be in suburb or city_district
          district = address.city_district || address.suburb;
        }
        
        geo = {
          country: country || nominatimData.address?.country,
          city: city,
          region: region,
          district: district,
          street: street,
          houseNumber: houseNumber,
          latitude: providedLatitude,
          longitude: providedLongitude
        };
      } else {
        // Fallback to bigdatacloud
        const reverseGeoResponse = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${providedLatitude}&longitude=${providedLongitude}&localityLanguage=en`
        );
        if (reverseGeoResponse.ok) {
          const reverseData = await reverseGeoResponse.json();
          geo = {
            country: reverseData.countryName,
            city: reverseData.city || reverseData.locality,
            region: reverseData.principalSubdivision,
            latitude: providedLatitude,
            longitude: providedLongitude
          };
        } else {
          // Fallback: use coordinates but no location details
          geo = {
            latitude: providedLatitude,
            longitude: providedLongitude
          };
        }
      }
    } catch (error) {
      console.error('Error in reverse geocoding:', error);
      // Fallback: use coordinates but no location details
      geo = {
        latitude: providedLatitude,
        longitude: providedLongitude
      };
    }
  } else {
    // Fall back to IP-based geolocation
    geo = await getGeolocation(ip);
    
    // If we got coordinates from IP geolocation, try to enhance with reverse geocoding for Korean addresses
    if (geo.latitude && geo.longitude && geo.country === 'South Korea') {
      try {
        const nominatimResponse = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${geo.latitude}&lon=${geo.longitude}&zoom=18&addressdetails=1`,
          {
            headers: {
              'User-Agent': 'Portfolio Analytics App'
            }
          }
        );
        
        if (nominatimResponse.ok) {
          const nominatimData = await nominatimResponse.json();
          const address = nominatimData.address || {};
          
          // Extract district, street, and house number for Korean addresses
          if (address.country_code === 'kr' || address.country_code === 'KR') {
            const district = address.city_district || address.suburb || address.neighbourhood;
            if (district && (district.endsWith('구') || district.includes('gu'))) {
              geo.district = district;
            }
            
            // Extract street and house number
            geo.street = address.road || address.street || address.pedestrian || address.path;
            geo.houseNumber = address.house_number || address.house_name;
          }
        }
      } catch (error) {
        // Silently fail - we already have basic location data
      }
    }
  }
  
  const visit: VisitData = {
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    timestamp: Date.now(),
    ip,
    country: geo.country,
    city: geo.city,
    region: geo.region,
    district: geo.district,
    street: geo.street,
    houseNumber: geo.houseNumber,
    latitude: geo.latitude,
    longitude: geo.longitude,
    referrer: referrer || 'direct',
    userAgent,
    page,
    language,
    timezone
  };
  
  visits.push(visit);
  
  // Keep only last 10,000 visits to prevent storage from growing too large
  const trimmedVisits = visits.slice(-10000);
  
  await saveAnalytics(trimmedVisits);
  
  return visit;
}

// Get analytics insights
export async function getInsights(
  startDate?: number,
  endDate?: number
): Promise<AnalyticsInsights> {
  const visits = await loadAnalytics();
  
  // Filter by date range if provided
  let filteredVisits = visits;
  if (startDate || endDate) {
    filteredVisits = visits.filter(visit => {
      if (startDate && visit.timestamp < startDate) return false;
      if (endDate && visit.timestamp > endDate) return false;
      return true;
    });
  }
  
  // Calculate unique visitors (by IP)
  const uniqueIPs = new Set(filteredVisits.map(v => v.ip));
  const uniqueVisitors = uniqueIPs.size;
  
  // Group by country
  const visitsByCountry: Record<string, number> = {};
  filteredVisits.forEach(visit => {
    const country = visit.country || 'Unknown';
    visitsByCountry[country] = (visitsByCountry[country] || 0) + 1;
  });
  
  // Group by city
  const visitsByCity: Record<string, number> = {};
  filteredVisits.forEach(visit => {
    if (visit.city) {
      const key = `${visit.city}, ${visit.country || 'Unknown'}`;
      visitsByCity[key] = (visitsByCity[key] || 0) + 1;
    }
  });
  
  // Group by page
  const visitsByPage: Record<string, number> = {};
  filteredVisits.forEach(visit => {
    visitsByPage[visit.page] = (visitsByPage[visit.page] || 0) + 1;
  });
  
  // Group by referrer
  const visitsByReferrer: Record<string, number> = {};
  filteredVisits.forEach(visit => {
    const ref = visit.referrer || 'direct';
    visitsByReferrer[ref] = (visitsByReferrer[ref] || 0) + 1;
  });
  
  // Group by date
  const visitsByDate: Record<string, number> = {};
  filteredVisits.forEach(visit => {
    const date = new Date(visit.timestamp).toISOString().split('T')[0];
    visitsByDate[date] = (visitsByDate[date] || 0) + 1;
  });
  
  // Get recent visits (last 50)
  const recentVisits = filteredVisits
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, 50);
  
  // Calculate top countries
  const topCountries = Object.entries(visitsByCountry)
    .map(([country, visits]) => ({
      country,
      visits,
      percentage: (visits / filteredVisits.length) * 100
    }))
    .sort((a, b) => b.visits - a.visits)
    .slice(0, 10);
  
  // Calculate top cities
  const topCities = Object.entries(visitsByCity)
    .map(([cityCountry, visits]) => {
      const [city, country] = cityCountry.split(', ');
      return {
        city: city.trim(),
        country: country || 'Unknown',
        visits,
        percentage: (visits / filteredVisits.length) * 100
      };
    })
    .sort((a, b) => b.visits - a.visits)
    .slice(0, 10);
  
  // Calculate top pages
  const topPages = Object.entries(visitsByPage)
    .map(([page, visits]) => ({
      page,
      visits,
      percentage: (visits / filteredVisits.length) * 100
    }))
    .sort((a, b) => b.visits - a.visits)
    .slice(0, 10);
  
  return {
    totalVisits: filteredVisits.length,
    uniqueVisitors,
    visitsByCountry,
    visitsByCity,
    visitsByPage,
    visitsByReferrer,
    visitsByDate,
    recentVisits,
    topCountries,
    topCities,
    topPages,
    timeRange: {
      start: startDate || (filteredVisits.length > 0 ? Math.min(...filteredVisits.map(v => v.timestamp)) : Date.now()),
      end: endDate || (filteredVisits.length > 0 ? Math.max(...filteredVisits.map(v => v.timestamp)) : Date.now())
    }
  };
}

