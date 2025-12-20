"use client";

import { motion } from 'framer-motion';
import Navbar from '../../components/layout/Navbar';
import { ChatInterface } from '../../components/chat/ChatInterface';

export default function ChatPage() {
  return (
    <div className="h-screen w-screen bg-gray-50 flex flex-col overflow-hidden fixed inset-0">
      <Navbar />
      <main className="flex-1 overflow-hidden relative w-full">
        {/* Premium minimal: Clear separation from background */}
        {/* Chat container has subtle shadow and border for depth */}
        <div className="h-full w-full bg-white shadow-lg border border-gray-300">
          <ChatInterface />
        </div>
      </main>
    </div>
  );
} 