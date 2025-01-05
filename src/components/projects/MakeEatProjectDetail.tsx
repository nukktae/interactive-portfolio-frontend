import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '../../types/project';
import MakeEatScreenCarousel from './MakeEatScreenCarousel';

export default function MakeEatProjectDetail({ project }: { project: Project }) {
  return (
    <>
      {/* My Role - Horizontal scrolling cards with 3D effect */}
      <section className="py-12 overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-4xl font-bold text-white mb-8 pl-4"
        >
          My Role
        </motion.h2>
        <div className="flex space-x-6 px-4 pb-8 overflow-x-auto scrollbar-hide">
          {project.roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, rotateX: 30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.2 }
              }}
              transition={{ delay: index * 0.2 }}
              className="flex-shrink-0 w-[380px] bg-gradient-to-br from-[#BE8A62]/10 via-[#0A0A0F] to-[#BE8A62]/5 p-6 rounded-2xl border border-[#BE8A62]/20 backdrop-blur-sm"
            >
              <div className="relative">
                <div className="absolute -top-10 -right-6 w-24 h-24 bg-[#BE8A62]/10 rounded-full blur-2xl" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-[#BE8A62]/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <span className="text-3xl font-bold text-[#BE8A62]">{role.percentage}%</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{role.area}</h3>
                </div>
                <p className="text-gray-400 text-lg">{role.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills - Split screen with floating elements */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#BE8A62]/5 via-transparent to-transparent" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#BE8A62]/10 rounded-full blur-3xl" />
            <h2 className="text-3xl font-bold text-white mb-8">Technical Skills</h2>
            <div className="space-y-4">
              {project.hardSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 10 }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-center gap-4 p-4 rounded-xl hover:bg-[#BE8A62]/10 transition-all duration-300"
                >
                  <span className="w-2 h-2 bg-[#BE8A62] rounded-full group-hover:scale-150 transition-transform" />
                  <span className="text-gray-400 text-lg group-hover:text-white transition-colors">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#BE8A62]/10 rounded-full blur-3xl" />
            <h2 className="text-3xl font-bold text-white mb-8">Soft Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              {project.softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-[#0A0A0F]/50 border border-[#BE8A62]/20 backdrop-blur-sm"
                >
                  <span className="text-gray-400">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies & Tools */}
      <section className="py-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          Tech Stack & Tools
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            // Backend & Database
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "DataGrip",
            // Development Tools
            "Visual Studio Code",
            "Git",
            "GitHub",
            "Postman",
            // Frontend & Design
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "Figma",
            // AI & Cloud
            "OpenAI API",
            "AWS Lambda",
            "Docker",
            "Vercel"
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.1,
                rotateY: 10,
                transition: { duration: 0.2 }
              }}
              transition={{ delay: index * 0.05 }}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#BE8A62]/10 via-[#0A0A0F] to-[#BE8A62]/5 border border-[#BE8A62]/20 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-[#BE8A62]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <p className="text-gray-400 text-center group-hover:text-white transition-colors relative z-10">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0A0A0F] p-6 rounded-2xl border border-[#BE8A62]/20 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#BE8A62]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#BE8A62] text-lg">✦</span>
                </div>
                <p className="text-gray-400">{feature}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Screens */}
      <section className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <MakeEatScreenCarousel />
        </motion.div>
        
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#BE8A62]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#BE8A62]/5 rounded-full blur-3xl" />
        </div>
      </section>
    </>
  );
} 