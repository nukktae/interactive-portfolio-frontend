import { ProjectDetailContent } from '@/types/projectDetail';
import { getBestiaContent } from './bestia/index';
import { getHandiersContent } from './handiers/index';
import { getAwsContentModerationContent } from './aws-content-moderation/index';
import { getFriendlyContent } from './friendly/index';
import { getChildnetKoreaContent } from './childnet-korea/index';
import { getKspoSportsPlatformContent } from './kspo-sports-platform/index';
import { getAmoreAgent05Content } from './amore-agent-05/index';
import { getMajormatchAiContent } from './majormatch-ai/index';
import { getMoveparkContent } from './movepark/index';
import { getMakeeatContent } from './makeeat/index';
import { getClearguideContent } from './clearguide/index';
import { getRootinContent } from './rootin/index';
import { getEncarTrack1Content } from './encar-track1/index';
import { getCocoContent } from './coco/index';
import { getShinhanContent } from './shinhan/index';

type Language = 'en' | 'ko';

// Helper function to extract language-specific content from bilingual structures
function getLocalizedValue(value: any, language: Language): any {
  // If value is an object with en/ko properties, extract the language-specific version
  if (value && typeof value === 'object' && !Array.isArray(value) && ('en' in value || 'ko' in value)) {
    if (language === 'ko' && 'ko' in value) {
      return value.ko;
    }
    // Fall back to English if Korean not available or language is English
    return value.en || value.ko || value;
  }
  
  // If value is an array, recursively process each item
  if (Array.isArray(value)) {
    return value.map(item => getLocalizedValue(item, language));
  }
  
  // If value is an object (but not en/ko structure), recursively process properties
  if (value && typeof value === 'object' && value !== null) {
    const result: any = {};
    for (const key in value) {
      result[key] = getLocalizedValue(value[key], language);
    }
    return result;
  }
  
  // Primitive value, return as-is
  return value;
}

// Helper function to get localized project content
export function getLocalizedContent(content: ProjectDetailContent, language: Language): ProjectDetailContent {
  if (language === 'en') {
    // For English, just return the content as-is (it's already in English)
    return content;
  }
  
  // For Korean, extract Korean versions from bilingual structure
  return {
    slug: content.slug,
    sections: content.sections.map(section => getLocalizedValue(section, language))
  };
}

// Helper function to generate slug from project title
export function generateSlug(title: string): string {
  return title.toLowerCase()
    .replace(/\s+/g, '-')  // Replace spaces with dashes
    .replace(/[^\w-]/g, '')  // Remove non-word characters except dashes
    .replace(/-+/g, '-')  // Replace multiple consecutive dashes with single dash
    .replace(/^-|-$/g, '');  // Remove leading/trailing dashes
}

// Default content generator for projects without detailed content files
export function createDefaultContent(slug: string, projectTitle: string): ProjectDetailContent {
  return {
    slug,
    sections: [
      {
        id: 'overview',
        type: 'overview',
        content: `This project detail page is being crafted. More information about ${projectTitle} will be available soon.`
      }
    ]
  };
}

// Map of all project detail content (for projects using old structure - now empty as all use new structure)
const projectContentMap: Record<string, ProjectDetailContent> = {
  // All projects now use the new directory structure
};

// Function to get project detail content by slug and language
export function getProjectDetailContent(slug: string, language: Language = 'en'): ProjectDetailContent | null {
  // Handle projects with new structure
  if (slug === 'bestia') {
    return getBestiaContent(language);
  }
  if (slug === 'handiers-inc') {
    return getHandiersContent(language);
  }
  if (slug === 'aws-content-moderation') {
    return getAwsContentModerationContent(language);
  }
  if (slug === 'friendly') {
    return getFriendlyContent(language);
  }
  if (slug === 'childnet-korea') {
    return getChildnetKoreaContent(language);
  }
  if (slug === 'kspo-sports-platform') {
    return getKspoSportsPlatformContent(language);
  }
  if (slug === 'amore-agent-05') {
    return getAmoreAgent05Content(language);
  }
  if (slug === 'majormatch-ai') {
    return getMajormatchAiContent(language);
  }
  if (slug === 'movepark') {
    return getMoveparkContent(language);
  }
  if (slug === 'makeeat') {
    return getMakeeatContent(language);
  }
  if (slug === 'clearguide') {
    return getClearguideContent(language);
  }
  if (slug === 'rootin') {
    return getRootinContent(language);
  }
  if (slug === 'encar-track1' || slug === 'encar-track-1') {
    return getEncarTrack1Content(language);
  }
  if (slug === 'coco') {
    return getCocoContent(language);
  }
  if (slug === 'shinhan-scholarship-foundation' || slug === 'shinhan') {
    return getShinhanContent(language);
  }
  
  // Handle other projects with old structure (if any remain)
  const content = projectContentMap[slug] || null;
  if (!content) {
    return null;
  }
  
  return getLocalizedContent(content, language);
}

// Export all content (all projects now use new structure)
export const allProjectContent: ProjectDetailContent[] = [
  getBestiaContent('en'),
  getHandiersContent('en'),
  getAwsContentModerationContent('en'),
  getFriendlyContent('en'),
  getChildnetKoreaContent('en'),
  getKspoSportsPlatformContent('en'),
  getAmoreAgent05Content('en'),
  getMajormatchAiContent('en'),
  getMoveparkContent('en'),
  getMakeeatContent('en'),
  getClearguideContent('en'),
  getRootinContent('en'),
  getEncarTrack1Content('en'),
  getCocoContent('en'),
  getShinhanContent('en'),
  ...Object.values(projectContentMap)
];

