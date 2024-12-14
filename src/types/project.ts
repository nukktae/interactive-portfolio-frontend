export interface Project {
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  images: string[];
  technologies: string[];
  tools?: string[];
  softSkills?: string[];
  hardSkills?: string[];
  metrics: string[];
  highlights: string[];
  challenges: string[];
  solutions: string[];
  features?: string[];
  github?: string;
  liveUrl?: string;
}