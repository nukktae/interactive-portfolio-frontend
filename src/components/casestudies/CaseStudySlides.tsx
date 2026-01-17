"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { CaseStudyContent } from '@/content/casestudies';
import { useLanguage } from '@/contexts/LanguageContext';

interface CaseStudySlidesProps {
  content: CaseStudyContent;
}

// Illustration images - assigned to sections
const illustrations = [
  '/assets/images/illustration/image 27.png',
  '/assets/images/illustration/image 28.png',
  '/assets/images/illustration/image 29.png',
  '/assets/images/illustration/image 30.png',
  '/assets/images/illustration/image 31.png',
  '/assets/images/illustration/image 32.png',
];

export default function CaseStudySlides({ content }: CaseStudySlidesProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { language } = useLanguage();
  
  // Get illustration for a section index (deterministic assignment)
  const getIllustration = (index: number): string => {
    return illustrations[index % illustrations.length];
  };

  // Get title based on language
  const getSectionTitle = (section: CaseStudyContent['sections'][0]): string => {
    if (language === 'ko' && 'titleKo' in section && section.titleKo) {
      return section.titleKo;
    }
    return section.title || section.id;
  };

  // Calculate responsive font size based on title length
  const getTitleSize = (title: string): string => {
    // All headers use the same smaller size for consistency
    return 'text-2xl md:text-3xl lg:text-4xl';
  };

  useEffect(() => {
    slideRefs.current = slideRefs.current.slice(0, content.sections.length);
  }, [content.sections.length]);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < content.sections.length) {
      setCurrentSlide(index);
      slideRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [content.sections.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentSlide < content.sections.length - 1) {
        goToSlide(currentSlide + 1);
      }
      if (e.key === 'ArrowLeft' && currentSlide > 0) {
        goToSlide(currentSlide - 1);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, content.sections.length, goToSlide]);

  // Scroll-based slide detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      slideRefs.current.forEach((ref, index) => {
        if (ref) {
          const { top, bottom } = ref.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setCurrentSlide(index);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="relative">
      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        {content.sections.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'bg-orange-600 dark:bg-orange-500 w-8'
                : 'bg-foreground/30 hover:bg-orange-500/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="fixed bottom-8 right-8 z-50 hidden lg:block">
        <div className="px-4 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium">
          {currentSlide + 1} / {content.sections.length}
        </div>
      </div>

      {/* Slides */}
      <div className="space-y-0">
        {content.sections.map((section, index) => (
          <motion.div
            key={section.id}
            ref={(el) => { slideRefs.current[index] = el; }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="min-h-screen flex items-center justify-center py-20 px-6 md:px-12 lg:px-20 xl:px-32"
          >
            <div className="max-w-[1600px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Side - Title & Decorative Element */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-8"
                >
                  {/* Title */}
                  {(() => {
                    const title = getSectionTitle(section);
                    // Split title at colon if present to allow 2-row layout
                    const hasColon = title.includes(':');
                    const parts = hasColon ? title.split(':') : [title];
                    
                    return (
                      <h2
                        className={`${getTitleSize(title)} font-black leading-tight text-orange-600 dark:text-orange-500`}
                        style={{
                          writingMode: 'horizontal-tb',
                          textTransform: 'uppercase',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {hasColon ? (
                          <>
                            {parts[0].trim()}:<br />
                            {parts.slice(1).join(':').trim()}
                          </>
                        ) : (
                          title
                        )}
                      </h2>
                    );
                  })()}

                  {/* Illustration */}
                  {getIllustration(index) && (
                    <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden">
                      <Image
                        src={getIllustration(index)}
                        alt={`${section.title || section.id} illustration`}
                        fill
                        className="object-contain"
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Right Side - Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="text-foreground/80 text-base md:text-lg leading-relaxed">
                  {typeof section.content === 'string' ? (
                    <p>{section.content}</p>
                  ) : (
                    section.content
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden lg:flex gap-4">
        <button
          onClick={() => goToSlide(currentSlide - 1)}
          disabled={currentSlide === 0}
          className={`p-3 rounded-full bg-black dark:bg-white text-white dark:text-black transition-all ${
            currentSlide === 0
              ? 'opacity-30 cursor-not-allowed'
              : 'hover:bg-orange-600 dark:hover:bg-orange-500 hover:scale-110'
          }`}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => goToSlide(currentSlide + 1)}
          disabled={currentSlide === content.sections.length - 1}
          className={`p-3 rounded-full bg-black dark:bg-white text-white dark:text-black transition-all ${
            currentSlide === content.sections.length - 1
              ? 'opacity-30 cursor-not-allowed'
              : 'hover:bg-orange-600 dark:hover:bg-orange-500 hover:scale-110'
          }`}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
