import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '../../types/project';
import MakeEatScreenCarousel from './MakeEatScreenCarousel';
import { ChefHat, Smartphone, Bot, BarChart3, Zap, Camera } from 'lucide-react';

export default function MakeEatProjectDetail({ project }: { project: Project }) {
  return (
    <>
      {/* AI Recipe Generator Hero */}
      <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-amber-50 rounded-3xl">
        <div className="px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <ChefHat className="w-8 h-8 text-orange-600" />
              <h2 className="text-4xl font-black text-gray-900">AI Recipe Generator</h2>
            </div>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Smart Culinary Assistant</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                MakeEat transforms cooking with AI-powered recipe recommendations based on your 
                available ingredients. Features dietary preferences, nutritional tracking, 
                and step-by-step cooking guidance for a seamless culinary experience.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-xl border border-orange-200 shadow-sm">
                  <Bot className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">AI-Powered</div>
                  <div className="text-sm text-gray-600">Recipe Generation</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-amber-200 shadow-sm">
                  <Smartphone className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">Flutter App</div>
                  <div className="text-sm text-gray-600">Cross-platform</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-orange-600 to-amber-600 rounded-3xl p-8 text-white">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold mb-4">Smart Features</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <Camera className="w-5 h-5 text-orange-300" />
                        Ingredient Recognition
                      </li>
                      <li className="flex items-center gap-3">
                        <BarChart3 className="w-5 h-5 text-orange-300" />
                        Nutrition Tracking
                      </li>
                      <li className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-orange-300" />
                        Smart Recommendations
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
          Development Process
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              phase: "AI Integration",
              description: "OpenAI API for recipe generation and nutritional analysis",
              icon: <Bot className="w-8 h-8" />
            },
            {
              phase: "App Development",
              description: "Flutter with clean architecture and offline capabilities",
              icon: <Smartphone className="w-8 h-8" />
            },
            {
              phase: "Food Recognition",
              description: "Computer vision for ingredient identification",
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
              <div className="bg-white border border-gray-200 rounded-2xl p-8 group-hover:border-orange-400 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:border-orange-400 transition-all duration-300"
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
          App Features
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
              <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full hover:border-orange-400 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ChefHat className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature}</h3>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-orange-600 to-amber-600"
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

      {/* Performance Metrics */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl text-white">
        <div className="px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black mb-12"
          >
            App Performance
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

      {/* Screen Carousel */}
      <section className="py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-gray-900 mb-12 text-center"
        >
          App Interface
        </motion.h2>
        <MakeEatScreenCarousel />
      </section>

      {/* AI Technology */}
      <section className="py-16 bg-gray-50 rounded-3xl">
        <div className="px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-gray-900 mb-12 text-center"
          >
            AI-Powered Features
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Machine Learning</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Computer vision for ingredient recognition</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Natural language processing for recipes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Recommendation algorithms</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">User Intelligence</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Personalized dietary preferences</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Adaptive learning from user behavior</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Smart nutritional tracking</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 