import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

// Check if we're on Vercel and have KV configured
const USE_KV = process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN;

// Lazy load KV to avoid errors if not configured
let kv: any = null;
async function getKV() {
  if (!USE_KV) return null;
  if (kv) return kv;
  try {
    const { kv: kvClient } = await import('@vercel/kv');
    kv = kvClient;
    return kv;
  } catch (error) {
    console.warn('Vercel KV not available, falling back to file storage:', error);
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
    const kvClient = await getKV();
    if (kvClient) {
      try {
        const data = await kvClient.get(this.key) as T[] | null;
        return data || [];
      } catch (error) {
        console.error(`Error reading from KV (${this.key}):`, error);
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
    const kvClient = await getKV();
    if (kvClient) {
      try {
        await kvClient.set(this.key, data);
      } catch (error) {
        console.error(`Error writing to KV (${this.key}):`, error);
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

