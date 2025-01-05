"use client";

import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';

interface AchievementPopupProps {
  title: string;
  description: string;
}

export function AchievementPopup({ title, description }: AchievementPopupProps) {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ type: "spring", duration: 0.6 }}
    >
      <div className="relative p-6 bg-gray-900/90 backdrop-blur-lg rounded-xl border border-violet-500/30">
        <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl blur opacity-30" />
        <div className="relative flex items-center gap-4">
          <div className="p-3 bg-violet-500/20 rounded-lg">
            <FaTrophy className="w-6 h-6 text-violet-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white mb-1">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 