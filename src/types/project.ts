export interface Project {
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  images: string[];
  technologies: string[];
  tools?: string[];
  hardSkills: string[];
  softSkills: string[];
  metrics: string[];
  highlights: string[];
  challenges: string[];
  solutions: string[];
  features: string[];
  github?: string;
  liveUrl?: string;
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