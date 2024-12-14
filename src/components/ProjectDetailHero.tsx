import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '@/types/project';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectDetailHero({ project }: { project: Project }) {
  return (
    <motion.div 
      className="relative h-[70vh] w-full rounded-2xl overflow-hidden mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-5xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mb-6">{project.detailedDescription}</p>
          
          <div className="flex gap-4">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-purple-500 rounded-full backdrop-blur-sm transition-all border border-white/20 hover:border-purple-400 text-white"
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
                className="flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-full transition-all text-white"
              >
                <FaExternalLinkAlt className="w-5 h-5" />
                <span className="font-medium">Live Demo</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 