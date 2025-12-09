"use client";

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  baseOpacity: number;
  vx: number; // velocity x
  vy: number; // velocity y
  color: string; // particle color
}

interface Cloud {
  x: number;
  y: number;
  width: number;
  height: number;
  opacity: number;
  speed: number;
}

export default function LightBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const cloudsRef = useRef<Cloud[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Initialize particles (light sparkles)
    const initParticles = () => {
      const particles: Particle[] = [];
      const dpr = window.devicePixelRatio || 1;
      const displayWidth = canvas.width / dpr;
      const displayHeight = canvas.height / dpr;
      
      // Light particles for sparkle effect
      const numParticles = Math.floor((displayWidth * displayHeight) / 20000);
      
      const colors = [
        'rgba(99, 155, 199, 1)',   // Soft blue
        'rgba(251, 157, 91, 1)',   // Warm orange
        'rgba(216, 96, 137, 1)',   // Soft pink
        'rgba(73, 143, 216, 1)',   // Sky blue
      ];
      
      for (let i = 0; i < numParticles; i++) {
        const baseOpacity = Math.random() * 0.6 + 0.3;
        const radius = Math.random() * 1.2 + 0.4;
        const shouldMove = Math.random() < 0.15; // Only 15% of particles move
        
        let vx = 0;
        let vy = 0;
        
        if (shouldMove) {
          const speedMultiplier = 1.2 - (radius / 2.0) * 0.4;
          const angle = Math.random() * Math.PI * 2;
          const speed = (Math.random() * 0.4 + 0.2) * speedMultiplier;
          vx = Math.cos(angle) * speed;
          vy = Math.sin(angle) * speed;
        }
        
        particles.push({
          x: Math.random() * displayWidth,
          y: Math.random() * displayHeight,
          radius: radius,
          opacity: baseOpacity,
          baseOpacity: baseOpacity,
          twinkleSpeed: Math.random() * 0.02 + 0.015,
          twinkleOffset: Math.random() * Math.PI * 2,
          vx: vx,
          vy: vy,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      particlesRef.current = particles;
    };

    // Initialize clouds
    const initClouds = () => {
      const clouds: Cloud[] = [];
      const dpr = window.devicePixelRatio || 1;
      const displayWidth = canvas.width / dpr;
      const displayHeight = canvas.height / dpr;
      
      // Create 3-5 clouds
      const numClouds = 3 + Math.floor(Math.random() * 3);
      
      for (let i = 0; i < numClouds; i++) {
        clouds.push({
          x: Math.random() * displayWidth,
          y: Math.random() * (displayHeight * 0.6), // Keep clouds in upper portion
          width: 150 + Math.random() * 200,
          height: 60 + Math.random() * 80,
          opacity: 0.15 + Math.random() * 0.1,
          speed: 0.1 + Math.random() * 0.15
        });
      }
      cloudsRef.current = clouds;
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
      
      initParticles();
      initClouds();
    };

    const drawCloud = (ctx: CanvasRenderingContext2D, cloud: Cloud) => {
      ctx.save();
      ctx.globalAlpha = cloud.opacity;
      
      // Draw cloud using multiple circles for soft, fluffy appearance
      const numCircles = 5;
      for (let i = 0; i < numCircles; i++) {
        const offsetX = (i - 2) * (cloud.width / 4);
        const offsetY = (Math.random() - 0.5) * (cloud.height / 3);
        const circleRadius = cloud.height / 2 + Math.random() * (cloud.height / 3);
        
        const gradient = ctx.createRadialGradient(
          cloud.x + offsetX, cloud.y + offsetY, 0,
          cloud.x + offsetX, cloud.y + offsetY, circleRadius
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.4)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cloud.x + offsetX, cloud.y + offsetY, circleRadius, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.restore();
    };

    const draw = () => {
      if (!ctx || !canvas) return;

      // Get the display size (CSS pixels)
      const displayWidth = canvas.width / (window.devicePixelRatio || 1);
      const displayHeight = canvas.height / (window.devicePixelRatio || 1);

      // Clear canvas
      ctx.clearRect(0, 0, displayWidth, displayHeight);

      const time = Date.now() * 0.001;

      // Update and draw clouds
      cloudsRef.current.forEach(cloud => {
        cloud.x += cloud.speed;
        
        // Wrap around edges
        if (cloud.x > displayWidth + cloud.width) {
          cloud.x = -cloud.width;
          cloud.y = Math.random() * (displayHeight * 0.6);
        }
        
        drawCloud(ctx, cloud);
      });

      // Draw particles with animation
      particlesRef.current.forEach(particle => {
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = displayWidth;
        if (particle.x > displayWidth) particle.x = 0;
        if (particle.y < 0) particle.y = displayHeight;
        if (particle.y > displayHeight) particle.y = 0;

        // Enhanced twinkling effect
        const twinkle = (Math.sin(time * particle.twinkleSpeed + particle.twinkleOffset) + 1) / 2;
        const opacity = particle.baseOpacity * (0.5 + twinkle * 0.5);

        // Draw particle with glow
        const glowRadius = particle.radius * 3;
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, glowRadius
        );
        gradient.addColorStop(0, particle.color.replace('1)', `${opacity * 0.6})`));
        gradient.addColorStop(0.4, particle.color.replace('1)', `${opacity * 0.3})`));
        gradient.addColorStop(0.7, particle.color.replace('1)', `${opacity * 0.1})`));
        gradient.addColorStop(1, particle.color.replace('1)', '0)'));
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Draw bright core
        ctx.fillStyle = particle.color.replace('1)', `${Math.min(opacity * 1.5, 1)})`);
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
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
      {/* White gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, #ffffff 0%, #fafafa 40%, #f5f5f5 80%, #f0f0f0 100%)'
        }}
      />
      
      {/* Animated particles and clouds canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Soft glow at the bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[35%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 150% 100% at center bottom, rgba(255, 255, 255, 0.6) 0%, rgba(250, 250, 250, 0.3) 40%, transparent 80%)',
          filter: 'blur(50px)'
        }}
      />
      
      {/* Additional subtle glow layers */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[25%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 120% 70% at center bottom, rgba(255, 255, 255, 0.4) 0%, transparent 60%)',
          filter: 'blur(30px)'
        }}
      />
    </div>
  );
}

