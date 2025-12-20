import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

// Check if Upstash Redis is configured
// Vercel/Upstash uses KV_* prefix for environment variables
const REST_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const REST_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const USE_REDIS = REST_URL && REST_TOKEN;

// Lazy load Redis to avoid errors if not configured
let redis: any = null;
async function getRedis() {
  if (!USE_REDIS) return null;
  if (redis) return redis;
  try {
    const { Redis } = await import('@upstash/redis');
    redis = new Redis({
      url: REST_URL!,
      token: REST_TOKEN!,
    });
    return redis;
  } catch (error) {
    console.warn('Upstash Redis not available, falling back to file storage:', error);
    return null;
  }
}

// File-based storage for local development
const DATA_DIR = join(process.cwd(), 'data');

async function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true });
  }
}

// Generic storage interface
export class Storage {
  private key: string;
  private filePath: string;

  constructor(key: string, fileName: string) {
    this.key = key;
    this.filePath = join(DATA_DIR, fileName);
  }

  async get<T>(): Promise<T[]> {
    const redisClient = await getRedis();
    if (redisClient) {
      try {
        const data = await redisClient.get(this.key) as T[] | null;
        return data || [];
      } catch (error) {
        console.error(`Error reading from Redis (${this.key}):`, error);
        return [];
      }
    } else {
      // File-based storage for local development
      try {
        await ensureDataDir();
        if (!existsSync(this.filePath)) {
          return [];
        }
        const data = await readFile(this.filePath, 'utf-8');
        return JSON.parse(data);
      } catch (error) {
        console.error(`Error reading from file (${this.filePath}):`, error);
        return [];
      }
    }
  }

  async set<T>(data: T[]): Promise<void> {
    const redisClient = await getRedis();
    if (redisClient) {
      try {
        await redisClient.set(this.key, data);
      } catch (error) {
        console.error(`Error writing to Redis (${this.key}):`, error);
        throw error;
      }
    } else {
      // File-based storage for local development
      try {
        await ensureDataDir();
        await writeFile(this.filePath, JSON.stringify(data, null, 2), 'utf-8');
      } catch (error) {
        console.error(`Error writing to file (${this.filePath}):`, error);
        throw error;
      }
    }
  }

  async append<T>(item: T, maxItems: number = 10000): Promise<void> {
    const data = await this.get<T>();
    data.push(item);
    
    // Keep only last N items
    const trimmed = data.slice(-maxItems);
    await this.set(trimmed);
  }
}

// Create storage instances
export const analyticsStorage = new Storage('portfolio:analytics', 'analytics.json');
export const chatLogStorage = new Storage('portfolio:chat-logs', 'chat-logs.json');

