"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../../components/Navbar';

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="max-w-4xl mx-auto py-16 px-4">
        <motion.div {...fadeIn} className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Hello, I'm Anu 👋
            </h1>
            <p className="text-xl text-gray-400">UX Engineering Student & Creative Developer</p>
          </div>

          {/* About Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-6 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-2xl font-bold mb-4">My Journey 🚀</h2>
              <p className="text-gray-400">
                As a UX Engineering student, I blend creativity with technical expertise. 
                My passion lies in creating intuitive, user-centered applications that make 
                a real difference in people's lives.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-6 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-2xl font-bold mb-4">Hobbies & Interests 🎨</h2>
              <p className="text-gray-400">
                When I'm not coding, you'll find me exploring digital art, practicing 
                photography, and staying up-to-date with the latest UX trends. I'm also 
                passionate about sustainable technology and AI ethics.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-6 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-2xl font-bold mb-4">Inspiration 💡</h2>
              <p className="text-gray-400">
                I draw inspiration from nature, minimalist design, and the endless 
                possibilities of technology. My goal is to create experiences that are 
                both beautiful and functional.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-6 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-2xl font-bold mb-4">Commitment 🎯</h2>
              <p className="text-gray-400">
                I'm committed to continuous learning and growth in the ever-evolving 
                tech landscape. My focus is on creating accessible, inclusive, and 
                innovative digital solutions.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
} 