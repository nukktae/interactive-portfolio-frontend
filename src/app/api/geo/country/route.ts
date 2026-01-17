import { NextResponse } from 'next/server';
import { getClientIP } from '@/services/analytics';

// Simple function to get country from IP (lightweight version for language detection)
async function getCountryFromIP(ip: string): Promise<string | null> {
  // Skip for localhost/private IPs
  if (ip === 'unknown' || 
      ip === '::1' || 
      ip === '127.0.0.1' ||
      ip.startsWith('127.') || 
      ip.startsWith('192.168.') || 
      ip.startsWith('10.') || 
      ip.startsWith('172.') ||
      ip.startsWith('::ffff:127.') ||
      ip.startsWith('::ffff:192.168.') ||
      ip.startsWith('::ffff:10.') ||
      ip.startsWith('::ffff:172.')) {
    return null;
  }

  try {
    // Use ipapi.co for country detection (lightweight, free tier: 1000 requests/day)
    const response = await fetch(`https://ipapi.co/${ip}/country/`, {
      headers: {
        'User-Agent': 'Portfolio Language Detection'
      }
    });
    
    if (response.ok) {
      const countryCode = await response.text().then(text => text.trim());
      // Return country code (e.g., "KR", "US", etc.)
      return countryCode || null;
    }
  } catch (error) {
    console.error('Error fetching country from IP:', error);
  }

  // Fallback: try to get full JSON response for country name
  try {
    const response = await fetch(`https://ipapi.co/${ip}/json/`, {
      headers: {
        'User-Agent': 'Portfolio Language Detection'
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      // Return country code if available
      return data.country_code || null;
    }
  } catch (error) {
    console.error('Error fetching country from IP (fallback):', error);
  }

  return null;
}

export async function GET(request: Request) {
  try {
    const ip = getClientIP(request);
    const countryCode = await getCountryFromIP(ip);
    
    return NextResponse.json({ 
      countryCode,
      ip: isLocalhostIP(ip) ? null : ip // Don't expose localhost IPs
    });
  } catch (error: unknown) {
    console.error('Error getting country:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json(
      { error: 'Failed to get country', details: errorMessage },
      { status: 500 }
    );
  }
}

function isLocalhostIP(ip: string): boolean {
  if (ip === 'unknown') return true;
  if (ip === '::1') return true;
  if (ip === '127.0.0.1') return true;
  if (ip.startsWith('127.')) return true;
  if (ip.startsWith('192.168.')) return true;
  if (ip.startsWith('10.')) return true;
  if (ip.startsWith('172.')) return true;
  if (ip.startsWith('::ffff:127.')) return true;
  if (ip.startsWith('::ffff:192.168.')) return true;
  if (ip.startsWith('::ffff:10.')) return true;
  if (ip.startsWith('::ffff:172.')) return true;
  return false;
}
