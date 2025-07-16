"use client";

import { motion } from 'framer-motion';

interface NavigationDotsProps {
  currentSection: number;
  onSectionChange: (sectionIndex: number) => void;
}

const sections = ['Home', 'About', 'Experiences', 'Contact'];

export function NavigationDots({ currentSection, onSectionChange }: NavigationDotsProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      {sections.map((section, index) => (
        <motion.div
          key={section}
          className="group relative"
          whileHover={{ scale: 1.2 }}
          onClick={() => onSectionChange(index)}
        >
          <motion.div
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 
              ${currentSection === index 
                ? 'bg-violet-500' 
                : 'bg-gray-600 hover:bg-violet-400'}`}
            whileHover={{ scale: 1.2 }}
          />
          <span className="absolute left-6 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-900/80 
                         rounded text-sm text-gray-300 opacity-0 group-hover:opacity-100 
                         transition-opacity whitespace-nowrap">
            {section}
          </span>
        </motion.div>
      ))}
    </div>
  );
} 