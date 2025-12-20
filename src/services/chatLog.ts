import type { ChatLogEntry, ChatLogInsights } from '@/types/chatLog';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
import { getClientIP } from './analytics';

const DATA_DIR = join(process.cwd(), 'data');
const CHAT_LOG_FILE = join(DATA_DIR, 'chat-logs.json');

// Ensure data directory exists
async function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true });
  }
}

// Load chat logs from file
async function loadChatLogs(): Promise<ChatLogEntry[]> {
  try {
    await ensureDataDir();
    if (!existsSync(CHAT_LOG_FILE)) {
      return [];
    }
    const data = await readFile(CHAT_LOG_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading chat logs:', error);
    return [];
  }
}

// Save chat logs to file
async function saveChatLogs(logs: ChatLogEntry[]): Promise<void> {
  try {
    await ensureDataDir();
    await writeFile(CHAT_LOG_FILE, JSON.stringify(logs, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error saving chat logs:', error);
    throw error;
  }
}

// Add a new chat log entry
export async function addChatLog(
  message: string,
  response: string,
  request: Request,
  language?: string,
  sessionId?: string
): Promise<ChatLogEntry> {
  const logs = await loadChatLogs();
  
  // Get client information
  const ip = getClientIP(request);
  const userAgent = request.headers.get('user-agent') || undefined;
  
  // Get basic geolocation (simplified - just country for chat logs)
  let country: string | undefined;
  let city: string | undefined;
  
  if (ip && ip !== 'unknown' && !ip.startsWith('127.') && !ip.startsWith('192.168.') && !ip.startsWith('10.') && !ip.startsWith('172.')) {
    try {
      const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`, {
        headers: { 'User-Agent': 'Portfolio Analytics' }
      });
      if (geoResponse.ok) {
        const geoData = await geoResponse.json();
        country = geoData.country_name || geoData.country_code;
        city = geoData.city;
      }
    } catch (error) {
      // Silently fail - geolocation is optional
    }
  }
  
  const logEntry: ChatLogEntry = {
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    timestamp: Date.now(),
    message: message.trim(),
    response: response.trim(),
    ip,
    country,
    city,
    language,
    userAgent,
    sessionId
  };
  
  logs.push(logEntry);
  
  // Keep only last 5,000 chat logs to prevent file from growing too large
  const trimmedLogs = logs.slice(-5000);
  
  await saveChatLogs(trimmedLogs);
  
  return logEntry;
}

// Get chat log insights
export async function getChatLogInsights(
  startDate?: number,
  endDate?: number
): Promise<ChatLogInsights> {
  const logs = await loadChatLogs();
  
  // Filter by date range if provided
  let filteredLogs = logs;
  if (startDate || endDate) {
    filteredLogs = logs.filter(log => {
      if (startDate && log.timestamp < startDate) return false;
      if (endDate && log.timestamp > endDate) return false;
      return true;
    });
  }
  
  // Calculate unique users (by IP)
  const uniqueIPs = new Set(filteredLogs.map(l => l.ip).filter(Boolean));
  const uniqueUsers = uniqueIPs.size;
  
  // Group by date
  const queriesByDate: Record<string, number> = {};
  filteredLogs.forEach(log => {
    const date = new Date(log.timestamp).toISOString().split('T')[0];
    queriesByDate[date] = (queriesByDate[date] || 0) + 1;
  });
  
  // Find top queries (exact message matches)
  const queryCounts: Record<string, number> = {};
  filteredLogs.forEach(log => {
    const normalizedMessage = log.message.toLowerCase().trim();
    queryCounts[normalizedMessage] = (queryCounts[normalizedMessage] || 0) + 1;
  });
  
  const topQueries = Object.entries(queryCounts)
    .map(([message, count]) => ({ message, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);
  
  // Get recent queries (last 50)
  const recentQueries = filteredLogs
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, 50);
  
  // Group by country
  const queriesByCountry: Record<string, number> = {};
  filteredLogs.forEach(log => {
    if (log.country) {
      queriesByCountry[log.country] = (queriesByCountry[log.country] || 0) + 1;
    }
  });
  
  return {
    totalQueries: filteredLogs.length,
    uniqueUsers,
    queriesByDate,
    topQueries,
    recentQueries,
    queriesByCountry,
    timeRange: {
      start: startDate || (filteredLogs.length > 0 ? Math.min(...filteredLogs.map(l => l.timestamp)) : Date.now()),
      end: endDate || (filteredLogs.length > 0 ? Math.max(...filteredLogs.map(l => l.timestamp)) : Date.now())
    }
  };
}

