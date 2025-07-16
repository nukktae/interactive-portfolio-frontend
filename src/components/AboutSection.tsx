'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32" ref={ref}>
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-32 items-center">
          {/* Left Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 md:space-y-12"
          >
            <div className="text-xs sm:text-sm font-bold tracking-widest text-gray-500 uppercase">
              ABOUT ME
            </div>

            <div className="space-y-6 md:space-y-8">
              <div>
                <div className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-2">2+</div>
                <div className="text-xs sm:text-sm font-bold tracking-widest text-gray-500 uppercase">YEARS EXPERIENCE</div>
              </div>
              
              <div>
                <div className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-2">2+</div>
                <div className="text-xs sm:text-sm font-bold tracking-widest text-gray-500 uppercase">COMPANIES WORKED WITH</div>
              </div>
              
              <div>
                <div className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-2">10+</div>
                <div className="text-xs sm:text-sm font-bold tracking-widest text-gray-500 uppercase">PROJECTS COMPLETED</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in creating seamless digital experiences. 
                My journey spans across various technologies and industries, always focused on delivering 
                innovative solutions.
              </p>
              
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                From designing intuitive user interfaces to architecting robust backend systems, 
                I believe in the power of technology to solve real-world problems and create 
                meaningful connections.
              </p>
            </div>

            <motion.button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-black text-white 
                         px-6 py-3 md:px-8 md:py-4 
                         text-xs md:text-sm font-bold uppercase tracking-wider 
                         hover:bg-yellow-400 hover:text-black 
                         transition-all duration-300 
                         flex items-center gap-3
                         touch-manipulation"
              whileHover={{ x: 10 }}
            >
              VIEW MY WORK
              <motion.span
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 