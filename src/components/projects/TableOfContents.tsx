"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TableOfContentsItem {
  id: string;
  label: string;
  level?: number;
}

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const asideRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Debug: Log component mount
    console.log('[TableOfContents] Component mounted');
    
    // Debug: Check sidebar element positioning
    const checkPositioning = () => {
      if (asideRef.current) {
        const aside = asideRef.current;
        const computedStyle = window.getComputedStyle(aside);
        const rect = aside.getBoundingClientRect();
        
        // Check entire parent chain
        let current = aside.parentElement;
        const parentChain = [];
        while (current && parentChain.length < 5) {
          const parentStyle = window.getComputedStyle(current);
          const parentRect = current.getBoundingClientRect();
          parentChain.push({
            tag: current.tagName,
            className: current.className,
            id: current.id,
            position: parentStyle.position,
            display: parentStyle.display,
            overflow: parentStyle.overflow,
            overflowY: parentStyle.overflowY,
            height: parentStyle.height,
            maxHeight: parentStyle.maxHeight,
            rect: {
              top: parentRect.top,
              left: parentRect.left,
              width: parentRect.width,
              height: parentRect.height
            }
          });
          current = current.parentElement;
        }
        
        console.log('[TableOfContents] Sidebar positioning:', {
          aside: {
            position: computedStyle.position,
            top: computedStyle.top,
            left: computedStyle.left,
            right: computedStyle.right,
            bottom: computedStyle.bottom,
            transform: computedStyle.transform,
            display: computedStyle.display,
            rect: {
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height,
              bottom: rect.bottom
            },
            offsetTop: aside.offsetTop,
            offsetParent: aside.offsetParent?.tagName
          },
          parentChain: parentChain,
          scrollY: window.scrollY,
          pageYOffset: window.pageYOffset,
          windowHeight: window.innerHeight
        });
      }
    };

    // Initial check
    setTimeout(checkPositioning, 100);
    
    // Check on scroll
    const handleScroll = () => {
      checkPositioning();
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check on resize
    window.addEventListener('resize', checkPositioning, { passive: true });
    // Create intersection observer to track which section is in view
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find entries that are intersecting
        const intersectingEntries = entries.filter((entry) => entry.isIntersecting);
        
        if (intersectingEntries.length > 0) {
          // Get the entry closest to the top of the viewport
          const sortedEntries = [...intersectingEntries].sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          
          // Use the entry that's closest to the top but still visible
          const topEntry = sortedEntries[0];
          if (topEntry.boundingClientRect.top <= 150) {
            setActiveId(topEntry.target.id);
          }
        } else {
          // If no entries are intersecting, find the one that's just above the viewport
          const allEntries = entries.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          
          // Find the last entry that's above the viewport
          for (let i = allEntries.length - 1; i >= 0; i--) {
            const entry = allEntries[i];
            if (entry.boundingClientRect.top < 150) {
              setActiveId(entry.target.id);
              break;
            }
          }
        }
      },
      {
        rootMargin: '-100px 0px -60% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    // Observe all sections
    const elements: HTMLElement[] = [];
    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        elements.push(element);
        observerRef.current?.observe(element);
      }
    });

    // Set initial active section based on scroll position
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 150; // Account for offset
      
      for (let i = elements.length - 1; i >= 0; i--) {
        const element = elements[i];
        const elementTop = element.offsetTop;
        
        if (scrollPosition >= elementTop) {
          setActiveId(element.id);
          break;
        }
      }
    };

    // Initial check
    updateActiveSection();

    // Also listen to scroll events for better responsiveness
    window.addEventListener('scroll', updateActiveSection, { passive: true });

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkPositioning);
    };
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Update active state immediately for better UX
      setActiveId(id);
    }
  };

  return (
    <aside ref={asideRef} className="hidden lg:block relative">
      <div ref={containerRef} className="relative">
        <h3 className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-4 px-3">
          On this page
        </h3>
        <nav className="space-y-0.5">
          {items.map((item) => {
            const isActive = activeId === item.id;
            const level = item.level || 0;
            const indent = level * 16;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`
                  group relative block px-3 py-2 rounded-md text-sm
                  transition-all duration-150 ease-out
                  ${isActive 
                    ? 'text-foreground font-semibold' 
                    : 'text-foreground/60 hover:text-foreground/90'
                  }
                `}
                style={{ paddingLeft: `${12 + indent}px` }}
              >
                {/* Active indicator bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-5 bg-foreground rounded-r-full"
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -6 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35
                    }}
                  />
                )}
                
                {/* Hover background - subtle */}
                <motion.div
                  className={`
                    absolute inset-0 rounded-md transition-opacity duration-150
                    ${isActive 
                      ? 'bg-foreground/8 opacity-100' 
                      : 'bg-foreground/4 opacity-0 group-hover:opacity-100'
                    }
                  `}
                  initial={false}
                />
                
                {/* Text content */}
                <span className="relative z-10 block leading-snug">
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

