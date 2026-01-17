import { Language } from '@/contexts/LanguageContext';
import { getBestiaCaseStudy } from './bestia';
import { getHandiersCaseStudy } from './handiers-inc';
import { getFriendlyCaseStudy } from './friendly';
import { getRootinCaseStudy } from './rootin';

export interface CaseStudyContent {
  slug: string;
  title: string;
  description?: string;
  sections: CaseStudySection[];
}

export interface CaseStudySection {
  id: string;
  type: 'overview' | 'problem' | 'solution' | 'process' | 'results' | 'learnings' | 'custom';
  title?: string;
  content?: string | React.ReactNode;
  [key: string]: any; // Allow flexible structure for different case studies
}

// Case study content getter - routes to individual case study files
export function getCaseStudyContent(slug: string, language: Language = 'en'): CaseStudyContent | null {
  switch (slug) {
    case 'bestia':
      return getBestiaCaseStudy(language);
    case 'handiers-inc':
      return getHandiersCaseStudy(language);
    case 'friendly':
      return getFriendlyCaseStudy(language);
    case 'rootin':
      return getRootinCaseStudy(language);
    default:
      return null;
  }
}

// Create default case study content
export function createDefaultCaseStudyContent(slug: string, title: string): CaseStudyContent {
  return {
    slug,
    title,
    description: '',
    sections: []
  };
}
