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
      {/* Backdrop only for desktop (modal view) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="hidden md:block fixed inset-0 bg-black/5 z-[55]"
          />
        )}
      </AnimatePresence>

    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 md:fixed md:bottom-24 md:right-6 md:inset-auto md:top-auto md:left-auto w-full h-full md:w-[420px] md:h-[600px] md:max-h-[calc(100vh-8rem)] md:rounded-lg bg-white border border-gray-300 shadow-2xl overflow-hidden flex flex-col z-[60]"
              onClick={(e) => e.stopPropagation()}
          >
              <div className="relative h-full flex flex-col min-h-0 w-full">
                <ChatInterface onClose={() => setIsOpen(false)} />
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
        animate={!isOpen ? {
          y: [0, -8, 0],
        } : {}}
        transition={!isOpen ? {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        } : {}}
      >
        {/* Animated gradient glow ring */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.3))',
              backgroundSize: '200% 200%',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}

        {/* Pulsing ring animation */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-blue-400/60 pointer-events-none"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}

        {/* Shimmer effect */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
            style={{
              background: 'linear-gradient(110deg, transparent 40%, rgba(255, 255, 255, 0.5) 50%, transparent 60%)',
              backgroundSize: '200% 100%',
            }}
            animate={{
              backgroundPosition: ['-100% 0', '200% 0'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 1,
            }}
          />
        )}

        {/* Inner content */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
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
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotate: [0, 5, -5, 0],
                }}
              exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 },
                  rotate: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1,
                  }
                }}
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
        </div>
      </motion.button>
    </div>
    </>
  );
} 