"use client";

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { techStack, TechStackItem } from './TechStack3D';

export function FloatingIcons() {
  const [isClient, setIsClient] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const positionsRef = useRef<Array<{ x: number, y: number }>>([]);

  useEffect(() => {
    setIsClient(true);
    
    // Generate consistent random positions
    if (positionsRef.current.length === 0) {
      positionsRef.current = techStack.map(() => ({
        x: Math.random() * (window.innerWidth || 1000),
        y: Math.random() * (window.innerHeight || 800)
      }));
    }

    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Handle resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isClient) {
    return null; // Return null on server-side
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {techStack.map((tech: TechStackItem, index: number) => {
        const initialPosition = positionsRef.current[index] || { x: 0, y: 0 };
        
        return (
          <motion.div
            key={index}
            className="absolute"
            initial={{ 
              x: initialPosition.x,
              y: initialPosition.y,
              opacity: 0 
            }}
            animate={{
              x: [
                initialPosition.x,
                initialPosition.x + 100,
                initialPosition.x
              ],
              y: [
                initialPosition.y,
                initialPosition.y + 100,
                initialPosition.y
              ],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <tech.icon 
              className="w-8 h-8 text-gray-600/20"
              style={{ color: `${tech.color}20` }}
            />
          </motion.div>
        );
      })}
    </div>
  );
} 