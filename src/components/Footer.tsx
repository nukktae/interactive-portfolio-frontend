'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer className="py-16 border-t border-gray-200" ref={ref}>
      <div className="px-6 md:px-12 lg:px-20 xl:px-32 max-w-[1800px] mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <div className="text-3xl font-black uppercase tracking-tight text-gray-900">
            ANU
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm font-bold tracking-widest text-gray-500 uppercase">
            <a href="#projects" className="hover:text-gray-900 transition-colors duration-300">
              WORK
            </a>
            <a href="#about" className="hover:text-gray-900 transition-colors duration-300">
              ABOUT
            </a>
            <a href="#tech-stack" className="hover:text-gray-900 transition-colors duration-300">
              SERVICES
            </a>
            <a href="#contact" className="hover:text-gray-900 transition-colors duration-300">
              CONTACT
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm font-bold tracking-widest text-gray-500 uppercase">
            © 2025 ANU
          </div>
        </motion.div>

        {/* Large Footer Text */}
        <motion.div
          className="text-center mt-16 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <div className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-gray-900/5 leading-none">
            DESIGNER
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 