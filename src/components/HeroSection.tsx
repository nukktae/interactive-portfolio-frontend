"use client";

import { motion } from 'framer-motion';
import { AnimatedHero } from './AnimatedHero';
import Link from 'next/link';
import Model3D from './Model3D';
import BackgroundAnimation from './BackgroundAnimation';
import SectionWrapper from './SectionWrapper';

export default function HeroSection() {
  return (
    <SectionWrapper className="min-h-screen flex items-center justify-center">
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h1 className="text-6xl font-bold leading-tight tracking-tight">
                Hey, I'm Anu.{' '}
                <motion.span 
                  className="inline-block bg-gradient-to-r from-havelock via-cranberry to-tan bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Building
                </motion.span>
                <br />
                cool stuff with{' '}
                <motion.span 
                  className="inline-block bg-gradient-to-r from-havelock via-cranberry to-tan bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  code
                </motion.span>
              </h1>

              <motion.p 
                className="text-xl text-gray-700 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Full-stack dev who loves turning wild ideas into real digital experiences ✨
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#projects" onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }} className="group">
                <motion.button
                  className="primary-button group flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>View Projects</span>
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </a>
              
              <motion.button
                className="secondary-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* 3D Model Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative h-[800px] hidden lg:block translate-y-32"
          >
            <div className="absolute inset-0">
              <Model3D />
            </div>
            
            {/* Gradient overlay for better integration */}
            <div className="absolute inset-0 bg-white pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
} 