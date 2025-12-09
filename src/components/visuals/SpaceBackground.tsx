"use client";

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  baseOpacity: number;
  vx: number; // velocity x
  vy: number; // velocity y
}

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Initialize stars
    const initStars = () => {
      const stars: Star[] = [];
      const dpr = window.devicePixelRatio || 1;
      const displayWidth = canvas.width / dpr;
      const displayHeight = canvas.height / dpr;
      
      // Fewer stars, more spread out (increased divisor for more spacing)
      const numStars = Math.floor((displayWidth * displayHeight) / 15000);
      
      for (let i = 0; i < numStars; i++) {
        const baseOpacity = Math.random() * 0.8 + 0.2;
        const radius = Math.random() * 1.5 + 0.3; // Smaller, more refined stars
        const shouldMove = Math.random() < 0.2; // Only 20% of stars move
        
        let vx = 0;
        let vy = 0;
        
        if (shouldMove) {
          // Larger stars move slower, smaller stars move faster (parallax effect)
          const speedMultiplier = 1.5 - (radius / 2.5) * 0.5; // Range: 0.7 to 1.5
          const angle = Math.random() * Math.PI * 2; // Random direction
          const speed = (Math.random() * 0.5 + 0.3) * speedMultiplier; // Base speed 0.3-0.8
          vx = Math.cos(angle) * speed;
          vy = Math.sin(angle) * speed;
        }
        
        stars.push({
          x: Math.random() * displayWidth,
          y: Math.random() * displayHeight,
          radius: radius,
          opacity: baseOpacity,
          baseOpacity: baseOpacity,
          twinkleSpeed: Math.random() * 0.03 + 0.02, // Faster twinkling
          twinkleOffset: Math.random() * Math.PI * 2,
          vx: vx, // Horizontal movement (0 for stationary stars)
          vy: vy  // Vertical movement (0 for stationary stars)
        });
      }
      starsRef.current = stars;
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      // Set actual size in memory (scaled for device pixel ratio)
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      // Scale context to account for device pixel ratio
      ctx.scale(dpr, dpr);
      
      // Set display size (CSS pixels)
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      
      initStars();
    };

    const draw = () => {
      if (!ctx || !canvas) return;

      // Get the display size (CSS pixels)
      const displayWidth = canvas.width / (window.devicePixelRatio || 1);
      const displayHeight = canvas.height / (window.devicePixelRatio || 1);

      // Clear canvas
      ctx.clearRect(0, 0, displayWidth, displayHeight);

      // Draw stars with animation
      const time = Date.now() * 0.001;
      starsRef.current.forEach(star => {
        // Update star position (subtle movement)
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around edges (using display dimensions)
        const displayWidth = canvas.width / (window.devicePixelRatio || 1);
        const displayHeight = canvas.height / (window.devicePixelRatio || 1);
        
        if (star.x < 0) star.x = displayWidth;
        if (star.x > displayWidth) star.x = 0;
        if (star.y < 0) star.y = displayHeight;
        if (star.y > displayHeight) star.y = 0;

        // Enhanced twinkling effect - more dramatic
        const twinkle = (Math.sin(time * star.twinkleSpeed + star.twinkleOffset) + 1) / 2;
        const opacity = star.baseOpacity * (0.4 + twinkle * 0.6); // Opacity varies between 40% and 100%

        // Draw star with glow (refined glow radius)
        const glowRadius = star.radius * 4;
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, glowRadius
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.8})`);
        gradient.addColorStop(0.3, `rgba(255, 255, 255, ${opacity * 0.4})`);
        gradient.addColorStop(0.6, `rgba(255, 255, 255, ${opacity * 0.1})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Draw bright core
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(opacity * 1.2, 1)})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Dark space gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, #0a0e1f 0%, #050714 50%, #020408 100%)'
        }}
      />
      
      {/* Animated stars canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Glowing horizon arc at the bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[40%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 150% 100% at center bottom, rgba(255, 255, 255, 0.15) 0%, rgba(173, 216, 230, 0.1) 30%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />
      
      {/* Additional subtle glow layers */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[30%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 120% 80% at center bottom, rgba(255, 255, 255, 0.08) 0%, transparent 60%)',
          filter: 'blur(40px)'
        }}
      />
    </div>
  );
}

