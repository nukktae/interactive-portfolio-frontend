'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import DogWithSnack from './DogWithSnack';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 xl:px-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto w-full text-center relative z-10">
        {/* Upcoming Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 relative"
        >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-2 text-sm text-foreground relative z-10 cursor-pointer"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
            {/* Pulsing glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 blur-xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
              }}
            />
            
            <span className="relative z-10 font-semibold">Click to</span>
            <span className="relative z-10 text-foreground/90">See What I’ve Built</span>
            <motion.div
              className="relative z-10"
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-foreground leading-tight mb-6">
            I help founders turn ideas into seamless{' '}
            <span className="italic">digital</span> experiences
          </h1>
        </motion.div>

        {/* Personal Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative flex flex-col items-center justify-center text-center gap-4 mb-12"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="space-y-1 text-center">
              <p className="text-2xl md:text-3xl font-semibold text-foreground">Hello, I'm Anu Bilegdemberel</p>
              <p className="text-xl md:text-2xl text-foreground/80">a Full Stack Developer</p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border border-border/70 shadow-[0_10px_24px_-16px_rgba(15,23,42,0.45)]"
            >
              <ImageWithFallback
                src="/assets/images/profile2.jpg"
                alt="Anu Bilegdemberel"
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col items-center justify-center mb-8"
        >
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center justify-center gap-2 rounded-lg px-6 md:px-7 py-3 bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-500/25 hover:bg-indigo-600 hover:shadow-indigo-500/35 transition-all duration-300"
          >
            Let's Connect
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Dog and Snack Container - Centered below buttons */}
          <div className="w-full flex justify-center mt-3" style={{ minHeight: '150px' }}>
            <DogWithSnack />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 