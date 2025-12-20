import React from 'react';
import { ProjectDetailContent } from '@/types/projectDetail';
import { Code, Database, Smartphone, BarChart3, Users, Zap, Shield, Layers, TrendingUp, Award, Brain, Mail, FileText, Sparkles, Component, LayoutTemplate, Workflow, Target, GitBranch, Eye, Settings, ImageIcon } from 'lucide-react';
import { SiGithub, SiPython, SiPytorch, SiJupyter, SiNumpy, SiPandas, SiOpencv, SiOpenai } from 'react-icons/si';
import { encarTrack1Structure } from './encar-track1.structure';
import { encarTrack1EN } from './encar-track1.en';
import { encarTrack1KO } from './encar-track.ko';

const iconMap: Record<string, any> = {
  Code, Database, Smartphone, BarChart3, Users, Zap, Shield, Layers, TrendingUp, Award, Brain, Mail, FileText, Sparkles, Component, LayoutTemplate, Workflow, Target, GitBranch, Eye, Settings, ImageIcon, SiGithub, SiPython, SiPytorch, SiJupyter, SiNumpy, SiPandas, SiOpencv, SiOpenai
};

function getIcon(key: string | undefined): any {
  if (!key) return undefined;
  return iconMap[key] || undefined;
}

function buildOverviewContent(content: typeof encarTrack1EN.overview): React.ReactNode {
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

function buildEncarTrack1Content(lang: 'en' | 'ko'): ProjectDetailContent {
  const content = lang === 'ko' ? encarTrack1KO : encarTrack1EN;
  const structure = encarTrack1Structure;

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
          const problemData = content.problem as any;
          return {
            id: section.id,
            type: section.type,
            summary: problemData.summary || '',
            content: problemData.content || problemData.paragraphs?.map((p: any) => typeof p.content === 'string' ? p.content : '').join(' ') || '',
            painPoints: problemData.painPoints || [],
            whyItMatters: problemData.whyItMatters || ''
          };
        case 'goals':
          // Handle both goals.goals (object array) and goals.items (string array) structures
          const goalsData = content.goals as any;
          const goalsArray = goalsData.goals || (goalsData.items?.map((item: string) => ({ title: item })) || []);
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
            items: content.architecture.items?.map((item: any) => ({
              title: item.title || '',
              description: item.description || '',
              features: item.features || [],
              userFlows: item.userFlows?.map((flow: any) => ({
                name: flow.name,
                description: flow.description,
                steps: flow.steps,
                icon: getIcon((structure.iconMappings.architecture as Record<string, string>)[flow.iconKey || flow.name])
              }))
            })) || [{
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
            items: (content.designSystem.items || []).map((item: any, idx: number) => ({
              title: item.title,
              type: item.type as 'colors' | 'components',
              content: {
                colors: item.type === 'colors' ? (structure.designSystemColors || []).map((color: any, colorIdx: number) => ({
                  name: color.name,
                  hex: color.hex,
                  usage: item.colorUsages?.[colorIdx]?.usage || ''
                })) : undefined,
                components: item.type === 'components' ? (item.components || []).map((comp: any) => ({
                  title: comp.title,
                  description: comp.description,
                  icon: getIcon((structure.iconMappings.designSystem as Record<string, string>)[comp.iconKey || comp.title])
                })) : undefined
              }
            }))
          };
        case 'system-architecture':
          return {
            id: section.id,
            type: section.type,
            categories: (content.systemArchitecture.categories || []).map((cat: any) => ({
              title: cat.title,
              icon: getIcon((structure.iconMappings.systemArchitecture as Record<string, string>)[cat.iconKey || cat.title]),
              items: cat.items || []
            }))
          };
        case 'key-features':
          const keyFeaturesData = content.keyFeatures as any;
          return {
            id: section.id,
            type: section.type,
            metrics: keyFeaturesData.metrics || [],
            userFeatures: (keyFeaturesData.userFeatures || []).map((feature: any) => ({
              title: feature.title,
              icon: getIcon((structure.iconMappings.keyFeatures as Record<string, string>)[feature.iconKey || feature.title]),
              items: feature.items || []
            })),
            engineeringFeatures: (keyFeaturesData.engineeringFeatures || []).map((feature: any) => ({
              title: feature.title,
              icon: getIcon((structure.iconMappings.keyFeatures as Record<string, string>)[feature.iconKey || feature.title]),
              items: feature.items || []
            }))
          };
        case 'challenges':
          const challengesData = content.challenges as any;
          return { 
            id: section.id, 
            type: section.type, 
            challenges: (challengesData.items || challengesData.challenges || []).map((item: any) => ({
              challenge: item.challenge || item.problem || '',
              solution: item.solution || ''
            }))
          };
        case 'results':
          const resultsData = content.results as any;
          return {
            id: section.id,
            type: section.type,
            metrics: resultsData.metrics || resultsData.bullets || [],
            description: resultsData.description || (resultsData.bullets || []).join(' ')
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
              { category: 'Frameworks', items: (content.techStack.frameworks || []).map((item: string) => ({ name: item, icon: getIcon((structure.techStackIcons as Record<string, string>)[item]) })) },
              { category: 'Data', items: (content.techStack.data || []).map((item: string) => ({ name: item, icon: getIcon((structure.techStackIcons as Record<string, string>)[item]) })) },
              { category: 'Tools', items: (content.techStack.tools || []).map((item: string) => ({ name: item, icon: getIcon((structure.techStackIcons as Record<string, string>)[item]) })) }
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

export function getEncarTrack1Content(lang: 'en' | 'ko'): ProjectDetailContent {
  return buildEncarTrack1Content(lang);
}

export const encarTrack1Content = getEncarTrack1Content('en');

