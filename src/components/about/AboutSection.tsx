'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 relative z-10" ref={ref}>
      <div className="px-6 md:px-12 lg:px-20 xl:px-32 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Left Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div className="text-sm font-bold tracking-widest text-foreground/60 uppercase">
              {t('about.title')}
            </div>

            <div className="space-y-8">
              <div>
                <div className="text-6xl md:text-7xl font-black text-foreground mb-2">3+</div>
                <div className="text-sm font-bold tracking-widest text-foreground/60 uppercase">{t('about.yearsExperience')}</div>
              </div>
              
              <div>
                <div className="text-6xl md:text-7xl font-black text-foreground mb-2">2+</div>
                <div className="text-sm font-bold tracking-widest text-foreground/60 uppercase">{t('about.companiesWorked')}</div>
              </div>
              
              <div>
                <div className="text-6xl md:text-7xl font-black text-foreground mb-2">20+</div>
                <div className="text-sm font-bold tracking-widest text-foreground/60 uppercase">{t('about.projectsCompleted')}</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-black leading-tight text-foreground">
              {t('about.headline')}
              <span className="relative ml-4">
                {t('about.headlineHighlight')}
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-2 bg-foreground/30"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  style={{ transformOrigin: 'left' }}
                />
              </span>
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
              <p>
                {t('about.story1')}
              </p>
              
              <p>
                {t('about.story2')}
              </p>
            </div>

            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="bg-foreground/10 dark:bg-white/10 backdrop-blur-sm border border-border text-foreground px-6 py-4 inline-block rounded-lg">
                <div className="text-sm font-bold tracking-widest uppercase text-foreground/60">{t('about.currently')}</div>
                <div className="font-bold text-foreground">{t('about.currentRole')}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 