import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '../../types/project';

export default function MakeEatProjectDetail({ project }: { project: Project }) {
  return (
    <>
      {/* Project Overview */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-white mb-8">Project Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900/50 border border-gray-800"
            >
              <Image
                src={image}
                alt={`MakeEat Interface ${index + 1}`}
                fill
                className="object-cover"
              />
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 rounded-xl border border-gray-800"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                <span className="text-blue-400 text-lg">✦</span>
              </div>
              <p className="text-gray-300">{feature}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-white mb-8">Technical Implementation</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Challenges</h3>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full flex-shrink-0" />
                  <p>{challenge}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Solutions</h3>
            <div className="space-y-4">
              {project.solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full flex-shrink-0" />
                  <p>{solution}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-white mb-8">Performance Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 rounded-xl border border-gray-800"
            >
              <p className="text-gray-300 text-lg font-medium">{metric}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Role & Contributions */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-white mb-8">Role & Contributions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 rounded-xl border border-gray-800"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{role.area}</h3>
              <div className="h-2 bg-gray-700 rounded-full mb-3">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${role.percentage}%` }}
                />
              </div>
              <p className="text-gray-300">{role.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
} 