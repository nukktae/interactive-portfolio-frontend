"use client";

import { useState, useEffect, use } from 'react';
import Navbar from '@/components/layout/Navbar';
import SpaceBackground from '@/components/visuals/SpaceBackground';
import LightBackground from '@/components/visuals/LightBackground';
import CaseStudyHero from '@/components/casestudies/CaseStudyHero';
import CaseStudySlides from '@/components/casestudies/CaseStudySlides';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { getCaseStudyContent, createDefaultCaseStudyContent } from '@/content/casestudies';

// Case study slugs mapping
const caseStudySlugs = ['bestia', 'handiers-inc', 'friendly', 'rootin'];

// Helper function to format slug to title
function formatSlugToTitle(slug: string): string {
  const titleMap: Record<string, string> = {
    'bestia': 'Bestia',
    'handiers-inc': 'Handiers',
    'friendly': 'Friendly',
    'rootin': 'Rootin'
  };
  return titleMap[slug] || slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
}

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const { slug } = use(params);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Validate slug
  if (!caseStudySlugs.includes(slug)) {
    return (
      <div className="min-h-screen relative">
        {mounted && (theme === 'dark' ? <SpaceBackground /> : <LightBackground />)}
        {!mounted && <SpaceBackground />}
        <Navbar />
        <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-4">
              {language === 'ko' ? '케이스 스터디를 찾을 수 없습니다' : 'Case Study Not Found'}
            </h1>
            <p className="text-lg text-foreground/70 mb-8">
              {language === 'ko' 
                ? '찾고 계신 케이스 스터디가 존재하지 않습니다.' 
                : "The case study you're looking for doesn't exist."}
            </p>
            <a 
              href="/#case-studies" 
              className="inline-block px-6 py-3 bg-foreground/10 backdrop-blur-sm border border-border text-foreground rounded-lg hover:bg-foreground/20 transition-all duration-300"
            >
              {language === 'ko' ? '케이스 스터디로 돌아가기' : 'Back to Case Studies'}
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Get case study content or create default
  const caseStudyContent = getCaseStudyContent(slug, language) || 
    createDefaultCaseStudyContent(slug, formatSlugToTitle(slug));

  return (
    <div className="min-h-screen relative">
      {mounted && (theme === 'dark' ? <SpaceBackground /> : <LightBackground />)}
      {!mounted && <SpaceBackground />}
      <Navbar />
      <CaseStudyHero content={caseStudyContent} />
      <main className="relative z-10">
        {/* Case Study Slides */}
        {caseStudyContent.sections.length > 0 ? (
          <CaseStudySlides content={caseStudyContent} />
        ) : (
          <div className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center">
              <p className="text-lg text-foreground/70">
                {language === 'ko' 
                  ? '케이스 스터디 내용이 곧 추가될 예정입니다.' 
                  : 'Case study content coming soon.'}
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
