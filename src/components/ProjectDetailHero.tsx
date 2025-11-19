import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '@/types/project';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectDetailHero({ project }: { project: Project }) {
  // For Bestia, use a cleaner layout without image
  if (project.title === "Bestia") {
    return (
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                Featured Project
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-none">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </div>
    );
  }

  // For other projects, keep the original design
  return (
    <div className="pt-20">
      <motion.div 
        className="relative h-[70vh] w-full overflow-hidden mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-white/70 text-sm font-medium uppercase tracking-wider">
                  Featured Project
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none">
                {project.title}
              </h1>
              
              <p className="text-xl text-white/80 max-w-3xl mb-8 leading-relaxed">
                {project.detailedDescription}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white hover:text-black border border-white/20 hover:border-white text-white transition-all duration-300 backdrop-blur-sm"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span className="font-medium">View Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-yellow-400 hover:bg-black text-black hover:text-white transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                    <span className="font-medium">Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 