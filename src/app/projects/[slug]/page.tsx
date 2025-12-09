"use client";

import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import ProjectDetailHero from '@/components/projects/ProjectDetailHero';
import ProjectDetail from '@/components/projects/ProjectDetail';
import TableOfContents from '@/components/projects/TableOfContents';
import SpaceBackground from '@/components/visuals/SpaceBackground';
import LightBackground from '@/components/visuals/LightBackground';
import { useTheme } from '@/contexts/ThemeContext';
import { projectSummaries } from '@/data/projectSummaries';
import { getProjectDetailContent, createDefaultContent, generateSlug } from '@/content/projects';

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const project = projectSummaries.find(
    (p) => generateSlug(p.title) === params.slug
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
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-4">Project Not Found</h1>
            <p className="text-lg text-foreground/70 mb-8">The project you're looking for doesn't exist.</p>
            <a 
              href="/#projects" 
              className="inline-block px-6 py-3 bg-foreground/10 backdrop-blur-sm border border-border text-foreground rounded-lg hover:bg-foreground/20 transition-all duration-300"
            >
              Back to Projects
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Get project detail content or create default
  const detailContent = getProjectDetailContent(params.slug) || createDefaultContent(params.slug, project.title);

  // Generate sidebar navigation based on available sections
  // Concise labels optimized for Korean recruiter scanning (8-10 sections)
  const sectionLabels: Record<string, string> = {
    'overview': 'Overview',
    'my-role': 'My Role',
    'problem': 'Problem',
    'goals': 'Goals',
    'research': 'Research',
    'architecture': 'Architecture & Flows',
    'design-system': 'Design System',
    'system-architecture': 'System Architecture',
    'key-features': 'Key Features',
    'challenges': 'Challenges',
    'results': 'Results & Impact',
    'learnings': 'Learnings',
    'tech-stack': 'Tech Stack'
  };

  const availableSections = detailContent.sections
    .map(section => ({ id: section.id, label: sectionLabels[section.id] || section.id }))
    .filter(section => section.label);


  // Split sections into overview and others
  const overviewSection = detailContent.sections.find(s => s.id === 'overview');
  const otherSections = detailContent.sections.filter(s => s.id !== 'overview');

  return (
    <div className="min-h-screen relative">
      {mounted && (theme === 'dark' ? <SpaceBackground /> : <LightBackground />)}
      {!mounted && <SpaceBackground />}
      <Navbar />
      <ProjectDetailHero project={project} content={detailContent} />
      <main className="relative z-10 px-6 md:px-12 xl:px-16 2xl:px-24 max-w-[1800px] mx-auto py-12">
        {/* Overview Section with Sidebar */}
        {overviewSection && (
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.2fr)_320px] gap-12 xl:gap-16 items-start mb-24">
            {/* Main Content - Overview */}
            <div>
              <ProjectDetail project={project} content={{ ...detailContent, sections: [overviewSection] }} />
          </div>
          
          {/* Sidebar - On this page */}
          {availableSections.length > 0 && (
              <div className="hidden xl:block w-full max-w-xs pl-2 2xl:pl-6 self-start">
              <TableOfContents 
                items={availableSections.map(section => ({
                  id: section.id,
                  label: section.label,
                  level: 0
                }))}
              />
            </div>
          )}
        </div>
        )}

        {/* Other Sections - Full Width */}
        {otherSections.length > 0 && (
          <div className="max-w-7xl mx-auto">
            <ProjectDetail project={project} content={{ ...detailContent, sections: otherSections }} />
          </div>
        )}

        {/* Image Gallery - Render once at the end if not already in sections */}
        {project.images && project.images.length > 0 && !detailContent.sections.some(s => s.id === 'gallery') && (
          <div className="max-w-7xl mx-auto mt-24">
            {/* Render gallery by calling ProjectDetail with empty sections to trigger gallery rendering */}
            <ProjectDetail project={project} content={{ ...detailContent, sections: [] }} />
          </div>
        )}
      </main>
    </div>
  );
} 