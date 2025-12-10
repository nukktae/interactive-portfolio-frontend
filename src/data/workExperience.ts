export interface WorkExperienceProject {
  id: number;
  title: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  image: string;
  coverVideo?: string; // Optional video cover (mp4, webm, etc.)
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export const workExperience: WorkExperienceProject[] = [
  {
    id: 1,
    title: "Bestia",
    role: "UI/UX Designer & Frontend Developer",
    period: "September 2025 - Now",
    description: "CRM tech for real estate agents that saves 2.5-4 hours per day and enables handling 2-3× more leads",
    tags: ["React", "Next.js", "Figma", "CRM", "UI/UX", "Postman", "HTML", "LLM Model", "Twilio"],
    image: "/assets/images/projects/Bestia/bestia1.png",
    githubUrl: "",
    featured: true
  },
  {
    id: 2,
    title: "Handiers Inc.",
    role: "UI/UX Designer",
    period: "March 2025 - September 2025",
    description: "Mobile apps & marketing website design with UX research and data-driven improvements",
    tags: ["Figma", "Flutter", "UI Design", "UX Research"],
    image: "/assets/images/projects/handiers.png",
    githubUrl: "",
    liveUrl: "https://handiers.com",
    featured: true
  }
];

