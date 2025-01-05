import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '../../types/project';

export default function AwsProjectDetail({ project }: { project: Project }) {
  return (
    <>
      {/* Architecture Overview */}
      <section className="py-12 bg-gradient-to-br from-[#E6DEDE]/50 to-[#BCB4C0]/30 rounded-2xl border border-[#D9B5BB]/20">
        <h2 className="text-3xl font-bold text-[#B39EB1] mb-8 px-8">System Architecture</h2>
        <div className="relative aspect-[16/9] mx-8">
          <Image
            src="/assets/images/aws-architecture.png"
            alt="AWS Architecture Diagram"
            fill
            className="object-contain rounded-xl"
          />
        </div>
        <div className="mt-8 px-8">
          <h3 className="text-xl font-semibold text-[#B39EB1] mb-4">Key Components</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.technologies.map((component, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 text-[#BCB4C0]"
              >
                <span className="w-2 h-2 bg-[#D9B5BB] rounded-full" />
                {component}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Backend Achievements */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-[#B39EB1] mb-8">Backend Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.highlights.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 bg-gradient-to-br from-[#E6DEDE]/20 via-[#BCB4C0]/10 to-[#E6DEDE]/20 
                         p-6 rounded-xl border border-[#D9B5BB]/20"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-[#D9B5BB]/20 rounded-full flex items-center justify-center">
                <span className="text-[#B39EB1] text-lg">✦</span>
              </div>
              <p className="text-[#BCB4C0]">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Demo Video */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-[#B39EB1] mb-8">System Demo</h2>
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#DDCCD0]/20 border border-[#BCB4C0]/30">
          <video 
            className="w-full h-full object-cover"
            controls
            poster="/assets/images/content-mod.png"
          >
            <source src="/assets/videos/demoaws.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </>
  );
} 