"use client";

import { useEffect, useRef } from 'react';

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef<{ x: number; y: number; isClicked: boolean }>({ x: 0, y: 0, isClicked: false });
  const rippleRef = useRef<Ripple[]>([]);
  const animationFrameRef = useRef<number>();
  const brushRef = useRef<{ x: number; y: number; radius: number; color: string; opacity: number }[]>([]);

  interface Point {
    x: number;
    y: number;
    vx: number;
    vy: number;
    baseY: number;
    color: string;
  }

  interface Ripple {
    x: number;
    y: number;
    radius: number;
    maxRadius: number;
    opacity: number;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const colors = [
      'rgba(73, 143, 216, 0.3)',  // #498FD8 (havelock)
      'rgba(216, 96, 137, 0.3)',  // #D86089 (cranberry)
      'rgba(251, 157, 91, 0.3)'   // #FB9D5B (tan)
    ];

    const initPoints = () => {
      const points: Point[] = [];
      const numPoints = Math.floor((canvas.width * canvas.height) / 12000);
      
      for (let i = 0; i < numPoints; i++) {
        const y = Math.random() * canvas.height;
        points.push({
          x: Math.random() * canvas.width,
          y: y,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      pointsRef.current = points;
    };

    const createRipple = (x: number, y: number) => {
      rippleRef.current.push({
        x,
        y,
        radius: 0,
        maxRadius: 100,
        opacity: 0.5
      });
    };

    const createBrushStroke = (x: number, y: number) => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      brushRef.current.push({
        x,
        y,
        radius: 0,
        color,
        opacity: 0.5
      });
    };

    const drawWeb = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw brush strokes
      brushRef.current = brushRef.current.filter(brush => {
        brush.radius += 3;
        brush.opacity *= 0.95;

        const gradient = ctx.createRadialGradient(
          brush.x, brush.y, 0,
          brush.x, brush.y, brush.radius
        );
        gradient.addColorStop(0, brush.color.replace('0.3', `${brush.opacity}`));
        gradient.addColorStop(1, brush.color.replace('0.3', '0'));

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(brush.x, brush.y, brush.radius, 0, Math.PI * 2);
        ctx.fill();

        return brush.opacity > 0.01;
      });

      // Draw and update ripples
      rippleRef.current = rippleRef.current.filter(ripple => {
        ripple.radius += 4;
        ripple.opacity *= 0.95;

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(99, 155, 199, ${ripple.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        return ripple.opacity > 0.01;
      });

      const points = pointsRef.current;
      const mousePoint = mouseRef.current;
      const maxDistance = 180;
      const mouseRadius = mousePoint.isClicked ? 300 : 200;
      const force = mousePoint.isClicked ? 0.4 : 0.2;

      points.forEach(point => {
        const dx = mousePoint.x - point.x;
        const dy = mousePoint.y - point.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseRadius) {
          const pushForce = (1 - dist / mouseRadius) * force;
          point.vx -= dx * pushForce;
          point.vy -= dy * pushForce;
        }

        // Update position
        point.x += point.vx;
        point.y += point.vy;

        // Add subtle floating effect
        point.y += Math.sin(Date.now() * 0.001 + point.x * 0.01) * 0.1;

        // Boundary check with smooth bounce
        if (point.x < 0 || point.x > canvas.width) {
          point.vx *= -0.8;
        }
        if (point.y < 0 || point.y > canvas.height) {
          point.vy *= -0.8;
        }

        // Velocity dampening
        point.vx *= 0.99;
        point.vy *= 0.99;
      });

      // Draw connections
      points.forEach((point, i) => {
        points.slice(i + 1).forEach(otherPoint => {
          const dx = point.x - otherPoint.x;
          const dy = point.y - otherPoint.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.5;
            const gradient = ctx.createLinearGradient(
              point.x, point.y, 
              otherPoint.x, otherPoint.y
            );
            
            gradient.addColorStop(0, point.color.replace('0.3', `${opacity}`));
            gradient.addColorStop(1, otherPoint.color.replace('0.3', `${opacity}`));
            
            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = opacity * 2;
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.stroke();
          }
        });
      });

      // Draw points with glow
      points.forEach(point => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, 4
        );
        gradient.addColorStop(0, point.color.replace('0.3', '0.6'));
        gradient.addColorStop(1, point.color.replace('0.3', '0'));
        ctx.fillStyle = gradient;
        ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(drawWeb);
    };

    const handleMouseDown = (e: MouseEvent) => {
      mouseRef.current.isClicked = true;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      createBrushStroke(x, y);
    };

    const handleMouseUp = () => {
      mouseRef.current.isClicked = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      mouseRef.current = {
        x,
        y,
        isClicked: mouseRef.current.isClicked
      };

      // Create brush strokes while dragging
      if (mouseRef.current.isClicked) {
        createBrushStroke(x, y);
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initPoints();
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    drawWeb();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ 
          mixBlendMode: 'multiply',
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.98) 100%)'
        }}
      />
    </div>
  );
} 