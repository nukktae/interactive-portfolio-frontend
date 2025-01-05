import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="group relative bg-gradient-to-br from-[#DDCCD0]/10 via-[#DDCCD0]/5 to-[#DDCCD0]/10 rounded-xl overflow-hidden border border-[#DDCCD0]/20 hover:border-[#498FD8]/50 transition-all duration-300 cursor-pointer"
        whileHover={{ scale: 1.02 }}
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#DDCCD0]/90 via-[#DDCCD0]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#498FD8] to-[#D86089] mb-2">
            {project.title}
          </h3>
          <p className="text-gray-700 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, i: number) => (
              <span 
                key={i}
                className="px-3 py-1 bg-[#DDCCD0]/20 text-gray-700 rounded-full text-sm border border-[#DDCCD0]/30 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
} 