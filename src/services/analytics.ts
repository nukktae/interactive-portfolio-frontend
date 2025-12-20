import type { VisitData, AnalyticsInsights } from '@/types/analytics';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

// Use /tmp on Vercel (serverless), otherwise use ./data
const DATA_DIR = process.env.VERCEL 
  ? '/tmp/portfolio-analytics' 
  : join(process.cwd(), 'data');
const ANALYTICS_FILE = join(DATA_DIR, 'analytics.json');

// Ensure data directory exists
async function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true });
  }
}

// Load analytics data from file
async function loadAnalytics(): Promise<VisitData[]> {
  try {
    await ensureDataDir();
    if (!existsSync(ANALYTICS_FILE)) {
      console.log('Analytics file does not exist, returning empty array');
      return [];
    }
    const data = await readFile(ANALYTICS_FILE, 'utf-8');
    const parsed = JSON.parse(data);
    console.log(`Loaded ${parsed.length} analytics entries from ${ANALYTICS_FILE}`);
    return parsed;
  } catch (error) {
    console.error('Error loading analytics:', error);
    console.error('File path:', ANALYTICS_FILE);
    return [];
  }
}

// Save analytics data to file
async function saveAnalytics(visits: VisitData[]): Promise<void> {
  try {
    await ensureDataDir();
    await writeFile(ANALYTICS_FILE, JSON.stringify(visits, null, 2), 'utf-8');
    console.log(`Saved ${visits.length} analytics entries to ${ANALYTICS_FILE}`);
  } catch (error) {
    console.error('Error saving analytics:', error);
    console.error('File path:', ANALYTICS_FILE);
    console.error('Data dir exists:', existsSync(DATA_DIR));
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
  latitude?: number;
  longitude?: number;
}> {
  // Skip for localhost/private IPs - these will rely on browser geolocation
  if (ip === 'unknown' || ip.startsWith('127.') || ip.startsWith('192.168.') || ip.startsWith('10.') || ip.startsWith('172.')) {
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
        return {
          country: data.country_name || data.country_code,
          city: data.city,
          region: data.region,
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
        return {
          country: fallbackData.country,
          city: fallbackData.city,
          region: fallbackData.regionName,
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
    latitude?: number;
    longitude?: number;
  } = {};
  
  if (providedLatitude != null && providedLongitude != null) {
    // Use provided coordinates and reverse geocode to get location details
    try {
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
    } catch (error) {
      // Fallback: use coordinates but no location details
      geo = {
        latitude: providedLatitude,
        longitude: providedLongitude
      };
    }
  } else {
    // Fall back to IP-based geolocation
    geo = await getGeolocation(ip);
  }
  
  const visit: VisitData = {
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    timestamp: Date.now(),
    ip,
    country: geo.country,
    city: geo.city,
    region: geo.region,
    latitude: geo.latitude,
    longitude: geo.longitude,
    referrer: referrer || 'direct',
    userAgent,
    page,
    language,
    timezone
  };
  
  visits.push(visit);
  
  // Keep only last 10,000 visits to prevent file from growing too large
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

