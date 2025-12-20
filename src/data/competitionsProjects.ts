export interface CompetitionProject {
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
  featured?: boolean;
  hidden?: boolean; // Hide project from display without deleting
}

export const competitionsProjects: CompetitionProject[] = [
  {
    id: 7,
    title: "Friendly",
    role: "Full-Stack Developer",
    roleKo: "풀스택 개발자",
    period: "2025",
    description: "Cross-platform student productivity app with AI-powered transcription, schedule management, and PDF analysis",
    descriptionKo: "AI 기반 전사, 일정 관리 및 PDF 분석 기능을 갖춘 크로스 플랫폼 학생 생산성 앱",
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
    roleKo: "프론트엔드 개발자",
    period: "2024",
    description: "Flutter application with BLE protocol integration for IoT sensor communication",
    descriptionKo: "IoT 센서 통신을 위한 BLE 프로토콜 통합 Flutter 애플리케이션",
    tags: ["Flutter", "BLE", "Firebase", "IoT"],
    image: "/assets/images/projects/rootin.png",
    githubUrl: "https://github.com/nukktae/rootin"
  },
  {
    id: 8,
    title: "ClearGuide",
    role: "Full-Stack Developer",
    roleKo: "풀스택 개발자",
    period: "2025",
    description: "AI-powered web app helping Korean residents understand public documents with OCR, AI analysis, and chatbot",
    descriptionKo: "OCR, AI 분석 및 챗봇을 통해 한국 주민들이 공공 문서를 이해할 수 있도록 돕는 AI 기반 웹 앱",
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
    roleKo: "풀스택 개발자 & 제품 엔지니어",
    period: "2025",
    description: "Intelligent e-commerce analytics platform for Shopee product analysis with AI-powered insights, automated monitoring, and multi-mode data ingestion",
    descriptionKo: "AI 기반 인사이트, 자동화된 모니터링 및 다중 모드 데이터 수집을 갖춘 Shopee 제품 분석을 위한 지능형 전자상거래 분석 플랫폼",
    tags: ["React", "Express.js", "OpenAI", "Playwright", "Web Scraping", "AI/ML"],
    image: "/assets/images/amora-agent/amoragentcover.png",
    githubUrl: "",
    featured: true
  },
  {
    id: 4,
    title: "KSPO Sports Platform",
    role: "Full-Stack Developer & AI Engineer",
    roleKo: "풀스택 개발자 & AI 엔지니어",
    period: "2025",
    description: "AI-powered sports facility discovery platform with personalized recommendations, weather-aware suggestions, and crowd predictions",
    descriptionKo: "개인화된 추천, 날씨 인식 제안 및 혼잡도 예측을 갖춘 AI 기반 스포츠 시설 발견 플랫폼",
    tags: ["Next.js 15", "NestJS", "FastAPI", "GPT-4o", "Supabase", "AI/ML"],
    image: "/assets/images/sports/sportscover.png",
    githubUrl: "",
    liveUrl: "https://frontend-ruby-xi-69.vercel.app/home",
    featured: true
  },
  {
    id: 9,
    title: "MakeEat",
    role: "Full Stack Developer",
    roleKo: "풀스택 개발자",
    period: "2024",
    description: "AI-powered recipe generation app with cross-platform support",
    descriptionKo: "크로스 플랫폼 지원을 갖춘 AI 기반 레시피 생성 앱",
    tags: ["Flutter", "AI", "OpenAI", "Firebase"],
    image: "/assets/images/projects/makeeat.png",
    githubUrl: "https://github.com/nukktae"
  },
  {
    id: 12,
    title: "AWS Content Moderation",
    role: "Backend & Infrastructure Engineer",
    roleKo: "백엔드 & 인프라 엔지니어",
    period: "2024",
    description: "Real-time video content moderation platform powered by AWS Rekognition with <200ms latency, automated alerting, and comprehensive monitoring",
    descriptionKo: "AWS Rekognition 기반 실시간 비디오 콘텐츠 조정 플랫폼으로 <200ms 지연 시간, 자동 알림 및 포괄적인 모니터링 제공",
    tags: ["AWS CDK", "AWS Lambda", "Amazon Rekognition", "Kinesis", "DynamoDB", "Serverless"],
    image: "/assets/images/aws-architecture.png",
    githubUrl: "https://github.com/2024PBL-AWS-project/ContentModeration",
    featured: true
  },
  {
    id: 13,
    title: "MajorMatch AI",
    role: "Full-Stack Developer",
    roleKo: "풀스택 개발자",
    period: "2024",
    description: "Intelligent career guidance platform with AI-powered assessments, interactive challenges across 6 fields, and mentorship booking system",
    descriptionKo: "AI 기반 평가, 6개 분야의 인터랙티브 챌린지 및 멘토십 예약 시스템을 갖춘 지능형 진로 안내 플랫폼",
    tags: ["React", "TypeScript", "Express.js", "PostgreSQL", "OpenAI GPT-4", "Firebase"],
    image: "/assets/images/majorai/majoraicover.png",
    githubUrl: "https://github.com/nukktae/major-match-ai",
    featured: true
  },
  {
    id: 14,
    title: "MovePARK",
    role: "Full-Stack Developer & Data Integration Engineer",
    roleKo: "풀스택 개발자 & 데이터 통합 엔지니어",
    period: "2025",
    description: "Intelligent navigation and event planning platform integrating real-time traffic, weather, parking, and event data from multiple Korean public data APIs",
    descriptionKo: "여러 한국 공공 데이터 API의 실시간 교통, 날씨, 주차 및 이벤트 데이터를 통합하는 지능형 내비게이션 및 이벤트 계획 플랫폼",
    tags: ["Next.js 16", "TypeScript", "Leaflet", "Public Data APIs", "Geospatial", "Real-time Data"],
    image: "/assets/images/movepark/map.png",
    githubUrl: "",
    featured: true
  },
  {
    id: 6,
    title: "Encar Track 1",
    role: "Deep Learning Engineer",
    roleKo: "딥러닝 엔지니어",
    period: "2025",
    description: "Computer vision classification achieving >90% accuracy on small dataset using ensemble methods and CLIP",
    descriptionKo: "앙상블 방법과 CLIP을 사용하여 소규모 데이터셋에서 >90% 정확도를 달성한 컴퓨터 비전 분류",
    tags: ["PyTorch", "CLIP", "Computer Vision", "Deep Learning", "Ensemble Learning"],
    image: "/assets/images/encar.png",
    githubUrl: ""
  },
  {
    id: 3,
    title: "ChildNet Korea",
    role: "Full-Stack Developer & Security Architect",
    roleKo: "풀스택 개발자 & 보안 아키텍트",
    period: "2024 - 2025",
    description: "High-risk child-protection platform with zero-trust security architecture, 46 RLS policies, and role-based access control",
    descriptionKo: "제로 트러스트 보안 아키텍처, 46개의 RLS 정책 및 역할 기반 액세스 제어를 갖춘 고위험 아동 보호 플랫폼",
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

