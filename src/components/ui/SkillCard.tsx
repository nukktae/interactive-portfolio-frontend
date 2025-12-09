"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

interface SkillCardProps {
  title: string;
  icon: string;
  progress: number;
  onClick: () => void;
}

export function SkillCard({ title, icon, progress, onClick }: SkillCardProps) {
  return (
    <motion.div
      className={`relative p-6 rounded-xl backdrop-blur-sm cursor-pointer bg-gray-900/30`}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
    >
      <div className="relative w-12 h-12 mb-4">
        <div className="relative w-full h-full">
          <Image
            src={icon}
            alt={`${title} icon`}
            width={48}
            height={48}
            className="object-contain"
            priority
          />
        </div>
      </div>
      <h3 className="text-xl font-semibold capitalize">{title}</h3>
      <div className="mt-2 bg-gray-800 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-400 to-purple-400 h-full rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
} 