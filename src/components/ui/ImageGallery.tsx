"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

interface ImageGalleryProps {
  images: string[];
  descriptions?: {
    title: string;
    text: string;
  }[];
}

export default function ImageGallery({ images, descriptions = [] }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center space-y-8 py-12">
      <div className="relative">
        {/* Phone Frame */}
        <div className="relative w-[280px] h-[580px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
          {/* Screen Content */}
          <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[currentIndex]}
                  alt={`Screenshot ${currentIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-[-60px] top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            <IoChevronBack className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            <IoChevronForward className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Description */}
      <motion.div 
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md text-center space-y-3"
      >
        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          {descriptions[currentIndex]?.title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          {descriptions[currentIndex]?.text}
        </p>
      </motion.div>
    </div>
  );
} 