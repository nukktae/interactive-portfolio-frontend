"use client";

import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const journeyItems = [
  {
    icon: "🌏",
    title: "Global Perspective",
    description: "Living across Mongolia, China, Korea, and the USA has shaped my unique approach to problem-solving and cultural understanding.",
    image: "/assets/images/global.jpg",
    details: [
      "Cross-cultural collaboration experience",
      "Multilingual communication skills",
      "International education background",
      "Diverse project management approaches"
    ]
  },
  {
    icon: "👩‍💻",
    title: "Tech for Education",
    description: "Committed to developing innovative solutions for children's education, with a special focus on creating accessible applications for kids with special needs.",
    image: "/assets/images/education.jpg",
    details: [
      "Educational app development",
      "Accessibility-focused design",
      "Child-friendly UI/UX",
      "Special needs considerations"
    ]
  },
  {
    icon: "📱",
    title: "Digital Innovation",
    description: "Passionate about app and web development, constantly analyzing trends to create cutting-edge user experiences.",
    image: "/assets/images/innovation.jpg",
    details: [
      "Modern tech stack adoption",
      "User-centered development",
      "Performance optimization",
      "Innovative solutions"
    ]
  }
];

export default function JourneyPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Close Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => router.push('/')}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <FaTimes className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-6xl font-bold bg-gradient-to-r from-havelock via-cranberry to-tan bg-clip-text text-transparent mb-4">
            My Journey
          </h1>
          <p className="text-xl text-gray-600">A Global Adventure in Tech & Education</p>
        </motion.div>

        <div className="space-y-32">
          {journeyItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden mb-12 group shadow-lg h-[50vh]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              <div className="max-w-4xl mx-auto">
                <motion.div className="text-center mb-12">
                  <span className="text-6xl mb-6 block">{item.icon}</span>
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-havelock via-cranberry to-tan bg-clip-text text-transparent">
                    {item.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-12">{item.description}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {item.details.map((detail, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm
                               hover:bg-gradient-to-br hover:from-havelock/5 hover:via-cranberry/5 hover:to-tan/5 
                               transition-all duration-300 group hover:shadow-md"
                    >
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                        {detail}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 