import type { Project } from "./types";

/**
 * Content for designer-type case study detail pages.
 * Optional per project; missing fields fall back to project or placeholders.
 */
export interface DesignerCaseStudyContent {
  /** e.g. "Fintech Solution" */
  tag?: string;
  /** Subtitle under the title (what it is) */
  subtitle?: string;
  /** Who it's for (Overview) — optional line under subtitle */
  audience?: string;
  /** Hero image URL (defaults to project.image) */
  heroImage?: string;
  heroImageAlt?: string;
  /** Role line(s) */
  role?: string;
  /** Timeline line(s) */
  timeline?: string;
  /** Tools line(s) */
  tools?: string;
  /** Deliverables line(s) */
  deliverables?: string;
  /** Challenge section paragraphs */
  challengeParagraphs?: string[];
  /** Key objectives: label + description */
  keyObjectives?: { label: string; description: string }[];
  /** Optional structured challenge (4 parts: problem, vision, ownership, results). When set, overrides flat paragraph. */
  challengeSections?: { heading: string; body: string }[];
  /** Research & insights (key insights, constraints, success criteria) — optional; distinct from Challenge narrative */
  researchInsights?: { heading: string; body: string }[];
  /** Design system section */
  designSystemTitle?: string;
  designSystemDescription?: string;
  designSystemImage?: string;
  designSystemImageAlt?: string;
  designSystemImage2?: string;
  designSystemImageAlt2?: string;
  designSystemImage3?: string;
  designSystemImageAlt3?: string;
  /** Custom typography entries (e.g. [{ name: "Pretendard Bold", weight: "bold" }]) */
  designSystemTypography?: { name: string; weight?: "bold" | "medium" | "normal" }[];
  /** Custom color swatches with hex and optional description */
  designSystemColors?: { name: string; hex: string; description?: string }[];
  /** Solution section */
  solutionTitle?: string;
  solutionSubtitle?: string;
  /** When true, solution images are shown inside a phone frame */
  solutionUsePhoneFrame?: boolean;
  solutionItems?: { title: string; description?: string; image: string; imageAlt: string }[];
  /** Feature blocks (same structure as fullstack/developer for unified layout) */
  features?: {
    id: string;
    label: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    imageAlt: string;
    imageRight?: boolean;
    usePhoneFrame?: boolean;
    images?: string[];
    imageAlts?: string[];
  }[];
  /** Impact stats */
  impactTitle?: string;
  impactSubtitle?: string;
  impactCta?: string;
  impactStats?: { value: string; label: string }[];
  /** Reflection (what you'd improve, what you learned) — optional, shown before footer */
  reflection?: string;
  /** Next project */
  nextProjectTitle?: string;
  nextProjectSlug?: string;
}

