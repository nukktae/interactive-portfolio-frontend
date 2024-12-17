"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import { ParticleGame } from './ParticleGame';

interface Avatar {
  id: string;
  icon: JSX.Element;
  bg: string;
  label: string;
  description: string;
  chatPrompt: string;
}

const avatars: Avatar[] = [
  { 
    id: 'recruiter',
    icon: (
      <motion.div className="relative w-16 h-16">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </motion.div>
      </motion.div>
    ),
    bg: 'from-blue-500/20 to-cyan-500/20',
    label: 'Hiring Manager',
    description: 'Looking to evaluate professional experience and skills',
    chatPrompt: 'You are speaking with a hiring manager interested in technical skills and experience.'
  },
  { 
    id: 'visitor',
    icon: (
      <motion.div className="relative w-16 h-16">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-violet-400 to-fuchsia-300 rounded-xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </motion.div>
      </motion.div>
    ),
    bg: 'from-violet-500/20 to-fuchsia-500/20',
    label: 'Just Browsing',
    description: 'Interested in exploring projects and achievements',
    chatPrompt: 'You are speaking with someone interested in learning about projects and achievements.'
  },
  { 
    id: 'friend',
    icon: (
      <motion.div className="relative w-16 h-16">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-300 rounded-xl"
          animate={{
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </motion.div>
      </motion.div>
    ),
    bg: 'from-emerald-500/20 to-teal-500/20',
    label: 'Friend',
    description: 'Want to know more about my journey and interests',
    chatPrompt: 'You are speaking with a friend interested in personal journey and interests.'
  }
];

export default function LandingPage() {
  const [hoveredAvatar, setHoveredAvatar] = useState<string | null>(null);
  const [gameScore, setGameScore] = useState(0);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAvatarClick = (avatar: typeof avatars[0]) => {
    // Store the selected user type and chat prompt in localStorage or state management
    localStorage.setItem('userType', avatar.id);
    localStorage.setItem('chatPrompt', avatar.chatPrompt);
    router.push('/chat');
  };

  const handleScoreUpdate = (newScore: number) => {
    setGameScore(newScore);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black text-white relative overflow-hidden">
      <ParticleGame onScoreUpdate={setGameScore} />
      
      <motion.div 
        className="fixed top-24 right-8 z-10"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.div 
          className="bg-gradient-to-r from-violet-500/10 to-indigo-500/10 backdrop-blur-sm 
                     rounded-full px-4 py-2 border border-violet-500/20"
          whileHover={{ scale: 1.05 }}
          animate={{
            boxShadow: ['0 0 20px rgba(139, 92, 246, 0)', '0 0 20px rgba(139, 92, 246, 0.2)', '0 0 20px rgba(139, 92, 246, 0)'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <svg 
              className="w-4 h-4 text-violet-400" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
              {gameScore} particles collected
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      <Navbar />

      <AnimatePresence>
        {mounted && (
          <motion.div 
            className="max-w-7xl mx-auto px-4 py-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
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

              <div className="text-center space-y-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h1 className="text-6xl font-bold mb-4 tracking-tight">
                    Hi, I'm{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                      Anu
                    </span>
                  </h1>
                  <motion.div
                    className="flex items-center justify-center gap-3"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h2 className="text-2xl font-medium text-gray-400">
                      Full-Stack Engineer
                    </h2>
                  </motion.div>
                </motion.div>

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
                        className={`w-full bg-gradient-to-r ${avatar.bg} rounded-2xl p-8 flex flex-col items-center gap-4 transform transition-all duration-200
                          hover:shadow-lg hover:shadow-white/10 backdrop-blur-sm border border-white/10`}
                      >
                        {avatar.icon}
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}