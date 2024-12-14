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
    description: 'Looking to evaluate professional experience and skills',
    chatPrompt: "Hi! I'm here to assist you with evaluating Anu's professional experience and skills. Would you like to know about her technical expertise, project experience, or leadership roles?"
  },
  { 
    id: 'visitor',
    emoji: '🔍',
    bg: 'bg-purple-500',
    label: 'Just Browsing',
    description: 'Interested in exploring projects and achievements',
    chatPrompt: "Welcome! I'd be happy to guide you through Anu's projects and achievements. What interests you most - web development, AI projects, or full-stack applications?"
  },
  { 
    id: 'friend',
    emoji: '👋',
    bg: 'bg-green-500',
    label: 'Friend',
    description: 'Want to know more about my journey and interests',
    chatPrompt: "Hey there! I'd love to tell you more about Anu's journey and interests. Would you like to hear about her background, hobbies, or what she's currently working on?"
  }
];

export default function LandingPage() {
  const [hoveredAvatar, setHoveredAvatar] = useState<string | null>(null);
  const router = useRouter();

  const handleAvatarClick = (avatar: typeof avatars[0]) => {
    // Store the selected user type and chat prompt in localStorage or state management
    localStorage.setItem('userType', avatar.id);
    localStorage.setItem('chatPrompt', avatar.chatPrompt);
    router.push('/chat');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center">
          <motion.div 
            className="relative w-48 h-48 mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/assets/images/profile.jpg"
              alt="Anu Bilegdemberel"
              fill
              className="rounded-full object-cover border-4 border-gray-800/50"
            />
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-4">
              Hi, I'm Anu
            </h1>
            <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold mb-16">
              Full-Stack Engineer
            </h2>
          </motion.div>
        </div>

        <motion.p 
          className="text-xl text-gray-400 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Tell me what brings you here today
        </motion.p>

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
                onClick={() => handleAvatarClick(avatar)}
                className={`w-full ${avatar.bg} rounded-2xl p-8 flex flex-col items-center gap-4 transform transition-all duration-200
                  hover:shadow-lg hover:shadow-${avatar.bg}/50 backdrop-blur-sm bg-opacity-20`}
              >
                <span className="text-5xl mb-2">{avatar.emoji}</span>
                <h3 className="text-xl font-semibold">{avatar.label}</h3>
                <p className="text-sm text-gray-300 text-center">
                  {avatar.description}
                </p>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}