"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseLine } from 'react-icons/ri';
import { ChatInterface } from './ChatInterface';
import Image from 'next/image';

export default function AIChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-[550px] h-[600px] bg-[#DDCCD0]/5 backdrop-blur-lg rounded-3xl border border-[#498FD8]/20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#498FD8]/10 via-[#D86089]/10 to-[#FB9D5B]/10" />
            <div className="relative h-full">
              <ChatInterface />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#498FD8] to-[#D86089] rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
        <motion.div
          className="relative flex items-center justify-center w-16 h-16 bg-[#DDCCD0]/5 rounded-full border border-[#498FD8]/20 backdrop-blur-sm"
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
        >
          {isOpen ? (
            <RiCloseLine className="w-8 h-8 text-[#498FD8]" />
          ) : (
            <>
              <Image
                src="/assets/icons/bubble.jpg"
                alt="Chat Assistant"
                width={40}
                height={40}
                className="rounded-full"
              />
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-[#D86089] rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </>
          )}
        </motion.div>
      </motion.button>
    </div>
  );
} 