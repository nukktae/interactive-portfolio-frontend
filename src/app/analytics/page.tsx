'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import type { AnalyticsInsights } from '@/types/analytics';
import dynamic from 'next/dynamic';

// Dynamically import map to avoid SSR issues
const MapComponent = dynamic(() => import('@/components/analytics/VisitorMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-black/20 rounded-lg">
      <div className="animate-spin rounded-full h-8 w-8 border-2 border-white/20 border-t-white/60"></div>
    </div>
  ),
});

function AnalyticsContent() {
  const searchParams = useSearchParams();
  const [insights, setInsights] = useState<AnalyticsInsights | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [unauthorized, setUnauthorized] = useState(false);

  useEffect(() => {
    const key = searchParams.get('key');
    if (!key) {
      setUnauthorized(true);
      setLoading(false);
      return;
    }
    fetchInsights(key);
  }, [searchParams]);

  const fetchInsights = async (key: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`/api/analytics/insights?key=${encodeURIComponent(key)}`);
      
      if (response.status === 401) {
        setUnauthorized(true);
        setLoading(false);
        return;
      }
      
      if (!response.ok) {
        throw new Error('Failed to fetch analytics');
      }
      
      const data = await response.json();
      setInsights(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (unauthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center px-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-3">Unauthorized Access</h1>
          <p className="text-white/40 text-sm">This page requires a valid access key.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-white/20 border-t-white/60 mx-auto mb-4"></div>
          <p className="text-white/40 text-sm">Loading analytics...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center px-6">
          <p className="text-white/60 mb-4 text-sm">Error: {error}</p>
          <button
            onClick={() => {
              const key = searchParams.get('key');
              if (key) fetchInsights(key);
            }}
            className="px-4 py-2 text-sm border border-white/20 text-white/80 hover:border-white/40 hover:text-white transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!insights) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 xl:px-32 py-12 md:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="text-xs font-semibold tracking-widest text-white/40 mb-4 uppercase">
            Analytics Dashboard
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white mb-6">
            Visitor Insights
          </h1>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
        >
          <div className="border border-white/10 rounded-lg p-4 md:p-6 bg-white/5">
            <div className="text-xs text-white/40 mb-2 uppercase tracking-wider">Total Visits</div>
            <div className="text-2xl md:text-4xl font-bold text-white">{insights.totalVisits.toLocaleString()}</div>
          </div>
          <div className="border border-white/10 rounded-lg p-4 md:p-6 bg-white/5">
            <div className="text-xs text-white/40 mb-2 uppercase tracking-wider">Unique Visitors</div>
            <div className="text-2xl md:text-4xl font-bold text-white">{insights.uniqueVisitors.toLocaleString()}</div>
          </div>
          <div className="border border-white/10 rounded-lg p-4 md:p-6 bg-white/5">
            <div className="text-xs text-white/40 mb-2 uppercase tracking-wider">Countries</div>
            <div className="text-2xl md:text-4xl font-bold text-white">{Object.keys(insights.visitsByCountry).length}</div>
          </div>
          <div className="border border-white/10 rounded-lg p-4 md:p-6 bg-white/5">
            <div className="text-xs text-white/40 mb-2 uppercase tracking-wider">Pages</div>
            <div className="text-2xl md:text-4xl font-bold text-white">{Object.keys(insights.visitsByPage).length}</div>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 md:mb-16"
        >
          <div className="text-xs font-semibold tracking-widest text-white/40 mb-4 uppercase">
            Visitor Locations
          </div>
          <div className="border border-white/10 rounded-lg overflow-hidden bg-black/50" style={{ height: '500px' }}>
            <MapComponent visits={insights.recentVisits} />
          </div>
        </motion.div>

        {/* Data Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12">
          {/* Top Countries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border border-white/10 rounded-lg p-6 md:p-8 bg-white/5"
          >
            <h2 className="text-lg md:text-xl font-bold text-white mb-6 uppercase tracking-wider">Top Countries</h2>
            <div className="space-y-4">
              {insights.topCountries.length > 0 ? (
                insights.topCountries.slice(0, 5).map((item, index) => (
                  <div key={index} className="flex items-center justify-between pb-4 border-b border-white/5 last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="text-white/20 text-sm font-mono w-6">#{index + 1}</span>
                      <span className="text-white/80 font-medium">{item.country}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-white font-semibold">{item.visits}</span>
                      <span className="text-white/30 text-xs ml-2">({item.percentage.toFixed(0)}%)</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-white/30 text-sm">No data available</p>
              )}
            </div>
          </motion.div>

          {/* Top Cities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border border-white/10 rounded-lg p-6 md:p-8 bg-white/5"
          >
            <h2 className="text-lg md:text-xl font-bold text-white mb-6 uppercase tracking-wider">Top Cities</h2>
            <div className="space-y-4">
              {insights.topCities.length > 0 ? (
                insights.topCities.slice(0, 5).map((item, index) => (
                  <div key={index} className="flex items-center justify-between pb-4 border-b border-white/5 last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="text-white/20 text-sm font-mono w-6">#{index + 1}</span>
                      <div>
                        <span className="text-white/80 font-medium">{item.city}</span>
                        <span className="text-white/30 text-xs ml-2">{item.country}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-white font-semibold">{item.visits}</span>
                      <span className="text-white/30 text-xs ml-2">({item.percentage.toFixed(0)}%)</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-white/30 text-sm">No data available</p>
              )}
            </div>
          </motion.div>
        </div>

        {/* Recent Visits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border border-white/10 rounded-lg p-6 md:p-8 bg-white/5 mb-12"
        >
          <h2 className="text-lg md:text-xl font-bold text-white mb-6 uppercase tracking-wider">Recent Activity</h2>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {insights.recentVisits.length > 0 ? (
              insights.recentVisits.slice(0, 20).map((visit) => (
                <div key={visit.id} className="flex items-start justify-between pb-3 border-b border-white/5 last:border-0">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white/60 font-mono text-xs truncate">{visit.page}</span>
                    </div>
                    <div className="text-white/40 text-xs">
                      {visit.city && `${visit.city}, `}
                      {visit.country || 'Unknown'}
                    </div>
                  </div>
                  <div className="text-white/30 text-xs ml-4 whitespace-nowrap">
                    {formatDate(visit.timestamp)}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white/30 text-sm">No recent visits</p>
            )}
          </div>
        </motion.div>

        {/* Refresh Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <button
            onClick={() => {
              const key = searchParams.get('key');
              if (key) {
                fetchInsights(key);
              }
            }}
            className="px-6 py-3 text-sm border border-white/20 text-white/80 hover:border-white/40 hover:text-white transition-colors uppercase tracking-wider"
          >
            Refresh Data
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default function AnalyticsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-white/20 border-t-white/60 mx-auto mb-4"></div>
            <p className="text-white/40 text-sm">Loading...</p>
          </div>
        </div>
      }
    >
      <AnalyticsContent />
    </Suspense>
  );
}