const DESIGNER_CONTENT: Record<string, DesignerCaseStudyContent> = {
  rootin: {
    tag: "UI/UX & Frontend",
    subtitle:
      "An AI-powered plant care companion that combines IoT soil moisture sensors with Flutter mobile app, real-time monitoring, AI plant identification, and intelligent notifications.",
    heroImage: "/assets/images/projects/rootin/rootin.png",
    heroImageAlt:
      "Rootin plant care app with real-time soil moisture and plant health monitoring",
    role: "UI/UX Designer\n& Frontend Developer",
    timeline: "2024.09 — 2024.12",
    tools: "Flutter, Dart, Firebase,\nFigma, GitHub",
    deliverables: "iOS & Android App, BLE Integration,\nAI Plant ID, Design System",
    audience: "Plant owners and indoor gardeners who want data-driven care instead of guesswork, and anyone using BLE soil sensors for real-time moisture tracking.",
    challengeSections: [
      {
        heading: "The core problem",
        body: "Plant owners don’t know when or how much to water. Overwatering and underwatering are common; care is guesswork. Without real-time soil data or clear guidance, plants suffer and users lose confidence.",
      },
      {
        heading: "Product vision",
        body: "One app that connects custom BLE soil sensors with intelligent recommendations, real-time moisture visualization, and AI-powered plant identification—so plant care becomes data-driven and proactive.",
      },
      {
        heading: "What I owned",
        body: "Designed and built the end-to-end Flutter app: 38+ screens, custom BLE service for sensor data, Firebase integration, and TensorFlow Lite for on-device plant ID. Delivered a consistent design system (status colors, plant cards, FL Chart for weekly trends), bottom navigation, and context-aware notifications. Ensured under-2s latency for sensor updates and 95%+ notification delivery.",
      },
      {
        heading: "Results",
        body: "99%+ BLE connection success, under-2s data latency, 95%+ plant identification accuracy, and 95% notification delivery. Multi-language support (English/Korean). Users get real-time visibility and actionable care guidance instead of guesswork.",
      },
    ],
    challengeParagraphs: [
      "Plant owners struggle with knowing when and how much to water their plants, leading to overwatering, underwatering, and plant health issues. Without real-time data, care relies on guesswork.",
      "The goal was to build an app that connects custom BLE soil sensors with intelligent recommendations, real-time visualization, and AI-powered plant identification to make plant care data-driven and proactive.",
    ],
    keyObjectives: [
      {
        label: "Real-Time Monitoring:",
        description:
          "Achieve under 2s latency for sensor data updates with reliable BLE connectivity.",
      },
      {
        label: "AI Accuracy:",
        description:
          "95%+ plant identification accuracy with on-device ML and visual recognition.",
      },
      {
        label: "User Engagement:",
        description:
          "95% notification delivery rate with context-aware watering reminders and alerts.",
      },
    ],
    designSystemTitle: "Design System",
    designSystemDescription:
      "Consistent color system for status (ideal, underwater, overwater), reusable plant cards, status icons, bottom navigation, and FL Chart components for weekly moisture trends.",
    designSystemImage: "/assets/images/projects/rootin/status.png",
    designSystemImageAlt:
      "Rootin design system with plant cards, status indicators, and chart components",
    designSystemImage2: "/assets/images/projects/rootin/overalltips.png",
    designSystemImageAlt2: "Rootin overall tips screen",
    designSystemImage3: "/assets/images/projects/rootin/aichat.png",
    designSystemImageAlt3: "Rootin AI chat screen",
    designSystemTypography: [
      { name: "Inter Bold", weight: "bold" },
      { name: "Inter Medium", weight: "medium" },
      { name: "Inter Regular", weight: "normal" },
    ],
    designSystemColors: [
      { name: "Primary", hex: "#06C1C7", description: "Main brand (teal/cyan), selected nav, primary actions" },
      { name: "Secondary", hex: "#9BE6E9", description: "Lighter teal, secondary surfaces" },
      { name: "Accent", hex: "#FF004F", description: "Highlight/alert (pink/red)" },
      { name: "White", hex: "#FFFFFF", description: "App bars, cards, buttons" },
      { name: "Black", hex: "#000000", description: "Text, primary buttons" },
      { name: "Gray 100", hex: "#F5F5F5", description: "Scaffold/background" },
      { name: "Gray 200", hex: "#EEEEEE", description: "Chips, secondary surfaces" },
      { name: "Gray 300", hex: "#E0E0E0", description: "Disabled/borders" },
      { name: "Gray 600", hex: "#757575", description: "Captions, unselected nav" },
    ],
    solutionTitle: "The Solution",
    solutionSubtitle:
      "Flutter app with 38+ screens, custom BLE service, Firebase integration, and TensorFlow Lite for plant identification.",
    solutionUsePhoneFrame: true,
    solutionItems: [
      {
        title: "Home",
        description:
          "Today's watering status, my plants grid with status indicators, and quick add.",
        image: "/assets/images/projects/rootin/home.png",
        imageAlt: "Rootin home screen with plant list and watering card",
      },
      {
        title: "Plant detail & real-time moisture",
        description:
          "Care tips, soil moisture alerts, weekly trends chart, and upcoming watering.",
        image: "/assets/images/projects/rootin/plantdetail.png",
        imageAlt: "Rootin plant detail with real-time soil moisture and weekly trends",
      },
    ],
    impactTitle: "Impact & Results",
    impactSubtitle:
      "Rootin achieved high reliability across BLE connectivity, notification delivery, and plant identification, with multi-language support (English/Korean).",
    impactCta: "Read the full case study",
    impactStats: [
      { value: "95%", label: "Notification Delivery" },
      { value: "99%+", label: "BLE Connection Success" },
      { value: "95%+", label: "Plant ID Accuracy" },
      { value: "<2s", label: "Data Latency" },
    ],
    researchInsights: [
      { heading: "Key insights", body: "Overwatering and underwatering were common; users had no visibility into soil moisture. Care relied on memory or generic advice, not real-time data." },
      { heading: "Constraints", body: "BLE reliability and battery life; on-device ML for plant ID; keeping latency under 2s for sensor updates and 95%+ notification delivery." },
      { heading: "Success criteria", body: "Ship a reliable, data-driven plant care experience that differentiates via custom hardware and AI, with multi-language support (EN/KR)." },
    ],
    reflection: "I’d run a longer beta to tune BLE reconnection and battery usage. I learned how important it is to design for sensor delay and offline states so the app feels responsive even when data is stale.",
    nextProjectTitle: "Bestia",
    nextProjectSlug: "bestia",
  },

  bestia: {
    tag: "UI/UX & Frontend",
    subtitle:
      "Real estate lead and property CRM (Bestia / Leadboard Lite): leads list with filters and search, lead & property detail with tabbed data (features, ownership, tax, mortgage, price history), property comparison, notes, contacts, and multi-channel communication. Showcased at LA Tech Week — 300 agents on the waiting list.",
    heroImage: "https://placehold.co/1200x800/1E40AF/eff6ff?text=Bestia+CRM",
    heroImageAlt:
      "Bestia CRM — leads list, property detail, multi-channel communication, and analytics",
    role: "UI/UX Designer & Frontend Developer",
    timeline: "2025.09 — 2026.01",
    tools: "Next.js 15, React 19, TypeScript, Figma, Tailwind 4, Recharts, dnd-kit",
    deliverables: "Leads list & property detail, 50+ components, API integration, LA Tech Week",
    audience: "Real estate agents and teams who manage leads, properties, and client communication and need one workspace instead of spreadsheets and multiple tools.",
    challengeSections: [
      {
        heading: "The core problem",
        body: "Leads scattered across email, phone, and SMS. Property data buried in separate systems. Seven-click workflows for basic actions. Agents were losing context and response speed—and generic CRMs were either overpriced or too rigid to handle real estate’s density of data.",
      },
      {
        heading: "Product vision",
        body: "One workspace that combines lead management with deep property intelligence: ownership, tax, mortgage, price history, and comparables in one place.",
      },
      {
        heading: "What I owned",
        body: "Designed scalable information architecture for high-density real estate data. Built 50+ reusable components and the full lead and property experience: filterable list with server-side pagination for 10k+ leads, tabbed property detail, comparison tools, notes and contacts. Reduced core workflows from 7 clicks to 3. Implemented Gmail OAuth and Twilio for email, SMS, and voice; added AI-assisted message generation. Shipped performance targets: sub-2s load, sub-500ms API, smooth at 10,000+ leads.",
      },
      {
        heading: "Results",
        body: "Faster response time for agents. 60% less manual composition with AI-generated content. System holds up at 10k+ leads with sub-2s load and sub-500ms API. Showcased at LA Tech Week with 300 agents on the waiting list.",
      },
    ],
    researchInsights: [
      {
        heading: "Key insights",
        body: "Agents spent too much time switching between inbox, spreadsheets, and listing sites. No single view of a lead’s property context (ownership, tax, mortgage, history). Response speed suffered and deals slipped when context was scattered.",
      },
      {
        heading: "Constraints",
        body: "Data came from multiple sources (Bestia Property API, CRM, email/SMS). The UI had to handle high density (10k+ leads) without slowing down. We needed to keep a consistent design system while shipping leads list, property detail, and multi-channel communication.",
      },
      {
        heading: "Success criteria",
        body: "Reduce time-to-response, increase agent efficiency, and position the product for scale. LA Tech Week launch required a stable, intuitive experience that could convert waiting-list signups into active users.",
      },
    ],
    challengeParagraphs: [
      "Real estate teams juggle leads across email, phone, and SMS while tracking properties, ownership, tax, and mortgage data in separate tools. Generic CRMs are overpriced or rigid; agents end up stitching spreadsheets, inboxes, and listing sites.",
      "Bestia (Leadboard Lite) gives agents one place to manage leads and deep property context.",
    ],
    keyObjectives: [
      {
        label: "Leads list:",
        description: "Filterable, searchable list with status/source filters, server-side pagination, and clear status/source badges; 3-click workflow for common actions (was 7+).",
      },
      {
        label: "Lead & property detail:",
        description: "Single detail view with tabbed property data (features, ownership, tax, mortgage, price history, lead info), KPI (Worth/Owe/Want), strategy notes, contacts, and property comparison.",
      },
      {
        label: "Multi-channel & AI:",
        description: "Unified email, SMS, and voice; Gmail OAuth, Twilio; AI-generated content for 60% less manual composition.",
      },
      {
        label: "Performance & scale:",
        description: "Page load under 2s, API under 500ms; smooth with 10,000+ leads; 50+ components, 106+ API routes.",
      },
    ],
    designSystemTitle: "Design system",
    designSystemDescription:
      "Atomic design with 50+ reusable components: color-coded status and source system, LeadCard, StatusBadge, ActionMenu, tabbed property panels (Features, Ownership, Price History, Tax, Mortgage, Lead Info), KPI cards, and 20+ workflow modals. Next.js 15 App Router, React 19, TypeScript, Tailwind 4; Recharts for price history and analytics; dnd-kit for sortable lists. API integration with service gateway and Bestia Property API for property modules and search.",
    designSystemColors: [
      { name: "Primary", hex: "#1E40AF", description: "Brand anchor" },
      { name: "Accent", hex: "#3B82F6", description: "CTAs & links" },
      { name: "Highlight", hex: "#6366F1", description: "States & glow" },
      { name: "Neutral", hex: "#FFFFFF", description: "Canvas & breathing room" },
    ],
    solutionTitle: "The solution",
    solutionSubtitle:
      "Leads list page with filters and pagination; lead & property detail page with tabbed property data, comparison, notes, and contacts; Email, SMS & Voice; AI Assistants and analytics. Real-time call state, Gmail token refresh, server-side pagination.",
    solutionUsePhoneFrame: false,
    solutionItems: [],
    features: [
      {
        id: "1",
        label: "Feature 01",
        title: "Leads list page",
        description:
          "Central list view for all leads with status and source filters, full-text search, and server-side pagination. Each row shows key lead and property info with status/source badges; bulk actions and 3-click workflows for common tasks. Built to stay fast with 10,000+ leads. API routes support filtering by statusId, sourceId, search, page, and size.",
        tags: ["Next.js", "TypeScript", "Tailwind", "Pagination"],
        image: "/assets/images/projects/bestia/leadslist.png",
        imageAlt: "Bestia leads list page with filters and status badges",
        imageRight: false,
      },
      {
        id: "2",
        label: "Feature 02",
        title: "Lead & property detail page",
        description:
          "Single lead/property detail view with tabbed content: Property features, Ownership information, Price history (Recharts), Tax information, Mortgage, and Lead information. KPI section (Worth/Owe/Want), strategy notes, contacts, and property comparison with nearby search (Bestia Property API). Financial versions and notes/contacts backed by dedicated API routes. Clean, scannable layout for agents to move quickly from list to detail.",
        tags: ["Tabs", "Recharts", "Property API", "Contacts & notes"],
        image: "/assets/images/projects/bestia/property-detail.png",
        imageAlt: "Bestia lead and property detail page with tabbed sections",
        imageRight: true,
      },
      {
        id: "3",
        label: "Feature 03",
        title: "Email, SMS & Voice",
        description:
          "Unified multi-channel communication: Gmail OAuth integration, Twilio for SMS and voice. Real-time call state, token refresh, and consistent UI for email/SMS composition. 60% reduction in manual composition with AI-generated content.",
        tags: ["Gmail OAuth", "Twilio", "OpenAI"],
        image: "/assets/images/projects/bestia/email.png",
        imageAlt: "Bestia email, SMS and voice",
        imageRight: false,
        images: [
          "/assets/images/projects/bestia/email.png",
          "/assets/images/projects/bestia/sms.png",
          "/assets/images/projects/bestia/call.png",
        ],
        imageAlts: [
          "Bestia email",
          "Bestia SMS",
          "Bestia call",
        ],
      },
      {
        id: "4",
        label: "Feature 04",
        title: "AI Assistants & Analytics",
        description:
          "AI-powered content suggestions and automation; analytics dashboard for deal and team performance. 50+ reusable components, 106+ API routes; page load under 2s, API under 500ms. Launched at LA Tech Week with 300 agents on the waitlist.",
        tags: ["OpenAI GPT-4", "Analytics", "Figma"],
        image: "/assets/images/projects/bestia/aiassistantchat.png",
        imageAlt: "Bestia AI and analytics",
        imageRight: true,
      },
    ],
    impactTitle: "Impact & results",
    impactSubtitle:
      "Launched at LA Tech Week with 300 agents on the waiting list. Intuitive design, significant time savings, and positive early-adopter feedback. Real-time status and collaboration reduce overhead.",
    impactCta: "Read the full case study",
    impactStats: [
      { value: "300", label: "Agents on waitlist (LA Tech Week)" },
      { value: "3", label: "Clicks for common actions (was 7+)" },
      { value: "60%", label: "Less manual email/SMS time" },
      { value: "<500ms", label: "API response" },
    ],
    reflection:
      "I’d push for more structured user interviews post–LA Tech Week to validate which workflows agents use most. On the technical side, I’d explore virtualized lists earlier for the 10k+ leads case. I learned how much clarity matters when you’re combining dense property data with multi-channel communication—one source of truth and a simple IA made the difference.",
    nextProjectTitle: "Shinhan Scholarship Foundation",
    nextProjectSlug: "shinhan-scholarship-foundation",
  },

  "handiers-inc": {
    tag: "UI/UX & Frontend",
    subtitle:
      "Smart service marketplace connecting consumers and pros via AI job analysis, real-time location, and graph-based matching. Flutter consumer + pro apps, Kotlin gRPC backend.",
    heroImage: "https://placehold.co/1200x800/17453B/eaf1ef?text=Handiers",
    heroImageAlt:
      "Handiers — consumer and pro apps, AI analysis, smart logistics, Stripe payments",
    role: "Flutter Engineering\n& UI/UX Design",
    timeline: "2025.03 — 2025.09",
    tools: "Flutter, Dart, Kotlin, gRPC,\nVertex AI, Stripe, Firestore",
    deliverables: "Consumer + Pro Apps, AI Pipeline,\nMarketing Site, Design System",
    audience: "Consumers who need vetted, nearby service pros, and local pros who want relevant job leads and reliable payouts—both sides of a smart service marketplace.",
    challengeSections: [
      {
        heading: "The core problem",
        body: "Consumers can’t find trustworthy pros quickly; pros can’t get relevant nearby jobs. Existing platforms lack AI intelligence, real-time location, and trusted social-graph recommendations. Discovery is slow and fragmented.",
      },
      {
        heading: "Product vision",
        body: "A smart service marketplace that connects consumers and pros using AI job analysis, real-time location, and graph-based matching—so the right job finds the right pro, and consumers get vetted, nearby help.",
      },
      {
        heading: "What I owned",
        body: "Contributed across Flutter engineering, system architecture, AI pipelines, and UX for both consumer and pro apps. Implemented auto job creation from images/videos and AI cost estimation (Vertex AI). Built real-time pro availability and distance filtering with matching under 200ms. Integrated graph-based recommendations (Neo4j) and Stripe onboarding and payouts. Delivered gRPC microservices, Firestore, and unified UI across consumer app, pro app, and marketing site.",
      },
      {
        heading: "Results",
        body: "60% less job-creation friction with AI. Matching latency under 200ms. Dual consumer and pro apps with Stripe payments integrated. Scalable consumer–pro ecosystem with AI, smart logistics, and enterprise reliability.",
      },
    ],
    challengeParagraphs: [
      "Consumers struggle to find trustworthy pros quickly; pros struggle to get relevant nearby jobs. Existing platforms lack AI intelligence, real-time location, and trusted social graph recommendations.",
      "Handiers solves consumer–pro discovery using AI, real-time logistics, graph recommendations, and enterprise systems. I contributed across Flutter engineering, system architecture, AI pipelines, and UX flows for both consumer and pro apps.",
    ],
    keyObjectives: [
      {
        label: "Reduce friction:",
        description: "Auto job creation from images/videos; AI cost estimation and category classification.",
      },
      {
        label: "Smart logistics:",
        description: "Real-time pro availability, distance filtering, matching under 200ms.",
      },
      {
        label: "Trusted matching:",
        description: "Graph-based recommendations; Stripe onboarding and payouts.",
      },
      {
        label: "Enterprise reliability:",
        description: "gRPC microservices, Firestore, Vertex AI, AWS SNS/SES.",
      },
    ],
    designSystemTitle: "Design system",
    designSystemDescription:
      "Unified UI across consumer app, pro app, and marketing site. Navigation shells, job cards, map and list views with location layers, AI upload components (camera, video, gallery) for job creation, request and earnings workflows, and invoice/payout screens. Brand palette: deep green (#17453B), soft mint (#EAF1EF), accent orange (#F4A300) for CTAs. Consistent typography, spacing, and workflow modals; Flutter shared components and Kotlin gRPC for backend.",
    designSystemColors: [
      { name: "Brand", hex: "#17453B", description: "Primary brand color" },
      { name: "Gray", hex: "#757575", description: "Neutral text and UI chrome" },
      { name: "Soft Mint", hex: "#EAF1EF", description: "Light backgrounds and cards" },
      { name: "Accent", hex: "#F4A300", description: "CTAs, highlights, warnings" },
      { name: "White", hex: "#FFFFFF", description: "Canvas and contrast surfaces" },
    ],
    solutionTitle: "The solution",
    solutionSubtitle:
      "Flutter monorepo (consumer + pro) with Kotlin gRPC backend. AI job analysis (Vertex AI Gemini), smart matching, real-time location, Stripe payments, Neo4j graph recommendations. Consumer: map/list discovery, send request with AI; Pro: earnings dashboard and invoices.",
    solutionUsePhoneFrame: false,
    solutionItems: [],
    features: [
      {
        id: "1",
        label: "Feature 01",
        title: "Map & list — discover pros and jobs",
        description:
          "Consumer view to discover nearby pros and jobs: map and list layouts with real-time location, distance filtering, and availability. Graph-based recommendations (Neo4j) and matching under 200ms so consumers quickly find vetted, nearby help.",
        tags: ["Flutter", "Map", "Real-time location", "Neo4j"],
        image: "/assets/images/projects/handiers/maplist.png",
        imageAlt: "Handiers map and list — discover pros and jobs",
        imageRight: false,
      },
      {
        id: "2",
        label: "Feature 02",
        title: "Send request — AI job creation",
        description:
          "Consumers submit job requests with photos or video; AI (Vertex AI) analyzes for cost estimation and category. Auto job creation reduces friction and speeds matching. Chunked uploads, Firestore listeners, and consistent request flow across the consumer app.",
        tags: ["Vertex AI", "Flutter", "Firestore", "Chunked upload"],
        image: "/assets/images/projects/handiers/sendrequest.png",
        imageAlt: "Handiers send request — AI job creation",
        imageRight: true,
      },
      {
        id: "3",
        label: "Feature 03",
        title: "Pro earnings dashboard",
        description:
          "Pros see earnings at a glance: completed jobs, pending payouts, and history. Stripe onboarding and payouts integrated; clear breakdown by period and job so pros can track income and plan around availability.",
        tags: ["Stripe", "Flutter", "Pro app"],
        image: "/assets/images/projects/handiers/pro-earnings.png",
        imageAlt: "Handiers pro earnings dashboard",
        imageRight: false,
      },
      {
        id: "4",
        label: "Feature 04",
        title: "Pro invoices & payouts",
        description:
          "Invoice and payout flows for pros: view and manage invoices, link to Stripe for secure payments. Enterprise reliability with gRPC microservices, Firestore, and AWS SNS/SES for notifications.",
        tags: ["Stripe", "gRPC", "Firestore"],
        image: "/assets/images/projects/handiers/pro-invoice.png",
        imageAlt: "Handiers pro invoices and payouts",
        imageRight: true,
      },
    ],
    impactTitle: "Impact & results",
    impactSubtitle:
      "Handiers combines AI, smart city logistics, and enterprise infrastructure for a scalable consumer–pro ecosystem. AI reduces job creation friction; matching and trust signals improve conversion.",
    impactCta: "Read the full case study",
    impactStats: [
      { value: "60%", label: "Less job creation friction (AI)" },
      { value: "<200ms", label: "Matching latency" },
      { value: "Dual", label: "Consumer + Pro apps" },
      { value: "Stripe", label: "Payments integrated" },
    ],
    researchInsights: [
      { heading: "Key insights", body: "Consumers didn’t know which pros to trust; pros wasted time on irrelevant or far-away jobs. Discovery was slow and fragmented across platforms." },
      { heading: "Constraints", body: "Real-time location and matching under 200ms; AI job creation from images/video; Stripe onboarding and payouts; unified UX across consumer app, pro app, and marketing site." },
      { heading: "Success criteria", body: "Reduce job-creation friction with AI, improve conversion with trust signals and graph recommendations, and scale with gRPC and Firestore." },
    ],
    reflection: "I’d invest earlier in pro-side analytics so pros see clear value. I learned how much coordination matters between Flutter, Kotlin gRPC, and AI pipelines—clear contracts and error handling made the difference.",
    nextProjectTitle: "Rootin",
    nextProjectSlug: "rootin",
  },

  "shinhan-scholarship-foundation": {
    tag: "Fullstack Development",
    subtitle:
      "A client-facing product that transformed manual monthly student report submissions into an automated PWA with community features, student networking, and a lightweight admin CRM dashboard—achieving ~3 hours of backend processing time savings.",
    heroImage: "",
    role: "Product Engineer",
    timeline: "Client project\n(2026.01 — 2026.02)",
    tools: "PWA, Web stack,\nUser research, SCAMPER",
    deliverables: "Student & Admin PWA,\nAutomated reporting, CRM dashboard",
    audience: "Shinhan Scholarship Foundation staff (admin, processing) and scholarship students (YB, mentors, alumni/OB) who need automated reporting, community, and a single place to manage activity.",
    challengeSections: [
      {
        heading: "The core problem",
        body: "The foundation carried a heavy operational burden: manual monthly student report submissions, slow processing, and limited student engagement beyond mandatory reporting. Administrative overhead and delays were the norm.",
      },
      {
        heading: "Product vision",
        body: "Transform reporting into an automated PWA with community features, student networking, and a lightweight admin CRM—so students stay engaged and staff save hours every cycle.",
      },
      {
        heading: "What I owned",
        body: "Drove constraint-aware user research (web crawling, secondary data, visualization) and SCAMPER-driven ideation. Delivered full-stack: student-facing PWA with automated recurring reporting, community and networking, and an admin dashboard for student management and oversight. Eliminated manual submissions and streamlined backend processing.",
      },
      {
        heading: "Results",
        body: "~3 hours of backend processing time saved per cycle. Zero manual report submissions. Dual student and admin PWA deployed cross-platform. Higher engagement and faster, more efficient operations.",
      },
    ],
    challengeParagraphs: [
      "The foundation faced significant operational burden from manual monthly student report submissions, while students had limited engagement with the platform beyond mandatory reporting. Monthly processing created administrative overhead and delays.",
      "The goal was to transform the reporting workflow through constraint-aware user research, SCAMPER-driven ideation, and full-stack delivery of both student-facing features and an admin CRM dashboard.",
    ],
    keyObjectives: [
      {
        label: "Automate reporting:",
        description: "Eliminate manual monthly report submissions and streamline processing.",
      },
      {
        label: "Increase engagement:",
        description: "Boost platform usage with community, networking, and recurring activity reporting.",
      },
      {
        label: "Reduce processing time:",
        description: "Save ~3 hours of backend processing time per cycle through automation.",
      },
      {
        label: "Admin efficiency:",
        description: "Lightweight CRM dashboard for student management and oversight.",
      },
    ],
    designSystemTitle: "Design system & architecture",
    designSystemDescription:
      "Dual-interface PWA: student-facing interface (community, networking, activity reporting) and admin CRM dashboard. Consistent components for reporting workflows, student management, and engagement features.",
    designSystemColors: [
      { name: "Primary", hex: "#6C6FF2", description: "Brand and primary actions" },
      { name: "Surface", hex: "#F8F8F8", description: "Cards and panels" },
      { name: "Text", hex: "#1a1a1a", description: "Primary text" },
      { name: "Muted", hex: "#64748b", description: "Secondary text" },
    ],
    solutionTitle: "The solution",
    solutionSubtitle:
      "Progressive Web App with automated recurring reporting, community and networking for students, and an admin dashboard for faster student management and oversight.",
    solutionUsePhoneFrame: false,
    solutionItems: [],
    impactTitle: "Impact & results",
    impactSubtitle:
      "The project successfully transformed manual, time-consuming reporting into an automated, engaging platform experience, reducing operational burden while increasing student engagement.",
    impactCta: "Read the full case study",
    impactStats: [
      { value: "~3h", label: "Processing time saved" },
      { value: "Dual", label: "Student + Admin PWA" },
      { value: "0", label: "Manual report submissions" },
      { value: "PWA", label: "Cross-platform deployed" },
    ],
    researchInsights: [
      { heading: "Key insights", body: "Staff spent hours each cycle on manual report processing; students had little reason to use the platform beyond mandatory reporting. Engagement was low and overhead high." },
      { heading: "Constraints", body: "Constraint-aware user research (web crawling, secondary data); SCAMPER-driven ideation; delivering both student PWA and admin CRM with limited timeline." },
      { heading: "Success criteria", body: "Eliminate manual submissions, save ~3h processing per cycle, increase student engagement with community and networking, and give admin a lightweight CRM." },
    ],
    reflection: "I’d add more in-app guidance for first-time student reporters. I learned how valuable user research and SCAMPER were for scoping under constraints—automation and engagement both had to be solved together.",
    nextProjectTitle: "Rootin",
    nextProjectSlug: "rootin",
  },
};

