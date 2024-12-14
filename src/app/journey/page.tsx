"use client";

import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Image from 'next/image';

const journeyItems = [
  {
    icon: "🌏",
    title: "Global Perspective",
    description: "Living across Mongolia, China, Korea, and the USA has shaped my unique approach to problem-solving and cultural understanding.",
    image: "/assets/images/global.jpg"
  },
  {
    icon: "👩‍💻",
    title: "Tech for Education",
    description: "Committed to developing innovative solutions for children's education, with a special focus on creating accessible applications for kids with special needs.",
    image: "/assets/images/education.jpg"
  },
  {
    icon: "📱",
    title: "Digital Innovation",
    description: "Passionate about app and web development, constantly analyzing trends to create cutting-edge user experiences.",
    image: "/assets/images/innovation.jpg"
  }
];

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            My Journey
          </h1>
          <p className="text-xl text-gray-400">A Global Adventure in Tech & Education</p>
        </motion.div>

        <div className="space-y-24">
          {journeyItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-8 relative">
                <div className="w-full md:w-1/3 aspect-square rounded-3xl overflow-hidden">
                  <div className="w-full h-full relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:opacity-75 transition-opacity" />
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl z-10">
                      {item.icon}
                    </span>
                  </div>
                </div>
                <div className="flex-1 md:ml-8">
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              {index < journeyItems.length - 1 && (
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full h-16 w-px bg-gradient-to-b from-purple-500/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 