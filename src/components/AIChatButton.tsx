"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { ChatInterface } from './ChatInterface';

export default function AIChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 md:bottom-20 right-0 
                       w-[calc(100vw-2rem)] max-w-[550px] 
                       h-[70vh] md:h-[600px] 
                       bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden
                       md:w-[550px]"
          >
            <div className="relative h-full">
              <ChatInterface />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative bg-black text-white 
                   w-14 h-14 md:w-16 md:h-16 
                   rounded-full shadow-lg 
                   hover:bg-yellow-400 hover:text-black 
                   transition-all duration-300 
                   flex items-center justify-center
                   touch-manipulation"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X className="w-5 h-5 md:w-6 md:h-6" />
          ) : (
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
          )}
        </motion.div>
        
        {/* Notification dot */}
        {!isOpen && (
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        )}
      </motion.button>
    </div>
  );
} 