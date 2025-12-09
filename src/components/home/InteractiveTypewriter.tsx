"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
  phrases: string[];
}

export function InteractiveTypewriter({ phrases }: TypewriterProps) {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!phrases[currentPhrase]) return;

    let currentText = '';
    let currentIndex = 0;

    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (currentIndex < phrases[currentPhrase].length) {
          currentText = phrases[currentPhrase].slice(0, currentIndex + 1);
          setText(currentText);
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => setIsTyping(false), 2000);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    } else {
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }, 500);
    }
  }, [currentPhrase, isTyping]);

  return (
    <motion.h1 
      className="text-4xl md:text-6xl font-bold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {text}<span className="animate-blink">|</span>
    </motion.h1>
  );
} 