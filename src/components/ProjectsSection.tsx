'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import Image from 'next/image';

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  const projects = [
    {
      id: 1,
      title: "Handiers Inc.",
      role: "UI/UX Designer",
      period: "2025",
      description: "Mobile apps & marketing website design with UX research and data-driven improvements",
      tags: ["Figma", "Flutter", "UI Design", "UX Research"],
      image: "/assets/images/projects/handiers.png",
      githubUrl: "https://github.com/nukktae",
      liveUrl: "https://handiers.com",
      featured: true
    },
    {
      id: 2,
      title: "Rootin",
      role: "Frontend Developer",
      period: "2024",
      description: "Flutter application with BLE protocol integration for IoT sensor communication",
      tags: ["Flutter", "BLE", "Firebase", "IoT"],
      image: "/assets/images/projects/rootin.png",
      githubUrl: "https://github.com/nukktae/rootin"
    },
    {
      id: 3,
      title: "KMU Global",
      role: "Full Stack Developer",
      period: "2024",
      description: "Portfolio website with 3D animations and management system",
      tags: ["Next.js", "Three.js", "TypeScript"],
      image: "/assets/images/projects/kmuglobalcampus.png",
      githubUrl: "https://github.com/nukktae",
      liveUrl: "https://kmuglobal.dev"
    },
    {
      id: 4,
      title: "MakeEat",
      role: "Full Stack Developer", 
      period: "2024",
      description: "AI-powered recipe generation app with cross-platform support",
      tags: ["Flutter", "AI", "OpenAI", "Firebase"],
      image: "/assets/images/projects/makeeat.png",
      githubUrl: "https://github.com/nukktae"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32" ref={ref}>
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 max-w-[1800px] mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-section-title text-muted-foreground mb-4 md:mb-6">
            SELECTED WORK
          </div>
          <h2 className="text-display leading-none">
            RECENT PROJECTS
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12 md:space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`grid grid-cols-1 ${project.featured ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-6 md:gap-8 lg:gap-16 items-center group cursor-pointer`}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              onClick={() => {
                const slug = project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                window.location.href = `/projects/${slug}`;
              }}
            >
              {/* Project Image */}
              <div className={`${project.featured ? 'lg:col-span-1' : 'lg:col-span-2'} ${index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}`}>
                <div className="relative overflow-hidden rounded-2xl md:rounded-3xl aspect-[4/3] group-hover:shadow-2xl transition-all duration-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-700" />
                </div>
              </div>

              {/* Project Info */}
              <div className={`${project.featured ? 'lg:col-span-1' : 'lg:col-span-1'} ${index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'} space-y-4 md:space-y-6`}>
                <div>
                  <div className="text-section-title text-muted-foreground mb-2 md:mb-3">
                    {project.role || project.period}
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight group-hover:text-yellow-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {(project.tags || []).slice(0, 3).map((tech: string, techIndex: number) => (
                    <span 
                      key={techIndex}
                      className="text-xs md:text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {(project.tags || []).length > 3 && (
                    <span className="text-xs md:text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">
                      +{(project.tags || []).length - 3} more
                    </span>
                  )}
                </div>

                <motion.div 
                  className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-black group-hover:text-yellow-400 transition-colors duration-300"
                  whileHover={{ x: 10 }}
                >
                  View Project
                  <motion.span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 