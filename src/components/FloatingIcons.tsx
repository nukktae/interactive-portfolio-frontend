"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { techStack, TechStackItem } from './TechStack3D';

export default function FloatingIcons() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const icons = container.children;
    const positions: { x: number; y: number }[] = [];

    // Initialize random positions
    for (let i = 0; i < icons.length; i++) {
      positions.push({
        x: Math.random() * (container.offsetWidth - 50),
        y: Math.random() * (container.offsetHeight - 50)
      });
    }

    // Animate icons
    const animate = () => {
      for (let i = 0; i < icons.length; i++) {
        const icon = icons[i] as HTMLElement;
        
        // Update positions with slight random movement
        positions[i].x += (Math.random() - 0.5) * 2;
        positions[i].y += (Math.random() - 0.5) * 2;

        // Keep icons within container bounds
        positions[i].x = Math.max(0, Math.min(positions[i].x, container.offsetWidth - 50));
        positions[i].y = Math.max(0, Math.min(positions[i].y, container.offsetHeight - 50));

        // Apply new position
        icon.style.transform = `translate(${positions[i].x}px, ${positions[i].y}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {techStack.map((tech: TechStackItem, index: number) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.2
          }}
        >
          <tech.Icon 
            className="w-8 h-8 text-gray-600/20"
            style={{ color: `${tech.color}20` }}
          />
        </motion.div>
      ))}
    </div>
  );
} 