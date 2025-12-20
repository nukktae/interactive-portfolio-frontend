'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 xl:px-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto w-full text-left relative z-10">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-foreground leading-tight mb-6 text-left" style={{ fontFamily: '"instrument sans"' }}>
            I help founders turn ideas into seamless{' '}
            <span className="italic text-left">digital</span> experiences
          </h1>
        </motion.div>

        {/* Personal Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative flex flex-col items-start justify-start text-left gap-4 mb-12"
          style={{ fontFamily: '"instrument sans"' }}
        >
          <div className="space-y-1 text-left" style={{ fontFamily: '"sans serif"' }}>
            <p className="text-2xl md:text-3xl font-semibold text-foreground">Hello, I'm Anu Bilegdemberel</p>
            <p className="text-xl md:text-2xl text-foreground/80">Product Engineer (Full-Stack & Design)</p>
          </div>
        </motion.div>

        {/* Arrow Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center w-full mt-8 mb-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <ArrowDown className="w-6 h-6 text-foreground/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 