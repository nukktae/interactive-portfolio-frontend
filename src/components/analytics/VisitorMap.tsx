'use client';

import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { VisitData } from '@/types/analytics';

// Fix for default marker icons in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface VisitorMapProps {
  visits: VisitData[];
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

export default function VisitorMap({ visits }: VisitorMapProps) {
  const mapRef = useRef<L.Map | null>(null);

  // Filter visits with valid coordinates
  const visitsWithCoords = visits.filter(
    v => v.latitude != null && v.longitude != null && 
    !isNaN(v.latitude) && !isNaN(v.longitude)
  );

  // Calculate center and bounds
  const getCenterAndBounds = () => {
    if (visitsWithCoords.length === 0) {
      return { center: [0, 0] as [number, number], bounds: null };
    }

    const lats = visitsWithCoords.map(v => v.latitude!);
    const lngs = visitsWithCoords.map(v => v.longitude!);
    
    const centerLat = (Math.min(...lats) + Math.max(...lats)) / 2;
    const centerLng = (Math.min(...lngs) + Math.max(...lngs)) / 2;
    
    const bounds = L.latLngBounds(
      [Math.min(...lats), Math.min(...lngs)],
      [Math.max(...lats), Math.max(...lngs)]
    );

    return {
      center: [centerLat, centerLng] as [number, number],
      bounds
    };
  };

  const { center, bounds } = getCenterAndBounds();

  useEffect(() => {
    if (mapRef.current && bounds && visitsWithCoords.length > 1) {
      mapRef.current.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [visitsWithCoords.length, bounds]);

  if (visitsWithCoords.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black/20 rounded-lg">
        <p className="text-white/40 text-sm">No location data available</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <MapContainer
        center={center}
        zoom={visitsWithCoords.length === 1 ? 3 : 2}
        style={{ height: '100%', width: '100%', backgroundColor: '#000' }}
        zoomControl={true}
        className="z-0"
        ref={mapRef}
      >
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
                <p className="font-semibold">{visit.city || 'Unknown'}, {visit.country || 'Unknown'}</p>
                <p className="text-gray-600">{new Date(visit.timestamp).toLocaleString()}</p>
                <p className="text-gray-500">{visit.page}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
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

