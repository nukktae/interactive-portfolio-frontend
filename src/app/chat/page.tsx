"use client";

import { motion } from 'framer-motion';
import Navbar from '../../components/layout/Navbar';
import { ChatInterface } from '../../components/chat/ChatInterface';

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            AI{' '}
            <span className="bg-yellow-400 text-black px-3 py-1">
              Assistant
            </span>
          </h1>
          <p className="text-gray-600 text-lg">
            Chat with an AI to learn more about my experience and projects
          </p>
        </motion.div>
        <motion.div
          className="relative max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
            <ChatInterface />
          </div>
        </motion.div>
      </main>
    </div>
  );
} 