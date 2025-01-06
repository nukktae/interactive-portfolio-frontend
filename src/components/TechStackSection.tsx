"use client";

import { motion } from 'framer-motion';
import { TechCategory, techCategories } from '@/types/techStack';
import SectionWrapper from './SectionWrapper';

export default function TechStackSection() {
  return (
    <SectionWrapper className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-7xl font-bold mb-6 tracking-tight">
            Tech{' '}
            <span className="bg-gradient-to-r from-[#498FD8] via-[#D86089] to-[#FB9D5B] bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="text-gray-800 text-lg max-w-2xl mx-auto font-medium">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category: TechCategory, index: number) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group/card relative"
            >
              {/* Glassmorphism background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/20 rounded-3xl backdrop-blur-lg" />
              
              {/* Animated border gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#498FD8]/30 via-[#D86089]/30 to-[#FB9D5B]/30 animate-gradient-xy" />
              
              {/* Hover glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#498FD8] via-[#D86089] to-[#FB9D5B] rounded-3xl opacity-0 group-hover/card:opacity-30 blur-xl transition-all duration-500" />

              <div className="relative p-8 rounded-3xl">
                <motion.h3 
                  className="text-2xl font-bold mb-6 text-gray-800"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {category.title}
                </motion.h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex: number) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      transition={{ 
                        delay: (index * 0.1) + (skillIndex * 0.05),
                        type: "spring",
                        stiffness: 300
                      }}
                      className="group/skill flex items-center gap-4 p-2 rounded-xl hover:bg-white/20 transition-all duration-300"
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="p-2 rounded-lg bg-white/20"
                      >
                        <skill.Icon 
                          className="w-5 h-5"
                          style={{ color: category.color }}
                        />
                      </motion.div>
                      <span className="text-gray-700 font-medium group-hover/skill:text-gray-900 transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
} 