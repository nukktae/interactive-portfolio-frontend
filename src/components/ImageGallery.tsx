"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageGalleryProps {
  images: string[];
  descriptions?: {
    title: string;
    text: string;
  }[];
}

export default function ImageGallery({ images, descriptions = [] }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imagePairs = images.reduce((result, item, index) => {
    const chunkIndex = Math.floor(index / 2);
    if (!result[chunkIndex]) {
      result[chunkIndex] = [];
    }
    result[chunkIndex].push(item);
    return result;
  }, [] as string[][]);

  return (
    <>
      <div className="space-y-12">
        {imagePairs.map((pair, pairIndex) => (
          <div key={pairIndex} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pair.map((image, index) => {
              const actualIndex = pairIndex * 2 + index;
              return (
                <motion.div
                  key={actualIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: actualIndex * 0.1 }}
                  className="flex flex-row gap-6 items-center"
                >
                  <div className="w-[140px] flex-shrink-0">
                    <div 
                      className="group relative aspect-[9/19] bg-gray-900 rounded-2xl overflow-hidden border-2 border-gray-800 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    >
                      <div className="absolute inset-[1px] rounded-2xl overflow-hidden">
                        <Image
                          src={image}
                          alt={`Screenshot ${actualIndex + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-2 text-center">
                          <p className="text-xs font-medium text-white">View Full Screen</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      {descriptions[actualIndex]?.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {descriptions[actualIndex]?.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="relative h-[70vh] max-w-[280px] aspect-[9/19] rounded-[2rem] overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <Image
                src={selectedImage}
                alt="Full screen screenshot"
                fill
                className="object-contain"
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 