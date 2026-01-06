"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types/project';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { useEffect } from 'react';

interface ProjectExpandedViewProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectExpandedView({ project, onClose }: ProjectExpandedViewProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-white/95 backdrop-blur-md z-50 overflow-y-auto"
        style={{ height: '100vh' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="min-h-screen py-12 px-4"
        >
          <div className="max-w-7xl mx-auto">
            {/* Close Button */}
            <div className="flex justify-end mb-8">
              <button
                onClick={onClose}
                className="p-3 hover:bg-gray-100 rounded-full transition-colors"
              >
                <FaTimes className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Hero Image Section */}
            <div className="relative rounded-3xl overflow-hidden mb-24 group shadow-lg">
              <div className="relative h-[70vh]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>

            {/* Project Info Section */}
            <div className="max-w-4xl mx-auto mb-24 text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl font-bold mb-6 bg-gradient-to-r from-havelock via-cranberry to-tan bg-clip-text text-transparent"
              >
                {project.title}
              </motion.h1>
              {project.address && (
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                  className="text-lg text-gray-500 mb-4 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.address}
                </motion.p>
              )}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600 mb-12 leading-relaxed"
              >
                {project.detailedDescription}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center gap-6"
              >
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 bg-gray-50 hover:bg-gray-100
                             rounded-2xl text-gray-700 transition-all duration-300 border border-gray-200
                             shadow-sm hover:shadow-md"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span className="font-medium">View Source</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-havelock via-cranberry to-tan 
                             rounded-2xl text-white transition-all duration-300 hover:opacity-90 shadow-md hover:shadow-lg"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                    <span className="font-medium">Live Demo</span>
                  </a>
                )}
              </motion.div>
            </div>

            {/* Technologies */}
            <section className="max-w-6xl mx-auto mb-24">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center bg-gradient-to-r from-havelock via-cranberry to-tan bg-clip-text text-transparent mb-16"
              >
                Technologies Used
              </motion.h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {project.technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm
                             hover:bg-gradient-to-br hover:from-havelock/5 hover:via-cranberry/5 hover:to-tan/5 
                             transition-all duration-300 group hover:shadow-md"
                  >
                    <p className="text-gray-600 text-center group-hover:text-gray-800 transition-colors">
                      {tech}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Features */}
            <section className="max-w-6xl mx-auto mb-24">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center bg-gradient-to-r from-havelock via-cranberry to-tan bg-clip-text text-transparent mb-16"
              >
                Key Features
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm
                             hover:bg-gradient-to-br hover:from-havelock/5 hover:via-cranberry/5 hover:to-tan/5 
                             transition-all duration-300 group hover:shadow-md"
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-havelock via-cranberry to-tan
                                    rounded-2xl flex items-center justify-center opacity-90 shadow-sm">
                        <span className="text-white text-xl">✦</span>
                      </div>
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                        {feature}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Demo Video Section */}
            {project.title === "AWS Content Moderation" && (
              <section className="max-w-6xl mx-auto mb-24">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center bg-gradient-to-r from-havelock via-cranberry to-tan bg-clip-text text-transparent mb-16"
                >
                  System Demo
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative aspect-video rounded-2xl overflow-hidden bg-gray-50 border border-gray-200 shadow-lg"
                >
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    poster="/assets/images/content-mod.png"
                  >
                    <source src="/assets/videos/demoaws.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              </section>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 