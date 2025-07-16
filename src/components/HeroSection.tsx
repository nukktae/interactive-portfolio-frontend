'use client';

import { motion } from 'framer-motion';
import { ImageWithFallback } from './ImageWithFallback';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 xl:px-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-100/30" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center max-w-[1800px] mx-auto w-full">
        {/* Left Side - Text */}
        <div className="lg:col-span-7 xl:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 md:mb-12"
          >
            <p className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">
              👋 Let me introduce,
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-4 md:mb-6"
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-none text-gray-900">
              I'M A<br />
              <span className="relative">
                UI/UX
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  style={{ transformOrigin: 'left' }}
                />
              </span><br />
              DESIGNER
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-8 md:mb-12"
          >
            <p className="text-lg md:text-xl max-w-md text-gray-600">
              UI/UX designer who loves crafting intuitive and beautiful user experiences
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-12 md:mb-16"
          >
            <button 
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-black text-white px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center gap-3"
            >
              View My Work
              <motion.span
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </motion.span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex items-center gap-8"
          >
            <div>
              <div className="text-2xl md:text-3xl font-black text-gray-900">2+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Companies</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-gray-900">10+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Projects</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-gray-900">2+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Years Exp</div>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Image */}
        <div className="lg:col-span-5 xl:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            <div className="aspect-[3/4] relative overflow-hidden bg-gray-200">
              <ImageWithFallback
                src="/assets/images/profile2.jpg"
                alt="Anu - UI/UX Designer & Full-Stack Developer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-all duration-700" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-yellow-400 text-black px-6 py-3 text-sm font-bold uppercase tracking-wider"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              Available for Work
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Large Name Display */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 pointer-events-none z-0"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      >
        <div className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-gray-900/5 text-center overflow-hidden leading-none">
          ANU
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="text-sm font-bold tracking-widest text-gray-500 uppercase">Scroll</div>
          <motion.div
            className="w-px h-12 bg-gray-500"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
} 