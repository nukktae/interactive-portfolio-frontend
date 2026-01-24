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
            onClick={() => {
              if (project.title.toLowerCase() !== 'bestia') {
                setSelectedProject(project);
              }
            }}
          >
            <motion.div
              className={`group relative bg-white rounded-2xl overflow-hidden 
                       shadow-lg hover:shadow-2xl transition-all duration-500
                       border border-[#DDCCD0]/20 hover:border-[#498FD8]/30 ${project.title.toLowerCase() !== 'bestia' ? 'cursor-pointer' : 'cursor-default'}`}
              whileHover={project.title.toLowerCase() !== 'bestia' ? { y: -5, scale: 1.02 } : {}}
            >
              <div className="relative h-56 overflow-hidden">
                {project.image ? (
                  <>
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
                  </>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 mx-auto rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <motion.div className="p-8 relative">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#498FD8] to-[#D86089] bg-clip-text text-transparent mb-4">
                  {project.title}
                </h3>
                {project.address && (
                  <p className="text-sm text-gray-500 mb-2 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.address}
                  </p>
                )}
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