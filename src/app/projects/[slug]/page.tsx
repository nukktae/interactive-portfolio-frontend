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
          {/* Image Gallery */}
          <section className="py-12">
            <h2 className="text-3xl font-bold text-white mb-8">Project Screenshots</h2>
            <ImageGallery 
              images={project.images} 
              descriptions={[
                {
                  title: "Smart Plant Dashboard",
                  text: "Real-time monitoring dashboard showing plant health metrics and environmental conditions at a glance."
                },
                {
                  title: "Plant Care Instructions",
                  text: "Personalized care guides with AI-powered recommendations based on your specific plant and environment."
                },
                {
                  title: "Health Diagnostics",
                  text: "Advanced disease detection and health monitoring using computer vision technology."
                },
                {
                  title: "Watering Schedule",
                  text: "Smart watering schedule that adapts to seasonal changes and plant growth patterns."
                },
                {
                  title: "Environment Control",
                  text: "Precise control over temperature, humidity, and lighting conditions for optimal plant growth."
                },
                {
                  title: "Soil Moisture Analytics",
                  text: "Detailed soil moisture tracking and analysis to ensure optimal watering conditions for each plant."
                },
                {
                  title: "AI Plant Recognition",
                  text: "Advanced machine learning system that can identify plant species and provide specific care instructions through image recognition."
                }
              ]}
            />
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

          {/* Features Grid */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
            <FeaturesGrid features={project.features} />
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

          {/* Highlights Section */}
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
        </div>
      </main>
    </div>
  );
} 