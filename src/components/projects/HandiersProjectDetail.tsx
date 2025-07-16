import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '../../types/project';
import { ExternalLink, Smartphone, Globe, Users, TrendingUp, Zap } from 'lucide-react';

export default function HandiersProjectDetail({ project }: { project: Project }) {
  return (
    <>
      {/* Project Overview */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-gray-50 rounded-3xl">
        <div className="px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-4">Project Overview</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Marketplace Innovation</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Leading UI/UX design for Handiers Inc's comprehensive service marketplace platform. 
                Spearheaded the design and development of mobile applications and marketing website, 
                ensuring consistent user experience across all touchpoints.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                  <Smartphone className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">2 Mobile Apps</div>
                  <div className="text-sm text-gray-600">Flutter Development</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                  <Globe className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">Web Platform</div>
                  <div className="text-sm text-gray-600">Marketing Website</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-yellow-400 to-gray-900 rounded-3xl p-8 text-white">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold mb-4">Key Achievements</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-yellow-300" />
                        Improved conversion rates
                      </li>
                      <li className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-yellow-300" />
                        Enhanced user engagement
                      </li>
                      <li className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-yellow-300" />
                        Real-time features
                      </li>
                    </ul>
                  </div>
                  <div className="text-4xl font-black opacity-20">2025</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Role */}
      <section className="py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-gray-900 mb-12 text-center"
        >
          My Role & Impact
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-yellow-400 transition-all duration-300"
            >
              <div className="absolute top-4 right-4 text-6xl font-black text-yellow-400/10 group-hover:text-yellow-400/20 transition-colors">
                {role.percentage}%
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{role.area}</h3>
              <p className="text-gray-700 leading-relaxed">{role.description}</p>
              <div className="mt-6 w-full bg-gray-200 rounded-full h-2">
                <motion.div 
                  className="bg-yellow-400 h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${role.percentage}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technologies & Tools */}
      <section className="py-16 bg-gray-900 rounded-3xl">
        <div className="px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Technologies & Tools
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:border-yellow-400 transition-all duration-300"
              >
                <div className="text-sm font-medium text-white">{tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-gray-900 mb-12 text-center"
        >
          Key Features
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full hover:border-yellow-400 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="w-6 h-6 bg-gray-900 rounded-sm"></div>
                </div>
                <p className="text-gray-900 font-medium leading-relaxed">{feature}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Impact */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-gray-900 rounded-3xl">
        <div className="px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-white mb-12"
          >
            Project Impact
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                  <div className="text-2xl font-black text-white mb-2">{metric}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white border-2 border-gray-900 rounded-3xl p-12 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-black text-gray-900 mb-6">Interested in this project?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Visit the live platform to see the design in action.
          </p>
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 hover:bg-yellow-400 hover:text-black transition-all duration-300 font-bold"
            >
              <span>View Live Platform</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </motion.div>
      </section>
    </>
  );
} 