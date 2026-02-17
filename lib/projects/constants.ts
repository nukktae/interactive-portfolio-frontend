import type { Project, ProjectDetailType } from "./types";

function getDetailType(category: string): ProjectDetailType {
  if (category.toLowerCase().includes("fullstack")) return "fullstack";
  const designerCategories = [
    "UI/UX Design",
    "Product Design",
    "Branding",
    "Product Manager",
    "Brand Strategy",
  ];
  return designerCategories.some(
    (c) => category.toLowerCase().includes(c.toLowerCase())
  )
    ? "designer"
    : "developer";
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const PROJECTS: Project[] = [
  {
    id: "bestia",
    slug: "bestia",
    title: "Bestia",
    category: "UI/UX & Frontend",
    date: "2024",
    image: "/assets/images/projects/bestia/bestiacover.png",
    imageAlt:
      "Bestia — real estate lead management CRM: email, SMS, voice, AI, and analytics",
    detailType: "designer",
    filter: "ui",
    badge: "Work experience",
    stackPreview: ["Figma", "React", "Firebase"],
  },
  {
    id: "handiers",
    slug: "handiers-inc",
    title: "Handiers Inc.",
    category: "UI/UX & Frontend",
    date: "2024",
    image: "/assets/images/projects/handiers/handiers.png",
    imageAlt:
      "Handiers — smart service marketplace: AI job analysis, real-time location, Stripe payments",
    detailType: "designer",
    filter: "ui",
    badge: "Work experience",
    stackPreview: ["Flutter", "Kotlin", "Vertex AI", "Stripe"],
  },
  {
    id: "shinhan",
    slug: "shinhan-scholarship-foundation",
    title: "Shinhan Scholarship Foundation",
    category: "Fullstack",
    date: "2026.01 — 2026.02",
    image: "/assets/images/projects/shinhan/shinhan.png",
    imageAlt:
      "Shinhan Scholarship Foundation: multi-role PWA (YB, Mentor, OB), admin CRM, and backend—student reporting, community, mentoring, 74+ admin pages",
    detailType: "fullstack",
    filter: "fullstack",
    badge: "Featured",
    stackPreview: ["Next.js", "React", "FastAPI", "Supabase"],
  },
  {
    id: "friendly",
    slug: "friendly",
    title: "Friendly",
    category: "Fullstack",
    date: "2024–2025",
    image: "/assets/images/projects/friendly/coverfriendly.png",
    imageAlt:
      "Friendly — AI-powered student productivity app: lecture transcription, schedule management, PDF analysis, GPA tracking",
    detailType: "fullstack",
    filter: "fullstack",
    stackPreview: ["React Native", "Node.js", "Firebase", "OpenAI"],
  },
  {
    id: "rivalq",
    slug: "rivalq",
    title: "RivalQ",
    category: "Fullstack",
    date: "2026.02",
    image: "/assets/images/projects/rivalq/rivalqcover.png",
    imageAlt:
      "RivalQ — AI-powered competitive intelligence platform with n8n workflows and 5 specialized agents",
    detailType: "fullstack",
    filter: "fullstack",
    stackPreview: ["Next.js", "n8n", "OpenRouter", "Firecrawl"],
  },
  {
    id: "jobja",
    slug: "jobja",
    title: "Jobja",
    category: "Fullstack",
    date: "2025–2026",
    image: "/assets/images/projects/jobja/jobjacover.png",
    imageAlt:
      "Jobja (잡자) — career dashboard: job search, resume optimization, application tracking, and AI prepare tools",
    detailType: "fullstack",
    filter: "fullstack",
    stackPreview: ["Next.js", "Supabase", "Radix UI", "Onewave"],
  },
  {
    id: "1",
    slug: "rootin",
    title: "Rootin",
    category: "UI/UX & Frontend",
    date: "2024.12",
    image: "/assets/images/projects/rootin/rootin.jpeg",
    imageAlt:
      "AI-powered plant care companion app with IoT soil sensors and real-time monitoring",
    detailType: "designer",
    filter: "ui",
    stackPreview: ["Flutter", "Firebase", "TensorFlow Lite"],
  },
  {
    id: "onward",
    slug: "onward",
    title: "Onward",
    category: "Fullstack",
    date: "2025",
    image: "/assets/images/projects/onward/onwardcover.png",
    imageAlt:
      "Onward — mentoring platform: AI 맞춤 학습, tasks, feedback, student & mentor roles, Next.js + FastAPI + Supabase",
    detailType: "fullstack",
    filter: "fullstack",
    stackPreview: ["Next.js", "FastAPI", "Supabase", "Zustand"],
  },
  {
    id: "coco",
    slug: "coco",
    title: "COCO",
    category: "Hardware & IoT",
    date: "2024 — Present",
    image: "/assets/images/projects/coco/cococover.png",
    imageAlt:
      "COCO — interactive AI companion robot with ESP32, voice, OLED expressions, and cloud AI",
    detailType: "developer",
    filter: "hardware",
    stackPreview: ["ESP32", "Next.js", "OpenAI"],
  },
  {
    id: "aws-content-moderation",
    slug: "aws-content-moderation",
    title: "AWS Content Moderation System",
    category: "Backend & Infrastructure",
    date: "2024.11",
    image: "/assets/images/projects/aws/awscover1.png",
    imageAlt:
      "Real-time video content moderation platform powered by AWS Rekognition with serverless architecture",
    detailType: "developer",
    filter: "backend",
    stackPreview: ["AWS CDK", "Lambda", "Rekognition", "Flask"],
  },
];

export { getDetailType, slugify };
