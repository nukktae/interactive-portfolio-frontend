'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section id="about" className="py-24 md:py-32 relative z-10" ref={ref}>
      <div className="px-6 md:px-12 lg:px-20 xl:px-32 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Left Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div className="text-sm font-bold tracking-widest text-foreground/60 uppercase">
              ABOUT ME
            </div>

            <div className="space-y-8">
              <div>
                <div className="text-6xl md:text-7xl font-black text-foreground mb-2">3+</div>
                <div className="text-sm font-bold tracking-widest text-foreground/60 uppercase">YEARS EXPERIENCE</div>
              </div>
              
              <div>
                <div className="text-6xl md:text-7xl font-black text-foreground mb-2">2+</div>
                <div className="text-sm font-bold tracking-widest text-foreground/60 uppercase">COMPANIES WORKED WITH</div>
              </div>
              
              <div>
                <div className="text-6xl md:text-7xl font-black text-foreground mb-2">20+</div>
                <div className="text-sm font-bold tracking-widest text-foreground/60 uppercase">PROJECTS COMPLETED</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-black leading-tight text-foreground">
              FROM BACKEND TO
              <span className="relative ml-4">
                DESIGN
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-2 bg-foreground/30"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  style={{ transformOrigin: 'left' }}
                />
              </span>
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
              <p>
                Started in backend development, discovered my passion for creating beautiful, user-centered experiences.
              </p>
              
              <p>
                Now I bridge design and development to deliver exceptional digital solutions.
              </p>
            </div>

            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="bg-foreground/10 dark:bg-white/10 backdrop-blur-sm border border-border text-foreground px-6 py-4 inline-block rounded-lg">
                <div className="text-sm font-bold tracking-widest uppercase text-foreground/60">CURRENTLY</div>
                <div className="font-bold text-foreground">Full Stack Developer at Handiers Inc.</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 