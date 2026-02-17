import type { Project } from "./types";
import type {
  DeveloperMeta,
  DeveloperArchitectureSection,
  DeveloperFeature,
  DeveloperImpactStat,
} from "./developer-content";

/**
 * Fullstack case study content: combines UI/UX (designer) and engineering (developer) sections.
 * Used for projects where you did both design and fullstack development.
 */
export interface FullstackCaseStudyContent {
  tag?: string;
  subtitle?: string;
  coverImage?: string;
  coverImageAlt?: string;
  meta?: DeveloperMeta;
  /** Who it's for (Overview) */
  audience?: string;
  challengeParagraph?: string;
  /** Optional 4-part challenge (problem, vision, ownership, results). When set, overrides challengeParagraph. */
  challengeSections?: { heading: string; body: string }[];
  /** Research & insights (key insights, constraints, success criteria) — optional; distinct from Challenge narrative */
  researchInsights?: { heading: string; body: string }[];
  /** Design system (designer-style): colors, optional description */
  designSystemTitle?: string;
  designSystemDescription?: string;
  designSystemColors?: { name: string; hex: string; description?: string }[];
  /** System architecture (developer-style) */
  architecture?: DeveloperArchitectureSection;
  features?: DeveloperFeature[];
  impactTitle?: string;
  impactSubtitle?: string;
  impactStats?: DeveloperImpactStat[];
  /** Reflection (what you'd improve, what you learned) */
  reflection?: string;
  nextProjectTitle?: string;
  nextProjectSlug?: string;
}

