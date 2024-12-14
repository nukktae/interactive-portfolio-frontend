"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const avatars = [
  { id: 'avatar1', emoji: '👩🏻', bg: 'bg-pink-500' },
  { id: 'avatar2', emoji: '👨🏼', bg: 'bg-blue-500' },
  { id: 'avatar3', emoji: '🤖', bg: 'bg-purple-500' },
  { id: 'avatar4', emoji: '👾', bg: 'bg-indigo-500' },
  { id: 'avatar5', emoji: '🦸‍♂️', bg: 'bg-green-500' },
  { id: 'avatar6', emoji: '🦸‍♀️', bg: 'bg-yellow-500' },
  { id: 'avatar7', emoji: '🧙‍♂️', bg: 'bg-orange-500' },
  { id: 'avatar8', emoji: '🧙‍♀️', bg: 'bg-red-500' },
  { id: 'avatar9', emoji: '👽', bg: 'bg-teal-500' },
  { id: 'avatar10', emoji: '😈', bg: 'bg-violet-500' },
  { id: 'avatar11', emoji: '🧛‍♂️', bg: 'bg-cyan-500' },
  { id: 'avatar12', emoji: '🧜‍♂️', bg: 'bg-emerald-500' },
  { id: 'avatar13', emoji: '🧜‍♀️', bg: 'bg-rose-500' },
  { id: 'avatar14', emoji: '👨‍🚀', bg: 'bg-sky-500' }
];

export default function LandingPage() {
  const router = useRouter();
  const [selectedAvatar, setSelectedAvatar] = useState('');

  const handleAvatarSelect = (avatarId: string, emoji: string, bg: string) => {
    setSelectedAvatar(avatarId);
    localStorage.setItem('selectedAvatar', emoji);
    localStorage.setItem('selectedAvatarBg', bg);
    router.push(`/chat?avatar=${avatarId}`);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const words = "My name is Anu and".split(" ");

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Animated Navbar */}
      <motion.nav 
        className="border-b border-gray-800 px-6 py-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/" className="text-white text-xl font-semibold">Anu's Portfolio</Link>
          </motion.div>
          <div className="flex items-center gap-4 text-gray-400">
            {[
              { href: '/projects', text: 'Projects' },
              { href: '/chat', text: 'AI Portfolio' },
              { href: '/contact', text: 'Contact' }
            ].map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Link 
                  href={link.href} 
                  className="hover:text-white transition-colors"
                >
                  {link.text}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center p-4 relative pt-20">
        {/* Profile Section with animation */}
        <motion.div 
          className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 p-1 mb-6"
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

        {/* Title with word-by-word animation */}
        <div className="text-6xl font-bold text-center mb-16 max-w-4xl leading-tight">
          <motion.div className="flex flex-wrap justify-center gap-x-4 mb-2">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.5 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          <motion.span 
            className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            this is my AI portfolio
          </motion.span>
        </div>

        {/* Avatar Selection with staggered animation */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.p 
            className="text-2xl mb-12 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
          >
            Select your avatar to start
          </motion.p>
          <div className="grid grid-cols-7 gap-4 max-w-3xl mx-auto">
            {avatars.map((avatar, index) => (
              <motion.button
                key={avatar.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: index * 0.05 + 1.8,
                  duration: 0.2
                }}
                whileHover={{ 
                  scale: 1.2,
                  transition: { 
                    type: "spring",
                    stiffness: 500,
                    damping: 15,
                    duration: 0.05
                  }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAvatarSelect(avatar.id, avatar.emoji, avatar.bg)}
                className={`w-16 h-16 ${avatar.bg} rounded-full flex items-center justify-center text-3xl transform transition-all duration-75 hover:shadow-lg hover:shadow-${avatar.bg}/50 relative group`}
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.05 }
                  }}
                >
                  {avatar.emoji}
                </motion.span>
                <motion.div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ 
                    scale: 1,
                    background: `radial-gradient(circle, ${avatar.bg}, transparent)`,
                  }}
                  transition={{ duration: 0.08 }}
                />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}