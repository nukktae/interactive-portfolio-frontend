import type { CaseStudyDetailContent } from "./types";
import { CASE_STUDIES } from "./data";

const CONTENT: Record<string, CaseStudyDetailContent> = {
  bestia: {
    tags: ["Real Estate", "UI/UX Design", "Full-Stack Dev"],
    title: "Bestia: Lead Management",
    titleHighlight: "at Scale",
    subtitle:
      "A comprehensive case study on designing and building a real estate CRM that unifies email, SMS, and voice with AI automation—from weekly agent feedback to 300 signups at LA Tech Week.",
    heroImage:
      "https://placehold.co/1200x700/1E40AF/eff6ff?text=Bestia+CRM+Dashboard",
    heroImageAlt:
      "Bestia CRM — lead management interface with status tracking and communication hub",
    overview: {
      challenge:
        "Real estate teams juggle leads across email, phone, and SMS while trying to track deals and keep communication consistent. Generic CRMs are either overpriced or rigid, forcing agents to stitch together spreadsheets, inboxes, and phone apps.",
      role: [
        "UI/UX Designer",
        "Frontend Engineer",
        "User Research (weekly agent feedback)",
        "API & System Design",
      ],
      metrics: [
        { value: "300", label: "Agents on waitlist (LA Tech Week)" },
        { value: "3", label: "Clicks for common actions (was 7+)" },
        { value: "60%", label: "Less manual email/SMS time" },
      ],
    },
    phase01: {
      label: "Phase 01",
      title: "User Research &\nProblem Discovery",
      subtitle:
        "Primary users: real estate investors, agents, and team managers. We ran weekly design feedback sessions with agents and identified pain points across 5+ tools and fragmented communication.",
      cards: [
        {
          icon: "fa-solid fa-users",
          title: "User Research",
          description:
            "Identified pain points: switching between 5+ tools daily, copy-pasting across platforms, missed follow-ups, and difficulty tracking \"hot\" leads.",
        },
        {
          icon: "fa-solid fa-lightbulb",
          title: "Key Design Insights",
          description:
            "Color-coded status system for quick priority scan; contextual actions (call, email, SMS) one click away; progress visualization for pipeline health; mobile-first for field agents.",
        },
        {
          icon: "fa-solid fa-repeat",
          title: "Weekly Feedback Loops",
          description:
            "Ongoing sessions with real estate agents to validate flows and iterate on lead management, communication hub, and analytics dashboard.",
        },
      ],
    },
    phase02: {
      label: "Phase 02",
      title: "UX Architecture &\nInformation Flow",
      steps: [
        {
          title: "Lead Management Flow",
          description:
            "Core workflow agents perform 20–30 times per day: View Leads → Filter/Search → Select Lead → View Details → Take Action (Email/SMS/Call) → Update Status → Assign to Member.",
        },
        {
          title: "Communication Flow",
          description:
            "Unified email, SMS, and call workflows with AI assistance: Select Lead → Choose Channel → AI Generate Content → Review/Edit → Send/Track/History.",
        },
        {
          title: "Deal Progression",
          description:
            "Standardized pipeline from New Lead through Data Enrichment, Initial Contact, Negotiation, DocuSign, Escrow, to Closed Deal.",
        },
      ],
      image:
        "https://placehold.co/800x600/1E40AF/eff6ff?text=Lead+%26+Communication+Flows",
      imageAlt: "Bestia lead management and communication flow architecture",
    },
    phase03: {
      label: "Phase 03",
      title: "Aesthetic Precision",
      subtitle:
        "Atomic design with 50+ reusable components. Strict color system: Primary #1E40AF (brand), Accent #3B82F6 (CTAs), Highlight #6366F1 (states). LeadCard, StatusBadge, ActionMenu, and 20+ workflow modals for consistent UX.",
      images: [
        {
          src: "https://placehold.co/600x400/1E40AF/eff6ff?text=Design+System",
          alt: "Bestia design system — colors and typography",
        },
        {
          src: "https://placehold.co/600x400/3B82F6/eff6ff?text=50%2B+Components",
          alt: "Atomic components: buttons, inputs, tables, modals",
        },
        {
          src: "https://placehold.co/600x400/6366F1/eff6ff?text=Status+%26+Workflows",
          alt: "StatusBadge and workflow modals",
        },
      ],
    },
    phase04: {
      label: "Phase 04",
      title: "Full-Stack Implementation",
      stack: [
        { label: "Frontend", value: "Next.js 15, React 19" },
        { label: "Styling", value: "Tailwind CSS 4" },
        { label: "API", value: "106 API Routes" },
        { label: "Integrations", value: "Gmail, Twilio, OpenAI" },
      ],
      crawlerTitle: "Real-Time Call State Management",
      crawlerDescription:
        "To keep call status in sync across the entire app without heavy state libraries, I implemented a localStorage-backed state with a custom event system (CustomEvent API). getActiveCallState() and setActiveCallState() utilities plus a global CallIndicator component give seamless call state synchronization. Gmail OAuth token refresh and renewWatch() keep email send success rate above 99% with automatic token management.",
      crawlerTags: ["CustomEvent API", "JWT Refresh", "Gmail Watch"],
    },
    nextTitle: "Shinhan Scholarship Foundation",
    nextSlug: "shinhan",
  },

  shinhan: {
    tags: ["Fullstack", "UI/UX Design", "PWA"],
    title: "Shinhan Scholarship Foundation:",
    titleHighlight: "Reporting Reimagined",
    subtitle:
      "A client-facing product case study: constraint-aware user research, SCAMPER-driven ideation, and full-stack delivery of a dual-interface PWA that eliminated manual reporting and saved ~3 hours of backend processing per cycle.",
    heroImage:
      "https://placehold.co/1200x700/6C6FF2/f8f8ff?text=Shinhan+PWA",
    heroImageAlt:
      "Shinhan Scholarship Foundation PWA — student and admin interfaces",
    overview: {
      challenge:
        "The foundation faced significant operational burden from manual monthly student report submissions, while students had limited engagement with the platform beyond mandatory reporting. Administrative overhead and low platform value for students reduced both efficiency and brand relationship.",
      role: [
        "Product Engineer",
        "Constraint-Aware User Research",
        "SCAMPER Ideation",
        "Full-Stack (Student + Admin PWA)",
      ],
      metrics: [
        { value: "~3h", label: "Backend processing saved per cycle" },
        { value: "Dual", label: "Student + Admin interfaces" },
        { value: "0", label: "Manual report submissions" },
      ],
    },
    phase01: {
      label: "Phase 01",
      title: "Constraint-Aware Research &\nProblem Discovery",
      subtitle:
        "Interview sensitivity required alternative methods. We used web crawling, secondary data analysis, and data visualization to uncover reporting pain points and student behavior patterns without direct interviews.",
      cards: [
        {
          icon: "fa-solid fa-magnifying-glass-chart",
          title: "Web Crawling & Data Analysis",
          description:
            "Gathered insights into student behavior and reporting pain points through structured data sources when direct interviews were not feasible.",
        },
        {
          icon: "fa-solid fa-chart-line",
          title: "Data Visualization",
          description:
            "Visualized workflow inefficiencies and identified where manual processing created delays and administrative overhead.",
        },
        {
          icon: "fa-solid fa-lightbulb",
          title: "Key Findings",
          description:
            "Students wanted community and networking beyond reporting; recurring activity reporting needed automation; admins needed better oversight tools.",
        },
      ],
    },
    phase02: {
      label: "Phase 02",
      title: "UX Architecture &\nInformation Flow",
      steps: [
        {
          title: "Student Activity Reporting",
          description:
            "Access reporting interface → Fill activity details → Submit recurring reports → Track submission history → Engage with community features.",
        },
        {
          title: "Community & Networking",
          description:
            "Join community platform → Connect with other students → Participate in discussions → Build professional network → Share experiences and resources.",
        },
        {
          title: "Admin Dashboard",
          description:
            "Access admin CRM → View student overview and activities → Review and process reports → Monitor engagement metrics → Manage student information.",
        },
      ],
      image:
        "https://placehold.co/800x600/6C6FF2/f8f8ff?text=Student+%26+Admin+Flows",
      imageAlt: "Shinhan PWA — student and admin user flows",
    },
    phase03: {
      label: "Phase 03",
      title: "Dual-Interface Design",
      subtitle:
        "Single PWA, two experiences. Primary #6C6FF2 for brand and actions; clean student and admin components. Reporting forms, community interfaces, and CRM dashboard elements designed for clarity and consistency.",
      images: [
        {
          src: "https://placehold.co/600x400/6C6FF2/f8f8ff?text=Student+UI",
          alt: "Student interface — reporting and community",
        },
        {
          src: "https://placehold.co/600x400/8b7cf6/f8f8ff?text=Admin+CRM",
          alt: "Admin CRM dashboard components",
        },
        {
          src: "https://placehold.co/600x400/6C6FF2/f8f8ff?text=Design+System",
          alt: "Design system — student and admin components",
        },
      ],
    },
    phase04: {
      label: "Phase 04",
      title: "Full-Stack PWA Delivery",
      stack: [
        { label: "Product", value: "PWA, Web stack" },
        { label: "Research", value: "Web crawling, SCAMPER" },
        { label: "Student", value: "Community, Reporting" },
        { label: "Admin", value: "CRM Dashboard" },
      ],
      crawlerTitle: "Constraint-Aware Research Approach",
      crawlerDescription:
        "When direct user interviews were not possible due to sensitivity, we developed a research approach using web crawling to capture behavior patterns, secondary data analysis to surface reporting pain points, and data visualization to identify workflow inefficiencies. This ensured ethical, effective research and a clear evidence base for SCAMPER-driven ideation and the dual-interface PWA architecture.",
      crawlerTags: ["Web Crawling", "Secondary Data", "Data Visualization", "SCAMPER"],
    },
    nextTitle: "Handiers Inc.",
    nextSlug: "handiers",
  },

  handiers: {
    tags: ["Marketplace", "UI/UX Design", "Full-Stack Dev"],
    title: "Handiers: Smart Service",
    titleHighlight: "Marketplace",
    subtitle:
      "A case study on building a consumer–pro platform with AI job analysis, real-time location, graph-based matching, and enterprise payments—Flutter consumer + pro apps, Kotlin gRPC backend.",
    heroImage:
      "https://placehold.co/1200x700/17453B/eaf1ef?text=Handiers+Platform",
    heroImageAlt:
      "Handiers — consumer and pro apps, AI analysis, smart logistics",
    overview: {
      challenge:
        "Consumers struggle to find trustworthy pros quickly; pros struggle to find nearby jobs that match their skills. Existing platforms lack AI intelligence, real-time location, and trusted social graph recommendations.",
      role: [
        "Flutter Engineering",
        "System & AI Architecture",
        "UI/UX Design (consumer + pro + web)",
        "gRPC & Integrations",
      ],
      metrics: [
        { value: "Dual", label: "Consumer + Pro apps" },
        { value: "<200ms", label: "Matching latency" },
        { value: "60%", label: "Less job creation friction (AI)" },
      ],
    },
    phase01: {
      label: "Phase 01",
      title: "User Research &\nProblem Discovery",
      subtitle:
        "Consumers want immediate estimates without describing problems; trust is heavily based on friend recommendations. Pros want steady jobs near their service areas; real-time updates are essential for both sides.",
      cards: [
        {
          icon: "fa-solid fa-users",
          title: "User Research",
          description:
            "Identified needs: instant estimates via media, trust through social graph, pros need nearby job visibility, and real-time updates for both consumers and pros.",
        },
        {
          icon: "fa-solid fa-lightbulb",
          title: "Key Insights",
          description:
            "Multimodal AI reduces onboarding time; graph networks enable trust-based discovery; real-time location improves conversion; Stripe verification builds pro credibility.",
        },
        {
          icon: "fa-solid fa-puzzle-piece",
          title: "Platform Vision",
          description:
            "Unified system combining Flutter apps with Kotlin gRPC backend—AI job analysis, smart matching, real-time location, payments, and graph recommendations.",
        },
      ],
    },
    phase02: {
      label: "Phase 02",
      title: "UX Architecture &\nInformation Flow",
      steps: [
        {
          title: "Job Creation Flow",
          description:
            "Consumers capture media → Upload → AI analysis (Vertex AI Gemini) categorizes and estimates cost → Job creation. Friction reduced by auto-job from images/videos.",
        },
        {
          title: "Matching Flow",
          description:
            "Location filter → Category filter → Graph ranking (Neo4j) → Availability check. Matching engine finds best pros using location, availability, and social graph signals.",
        },
        {
          title: "Payment Flow",
          description:
            "Stripe-based pipeline: Add card → PaymentIntent → Pro completes work → Payout. Enterprise-grade onboarding and payouts integrated across the platform.",
        },
      ],
      image:
        "https://placehold.co/800x600/17453B/eaf1ef?text=Job+%26+Matching+Flows",
      imageAlt: "Handiers — job creation, matching, and payment flows",
    },
    phase03: {
      label: "Phase 03",
      title: "Design System &\nDual Apps",
      subtitle:
        "Brand #17453B, Soft Mint #EAF1EF, Accent #F4A300 for CTAs. Navigation shells, job cards, AI upload components (camera, video, gallery), location layers, and workflow modals for consumer and pro flows.",
      images: [
        {
          src: "https://placehold.co/600x400/17453B/eaf1ef?text=Consumer+App",
          alt: "Consumer app — job creation and matching",
        },
        {
          src: "https://placehold.co/600x400/2d6a5a/eaf1ef?text=Pro+App",
          alt: "Pro app — jobs, earnings, availability",
        },
        {
          src: "https://placehold.co/600x400/F4A300/eaf1ef?text=Design+Tokens",
          alt: "Design system — colors and components",
        },
      ],
    },
    phase04: {
      label: "Phase 04",
      title: "Full-Stack Implementation",
      stack: [
        { label: "Frontend", value: "Flutter, Dart" },
        { label: "Backend", value: "Kotlin gRPC" },
        { label: "AI", value: "Vertex AI Gemini" },
        { label: "Data", value: "Firestore, Neo4j" },
      ],
      crawlerTitle: "Multimodal AI & Smart Matching",
      crawlerDescription:
        "Designed the multimodal AI analysis pipeline using Vertex AI Gemini 2.5 Flash for job categorization and cost estimation. Architected the smart matching algorithm combining location, availability, and Neo4j graph data for trust-based recommendations. Chunked upload and async gRPC streaming handle large media; location heartbeat and Firestore listeners keep pro availability real-time.",
      crawlerTags: ["Vertex AI", "Neo4j", "gRPC", "Stripe", "Firestore"],
    },
    nextTitle: "Rootin",
    nextSlug: "rootin",
  },
  rootin: {
    tags: ["IoT", "Flutter", "AI/ML", "Mobile"],
    title: "Rootin:",
    titleHighlight: "AI Plant Care",
    subtitle:
      "An AI-powered plant care companion combining IoT BLE sensors, real-time moisture monitoring, and ML-based plant identification—from problem discovery to production Flutter app.",
    heroImage:
      "https://placehold.co/1200x700/4CAF50/f5f5f5?text=Rootin+Plant+Care",
    heroImageAlt:
      "Rootin — plant care app with moisture tracking and AI identification",
    overview: {
      challenge:
        "Plant owners struggle with when and how much to water; without real-time data, care is guesswork leading to overwatering, underwatering, and plant loss. Environmental factors and species-specific needs make one-size-fits-all approaches unreliable.",
      role: [
        "Full-Stack Mobile Developer",
        "IoT & Backend Integration",
        "BLE Protocol & Sensor Pairing",
        "ML / Plant Identification",
      ],
      metrics: [
        { value: "95%", label: "Notification delivery rate" },
        { value: "99%+", label: "BLE connection success" },
        { value: "<2s", label: "Sensor-to-app data latency" },
      ],
    },
    phase01: {
      label: "Phase 01",
      title: "Research &\nProblem Discovery",
      subtitle:
        "User and technical research: visual plant ID preferred over manual search, real-time moisture reduces anxiety, and BLE/Firebase must handle iOS/Android differences and offline scenarios.",
      cards: [
        {
          icon: "fa-solid fa-users",
          title: "User Behavior",
          description:
            "Visual plant identification adoption high; context-aware notifications outperform generic reminders; users want 7-day health trends, not just current status; English/Korean support required.",
        },
        {
          icon: "fa-solid fa-microchip",
          title: "Technical Requirements",
          description:
            "BLE handling for iOS vs Android; Firebase offline error handling; lightweight on-device ML; notifications in foreground, background, and terminated states; intuitive sensor pairing.",
        },
        {
          icon: "fa-solid fa-leaf",
          title: "Problem Framing",
          description:
            "Transform plant care from guesswork into data-driven routine with IoT sensors and AI-powered insights for species-specific, environment-aware guidance.",
        },
      ],
    },
    phase02: {
      label: "Phase 02",
      title: "UX Architecture &\nUser Flows",
      steps: [
        {
          title: "Plant Onboarding",
          description:
            "Onboarding → camera/manual plant selection → BLE sensor discovery and pairing → WiFi credential transmission → sensor association and confirmation.",
        },
        {
          title: "Notification System",
          description:
            "FCM token registration → backend moisture analysis → context-aware triggers (underwater, ideal, overwater) → foreground/background handling and deep link to plant screen.",
        },
        {
          title: "Real-Time Monitoring",
          description:
            "Sensor → backend → Firestore; app fetches latest and history; real-time status (ideal/underwater/overwater); 7-day FL Chart trends and health diagnostics.",
        },
      ],
      image:
        "https://placehold.co/800x600/4CAF50/f5f5f5?text=Rootin+Flows",
      imageAlt: "Rootin — onboarding, notifications, and monitoring flows",
    },
    phase03: {
      label: "Phase 03",
      title: "Design System &\nComponents",
      subtitle:
        "Primary Green #4CAF50, status colors (Ideal #17C6ED, Underwater #FF9800, Overwater #F44336). Plant cards, status icons, bottom nav, FL Chart widgets, BLE modals.",
      images: [
        {
          src: "https://placehold.co/600x400/4CAF50/f5f5f5?text=Color+System",
          alt: "Rootin color system and status indicators",
        },
        {
          src: "https://placehold.co/600x400/17C6ED/f5f5f5?text=Plant+Cards",
          alt: "Plant cards and chart components",
        },
        {
          src: "https://placehold.co/600x400/FF9800/f5f5f5?text=BLE+Modals",
          alt: "BLE search and pairing modals",
        },
      ],
    },
    phase04: {
      label: "Phase 04",
      title: "Full-Stack Implementation",
      stack: [
        { label: "Mobile", value: "Flutter, Dart" },
        { label: "Backend", value: "Firebase (Auth, Firestore, FCM)" },
        { label: "IoT", value: "BLE, custom sensors" },
        { label: "AI/ML", value: "TensorFlow Lite, OpenAI" },
      ],
      crawlerTitle: "BLE, FCM & On-Device ML",
      crawlerDescription:
        "Custom BLE service with retry logic and platform-specific permission handling; FCM with foreground/background/terminated handling for 95% delivery. TensorFlow Lite for plant ID with API fallback; FL Chart for 7-day moisture trends and efficient data pipeline.",
      crawlerTags: ["Flutter", "BLE", "Firebase", "TensorFlow Lite", "FCM"],
    },
    nextTitle: "Bestia",
    nextSlug: "bestia",
  },
};

function defaultContent(
  slug: string,
  title: string,
  image: string,
  imageAlt: string
): CaseStudyDetailContent {
  return {
    tags: ["Case Study"],
    title,
    subtitle: "An in-depth look at the process, research, and outcomes.",
    heroImage: image,
    heroImageAlt: imageAlt,
    overview: {
      challenge: "Building a product that meets user and business goals.",
      role: ["Lead Designer", "Research"],
      metrics: [
        { value: "—", label: "Impact" },
        { value: "—", label: "Completion" },
      ],
    },
    nextSlug: undefined,
    nextTitle: undefined,
  };
}

export function getCaseStudyBySlug(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export function getCaseStudyContent(
  slug: string,
  title: string,
  image: string,
  imageAlt: string
): CaseStudyDetailContent {
  const custom = CONTENT[slug];
  return custom ?? defaultContent(slug, title, image, imageAlt);
}
