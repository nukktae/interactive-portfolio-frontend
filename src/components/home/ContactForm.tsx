'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative z-10 py-16 md:py-24 lg:py-32 pb-24 md:pb-32" ref={ref}>
      <div className="px-6 md:px-12 lg:px-20 xl:px-32 max-w-[1800px] mx-auto w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="text-sm font-bold tracking-widest text-foreground/60 mb-6 uppercase">
              {t('contact.heading')}
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight md:leading-none mb-6 md:mb-8 text-foreground whitespace-pre-line">
              {t('contact.title')}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-foreground/80 px-2">
              {t('contact.description')}
            </p>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <a
                href="mailto:anu.bn@yahoo.com"
                className="group inline-flex items-center gap-2 sm:gap-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tight text-foreground hover:text-foreground/80 transition-colors duration-300 break-all sm:break-normal"
              >
                <span>anu.bn@yahoo.com</span>
                <ArrowUpRight className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
              </a>
            </div>

            <div className="flex justify-center pt-4">
              <a
                href="/assets/files/AnuBilegdemberelCV.pdf"
                download
                className="group inline-flex items-center justify-center gap-2 rounded-lg px-6 md:px-7 py-3 border-[1.25px] border-border bg-foreground/10 dark:bg-white/10 backdrop-blur-sm text-foreground text-sm font-medium hover:bg-foreground/15 dark:hover:bg-white/15 transition-all duration-300"
              >
                <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
                {t('contact.downloadResume')}
              </a>
            </div>

            <div className="pt-8 space-y-4">
              <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-foreground/60">
                <a
                  href="https://github.com/nukktae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
                >
                  <Image
                    src="/assets/images/stack/github.png"
                    alt="GitHub"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span className="text-sm font-bold tracking-widest uppercase">{t('contact.github')}</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/anu-bilegdemberel-445366318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
                >
                  <Image
                    src="/assets/images/stack/linkedin.webp"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span className="text-sm font-bold tracking-widest uppercase">{t('contact.linkedin')}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 