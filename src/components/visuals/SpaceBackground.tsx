"use client";

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Solid dark background */}
      <div 
        className="absolute inset-0"
        style={{
          background: '#0F0F12'
        }}
      />
    </div>
  );
}

