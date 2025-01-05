"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useEffect } from 'react';

interface AboutExpandedViewProps {
  section: 'journey' | 'hobbies';
  onClose: () => void;
}

export default function AboutExpandedView({ section, onClose }: AboutExpandedViewProps) {
  const content = {
    journey: {
      title: "My Professional Journey",
      description: "Transforming ideas into impactful digital solutions. With a foundation in UX Engineering and expertise in full-stack development, I bring a unique blend of technical prowess and design thinking to every project.",
      details: [
        {
          icon: "🌏",
          title: "Global Perspective",
          description: "Experience working with international teams and diverse cultural contexts"
        },
        {
          icon: "💡",
          title: "Innovation Focus",
          description: "Constantly exploring cutting-edge technologies and creative solutions"
        },
        {
          icon: "🚀",
          title: "Rapid Growth",
          description: "Quick learner with proven ability to adapt to new technologies"
        },
        {
          icon: "🤝",
          title: "Collaborative Spirit",
          description: "Strong team player with excellent communication skills"
        }
      ]
    },
    hobbies: {
      title: "Beyond the Code",
      description: "When I'm not crafting digital experiences, I'm exploring creative pursuits that fuel my innovation and keep me inspired. These diverse interests contribute to my unique approach to problem-solving.",
      details: [
        {
          icon: "🎨",
          title: "Digital Art",
          description: "Creating visual stories through digital mediums"
        },
        {
          icon: "📸",
          title: "Photography",
          description: "Capturing moments and exploring visual composition"
        },
        {
          icon: "🎯",
          title: "UX Research",
          description: "Staying current with latest design trends and user behaviors"
        },
        {
          icon: "📚",
          title: "Continuous Learning",
          description: "Always expanding knowledge in tech and design"
        }
      ]
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-lola/95 backdrop-blur-lg z-50 overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="min-h-screen py-12 px-4"
        >
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-end mb-8">
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-white/30 backdrop-blur-sm hover:bg-cranberry/20 transition-colors"
              >
                <FaTimes className="w-6 h-6 text-cranberry" />
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-havelock via-cranberry to-tan rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 animate-gradient-xy" />
              <div className="relative p-8 glass-card">
                <h2 className="text-4xl font-bold mb-6 gradient-text">
                  {content[section].title}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-12 text-lg">
                  {content[section].description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {content[section].details.map((detail, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="group/card relative"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-havelock via-cranberry to-tan rounded-xl opacity-0 group-hover/card:opacity-20 blur transition-all duration-300" />
                      <div className="relative p-6 glass-card hover:border-havelock/30">
                        <span className="text-2xl mb-3 block">{detail.icon}</span>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">{detail.title}</h3>
                        <p className="text-gray-600">{detail.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 