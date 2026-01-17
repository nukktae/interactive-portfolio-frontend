'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect, useRef } from 'react';
import InfiniteScrollSkills from './InfiniteScrollSkills';

export default function HeroSection() {
  const { theme } = useTheme();
  const { t, language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [showResumePanel, setShowResumePanel] = useState(false);
  const resumeButtonRef = useRef<HTMLButtonElement>(null);
  const resumePanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleResumeDownload = (language: 'en' | 'ko') => {
    const filePath = language === 'ko' 
      ? '/assets/files/아노_이력서.pdf'
      : '/assets/files/AnuCV.pdf';
    
    const link = document.createElement('a');
    link.href = filePath;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setShowResumePanel(false);
  };

  // Handle mouse enter/leave for the button and panel
  const handleMouseEnter = () => {
    setShowResumePanel(true);
  };

  const handleMouseLeave = () => {
    setShowResumePanel(false);
  };

  // Determine which image to use based on theme
  const imageSrc = mounted && theme === 'dark' 
    ? '/assets/icons/onblack.png' 
    : '/assets/icons/new.png';
  
  return (
    <section className={`min-h-screen flex flex-col ${language === 'ko' ? 'justify-start pt-16 sm:pt-20 md:pt-24 lg:pt-32' : 'justify-center'} items-start px-3 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative overflow-hidden py-8 sm:py-12 md:py-0`}>
      {/* Content Container */}
      <div className="w-full relative z-10 max-w-7xl mx-auto">
        {/* Headline, Introduction, and Image Container - Responsive Layout */}
        <div className="w-full flex flex-col md:flex-row md:items-end gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 mb-4 sm:mb-6 md:mb-8">
          {/* Text Content - Headline and Introduction */}
          <div className="flex-1 text-left min-w-0 w-full md:w-auto">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mb-4 sm:mb-6 md:mb-8"
            >
              <h1 
                className="font-serif text-foreground leading-[1.15] sm:leading-[1.2] md:leading-[1.25] lg:leading-[1.3] text-left break-words" 
                style={{ 
                  fontFamily: '"instrument sans"',
                  fontSize: 'clamp(1.125rem, 2.5vw + 0.5rem, 3.5rem)'
                }}
              >
                {language === 'ko' ? (
                  <div className="space-y-0.5 sm:space-y-1 md:space-y-1.5 lg:space-y-2">
                    {/* Row 1: 기획부터 런칭까지, */}
                    <div className="block break-words">{t('hero.headlinePart1')}</div>
                    {/* Row 2: 데이터와 속도를 기반으로 제품 전 과정을 */}
                    <div className="block break-words">
                      <span className="italic">{t('hero.headlineItalic')}</span>
                      {' '}
                      {t('hero.headlinePart2')}
                    </div>
                    {/* Row 3: 설계·구현하는 글로벌 프로덕트 엔지니어입니다. */}
                    <div className="block break-words">{t('hero.headlinePart3')}</div>
                  </div>
                ) : (
                  <>
                    <span className="inline-block break-words">
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
                      return part3 && part3.trim() !== '' && part3 !== 'hero.headlinePart3' ? (
                        <>
                          <span className="inline md:hidden"> </span>
                          <br className="hidden md:block" />
                          <span className="inline-block break-words">{part3}</span>
                        </>
                      ) : null;
                    })()}
                  </>
                )}
              </h1>
            </motion.div>

            {/* Personal Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative flex flex-col items-start justify-start text-left gap-1.5 sm:gap-2 md:gap-3"
              style={{ fontFamily: '"instrument sans"' }}
            >
              <div className="space-y-0.5 sm:space-y-1 text-left" style={{ fontFamily: '"sans serif"' }}>
                <p 
                  className="font-semibold text-foreground flex items-center gap-2 flex-wrap"
                  style={{ fontSize: 'clamp(0.875rem, 1.5vw + 0.25rem, 1.875rem)' }}
                >
                  <span>{t('hero.greeting')}</span>
                  <span className="flex items-center gap-1.5 text-base sm:text-lg md:text-xl lg:text-2xl">
                    <span className="inline-block" title="South Korea">🇰🇷</span>
                    <span className="inline-block" title="United States">🇺🇸</span>
                    <span className="inline-block" title="China">🇨🇳</span>
                    <span className="inline-block" title="Mongolia">🇲🇳</span>
                  </span>
                </p>
                {t('hero.role') && (
                  <p 
                    className="text-foreground/80"
                    style={{ fontSize: 'clamp(0.75rem, 1.2vw + 0.25rem, 1.25rem)' }}
                  >
                    {t('hero.role')}
                  </p>
                )}
              </div>
            </motion.div>

            {/* Download Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-4 sm:mt-6 md:mt-8 relative"
            >
              <div 
                className="relative inline-block"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <motion.button
                  ref={resumeButtonRef}
                  className="group inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border-[1.5px] border-foreground/20 bg-foreground/5 dark:bg-white/5 backdrop-blur-sm text-foreground text-sm sm:text-base font-medium hover:bg-foreground/10 dark:hover:bg-white/10 hover:border-foreground/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ fontFamily: '"instrument sans"' }}
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                  <span>{t('contact.downloadResume')}</span>
                </motion.button>

                {/* Hover Panel */}
                <AnimatePresence>
                  {showResumePanel && (
                    <motion.div
                      ref={resumePanelRef}
                      className="absolute left-0 top-full mt-2 sm:left-full sm:top-1/2 sm:-translate-y-1/2 sm:ml-3 sm:mt-0 z-50"
                      initial={{ opacity: 0, x: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="bg-background/95 dark:bg-background/98 backdrop-blur-xl border border-border rounded-xl shadow-2xl p-4 min-w-[240px]">
                        <div className="space-y-2">
                          <div className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3 px-1">
                            {t('contact.selectResumeLanguage')}
                          </div>
                          
                          <motion.button
                            onClick={() => handleResumeDownload('en')}
                            className="group w-full px-4 py-3 rounded-lg border border-border/50 bg-foreground/5 dark:bg-white/5 hover:bg-foreground/10 dark:hover:bg-white/10 hover:border-border transition-all duration-200 text-left"
                            whileHover={{ scale: 1.02, x: 2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2.5">
                                <span className="text-xl">🇺🇸</span>
                                <span className="text-sm font-medium text-foreground">
                                  {t('contact.englishResume')}
                                </span>
                              </div>
                              <Download className="w-3.5 h-3.5 text-foreground/30 group-hover:text-foreground/60 transition-colors duration-200" />
                            </div>
                          </motion.button>

                          <motion.button
                            onClick={() => handleResumeDownload('ko')}
                            className="group w-full px-4 py-3 rounded-lg border border-border/50 bg-foreground/5 dark:bg-white/5 hover:bg-foreground/10 dark:hover:bg-white/10 hover:border-border transition-all duration-200 text-left"
                            whileHover={{ scale: 1.02, x: 2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2.5">
                                <span className="text-xl">🇰🇷</span>
                                <span className="text-sm font-medium text-foreground">
                                  {t('contact.koreanResume')}
                                </span>
                              </div>
                              <Download className="w-3.5 h-3.5 text-foreground/30 group-hover:text-foreground/60 transition-colors duration-200" />
                            </div>
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Image - Right side on desktop, centered on mobile */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex-shrink-0 self-center md:self-end"
              style={{
                width: 'clamp(80px, 15vw, 280px)',
                height: 'clamp(80px, 15vw, 280px)'
              }}
            >
              <div 
                className="relative w-full h-full cursor-pointer"
              >
                <Image
                  src={imageSrc}
                  alt="Hero decoration"
                  fill
                  className="object-contain transition-opacity duration-300"
                  priority
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 120px, (max-width: 1024px) 180px, (max-width: 1280px) 220px, 280px"
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