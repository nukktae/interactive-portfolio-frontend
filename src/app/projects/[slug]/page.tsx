"use client";

import { useState, useEffect, use } from 'react';
import Navbar from '@/components/layout/Navbar';
import ProjectDetailVinsign from '@/components/projects/ProjectDetailVinsign';
import SpaceBackground from '@/components/visuals/SpaceBackground';
import LightBackground from '@/components/visuals/LightBackground';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { projectSummaries } from '@/data/projectSummaries';
import { getProjectDetailContent, createDefaultContent, generateSlug } from '@/content/projects';

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const { slug } = use(params);
  const project = projectSummaries.find(
    (p) => generateSlug(p.title) === slug
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen relative">
        {mounted && (theme === 'dark' ? <SpaceBackground /> : <LightBackground />)}
        {!mounted && <SpaceBackground />}
        <Navbar />
        <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-4">{language === 'ko' ? '프로젝트를 찾을 수 없습니다' : 'Project Not Found'}</h1>
            <p className="text-lg text-foreground/70 mb-8">{language === 'ko' ? '찾고 계신 프로젝트가 존재하지 않습니다.' : "The project you're looking for doesn't exist."}</p>
            <a 
              href="/#projects" 
              className="inline-block px-6 py-3 bg-foreground/10 backdrop-blur-sm border border-border text-foreground rounded-lg hover:bg-foreground/20 transition-all duration-300"
            >
              {language === 'ko' ? '프로젝트로 돌아가기' : 'Back to Projects'}
            </a>
          </div>
        </div>
      </div>
    );
  }

  const detailContent = getProjectDetailContent(slug, language) || createDefaultContent(slug, project.title);

  return (
    <div className="min-h-screen relative">
      {mounted && (theme === 'dark' ? <SpaceBackground /> : <LightBackground />)}
      {!mounted && <SpaceBackground />}
      <Navbar />
      <main className="relative z-10">
        <ProjectDetailVinsign
          project={project}
          content={detailContent}
          language={language}
          allProjects={projectSummaries}
        />
      </main>
    </div>
  );
} 