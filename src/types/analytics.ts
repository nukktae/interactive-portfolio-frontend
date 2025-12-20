export interface VisitData {
  id: string;
  timestamp: number;
  ip: string;
  country?: string;
  city?: string;
  region?: string;
  district?: string; // District/구 for Korean addresses
  street?: string; // Street name
  houseNumber?: string; // Building/house number (e.g., "674-5")
  latitude?: number;
  longitude?: number;
  referrer?: string;
  userAgent?: string;
  page: string;
  language?: string;
  timezone?: string;
}

export interface AnalyticsInsights {
  totalVisits: number;
  uniqueVisitors: number;
  visitsByCountry: Record<string, number>;
  visitsByCity: Record<string, number>;
  visitsByPage: Record<string, number>;
  visitsByReferrer: Record<string, number>;
  visitsByDate: Record<string, number>;
  recentVisits: VisitData[];
  topCountries: Array<{ country: string; visits: number; percentage: number }>;
  topCities: Array<{ city: string; country: string; visits: number; percentage: number }>;
  topPages: Array<{ page: string; visits: number; percentage: number }>;
  timeRange: {
    start: number;
    end: number;
  };
}

export interface TrackVisitRequest {
  page: string;
  referrer?: string;
  language?: string;
  timezone?: string;
  latitude?: number;
  longitude?: number;
}

