"use client";

import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import { FaPen, FaLanguage, FaHeart, FaUsers, FaNewspaper, FaSignLanguage } from 'react-icons/fa';
import { GiSewingNeedle } from 'react-icons/gi';
import { MdPhotoCamera } from 'react-icons/md';

const hobbies = [
  {
    icon: <FaNewspaper className="w-8 h-8" />,
    title: "Journalism",
    description: "Contributing as a guest reporter at Kookmin University Press, sharing student experiences and global perspectives.",
    link: "https://press.kookmin.ac.kr/news/articleView.html?idxno=103623",
    bgClass: "from-blue-500/10 to-purple-500/10"
  },
  {
    icon: <GiSewingNeedle className="w-8 h-8" />,
    title: "Crocheting",
    description: "Creating handmade pieces through the art of crocheting, finding peace in every stitch.",
    bgClass: "from-pink-500/10 to-rose-500/10"
  },
  {
    icon: <FaSignLanguage className="w-8 h-8" />,
    title: "Language Learning",
    description: "Currently learning American Sign Language (ASL), passionate about breaking communication barriers.",
    bgClass: "from-green-500/10 to-teal-500/10"
  },
  {
    icon: <MdPhotoCamera className="w-8 h-8" />,
    title: "Photography",
    description: "Capturing moments and exploring visual storytelling through digital photography.",
    bgClass: "from-yellow-500/10 to-orange-500/10"
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    title: "Community Engagement",
    description: "Active in student council's international affairs, coding clubs, and UI/UX meetups, fostering connections in tech and design communities.",
    bgClass: "from-violet-500/10 to-indigo-500/10"
  },
  {
    icon: <FaHeart className="w-8 h-8" />,
    title: "Food Explorer",
    description: "Discovering diverse cuisines and sharing culinary experiences with others.",
    bgClass: "from-red-500/10 to-pink-500/10"
  }
];

export default function HobbiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-6xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent mb-4">
            Passions & Interests
          </h1>
          <p className="text-xl text-gray-400">Exploring Life Beyond Tech</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              className={`bg-gradient-to-br ${hobby.bgClass} rounded-3xl p-8 border border-gray-800/50 backdrop-blur-sm 
                hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                className="text-4xl mb-6 text-gray-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {hobby.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {hobby.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {hobby.description}
              </p>
              {hobby.link && (
                <motion.a
                  href={hobby.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Read my articles →
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 