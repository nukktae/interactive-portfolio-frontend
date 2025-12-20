export interface ChatLogEntry {
  id: string;
  timestamp: number;
  message: string;
  response: string;
  ip?: string;
  country?: string;
  city?: string;
  language?: string;
  userAgent?: string;
  sessionId?: string;
}

export interface ChatLogInsights {
  totalQueries: number;
  uniqueUsers: number;
  queriesByDate: Record<string, number>;
  topQueries: Array<{ message: string; count: number }>;
  recentQueries: ChatLogEntry[];
  queriesByCountry: Record<string, number>;
  timeRange: {
    start: number;
    end: number;
  };
}

