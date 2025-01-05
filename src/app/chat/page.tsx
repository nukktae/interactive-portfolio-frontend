"use client";

import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import { ChatInterface } from '../../components/ChatInterface';

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
            <span className="bg-gradient-to-r from-[#498FD8] to-[#D86089] bg-clip-text text-transparent">
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#498FD8]/10 via-[#D86089]/10 to-[#FB9D5B]/10 rounded-3xl blur-3xl" />
          <div className="relative bg-white/90 rounded-3xl border border-[#498FD8]/20 backdrop-blur-sm overflow-hidden">
            <ChatInterface />
          </div>
        </motion.div>
      </main>
    </div>
  );
} 