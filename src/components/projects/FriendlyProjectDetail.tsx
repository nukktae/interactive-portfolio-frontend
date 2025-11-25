import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '../../types/project';
import { Smartphone, Brain, Calendar, FileText, GraduationCap, Users, Zap, Globe, Database, Shield } from 'lucide-react';

export default function FriendlyProjectDetail({ project }: { project: Project }) {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-3xl">
        <div className="px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Smartphone className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl font-black text-gray-900">Student Productivity Platform</h2>
            </div>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">AI-Powered Student Assistant</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Friendly is a comprehensive cross-platform student productivity platform featuring AI-powered 
                lecture transcription, intelligent schedule management, PDF analysis, GPA tracking, and a 
                school-verified community. Built with React Native, Node.js, Firebase, and OpenAI APIs.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-xl border border-blue-200 shadow-sm">
                  <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">3 Platforms</div>
                  <div className="text-sm text-gray-600">iOS, Android, Web</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-cyan-200 shadow-sm">
                  <Brain className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">4 AI Services</div>
                  <div className="text-sm text-gray-600">OpenAI Integration</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-blue-300" />
                        Real-time Transcription
                      </li>
                      <li className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-blue-300" />
                        Smart Schedule Management
                      </li>
                      <li className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-blue-300" />
                        PDF Analysis & Chat
                      </li>
                    </ul>
                  </div>
                  <div className="text-4xl font-black opacity-20">FRIENDLY</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Screenshots with iPhone Frames */}
      <section className="py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-gray-900 mb-12 text-center"
        >
          App Screenshots
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex justify-center"
            >
              {/* iPhone Frame */}
              <div className="relative w-[280px] mx-auto">
                {/* iPhone Outer Frame */}
                <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                  
                  {/* Screen */}
                  <div className="relative bg-white rounded-[2.5rem] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
                    <Image
                      src={image}
                      alt={`Friendly app screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
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
              title: "AI Lecture Transcription",
              description: "Real-time audio recording with live transcription, AI-generated summaries, and context-aware chatbot",
              icon: <Brain className="w-8 h-8" />,
              color: "from-purple-500 to-pink-500"
            },
            {
              title: "Smart Schedule Management",
              description: "Image-based schedule upload with AI extraction, Google Calendar sync, and drag-and-drop interface",
              icon: <Calendar className="w-8 h-8" />,
              color: "from-blue-500 to-cyan-500"
            },
            {
              title: "PDF Analysis & Chat",
              description: "PDF upload with text extraction, AI-powered analysis, and document-specific chatbot",
              icon: <FileText className="w-8 h-8" />,
              color: "from-green-500 to-emerald-500"
            },
            {
              title: "GPA Calculator",
              description: "Course and semester management with real-time GPA calculation and graduation requirements tracking",
              icon: <GraduationCap className="w-8 h-8" />,
              color: "from-orange-500 to-red-500"
            },
            {
              title: "School Community",
              description: "School-verified community platform with posts, likes, comments, and university-based filtering",
              icon: <Users className="w-8 h-8" />,
              color: "from-indigo-500 to-purple-500"
            },
            {
              title: "Class Management",
              description: "Class organization with assignment tracking, resource management, and notes integration",
              icon: <Database className="w-8 h-8" />,
              color: "from-teal-500 to-blue-500"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full hover:border-blue-400 hover:shadow-lg transition-all duration-300">
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

      {/* AI Integration */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black rounded-3xl">
        <div className="px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            AI Integration
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Brain className="w-6 h-6" />
                OpenAI Services
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">GPT-4o-mini for fast text generation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">GPT-3.5-turbo for chat completions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">Whisper API for audio transcription</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">Vision API for image analysis</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6" />
                Context-Aware Chatbots
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">Global lecture chatbot with chat history</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">Transcript-specific chatbot</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">PDF-specific chatbot with selected text context</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">Persistent chat history per document</span>
                </li>
              </ul>
            </motion.div>
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
            Architecture & Infrastructure
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend",
                items: ["React Native + Expo", "TypeScript", "NativeWind (Tailwind)", "Expo Router", "Context API", "PDF.js"],
                icon: <Smartphone className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Backend",
                items: ["Node.js + Express", "RESTful API (80+ endpoints)", "Service Layer Pattern", "Firebase Admin SDK", "Multer", "PM2"],
                icon: <Database className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Infrastructure",
                items: ["Firebase Firestore", "Firebase Storage", "Firebase Auth", "Google Calendar API", "OpenAI APIs", "Cloud Hosting"],
                icon: <Shield className="w-8 h-8" />,
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

      {/* Performance Metrics */}
      <section className="py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-gray-900 mb-12 text-center"
        >
          Project Statistics
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {project.metrics.slice(0, 8).map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-6 text-white text-center"
            >
              <div className="text-2xl font-black mb-2">{metric.split(':')[0] || metric}</div>
              <div className="text-sm opacity-90">{metric.includes(':') ? metric.split(':')[1] : ''}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl text-white">
        <div className="px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black mb-12 text-center"
          >
            Technical Achievements
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Real-time Features",
                items: ["Live audio transcription", "Chunk-based processing", "Real-time state sync", "Live feed updates"]
              },
              {
                title: "Cross-Platform",
                items: ["Single codebase", "iOS native app", "Android native app", "Web browser support"]
              },
              {
                title: "Performance",
                items: ["Image compression", "Text truncation", "Lazy loading", "Optimized queries"]
              },
              {
                title: "Security",
                items: ["Firebase Authentication", "Token-based auth", "User data isolation", "File validation"]
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 text-center border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
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

