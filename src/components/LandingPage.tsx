"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const avatars = [
  { 
    id: 'recruiter',
    emoji: '👔',
    bg: 'bg-blue-500',
    label: 'Hiring Manager',
    description: 'Looking to evaluate professional experience and skills'
  },
  { 
    id: 'visitor',
    emoji: '🔍',
    bg: 'bg-purple-500',
    label: 'Just Browsing',
    description: 'Interested in exploring projects and achievements'
  },
  { 
    id: 'friend',
    emoji: '👋',
    bg: 'bg-green-500',
    label: 'Friend',
    description: 'Want to know more about my journey and interests'
  }
];

export default function LandingPage() {
  const router = useRouter();
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [hoveredAvatar, setHoveredAvatar] = useState<string | null>(null);

  const handleAvatarSelect = (avatarId: string, emoji: string, bg: string) => {
    setSelectedAvatar(avatarId);
    localStorage.setItem('selectedAvatar', emoji);
    localStorage.setItem('selectedAvatarBg', bg);
    router.push(`/chat?avatar=${avatarId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />
      
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        {/* Profile Section */}
        <motion.div 
          className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 p-1 mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="w-full h-full rounded-full overflow-hidden">
            <Image
              src="/assets/images/profile.jpg"
              alt="Profile"
              width={128}
              height={128}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>

        {/* Title Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm Anu
          </h1>
          <p className="text-xl text-gray-400">
            Tell me what brings you here today
          </p>
        </motion.div>

        {/* Avatar Selection */}
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          {avatars.map((avatar, index) => (
            <motion.div
              key={avatar.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
              onHoverStart={() => setHoveredAvatar(avatar.id)}
              onHoverEnd={() => setHoveredAvatar(null)}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAvatarSelect(avatar.id, avatar.emoji, avatar.bg)}
                className={`w-full ${avatar.bg} rounded-2xl p-8 flex flex-col items-center gap-4 transform transition-all duration-200
                  hover:shadow-lg hover:shadow-${avatar.bg}/50 backdrop-blur-sm bg-opacity-20`}
              >
                <span className="text-5xl mb-2">{avatar.emoji}</span>
                <h3 className="text-xl font-semibold">{avatar.label}</h3>
                <p className="text-sm text-gray-300 text-center">
                  {avatar.description}
                </p>
              </motion.button>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: hoveredAvatar === avatar.id ? 1 : 0,
                  scale: hoveredAvatar === avatar.id ? 1 : 0.8
                }}
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full"
              >
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                  <span className="text-sm text-white/90">
                    Click to start chatting
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}