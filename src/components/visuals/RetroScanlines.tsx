export const RetroScanlines = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.03] to-transparent animate-scan" />
      <div className="absolute inset-0" 
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 1px,
            rgba(0, 255, 255, 0.03) 2px,
            rgba(0, 255, 255, 0.03) 3px
          )`,
          backgroundSize: '100% 3px',
        }}
      />
    </div>
  );
}; 