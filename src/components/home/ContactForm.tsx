'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowUpRight, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';

export default function ContactForm() {
  const ref = useRef(null);
  const resumeButtonRef = useRef<HTMLButtonElement>(null);
  const resumePanelRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const { t } = useLanguage();
  const router = useRouter();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showResumePanel, setShowResumePanel] = useState(false);

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

  return (
    <section id="contact" className="relative z-10 py-12 sm:py-16 md:py-24 lg:py-32 pb-16 sm:pb-24 md:pb-32" ref={ref}>
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 max-w-[1800px] mx-auto w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 sm:mb-10 md:mb-12"
          >
            <div className="text-xs sm:text-sm font-bold tracking-widest text-foreground/60 mb-4 sm:mb-5 md:mb-6 uppercase">
              {t('contact.heading')}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black leading-tight md:leading-none mb-4 sm:mb-6 md:mb-8 text-foreground whitespace-pre-line">
              {t('contact.title')}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 sm:space-y-8"
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto text-foreground/80 px-2 sm:px-4 whitespace-pre-line leading-relaxed">
              {t('contact.description')}
            </p>

            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center">
              <a
                href="mailto:anu.bn@yahoo.com"
                className="group inline-flex items-center gap-2 sm:gap-3 md:gap-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-black uppercase tracking-tight text-foreground hover:text-foreground/80 transition-colors duration-300 break-all sm:break-normal"
              >
                <span>anu.bn@yahoo.com</span>
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 flex-shrink-0" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2 sm:pt-4 relative">
              <motion.button
                onClick={() => router.push('/book-a-call')}
                className={`w-full sm:w-auto min-w-[180px] sm:min-w-[200px] px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 inline-flex items-center justify-center ${
                  !mounted
                    ? 'bg-white text-[#0F0F12] hover:bg-white/90 shadow-[0_8px_20px_-10px_rgba(255,255,255,0.3)]'
                    : theme === 'dark'
                    ? 'bg-white text-[#0F0F12] hover:bg-white/90 shadow-[0_8px_20px_-10px_rgba(255,255,255,0.3)]'
                    : 'bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 text-white hover:brightness-105 shadow-[0_8px_20px_-10px_rgba(59,130,246,0.8)]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('nav.bookCall')}
              </motion.button>
              <div 
                className="relative w-full sm:w-auto"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <motion.button
                  ref={resumeButtonRef}
                  className="group w-full sm:w-auto min-w-[180px] sm:min-w-[200px] inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg px-5 py-2.5 sm:px-6 sm:py-3 border-[1.25px] border-border bg-foreground/10 dark:bg-white/10 backdrop-blur-sm text-foreground text-xs sm:text-sm font-medium hover:bg-foreground/15 dark:hover:bg-white/15 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-y-1" />
                  <span className="whitespace-nowrap">{t('contact.downloadResume')}</span>
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
            </div>

            <div className="pt-6 sm:pt-8 space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center text-foreground/60">
                <a
                  href="https://github.com/nukktae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity duration-300"
                >
                  <Image
                    src={mounted && theme === 'dark' ? '/assets/images/icons/githubwhite.png' : '/assets/images/icons/github.png'}
                    alt="GitHub"
                    width={20}
                    height={20}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                  <span className="text-xs sm:text-sm font-bold tracking-widest uppercase">{t('contact.github')}</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/anu-bilegdemberel-445366318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity duration-300"
                >
                  <Image
                    src="/assets/images/stack/linkedin.webp"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                  <span className="text-xs sm:text-sm font-bold tracking-widest uppercase">{t('contact.linkedin')}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
} 