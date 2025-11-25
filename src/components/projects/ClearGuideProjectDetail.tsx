import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '../../types/project';
import { FileText, Brain, MessageSquare, Calendar, Search, Shield, Globe, Moon, Zap, Database, Users } from 'lucide-react';

export default function ClearGuideProjectDetail({ project }: { project: Project }) {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 via-white to-blue-50 rounded-3xl">
        <div className="px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-teal-600" />
              <h2 className="text-4xl font-black text-gray-900">AI-Powered Document Assistant</h2>
            </div>
            <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
            <p className="text-lg text-gray-600 mt-4">클리어가이드 - Making Korean public documents accessible</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Intelligent Document Analysis</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                ClearGuide helps Korean residents understand complex government documents through AI-powered 
                analysis, OCR extraction, and intelligent summarization. The platform features a context-aware 
                chatbot, automatic deadline tracking, and comprehensive document management.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-xl border border-teal-200 shadow-sm">
                  <Brain className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">AI Analysis</div>
                  <div className="text-sm text-gray-600">GPT-4o Powered</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-blue-200 shadow-sm">
                  <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">2 Languages</div>
                  <div className="text-sm text-gray-600">Korean & English</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-teal-600 to-blue-600 rounded-3xl p-8 text-white">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold mb-4">Key Capabilities</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-teal-300" />
                        Multi-format OCR
                      </li>
                      <li className="flex items-center gap-3">
                        <Brain className="w-5 h-5 text-teal-300" />
                        AI Summarization
                      </li>
                      <li className="flex items-center gap-3">
                        <MessageSquare className="w-5 h-5 text-teal-300" />
                        Context Chatbot
                      </li>
                    </ul>
                  </div>
                  <div className="text-4xl font-black opacity-20">클리어가이드</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-gray-900 mb-12 text-center"
        >
          Core Features
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Document Processing",
              description: "Multi-format support (PDF, JPG, PNG) with advanced OCR using GPT-4 Vision API",
              icon: <FileText className="w-8 h-8" />,
              color: "from-teal-500 to-cyan-500"
            },
            {
              title: "AI Analysis",
              description: "Intelligent document summarization, action checklist generation, and risk detection",
              icon: <Brain className="w-8 h-8" />,
              color: "from-purple-500 to-pink-500"
            },
            {
              title: "Chatbot Assistant",
              description: "Context-aware chatbot with document-specific conversations and persistent history",
              icon: <MessageSquare className="w-8 h-8" />,
              color: "from-blue-500 to-indigo-500"
            },
            {
              title: "Calendar Management",
              description: "Automatic deadline extraction and calendar integration with visual indicators",
              icon: <Calendar className="w-8 h-8" />,
              color: "from-green-500 to-emerald-500"
            },
            {
              title: "Document Storage",
              description: "Full-text search, advanced filtering, and multiple view modes for document library",
              icon: <Search className="w-8 h-8" />,
              color: "from-orange-500 to-red-500"
            },
            {
              title: "Multi-Auth",
              description: "Firebase Email/Google + custom Kakao OAuth with secure session management",
              icon: <Shield className="w-8 h-8" />,
              color: "from-indigo-500 to-purple-500"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full hover:border-teal-400 hover:shadow-lg transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{feature.description}</p>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                  <motion.div 
                    className={`h-full bg-gradient-to-r ${feature.color}`}
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

      {/* AI Processing Pipeline */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black rounded-3xl">
        <div className="px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            AI Processing Pipeline
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1. Upload",
                description: "File validation and storage",
                icon: <FileText className="w-6 h-6" />
              },
              {
                step: "2. OCR",
                description: "Text extraction (PDF + Image)",
                icon: <Zap className="w-6 h-6" />
              },
              {
                step: "3. AI Analysis",
                description: "Summarization & parsing",
                icon: <Brain className="w-6 h-6" />
              },
              {
                step: "4. Insights",
                description: "Checklist & risk detection",
                icon: <MessageSquare className="w-6 h-6" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                  {step.icon}
                </div>
                <div className="text-sm font-bold text-teal-400 mb-2">{step.step}</div>
                <div className="text-white/90 text-sm">{step.description}</div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-white/30">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-16 bg-gray-50 rounded-3xl">
        <div className="px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-gray-900 mb-12 text-center"
          >
            Architecture & Stack
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend",
                items: ["Next.js 16 (App Router)", "React 19", "TypeScript 5", "Tailwind CSS v4", "Radix UI", "77+ Components"],
                icon: <Zap className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Backend",
                items: ["Next.js API Routes", "Firebase SDK", "Firestore (NoSQL)", "Firebase Storage", "18 API Endpoints", "Serverless"],
                icon: <Database className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "AI & Services",
                items: ["OpenAI GPT-4o", "GPT-4 Vision API", "Custom OCR Pipeline", "pdf-lib & PDF.js", "next-intl (i18n)", "Kakao OAuth"],
                icon: <Brain className="w-8 h-8" />,
                color: "from-purple-500 to-pink-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((tech, techIndex) => (
                    <li key={techIndex} className="flex items-center gap-2 text-gray-700 text-sm">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${item.color} rounded-full`}></div>
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Metrics */}
      <section className="py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-gray-900 mb-12 text-center"
        >
          Technical Metrics
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {project.metrics.slice(0, 8).map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-2xl p-6 text-white text-center"
            >
              <div className="text-2xl font-black mb-2">{metric.split(':')[0] || metric}</div>
              <div className="text-sm opacity-90">{metric.includes(':') ? metric.split(':')[1] : ''}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Features Detail */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl text-white">
        <div className="px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black mb-12 text-center"
          >
            Advanced Features
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Document Processing",
                items: ["Multi-format OCR (PDF + Images)", "GPT-4 Vision API integration", "Text confidence scoring", "Multi-page support"]
              },
              {
                title: "AI Analysis",
                items: ["Document summarization", "Action checklist generation", "Risk detection & alerts", "Entity extraction"]
              },
              {
                title: "Chatbot System",
                items: ["Context-aware conversations", "Document-specific chat", "Persistent conversation history", "Real-time responses"]
              },
              {
                title: "User Experience",
                items: ["Internationalization (KO/EN)", "Dark mode support", "Responsive design", "Accessibility (WCAG 2.1)"]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30"
              >
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-gray-900 mb-12 text-center"
        >
          Multi-Provider Authentication
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              provider: "Firebase Email",
              description: "Email/password authentication with verification and password reset",
              icon: <Shield className="w-8 h-8" />,
              color: "from-blue-500 to-cyan-500"
            },
            {
              provider: "Google OAuth",
              description: "One-click sign-in via Firebase with profile synchronization",
              icon: <Users className="w-8 h-8" />,
              color: "from-red-500 to-orange-500"
            },
            {
              provider: "Kakao OAuth",
              description: "Custom REST API implementation with secure cookie sessions",
              icon: <Globe className="w-8 h-8" />,
              color: "from-yellow-500 to-amber-500"
            }
          ].map((auth, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${auth.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <div className="text-white">
                  {auth.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{auth.provider}</h3>
              <p className="text-gray-700 text-sm">{auth.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-50 rounded-3xl">
        <div className="px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-gray-900 mb-12 text-center"
          >
            Technology Stack
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 text-center border border-gray-200 hover:border-teal-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-sm font-medium text-gray-900">{tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-gray-900 mb-12 text-center"
        >
          Challenges & Solutions
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-red-50 border border-red-200 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Challenges</h3>
            <ul className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-green-50 border border-green-200 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Solutions</h3>
            <ul className="space-y-4">
              {project.solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{solution}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}

