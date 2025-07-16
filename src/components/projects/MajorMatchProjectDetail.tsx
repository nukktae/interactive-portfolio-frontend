import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '../../types/project';
import { GraduationCap, Brain, Target, Users, TrendingUp, Lightbulb } from 'lucide-react';

export default function MajorMatchProjectDetail({ project }: { project: Project }) {
  return (
    <>
      {/* AI Career Guidance */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl">
        <div className="px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl font-black text-gray-900">AI Career Guidance Platform</h2>
            </div>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Intelligent Career Discovery</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                MajorMatch leverages GPT-4 for personalized major recommendations, interactive career 
                challenges, and real-time mentorship connections. Features responsive design and 
                detailed analytics tracking for optimal career guidance.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-xl border border-blue-200 shadow-sm">
                  <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">90% Accuracy</div>
                  <div className="text-sm text-gray-600">Career Matching</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-purple-200 shadow-sm">
                  <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">85% Success</div>
                  <div className="text-sm text-gray-600">Mentor Matching</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <Brain className="w-5 h-5 text-blue-300" />
                        AI-Powered Assessments
                      </li>
                      <li className="flex items-center gap-3">
                        <Lightbulb className="w-5 h-5 text-blue-300" />
                        Interactive Challenges
                      </li>
                      <li className="flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-blue-300" />
                        Progress Tracking
                      </li>
                    </ul>
                  </div>
                  <div className="text-4xl font-black opacity-20">AI</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development Approach */}
      <section className="py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-gray-900 mb-12 text-center"
        >
          Development Approach
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              phase: "Research",
              description: "User research and career counseling analysis",
              icon: <Target className="w-8 h-8" />
            },
            {
              phase: "AI Integration",
              description: "GPT-4 assessment engine development",
              icon: <Brain className="w-8 h-8" />
            },
            {
              phase: "Platform Build",
              description: "Full-stack development with Flutter & Next.js",
              icon: <Lightbulb className="w-8 h-8" />
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-8 group-hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.phase}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black rounded-3xl">
        <div className="px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Technology Stack
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:border-blue-400 transition-all duration-300"
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
          Platform Features
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
              <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature}</h3>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl text-white">
        <div className="px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black mb-12"
          >
            Success Metrics
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                  <div className="text-3xl font-black text-white mb-2">{metric.split(':')[0]}</div>
                  <div className="text-sm opacity-80">{metric.split(':')[1]}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Screenshots */}
      <section className="py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-gray-900 mb-12 text-center"
        >
          Platform Screenshots
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
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
} 