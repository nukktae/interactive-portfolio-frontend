import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '../../types/project';
import { Clock, TrendingUp, Zap, Users, Award } from 'lucide-react';

export default function BestiaProjectDetail({ project }: { project: Project }) {
  return (
    <>
      {/* Design Showcase - Images at the top */}
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

      {/* Project Overview - Clean & Minimal */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-5xl font-black text-gray-900 mb-6">Project Overview</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {project.detailedDescription}
            </p>
          </motion.div>

          {/* Key Metrics - Clean Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <h3 className="text-3xl font-black text-gray-900 mb-8">Impact Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-200 rounded-lg">
                <Clock className="w-6 h-6 text-gray-900 mb-3" />
                <p className="text-lg font-medium text-gray-900">Saves 2.5–4 hours per agent per day</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <TrendingUp className="w-6 h-6 text-gray-900 mb-3" />
                <p className="text-lg font-medium text-gray-900">Cuts lead workflow time by 40–60%</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <Zap className="w-6 h-6 text-gray-900 mb-3" />
                <p className="text-lg font-medium text-gray-900">Reduces offer preparation time by 85–90%</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <Users className="w-6 h-6 text-gray-900 mb-3" />
                <p className="text-lg font-medium text-gray-900">Enables agents to handle 2–3× more leads per day</p>
              </div>
            </div>
          </motion.div>

          {/* LA Tech Week Success */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-20 p-8 bg-gray-50 rounded-lg border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-gray-900" />
              <h3 className="text-2xl font-black text-gray-900">LA Tech Week Success</h3>
            </div>
            <p className="text-lg text-gray-700">
              Generated <span className="font-bold">300 real estate agents on the waiting list</span> through compelling design and seamless frontend integration.
            </p>
          </motion.div>

          {/* My Role - Simplified */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-20"
          >
            <h3 className="text-3xl font-black text-gray-900 mb-8">My Role</h3>
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

          {/* Technologies - Clean List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-20"
          >
            <h3 className="text-3xl font-black text-gray-900 mb-8">Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-900 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
