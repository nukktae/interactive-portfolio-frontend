import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import SectionWrapper from '../layout/SectionWrapper';

const images = [
  '/assets/images/projects/aws.png',
  '/assets/images/projects/jobparser.png',
  '/assets/images/projects/kmu.png',
  '/assets/images/projects/majormatch.png',
  '/assets/images/projects/makeeat.png',
  '/assets/images/projects/rootin.png',
  '/assets/images/projects/vori.png'
];

export default function IntroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <SectionWrapper className="min-h-screen flex items-center justify-center">
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Title Section */}
          <motion.div 
            className="text-center mb-16 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-[#498FD8] via-[#D86089] to-[#FB9D5B] bg-clip-text text-transparent">
                Anu!
              </span>
            </motion.h1>
            <motion.p 
              className="text-2xl text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Fullstack Developer
            </motion.p>
          </motion.div>

          {/* Slideshow Section - Updated to square aspect ratio */}
          <div className="relative w-full max-w-2xl aspect-square rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  fill
                  className="object-contain p-4"
                  priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-white' 
                      : 'w-1.5 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
} 