import { motion } from 'framer-motion';
import { Project } from '@/types/project';
import Image from 'next/image';
import Link from 'next/link';

export default function JobParserProjectDetail({ project }: { project: Project }) {
  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 via-[#0A0A0F] to-[#A855F7]/10" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-gray-400 mb-8">{project.description}</p>
            <div className="flex gap-4">
              <Link 
                href={project.github}
                target="_blank"
                className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl backdrop-blur-sm
                         border border-white/10 transition-all duration-300"
              >
                View Source
              </Link>
              <Link
                href={project.liveUrl}
                target="_blank"
                className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] px-6 py-3 rounded-xl
                         hover:opacity-90 transition-opacity duration-300"
              >
                Live Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Using existing pattern */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0A0A0F] p-6 rounded-2xl border border-[#6366F1]/20 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#6366F1]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#6366F1] text-lg">✦</span>
                </div>
                <p className="text-gray-400">{feature}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technologies Section - Following MajorMatchProjectDetail pattern */}
      <section className="py-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          Tech Stack & Tools
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {project.technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.1,
                rotateY: 10,
                transition: { duration: 0.2 }
              }}
              transition={{ delay: index * 0.05 }}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#6366F1]/10 via-[#0A0A0F] to-[#A855F7]/5 border border-[#6366F1]/20 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-[#6366F1]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <p className="text-gray-400 text-center group-hover:text-white transition-colors relative z-10">
                {tech}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
} 