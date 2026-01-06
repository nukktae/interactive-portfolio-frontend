export interface WorkExperienceProject {
  id: number;
  title: string;
  role: string;
  roleKo?: string;
  period: string;
  description: string;
  descriptionKo?: string;
  tags: string[];
  image: string;
  coverVideo?: string; // Optional video cover (mp4, webm, etc.)
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  address?: string; // Project location/address
}

export const workExperience: WorkExperienceProject[] = [
  {
    id: 1,
    title: "Bestia",
    role: "UI/UX Designer & Frontend Developer",
    roleKo: "UI/UX 디자이너 & 프론트엔드 개발자",
    period: "Aug 2025 - Dec 2025",
    description: "CRM tech for real estate agents that saves 2.5-4 hours per day and enables handling 2-3× more leads",
    descriptionKo: "부동산 중개사를 위한 CRM 기술로 하루 2.5-4시간을 절약하고 2-3배 더 많은 리드를 처리할 수 있게 합니다",
    tags: ["React", "Next.js", "Figma", "CRM", "UI/UX", "Postman", "HTML", "LLM Model", "Twilio"],
    image: "/assets/images/projects/Bestia/bestia1.png",
    githubUrl: "",
    address: "Manhattan Beach, California",
    featured: true
  },
  {
    id: 2,
    title: "Handiers Inc.",
    role: "UI/UX Designer",
    roleKo: "UI/UX 디자이너",
    period: "March 2025 - Aug 2025",
    description: "Mobile apps & marketing website design with UX research and data-driven improvements",
    descriptionKo: "UX 연구 및 데이터 기반 개선을 통한 모바일 앱 및 마케팅 웹사이트 디자인",
    tags: ["Figma", "Flutter", "UI Design", "UX Research"],
    image: "/assets/images/projects/handiers.png",
    githubUrl: "",
    liveUrl: "https://handiers.com",
    address: "Torrance, California",
    featured: true
  }
];

