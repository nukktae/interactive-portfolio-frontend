"use client";

import { motion } from 'framer-motion';
import TechStack3D from './TechStack3D';
import SectionWrapper from './SectionWrapper';

export default function TechStackShowcase() {
  return (
    <SectionWrapper className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4">
            My Tech{' '}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <TechStack3D />
      </div>
    </SectionWrapper>
  );
} 