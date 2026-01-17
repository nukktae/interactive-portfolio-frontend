'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { ImageWithFallback } from '../ui/ImageWithFallback';

const caseStudies = [
  {
    slug: 'bestia',
    title: 'Bestia',
    image: '/assets/images/projects/Bestia/bestia1.png',
  },
  {
    slug: 'handiers-inc',
    title: 'Handiers',
    image: '/assets/images/projects/handiers.png',
  },
  {
    slug: 'friendly',
    title: 'Friendly',
    image: '/assets/images/friendly/coverfriendly.png',
  },
  {
    slug: 'rootin',
    title: 'Rootin',
    image: '/assets/images/rootin.jpeg',
  },
];

export default function CaseStudiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  const router = useRouter();
  const { t } = useLanguage();

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {caseStudies.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group relative cursor-pointer"
                onClick={() => router.push(`/projects/${project.slug}`)}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-2xl md:text-3xl font-bold text-white z-10">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
