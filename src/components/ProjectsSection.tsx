"use client";

import { motion } from 'framer-motion';
import ProjectCards from './ProjectCards';
import SectionWrapper from './SectionWrapper';

export default function ProjectsSection() {
  return (
    <SectionWrapper className="py-32">
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-[#498FD8] to-[#D86089] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A collection of my recent work in software development and design
          </p>
        </motion.div>
        
        <ProjectCards />
      </div>
    </SectionWrapper>
  );
} 