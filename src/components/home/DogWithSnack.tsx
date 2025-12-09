'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ImageWithFallback } from '../ui/ImageWithFallback';

export default function DogWithSnack() {
  const [isHappy, setIsHappy] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [hasDragged, setHasDragged] = useState(false);
  const [dragStartPosition, setDragStartPosition] = useState({ x: 0, y: 0 });
  const [proximity, setProximity] = useState(9999);
  const [mounted, setMounted] = useState(false);
  const dogRef = useRef<HTMLDivElement>(null);
  const snackRef = useRef<HTMLDivElement>(null);

  // Only set mounted on client to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setDragPosition({ x: e.clientX, y: e.clientY });
        const moveDistance = Math.sqrt(
          Math.pow(e.clientX - dragStartPosition.x, 2) + 
          Math.pow(e.clientY - dragStartPosition.y, 2)
        );
        if (moveDistance > 10) {
          setHasDragged(true);
        }
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (isDragging) {
        setIsDragging(false);
        
        if (hasDragged && dogRef.current) {
          const dogRect = dogRef.current.getBoundingClientRect();
          const dogCenterX = dogRect.left + dogRect.width / 2;
          const dogCenterY = dogRect.top + dogRect.height / 2;
          
          const distance = Math.sqrt(
            Math.pow(e.clientX - dogCenterX, 2) + 
            Math.pow(e.clientY - dogCenterY, 2)
          );
          
          if (distance < 150) {
            setIsHappy(true);
          }
        }
        
        setHasDragged(false);
      }
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, hasDragged, dragStartPosition]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setHasDragged(false);
    setDragStartPosition({ x: e.clientX, y: e.clientY });
    setDragPosition({ x: e.clientX, y: e.clientY });
  };

  const handleDragStart = (e: React.DragEvent) => {
    // Prevent default HTML5 drag
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center gap-24 md:gap-32 lg:gap-40 mt-0 relative" style={{ minHeight: '150px' }}>
      {/* Dog Image */}
      <motion.div
        ref={dogRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: isHappy ? [1, 1.15, 1] : 1,
          rotate: !isHappy && proximity < 160 ? -4 : 0,
          y: !isHappy && proximity < 160 ? -6 : 0,
        }}
        transition={{ 
          duration: 0.5, 
          delay: 0.3,
          scale: isHappy ? { duration: 0.4, repeat: 2, ease: "easeInOut" } : {},
          rotate: { type: 'spring', stiffness: 200, damping: 18 },
          y: { type: 'spring', stiffness: 200, damping: 18 },
        }}
        className="relative"
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
          e.dataTransfer.dropEffect = 'move';
        }}
        onDrop={(e) => {
          e.preventDefault();
          e.stopPropagation();
          
          // Only trigger if we actually dragged
          if (!hasDragged) {
            return;
          }
          
          // Use the drop event to trigger the check
          if (dogRef.current) {
            const dogRect = dogRef.current.getBoundingClientRect();
            const dogCenterX = dogRect.left + dogRect.width / 2;
            const dogCenterY = dogRect.top + dogRect.height / 2;
            
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            const distance = Math.sqrt(
              Math.pow(mouseX - dogCenterX, 2) + 
              Math.pow(mouseY - dogCenterY, 2)
            );
            
            if (distance < 150) {
              setIsHappy(true);
            }
          }
        }}
      >
        <div className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] translate-y-1">
          <ImageWithFallback
            src={isHappy ? "/assets/images/happydog.png" : "/assets/images/dog.png"}
            alt={isHappy ? "Happy Dog" : "Dog"}
            className="object-contain transition-all duration-500"
          />
        </div>
      </motion.div>

      {/* Snack Image - Draggable */}
      <AnimatePresence>
        {!isHappy && (
          <>
            {/* Actual draggable element */}
            <motion.div
              ref={snackRef}
              onMouseDown={handleMouseDown}
              draggable={false}
              className="cursor-grab active:cursor-grabbing select-none touch-none"
              style={{
                position: isDragging ? 'fixed' : 'relative',
                left: isDragging ? dragPosition.x - 30 : 'auto',
                top: isDragging ? dragPosition.y - 30 : 'auto',
                zIndex: isDragging ? 50 : 1,
              }}
              onMouseMove={(e) => {
                if (dogRef.current && isDragging) {
                  const rect = dogRef.current.getBoundingClientRect();
                  const cx = rect.left + rect.width / 2;
                  const cy = rect.top + rect.height / 2;
                  const d = Math.sqrt(Math.pow(e.clientX - cx, 2) + Math.pow(e.clientY - cy, 2));
                  setProximity(d);
                }
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.25 } }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                animate={
                  isDragging
                    ? { scale: 1.25, rotate: 15 }
                    : { 
                        scale: [1, 1.04, 1],
                        rotate: [0, -4, 0, 4, 0],
                        boxShadow: ['0 0 0px rgba(99,102,241,0)', '0 0 12px rgba(99,102,241,0.25)', '0 0 0px rgba(99,102,241,0)'],
                      }
                }
                transition={
                  isDragging
                    ? { type: 'spring', stiffness: 250, damping: 18 }
                    : { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }
                }
              >
                <div
                  className="relative w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
                  style={{
                    transform: isDragging || !mounted ? undefined : `translateY(${Math.sin(Date.now() / 400) * 1.5}px)`,
                  }}
                >
                  <ImageWithFallback
                    src="/assets/images/dogsnack.png"
                    alt="Dog Snack - Drag to feed the dog!"
                    className="object-contain"
                  />
                  {/* Soft glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-400/20 via-blue-400/15 to-purple-400/20 blur-sm scale-90" />
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Micro-copy */}
      <div className="absolute -bottom-6 text-[11px] text-foreground/60 tracking-tight">
        I also design interactions.
      </div>
    </div>
  );
}

