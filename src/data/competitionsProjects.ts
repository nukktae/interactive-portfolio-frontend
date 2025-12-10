export interface CompetitionProject {
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
  featured?: boolean;
  hidden?: boolean; // Hide project from display without deleting
}

export const competitionsProjects: CompetitionProject[] = [
  {
    id: 7,
    title: "Friendly",
    role: "Full-Stack Developer",
    period: "2024",
    description: "Cross-platform student productivity app with AI-powered transcription, schedule management, and PDF analysis",
    tags: ["React Native", "Node.js", "OpenAI", "Firebase", "Cross-Platform", "AI"],
    image: "/assets/images/friendly/coverfriendly.png",
    githubUrl: "",
    liveUrl: "https://www.friendlykr.com",
    featured: true
  },
  {
    id: 5,
    title: "Rootin",
    role: "Frontend Developer",
    period: "2024",
    description: "Flutter application with BLE protocol integration for IoT sensor communication",
    tags: ["Flutter", "BLE", "Firebase", "IoT"],
    image: "/assets/images/projects/rootin.png",
    githubUrl: "https://github.com/nukktae/rootin"
  },
  {
    id: 8,
    title: "ClearGuide",
    role: "Full-Stack Developer",
    period: "2024",
    description: "AI-powered web app helping Korean residents understand public documents with OCR, AI analysis, and chatbot",
    tags: ["Next.js 16", "React 19", "OpenAI", "Firebase", "TypeScript", "AI"],
    image: "/assets/images/clearguide/coverclearguide.png",
    githubUrl: "",
    liveUrl: "https://clearguide.vercel.app",
    featured: true
  },
  {
    id: 11,
    title: "AMORE Agent 05",
    role: "Full-Stack Developer & Product Engineer",
    period: "2024 - 2025",
    description: "Intelligent e-commerce analytics platform for Shopee product analysis with AI-powered insights, automated monitoring, and multi-mode data ingestion",
    tags: ["React", "Express.js", "OpenAI", "Playwright", "Web Scraping", "AI/ML"],
    image: "/assets/images/amora-agent/amoragentcover.png",
    githubUrl: "",
    featured: true
  },
  {
    id: 4,
    title: "KSPO Sports Platform",
    role: "Full-Stack Developer & AI Engineer",
    period: "2024 - 2025",
    description: "AI-powered sports facility discovery platform with personalized recommendations, weather-aware suggestions, and crowd predictions",
    tags: ["Next.js 15", "NestJS", "FastAPI", "GPT-4o", "Supabase", "AI/ML"],
    image: "/assets/images/sports/sportscover.png",
    githubUrl: "",
    featured: true
  },
  {
    id: 9,
    title: "MakeEat",
    role: "Full Stack Developer", 
    period: "2024",
    description: "AI-powered recipe generation app with cross-platform support",
    tags: ["Flutter", "AI", "OpenAI", "Firebase"],
    image: "/assets/images/projects/makeeat.png",
    githubUrl: "https://github.com/nukktae"
  },
  {
    id: 12,
    title: "AWS Content Moderation",
    role: "Backend & Infrastructure Engineer",
    period: "2024",
    description: "Real-time video content moderation platform powered by AWS Rekognition with <200ms latency, automated alerting, and comprehensive monitoring",
    tags: ["AWS CDK", "AWS Lambda", "Amazon Rekognition", "Kinesis", "DynamoDB", "Serverless"],
    image: "/assets/images/aws-architecture.png",
    githubUrl: "https://github.com/2024PBL-AWS-project/ContentModeration",
    featured: true
  },
  {
    id: 13,
    title: "MajorMatch AI",
    role: "Full-Stack Developer",
    period: "2024",
    description: "Intelligent career guidance platform with AI-powered assessments, interactive challenges across 6 fields, and mentorship booking system",
    tags: ["React", "TypeScript", "Express.js", "PostgreSQL", "OpenAI GPT-4", "Firebase"],
    image: "/assets/images/majorai/majoraicover.png",
    githubUrl: "https://github.com/nukktae/major-match-ai",
    featured: true
  },
  {
    id: 14,
    title: "MovePARK",
    role: "Full-Stack Developer & Data Integration Engineer",
    period: "2024",
    description: "Intelligent navigation and event planning platform integrating real-time traffic, weather, parking, and event data from multiple Korean public data APIs",
    tags: ["Next.js 16", "TypeScript", "Leaflet", "Public Data APIs", "Geospatial", "Real-time Data"],
    image: "/assets/images/movepark/map.png",
    githubUrl: "",
    featured: true
  },
  {
    id: 6,
    title: "Encar Track 1",
    role: "Deep Learning Engineer",
    period: "2024",
    description: "Computer vision classification achieving >90% accuracy on small dataset using ensemble methods and CLIP",
    tags: ["PyTorch", "CLIP", "Computer Vision", "Deep Learning", "Ensemble Learning"],
    image: "/assets/images/encar.png",
    githubUrl: ""
  },
  {
    id: 3,
    title: "ChildNet Korea",
    role: "Full-Stack Developer & Security Architect",
    period: "2024 - 2025",
    description: "High-risk child-protection platform with zero-trust security architecture, 46 RLS policies, and role-based access control",
    tags: ["Next.js 15", "NestJS", "PostgreSQL RLS", "TypeScript", "Zero-Trust Security", "RBAC"],
    image: "/assets/images/projects/childnet.png",
    coverVideo: "/assets/images/childnetcover.mp4",
    githubUrl: "https://github.com/nukktae/childnet.git",
    featured: true
  },
  {
    id: 10,
    title: "KMU Global",
    role: "Full Stack Developer",
    period: "2024",
    description: "Portfolio website with 3D animations and management system",
    tags: ["Next.js", "Three.js", "TypeScript"],
    image: "/assets/images/projects/kmuglobalcampus.png",
    githubUrl: "https://github.com/nukktae",
    liveUrl: "https://kmuglobal.dev",
    hidden: true // Hidden from display
  }
];

