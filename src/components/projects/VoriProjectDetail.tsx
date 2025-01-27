import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '../../types/project';

export default function VoriProjectDetail({ project }: { project: Project }) {
  return (
    <>
      {/* My Role */}
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
              className="flex-shrink-0 w-[380px] bg-gradient-to-br from-emerald-500/10 via-[#0A0A0F] to-teal-500/5 p-6 rounded-2xl border border-emerald-500/20 backdrop-blur-sm"
            >
              <div className="relative">
                <div className="absolute -top-10 -right-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <span className="text-3xl font-bold text-emerald-400">{role.percentage}%</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{role.area}</h3>
                </div>
                <p className="text-gray-400 text-lg">{role.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0A0A0F] p-6 rounded-2xl border border-emerald-500/20 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <span className="text-emerald-400 text-lg">✦</span>
                </div>
                <p className="text-gray-400">{feature}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          Tech Stack & Tools
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[...project.technologies, ...(project.tools || [])].map((tech, index) => (
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
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-[#0A0A0F] to-teal-500/5 border border-emerald-500/20 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <p className="text-gray-400 text-center group-hover:text-white transition-colors relative z-10">
                {tech}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Screenshots */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-white mb-8">Project Gallery</h2>
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
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
} 