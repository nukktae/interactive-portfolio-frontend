'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { ImageWithFallback } from '../ui/ImageWithFallback';

const caseStudies = [
  {
    slug: 'handiers-inc',
    title: 'Handiers',
    fullTitle: 'Handiers — Designing Trust in the American Service Economy',
    fullTitleKo: 'Handiers — 미국 서비스 경제에서 신뢰 설계',
    image: '/assets/images/case-study/handiers2.png',
  },
  {
    slug: 'friendly',
    title: 'Friendly',
    fullTitle: 'Friendly — Architecting a High-Intelligence Academic Ecosystem',
    fullTitleKo: 'Friendly — 고지능 학사 에코시스템 설계',
    image: '/assets/images/case-study/friendly2.png',
  },
  {
    slug: 'rootin',
    title: 'Rootin',
    fullTitle: 'Rootin — Engineering the Future of IoT-Driven Plant Intelligence',
    fullTitleKo: 'Rootin — IoT 기반 식물 인텔리전스의 미래를 엔지니어링하다',
    image: '/assets/images/case-study/rootin2.png',
  },
  {
    slug: 'shinhan',
    title: 'Shinhan',
    fullTitle: 'Shinhan — Modernizing Legacy Systems through Strategic Product Leadership',
    fullTitleKo: '신한장학재단 — 레거시 시스템 현대화를 통한 전략적 제품 리더십',
    image: '/assets/images/case-study/shinhan.png',
  },
];

export default function CaseStudiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  const router = useRouter();
  const { t, language } = useLanguage();

  return (
    <section id="case-studies" className="py-24 md:py-32 relative z-10" ref={ref}>
      <div className="px-6 md:px-12 lg:px-20 xl:px-32 max-w-[1800px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 md:mb-16 text-center"
        >
          <div className="text-sm font-bold tracking-widest text-foreground/60 mb-6 uppercase">
            {t('caseStudies.heading')}
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-foreground mb-4">
            {t('caseStudies.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-foreground/80">
            {t('caseStudies.description')}
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {caseStudies.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group cursor-pointer"
                onClick={() => router.push(`/casestudy/${project.slug}`)}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-2">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105"
                    fill
                  />
                </div>
                <div className="space-y-2 pt-1">
                  <div className="space-y-1.5">
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground leading-[1.2] group-hover:text-foreground/90 transition-colors duration-300">
                      {language === 'ko' && 'fullTitleKo' in project && project.fullTitleKo
                        ? project.fullTitleKo.split('—')[0]?.trim() || project.title
                        : project.title}
                    </h3>
                    <p className="text-sm md:text-base font-normal text-foreground/70 leading-relaxed tracking-wide group-hover:text-foreground/80 transition-colors duration-300">
                      {language === 'ko' && 'fullTitleKo' in project && project.fullTitleKo
                        ? project.fullTitleKo.split('—')[1]?.trim() || ''
                        : project.fullTitle.split('—')[1]?.trim() || ''}
                    </p>
                  </div>
                  <div className="h-px w-0 bg-foreground/20 group-hover:w-full transition-all duration-500 ease-out"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
