import React from 'react';
import { ProjectDetailContent } from '@/types/projectDetail';
import { Code, Database, Smartphone, BarChart3, Users, Zap, Shield, Layers, TrendingUp, Award, Brain, Mail, FileText, Sparkles, Component, LayoutTemplate, Workflow, Heart } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { cocoStructure } from './coco.structure';
import { cocoEN } from './coco.en';
import { cocoKO } from './coco.ko';

const iconMap: Record<string, any> = {
  Code, Database, Smartphone, BarChart3, Users, Zap, Shield, Layers, TrendingUp, Award, Brain, Mail, FileText, Sparkles, Component, LayoutTemplate, Workflow, SiGithub, Heart
};

function getIcon(key: string | undefined): any {
  if (!key) return undefined;
  return iconMap[key] || undefined;
}

function buildOverviewContent(content: typeof cocoEN.overview): React.ReactNode {
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

function buildCocoContent(lang: 'en' | 'ko'): ProjectDetailContent {
  const content = lang === 'ko' ? cocoKO : cocoEN;
  const structure = cocoStructure;

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
            roles: content.role.roles.map(role => ({
              title: role.title,
              icon: getIcon(role.iconKey),
              responsibilities: role.responsibilities,
              impacts: role.impacts
            }))
          };
        case 'problem':
          return {
            id: section.id,
            type: section.type,
            summary: content.problem.summary,
            content: content.problem.content,
            painPoints: content.problem.painPoints,
            whyItMatters: content.problem.whyItMatters
          };
        case 'goals':
          return {
            id: section.id,
            type: section.type,
            goals: content.goals.goals.map(goal => ({
              title: goal.title,
              metric: goal.metric,
              icon: getIcon(goal.iconKey)
            }))
          };
        case 'architecture':
          return {
            id: section.id,
            type: section.type,
            items: content.architecture.items.map(item => ({
              title: item.title,
              description: item.description,
              features: item.features,
              userFlows: (item.userFlows || []).map((flow: any) => ({
                name: flow.name,
                description: flow.description,
                steps: flow.steps,
                icon: getIcon(flow.iconKey)
              }))
            }))
          };
        case 'system-architecture':
          return {
            id: section.id,
            type: section.type,
            categories: (content.systemArchitecture.categories || []).map((cat: any) => ({
              title: cat.title,
              icon: getIcon(cat.iconKey),
              items: cat.items || []
            }))
          };
        case 'key-features':
          return {
            id: section.id,
            type: section.type,
            metrics: content.keyFeatures.metrics,
            userFeatures: (content.keyFeatures.userFeatures || []).map((feature: any) => ({
              title: feature.title,
              icon: getIcon(feature.iconKey),
              items: feature.items || []
            })),
            engineeringFeatures: (content.keyFeatures.engineeringFeatures || []).map((feature: any) => ({
              title: feature.title,
              icon: getIcon(feature.iconKey),
              items: feature.items || []
            }))
          };
        case 'challenges':
          return { id: section.id, type: section.type, challenges: content.challenges.challenges };
        case 'results':
          return {
            id: section.id,
            type: section.type,
            metrics: content.results.metrics,
            description: content.results.description
          };
        case 'learnings':
          return {
            id: section.id,
            type: section.type,
            cards: content.learnings.cards.map(card => ({
              title: card.title,
              description: card.description,
              icon: getIcon(card.iconKey)
            }))
          };
        case 'tech-stack':
          return {
            id: section.id,
            type: section.type,
            categories: content.techStack.categories.map(cat => ({
              category: cat.category,
              items: cat.items.map(item => ({
                name: item,
                icon: undefined
              }))
            }))
          };
        case 'links':
          return {
            id: section.id,
            type: section.type,
            links: content.links.links,
            figmaUrl: content.links.figmaUrl,
            caseStudyUrl: content.links.caseStudyUrl
          };
        default:
          return section as any;
      }
    })
  };
}

export function getCocoContent(lang: 'en' | 'ko'): ProjectDetailContent {
  return buildCocoContent(lang);
}

export const cocoContent = getCocoContent('en');

