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

// Global atomic lock to prevent double initialization (Strict Mode protection)
// Only one instance can acquire this lock
let mapInitializationLock = false;

// Inner map component that only mounts once
const MapInner = memo(function MapInner({ visits }: { visits: VisitData[] }) {
  // #region agent log
  fetch('http://127.0.0.1:7245/ingest/591a3ef1-a9a9-4563-945c-e095f1502c7d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'VisitorMap.tsx:80',message:'MapInner render start',data:{visitsCount:visits.length,lockAcquired:mapInitializationLock},timestamp:Date.now(),sessionId:'debug-session',runId:'run4',hypothesisId:'A,B'})}).catch(()=>{});
  // #endregion
  const containerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const acquiredLockRef = useRef<boolean | null>(null);
  
  // Check lock synchronously during render (before any state updates)
  // This ensures only one instance can acquire the lock
  if (acquiredLockRef.current === null) {
    // First time checking - try to acquire lock
    if (!mapInitializationLock) {
      // Acquire lock atomically
      mapInitializationLock = true;
      acquiredLockRef.current = true;
      // #region agent log
      fetch('http://127.0.0.1:7245/ingest/591a3ef1-a9a9-4563-945c-e095f1502c7d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'VisitorMap.tsx:91',message:'Lock acquired synchronously, will render map',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run5',hypothesisId:'A,B'})}).catch(()=>{});
      // #endregion
    } else {
      acquiredLockRef.current = false;
      // #region agent log
      fetch('http://127.0.0.1:7245/ingest/591a3ef1-a9a9-4563-945c-e095f1502c7d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'VisitorMap.tsx:97',message:'Lock already acquired, skipping render',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run5',hypothesisId:'A,B'})}).catch(()=>{});
      // #endregion
    }
  }
  
  const shouldRender = acquiredLockRef.current === true;
  const [mapKey] = useState(() => {
    const key = `map-${Date.now()}-${Math.random()}`;
    // #region agent log
    fetch('http://127.0.0.1:7245/ingest/591a3ef1-a9a9-4563-945c-e095f1502c7d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'VisitorMap.tsx:99',message:'mapKey generated',data:{mapKey:key},timestamp:Date.now(),sessionId:'debug-session',runId:'run4',hypothesisId:'E'})}).catch(()=>{});
    // #endregion
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
        // #region agent log
        fetch('http://127.0.0.1:7245/ingest/591a3ef1-a9a9-4563-945c-e095f1502c7d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'VisitorMap.tsx:115',message:'Container has map in useEffect, releasing lock',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run5',hypothesisId:'A,B'})}).catch(()=>{});
        // #endregion
        mapInitializationLock = false; // Release lock
        // Note: We can't change shouldRender here as it's a const, but the component won't re-render MapContainer
      }
    }
  }, [shouldRender]);

  // #region agent log
  fetch('http://127.0.0.1:7245/ingest/591a3ef1-a9a9-4563-945c-e095f1502c7d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'VisitorMap.tsx:103',message:'Before render check',data:{shouldRender:shouldRender,acquiredLock:acquiredLockRef.current,mapInitializationLock:mapInitializationLock,containerRefExists:!!containerRef.current,containerHasMap:containerRef.current ? !!(containerRef.current as any)?._leaflet_id : false},timestamp:Date.now(),sessionId:'debug-session',runId:'run5',hypothesisId:'A,B,D'})}).catch(()=>{});
  // #endregion

  if (!shouldRender) {
    // #region agent log
    fetch('http://127.0.0.1:7245/ingest/591a3ef1-a9a9-4563-945c-e095f1502c7d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'VisitorMap.tsx:124',message:'Rendering placeholder (shouldRender=false)',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run5',hypothesisId:'A,B'})}).catch(()=>{});
    // #endregion
    return <div ref={containerRef} style={{ height: '100%', width: '100%', backgroundColor: '#000' }} />;
  }

  // #region agent log
  fetch('http://127.0.0.1:7245/ingest/591a3ef1-a9a9-4563-945c-e095f1502c7d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'VisitorMap.tsx:130',message:'Rendering MapContainer',data:{mapKey:mapKey,containerRefExists:!!containerRef.current,containerHasMap:containerRef.current ? !!(containerRef.current as any)?._leaflet_id : false},timestamp:Date.now(),sessionId:'debug-session',runId:'run5',hypothesisId:'A,B,D,E'})}).catch(()=>{});
  // #endregion

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
          // #region agent log
          fetch('http://127.0.0.1:7245/ingest/591a3ef1-a9a9-4563-945c-e095f1502c7d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'VisitorMap.tsx:139',message:'MapContainer ref callback',data:{mapExists:!!map,mapInstanceRefExists:!!mapInstanceRef.current,containerHasMap:containerRef.current ? !!(containerRef.current as any)?._leaflet_id : false},timestamp:Date.now(),sessionId:'debug-session',runId:'run5',hypothesisId:'E'})}).catch(()=>{});
          // #endregion
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
  // #region agent log
  fetch('http://127.0.0.1:7245/ingest/591a3ef1-a9a9-4563-945c-e095f1502c7d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'VisitorMap.tsx:210',message:'MapInner memo comparison',data:{prevLength:prevProps.visits.length,nextLength:nextProps.visits.length,shouldSkip:prevProps.visits.length === nextProps.visits.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
  // #endregion
  // Only re-render if visits length changes significantly
  // This prevents unnecessary re-renders that cause map re-initialization
  return prevProps.visits.length === nextProps.visits.length;
});

export default function VisitorMap({ visits }: VisitorMapProps) {
  // #region agent log
  fetch('http://127.0.0.1:7245/ingest/591a3ef1-a9a9-4563-945c-e095f1502c7d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'VisitorMap.tsx:216',message:'VisitorMap render',data:{visitsCount:visits.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
  // #endregion
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7245/ingest/591a3ef1-a9a9-4563-945c-e095f1502c7d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'VisitorMap.tsx:220',message:'Setting mounted=true',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
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
    <div className="w-full h-full rounded-lg overflow-hidden" key="visitor-map-wrapper">
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