const FULLSTACK_CONTENT: Record<string, FullstackCaseStudyContent> = {
  friendly: {
    tag: "Fullstack",
    subtitle:
      "Cross-platform student productivity app with AI lecture transcription, smart schedule management, PDF analysis, GPA tracking, and school-verified community. React Native (Expo) + Node.js backend with Firebase and OpenAI.",
    coverImage: "https://placehold.co/1200x800/3B82F6/f9fafb?text=Friendly",
    coverImageAlt:
      "Friendly — AI-powered student productivity app: lecture transcription, schedule management, PDF analysis",
    meta: {
      role: "Backend & Frontend Developer",
      stack: "React Native, Expo, Node.js, Express, Firebase, OpenAI",
      timeline: "2024 — 2025",
      liveUrl: "https://friendlykr.com",
      liveLabel: "friendlykr.com",
    },
    audience: "Students and learners who want one app for lectures, schedules, documents, GPA, and school community—instead of juggling separate tools.",
    challengeSections: [
      {
        heading: "The core problem",
        body: "Students juggle separate tools for lecture recording, schedules, documents, GPA, and community. Nothing is in one place; context is scattered and sync is manual.",
      },
      {
        heading: "Product vision",
        body: "One cross-platform app that unifies lecture capture, schedule management, document analysis, GPA tracking, and school-verified community—with real-time AI and cloud sync.",
      },
      {
        heading: "What I owned",
        body: "Backend and frontend: Node.js + Express API, Firebase (Auth, Firestore, Storage), and React Native (Expo) with NativeWind. Shipped real-time Whisper transcription, GPT-4o-mini summaries and action items, GPT-4o Vision for schedule extraction from images, PDF analysis and chatbot, and optional Google Calendar and Drive backup. 50+ reusable components and 100+ API endpoints.",
      },
      {
        heading: "Results",
        body: "Single app for lecture, schedule, PDF, GPA, and community. Live transcription and sync; image-based schedule import; PDF-aware chatbot. Available at friendlykr.com.",
      },
    ],
    challengeParagraph:
      "Students rely on multiple disconnected tools for lecture recording, schedule management, document analysis, GPA tracking, and community participation. Friendly unifies these into one app: real-time AI transcription (Whisper), image-based schedule extraction (GPT-4o Vision), PDF analysis and chatbot, and Firestore-backed sync with optional Google Calendar and Drive backup.",
    designSystemTitle: "Design system & UI",
    designSystemDescription:
      "NativeWind (Tailwind) for consistent styling across iOS, Android, and Web. Color system for primary actions, status, and accessibility; 50+ reusable components with React Context for global state.",
    designSystemColors: [
      { name: "Primary Blue", hex: "#3B82F6", description: "Primary actions and highlights" },
      { name: "Secondary Gray", hex: "#6B7280", description: "Supporting text and backgrounds" },
      { name: "Success Green", hex: "#10B981", description: "Success states" },
      { name: "Warning", hex: "#F59E0B", description: "Warnings" },
      { name: "Error Red", hex: "#EF4444", description: "Errors" },
      { name: "Background", hex: "#F9FAFB", description: "Screen and card backgrounds" },
    ],
    architecture: {
      title: "System architecture",
      subtitle:
        "Modular service-layer backend with real-time Firestore; cross-platform app with Expo Router and NativeWind.",
      tabs: [
        { icon: "fa-solid fa-mobile-screen", label: "Frontend" },
        { icon: "fa-solid fa-server", label: "Backend & API" },
        { icon: "fa-solid fa-puzzle-piece", label: "Integrations" },
      ],
      cards: [
        {
          title: "Frontend",
          items: [
            "React Native 0.81.5 + Expo SDK 54, Expo Router (file-based routing)",
            "TypeScript, NativeWind 4.2.1, React Context API",
            "PDF.js viewer, React Native Reanimated",
          ],
        },
        {
          title: "Backend & API",
          items: [
            "Node.js + Express 5.1, Firebase Admin SDK, Firestore, Firebase Storage",
            "100+ RESTful API endpoints, PM2 process management",
            "Multer for uploads, daily Google Drive autobackup",
          ],
        },
        {
          title: "Integrations",
          items: [
            "OpenAI: GPT-4o-mini, GPT-3.5-turbo, Whisper, Vision",
            "Firebase Auth, Google Calendar API, Google Drive API",
            "PDF-Parse for text extraction",
          ],
        },
      ],
    },
    features: [
      {
        id: "1",
        label: "Feature 01",
        title: "AI-powered lecture transcription",
        description:
          "Live recording with real-time Whisper transcription, GPT-4o-mini summaries and action items, and a lecture-aware chatbot with conversation history.",
        tags: ["Whisper", "GPT-4o-mini", "Firestore"],
        image: "/assets/images/projects/friendly/friendly1.png",
        imageAlt: "Lecture recording and transcription flow",
        imageRight: false,
        usePhoneFrame: true,
      },
      {
        id: "2",
        label: "Feature 02",
        title: "Smart schedule & PDF analysis",
        description:
          "Upload schedule images for GPT-4o Vision extraction and drag-and-drop calendar editing; upload PDFs for text extraction and PDF-aware chatbot with page-level context.",
        tags: ["GPT-4o Vision", "PDF.js", "Google Calendar"],
        image: "/assets/images/projects/friendly/friendly2.png",
        imageAlt: "Schedule and PDF analysis",
        imageRight: true,
        usePhoneFrame: true,
      },
    ],
    impactTitle: "Impact & results",
    impactSubtitle:
      "Friendly delivers an AI-powered productivity platform with real-time transcription, document analysis, and cross-platform support. Modular architecture and autobackup ensure reliability and maintainability.",
    impactStats: [
      { value: "100+", label: "API endpoints" },
      { value: "4", label: "OpenAI models integrated" },
      { value: "50+", label: "UI components" },
      { value: "iOS · Android · Web", label: "Cross-platform" },
    ],
    researchInsights: [
      { heading: "Key insights", body: "Scattered tools for recording, schedules, PDFs, GPA, and community; manual sync and no single source of truth; context switching and lost context." },
      { heading: "Constraints", body: "Cross-platform (iOS, Android, Web) with one codebase; real-time sync and offline considerations; school-verified identity and privacy for community." },
      { heading: "Success criteria", body: "Unify student productivity in one app; differentiate with AI (transcription, schedule extraction, PDF chatbot); grow engagement and retention via community and sync." },
    ],
    reflection: "I’d invest earlier in E2E tests for critical paths (recording → transcription, schedule import, PDF chat) and in clearer offline/conflict handling. I learned a lot about coordinating Whisper, Vision, and Firestore in a single product surface.",
    nextProjectTitle: "Rootin",
    nextProjectSlug: "rootin",
  },

  rivalq: {
    tag: "Fullstack",
    subtitle:
      "AI-powered competitive intelligence platform built for the n8n hackathon. Next.js dashboard with real-time SSE progress, competitor management, and an n8n workflow orchestrating 5 AI agents (Researcher, Pricing, Marketing, Strategy, Recommendation) using Firecrawl, OpenRouter, and callback APIs.",
    coverImage: "https://placehold.co/1200x800/6366f1/faf5ff?text=RivalQ",
    coverImageAlt:
      "RivalQ — competitive intelligence platform with n8n workflows and 5 AI agents",
    meta: {
      role: "UI/UX Design + AI Engineering",
      stack: "Next.js, n8n, OpenRouter, Firecrawl, Server-Sent Events",
      timeline: "2026.02",
    },
    audience: "Product and strategy teams who need structured competitor insights without manual scraping and synthesis—fast, repeatable competitive intelligence.",
    challengeSections: [
      {
        heading: "The core problem",
        body: "Businesses need structured competitive intelligence without manual research. Scraping, comparing, and synthesizing competitor data is time-consuming and inconsistent.",
      },
      {
        heading: "Product vision",
        body: "An end-to-end pipeline: create analyses, trigger a workflow that runs five specialized AI agents (product, pricing, marketing, strategy, recommendations), and see real-time progress in the UI.",
      },
      {
        heading: "What I owned",
        body: "Full stack: Next.js app for analyses and competitor management, webhook-triggered n8n workflow orchestrating five AI agents, Firecrawl for competitor scraping, and Server-Sent Events for live progress. Designed dashboard UX, API contract, n8n node orchestration, and callback handling for async results.",
      },
      {
        heading: "Results",
        body: "Structured competitive intelligence on demand. One click kicks off multi-agent research; the UI stays in sync via SSE. No manual scraping or stitching.",
      },
    ],
    challengeParagraph:
      "Businesses need structured competitive intelligence without manual research. RivalQ delivers an end-to-end pipeline: a Next.js app for creating analyses and managing competitors, a webhook-triggered n8n workflow that splits work across five specialized AI agents, Firecrawl for scraping competitor sites, and Server-Sent Events for real-time progress in the UI.",
    designSystemTitle: "Design system & UI",
    designSystemDescription:
      "Dashboard-focused UI with clear hierarchy for analyses, competitor lists, and real-time agent progress. Consistent spacing, status colors, and loading states for long-running n8n executions.",
    designSystemColors: [
      { name: "Primary", hex: "#6C6FF2", description: "Actions and highlights" },
      { name: "Success", hex: "#10B981", description: "Completed analyses" },
      { name: "Warning", hex: "#F59E0B", description: "In progress" },
      { name: "Neutral", hex: "#6B7280", description: "Secondary text" },
      { name: "Background", hex: "#F9FAFB", description: "Page and cards" },
    ],
    architecture: {
      title: "System architecture",
      subtitle:
        "Next.js app triggers n8n via webhook; n8n runs 5 agents in parallel then sequence, calls back to the app with progress and final results; frontend consumes SSE for live updates.",
      tabs: [
        { icon: "fa-solid fa-window-maximize", label: "Frontend" },
        { icon: "fa-solid fa-diagram-project", label: "n8n & AI agents" },
        { icon: "fa-solid fa-plug", label: "Integrations" },
      ],
      cards: [
        {
          title: "Frontend",
          items: [
            "Next.js App Router, React Query, Server-Sent Events for real-time progress",
            "Dashboard: new analysis, analyses list, analysis detail with live agent status",
            "Competitor CRUD, report export (JSON); input validation and toast feedback",
          ],
        },
        {
          title: "n8n & AI agents",
          items: [
            "Webhook trigger → parse input → split competitors → 3 parallel branches (Researcher, Pricing, Marketing)",
            "Firecrawl scrape per competitor; OpenRouter LLM per agent; merge → Agent 4 (Strategy) → Agent 5 (Recommendations)",
            "Progress callbacks at each stage; final callback with full results; respond to webhook",
          ],
        },
        {
          title: "Integrations",
          items: [
            "Firecrawl API for competitor and pricing page scraping",
            "OpenRouter for Researcher, Pricing, Marketing, Strategy, Recommendation agents",
            "Next.js API routes: analysis, callback, stream; file-based storage for analyses and competitors",
          ],
        },
      ],
    },
    features: [
      {
        id: "1",
        label: "Feature 01",
        title: "Dashboard & real-time analysis",
        description:
          "Create analyses with competitor list and optional focus areas; track progress via SSE as each agent completes. View results per competitor (research, pricing, marketing) plus strategy and recommendations in one place.",
        tags: ["Next.js", "SSE", "React Query"],
        image: "/assets/images/projects/rivalq/rivalqdashboard.png",
        imageAlt: "RivalQ dashboard and real-time analysis progress",
        imageRight: false,
      },
      {
        id: "2",
        label: "Feature 02",
        title: "n8n workflow & 5 AI agents",
        description:
          "Single n8n workflow: webhook receives analysis_id, competitors, callback_url; splits into parallel Researcher, Pricing, and Marketing agents; merges and runs Strategy then Recommendation agents; sends progress and final payload to your app.",
        tags: ["n8n", "OpenRouter", "Firecrawl"],
        image: "/assets/images/projects/rivalq/n8nflow.png",
        imageAlt: "n8n workflow with 5 AI agents",
        imageRight: true,
      },
    ],
    impactTitle: "Project impact",
    impactSubtitle:
      "Unified competitive intelligence pipeline from UI to AI: one dashboard to run analyses and consume results, one n8n workflow to orchestrate scraping and LLM agents with clear progress and error handling.",
    impactStats: [
      { value: "5", label: "AI agents in workflow" },
      { value: "3", label: "Parallel research branches" },
      { value: "SSE", label: "Real-time progress" },
      { value: "n8n", label: "Workflow orchestration" },
    ],
    researchInsights: [
      { heading: "Key insights", body: "Manual competitor research is slow and inconsistent; data lives in spreadsheets and ad-hoc docs; no single pipeline from URL to structured report." },
      { heading: "Constraints", body: "n8n hackathon scope; webhook + callback + SSE for async workflows; Firecrawl and OpenRouter rate limits and cost." },
      { heading: "Success criteria", body: "Deliver on-demand competitive intelligence; show real-time progress so users trust long-running workflows; demonstrate n8n + multi-agent orchestration." },
    ],
    reflection: "I’d add retries and partial-result persistence so failed agents don’t lose the whole run, and richer filters (date range, competitor subset) for the report. Orchestrating 5 agents in n8n with clean callbacks and SSE was a great learning experience.",
    nextProjectTitle: "Shinhan Scholarship Foundation",
    nextProjectSlug: "shinhan-scholarship-foundation",
  },

  jobja: {
    tag: "Fullstack",
    subtitle:
      "Career dashboard (잡자) for job seekers: job search and saved jobs, application tracking, and a Prepare hub with skills-gap analysis, resume optimization, PDF preview, AI cover-letter and interview prep. Next.js + Supabase auth and data; optional Onewave FastAPI backend for resume analysis and coffee-chat.",
    coverImage: "https://placehold.co/1200x800/10b981/f0fdf4?text=Jobja",
    coverImageAlt:
      "Jobja (잡자) — career dashboard with jobs, prepare tools, and application tracking",
    meta: {
      role: "UI/UX & Fullstack",
      stack: "Next.js 16, React 19, Supabase, Radix UI, Tailwind 4, Onewave API",
      timeline: "2025 — 2026",
    },
    audience: "Korean job seekers who want one place to search, save, track applications, and prepare (resume, cover letter, interview) with AI assistance.",
    challengeSections: [
      {
        heading: "The core problem",
        body: "Job seekers scatter activity across job boards, spreadsheets, and docs. Searching, saving, tracking applications, and preparing (resume, cover letter, interview) live in different places with no single view.",
      },
      {
        heading: "Product vision",
        body: "One Korean-focused career app: search and save jobs, track applications, and prepare with resume optimization, AI cover letters, and interview prep—all in a single dashboard.",
      },
      {
        heading: "What I owned",
        body: "Full-stack build: Supabase (auth, profiles, saved jobs, applications), collapsible dashboard (Jobs, Prepare, Track, Profile). Prepare includes skills-gap analysis, resume optimization, PDF preview (@react-pdf/renderer), cover-letter generation, and AI interview prep. Optional Onewave backend integration for resume analysis and coffee-chat; Linkareer for job feeds.",
      },
      {
        heading: "Results",
        body: "Single place to search, save, track, and prepare. Persisted profiles and applications; AI-assisted prepare flow; optional resume and LinkedIn-style search integration.",
      },
    ],
    challengeParagraph:
      "Job seekers need one place to search jobs, save listings, track applications, and prepare with tailored resumes and AI-assisted cover letters and interviews. Jobja (잡자) delivers a Korean-focused career app with Supabase, dashboard, and Prepare tools.",
    designSystemTitle: "Design system & UI",
    designSystemDescription:
      "Dashboard-first UI with collapsible sidebar (persisted in localStorage), mobile bottom nav, and Radix-based components. Primary palette and clear hierarchy for jobs, prepare tabs, and profile cards.",
    designSystemColors: [
      { name: "Primary", hex: "#10b981", description: "Actions and navigation" },
      { name: "Card", hex: "#ffffff", description: "Cards and sidebar" },
      { name: "Border", hex: "#e5e7eb", description: "Borders and dividers" },
      { name: "Muted", hex: "#6b7280", description: "Secondary text" },
      { name: "Background", hex: "#f9fafb", description: "Page background" },
    ],
    architecture: {
      title: "System architecture",
      subtitle:
        "Next.js App Router frontend with Supabase auth and database; optional Onewave FastAPI backend for resume analysis and coffee-chat; Linkareer API for selected job data.",
      tabs: [
        { icon: "fa-solid fa-window-maximize", label: "Frontend" },
        { icon: "fa-solid fa-database", label: "Auth & data" },
        { icon: "fa-solid fa-plug", label: "Integrations" },
      ],
      cards: [
        {
          title: "Frontend",
          items: [
            "Next.js 16 App Router, React 19, TypeScript, Tailwind 4",
            "Radix UI (Dialog, Tabs, Select, Checkbox, etc.), Lucide icons, @react-pdf/renderer",
            "Dashboard layout: collapsible sidebar, top bar, mobile bottom nav; Prepare tabs (skills, resume, preview, cover letter, interview)",
          ],
        },
        {
          title: "Auth & data",
          items: [
            "Supabase SSR client for auth (login, signup, redirect); protected dashboard and onboarding routes",
            "Supabase DB: profiles, saved jobs, applications; migrations for initial schema",
            "Saved jobs context (React); optional Onewave API URL for resume/coffee-chat proxy",
          ],
        },
        {
          title: "Integrations",
          items: [
            "Next.js API routes: /api/resume/analyze, /api/coffee-chat proxy to Onewave FastAPI",
            "Linkareer API for activity/job details; local job data for non-Linkareer listings",
            "Resume analysis and coffee-chat generation powered by Onewave (Gemini, SERP API)",
          ],
        },
      ],
    },
    features: [
      {
        id: "1",
        label: "Feature 01",
        title: "Jobs, saved list & application tracking",
        description:
          "Job search and saved-jobs list with persisted state; application tracking per role; Linkareer integration for activity details. Job detail view with coffee-chat tab (Onewave-backed LinkedIn-style search).",
        tags: ["Supabase", "Linkareer", "SavedJobsContext"],
        image: "/assets/images/projects/jobja/joblist.png",
        imageAlt: "Jobja jobs and application tracking",
        imageRight: false,
        images: [
          "/assets/images/projects/jobja/joblist.png",
          "/assets/images/projects/jobja/jobdetail.png",
        ],
        imageAlts: [
          "Jobja job list",
          "Jobja job detail",
        ],
      },
      {
        id: "2",
        label: "Feature 02",
        title: "Prepare hub: resume, cover letter, interview",
        description:
          "Prepare section with skills-gap analysis, resume optimization (Onewave analyze), PDF resume preview, AI cover-letter generation, and AI interview prep. Onboarding resume flow with analysis proxy; profile and settings with Supabase-backed data.",
        tags: ["Onewave API", "@react-pdf/renderer", "Radix UI"],
        image: "/assets/images/projects/jobja/airesume.png",
        imageAlt: "Jobja Prepare hub — resume and AI tools",
        imageRight: true,
        images: [
          "/assets/images/projects/jobja/resume preview.png",
          "/assets/images/projects/jobja/airesumemodal.png",
          "/assets/images/projects/jobja/airesume.png",
        ],
        imageAlts: [
          "Jobja resume preview",
          "Jobja AI resume modal",
          "Jobja AI resume",
        ],
      },
      {
        id: "3",
        label: "Feature 03",
        title: "Coffee chat — LinkedIn-style at interested companies",
        description:
          "Discover and reach out to people at companies you’re interested in via LinkedIn-style coffee chat. Onewave-backed search and connection flow so you can request informal conversations with employees at target companies and grow your network.",
        tags: ["Onewave API", "LinkedIn-style", "Networking"],
        image: "/assets/images/projects/jobja/coffeechat.png",
        imageAlt: "Jobja coffee chat — LinkedIn-style at interested companies",
        imageRight: false,
      },
    ],
    impactTitle: "Project impact",
    impactSubtitle:
      "Single dashboard for job search, saving, tracking, and preparation with optional AI-powered resume and coffee-chat via Onewave; Supabase for scalable auth and data.",
    impactStats: [
      { value: "Supabase", label: "Auth & DB" },
      { value: "5", label: "Prepare tabs" },
      { value: "Onewave", label: "Resume & coffee-chat" },
      { value: "Linkareer", label: "Job feed" },
    ],
    researchInsights: [
      { heading: "Key insights", body: "Job search, saved jobs, and application tracking live in different places; resume and cover letter prep are manual; no single view of readiness or progress." },
      { heading: "Constraints", body: "Korean job market and Linkareer integration; optional Onewave backend for resume/coffee-chat; Supabase for auth and data with good DX and cost." },
      { heading: "Success criteria", body: "One career dashboard for search, save, track, and prepare; differentiate with AI resume and coffee-chat; grow engagement via Prepare hub and persisted state." },
    ],
    reflection: "I’d add more job sources and a proper calendar view for application deadlines, plus clearer feedback when Onewave is unavailable. Building the Prepare flow with Supabase and optional Onewave taught me a lot about progressive enhancement and proxy design.",
    nextProjectTitle: "RivalQ",
    nextProjectSlug: "rivalq",
  },

  "shinhan-scholarship-foundation": {
    tag: "Fullstack",
    subtitle:
      "신한장학재단 — Multi-role PWA and admin ecosystem: YB (장학생), Mentor (멘토), OB (동문), Admin CRM (74+ pages), and FastAPI backend. Automated reporting, community, mentoring, scholarship management, and design system (tokens, One Shinhan typography).",
    coverImage: "/assets/images/projects/shinhan/shinhan.png",
    coverImageAlt:
      "Shinhan Scholarship Foundation — PWA for scholars, mentors, alumni; admin CRM; backend APIs",
    meta: {
      role: "UI/UX, Frontend (all 5 roles), OB · Mentor · Admin backend",
      stack: "Next.js, React, PWA (hyphens-shinhan), FastAPI (plimate-server), Supabase",
      timeline: "2026.01 — 2026.02",
    },
    audience: "Shinhan Scholarship Foundation staff (admin, processing) and scholarship participants: YB (장학생), mentors, and OB (동문)—each with role-specific PWA and admin needs.",
    challengeSections: [
      {
        heading: "The core problem",
        body: "The foundation carried a heavy operational burden: manual monthly student report submissions, slow processing, and fragmented engagement. Students had little reason to use the platform beyond mandatory reporting; staff spent hours every cycle on manual workflows.",
      },
      {
        heading: "Product vision",
        body: "Replace manual workflows with one ecosystem: role-based PWAs for scholars (YB), mentors, and alumni (OB), plus a full admin CRM and shared backend—so reporting is automated and engagement is built in.",
      },
      {
        heading: "What I owned",
        body: "UI/UX and frontend for all five roles: YB (reports, community, scholarship activities, mentor matching), Mentor (dashboard, calendar, mentees, applications), OB (alumni experience, scoped visibility), Admin (74+ pages: scholars, scholarships, enrollment, content, reports, communication). Backend/API design for OB, mentor, and admin. Design tokens (tokens.json → variables.css), shared components, and consistent patterns across PWA and admin.",
      },
      {
        heading: "Results",
        body: "~3 hours of backend processing time saved per cycle. Zero manual report submissions. Dual student and admin PWA; five roles with clear flows. Higher engagement and a single, maintainable codebase.",
      },
    ],
    challengeParagraph:
      "The foundation faced heavy operational burden from manual monthly student report submissions and fragmented engagement. The goal was to replace manual workflows with a single ecosystem: role-based PWAs for scholars (YB), mentors, and alumni (OB), plus a full admin CRM and a shared backend.",
    designSystemTitle: "Design system & UI",
    designSystemDescription:
      "Token-driven design system: Figma tokens → tokens.json → process-tokens.js → variables.css (font, color, spacing). One Shinhan typography (shinhan-title-1/2), InfoTag/StatusTag, shared Button/Tab/BottomNav. PWA and admin share consistent primitives; admin adds sidebar, command palette (⌘K), and data tables.",
    designSystemColors: [
      { name: "Primary / Shinhan Blue", hex: "#0046FF", description: "Brand and primary actions" },
      { name: "Primary gradient", hex: "#2E67FF → #6AA3FF", description: "Home and hero" },
      { name: "Surface", hex: "#F8F8F8", description: "Cards and panels" },
      { name: "Text", hex: "#1a1a1a", description: "Primary text" },
      { name: "Muted", hex: "#64748b", description: "Secondary text" },
      { name: "Status", hex: "green / yellow / blue / grey", description: "InfoTag, StatusTag" },
    ],
    architecture: {
      title: "System architecture",
      subtitle:
        "Five-role ecosystem: PWA (YB/Mentor/OB) with role-based nav and redirects; Next.js admin (hyphens-frontend) with Supabase; FastAPI backend (plimate-server) for users, mentoring, activities, reports, chats, notifications.",
      tabs: [
        { icon: "fa-solid fa-mobile-screen", label: "PWA (YB · Mentor · OB)" },
        { icon: "fa-solid fa-gear", label: "Admin (Next.js)" },
        { icon: "fa-solid fa-server", label: "Backend (FastAPI)" },
      ],
      cards: [
        {
          title: "PWA (YB · Mentor · OB)",
          items: [
            "Single codebase (hyphens-shinhan): (tabs) for YB/OB home, community, mypage, network, scholarship, mentors; (mentor) for mentor dashboard, calendar, mentees.",
            "Role-based routing: toNavRole(YB | MENTOR | OB); mentor → mentor dashboard; OB → scholarship tab hidden.",
            "Maintenance (reports, income, GPA, activity), mentor matching (survey, recommendations, requests), community (feed, notices, groups), push notifications.",
          ],
        },
        {
          title: "Admin (Next.js)",
          items: [
            "74+ admin pages: dashboard, content (notices, resources, gallery, press, foundation), system (admins, settings, codes, schools), scholars (all/general/merit/law/exchange, boards, PC applications), scholarships (grants, tuition), enrollment (leave/return), programs, communication (SMS), reports.",
            "Supabase auth + RLS; collapsible sidebar, command palette (⌘K), task center; Excel export, filters, modals.",
          ],
        },
        {
          title: "Backend (FastAPI)",
          items: [
            "plimate-server: users, mentoring (requests, recommendations, survey), activities, reports, mandatory, academics, grades, chats, notifications, follows, clubs, councils, OCR.",
            "Supabase as DB; pywebpush for push; structured APIs for PWA and admin consumption.",
          ],
        },
      ],
    },
    features: [
      {
        id: "1",
        label: "YB (장학생)",
        title: "Scholar experience",
        description:
          "Home with gradient and shortcuts, scholarship maintenance and reports, community feed and notices, and mentor matching. Structured submissions replace manual monthly reporting.",
        tags: ["PWA", "Maintenance", "Community", "Mentor matching"],
        image: "/assets/images/projects/shinhan/ybhome.png",
        imageAlt: "YB scholar — home, activity, community, mentor match",
        imageRight: false,
        images: [
          "/assets/images/projects/shinhan/ybhome.png",
          "/assets/images/projects/shinhan/activity.png",
          "/assets/images/projects/shinhan/community.png",
          "/assets/images/projects/shinhan/mentormatch.png",
        ],
        imageAlts: [
          "YB home",
          "YB activity",
          "YB community",
          "YB mentor match",
        ],
      },
      {
        id: "2",
        label: "Admin",
        title: "Admin CRM",
        description:
          "Dashboard, student management, and messaging. Scholars, scholarships, content, and system settings in one place with command palette and task center.",
        tags: ["Next.js", "Admin", "Supabase", "74+ pages"],
        image: "/assets/images/projects/shinhan/admindashboard.png",
        imageAlt: "Admin dashboard and student management",
        imageRight: true,
        images: [
          "/assets/images/projects/shinhan/admindashboard.png",
          "/assets/images/projects/shinhan/admin-messege-studentmanagement.png",
        ],
        imageAlts: [
          "Admin dashboard",
          "Admin message and student management",
        ],
      },
    ],
    impactTitle: "Project impact",
    impactSubtitle:
      "Transformed manual monthly reporting into an automated, role-aware platform. ~3 hours of backend processing saved per cycle; zero manual report submissions; dual PWA + admin with consistent design and clean code structure across all five roles.",
    impactStats: [
      { value: "~3h", label: "Processing time saved" },
      { value: "5", label: "Roles (YB · Mentor · OB · Admin · Backend)" },
      { value: "74+", label: "Admin pages" },
      { value: "0", label: "Manual report submissions" },
    ],
    researchInsights: [
      { heading: "Key insights", body: "Staff spent hours on manual report processing; students had little reason to engage beyond mandatory reporting; mentors and OB had no dedicated flows; data was fragmented across roles." },
      { heading: "Constraints", body: "Five distinct roles (YB, Mentor, OB, Admin, backend); single PWA codebase with role-based routing; design tokens and shared components; FastAPI + Supabase for scalability and maintainability." },
      { heading: "Success criteria", body: "Eliminate manual report submissions; save ~3 hours per cycle; increase engagement via community and mentor matching; provide one ecosystem for scholars, mentors, alumni, and admin." },
    ],
    reflection: "I’d introduce E2E tests per role early and document the token pipeline (Figma → tokens.json → variables.css) for future designers. Leading UI/UX and frontend across five roles and a shared design system was a major learning experience.",
    nextProjectTitle: "Friendly",
    nextProjectSlug: "friendly",
  },

  onward: {
    tag: "Fullstack",
    subtitle:
      "Mentoring and study platform for students and mentors: AI 맞춤 학습 (recommendations, plan, dashboard), tasks with submissions and attachments, daily feedback, calendar, and chat. Next.js frontend + FastAPI backend + Supabase auth and storage.",
    coverImage: "/assets/images/projects/onward/onwardcover.png",
    coverImageAlt:
      "Onward — student and mentor app with AI recommendations, tasks, feedback",
    meta: {
      role: "UI/UX, Fullstack & AI",
      stack: "Next.js 16, React 19, FastAPI, Supabase, Zustand, Tailwind 4",
      timeline: "2025",
    },
    audience: "Students who want AI-guided recommendations, a clear plan and dashboard, and one place for tasks and feedback; mentors who need a dashboard, task creation, and daily feedback per student.",
    challengeSections: [
      {
        heading: "The core problem",
        body: "Students and mentors had no single place to manage assignments, track progress, or get structured learning recommendations. Tasks, feedback, and plans lived in separate channels with no AI-guided flow.",
      },
      {
        heading: "Product vision",
        body: "A dual-role app: students get a home feed, AI 맞춤 recommendations by subject (Korean, Math, English), plan/goal and execution dashboard, tasks with submit and attachments, and chat; mentors get dashboard, student list, task creation, calendar, daily feedback per task, and messages.",
      },
      {
        heading: "What I owned",
        body: "UI/UX, fullstack (Next.js + FastAPI), and AI flow design. Built curated recommend-objectives, plan store (Zustand), execution tracking, role-based layouts (student vs mentor), shared API client with Supabase Bearer token, and backend JWT verification with Supabase service role. Students: feed, AI 맞춤, calendar, task list, chat. Mentors: dashboard, create tasks (with attachments), feedback per student/date, messages.",
      },
      {
        heading: "Results",
        body: "Single place for assignments, progress, and recommendations. AI-driven 맞춤 learning; clear student and mentor flows; consistent, maintainable codebase.",
      },
    ],
    challengeParagraph:
      "Students and mentors needed a single place to manage assignments, track progress, and get structured learning recommendations. Onward delivers a dual-role app with AI 맞춤, plan/execution dashboard, tasks, and chat for students; dashboard, task creation, and feedback for mentors.",
    designSystemTitle: "Design system & UI",
    designSystemDescription:
      "Role-based layouts: student bottom nav (Home, AI 맞춤, Calendar, Chat, Profile); mentor sidebar and pages. Tailwind 4, Lucide icons, Zustand for auth and plan state. Subject theming (Korean/Math/English) with consistent bar colors and labels. Forms and lists with clear hierarchy for tasks, feedback, and recommendations.",
    designSystemColors: [
      { name: "Primary", hex: "#6366f1", description: "Brand and primary actions" },
      { name: "Korean", hex: "#34d399", description: "국어 subject" },
      { name: "Math", hex: "#fb923c", description: "수학 subject" },
      { name: "English", hex: "#a78bfa", description: "영어 subject" },
      { name: "Surface", hex: "#f8fafc", description: "Cards and backgrounds" },
      { name: "Muted", hex: "#64748b", description: "Secondary text" },
    ],
    architecture: {
      title: "System architecture",
      subtitle:
        "Next.js app (Vercel) with Supabase Auth; FastAPI backend (Render) verifies Supabase JWT and uses Supabase (service role) for tasks, submissions, feedback, and storage. Role derived from token; student vs mentor routes and API permissions.",
      tabs: [
        { icon: "fa-solid fa-mobile-screen", label: "Frontend (Next.js)" },
        { icon: "fa-solid fa-server", label: "Backend (FastAPI)" },
        { icon: "fa-solid fa-database", label: "Auth & data (Supabase)" },
      ],
      cards: [
        {
          title: "Frontend (Next.js)",
          items: [
            "Next.js 16 App Router, React 19, TypeScript, Tailwind 4, Zustand (auth, mentor-tasks, student-plan)",
            "Student: home, AI (recommend, plan, dashboard, [subject], test), calendar, task (new, [id]), chat, profile. Mentor: dashboard, students/[id], tasks/new, calendar, messages, settings",
            "API client with getApiUrl() and getAuthHeaders() (Supabase access token); proxy for server-side token verification if needed",
          ],
        },
        {
          title: "Backend (FastAPI)",
          items: [
            "Auth: GET /api/auth/me (current user from Bearer token). Tasks: POST/GET /api/tasks, GET /api/tasks/{id}, POST /api/tasks/{id}/submit (mentor create, student submit; form-data + file uploads)",
            "Feedback: mentor creates/updates daily feedback per student/date; student and mentor get feedback by date. Supabase storage for task attachments and submission files",
          ],
        },
        {
          title: "Auth & data (Supabase)",
          items: [
            "Supabase Auth for sign-up/sign-in; backend verifies JWT (SUPABASE_JWT_SECRET). Migrations: auth_users, tasks, submissions, task_attachments, feedback_daily, profiles",
            "Storage bucket (task-files) for attachments. Role (student/mentor) from token; require_mentor / require_student deps for protected routes",
          ],
        },
      ],
    },
    features: [
      {
        id: "1",
        label: "Feature 01",
        title: "AI 맞춤 학습: recommendations, plan, dashboard",
        description:
          "Student-facing AI flow: recommend objectives (curated learn-first, questions, mentor notes per subject), plan with daily goal (minutes) and weekly adherence, execution dashboard by subject with week/month data. Task creation from AI recommendation (from=ai) with pre-filled objectives. Structured recommendations (Korean, Math, English) drive consistent learning paths.",
        tags: ["AI recommendations", "Zustand", "Plan & dashboard"],
        image: "/assets/images/projects/onward/setplan.png",
        imageAlt: "Onward AI 맞춤 — recommendations and plan",
        imageRight: false,
      },
      {
        id: "2",
        label: "Feature 02",
        title: "Tasks and daily feedback",
        description:
          "Mentors create tasks (title, subject, due date, description, goal, student_id, optional file attachments). Students view tasks, submit with optional files. Mentors write daily feedback per task (feedbackPerTask + dailySummary) per student/date; students and mentors read feedback by date. Full CRUD and storage via FastAPI + Supabase.",
        tags: ["FastAPI", "Supabase", "File upload"],
        image: "/assets/images/projects/onward/dailyplan.png",
        imageAlt: "Tasks and daily feedback",
        imageRight: true,
      },
      {
        id: "3",
        label: "Feature 03",
        title: "Student and mentor experiences",
        description:
          "Clean role-based UX: student layout (bottom nav, home, AI, calendar, chat, profile); mentor layout (dashboard, students, tasks, calendar, messages, settings). Student list and student detail (plan, messages); task new/edit and submission flow. Consistent API client and auth store across both roles.",
        tags: ["Next.js", "Role-based layout", "Zustand"],
        image: "/assets/images/projects/onward/mentordashboard.png",
        imageAlt: "Student and mentor experiences",
        imageRight: false,
      },
    ],
    impactTitle: "Project impact",
    impactSubtitle:
      "Unified mentoring platform with AI-driven recommendations, task lifecycle, and daily feedback. Clear separation of student and mentor flows with shared backend and auth; deployable on Vercel (frontend) and Render (backend).",
    impactStats: [
      { value: "2", label: "Roles (Student · Mentor)" },
      { value: "3", label: "Subjects (국어 · 수학 · 영어)" },
      { value: "Supabase", label: "Auth & storage" },
      { value: "FastAPI", label: "Backend APIs" },
    ],
    researchInsights: [
      { heading: "Key insights", body: "Tasks and feedback were scattered; no AI-guided learning path; students and mentors needed one place for assignments, progress, and communication." },
      { heading: "Constraints", body: "Dual role (student vs mentor) in one app; FastAPI + Supabase for auth and storage; AI recommendations and plan state (Zustand) on frontend; subject-based theming (Korean, Math, English)." },
      { heading: "Success criteria", body: "Unify mentoring and study in one platform; differentiate with AI 맞춤 recommendations and execution dashboard; enable daily feedback and task lifecycle for better outcomes." },
    ],
    reflection: "I’d add richer analytics for mentors (e.g. adherence over time) and optional push notifications for task deadlines. Building role-based layouts and coordinating FastAPI with Supabase auth and storage was very instructive.",
    nextProjectTitle: "Shinhan Scholarship Foundation",
    nextProjectSlug: "shinhan-scholarship-foundation",
  },
};

