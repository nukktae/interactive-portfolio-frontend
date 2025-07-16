import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '../../types/project';
import RootinScreenCarousel from './RootinScreenCarousel';
import { Leaf, Smartphone, Wifi, BarChart3, Zap, Camera } from 'lucide-react';

export default function RootinProjectDetail({ project }: { project: Project }) {
  return (
    <>
      {/* IoT Plant Care Hero */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-white to-emerald-50 rounded-3xl">
        <div className="px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Leaf className="w-8 h-8 text-green-600" />
              <h2 className="text-4xl font-black text-gray-900">Smart Plant Care System</h2>
            </div>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">IoT-Powered Plant Monitoring</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                A sophisticated plant care automation system combining IoT hardware with a Flutter-powered 
                iOS app for intelligent plant monitoring and maintenance. Features AI plant identification 
                and real-time health diagnostics.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-xl border border-green-200 shadow-sm">
                  <Smartphone className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">Flutter App</div>
                  <div className="text-sm text-gray-600">iOS Platform</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-emerald-200 shadow-sm">
                  <Wifi className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">IoT Sensors</div>
                  <div className="text-sm text-gray-600">Real-time Data</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-8 text-white">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold mb-4">Smart Features</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <Camera className="w-5 h-5 text-green-300" />
                        AI Plant Identification
                      </li>
                      <li className="flex items-center gap-3">
                        <BarChart3 className="w-5 h-5 text-green-300" />
                        Health Monitoring
                      </li>
                      <li className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-green-300" />
                        Automated Care
                      </li>
                    </ul>
                  </div>
                  <div className="text-4xl font-black opacity-20">IoT</div>
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
              phase: "Hardware",
              description: "Custom IoT sensors for soil moisture and environmental monitoring",
              icon: <Wifi className="w-8 h-8" />
            },
            {
              phase: "App Development",
              description: "Flutter iOS app with BLoC state management and offline support",
              icon: <Smartphone className="w-8 h-8" />
            },
            {
              phase: "AI Integration",
              description: "TensorFlow Lite for plant identification and health analysis",
              icon: <Camera className="w-8 h-8" />
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-8 group-hover:border-green-400 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:border-green-400 transition-all duration-300"
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
          Smart Features
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {project.features.slice(0, 8).map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full hover:border-green-400 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-900 font-medium leading-relaxed">{feature}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl text-white">
        <div className="px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black mb-12"
          >
            Project Impact
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {project.metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                  <div className="text-2xl font-black text-white mb-2">{metric.split(':')[0]}</div>
                  <div className="text-sm opacity-80">{metric.split(':')[1]}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screen Carousel */}
      <section className="py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-gray-900 mb-12 text-center"
        >
          App Interface
        </motion.h2>
        <RootinScreenCarousel />
      </section>

      {/* Technical Challenges */}
      <section className="py-16 bg-gray-50 rounded-3xl">
        <div className="px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-gray-900 mb-12 text-center"
          >
            Engineering Solutions
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Challenges</h3>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Solutions</h3>
              <ul className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{solution}</span>
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