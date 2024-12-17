"use client";

import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import ProjectCards from '../../components/ProjectCards';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my recent work in software development and design
          </p>
        </motion.div>
        
        <ProjectCards />
      </main>
    </div>
  );
} 