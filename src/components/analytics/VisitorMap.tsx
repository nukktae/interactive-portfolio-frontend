'use client';

import { useEffect, useMemo, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import type { VisitData } from '@/types/analytics';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Next.js
if (typeof window !== 'undefined') {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  });
}

// Custom dark marker icon
const createCustomIcon = (color: string = '#ffffff') => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        width: 12px;
        height: 12px;
        background-color: ${color};
        border: 2px solid #ffffff;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      "></div>
    `,
    iconSize: [12, 12],
    iconAnchor: [6, 6],
  });
};

// Component to fit map bounds to markers
function FitBounds({ positions }: { positions: [number, number][] }) {
  const map = useMap();
  
  useEffect(() => {
    if (positions.length > 0) {
      const bounds = L.latLngBounds(positions);
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 10 });
    } else {
      // Default to world view
      map.setView([20, 0], 2);
    }
  }, [map, positions]);
  
  return null;
}

interface VisitorMapProps {
  visits: VisitData[];
}

export default function VisitorMap({ visits }: VisitorMapProps) {
  const [mounted, setMounted] = useState(false);
  const [mapKey, setMapKey] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    // Only initialize once
    if (!initializedRef.current) {
      initializedRef.current = true;
      setMounted(true);
      // Generate unique key only once on mount
      setMapKey(`visitor-map-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`);
    }
    
    return () => {
      // Cleanup: remove any existing map instances from the container
      if (containerRef.current) {
        const container = containerRef.current as any;
        // Remove all Leaflet map instances
        if (container._leaflet_id) {
          delete container._leaflet_id;
        }
      }
    };
  }, []);

  // Filter visits with valid coordinates and group by location
  const markers = useMemo(() => {
    const validVisits = visits.filter(
      (visit) => visit.latitude != null && visit.longitude != null
    );

    // Group visits by location (same lat/lng) to show count
    const locationMap = new Map<string, { position: [number, number]; visits: VisitData[] }>();
    
    validVisits.forEach((visit) => {
      const key = `${visit.latitude?.toFixed(4)},${visit.longitude?.toFixed(4)}`;
      if (!locationMap.has(key)) {
        locationMap.set(key, {
          position: [visit.latitude!, visit.longitude!],
          visits: [],
        });
      }
      locationMap.get(key)!.visits.push(visit);
    });

    return Array.from(locationMap.values());
  }, [visits]);

  const positions = useMemo(
    () => markers.map((marker) => marker.position as [number, number]),
    [markers]
  );

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  const formatLocation = (visit: VisitData): string => {
    const parts: string[] = [];
    
    if (visit.district) parts.push(visit.district);
    if (visit.city && !parts.includes(visit.city)) parts.push(visit.city);
    if (visit.region && !parts.includes(visit.region)) parts.push(visit.region);
    if (visit.country) parts.push(visit.country);
    
    return parts.length > 0 ? parts.join(', ') : 'Unknown Location';
  };

  if (markers.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black/20">
        <p className="text-white/40 text-sm">No location data available</p>
      </div>
    );
  }

  // Don't render map until mounted and key is generated
  if (!mounted || !mapKey) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black/20">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-white/20 border-t-white/60"></div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <MapContainer
        key={mapKey}
        center={[20, 0]}
        zoom={2}
        style={{ height: '100%', width: '100%', zIndex: 0 }}
        zoomControl={true}
        scrollWheelZoom={true}
      >
        {/* Dark theme tile layer */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
        />
        
        {/* Alternative: Dark theme tiles (uncomment to use) */}
        {/* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        /> */}

        {/* Fit bounds to markers */}
        <FitBounds positions={positions} />

        {/* Render markers */}
        {markers.map((marker, index) => {
          const visitCount = marker.visits.length;
          const latestVisit = marker.visits.sort((a, b) => b.timestamp - a.timestamp)[0];
          const location = formatLocation(latestVisit);
          
          // Color based on visit count (more visits = brighter)
          const intensity = Math.min(visitCount / 10, 1);
          const color = `rgba(255, 255, 255, ${0.5 + intensity * 0.5})`;
          
          return (
            <Marker
              key={index}
              position={marker.position}
              icon={createCustomIcon(color)}
            >
              <Popup className="custom-popup">
                <div className="text-black text-sm space-y-1 min-w-[200px]">
                  <div className="font-semibold text-base mb-2 border-b pb-1">
                    {location}
                  </div>
                  <div className="space-y-1">
                    <div>
                      <span className="text-gray-600">Visits: </span>
                      <span className="font-medium">{visitCount}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Latest: </span>
                      <span className="font-medium">{formatDate(latestVisit.timestamp)}</span>
                    </div>
                    {latestVisit.page && (
                      <div>
                        <span className="text-gray-600">Page: </span>
                        <span className="font-mono text-xs">{latestVisit.page}</span>
                      </div>
                    )}
                    {latestVisit.ip && (
                      <div>
                        <span className="text-gray-600">IP: </span>
                        <span className="font-mono text-xs">{latestVisit.ip}</span>
                      </div>
                    )}
                  </div>
                  {marker.visits.length > 1 && (
                    <div className="mt-2 pt-2 border-t text-xs text-gray-500">
                      {marker.visits.length - 1} more visit{marker.visits.length - 1 > 1 ? 's' : ''} from this location
                    </div>
                  )}
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
      
      <style jsx global>{`
        .leaflet-container {
          background: #1a1a1a;
        }
        .leaflet-popup-content-wrapper {
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
        .leaflet-popup-tip {
          background: white;
        }
        .leaflet-control-zoom {
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          background: rgba(0, 0, 0, 0.6) !important;
        }
        .leaflet-control-zoom a {
          background-color: rgba(0, 0, 0, 0.6) !important;
          color: rgba(255, 255, 255, 0.8) !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
        }
        .leaflet-control-zoom a:hover {
          background-color: rgba(0, 0, 0, 0.8) !important;
          color: white !important;
        }
        .leaflet-bar-part {
          border-radius: 0 !important;
        }
        .map-tiles {
          filter: brightness(0.6) contrast(1.2) saturate(0.8);
        }
      `}</style>
    </div>
  );
}

