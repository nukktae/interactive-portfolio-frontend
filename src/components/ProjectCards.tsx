"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

export default function ProjectCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-4">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5,
            delay: index * 0.1,
            ease: [0.21, 1.11, 0.81, 0.99] 
          }}
        >
          <Link href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
            <motion.div 
              className="relative group rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm
                         border border-gray-800/50 hover:border-violet-500/30 transition-all duration-500"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-56 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 
                           group-hover:opacity-100 transition-opacity duration-500 z-10"
                />
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover filter brightness-95 group-hover:brightness-110 transition-all duration-500"
                  />
                </motion.div>
              </div>
              
              <motion.div 
                className="p-6 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full text-gray-300 border border-gray-700/50
                               bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 3 && (
                    <motion.span
                      className="px-3 py-1 text-xs rounded-full text-gray-400 border border-gray-700/50
                               bg-gradient-to-r from-violet-500/10 to-indigo-500/10 backdrop-blur-sm"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      +{project.technologies.length - 3} more
                    </motion.span>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
} 