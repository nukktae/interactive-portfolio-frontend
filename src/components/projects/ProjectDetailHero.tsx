"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '@/types/project';
import { ProjectDetailContent } from '@/types/projectDetail';
import { ExternalLink, Award, Calendar, Code2, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { competitionsProjects } from '@/data/competitionsProjects';
import styles from '@/styles/floating.module.css';

interface ProjectDetailHeroProps {
  project: Project;
  content?: ProjectDetailContent;
}

export default function ProjectDetailHero({ project, content }: ProjectDetailHeroProps) {
  const { t, language } = useLanguage();

  const getRoleSummary = (): string => {
    if (content) {
      const roleSection = content.sections.find(s => s.id === 'my-role' && s.type === 'role');
      if (roleSection && roleSection.type === 'role') {
        const roles = roleSection.roles.map(r => r.title).join(' + ');
        return roles || 'Full-stack Engineering + UI/UX Design';
      }
    }
    if (project.roles && project.roles.length > 0) {
      return project.roles.map(r => r.area).join(' + ') || 'Full-stack Engineering + UI/UX Design';
    }
    return 'Full-stack Engineering + UI/UX Design';
  };

  const getKeyMetrics = (): string[] => {
    if (content) {
      const resultsSection = content.sections.find(s => s.id === 'results' && s.type === 'results');
      if (resultsSection && resultsSection.type === 'results' && resultsSection.metrics) {
        return resultsSection.metrics.slice(0, 3);
      }
    }
    if (project.metrics && project.metrics.length > 0) {
      return project.metrics.slice(0, 3);
    }
    return [];
  };

  const getValueStatement = (): string => {
    if (language === 'ko') {
      if (project.descriptionKo && project.descriptionKo.length < 200) {
        return project.descriptionKo;
      }
      if (project.detailedDescriptionKo) {
        const firstSentence = project.detailedDescriptionKo.split('.')[0];
        return firstSentence.length > 0 ? firstSentence + '.' : project.detailedDescriptionKo;
      }
    }
    if (project.description && project.description.length < 200) {
      return project.description;
    }
    if (project.detailedDescription) {
      const firstSentence = project.detailedDescription.split('.')[0];
      return firstSentence.length > 0 ? firstSentence + '.' : project.detailedDescription;
    }
    return '';
  };
  const valueStatement = getValueStatement();

  const getTimeline = (): string => {
    const competitionProject = competitionsProjects.find(cp => cp.title === project.title || cp.titleKo === project.titleKo);
    if (competitionProject && competitionProject.period) {
      return language === 'ko' ? competitionProject.period.replace(/Present/g, '현재') : competitionProject.period;
    }
    return language === 'ko' ? "2025.08 – 2025.12" : "2025.08 – 2025.12";
  };
  const timeline = getTimeline();

  const roleSummary = getRoleSummary();
  const keyMetrics = getKeyMetrics();

  const previewImage = project.image || (project.images && project.images[0]) || '';

  return (
    <section className="relative z-10 pt-28 pb-20 px-6 md:px-12 lg:px-20 xl:px-32 overflow-hidden">
      <div className="max-w-6xl mx-auto relative space-y-16">
        {/* Statement + meta block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
                {language === 'ko' && project.titleKo ? project.titleKo : project.title}
              </h1>
            </div>
            {(project.liveUrl || project.github) && (
              <a
                href={project.liveUrl || project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-semibold hover:bg-foreground/90 transition-all duration-300 shadow-sm"
              >
                <span>{t('project.viewProject')}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          {valueStatement && (
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed max-w-3xl">
              {valueStatement}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-foreground/80">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/80 bg-transparent backdrop-blur-sm">
              <Code2 className="w-4 h-4" />
              {roleSummary}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/80 bg-transparent backdrop-blur-sm">
              <Calendar className="w-4 h-4" />
              {timeline}
            </span>
            {project.address && (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/80 bg-transparent backdrop-blur-sm">
                <MapPin className="w-4 h-4" />
                {project.address}
              </span>
            )}
          </div>
        </motion.div>

        {/* Key Impact */}
        {keyMetrics.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60">
              <Award className="w-4 h-4" />
              {t('project.keyImpact')}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {keyMetrics.map((metric, index) => (
                <p key={index} className="text-xl md:text-2xl font-extrabold text-foreground leading-tight">
                  {metric}
                </p>
              ))}
            </div>
          </motion.div>
        )}

        {/* Floating display: 3D card with project preview */}
        {previewImage && (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className={styles.scene}
          >
            <div className={styles.card} style={{ width: 'min(900px, 100%)', aspectRatio: '16/10', margin: '0 auto' }}>
              <div className={styles.cardInner} style={{ width: '100%', height: '100%' }}>
                <Image
                  src={previewImage}
                  alt={language === 'ko' && project.titleKo ? project.titleKo : project.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 1024px) 100vw, 900px"
                  priority
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
