'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';
import InfiniteScrollSkills from './InfiniteScrollSkills';

export default function HeroSection() {
  const { theme } = useTheme();
  const { t, language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine which image to use based on theme and hover state
  const imageSrc = isHovered
    ? '/assets/images/myimagee.png'
    : (mounted && theme === 'dark' 
      ? '/assets/icons/onblack.png' 
      : '/assets/icons/new.png');
  
  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 relative overflow-hidden py-12 md:py-0">
      {/* Content Container */}
      <div className="w-full relative z-10 max-w-7xl">
        {/* Headline, Introduction, and Image Container - Side by Side */}
        <div className="w-full flex flex-row items-end gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 mb-6 sm:mb-8">
          {/* Text Content - Headline and Introduction */}
          <div className="flex-1 text-left">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mb-6 sm:mb-8"
            >
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-foreground leading-tight mb-4 sm:mb-6 text-left break-words" style={{ fontFamily: '"instrument sans"' }}>
                <span className={`inline-block ${language === 'ko' ? 'whitespace-nowrap' : ''}`}>
                  {t('hero.headlinePart1')}
                  {(() => {
                    const italic = t('hero.headlineItalic');
                    return italic && italic.trim() !== '' && italic !== 'hero.headlineItalic' ? (
                      <>
                        {' '}
                        <span className="italic text-left">{italic}</span>
                      </>
                    ) : null;
                  })()}
                  {(() => {
                    const part2 = t('hero.headlinePart2');
                    return part2 && part2.trim() !== '' && part2 !== 'hero.headlinePart2' ? (
                      <>
                        {' '}
                        {part2}
                      </>
                    ) : null;
                  })()}
                </span>
                {(() => {
                  const part3 = t('hero.headlinePart3');
                  const isKorean = language === 'ko';
                  return part3 && part3.trim() !== '' && part3 !== 'hero.headlinePart3' ? (
                    <>
                      {isKorean ? (
                        <>
                          <br />
                          <span className="block">{part3}</span>
                        </>
                      ) : (
                        <>
                          <span className="inline md:hidden"> </span>
                          <br className="hidden md:block" />
                          <span className="inline-block">{part3}</span>
                        </>
                      )}
                    </>
                  ) : null;
                })()}
              </h1>
            </motion.div>

            {/* Personal Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative flex flex-col items-start justify-start text-left gap-3 sm:gap-4"
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

          {/* Image - Right side, aligned to bottom, responsive on all screen sizes */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex-shrink-0 self-end min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[240px] xl:min-w-[280px]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div 
                className="relative w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] lg:w-[240px] lg:h-[240px] xl:w-[280px] xl:h-[280px] cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={imageSrc}
                  alt="Hero decoration"
                  fill
                  className="object-contain transition-opacity duration-300"
                  priority
                  sizes="(max-width: 640px) 120px, (max-width: 768px) 180px, (max-width: 1024px) 220px, (max-width: 1280px) 240px, 280px"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Infinite Scrolling Skills - Full Width */}
      <InfiniteScrollSkills />

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