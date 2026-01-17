"use client";

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { CaseStudyContent } from '@/content/casestudies';

interface CaseStudyHeroProps {
  content: CaseStudyContent;
}

export default function CaseStudyHero({ content }: CaseStudyHeroProps) {
  return (
    <section className="relative z-10 pt-32 pb-24 px-6 md:px-12 lg:px-20 xl:px-32 overflow-hidden">
      {/* Subtle radial focal glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-16 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/20 via-foreground/10 to-transparent blur-3xl opacity-70" />
      </div>

      <div className="max-w-5xl mx-auto relative space-y-12">
        {/* Statement area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight">
                {content.title}
              </h1>
            </div>
          </div>

          {content.description && (
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed max-w-3xl">
              {content.description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
