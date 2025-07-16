import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '../../types/project';
import { Bot, Database, Zap, Code, Brain, GitBranch } from 'lucide-react';

export default function JobParserProjectDetail({ project }: { project: Project }) {
  return (
    <>
      {/* AI-Powered Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl text-white">
        <div className="px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Bot className="w-8 h-8 text-yellow-400" />
              <h2 className="text-4xl font-black">AI-Powered Job Parser</h2>
            </div>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h3 className="text-2xl font-bold mb-6">Intelligent Job Application Tracking</h3>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Built with Python and Flask, this application leverages GPT-4 to automatically extract 
                key information from job postings and seamlessly integrate with Notion for organization. 
                Features include multiple input methods and smart extraction of job details.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <Brain className="w-8 h-8 text-yellow-400 mb-3" />
                  <div className="font-bold">95% Accuracy</div>
                  <div className="text-sm text-gray-400">AI Parsing</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <Database className="w-8 h-8 text-yellow-400 mb-3" />
                  <div className="font-bold">3000+ Jobs</div>
                  <div className="text-sm text-gray-400">Processed</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 rounded-2xl p-6 border border-yellow-400/20">
                <h4 className="text-xl font-bold mb-6 text-yellow-400">Tech Stack</h4>
                <div className="space-y-3">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-gray-900 mb-12 text-center"
        >
          Intelligent Features
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-yellow-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{feature}</h3>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-yellow-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-gray-50 rounded-3xl">
        <div className="px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-gray-900 mb-12 text-center"
          >
            Development Process
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "AI Integration",
                description: "Implemented GPT-4 for intelligent job parsing and data extraction",
                icon: <Brain className="w-8 h-8" />
              },
              {
                step: "02", 
                title: "Backend Architecture",
                description: "Built robust Flask backend with API integration and error handling",
                icon: <Code className="w-8 h-8" />
              },
              {
                step: "03",
                title: "UI/UX Design",
                description: "Created modern glass-morphism interface with responsive design",
                icon: <GitBranch className="w-8 h-8" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-200 group-hover:border-yellow-400 transition-all duration-300">
                  <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-400 transition-all duration-300">
                    <div className="text-yellow-400 group-hover:text-gray-900 transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <div className="text-6xl font-black text-gray-200 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-gray-900 mb-12 text-center"
        >
          Performance Metrics
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {project.metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-white group-hover:from-yellow-400 group-hover:to-yellow-500 group-hover:text-black transition-all duration-500">
                <div className="text-3xl font-black mb-2">{metric.split(':')[0]}</div>
                <div className="text-sm opacity-80">{metric.split(':')[1]}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Challenges */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black rounded-3xl text-white">
        <div className="px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black mb-12 text-center"
          >
            Challenges & Solutions
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Challenges</h3>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Solutions</h3>
              <ul className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{solution}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 