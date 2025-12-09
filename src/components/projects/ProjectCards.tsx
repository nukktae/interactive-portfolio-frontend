"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { projectSummaries } from '@/data/projectSummaries';
import ProjectExpandedView from './ProjectExpandedView';
import { Project } from '@/types/project';

export default function ProjectCards() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectSummaries.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
          >
            <motion.div
              className="group relative bg-white rounded-2xl overflow-hidden 
                       shadow-lg hover:shadow-2xl transition-all duration-500
                       border border-[#DDCCD0]/20 hover:border-[#498FD8]/30 cursor-pointer"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="relative h-56 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#498FD8]/80 via-[#498FD8]/20 to-transparent 
                           opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"
                />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
              
              <motion.div className="p-8 relative">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#498FD8] to-[#D86089] bg-clip-text text-transparent mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i}
                      className="px-4 py-1.5 bg-[#498FD8]/5 text-[#498FD8] rounded-full text-sm 
                               border border-[#498FD8]/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-4 py-1.5 text-[#D86089] text-sm">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <ProjectExpandedView 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
} 