'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine which image to use based on theme
  const imageSrc = mounted && theme === 'dark' 
    ? '/assets/icons/onblack.png' 
    : '/assets/icons/new.png';
  
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 relative overflow-hidden py-12 md:py-0">
      {/* Image - Mobile: Above text, Desktop: Absolute right */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center mb-6 sm:mb-8 lg:hidden w-full"
        >
          <div className="relative w-[140px] h-[140px] sm:w-[160px] sm:h-[160px]">
            <Image
              src={imageSrc}
              alt="Hero decoration"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 140px, 160px"
            />
          </div>
        </motion.div>
      )}

      {/* Desktop Image - Absolute positioned (unchanged) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="hidden lg:block absolute right-6 md:right-12 lg:right-20 xl:right-32 top-1/2 transform -translate-y-1/2 z-10"
      >
        <Image
          src={imageSrc}
          alt="Hero decoration"
          width={200}
          height={200}
          className="object-contain"
          priority
        />
      </motion.div>

      <div className="max-w-5xl mx-auto w-full text-left relative z-10">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-foreground leading-tight mb-4 sm:mb-6 text-left" style={{ fontFamily: '"instrument sans"' }}>
            {t('hero.headlinePart1')}{' '}
            <span className="italic text-left">{t('hero.headlineItalic')}</span>{' '}
            {t('hero.headlinePart2')}
          </h1>
        </motion.div>

        {/* Personal Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative flex flex-col items-start justify-start text-left gap-3 sm:gap-4 mb-8 sm:mb-12"
          style={{ fontFamily: '"instrument sans"' }}
        >
          <div className="space-y-1 text-left" style={{ fontFamily: '"sans serif"' }}>
            <p className="text-lg sm:text-xl md:text-3xl font-semibold text-foreground">{t('hero.greeting')}</p>
            {t('hero.role') && (
              <p className="text-base sm:text-lg md:text-2xl text-foreground/80">{t('hero.role')}</p>
            )}
          </div>
        </motion.div>

      </div>

      {/* Arrow Icon - Positioned at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          <ArrowDown className="w-6 h-6 text-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  );
} 