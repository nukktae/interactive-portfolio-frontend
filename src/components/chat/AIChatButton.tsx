"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';
import { ChatInterface } from './ChatInterface';

export default function AIChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-[400px] max-w-[calc(100vw-1.5rem)] sm:max-w-[calc(100vw-3rem)] max-h-[calc(100vh-8rem)] bg-white rounded-lg border border-gray-300 shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="relative h-full flex flex-col min-h-0">
              <ChatInterface />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative bg-white w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300 flex items-center justify-center overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-black" />
            </motion.div>
          ) : (
            <motion.div
              key="chatbot"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="relative w-full h-full"
            >
              <Image
                src="/assets/images/chatbot.png"
                alt="AI Chatbot"
                fill
                className="object-contain p-2"
                priority
              />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Subtle pulse animation when closed */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-gray-300"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.button>
    </div>
  );
} 