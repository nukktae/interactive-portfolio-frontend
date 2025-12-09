import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

// Standard section IDs
export type StandardSectionId =
  | 'overview'
  | 'my-role'
  | 'problem'
  | 'goals'
  | 'research'
  | 'architecture'
  | 'design-system'
  | 'system-architecture'
  | 'key-features'
  | 'challenges'
  | 'results'
  | 'learnings'
  | 'tech-stack'
  | 'links';

// Role card for "My Role & Responsibilities" section
export interface RoleCard {
  title: string;
  subtitle?: string;
  icon: LucideIcon | IconType;
  responsibilities: string[];
  impacts: string[];
}

// Goal card for "Goals & Success Metrics" section
export interface GoalCard {
  title: string;
  metric: string;
  icon: LucideIcon;
}

// Research insight for "Research & Insights" section
export interface ResearchInsight {
  title: string;
  items: string[];
}

// Architecture item for "Information Architecture" section
export interface ArchitectureItem {
  title: string;
  description?: string;
  features?: string[];
  userFlows?: Array<{
    name: string;
    steps: string[];
    icon?: LucideIcon | IconType;
    description?: string;
  }>;
}

// Design system item
export interface DesignSystemItem {
  title: string;
  type: 'colors' | 'components' | 'typography' | 'spacing';
  content: {
    colors?: Array<{
      name: string;
      hex: string;
      usage: string;
    }>;
    components?: Array<{
      title: string;
      description: string;
      icon?: LucideIcon | IconType;
    }>;
    typography?: string[];
    spacing?: string[];
  };
}

// System architecture category
export interface SystemArchitectureCategory {
  title: string;
  icon: LucideIcon;
  items: string[];
}

// Challenge solution pair
export interface ChallengeSolution {
  challenge: string;
  solution: string;
}

// Tech stack category
export interface TechStackCategory {
  category: string;
  items: Array<{
    name: string;
    icon: IconType | LucideIcon;
  }>;
}

// Link item
export interface ProjectLink {
  label: string;
  url: string;
  icon: LucideIcon;
}

// Custom section for flexible content
export interface CustomSection {
  id: string;
  title: string;
  type: 'custom';
  content: ReactNode | string;
}

// Standard section content types
export interface OverviewSection {
  id: 'overview';
  type: 'overview';
  content: string | ReactNode; // Can be paragraphs or custom JSX
}

export interface RoleSection {
  id: 'my-role';
  type: 'role';
  roles: RoleCard[];
}

export interface ProblemSection {
  id: 'problem';
  type: 'problem';
  content: string | ReactNode;
  summary?: string;
  painPoints?: Array<{
    title?: string;
    description: string;
    icon?: LucideIcon | IconType;
  }>;
  whyItMatters?: string;
}

export interface GoalsSection {
  id: 'goals';
  type: 'goals';
  goals: GoalCard[];
}

export interface ResearchSection {
  id: 'research';
  type: 'research';
  insights: ResearchInsight[];
}

export interface ArchitectureSection {
  id: 'architecture';
  type: 'architecture';
  items: ArchitectureItem[];
}

export interface DesignSystemSection {
  id: 'design-system';
  type: 'design-system';
  items: DesignSystemItem[];
}

export interface SystemArchitectureSection {
  id: 'system-architecture';
  type: 'system-architecture';
  categories: SystemArchitectureCategory[];
}

export interface KeyFeaturesSection {
  id: 'key-features';
  type: 'key-features';
  metrics?: Array<{
    title: string;
    description: string;
    icon?: LucideIcon | IconType;
  }>;
  userFeatures?: FeatureGroup[];
  engineeringFeatures?: FeatureGroup[];
  features?: string[]; // Generic fallback
}

export interface FeatureGroup {
  title: string;
  items: string[];
  icon?: LucideIcon | IconType;
}

export interface ChallengesSection {
  id: 'challenges';
  type: 'challenges';
  challenges: ChallengeSolution[];
}

export interface ResultsSection {
  id: 'results';
  type: 'results';
  metrics?: string[];
  description?: string | ReactNode;
}

export interface LearningsSection {
  id: 'learnings';
  type: 'learnings';
  cards?: LearningCard[];
  learnings?: string[]; // legacy support
}

export interface LearningCard {
  title: string;
  description: string;
  icon?: LucideIcon | IconType;
}

export interface TechStackSection {
  id: 'tech-stack';
  type: 'tech-stack';
  categories: TechStackCategory[];
}

export interface LinksSection {
  id: 'links';
  type: 'links';
  links: ProjectLink[];
  figmaUrl?: string;
  caseStudyUrl?: string;
}

// Union type for all sections
export type ProjectSection =
  | OverviewSection
  | RoleSection
  | ProblemSection
  | GoalsSection
  | ResearchSection
  | ArchitectureSection
  | DesignSystemSection
  | SystemArchitectureSection
  | KeyFeaturesSection
  | ChallengesSection
  | ResultsSection
  | LearningsSection
  | TechStackSection
  | LinksSection
  | CustomSection;

// Main project detail content structure
export interface ProjectDetailContent {
  slug: string; // Must match project slug
  sections: ProjectSection[];
}

