import { ProjectDetailContent } from '@/types/projectDetail';
import { bestiaContent } from './bestia';
import { awsContentModerationContent } from './aws-content-moderation';
import { handiersContent } from './handiers';
import { friendlyContent } from './friendly';
import { childnetContent } from './childnet';
import { kspoSportsContent } from './kspo-sports-platform';
import { amoreAgentContent } from './amore-agent-05';
import { majorMatchAiContent } from './major-match-ai';
import { moveparkContent } from './movepark';
import { makeeatContent } from './makeaat';
import { clearguideContent } from './clearguide';
import { rootinContent } from './rootin';

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

// Map of all project detail content
const projectContentMap: Record<string, ProjectDetailContent> = {
  bestia: bestiaContent,
  'aws-content-moderation': awsContentModerationContent,
  'handiers-inc': handiersContent,
  friendly: friendlyContent,
  'childnet-korea': childnetContent,
  'kspo-sports-platform': kspoSportsContent,
  'amore-agent-05': amoreAgentContent,
  'majormatch-ai': majorMatchAiContent,
  movepark: moveparkContent,
  makeeat: makeeatContent,
  clearguide: clearguideContent,
  rootin: rootinContent,
  // Add other projects here as they are created
};

// Function to get project detail content by slug
export function getProjectDetailContent(slug: string): ProjectDetailContent | null {
  return projectContentMap[slug] || null;
}

// Export all content
export const allProjectContent: ProjectDetailContent[] = Object.values(projectContentMap);

