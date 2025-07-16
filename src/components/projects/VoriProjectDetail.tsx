import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '../../types/project';
import { Mic, Brain, BarChart3, Users, Clock, Zap } from 'lucide-react';

export default function VoriProjectDetail({ project }: { project: Project }) {
  return (
    <>
      {/* AI Meeting Revolution */}
      <section className="py-16 bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl text-white">
        <div className="px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Mic className="w-8 h-8 text-yellow-400" />
              <h2 className="text-4xl font-black">AI-Powered Meeting Platform</h2>
            </div>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Revolutionizing Meeting Management</h3>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                VORI transforms meetings with real-time AI transcription, automated task generation, 
                and comprehensive analytics. Built with enterprise-grade security and scalability, 
                featuring seamless cross-platform functionality.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <Brain className="w-8 h-8 text-yellow-400 mb-3" />
                  <div className="font-bold">99% Accuracy</div>
                  <div className="text-sm text-gray-400">AI Transcription</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <Clock className="w-8 h-8 text-yellow-400 mb-3" />
                  <div className="font-bold">50% Faster</div>
                  <div className="text-sm text-gray-400">Follow-up Time</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 rounded-2xl p-8 border border-yellow-400/20">
                <h4 className="text-xl font-bold mb-6 text-yellow-400">Key Technologies</h4>
                <div className="space-y-4">
                  {project.technologies.slice(0, 6).map((tech, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-300">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-gray-900 mb-12 text-center"
        >
          Smart Meeting Features
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
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-400 transition-colors">
                <BarChart3 className="w-6 h-6 text-yellow-400 group-hover:text-black" />
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

      {/* Technical Architecture */}
      <section className="py-16 bg-gray-50 rounded-3xl">
        <div className="px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-gray-900 mb-12 text-center"
          >
            System Architecture
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                layer: "Frontend",
                tech: "Next.js 14 + TypeScript",
                description: "Real-time UI with optimized performance",
                icon: <Users className="w-8 h-8" />
              },
              {
                layer: "Backend", 
                tech: "FastAPI + Apache Kafka",
                description: "Scalable microservices architecture",
                icon: <Zap className="w-8 h-8" />
              },
              {
                layer: "AI Layer",
                tech: "Whisper + Claude API",
                description: "Advanced transcription and analysis",
                icon: <Brain className="w-8 h-8" />
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.layer}</h3>
                  <div className="text-sm font-medium text-yellow-600 mb-4">{item.tech}</div>
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
          Performance Impact
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
              <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 text-white group-hover:from-yellow-400 group-hover:to-yellow-500 group-hover:text-black transition-all duration-500">
                <div className="text-3xl font-black mb-2">{metric.split(':')[0]}</div>
                <div className="text-sm opacity-80">{metric.split(':')[1]}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-black rounded-3xl">
        <div className="px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Interface Gallery
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-video rounded-xl overflow-hidden group"
              >
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 