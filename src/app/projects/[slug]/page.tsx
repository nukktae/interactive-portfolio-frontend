"use client";

import { motion } from 'framer-motion';
import Navbar from '../../../components/Navbar';
import ProjectDetailHero from '../../../components/ProjectDetailHero';
import { projects } from '../../../data/projects';
import ImageGallery from '../../../components/ImageGallery';
import SkillsSection from '../../../components/SkillsSection';
import FeaturesGrid from '../../../components/FeaturesGrid';

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  );

  if (!project) return <div>Project not found</div>;

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <ProjectDetailHero project={project} />
      
      <main className="max-w-7xl mx-auto py-12 px-4">
        <div className="space-y-16">
          {/* My Role Section */}
          <section className="py-12 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl border border-purple-500/10">
            <h2 className="text-3xl font-bold text-white mb-8 px-8">My Role</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
              {project.roles?.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{role.percentage}%</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{role.area}</h3>
                  </div>
                  <p className="text-gray-300">{role.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Skills & Tools */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <SkillsSection 
              title="Technical Skills"
              skills={project.hardSkills}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10"
            />
            <SkillsSection 
              title="Soft Skills"
              skills={project.softSkills}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10"
            />
          </section>

          {/* Technologies & Tools */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-gray-800/80 text-gray-300 rounded-full text-sm border border-gray-700/50 backdrop-blur-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Development Tools</h2>
              <div className="flex flex-wrap gap-3">
                {project.tools?.map((tool, i) => (
                  <span key={i} className="px-4 py-2 bg-gray-800/80 text-gray-300 rounded-full text-sm border border-gray-700/50 backdrop-blur-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Challenges & Solutions Section */}
          <section className="py-12">
            <h2 className="text-3xl font-bold text-white mb-8">Challenges & Solutions</h2>
            <div className="space-y-6">
              {project.challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl border border-gray-800 overflow-hidden"
                >
                  <div className="p-6 border-b border-gray-800">
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                      Challenge {index + 1}: {challenge}
                    </h3>
                  </div>
                  <div className="p-6 bg-black/20">
                    <p className="text-gray-400">
                      <span className="text-purple-400 font-semibold">Solution:</span>{' '}
                      {project.solutions[index]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Project Highlights */}
          <section className="py-12">
            <h2 className="text-3xl font-bold text-white mb-8">Project Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 rounded-xl border border-gray-800"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <span className="text-purple-400 text-lg">✦</span>
                  </div>
                  <p className="text-gray-300">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Key Metrics Section */}
          <section className="py-12">
            <h2 className="text-3xl font-bold text-white mb-8">Key Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
                    {metric.split(':')[0]}
                  </h3>
                  <p className="text-gray-400">{metric.split(':')[1]}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Features Grid */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
            <FeaturesGrid features={project.features} />
          </section>

          {/* Key Screens */}
          <section className="py-12">
            <h2 className="text-3xl font-bold text-white mb-8">Key Screens</h2>
            <ImageGallery 
              images={project.images} 
              descriptions={project.imageDescriptions}
            />
          </section>
        </div>
      </main>
    </div>
  );
} 