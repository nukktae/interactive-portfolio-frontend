'use client';

import { useEffect, useState } from 'react';
import type { AnalyticsInsights } from '@/types/analytics';

export default function AnalyticsPage() {
  const [insights, setInsights] = useState<AnalyticsInsights | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchInsights();
  }, []);

  const fetchInsights = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/analytics/insights');
      
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
    return new Date(timestamp).toLocaleString();
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading analytics...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">Error: {error}</p>
          <button
            onClick={fetchInsights}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
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
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Portfolio Analytics</h1>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-gray-400 text-sm mb-2">Total Visits</h3>
            <p className="text-3xl font-bold">{insights.totalVisits.toLocaleString()}</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-gray-400 text-sm mb-2">Unique Visitors</h3>
            <p className="text-3xl font-bold">{insights.uniqueVisitors.toLocaleString()}</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-gray-400 text-sm mb-2">Time Range</h3>
            <p className="text-sm">
              {formatDate(insights.timeRange.start)}<br />
              to {formatDate(insights.timeRange.end)}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Countries */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Top Countries</h2>
            <div className="space-y-3">
              {insights.topCountries.length > 0 ? (
                insights.topCountries.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400">#{index + 1}</span>
                      <span className="font-medium">{item.country}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold">{item.visits}</span>
                      <span className="text-gray-400 text-sm ml-2">
                        ({formatPercentage(item.percentage)})
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No data available</p>
              )}
            </div>
          </div>

          {/* Top Cities */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Top Cities</h2>
            <div className="space-y-3">
              {insights.topCities.length > 0 ? (
                insights.topCities.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400">#{index + 1}</span>
                      <div>
                        <span className="font-medium">{item.city}</span>
                        <span className="text-gray-400 text-sm ml-2">{item.country}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-bold">{item.visits}</span>
                      <span className="text-gray-400 text-sm ml-2">
                        ({formatPercentage(item.percentage)})
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No data available</p>
              )}
            </div>
          </div>

          {/* Top Pages */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Top Pages</h2>
            <div className="space-y-3">
              {insights.topPages.length > 0 ? (
                insights.topPages.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400">#{index + 1}</span>
                      <span className="font-medium font-mono text-sm">{item.page}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold">{item.visits}</span>
                      <span className="text-gray-400 text-sm ml-2">
                        ({formatPercentage(item.percentage)})
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No data available</p>
              )}
            </div>
          </div>

          {/* Recent Visits */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Recent Visits</h2>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {insights.recentVisits.length > 0 ? (
                insights.recentVisits.map((visit) => (
                  <div key={visit.id} className="text-sm border-b border-gray-700 pb-2">
                    <div className="flex justify-between mb-1">
                      <span className="font-mono text-xs">{visit.page}</span>
                      <span className="text-gray-400 text-xs">
                        {formatDate(visit.timestamp)}
                      </span>
                    </div>
                    <div className="text-gray-400 text-xs">
                      {visit.city && `${visit.city}, `}
                      {visit.country || 'Unknown Location'}
                      {visit.referrer && visit.referrer !== 'direct' && (
                        <span className="ml-2">• From: {visit.referrer}</span>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No recent visits</p>
              )}
            </div>
          </div>
        </div>

        {/* Refresh Button */}
        <div className="mt-8 text-center">
          <button
            onClick={fetchInsights}
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Refresh Data
          </button>
        </div>
      </div>
    </div>
  );
}

