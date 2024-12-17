import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ScreenDescription {
  image: string;
  title: string;
  description: string;
}

const screens: ScreenDescription[] = [
  {
    image: "/assets/images/identify-plant-screen.jpg",
    title: "Plant Identification",
    description: "AI-powered plant recognition system that helps users identify plants through image capture or search. Provides detailed information about plant species and care requirements."
  },
  {
    image: "/assets/images/home-screen.jpg",
    title: "Plant Dashboard",
    description: "Centralized dashboard showing all your plants' health status, upcoming care tasks, and environmental conditions at a glance."
  },
  {
    image: "/assets/images/watering-screen.jpg",
    title: "Smart Watering",
    description: "Automated watering schedule based on real-time soil moisture data, plant species, and environmental conditions. Users can also manually adjust watering preferences."
  },
  {
    image: "/assets/images/soil-moisture-screen.jpg",
    title: "Health Monitoring",
    description: "Real-time monitoring of soil moisture levels, temperature, and light exposure. Historical data tracking helps optimize plant care routines."
  },
  {
    image: "/assets/images/plant-detail-screen.jpg",
    title: "Plant Details",
    description: "Comprehensive plant profile with care history, growth tracking, and customized care recommendations based on plant species and conditions."
  }
];

export default function RootinScreenCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % screens.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + screens.length) % screens.length);
  };

  return (
    <div className="relative min-h-[800px] py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Phone Frame */}
          <div className="relative w-[300px] h-[600px] flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-gray-900 to-purple-500/10 rounded-[3rem] shadow-2xl">
              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-36 h-6 bg-black rounded-full" />
              {/* Screen */}
              <div className="absolute top-12 left-3 right-3 bottom-12 bg-black rounded-3xl overflow-hidden">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={screens[currentIndex].image}
                    alt={screens[currentIndex].title}
                    fill
                    className="object-cover"
                  />
                  {/* Screen Glare Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
                </motion.div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-[-60px] top-1/2 -translate-y-1/2 p-3 bg-purple-500/10 hover:bg-purple-500/20 rounded-full text-white transition-colors backdrop-blur-sm"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-[-60px] top-1/2 -translate-y-1/2 p-3 bg-purple-500/10 hover:bg-purple-500/20 rounded-full text-white transition-colors backdrop-blur-sm"
            >
              <FaChevronRight size={24} />
            </button>
          </div>

          {/* Screen Description */}
          <div className="flex-1 lg:pl-12">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Decorative Elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl" />
              
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-3xl font-bold text-white mb-6"
              >
                {screens[currentIndex].title}
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 text-lg leading-relaxed"
              >
                {screens[currentIndex].description}
              </motion.p>

              {/* Progress Indicator */}
              <div className="mt-8 flex gap-2">
                {screens.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'w-8 bg-purple-500' 
                        : 'w-2 bg-purple-500/20'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 