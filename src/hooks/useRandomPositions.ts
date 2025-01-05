import { useEffect, useState, useRef } from 'react';

interface Position {
  x: number;
  y: number;
}

export function useRandomPositions(count: number) {
  const [isClient, setIsClient] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const positionsRef = useRef<Position[]>([]);

  useEffect(() => {
    setIsClient(true);
    
    // Generate positions only once on client-side
    if (positionsRef.current.length === 0) {
      const defaultWidth = typeof window !== 'undefined' ? window.innerWidth : 1000;
      const defaultHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
      
      positionsRef.current = Array.from({ length: count }).map(() => ({
        x: Math.random() * defaultWidth,
        y: Math.random() * defaultHeight
      }));
    }

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [count]);

  return {
    isClient,
    windowSize,
    positions: positionsRef.current
  };
} 