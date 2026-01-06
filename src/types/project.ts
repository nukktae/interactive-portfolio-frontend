export interface Project {
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  coverVideo?: string; // Optional video cover (mp4, webm, etc.)
  images: string[];
  technologies: string[];
  tools: string[];
  hardSkills: string[];
  softSkills: string[];
  features: string[];
  metrics: string[];
  highlights: string[];
  challenges: string[];
  solutions: string[];
  github: string;
  liveUrl: string;
  address?: string; // Project location/address
  imageDescriptions?: {
    title: string;
    text: string;
  }[];
  roles: {
    area: string;
    percentage: number;
    description: string;
  }[];
}