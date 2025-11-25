import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '../../types/project';
import { Clock, TrendingUp, Zap, Users, Award, Code, Database, Smartphone, BarChart3, Mail, MessageSquare, FileText, Settings, Shield, Layers } from 'lucide-react';

export default function BestiaProjectDetail({ project }: { project: Project }) {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl text-white">
        <div className="px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Layers className="w-8 h-8 text-yellow-400" />
              <h2 className="text-4xl font-black">LeadBoard Lite - Enterprise CRM</h2>
            </div>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive Lead Management System (LMS) built as a full-stack web application for real estate teams. 
              Features advanced frontend architecture, robust backend API integration, and sophisticated UI/UX design patterns.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { label: "Components", value: "60+" },
              { label: "API Endpoints", value: "40+" },
              { label: "Custom Hooks", value: "20+" },
              { label: "Features", value: "10+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-black text-yellow-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Showcase */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-8">Design & Development</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * num }}
                  className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 border border-gray-200"
                >
                  <Image
                    src={`/assets/images/projects/Bestia/bestiadetail${num}.png`}
                    alt={`Bestia design ${num}`}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-16 bg-gray-50 rounded-3xl">
        <div className="px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-gray-900 mb-12 text-center"
          >
            Architecture & Technology Stack
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend",
                items: ["Next.js 15.4.6 (App Router)", "React 19.1.0", "TypeScript 5.9.3", "Tailwind CSS 4.1.12", "Turbopack", "60+ Components"],
                icon: <Code className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Backend & APIs",
                items: ["Next.js API Routes", "RESTful Architecture", "JWT Authentication", "40+ Endpoints", "External CRM APIs", "Twilio Integration"],
                icon: <Database className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Integrations",
                items: ["Google Maps API", "Twilio (SMS/Voice)", "Email Services", "PDF Generation", "Recharts Analytics", "Drag & Drop"],
                icon: <Layers className="w-8 h-8" />,
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
              title: "Lead Management",
              description: "Full CRUD operations, advanced filtering, 20+ custom statuses, drag-and-drop reordering, bulk operations",
              icon: <Users className="w-8 h-8" />,
              color: "from-blue-500 to-cyan-500"
            },
            {
              title: "Property Management",
              description: "Property details, MLS integration, Zestimate, financial versions, MAO calculator, comparison tools",
              icon: <FileText className="w-8 h-8" />,
              color: "from-green-500 to-emerald-500"
            },
            {
              title: "Contact Management",
              description: "Contact CRUD, multiple contacts per lead, communication history, relationship tracking",
              icon: <Users className="w-8 h-8" />,
              color: "from-purple-500 to-pink-500"
            },
            {
              title: "Email System",
              description: "Email templates, composer, tracking, history, template categories",
              icon: <Mail className="w-8 h-8" />,
              color: "from-orange-500 to-red-500"
            },
            {
              title: "SMS & Voice",
              description: "Twilio integration, SMS templates, call dialer, recordings, conference calls, status tracking",
              icon: <MessageSquare className="w-8 h-8" />,
              color: "from-indigo-500 to-purple-500"
            },
            {
              title: "Analytics Dashboard",
              description: "Performance metrics, team analytics, training impact, progress charts, Recharts visualization",
              icon: <BarChart3 className="w-8 h-8" />,
              color: "from-teal-500 to-blue-500"
            },
            {
              title: "Notes & Activity",
              description: "Lead notes, activity logs, change tracking, user activity, hover tooltips, timestamps",
              icon: <FileText className="w-8 h-8" />,
              color: "from-yellow-500 to-amber-500"
            },
            {
              title: "Settings & Config",
              description: "Team management, role-based access, lead sources, status configuration, permissions",
              icon: <Settings className="w-8 h-8" />,
              color: "from-gray-500 to-slate-500"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full hover:border-gray-900 hover:shadow-lg transition-all duration-300">
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

      {/* Technical Highlights */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black rounded-3xl text-white">
        <div className="px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black mb-12 text-center"
          >
            Technical Highlights
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Feature-Based Architecture",
                items: ["Modular structure", "Separation of concerns", "60+ reusable components", "20+ custom hooks", "Context API state management"]
              },
              {
                title: "Performance Optimizations",
                items: ["Server-side rendering", "Code splitting", "Lazy loading", "Debounced search", "Strategic caching", "Image optimization"]
              },
              {
                title: "Type Safety & Quality",
                items: ["TypeScript strict mode", "100+ typed files", "ESLint configuration", "Error boundaries", "Comprehensive error handling"]
              },
              {
                title: "Security & Auth",
                items: ["JWT authentication", "Token refresh", "Role-based access", "Input validation", "XSS/CSRF protection", "Secure API communication"]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-black text-gray-900 mb-8 text-center">Impact Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <Clock className="w-6 h-6 text-gray-900 mb-3" />
              <p className="text-lg font-medium text-gray-900">Saves 2.5–4 hours per agent per day</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <TrendingUp className="w-6 h-6 text-gray-900 mb-3" />
              <p className="text-lg font-medium text-gray-900">Cuts lead workflow time by 40–60%</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <Zap className="w-6 h-6 text-gray-900 mb-3" />
              <p className="text-lg font-medium text-gray-900">Reduces offer preparation time by 85–90%</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <Users className="w-6 h-6 text-gray-900 mb-3" />
              <p className="text-lg font-medium text-gray-900">Enables agents to handle 2–3× more leads per day</p>
            </div>
          </div>
        </motion.div>

        {/* LA Tech Week Success */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 p-8 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg border border-yellow-200 max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-yellow-600" />
            <h3 className="text-2xl font-black text-gray-900">LA Tech Week Success</h3>
          </div>
          <p className="text-lg text-gray-700">
            Generated <span className="font-bold">300 real estate agents on the waiting list</span> through compelling design and seamless frontend integration.
          </p>
        </motion.div>
      </section>

      {/* API Integration */}
      <section className="py-16 bg-gray-50 rounded-3xl">
        <div className="px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-gray-900 mb-12 text-center"
          >
            API Integration & Endpoints
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Lead Management", count: "15+ endpoints", color: "from-blue-500 to-cyan-500" },
              { name: "Property Data", count: "5+ endpoints", color: "from-green-500 to-emerald-500" },
              { name: "Communication", count: "10+ endpoints", color: "from-purple-500 to-pink-500" },
              { name: "Templates", count: "8+ endpoints", color: "from-orange-500 to-red-500" },
              { name: "Team Management", count: "5+ endpoints", color: "from-indigo-500 to-purple-500" },
              { name: "Analytics", count: "3+ endpoints", color: "from-teal-500 to-blue-500" },
              { name: "Settings", count: "4+ endpoints", color: "from-gray-500 to-slate-500" },
              { name: "Authentication", count: "4+ endpoints", color: "from-yellow-500 to-amber-500" }
            ].map((api, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${api.color} rounded-xl p-6 text-white text-center`}
              >
                <div className="text-2xl font-black mb-2">{api.count}</div>
                <div className="text-sm opacity-90">{api.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Role */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-black text-gray-900 mb-8 text-center">My Role</h2>
          <div className="space-y-6">
            {project.roles.map((role, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-bold text-gray-900">{role.area}</h4>
                  <span className="text-2xl font-black text-gray-400">{role.percentage}%</span>
                </div>
                <p className="text-gray-700">{role.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-gray-50 rounded-3xl">
        <div className="px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-gray-900 mb-12 text-center"
          >
            Technology Stack
          </motion.h2>
          
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-white border border-gray-200 text-gray-900 rounded-full text-sm font-medium hover:border-gray-900 hover:shadow-md transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
