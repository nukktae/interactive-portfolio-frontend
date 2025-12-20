import React from 'react';
import { ProjectDetailContent } from '@/types/projectDetail';
import { Code, Database, Smartphone, BarChart3, Users, Zap, Shield, Layers, TrendingUp, Award, Brain, Mail, FileText, Sparkles, Component, LayoutTemplate, Workflow } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { amoreAgent05Structure } from './amore-agent-05.structure';
import { amoreAgentEN } from './amore-agent-05.en';
import { amoreAgentKO } from './amore-agent-05.ko';

const iconMap: Record<string, any> = {
  Code, Database, Smartphone, BarChart3, Users, Zap, Shield, Layers, TrendingUp, Award, Brain, Mail, FileText, Sparkles, Component, LayoutTemplate, Workflow, SiGithub
};

function getIcon(key: string | undefined): any {
  if (!key) return undefined;
  return iconMap[key] || undefined;
}

function buildOverviewContent(content: typeof amoreAgentEN.overview): React.ReactNode {
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

function buildAmoreAgent05Content(lang: 'en' | 'ko'): ProjectDetailContent {
  const content = lang === 'ko' ? amoreAgentKO : amoreAgentEN;
  const structure = amoreAgent05Structure;

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
            roles: content.myRole.roles.map((role: any) => ({
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
            content: content.problem.paragraphs?.map((p: any) => typeof p.content === 'string' ? p.content : '').join(' ') || '',
            painPoints: [],
            whyItMatters: ''
          };
        case 'goals':
          // Handle both goals.goals (object array) and goals.items (string array) structures
          const goalsArray = (content.goals as any).goals || (content.goals.items?.map((item: string) => ({ title: item })) || []);
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
              description: content.architecture.paragraphs?.map((p: any) => typeof p.content === 'string' ? p.content : '').join(' ') || '',
              features: content.architecture.bullets || [],
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
            userFeatures: (content.keyFeatures.features || []).map((feature: any) => ({
              title: feature.title,
              icon: getIcon((structure.iconMappings.keyFeatures as Record<string, string>)[feature.iconKey || feature.title]),
              items: [feature.description || '']
            })),
            engineeringFeatures: []
          };
        case 'challenges':
          return { id: section.id, type: section.type, challenges: content.challenges.items || [] };
        case 'results':
          return {
            id: section.id,
            type: section.type,
            metrics: [],
            description: (content.results.bullets || []).join(' ')
          };
        case 'learnings':
          return {
            id: section.id,
            type: section.type,
            cards: (content.learnings.items || []).map((card: any) => ({
              title: card.title,
              description: card.description,
              icon: getIcon((structure.iconMappings.learnings as Record<string, string>)[card.iconKey || card.title])
            }))
          };
        case 'tech-stack':
          return {
            id: section.id,
            type: section.type,
            categories: [
              { category: 'Frontend', items: (content.techStack.frontend || []).map((item: string) => ({ name: item, icon: getIcon((structure.techStackIcons as Record<string, string>)[item]) })) },
              { category: 'Backend', items: (content.techStack.backend || []).map((item: string) => ({ name: item, icon: getIcon((structure.techStackIcons as Record<string, string>)[item]) })) },
              { category: 'AI', items: (content.techStack.ai || []).map((item: string) => ({ name: item, icon: getIcon((structure.techStackIcons as Record<string, string>)[item]) })) },
              { category: 'Deployment', items: (content.techStack.deployment || []).map((item: string) => ({ name: item, icon: getIcon((structure.techStackIcons as Record<string, string>)[item]) })) }
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

export function getAmoreAgent05Content(lang: 'en' | 'ko'): ProjectDetailContent {
  return buildAmoreAgent05Content(lang);
}

export const amoreAgent05Content = getAmoreAgent05Content('en');
