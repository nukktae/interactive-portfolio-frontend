"use client";

import { motion } from 'framer-motion';
import { SiTypescript, SiPython, SiReact, SiNextdotjs, 
         SiNodedotjs, SiPostgresql, SiFlutter, SiFirebase,
         SiGit, SiAmazon, SiGithub, SiJavascript } from 'react-icons/si';

export interface TechStackItem {
  name: string;
  Icon: React.ComponentType<any>;
  color: string;
}

export const techStack: TechStackItem[] = [
  { name: 'TypeScript', Icon: SiTypescript, color: '#498FD8' },
  { name: 'Python', Icon: SiPython, color: '#D86089' },
  { name: 'React', Icon: SiReact, color: '#FB9D5B' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#498FD8' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#D86089' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#FB9D5B' },
  { name: 'Flutter', Icon: SiFlutter, color: '#498FD8' },
  { name: 'Firebase', Icon: SiFirebase, color: '#D86089' },
  { name: 'Git', Icon: SiGit, color: '#FB9D5B' },
  { name: 'AWS', Icon: SiAmazon, color: '#498FD8' },
  { name: 'GitHub', Icon: SiGithub, color: '#D86089' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#FB9D5B' },
];

export default function TechStack3D() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
      {techStack.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="relative group cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: Math.min(index * 0.05, 0.3) }}
        >
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at center, ${tech.color}20 0%, transparent 70%)`
            }}
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.3 }}
          />

          {/* Tech icon container */}
          <motion.div
            className="relative p-6 rounded-xl border border-[#DDCCD0]/20 backdrop-blur-sm
                     bg-white/5 hover:bg-white/10 transition-all duration-300"
            whileHover={{ 
              y: -8,
              rotateY: 180,
              transition: { duration: 0.4, type: "spring", stiffness: 300 }
            }}
          >
            <motion.div
              className="relative w-16 h-16 mx-auto backface-hidden flex items-center justify-center"
              style={{ perspective: "1000px" }}
              whileHover={{ 
                scale: 1.2,
                rotateZ: 360,
                transition: { duration: 0.6, type: "spring", bounce: 0.5 }
              }}
            >
              <tech.Icon 
                className="w-12 h-12" 
                style={{ color: tech.color }}
              />
            </motion.div>

            {/* Tech name */}
            <motion.p
              className="text-center mt-4 font-medium opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: `linear-gradient(90deg, ${tech.color}, ${tech.color}CC)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              initial={{ y: 10 }}
              whileHover={{ y: 0 }}
            >
              {tech.name}
            </motion.p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
} 