export function getDesignerContent(
  slug: string,
  project: Project
): DesignerCaseStudyContent {
  const custom = DESIGNER_CONTENT[slug];
  return {
    tag: custom?.tag ?? project.category,
    subtitle:
      custom?.subtitle ??
      "A comprehensive ecosystem designed for clarity, consistency, and scale.",
    heroImage: custom?.heroImage ?? project.image,
    heroImageAlt: custom?.heroImageAlt ?? project.imageAlt,
    role: custom?.role ?? "Lead Product Designer & Product Manager",
    timeline: custom?.timeline ?? `6 Months (${project.date})`,
    tools: custom?.tools ?? "Figma, Framer, Linear, Jira",
    deliverables: custom?.deliverables ?? "Design System, Web App, PRD",
    challengeParagraphs:
      custom?.challengeParagraphs ?? [
      "Stakeholders faced friction when managing workflows across fragmented tools. The goal was to build an intuitive, scalable platform.",
    ],
    keyObjectives:
      custom?.keyObjectives ?? [
      { label: "Unified View:", description: "Single source of truth for key metrics." },
      { label: "Security First:", description: "Enterprise-grade security without compromising UX." },
      { label: "Scalability:", description: "Design system that grows with the product." },
    ],
    challengeSections: custom?.challengeSections,
    researchInsights: custom?.researchInsights,
    audience: custom?.audience,
    designSystemTitle: custom?.designSystemTitle ?? "Design System",
    designSystemDescription:
      custom?.designSystemDescription ??
      "We developed a robust atomic design system to ensure consistency and speed up the development cycle.",
    designSystemImage: custom?.designSystemImage,
    designSystemImageAlt: custom?.designSystemImageAlt,
    designSystemImage2: custom?.designSystemImage2,
    designSystemImageAlt2: custom?.designSystemImageAlt2,
    designSystemImage3: custom?.designSystemImage3,
    designSystemImageAlt3: custom?.designSystemImageAlt3,
    designSystemTypography: custom?.designSystemTypography,
    designSystemColors: custom?.designSystemColors,
    solutionTitle: custom?.solutionTitle ?? "The Solution",
    solutionSubtitle:
      custom?.solutionSubtitle ??
      "High-fidelity prototypes showcasing the core user journey.",
    solutionUsePhoneFrame: custom?.solutionUsePhoneFrame ?? false,
    solutionItems: custom?.solutionItems,
    features: custom?.features,
    impactTitle: custom?.impactTitle ?? "Impact & Results",
    impactSubtitle: custom?.impactSubtitle ?? "The launch led to measurable improvements for our partners.",
    impactCta: custom?.impactCta ?? "Read the full case study",
    impactStats:
      custom?.impactStats ?? [
      { value: "40%", label: "Faster Onboarding" },
      { value: "98%", label: "User Satisfaction" },
    ],
    reflection: custom?.reflection,
    nextProjectTitle: custom?.nextProjectTitle,
    nextProjectSlug: custom?.nextProjectSlug,
  };
}
