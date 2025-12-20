import React from 'react';
import { ProjectDetailContent } from '@/types/projectDetail';
import { Code, Database, Smartphone, BarChart3, Users, Zap, Shield, Layers, TrendingUp, Award, Brain, Mail, FileText, Sparkles, Component, LayoutTemplate, Workflow, Camera, Calendar, Heart, Bell, ChefHat } from 'lucide-react';
import { SiGithub, SiFlutter, SiDart, SiFirebase, SiNodedotjs, SiOpenai, SiGooglemaps, SiGoogle, SiFigma } from 'react-icons/si';
import { makeeatStructure } from './makeeat.structure';
import { makeeatEN } from './makeeat.en';
import { makeeatKO } from './makeeat.ko';

const iconMap: Record<string, any> = {
  Code, Database, Smartphone, BarChart3, Users, Zap, Shield, Layers, TrendingUp, Award, Brain, Mail, FileText, Sparkles, Component, LayoutTemplate, Workflow, Camera, Calendar, Heart, Bell, ChefHat, SiGithub, SiFlutter, SiDart, SiFirebase, SiNodedotjs, SiOpenai, SiGooglemaps, SiGoogle, SiFigma
};

function getIcon(key: string | undefined): any {
  if (!key) return undefined;
  return iconMap[key] || undefined;
}

function buildOverviewContent(content: typeof makeeatEN.overview): React.ReactNode {
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

function buildMakeeatContent(lang: 'en' | 'ko'): ProjectDetailContent {
  const content = lang === 'ko' ? makeeatKO : makeeatEN;
  const structure = makeeatStructure;

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
              icon: getIcon((structure.iconMappings.role as Record<string, string>)[role.iconKey || role.title]),
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
              icon: getIcon((structure.iconMappings.goals as Record<string, string>)[goal.iconKey || goal.title])
            }))
          };
        case 'research':
          return { id: section.id, type: section.type, insights: content.research.insights };
        case 'architecture':
          return {
            id: section.id,
            type: section.type,
            items: content.architecture.items.map(item => ({
              title: item.title,
              description: item.description,
              features: item.features,
              userFlows: item.userFlows?.map(flow => ({
                name: flow.name,
                description: flow.description,
                steps: flow.steps,
                icon: getIcon((structure.iconMappings.architecture as Record<string, string>)[flow.iconKey || flow.name])
              }))
            }))
          };
        case 'design-system':
          return {
            id: section.id,
            type: section.type,
            items: content.designSystem.items.map((item, idx) => ({
              title: item.title,
              type: item.type as 'colors' | 'components',
              content: {
                colors: item.type === 'colors' ? structure.designSystemColors.map((color, colorIdx) => ({
                  name: color.name,
                  hex: color.hex,
                  usage: item.colorUsages?.[colorIdx]?.usage || ''
                })) : undefined,
                components: item.type === 'components' ? (item.components || []).map(comp => ({
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
            categories: content.systemArchitecture.categories.map(cat => ({
              title: cat.title,
              icon: getIcon((structure.iconMappings.systemArchitecture as Record<string, string>)[cat.iconKey || cat.title]),
              items: cat.items
            }))
          };
        case 'key-features':
          return {
            id: section.id,
            type: section.type,
            metrics: content.keyFeatures.metrics,
            userFeatures: content.keyFeatures.userFeatures.map(feature => ({
              title: feature.title,
              icon: getIcon((structure.iconMappings.keyFeatures as Record<string, string>)[feature.iconKey || feature.title]),
              items: feature.items
            })),
            engineeringFeatures: content.keyFeatures.engineeringFeatures.map(feature => ({
              title: feature.title,
              icon: getIcon((structure.iconMappings.keyFeatures as Record<string, string>)[feature.iconKey || feature.title]),
              items: feature.items
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
              icon: getIcon((structure.iconMappings.learnings as Record<string, string>)[card.iconKey || card.title])
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
                icon: getIcon((structure.techStackIcons as Record<string, string>)[item])
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

export function getMakeeatContent(lang: 'en' | 'ko'): ProjectDetailContent {
  return buildMakeeatContent(lang);
}

export const makeeatContent = getMakeeatContent('en');
