"use client";

import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import { ChatInterface } from '../../components/ChatInterface';

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            AI{' '}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Assistant
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            Chat with an AI to learn more about my experience and projects
          </p>
        </motion.div>
        <motion.div
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-indigo-500/10 to-purple-500/10 rounded-3xl blur-3xl" />
          <div className="relative bg-gray-900/30 rounded-3xl border border-gray-800/50 backdrop-blur-sm overflow-hidden">
            <ChatInterface />
          </div>
        </motion.div>
      </main>
    </div>
  );
} 