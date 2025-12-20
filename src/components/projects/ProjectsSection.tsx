'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import { workExperience, type WorkExperienceProject } from '../../data/workExperience';
import { competitionsProjects, type CompetitionProject } from '../../data/competitionsProjects';
import { useTheme } from '@/contexts/ThemeContext';

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Helper component to render project cards
  const renderProjectCard = (project: WorkExperienceProject | CompetitionProject, index: number) => (
    <motion.div
      key={project.id}
      className={`grid grid-cols-1 ${project.featured ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-8 lg:gap-16 items-center group cursor-pointer`}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
      onClick={() => {
        const slug = project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
        window.location.href = `/projects/${slug}`;
      }}
    >
      {/* Project Image/Video */}
      <div className={`${project.featured ? 'lg:order-1' : 'lg:order-1'} relative overflow-hidden`}>
        <div className={`${project.featured ? 'aspect-landscape' : 'aspect-square'} relative`}>
          {/* Check if project has cover video */}
          {project.coverVideo && 
           (project.coverVideo.endsWith('.mp4') || 
            project.coverVideo.endsWith('.webm') || 
            project.coverVideo.endsWith('.mov')) ? (
            <>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  // Fallback to image if video fails
                  const video = e.currentTarget;
                  video.style.display = 'none';
                }}
              >
                <source src={project.coverVideo} type="video/mp4" />
              </video>
              {/* Fallback image (shown if video fails) */}
              <ImageWithFallback
                src={project.image}
                alt={`${project.title} - ${project.role}`}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-0"
                fill
              />
            </>
          ) : (
            <ImageWithFallback
              src={project.image}
              alt={`${project.title} - ${project.role}`}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              fill
            />
          )}
          <div className="absolute inset-0 bg-white/20 dark:bg-black/20 group-hover:bg-transparent transition-all duration-700" />
          
          {/* Action Buttons Container */}
          <div className="absolute top-4 right-4 flex gap-2 z-20">
            {/* Website Link Button - Always Visible */}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 group/link backdrop-blur-md ${
                  !mounted
                    ? 'bg-white text-[#0F0F12] shadow-[0_10px_25px_-12px_rgba(255,255,255,0.3)] border border-white/30 hover:bg-white/90'
                    : theme === 'dark'
                    ? 'bg-white text-[#0F0F12] shadow-[0_10px_25px_-12px_rgba(255,255,255,0.3)] border border-white/30 hover:bg-white/90'
                    : 'bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 text-white shadow-[0_10px_25px_-12px_rgba(59,130,246,0.55)] hover:brightness-110 border border-white/30'
                }`}
              >
                <span className="text-sm font-medium">Visit Site</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            
            {/* GitHub Button - Visible on Hover */}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-10 h-10 bg-foreground/10 dark:bg-white/10 backdrop-blur-sm border border-border text-foreground flex items-center justify-center hover:bg-foreground/20 dark:hover:bg-white/20 transition-all duration-300 rounded-lg opacity-0 group-hover:opacity-100"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className={`${project.featured ? 'lg:order-2 lg:col-span-1' : 'lg:order-2 lg:col-span-2'} space-y-6`}>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-section-title text-foreground/60 mb-2">
              {project.period} • {project.role}
            </div>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground">
              {project.title}
            </h3>
          </div>
          <ArrowUpRight className="w-6 h-6 text-foreground/60 group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </div>

        <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="text-section-title text-foreground/60 border border-border px-3 py-1 rounded-lg bg-foreground/5 dark:bg-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-24 md:py-32 relative z-10" ref={ref}>
      <div className="px-6 md:px-12 lg:px-20 xl:px-32 max-w-[1800px] mx-auto">
        {/* Work Experience Section */}
        <div className="mb-24 md:mb-32">
          <motion.div
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-section-title text-foreground/60 mb-4">
              PROFESSIONAL EXPERIENCE
            </div>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground">
              Work Experience
            </h3>
          </motion.div>

          <div className="space-y-16 md:space-y-24">
            {workExperience.map((project, index) => renderProjectCard(project, index))}
          </div>
        </div>

        {/* Competitions & Projects Section */}
        <div>
          <motion.div
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="text-section-title text-foreground/60 mb-4">
              PERSONAL PROJECTS & COMPETITIONS
            </div>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground">
              Competitions & Projects
            </h3>
          </motion.div>

          <div className="space-y-16 md:space-y-24">
            {competitionsProjects.filter(project => !project.hidden).map((project, index) => renderProjectCard(project, workExperience.length + index))}
          </div>
        </div>

        {/* View More */}
        <motion.div
          className="text-center mt-16 md:mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a
            href="https://github.com/nukktae"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 text-lg font-medium text-foreground/80 hover:text-foreground border-b-2 border-transparent hover:border-foreground/30 transition-colors duration-300 group"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
} 