'use client';

import { useEffect, useRef, useMemo, useState, memo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { VisitData } from '@/types/analytics';

// Fix for default marker icons in Next.js
if (typeof window !== 'undefined') {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  });
}

interface VisitorMapProps {
  visits: VisitData[];
}

// Component to update map bounds when visits change
function MapUpdater({ visits }: { visits: VisitData[] }) {
  const map = useMap();
  const visitsWithCoords = visits.filter(
    v => v.latitude != null && v.longitude != null && 
    !isNaN(v.latitude) && !isNaN(v.longitude)
  );

  useEffect(() => {
    if (visitsWithCoords.length === 0) return;
    
    const lats = visitsWithCoords.map(v => v.latitude!);
    const lngs = visitsWithCoords.map(v => v.longitude!);
    
    if (visitsWithCoords.length === 1) {
      map.setView([lats[0], lngs[0]], 10);
    } else {
      const bounds = L.latLngBounds(
        [Math.min(...lats), Math.min(...lngs)],
        [Math.max(...lats), Math.max(...lngs)]
      );
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [visitsWithCoords.length, map]);

  return null;
}

// Custom glowing marker icon
function createGlowingIcon() {
  return L.divIcon({
    className: 'glowing-marker',
    html: `
      <div style="
        width: 12px;
        height: 12px;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0.4) 50%, transparent 100%);
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(59, 130, 246, 0.6), 0 0 20px rgba(59, 130, 246, 0.4);
        animation: pulse 2s ease-in-out infinite;
      "></div>
      <style>
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }
      </style>
    `,
    iconSize: [12, 12],
    iconAnchor: [6, 6],
  });
}

// Global map instance counter - only first instance renders
let mapInstanceCount = 0;

// Inner map component that only mounts once
const MapInner = memo(function MapInner({ visits }: { visits: VisitData[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const instanceIdRef = useRef<number | null>(null);
  
  // Assign instance ID on first render - only first instance (ID 0) should render
  if (instanceIdRef.current === null) {
    instanceIdRef.current = mapInstanceCount++;
  }
  
  // Only the first instance (ID 0) should render the map
  const shouldRender = instanceIdRef.current === 0;
  const [mapKey] = useState(() => {
    const key = `map-${Date.now()}-${Math.random()}`;
    return key;
  });
  
  const visitsWithCoords = useMemo(() => 
    visits.filter(
      v => v.latitude != null && v.longitude != null && 
      !isNaN(v.latitude) && !isNaN(v.longitude)
    ),
    [visits]
  );

  // Calculate initial center and zoom - only once on first render
  const { center, zoom } = useMemo(() => {
    if (visitsWithCoords.length === 0) {
      return { center: [0, 0] as [number, number], zoom: 2 };
    }

    const lats = visitsWithCoords.map(v => v.latitude!);
    const lngs = visitsWithCoords.map(v => v.longitude!);
    
    const centerLat = (Math.min(...lats) + Math.max(...lats)) / 2;
    const centerLng = (Math.min(...lngs) + Math.max(...lngs)) / 2;
    
    return {
      center: [centerLat, centerLng] as [number, number],
      zoom: visitsWithCoords.length === 1 ? 10 : 2
    };
  }, []); // Only calculate once on mount

  // Double-check after container ref is set (in case DOM already has a map)
  useEffect(() => {
    if (containerRef.current && shouldRender) {
      const hasMap = (containerRef.current as any)._leaflet_id !== undefined;
      if (hasMap) {
        // Map already exists - this shouldn't happen if instance ID logic works
      }
    }
  }, [shouldRender]);

  if (!shouldRender) {
    return <div ref={containerRef} style={{ height: '100%', width: '100%', backgroundColor: '#000' }} />;
  }

  return (
    <div ref={containerRef} style={{ height: '100%', width: '100%' }}>
      <MapContainer
        key={mapKey}
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%', backgroundColor: '#000' }}
        zoomControl={true}
        className="z-0"
        scrollWheelZoom={true}
        ref={(map) => {
          if (map) {
            mapInstanceRef.current = map;
          }
        }}
      >
        <MapUpdater visits={visitsWithCoords} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
        />
        {visitsWithCoords.map((visit) => (
          <Marker
            key={visit.id}
            position={[visit.latitude!, visit.longitude!]}
            icon={createGlowingIcon()}
          >
            <Popup>
              <div className="text-black text-xs">
                <p className="font-semibold">
                  {(() => {
                    // Format location: district, street, house number, city, country
                    const parts: string[] = [];
                    
                    // For Korean addresses, show detailed address: district street houseNumber
                    if (visit.country === 'South Korea') {
                      if (visit.district) {
                        parts.push(visit.district);
                      }
                      // Add street and house number if available (e.g., "674-5")
                      if (visit.street && visit.houseNumber) {
                        parts.push(`${visit.street} ${visit.houseNumber}`);
                      } else if (visit.houseNumber) {
                        parts.push(visit.houseNumber);
                      } else if (visit.street) {
                        parts.push(visit.street);
                      }
                      if (visit.city && !parts.includes(visit.city)) {
                        parts.push(visit.city);
                      }
                      if (visit.country) {
                        parts.push(visit.country);
                      }
                    } else {
                      // For other countries
                      if (visit.district) {
                        parts.push(visit.district);
                      }
                      if (visit.street && visit.houseNumber) {
                        parts.push(`${visit.street} ${visit.houseNumber}`);
                      } else if (visit.houseNumber) {
                        parts.push(visit.houseNumber);
                      } else if (visit.street) {
                        parts.push(visit.street);
                      }
                      if (visit.city) {
                        parts.push(visit.city);
                      }
                      if (visit.country) {
                        parts.push(visit.country);
                      }
                    }
                    
                    return parts.length > 0 ? parts.join(', ') : 'Unknown';
                  })()}
                </p>
                <p className="text-gray-600">
                  {new Date(visit.timestamp).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric'
                  })}, {new Date(visit.timestamp).toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true
                  })}
                </p>
                <p className="text-gray-500">{visit.page}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}, (prevProps, nextProps) => {
  // Only re-render if visits length changes significantly
  // This prevents unnecessary re-renders that cause map re-initialization
  return prevProps.visits.length === nextProps.visits.length;
});

export default function VisitorMap({ visits }: VisitorMapProps) {
  const [mounted, setMounted] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter visits with valid coordinates
  const visitsWithCoords = useMemo(() => 
    visits.filter(
      v => v.latitude != null && v.longitude != null && 
      !isNaN(v.latitude) && !isNaN(v.longitude)
    ),
    [visits]
  );

  // Check if wrapper already has a Leaflet map (prevents double initialization in Strict Mode)
  // Must be called before any conditional returns to follow Rules of Hooks
  useEffect(() => {
    if (wrapperRef.current) {
      const hasMap = wrapperRef.current.querySelector('.leaflet-container') !== null;
    }
  }, []);

  if (visitsWithCoords.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black/20 rounded-lg">
        <p className="text-white/40 text-sm">No location data available</p>
      </div>
    );
  }

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black/20 rounded-lg">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-white/20 border-t-white/60"></div>
      </div>
    );
  }

  return (
    <div 
      ref={wrapperRef}
      className="w-full h-full rounded-lg overflow-hidden" 
      key="visitor-map-wrapper"
    >
      <MapInner visits={visits} />
      <style jsx global>{`
        .map-tiles {
          filter: brightness(0.6) invert(1) hue-rotate(180deg) contrast(1.2);
        }
        .leaflet-container {
          background-color: #000 !important;
        }
        .leaflet-popup-content-wrapper {
          background: white;
          border-radius: 8px;
        }
        .glowing-marker {
          background: transparent !important;
          border: none !important;
        }
      `}</style>
    </div>
  );
}