export function getFullstackContent(
  slug: string,
  project: Project
): FullstackCaseStudyContent {
  const custom = FULLSTACK_CONTENT[slug];
  return {
    tag: custom?.tag ?? project.category,
    subtitle:
      custom?.subtitle ??
      "Fullstack product combining UI/UX, frontend, and backend development.",
    coverImage: custom?.coverImage ?? project.image,
    coverImageAlt: custom?.coverImageAlt ?? project.imageAlt,
    meta: custom?.meta ?? {
      role: "Fullstack Engineer",
      stack: "—",
      timeline: project.date,
    },
    challengeParagraph:
      custom?.challengeParagraph ??
      "Built end-to-end: design, frontend, and backend for a cohesive product experience.",
    challengeSections: custom?.challengeSections,
    audience: custom?.audience,
    researchInsights: custom?.researchInsights,
    designSystemTitle: custom?.designSystemTitle ?? "Design system",
    designSystemDescription: custom?.designSystemDescription ?? "",
    designSystemColors: custom?.designSystemColors,
    architecture: custom?.architecture,
    features: custom?.features,
    impactTitle: custom?.impactTitle ?? "Impact & results",
    impactSubtitle: custom?.impactSubtitle ?? "",
    impactStats: custom?.impactStats ?? [],
    reflection: custom?.reflection,
    nextProjectTitle: custom?.nextProjectTitle,
    nextProjectSlug: custom?.nextProjectSlug,
  };
}
