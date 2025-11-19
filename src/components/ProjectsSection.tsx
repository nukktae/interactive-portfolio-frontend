'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  const projects = [
    {
      id: 1,
      title: "Bestia",
      role: "UI/UX Designer & Frontend Developer",
      period: "September 2025 - Now",
      description: "CRM tech for real estate agents that saves 2.5-4 hours per day and enables handling 2-3× more leads",
      tags: ["React", "Next.js", "Figma", "CRM", "UI/UX", "Postman", "HTML", "LLM Model", "Twilio"],
      image: "/assets/images/projects/Bestia/bestia1.png",
      githubUrl: "",
      featured: true
    },
    {
      id: 2,
      title: "Handiers Inc.",
      role: "UI/UX Designer",
      period: "March 2025 - September 2025",
      description: "Mobile apps & marketing website design with UX research and data-driven improvements",
      tags: ["Figma", "Flutter", "UI Design", "UX Research"],
      image: "/assets/images/projects/handiers.png",
      githubUrl: "https://github.com/nukktae",
      liveUrl: "https://handiers.com",
      featured: true
    },
    {
      id: 3,
      title: "Rootin",
      role: "Frontend Developer",
      period: "2024",
      description: "Flutter application with BLE protocol integration for IoT sensor communication",
      tags: ["Flutter", "BLE", "Firebase", "IoT"],
      image: "/assets/images/projects/rootin.png",
      githubUrl: "https://github.com/nukktae/rootin"
    },
    {
      id: 4,
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
      id: 5,
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
    <section id="projects" className="py-24 md:py-32" ref={ref}>
      <div className="px-6 md:px-12 lg:px-20 xl:px-32 max-w-[1800px] mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-section-title text-muted-foreground mb-6">
            SELECTED WORK
          </div>
          <h2 className="text-display leading-none">
            RECENT PROJECTS
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`grid grid-cols-1 ${project.featured ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-8 lg:gap-16 items-center group cursor-pointer`}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              onClick={() => {
                const slug = project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                window.location.href = `/projects/${slug}`;
              }}
            >
              {/* Project Image */}
              <div className={`${project.featured ? 'lg:order-1' : 'lg:order-1'} relative overflow-hidden`}>
                <div className={`${project.featured ? 'aspect-landscape' : 'aspect-square'} relative`}>
                  <ImageWithFallback
                    src={project.image}
                    alt={`${project.title} - ${project.role}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700" />
                  
                  {/* Hover Actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-background text-foreground flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-background text-foreground flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`${project.featured ? 'lg:order-2 lg:col-span-1' : 'lg:order-2 lg:col-span-2'} space-y-6`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-section-title text-muted-foreground mb-2">
                      {project.period} • {project.role}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-section-title text-muted-foreground border border-muted-foreground/20 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          className="text-center mt-16 md:mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a
            href="https://github.com/nukktae"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 text-lg font-medium border-b-2 border-transparent hover:border-accent transition-colors duration-300 group"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
} 