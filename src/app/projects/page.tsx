"use client";

import { motion } from 'framer-motion';
import ProjectCards from '../../components/ProjectCards';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-[#498FD8] to-[#D86089] bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A collection of my recent experiences in UI/UX design and development
          </p>
        </motion.div>
        
        <ProjectCards />
      </main>
    </div>
  );
} 