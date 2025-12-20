"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';
import { ChatInterface } from './ChatInterface';

export default function AIChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Backdrop for mobile full screen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 z-50 md:z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 md:absolute md:bottom-20 md:right-0 md:inset-auto w-full h-full md:w-[400px] md:max-w-[calc(100vw-3rem)] md:max-h-[calc(100vh-8rem)] md:rounded-lg bg-white border border-gray-300 shadow-2xl overflow-hidden flex flex-col z-50"
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
    </>
  );
} 