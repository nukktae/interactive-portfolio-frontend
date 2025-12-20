import { Project } from './project';

/**
 * Structured Knowledge Base Types
 * 
 * These types define the structured knowledge layers that enable
 * reasoning, comparison, and contextual recommendations.
 */

export type SkillDepthLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface ProjectScorecard {
  // Evidence strength
  productionLevel: 'prototype' | 'internal-tool' | 'production' | 'deployed';
  hasRealUsers: boolean;
  hasRealData: boolean;
  isDeployed: boolean;
  isMaintained: boolean;
  
  // What it demonstrates (0-1 scores)
  demonstrates: {
    leadership: number;
    productThinking: number;
    systemDesign: number;
    uiCraft: number;
    aiMlIntegration: number;
    reliabilitySecurity: number;
    collaboration: number;
  };
  
  // Depth signals
  depthSignals: {
    hasAuth: boolean;
    hasPayments: boolean;
    hasRealtime: boolean;
    hasRLS: boolean;
    hasQueues: boolean;
    tradeoffsExplained: boolean;
    hasTesting: boolean;
    hasObservability: boolean;
    edgeCasesHandled: boolean;
  };
  
  // Story strength
  storyStrength: {
    clearProblem: boolean;
    measurableOutcome: boolean;
    hasLearnings: boolean;
    hasIteration: boolean;
  };
  
  // Assets available
  assets: {
    screenshots: boolean;
    demoLink: boolean;
    architectureDiagram: boolean;
    figma: boolean;
    repoExcerpts: boolean;
    metrics: boolean;
  };
  
  // Ownership level
  ownership: 'contributor' | 'lead' | 'solo';
}

export interface ProjectKnowledge {
  title: string;
  slug?: string;
  problem: string;
  approach: string;
  techStack: string[];
  impact: {
    metrics: string[];
    businessOutcomes: string[];
    technicalAchievements: string[];
  };
  screenshots: string[];
  useCases: string[];
  complexity: 'low' | 'medium' | 'high' | 'very-high';
  domain: string[]; // e.g., ['frontend', 'backend', 'full-stack', 'mobile', 'ai/ml']
  roleFocus: {
    frontend: number; // 0-100 percentage
    backend: number;
    design: number;
    architecture: number;
    ai: number;
  };
  relatedProjects?: string[]; // Project titles that are related
  scorecard?: ProjectScorecard; // Project scorecard for recommendations
}

export interface SkillKnowledge {
  name: string;
  category: 'programming' | 'backend' | 'frontend' | 'cloud' | 'design' | 'other' | 'tool';
  depthLevel: SkillDepthLevel;
  whereUsed: {
    project: string; // Project title
    context: string; // How it was used
    complexity: 'low' | 'medium' | 'high';
    rolePercentage: number; // How much of the role used this skill
  }[];
  proficiencyMetrics: {
    yearsOfExperience?: number;
    projectsCount: number;
    advancedUsageCount: number; // Projects where used in advanced ways
  };
  certifications?: string[];
}

export interface DesignPhilosophy {
  principles: string[];
  approach: {
    userCentric: boolean;
    dataDriven: boolean;
    iterative: boolean;
    collaborative: boolean;
  };
  values: string[];
  decisionMakingProcess: string;
  examples: {
    project: string;
    principle: string;
    application: string;
  }[];
}

export interface WorkExperienceKnowledge {
  company: string;
  position: string;
  duration: string;
  location: string;
  ownershipAreas: {
    area: string;
    description: string;
    percentage: number;
  }[];
  quantifiableOutcomes: {
    metric: string;
    value: string;
    impact: string;
  }[];
  keyDecisions: {
    decision: string;
    rationale: string;
    outcome: string;
  }[];
  relatedProjects: string[]; // Project titles
  skillsDeveloped: string[];
}

export interface CaseStudy {
  projectTitle: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  keyLearnings: string[];
  interviewReady: boolean;
  tags: string[]; // For filtering (e.g., 'frontend', 'leadership', 'scalability')
}

export interface PersonalityLayer {
  tone: 'professional' | 'approachable' | 'innovative' | 'collaborative';
  communicationStyle: string;
  values: string[];
  humor: 'none' | 'light' | 'moderate';
  workPreferences: {
    collaboration: string;
    problemSolving: string;
    learning: string;
  };
  examples: {
    context: string;
    expression: string;
  }[];
}

export interface KnowledgeBase {
  projects: ProjectKnowledge[];
  skills: SkillKnowledge[];
  designPhilosophy: DesignPhilosophy;
  workExperience: WorkExperienceKnowledge[];
  caseStudies: CaseStudy[];
  personality: PersonalityLayer;
}

