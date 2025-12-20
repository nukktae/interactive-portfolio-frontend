import React from 'react';
import { ProjectDetailContent } from '@/types/projectDetail';
import { Code, Database, Smartphone, BarChart3, Users, Zap, Shield, Layers, TrendingUp, Award, Brain, Mail, FileText, Sparkles, Component, LayoutTemplate, Workflow } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { childnetKoreaStructure } from './childnet-korea.structure';
import { childnetEN } from './childnet-korea.en';
import { childnetKO } from './childnet-korea.ko';

const iconMap: Record<string, any> = {
  Code, Database, Smartphone, BarChart3, Users, Zap, Shield, Layers, TrendingUp, Award, Brain, Mail, FileText, Sparkles, Component, LayoutTemplate, Workflow, SiGithub
};

function getIcon(key: string | undefined): any {
  if (!key) return undefined;
  return iconMap[key] || undefined;
}

function buildOverviewContent(content: typeof childnetEN.overview): React.ReactNode {
  const elements = content.paragraphs.map((para, idx) => {
    if (para.type === 'text' && typeof para.content === 'string') {
      return React.createElement('p', { key: idx }, para.content);
    }
    if (para.type === 'text' && Array.isArray(para.content)) {
      const children: React.ReactNode[] = para.content.map((item, itemIdx) => {
        if (typeof item === 'string') return item;
        if (typeof item === 'object' && item.type === 'span') {
          return React.createElement('span', { key: itemIdx, className: item.className }, item.text);
        }
        return null;
      }).filter(Boolean);
      return React.createElement('p', { key: idx }, ...children);
    }
    return null;
  }).filter(Boolean);
  return React.createElement(React.Fragment, null, ...elements);
}

function buildChildnetKoreaContent(lang: 'en' | 'ko'): ProjectDetailContent {
  const content = lang === 'ko' ? childnetKO : childnetEN;
  const structure = childnetKoreaStructure;

  return {
    slug: structure.slug,
    sections: structure.sections.map(section => {
      switch (section.type) {
        case 'overview':
          return { id: section.id, type: section.type, content: buildOverviewContent(content.overview) };
        case 'role':
          return {
            id: section.id,
            type: section.type,
            roles: ((content as any).myRole || (content as any).role).roles.map((role: any) => ({
              title: role.title,
              icon: getIcon((structure.iconMappings.role as Record<string, string>)[role.iconKey || role.title]),
              responsibilities: role.responsibilities,
              impacts: role.impacts || []
            }))
          };
        case 'problem':
          return {
            id: section.id,
            type: section.type,
            summary: content.problem.summary,
            content: ((content.problem as any).paragraphs?.map((p: any) => typeof p.content === 'string' ? p.content : '').join(' ') || (content.problem as any).content || ''),
            painPoints: [],
            whyItMatters: ''
          };
        case 'goals':
          // Handle both goals.goals (object array) and goals.items (string array) structures
          const goalsArray = (content.goals as any).goals || ((content.goals as any).items?.map((item: string) => ({ title: item })) || []);
          return {
            id: section.id,
            type: section.type,
            goals: goalsArray.map((goal: any) => ({
              title: goal.title || '',
              metric: goal.metric || '',
              icon: getIcon((structure.iconMappings.goals as Record<string, string>)[goal.iconKey || goal.title])
            }))
          };
        case 'research':
          return { id: section.id, type: section.type, insights: content.research.insights };
        case 'architecture':
          return {
            id: section.id,
            type: section.type,
            items: [{
              title: '',
              description: ((content.architecture as any).paragraphs?.map((p: any) => typeof p.content === 'string' ? p.content : '').join(' ') || (content.architecture as any).items?.[0]?.description || ''),
              features: (content.architecture as any).bullets || (content.architecture as any).items?.[0]?.features || [],
              userFlows: undefined
            }]
          };
        case 'design-system':
          return {
            id: section.id,
            type: section.type,
            items: []
          };
        case 'system-architecture':
          return {
            id: section.id,
            type: section.type,
            categories: []
          };
        case 'key-features':
          return {
            id: section.id,
            type: section.type,
            metrics: [],
            userFeatures: ((content as any).keyFeatures?.features || (content as any).keyFeatures?.userFeatures || []).map((feature: any) => ({
              title: feature.title,
              icon: getIcon((structure.iconMappings.keyFeatures as Record<string, string>)[feature.iconKey || feature.title]),
              items: [feature.description || '']
            })),
            engineeringFeatures: []
          };
        case 'challenges':
          return { id: section.id, type: section.type, challenges: ((content as any).challenges?.items || (content as any).challenges?.challenges || []) };
        case 'results':
          return {
            id: section.id,
            type: section.type,
            metrics: [],
            description: ((content.results as any).bullets || []).join(' ') || (content.results as any).description || ''
          };
        case 'learnings':
          return {
            id: section.id,
            type: section.type,
            cards: ((content.learnings as any).items || (content.learnings as any).cards || []).map((card: any) => ({
              title: card.title,
              description: card.description,
              icon: getIcon((structure.iconMappings.learnings as Record<string, string>)[card.iconKey || card.title])
            }))
          };
        case 'tech-stack':
          const techStack = content.techStack as any;
          return {
            id: section.id,
            type: section.type,
            categories: techStack.categories || [
              { category: 'Frontend', items: (techStack.frontend || []).map((item: string) => ({ name: item, icon: getIcon((structure.techStackIcons as Record<string, string>)[item]) })) },
              { category: 'Backend', items: (techStack.backend || []).map((item: string) => ({ name: item, icon: getIcon((structure.techStackIcons as Record<string, string>)[item]) })) },
              { category: 'Services', items: (techStack.services || []).map((item: string) => ({ name: item, icon: getIcon((structure.techStackIcons as Record<string, string>)[item]) })) },
              { category: 'Deployment', items: (techStack.deployment || []).map((item: string) => ({ name: item, icon: getIcon((structure.techStackIcons as Record<string, string>)[item]) })) }
            ]
          };
        case 'links':
          return {
            id: section.id,
            type: section.type,
            links: [],
            figmaUrl: '#',
            caseStudyUrl: '#'
          };
        default:
          return section as any;
      }
    })
  };
}

export function getChildnetKoreaContent(lang: 'en' | 'ko'): ProjectDetailContent {
  return buildChildnetKoreaContent(lang);
}

export const childnetKoreaContent = getChildnetKoreaContent('en');
