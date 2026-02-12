import { Project } from '@/types/project';

/**
 * Project Summaries - Lightweight metadata for project cards and listings
 * 
 * This file contains lightweight summaries for displaying projects in cards and lists.
 * The main source of truth for detailed project content is in `content/projects/`.
 * 
 * Use this for:
 * - Project card displays
 * - Project listings
 * - Quick project lookups by slug
 * 
 * For detailed project information, see `content/projects/`.
 */
export const projectSummaries: Project[] = [
  {
    title: "Bestia",
    description: "CRM tech for real estate agents that revolutionizes workflow efficiency, reducing manual work and enabling agents to handle significantly more leads.",
    detailedDescription: "Bestia is a cutting-edge CRM platform designed specifically for real estate agents. As the designer and frontend developer, I led the design and frontend integration, working closely with real estate agents weekly for design feedback. The platform was showcased at LA Tech Week, where it generated 300 real estate agents on the waiting list through compelling design and seamless frontend integration. The system dramatically improves agent productivity by automating workflows and eliminating manual data entry.",
    image: "",
    images: [],
    technologies: [
      "Next.js 15.4.6",
      "React 19.1.0",
      "TypeScript 5.9.3",
      "Tailwind CSS 4.1.12",
      "Turbopack",
      "Figma",
      "UI/UX Design",
      "RESTful APIs",
      "JWT Authentication",
      "Twilio Integration",
      "Google Maps API",
      "Recharts",
      "CRM Systems",
      "Real-time Features",
      "Responsive Design"
    ],
    tools: [
      "Figma",
      "React",
      "Next.js",
      "VS Code",
      "Git & GitHub",
      "Design Systems",
      "Prototyping Tools",
      "User Research Tools"
    ],
    hardSkills: [
      "Full-Stack Development",
      "Next.js App Router",
      "React 19 with Hooks",
      "TypeScript (Strict Mode)",
      "UI/UX Design",
      "RESTful API Design",
      "JWT Authentication",
      "Third-Party API Integration",
      "State Management (Context API)",
      "Component Architecture",
      "Performance Optimization",
      "CRM Systems",
      "User Research",
      "Design Systems",
      "Rapid Prototyping",
      "Cross-functional Collaboration"
    ],
    softSkills: [
      "Client Collaboration",
      "User Feedback Integration",
      "Fast Delivery",
      "Design Thinking",
      "Stakeholder Communication",
      "Agile Development",
      "Problem Solving"
    ],
    features: [
      "Full Lead CRUD operations with advanced filtering",
      "20+ custom configurable lead statuses with drag-and-drop reordering",
      "Property management with MLS integration and Zestimate",
      "Financial version tracking with MAO calculator",
      "Contact management with multiple contacts per lead",
      "Email system with templates and tracking",
      "SMS and Voice integration via Twilio",
      "Call recordings and conference call support",
      "Notes and activity tracking with comprehensive logs",
      "Template management for emails and SMS",
      "Team management with role-based access control",
      "Analytics dashboard with Recharts visualization",
      "60+ React components with feature-based architecture",
      "40+ API endpoints with RESTful design",
      "20+ custom hooks for business logic",
      "JWT authentication with token refresh",
      "Google Maps API integration for address autocomplete"
    ],
    metrics: [
      "Saves 2.5–4 hours per agent per day",
      "Cuts lead workflow time by 40–60%",
      "Reduces offer preparation time by 85–90%",
      "Eliminates 70–90% of manual data entry",
      "Enables agents to handle 2–3× more leads per day",
      "300 real estate agents on waiting list from LA Tech Week"
    ],
    highlights: [
      "Led design and frontend development for CRM platform",
      "Generated 300 real estate agents on waiting list at LA Tech Week",
      "Worked directly with real estate agents weekly for design feedback",
      "Delivered fast integration and rapid deployment to companies",
      "Created intuitive user experience for complex CRM workflows",
      "Established design system for consistent user experience"
    ],
    challenges: [
      "Understanding complex real estate agent workflows",
      "Balancing automation with user control",
      "Fast delivery while maintaining quality",
      "Integrating feedback from multiple stakeholders",
      "Designing for efficiency and ease of use"
    ],
    solutions: [
      "Conducted weekly design feedback sessions with real estate agents",
      "Iterated quickly based on user needs and pain points",
      "Created streamlined workflows reducing manual steps",
      "Implemented design system for rapid development",
      "Focused on user-centric design principles"
    ],
    github: "",
    liveUrl: "",
    address: "Manhattan Beach, California",
    roles: [
      {
        area: "UI/UX Design",
        percentage: 70,
        description: "Led design strategy, user research, and interface design with weekly agent feedback"
      },
      {
        area: "Frontend Development",
        percentage: 80,
        description: "Fast integration and frontend implementation with rapid delivery"
      },
      {
        area: "User Research",
        percentage: 90,
        description: "Weekly collaboration with real estate agents for design feedback and iteration"
      }
    ]
  },
  {
    title: "ChildNet Korea",
    description: "High-risk child-protection platform built with zero-trust security architecture, connecting children, educators, counselors, caseworkers, and police officers through a secure, role-based system.",
    detailedDescription: "ChildNet Korea is a comprehensive child-protection platform built with enterprise-grade zero-trust security architecture. The platform implements PostgreSQL Row-Level Security (RLS) with 46 policies, strict Role-Based Access Control (RBAC), field-level data masking, and event-level visibility rules. Built as a modern full-stack application with Next.js 15 frontend, NestJS backend API, and a separate FastAPI microservice for AI processing, ChildNet Korea demonstrates best practices in secure application development, microservices architecture, and database-level security enforcement.",
    image: "/assets/images/projects/childnet.png",
    coverVideo: "/assets/images/childnetcover.mp4",
    images: [],
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "FastAPI",
      "Python",
      "Supabase Auth",
      "JWT",
      "PostgreSQL RLS",
      "Microservices Architecture"
    ],
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "FastAPI",
      "VS Code",
      "Git & GitHub",
      "Supabase",
      "Postman"
    ],
    hardSkills: [
      "Full-Stack Development",
      "Zero-Trust Security Architecture",
      "PostgreSQL Row-Level Security (RLS)",
      "Role-Based Access Control (RBAC)",
      "Database Security",
      "Microservices Architecture",
      "TypeScript Development",
      "API Design",
      "Authentication & Authorization",
      "Field-Level Data Masking"
    ],
    softSkills: [
      "Security-First Thinking",
      "System Architecture Design",
      "Complex Problem Solving",
      "Compliance & Audit Requirements",
      "Multi-Stakeholder Collaboration",
      "Technical Documentation"
    ],
    features: [
      "46 PostgreSQL RLS policies protecting 12 sensitive tables",
      "6 distinct user roles with role-specific dashboards and UIs",
      "Zero-trust security architecture with defense-in-depth",
      "Field-level data masking based on user role",
      "Role-based theming system with instant theme switching",
      "Comprehensive audit trail with 100% API request logging",
      "Timeline event management with 5 event types",
      "Secure messaging system with role-based access",
      "AI service separation with mandatory data redaction",
      "Admin role explicitly blocked from case content",
      "40+ RESTful API endpoints",
      "45+ frontend files with role-specific layouts"
    ],
    metrics: [
      "46 RLS policies protecting sensitive data at database level",
      "12 database tables with comprehensive relationships",
      "40+ API endpoints with full CRUD operations",
      "85+ TypeScript files in backend with complete type safety",
      "45+ frontend files including components, layouts, and pages",
      "6 role-specific dashboards with tailored UX",
      "100% API request audit coverage",
      "Zero data breaches: Admin role completely blocked from case content"
    ],
    highlights: [
      "Implemented enterprise-grade zero-trust security architecture",
      "Created 46 database-level security policies with RLS",
      "Built role-based theming system with 6 distinct themes",
      "Designed comprehensive RBAC system with field-level masking",
      "Separated AI processing into secure microservice",
      "Achieved 100% audit coverage for compliance requirements",
      "Zero data leakage between roles with multi-layered security"
    ],
    challenges: [
      "Implementing PostgreSQL RLS with proper context management",
      "Ensuring zero data leakage between roles while maintaining usability",
      "Building role-specific UIs that feel native to each user type",
      "Separating AI processing while ensuring data security",
      "Managing complex permission matrix across 6 roles"
    ],
    solutions: [
      "Created AsyncLocalStorage-based RequestContext system for RLS",
      "Implemented multi-layered security: RLS, RBAC, and field masking",
      "Developed role-based theming system with CSS variables",
      "Architected separate FastAPI microservice with mandatory redaction",
      "Built comprehensive permission matrix with database-level enforcement"
    ],
    github: "https://github.com/nukktae/childnet.git",
    liveUrl: "",
    address: "Seoul, South Korea",
    roles: [
      {
        area: "Full-Stack Architecture & Security",
        percentage: 100,
        description: "Designed and implemented zero-trust security architecture with PostgreSQL RLS, RBAC, and field-level masking"
      },
      {
        area: "Frontend Development & UX",
        percentage: 100,
        description: "Built role-based theming system, 6 role-specific layouts, and 45+ frontend files"
      }
    ]
  },
  {
    title: "KSPO Sports Platform",
    description: "AI-powered sports facility discovery and recommendation platform for Korea Sports Promotion Organization, helping users find nearby facilities with personalized recommendations based on location, weather, and crowd predictions.",
    detailedDescription: "KSPO Sports Platform is a comprehensive AI-powered sports facility discovery and recommendation platform built for Korea Sports Promotion Organization (KSPO). The platform combines real-time facility data from Seoul public sports facilities with AI-powered recommendations using GPT-4o, weather-aware suggestions, crowd prediction algorithms, and interactive maps with geolocation support. Built as a full-stack monorepo with Next.js 15 frontend, NestJS backend, FastAPI AI service, and Supabase PostgreSQL database.",
    image: "/assets/images/sports/sportscover.png",
    images: [
      "/assets/images/sports/dashboard.png",
      "/assets/images/sports/airesult.png",
      "/assets/images/sports/mapscreen.png",
      "/assets/images/sports/graphexercise.png"
    ],
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "FastAPI",
      "Python",
      "Supabase",
      "PostgreSQL",
      "Drizzle ORM",
      "GPT-4o",
      "scikit-learn",
      "Google Maps API",
      "Weather API"
    ],
    tools: [
      "Next.js",
      "React",
      "NestJS",
      "FastAPI",
      "Python",
      "Supabase",
      "VS Code",
      "Git & GitHub",
      "Postman"
    ],
    hardSkills: [
      "Full-Stack Development",
      "Monorepo Architecture",
      "AI/ML Integration",
      "RESTful API Design",
      "Database Design",
      "ETL Pipelines",
      "Machine Learning",
      "Geolocation Services",
      "Weather API Integration"
    ],
    softSkills: [
      "System Architecture Design",
      "Complex Problem Solving",
      "Multi-Service Coordination",
      "Data Processing",
      "Technical Documentation"
    ],
    features: [
      "AI-powered personalized facility recommendations using GPT-4o",
      "Weather-aware facility and program suggestions",
      "Crowd prediction algorithms based on time, day, and weather",
      "Interactive maps with geolocation support",
      "Real-time facility data from Seoul public sports facilities",
      "Multi-factor scoring system (distance, accessibility, category, weather, risk)",
      "Natural Korean coaching-style recommendation explanations",
      "ETL pipelines for importing facility data from CSV",
      "Modular backend architecture (facilities, programs, recommend, weather, user modules)",
      "Responsive frontend with modern UI/UX"
    ],
    metrics: [
      "Full-stack monorepo with 4 services (frontend, backend, AI service, shared packages)",
      "Multiple RESTful API endpoints across 5 backend modules",
      "AI-powered recommendations with multi-factor scoring",
      "Real-time facility data integration from Seoul public data",
      "Weather-aware and crowd-prediction features",
      "Interactive map integration with geolocation"
    ],
    highlights: [
      "Built comprehensive AI-powered sports facility discovery platform",
      "Integrated GPT-4o for personalized, natural Korean recommendations",
      "Developed ML-based scoring algorithms for facility and program matching",
      "Created weather-aware and crowd-prediction features",
      "Architected scalable monorepo structure with clean separation of concerns",
      "Implemented ETL pipelines for data import and processing"
    ],
    challenges: [
      "Integrating multiple services (frontend, backend, AI service) in monorepo",
      "Building accurate crowd prediction algorithms",
      "Processing and importing large CSV datasets",
      "Creating personalized recommendations with multiple factors",
      "Implementing weather-aware suggestions"
    ],
    solutions: [
      "Designed modular monorepo architecture with shared packages",
      "Developed weighted scoring system considering multiple factors",
      "Built efficient ETL pipelines for data processing",
      "Integrated GPT-4o for natural language recommendations",
      "Created ML-based algorithms using scikit-learn and pandas"
    ],
    github: "",
    liveUrl: "https://frontend-ruby-xi-69.vercel.app/home",
    address: "Seoul, South Korea",
    roles: [
      {
        area: "Full-Stack Development",
        percentage: 100,
        description: "Architected and implemented entire monorepo with frontend, backend, AI service, and shared packages"
      },
      {
        area: "AI/ML Integration",
        percentage: 100,
        description: "Integrated GPT-4o API and built ML-based scoring algorithms for recommendations"
      }
    ]
  },
  {
    title: "AMORE Agent 05",
    description: "Intelligent e-commerce analytics platform for Shopee product analysis, enabling brands to extract, analyze, and gain actionable insights from product reviews through AI-powered analysis and automated monitoring.",
    detailedDescription: "AMORE AI Insights Hub is an intelligent e-commerce analytics platform designed specifically for Shopee product analysis. The platform enables brands to extract, analyze, and gain actionable insights from product reviews through multiple ingestion methods, AI-powered analysis, and automated monitoring. Built with a modern React frontend and Express.js backend, the system supports three distinct data ingestion modes: browser-based bookmarklet scraping, JSON import, and sample data loading. The platform leverages OpenAI's GPT-4o-mini to generate comprehensive product insights including sentiment analysis, trend identification, feature gaps, and competitor comparisons.",
    image: "/assets/images/amora-agent/amoragentcover.png",
    images: [
      "/assets/images/amora-agent/Dashboard Screenshot.png",
      "/assets/images/amora-agent/Insight Report Screenshot.png",
      "/assets/images/amora-agent/New Ingestion Page.png",
      "/assets/images/amora-agent/Review Explorer.png",
      "/assets/images/amora-agent/Settings.png"
    ],
    technologies: [
      "React",
      "Vite",
      "Express.js",
      "Node.js",
      "Playwright",
      "OpenAI GPT-4o-mini",
      "Axios",
      "CSS Modules",
      "Railway",
      "Vercel"
    ],
    tools: [
      "React",
      "Vite",
      "Express.js",
      "Playwright",
      "VS Code",
      "Git & GitHub",
      "Postman",
      "Railway",
      "Vercel"
    ],
    hardSkills: [
      "Full-Stack Development",
      "Web Scraping",
      "Browser Automation",
      "AI Integration",
      "Data Normalization",
      "RESTful API Design",
      "Delta-Sync Technology",
      "Product Monitoring",
      "E-commerce Analytics"
    ],
    softSkills: [
      "System Architecture Design",
      "Complex Problem Solving",
      "Data Processing",
      "Product Engineering",
      "Technical Documentation"
    ],
    features: [
      "3 data ingestion modes: browser bookmarklet scraping, JSON import, and sample data",
      "AI-powered insights generation using GPT-4o-mini for product analysis",
      "Automated product monitoring with configurable frequency and alert triggers",
      "Delta-sync technology for incremental review updates without full resync",
      "Comprehensive dashboard with KPI tiles, rating distribution, and sentiment analysis",
      "Review explorer with search, filter, and pagination capabilities",
      "Real-time alerting for negative sentiment shifts and review spikes",
      "Keyword tracking and trend analysis",
      "Bookmarklet injection system for in-browser scraping",
      "Data normalization pipeline handling inconsistent Shopee API responses"
    ],
    metrics: [
      "80% reduction in manual review analysis time",
      "90% reduction in redundant data processing via delta-sync",
      "3 ingestion modes supporting diverse user workflows",
      "400+ reviews per scraping session",
      "Real-time monitoring with configurable frequency",
      "Production-ready deployment on Railway and Vercel"
    ],
    highlights: [
      "Built comprehensive e-commerce analytics platform for Shopee product analysis",
      "Integrated AI-powered insights generation with GPT-4o-mini",
      "Developed bookmarklet injection system for seamless browser-based scraping",
      "Implemented delta-sync technology for efficient data processing",
      "Created automated monitoring system with multi-trigger alerting",
      "Designed intuitive multi-page dashboard with comprehensive analytics"
    ],
    challenges: [
      "Handling inconsistent Shopee API responses and data normalization",
      "Browser-based scraping with authentication and rate limiting",
      "Implementing efficient delta-sync to avoid duplicate processing",
      "Real-time monitoring without overwhelming API resources"
    ],
    solutions: [
      "Built comprehensive normalization pipeline with multiple fallback strategies",
      "Developed bookmarklet injection system running in authenticated browser sessions",
      "Implemented review ID tracking for delta-sync filtering",
      "Created configurable monitoring service with lightweight API calls"
    ],
    github: "",
    liveUrl: "",
    address: "Seoul, South Korea",
    roles: [
      {
        area: "Full-Stack Development",
        percentage: 100,
        description: "Architected and implemented complete backend API and React frontend with multi-page dashboard"
      },
      {
        area: "Product Engineering",
        percentage: 100,
        description: "Designed user flows, settings management, and monitoring alert system"
      }
    ]
  },
  {
    title: "Handiers Inc",
    description: "UI/UX Designer leading frontend development for mobile apps and marketing website, delivering consistent user experiences across platforms.",
    detailedDescription: "Led comprehensive UI/UX design and frontend development for Handiers Inc, a service marketplace platform. Designed and developed frontend for two mobile apps and a marketing website, delivering consistent UI across platforms. Spearheaded major UX redesigns for chat, booking, and quote request features, enhancing clarity and conversion through data-backed decisions.",
    image: "/assets/images/projects/handiers.png",
    images: [],
    technologies: [
      "Flutter & Dart",
      "Figma",
      "React/Next.js",
      "TypeScript",
      "Responsive Design",
      "Mobile UI",
      "Real-time Features",
      "AI Integration"
    ],
    tools: [
      "Figma",
      "Flutter",
      "VS Code",
      "Git & GitHub",
      "Analytics Tools",
      "Design Systems",
      "Prototyping Tools"
    ],
    hardSkills: [
      "Mobile App Development",
      "Frontend Development",
      "UI/UX Design",
      "Cross-platform Development",
      "Real-time Implementation",
      "Camera Integration",
      "AI Feature Integration",
      "Responsive Web Design"
    ],
    softSkills: [
      "Leadership",
      "Cross-functional Collaboration",
      "Data-driven Decision Making",
      "Project Management",
      "Stakeholder Communication",
      "Design Thinking",
      "User Research"
    ],
    features: [
      "Consistent UI across mobile apps and web platform",
      "Real-time chat functionality with enhanced UX",
      "Streamlined booking flow with improved conversion",
      "Intuitive quote request system",
      "Camera input integration for service requests",
      "AI-powered estimation features",
      "Responsive design across all devices",
      "Data-driven UI optimizations"
    ],
    metrics: [
      "Improved conversion rates through UX redesigns",
      "Enhanced user clarity and engagement",
      "Consistent UI delivery across 3 platforms",
      "Real-time feature implementation",
      "Cross-platform design system adoption"
    ],
    highlights: [
      "Led major UX redesigns for core user flows",
      "Designed and developed frontend for multiple platforms",
      "Collaborated directly with CEO on feature priorities",
      "Implemented real-time features with backend team",
      "Delivered data-backed design decisions",
      "Created consistent design language across platforms"
    ],
    challenges: [
      "Maintaining UI consistency across multiple platforms",
      "Redesigning complex user flows for better conversion",
      "Integrating real-time features seamlessly",
      "Balancing user needs with business requirements",
      "Implementing camera and AI features in mobile apps"
    ],
    solutions: [
      "Developed comprehensive design system for consistency",
      "Conducted user research and A/B testing for redesigns",
      "Collaborated closely with backend team for real-time features",
      "Used data analytics to inform design decisions",
      "Built robust mobile components for camera and AI integration"
    ],
    github: "",
    liveUrl: "https://handiers.com",
    address: "Torrance, California",
    roles: [
      {
        area: "UI/UX Design",
        percentage: 60,
        description: "Leading design strategy, user research, and interface design"
      },
      {
        area: "Frontend Development",
        percentage: 40,
        description: "Mobile app development and website implementation"
      }
    ]
  },
  {
    title: "Rootin",
    description: "A sophisticated plant care automation system combining IoT hardware with a Flutter-powered iOS app for intelligent plant monitoring and maintenance.",
    detailedDescription: "An innovative IoT solution that transforms plant care through intelligent monitoring and automated maintenance. The system combines custom-built hardware sensors with an intuitive Flutter iOS interface, leveraging AI for plant identification and health diagnostics.",
    image: "/assets/images/rootin.jpeg",
    images: [
      "/assets/images/add-plant-screen.jpg",
      "/assets/images/identify-plant-screen.jpg",
      "/assets/images/home-screen.jpg",
      "/assets/images/watering-screen.jpg",
      "/assets/images/plant-detail-screen.jpg",
      "/assets/images/soil-moisture-screen.jpg",
      "/assets/images/plant-ai-screen.jpg"
    ],
    technologies: [
      "Flutter & Dart",
      "Firebase Realtime DB",
      "TensorFlow Lite",
      "REST APIs",
      "WebSockets",
      "Material Design",
      "Custom Animations"
    ],
    tools: [
      "VS Code",
      "Xcode",
      "Apple Developer Account",
      "Firebase Console",
      "Git & GitHub",
      "Figma",
      "Adobe XD"
    ],
    softSkills: [
      "UI/UX Design Principles",
      "User Research",
      "Technical Documentation",
      "Problem-solving",
      "Cross-functional Collaboration",
      "Agile Development"
    ],
    hardSkills: [
      "Mobile App Development",
      "State Management",
      "API Integration",
      "Custom Animations",
      "Responsive Design",
      "Cross-platform Development",
      "UI Component Design"
    ],
    metrics: [
      "User Satisfaction: 90%",
      "User Engagement: +40%",
      "Error Rate: -30%",
      "UI Response Time: -25%",
      "Widget Reusability: 20+ components"
    ],
    highlights: [
      "Led the complete UI/UX redesign of the plant care application",
      "Developed comprehensive design system with reusable components",
      "Implemented offline-first architecture for seamless user experience",
      "Integrated real-time data from soil moisture sensors into the app",
      "Created intuitive onboarding flow reducing user drop-off",
      "Established automated UI testing framework"
    ],
    challenges: [
      "Complex UI state management",
      "Real-time data visualization",
      "Cross-platform UI consistency",
      "Intuitive gesture controls",
      "Seamless offline experience"
    ],
    solutions: [
      "Implemented BLoC pattern for state management",
      "Created custom animated charts and graphs",
      "Developed platform-specific UI adaptations",
      "Built intuitive gesture-based interactions",
      "Designed efficient local data caching system"
    ],
    features: [
      "AI-powered plant identification",
      "Automated watering schedule creation",
      "Real-time plant health monitoring",
      "Customizable care reminders",
      "Detailed plant care history",
      "Offline mode functionality",
      "Multi-plant management dashboard",
      "Environmental condition tracking"
    ],
    github: "https://github.com/nukktae/rootin",
    liveUrl: "https://plant-care-demo.vercel.app",
    address: "Irvine, California",
    roles: [
      {
        area: "UI/UX Design",
        percentage: 45,
        description: "User research, wireframing, and interaction design"
      },
      {
        area: "Frontend Development",
        percentage: 100,
        description: "Complete implementation of Flutter mobile app"
      },
      {
        area: "System Architecture",
        percentage: 70,
        description: "IoT system design and integration"
      }
    ]
  },
  {
    title: "AWS Content Moderation",
    description: "Real-time video content moderation platform powered by AWS Rekognition, automatically detecting and flagging inappropriate content in live video streams with <200ms latency.",
    detailedDescription: "AWS Content Moderation System is a real-time video content moderation platform powered by AWS Rekognition, designed to automatically detect and flag inappropriate content in live video streams. The system processes video frames at 30 FPS, analyzes them using machine learning models, and provides instant alerts with confidence metrics. Built with a serverless architecture using AWS CDK for Infrastructure as Code, the platform combines Flask for real-time video processing, AWS Lambda for serverless compute, Kinesis Video Streams for video ingestion, DynamoDB for result storage, and CloudWatch for comprehensive monitoring and dashboards.",
    image: "/assets/images/aws-architecture.png",
    images: [
      "/assets/images/aws-dashboard.png",
      "/assets/images/aws-metrics.png",
      "/assets/images/aws-analysis.png",
      "/assets/images/awsmoderation.mp4"
    ],
    technologies: [
      "AWS CDK",
      "AWS Lambda",
      "Amazon Rekognition",
      "Amazon Kinesis Video Streams",
      "Amazon DynamoDB",
      "Amazon CloudWatch",
      "Amazon SNS",
      "Amazon EventBridge",
      "API Gateway",
      "Flask",
      "OpenCV",
      "Python",
      "Node.js",
      "TypeScript",
      "Chart.js"
    ],
    tools: [
      "AWS Console",
      "AWS CDK",
      "VS Code",
      "Git",
      "GitHub",
      "Postman",
      "Python",
      "Node.js"
    ],
    hardSkills: [
      "AWS Cloud Architecture",
      "Serverless Development",
      "Infrastructure as Code",
      "Video Processing",
      "Machine Learning Integration",
      "Real-time Systems",
      "Python Development",
      "TypeScript Development",
      "API Development"
    ],
    softSkills: [
      "System Architecture Design",
      "Complex Problem Solving",
      "Technical Documentation",
      "DevOps Practices",
      "Cloud Infrastructure Management"
    ],
    features: [
      "Real-time video frame processing at 30 FPS with <200ms latency",
      "AI-powered content detection with 50+ content categories",
      "Automated alerting system with SNS notifications",
      "Interactive dashboard with real-time video feed and moderation results",
      "Chart.js visualizations for confidence metrics and trends",
      "Kinesis Video Streams for scalable video ingestion",
      "DynamoDB for low-latency result storage",
      "CloudWatch dashboards for comprehensive monitoring",
      "EventBridge rules for automated stream processing",
      "Frame sampling strategy for cost optimization"
    ],
    metrics: [
      "<200ms latency per frame for real-time content moderation",
      "30 FPS video stream processing with 1 FPS sampling",
      "99.9% system uptime with serverless architecture",
      "80% reduction in infrastructure setup time using AWS CDK",
      "Real-time dashboard updates with 1-second refresh intervals",
      "50+ content categories detected with confidence scoring",
      "Automated alerting system with SNS notifications"
    ],
    highlights: [
      "Built real-time video content moderation system with AWS services",
      "Achieved <200ms latency per frame for real-time processing",
      "Implemented serverless architecture with AWS CDK Infrastructure as Code",
      "Created comprehensive monitoring dashboard with Chart.js visualizations",
      "Developed automated alerting system for flagged content",
      "Designed event-driven architecture with EventBridge and Lambda"
    ],
    challenges: [
      "Real-time video processing with low latency requirements",
      "Managing complex AWS infrastructure with multiple services",
      "Synchronizing real-time updates between backend and frontend",
      "Handling Kinesis Video Streams media format conversion",
      "DynamoDB query performance for time-based filtering"
    ],
    solutions: [
      "Implemented frame sampling strategy (1 FPS) to balance accuracy and cost",
      "Adopted AWS CDK with TypeScript for Infrastructure as Code",
      "Developed event-driven architecture using CustomEvent API",
      "Created utility functions to convert KVS media streams to readable buffers",
      "Created Global Secondary Index on timestamp for efficient queries"
    ],
    github: "https://github.com/2024PBL-AWS-project/ContentModeration",
    liveUrl: "",
    address: "Irvine, California",
    roles: [
      {
        area: "Backend & Infrastructure Engineer",
        percentage: 100,
        description: "Designed and implemented serverless architecture using AWS CDK, Flask, and Lambda functions"
      },
      {
        area: "Full-Stack Developer",
        percentage: 100,
        description: "Built interactive dashboard with real-time video feed, Chart.js visualizations, and event-driven updates"
      }
    ]
  },
  {
    title: "MajorMatch AI",
    description: "Intelligent career guidance platform that revolutionizes how students discover their ideal academic path using AI-powered assessments, interactive challenges, and personalized mentorship.",
    detailedDescription: "MajorMatch AI is an intelligent career guidance platform that revolutionizes how students discover their ideal academic path. By combining cutting-edge AI technology with personalized mentorship and hands-on challenges, the platform provides a comprehensive solution for career exploration and decision-making. The platform leverages OpenAI's GPT-4 to analyze student responses from comprehensive assessments, generating personalized major recommendations with detailed career paths, required skills, and salary expectations. Students can then explore these recommendations through interactive challenges across six major fields: Computer Science, Business, Psychology, Engineering, Design, and Data Science.",
    image: "/assets/images/majorai/majoraicover.png",
    images: [
      "/assets/images/majorai/assessment.png",
      "/assets/images/majorai/career challenges.png",
      "/assets/images/majorai/careerresult.png",
      "/assets/images/majorai/mentors.png",
      "/assets/images/majorai/questions.png"
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Express.js",
      "PostgreSQL",
      "Firebase Authentication",
      "OpenAI GPT-4",
      "Redux Toolkit",
      "Tailwind CSS",
      "Framer Motion",
      "Nodemailer",
      "Multer"
    ],
    tools: [
      "VS Code",
      "Git",
      "GitHub",
      "Postman",
      "Docker",
      "Figma",
      "npm"
    ],
    hardSkills: [
      "Full Stack Development",
      "AI Integration",
      "Cloud Architecture",
      "API Development",
      "Database Design",
      "UI/UX Implementation"
    ],
    softSkills: [
      "Project Management",
      "User Research",
      "Technical Documentation",
      "Problem Solving",
      "Team Leadership"
    ],
    features: [
      "20-question comprehensive assessment with AI-powered major recommendations",
      "20+ interactive challenges across 6 major fields (CS, Business, Psychology, Engineering, Design, Data Science)",
      "Mentorship booking system with calendar integration and email notifications",
      "Profile management with photo uploads and progress tracking",
      "AI chat assistant for challenge guidance and career questions",
      "Real-time progress tracking with statistics dashboard",
      "Responsive design with smooth animations using Framer Motion"
    ],
    metrics: [
      "Full-stack application with complete frontend and backend implementation",
      "AI-powered assessment system generating personalized major recommendations",
      "20+ interactive challenges across 6 major career fields",
      "Mentorship booking system with email notifications",
      "Type-safe codebase with TypeScript throughout",
      "Scalable database architecture with proper migrations"
    ],
    highlights: [
      "Built comprehensive career guidance platform with AI integration",
      "Implemented GPT-4 API for personalized major recommendations",
      "Created interactive challenge system with progress tracking",
      "Developed mentorship booking system with email notifications",
      "Designed responsive UI with Framer Motion animations",
      "Established secure authentication with Firebase and PostgreSQL"
    ],
    challenges: [
      "Integrating OpenAI GPT-4 API with structured JSON responses",
      "Managing file uploads securely with proper storage",
      "Synchronizing authentication state between Firebase and PostgreSQL",
      "Building scalable challenge system with multiple fields",
      "Implementing real-time email notifications",
      "Creating smooth animations without performance issues"
    ],
    solutions: [
      "Implemented robust prompt engineering with JSON schema definitions",
      "Built Multer-based file upload system with UUID-based naming",
      "Developed middleware system for Firebase token verification",
      "Created modular challenge data structure with TypeScript interfaces",
      "Integrated Nodemailer with proper email templating",
      "Used Framer Motion for optimized declarative animations"
    ],
    github: "",
    liveUrl: "",
    address: "Seoul, South Korea",
    roles: [
      {
        area: "Full-Stack Developer",
        percentage: 100,
        description: "Architected and developed entire full-stack application with Express.js, PostgreSQL, and React"
      },
      {
        area: "Frontend Engineer",
        percentage: 100,
        description: "Developed responsive React application with Redux Toolkit, Framer Motion, and Tailwind CSS"
      }
    ]
  },
  {
    title: "MovePARK",
    description: "Intelligent navigation and event planning platform integrating real-time traffic, weather, parking, and event data from multiple Korean public data APIs for Olympic Park facilities.",
    detailedDescription: "MovePARK is an intelligent navigation and event planning platform that helps users plan their journey to events at Olympic Park facilities by integrating real-time traffic, weather, parking, and event data from multiple Korean public data APIs. The platform features smart departure time calculation based on real-time traffic conditions, weather forecasts, and event start times. It provides multi-modal transit comparison (car, subway, bus, bike, walking) with weather-aware recommendations, predictive parking congestion modeling, and interactive Leaflet-based maps with route visualization.",
    image: "/assets/images/movepark/map.png",
    images: [
      "/assets/images/movepark/dashboard.png",
      "/assets/images/movepark/route.png"
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Leaflet",
      "React-Leaflet",
      "Seoul Open Data API",
      "KMA Weather API",
      "Seoul Parking API",
      "KSPO Facilities API"
    ],
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Leaflet",
      "VS Code",
      "Git & GitHub",
      "Vercel"
    ],
    hardSkills: [
      "Full-Stack Development",
      "Public Data API Integration",
      "Geospatial Calculations",
      "Algorithm Design",
      "Data Normalization",
      "Real-time Data Processing",
      "Map Visualization",
      "Performance Optimization"
    ],
    softSkills: [
      "System Architecture Design",
      "Complex Problem Solving",
      "Algorithmic Thinking",
      "Data Integration",
      "Technical Documentation"
    ],
    features: [
      "Smart departure time calculation with multi-factor algorithm",
      "Predictive parking congestion modeling with ML-like algorithms",
      "Weather-aware transit mode recommendations across 5+ modes",
      "Interactive Leaflet maps with markers, routes, and geolocation",
      "Real-time traffic data integration from Seoul Open Data API",
      "3-day weather forecast with travel risk assessment",
      "Event-driven planning system with automatic arrival time calculation",
      "Multi-modal transit comparison (car, subway, bus, bike, walk)",
      "Distance calculations using Haversine formula",
      "Intelligent API caching strategies (60s-3600s)"
    ],
    metrics: [
      "Integrated 4+ Korean public data APIs with intelligent caching",
      "Accurate departure time predictions with multi-factor calculations",
      "Predictive parking congestion modeling with confidence scoring",
      "Weather-aware transit recommendations across 5+ modes",
      "Interactive maps with real-time data visualization",
      "Server-side rendering for SEO and performance"
    ],
    highlights: [
      "Built comprehensive event planning platform with real-time data integration",
      "Developed intelligent departure time calculation algorithm",
      "Created predictive parking congestion model without historical data",
      "Implemented weather-aware transit recommendations",
      "Integrated multiple Korean public data APIs with normalization",
      "Designed interactive maps with Leaflet visualization"
    ],
    challenges: [
      "Integrating multiple Korean public data APIs with different structures",
      "Building accurate departure time calculation combining multiple factors",
      "Creating predictive parking congestion model without historical data",
      "Implementing weather-aware transit recommendations across modes"
    ],
    solutions: [
      "Created normalization pipelines for each API with intelligent caching",
      "Developed multi-factor algorithm using Haversine formula and traffic/weather penalties",
      "Built ML-like prediction algorithm considering events, weather, and temporal factors",
      "Created mode-specific calculations with weather penalties and smart recommendations"
    ],
    github: "",
    liveUrl: "",
    address: "Seoul, South Korea",
    roles: [
      {
        area: "Full-Stack Developer",
        percentage: 100,
        description: "Architected and developed complete Next.js 16 application with App Router and API integrations"
      },
      {
        area: "Data Integration Engineer",
        percentage: 100,
        description: "Integrated 4+ Korean public data APIs with normalization, caching, and fallback systems"
      }
    ]
  },
  {
    title: "VORI",
    description: "A next-generation meeting management platform featuring AI-powered transcription, smart task generation, and comprehensive analytics.",
    detailedDescription: "VORI revolutionizes meeting management with real-time AI transcription, automated task generation, and deep analytics. Built with enterprise-grade security and scalability in mind, it offers seamless cross-platform functionality and intuitive team collaboration features.",
    image: "/assets/images/projects/vorifrontend.png",
    images: [
      "/assets/images/screenshots/loginpage.png",
      "/assets/images/screenshots/dashboard.png",
      "/assets/images/screenshots/meetingpage.png",
      "/assets/images/screenshots/kanban.png",
      "/assets/images/screenshots/ticketspage.png",
      "/assets/images/screenshots/profilepage.png"
    ],
    technologies: [
      "Next.js 14",
      "TypeScript",
      "FastAPI",
      "Apache Kafka",
      "PostgreSQL",
      "Apache Spark",
      "Whisper API",
      "Claude API"
    ],
    tools: [
      "Tailwind CSS",
      "ESLint",
      "Docker",
      "Prisma",
      "Framer Motion"
    ],
    hardSkills: [
      "Full Stack Development",
      "AI Integration",
      "System Architecture",
      "Database Design",
      "Real-time Processing",
      "API Development"
    ],
    softSkills: [
      "Technical Leadership",
      "Project Planning",
      "Team Coordination",
      "Problem Solving",
      "Documentation"
    ],
    features: [
      "Voice Recording with Noise Cancellation",
      "Real-time AI Transcription",
      "Automated Task Generation",
      "Cross-Platform Compatibility",
      "Meeting Analytics Dashboard",
      "Role-based Access Control"
    ],
    metrics: [
      "99% transcription accuracy",
      "50% reduction in meeting follow-up time",
      "40% increase in task completion rate",
      "95% user satisfaction score"
    ],
    highlights: [
      "Developed real-time transcription system",
      "Implemented smart task generation",
      "Created analytics dashboard",
      "Built enterprise security features",
      "Designed modern UI/UX system"
    ],
    challenges: [
      "Real-time audio processing",
      "Scalable transcription system",
      "Complex state management",
      "Multi-user collaboration",
      "Cross-platform compatibility"
    ],
    solutions: [
      "Optimized audio streaming",
      "Implemented distributed processing",
      "Used advanced state management",
      "Created robust WebSocket system",
      "Developed responsive design system"
    ],
    github: "https://github.com/nukktae/VoriReborn-Frontend",
    liveUrl: "https://vori-demo.vercel.app",
    address: "Seoul, South Korea",
    roles: [
      {
        area: "Full Stack Development",
        percentage: 100,
        description: "Led end-to-end development of the platform"
      },
      {
        area: "System Architecture",
        percentage: 90,
        description: "Designed scalable system architecture"
      },
      {
        area: "AI Integration",
        percentage: 85,
        description: "Implemented AI transcription and analysis"
      }
    ]
  },
  {
    title: "AI Job Parser",
    description: "An intelligent job application tracking system that uses AI to parse job postings and automatically organize them in Notion.",
    detailedDescription: "Built with Python and Flask, this application leverages GPT-4 to automatically extract key information from job postings and seamlessly integrate with Notion for organization. Features include multiple input methods, smart extraction of job details, and a modern glass-morphism UI design.",
    image: "/assets/images/projects/jobparser.png",
    images: [
      "/assets/images/demo/jobparser-main.png",
      "/assets/images/demo/jobparser-result.png",
      "/assets/images/demo/jobparser-notion.png"
    ],
    technologies: [
      "Python",
      "Flask",
      "OpenAI GPT-4",
      "Notion API",
      "Three.js",
      "TailwindCSS"
    ],
    tools: [
      "VS Code",
      "Git",
      "Notion",
      "Postman",
      "Docker"
    ],
    hardSkills: [
      "AI Integration",
      "API Development",
      "Backend Architecture",
      "Data Parsing",
      "UI/UX Implementation",
      "System Integration"
    ],
    softSkills: [
      "Problem Solving",
      "Technical Documentation",
      "User Experience Design",
      "Project Planning",
      "Attention to Detail"
    ],
    features: [
      "AI-Powered Parsing",
      "Notion Integration",
      "Multi-format Input Support",
      "Smart Data Extraction",
      "Automated Organization",
      "Real-time Processing"
    ],
    metrics: [
      "95% parsing accuracy",
      "50+ daily active users",
      "3000+ jobs processed",
      "4.8/5 user rating",
      "60% time saved vs manual entry"
    ],
    highlights: [
      "Developed GPT-4 integration",
      "Created Notion API pipeline",
      "Built responsive UI/UX",
      "Implemented error handling",
      "Optimized parsing accuracy"
    ],
    challenges: [
      "Complex data extraction",
      "API rate limiting",
      "Format inconsistencies",
      "Real-time processing",
      "Data accuracy"
    ],
    solutions: [
      "Advanced prompt engineering",
      "Implemented request queuing",
      "Created format normalization",
      "Built caching system",
      "Developed verification pipeline"
    ],
    github: "https://github.com/nukktae/ai-job-parser",
    liveUrl: "https://job-parser-demo.vercel.app",
    address: "Seoul, South Korea",
    roles: [
      {
        area: "Backend Development",
        percentage: 100,
        description: "Complete implementation of Flask backend"
      },
      {
        area: "AI Integration",
        percentage: 90,
        description: "GPT-4 integration and prompt engineering"
      },
      {
        area: "Frontend Development",
        percentage: 80,
        description: "UI implementation and state management"
      }
    ]
  },
  {
    title: "Encar Track 1",
    description: "Computer vision classification competition project achieving >90% accuracy on small dataset (~100 images/class) using advanced ensemble methods, cross-validation, and vision-language models.",
    detailedDescription: "Encar Track 1 is a computer vision classification competition project focused on classifying car images into 10 distinct angle/view categories: front, front_left, front_right, inside, left, rear, rear_left, rear_right, right, and tire. This project demonstrates advanced deep learning techniques, ensemble methods, and robust training strategies optimized for small datasets. The key challenge was overcoming an extremely small dataset requiring sophisticated regularization, augmentation, and ensemble techniques to achieve >90% accuracy.",
    image: "/assets/images/encar.png",
    images: [
      "/assets/images/projects/encar-model-training.png",
      "/assets/images/projects/encar-results.png",
      "/assets/images/projects/encar-architecture.png"
    ],
    technologies: [
      "PyTorch",
      "TorchVision",
      "OpenAI CLIP",
      "TIMM",
      "EfficientNet-B0",
      "MobileNetV3",
      "Computer Vision",
      "Deep Learning",
      "Ensemble Learning"
    ],
    tools: [
      "PyTorch",
      "Jupyter Notebooks",
      "NumPy",
      "Pandas",
      "scikit-learn",
      "OpenCV",
      "tqdm",
      "Git & GitHub"
    ],
    hardSkills: [
      "Deep Learning",
      "Computer Vision",
      "Transfer Learning",
      "Model Fine-tuning",
      "Ensemble Methods",
      "Cross-Validation",
      "Data Augmentation",
      "Vision-Language Models"
    ],
    softSkills: [
      "Research & Experimentation",
      "Problem Solving",
      "Technical Documentation",
      "Performance Analysis",
      "Hyperparameter Optimization",
      "Reproducibility"
    ],
    features: [
      "5-Fold Cross-Validation with 3 seeds per fold (15 models)",
      "Dual Ensemble Strategy (EfficientNet-B0 + MobileNetV3)",
      "CLIP Zero-Shot + Fine-Tuned Ensemble",
      "Test-Time Augmentation (8 variants per image)",
      "Epoch-Based Augmentation Schedule",
      "Mixup & CutMix Augmentation",
      "Advanced Regularization Techniques",
      "Production-Ready Evaluation Pipeline"
    ],
    metrics: [
      "95%+ validation accuracy (Dual Ensemble + TTA)",
      "95-99% expected test accuracy",
      "Overcame small dataset challenge (~100 images/class)",
      "15+ models in cross-validation ensemble",
      "8-variant test-time augmentation"
    ],
    highlights: [
      "Achieved >90% accuracy on extremely small dataset",
      "Implemented robust 5-fold cross-validation pipeline",
      "Created production-ready ensemble evaluation system",
      "Integrated vision-language models (CLIP) for semantic understanding",
      "Developed advanced augmentation strategies (Mixup, CutMix, RandAugment)",
      "Built comprehensive training infrastructure with checkpoint management"
    ],
    challenges: [
      "Extremely small dataset (~100 images per class)",
      "Preventing overfitting with limited data",
      "Optimizing ensemble performance",
      "Balancing augmentation intensity",
      "Managing multiple model checkpoints"
    ],
    solutions: [
      "Implemented sophisticated regularization (label smoothing, dropout, weight decay)",
      "Used cross-validation to maximize data utilization",
      "Created dual ensemble combining different architectures",
      "Developed epoch-based augmentation schedule",
      "Built comprehensive checkpoint and logging system"
    ],
    github: "",
    liveUrl: "",
    address: "Seoul, South Korea",
    roles: [
      {
        area: "Deep Learning",
        percentage: 100,
        description: "Complete implementation of deep learning models and training pipelines"
      },
      {
        area: "Computer Vision",
        percentage: 95,
        description: "Image classification, data augmentation, and test-time augmentation"
      },
      {
        area: "ML Engineering",
        percentage: 90,
        description: "Cross-validation, ensemble methods, and production-ready evaluation"
      }
    ]
  },
  {
    title: "Friendly",
    description: "Comprehensive student productivity platform featuring AI-powered lecture transcription, intelligent schedule management, PDF analysis, GPA tracking, and school-verified community. Built as cross-platform mobile app (iOS, Android, Web).",
    detailedDescription: "Friendly is a comprehensive student productivity platform that combines AI-powered features with seamless mobile experience. Built as a cross-platform React Native application with a Node.js/Express backend, it helps students manage lectures, schedules, academic documents, GPA tracking, and community engagement. The platform features real-time AI transcription, intelligent schedule extraction, PDF analysis with chatbots, GPA calculation, and a school-verified community platform.",
    image: "/assets/images/friendly/coverfriendly.png",
    images: [],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Firebase",
      "OpenAI API",
      "Google Calendar API",
      "PDF.js",
      "NativeWind",
      "Cross-Platform"
    ],
    tools: [
      "React Native",
      "Expo",
      "VS Code",
      "Git & GitHub",
      "Firebase Console",
      "Postman",
      "PM2",
      "OpenAI Platform"
    ],
    hardSkills: [
      "Full-Stack Development",
      "Cross-Platform Mobile Development",
      "RESTful API Design",
      "AI/ML Integration",
      "Real-time Features",
      "File Processing",
      "Database Design",
      "Third-Party API Integration",
      "Authentication & Authorization",
      "TypeScript Development"
    ],
    softSkills: [
      "System Architecture Design",
      "Complex Problem Solving",
      "Performance Optimization",
      "Security Best Practices",
      "User Experience Design",
      "Technical Documentation",
      "Project Management"
    ],
    features: [
      "AI-powered real-time lecture transcription (Korean & English)",
      "Live transcription during recording with chunk-based processing",
      "AI-generated lecture summaries and action item checklists",
      "Context-aware lecture chatbot with persistent chat history",
      "Image-based schedule upload with AI extraction",
      "Google Calendar integration and synchronization",
      "Drag-and-drop calendar interface",
      "PDF upload with text extraction and analysis",
      "AI-powered PDF analysis (full document + page-by-page)",
      "PDF chatbot with selected text context support",
      "GPA calculator with semester and course management",
      "Graduation requirements analysis from PDFs/images",
      "Korean academic document support",
      "School-verified community platform",
      "Post creation with images, likes, and comments",
      "Class management system with assignment tracking"
    ],
    metrics: [
      "80+ RESTful API endpoints",
      "11 backend routes with service layer pattern",
      "12 service modules for business logic",
      "17+ screen components",
      "50+ reusable components",
      "4 AI services integrated (GPT-4o-mini, GPT-3.5-turbo, Whisper, Vision)",
      "3 context-aware chatbots",
      "Cross-platform support: iOS, Android, Web"
    ],
    highlights: [
      "Built comprehensive cross-platform mobile application (iOS, Android, Web)",
      "Integrated 4 different OpenAI services for AI-powered features",
      "Implemented real-time audio transcription with live updates",
      "Created intelligent schedule extraction from images using Vision API",
      "Developed context-aware chatbots for lectures and PDFs",
      "Built production-ready RESTful API with 80+ endpoints",
      "Implemented Google Calendar integration with sync functionality",
      "Designed scalable architecture with service layer pattern"
    ],
    challenges: [
      "Real-time audio processing and transcription synchronization",
      "Cross-platform compatibility across iOS, Android, and Web",
      "Managing multiple AI services and API rate limits",
      "Complex PDF text extraction and processing",
      "Google Calendar API integration and data transformation",
      "School verification system implementation",
      "Performance optimization for large file uploads",
      "State management across multiple features"
    ],
    solutions: [
      "Implemented chunk-based audio processing for live transcription updates",
      "Used Expo for unified cross-platform development",
      "Created efficient API abstraction layer for AI services",
      "Integrated PDF.js for client-side text extraction",
      "Built robust data transformation pipelines for calendar sync",
      "Developed email-based verification system with Firebase",
      "Implemented image compression and text truncation for performance",
      "Used React Context API for global state management"
    ],
    github: "https://github.com/nukktae/friendly",
    liveUrl: "https://friendlykr.com",
    address: "Seoul, South Korea",
    roles: [
      {
        area: "Full-Stack Development",
        percentage: 100,
        description: "Complete implementation of React Native frontend and Node.js backend"
      },
      {
        area: "AI Integration",
        percentage: 95,
        description: "Integration of 4 OpenAI services (GPT, Whisper, Vision) with context-aware chatbots"
      },
      {
        area: "Cross-Platform Development",
        percentage: 100,
        description: "Single codebase deployment for iOS, Android, and Web platforms"
      }
    ]
  },
  {
    title: "ClearGuide",
    description: "AI-powered web application helping Korean residents understand and manage public documents (tax notices, fines, community announcements). Features intelligent document analysis, chatbot assistant, and deadline management.",
    detailedDescription: "ClearGuide (클리어가이드) is a comprehensive AI-powered web application designed to help Korean residents understand and manage public documents (세금고지서, 과태료, 주민센터 안내문 등). The platform uses advanced AI to extract, analyze, and provide actionable insights from government documents, making bureaucratic processes more accessible. Built with Next.js 16, React 19, TypeScript, Firebase, and OpenAI GPT-4o.",
    image: "/assets/images/clearguide/coverclearguide.png",
    images: [
      "/assets/images/clearguide/1.png",
      "/assets/images/clearguide/2.png",
      "/assets/images/clearguide/3.png",
      "/assets/images/clearguide/4.png",
      "/assets/images/clearguide/5.png",
      "/assets/images/clearguide/6.png",
      "/assets/images/clearguide/7.png"
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Firebase",
      "OpenAI GPT-4o",
      "Tailwind CSS v4",
      "Radix UI",
      "next-intl",
      "PDF.js",
      "Firestore"
    ],
    tools: [
      "Next.js",
      "VS Code",
      "Git & GitHub",
      "Firebase Console",
      "OpenAI Platform",
      "Vercel",
      "Postman"
    ],
    hardSkills: [
      "Full-Stack Development",
      "Next.js App Router",
      "React 19",
      "TypeScript",
      "AI Integration",
      "OCR Processing",
      "Authentication Systems",
      "Database Design",
      "Internationalization",
      "API Development"
    ],
    softSkills: [
      "System Architecture Design",
      "Complex Problem Solving",
      "User Experience Design",
      "Performance Optimization",
      "Security Best Practices",
      "Technical Documentation",
      "Accessibility Design"
    ],
    features: [
      "Multi-format document support (PDF, JPG, PNG)",
      "Advanced OCR using GPT-4 Vision API",
      "AI-powered document analysis and summarization",
      "Automatic action checklist generation",
      "Risk detection and deadline alerts",
      "Context-aware chatbot assistant with conversation history",
      "Calendar and deadline management with automatic extraction",
      "Document storage with full-text search and filtering",
      "Multi-provider authentication (Email, Google, Kakao)",
      "User account management with preferences",
      "Internationalization (Korean/English)",
      "Dark mode with system preference detection"
    ],
    metrics: [
      "150+ files in codebase",
      "77 React components",
      "18 API endpoints",
      "7 Firestore collections",
      "~15,000+ lines of code",
      "2 languages supported (Korean, English)",
      "3 authentication providers",
      "Multi-stage AI processing pipeline"
    ],
    highlights: [
      "Built complete AI-powered document analysis system with OCR and AI summarization",
      "Implemented multi-provider authentication including custom Kakao OAuth integration",
      "Created intelligent context-aware chatbot with document-specific conversations",
      "Developed calendar system with automatic deadline extraction from documents",
      "Designed comprehensive user account management with preferences and settings",
      "Implemented full internationalization with dynamic language switching",
      "Created responsive, accessible UI with dark mode support",
      "Optimized performance with parallel processing, caching, and code splitting"
    ],
    challenges: [
      "Complex OCR pipeline for multiple document formats (PDF + Images)",
      "Multi-provider authentication integration (Firebase + Kakao REST API)",
      "Context-aware chatbot with document-specific conversations",
      "Automatic deadline extraction and calendar integration",
      "Internationalization with dynamic language switching",
      "Performance optimization for large document processing",
      "Security implementation for multi-layer authentication",
      "Real-time state synchronization across components"
    ],
    solutions: [
      "Implemented hybrid OCR pipeline using pdf-lib for PDFs and GPT-4 Vision for images",
      "Created custom Kakao OAuth flow with REST API and secure cookie sessions",
      "Built context management system combining document text, summaries, and chat history",
      "Developed intelligent parsing system to extract deadlines from document analysis",
      "Used next-intl for i18n with locale-based routing and persistence",
      "Implemented parallel API calls, client-side caching, and database indexing",
      "Designed middleware-based route protection with token validation",
      "Used React Context API for global state management with persistence"
    ],
    github: "",
    liveUrl: "https://clearguide.vercel.app",
    address: "Seoul, South Korea",
    roles: [
      {
        area: "Full-Stack Development",
        percentage: 100,
        description: "Complete implementation of Next.js frontend and API routes with Firebase backend"
      },
      {
        area: "AI Integration",
        percentage: 95,
        description: "OpenAI GPT-4o integration for document analysis, OCR, and chatbot with prompt engineering"
      },
      {
        area: "Authentication Systems",
        percentage: 90,
        description: "Multi-provider authentication (Firebase Email/Google + custom Kakao OAuth)"
      }
    ]
  },
  {
    title: "MakeEat",
    description: "AI-powered recipe recommendation system with personalized dietary suggestions and meal planning capabilities.",
    detailedDescription: "An intelligent recipe recommendation platform that leverages Large Language Models to provide personalized meal planning and dietary suggestions. The system adapts to user preferences and dietary restrictions while offering creative cooking solutions.",
    image: "/assets/images/recipe.jpg",
    images: [
      "/assets/images/recipe-dashboard.jpg",
      "/assets/images/recipe-suggestions.jpg",
      "/assets/images/recipe-planner.jpg"
    ],
    technologies: ["LLM", "Frontend Development", "UI/UX Design"],
    tools: [
      "VS Code",
      "Git",
      "GitHub",
      "Postman",
      "Figma",
      "npm"
    ],
    metrics: [
      "20% improvement in recommendation accuracy",
      "25% reduction in development cycles",
      "15% workflow efficiency boost"
    ],
    highlights: [
      "Led frontend development and design",
      "Implemented efficient app architecture",
      "Designed collaborative Figma wireframes"
    ],
    challenges: [
      "Handling complex dietary restrictions",
      "Optimizing LLM response time",
      "Ensuring recipe accuracy"
    ],
    solutions: [
      "Developed custom dietary filtering system",
      "Implemented response caching",
      "Created recipe verification pipeline"
    ],
    github: "https://github.com/nukktae/llm-recipe-generator",
    liveUrl: "https://recipe-gen-demo.vercel.app",
    address: "Seoul, South Korea",
    hardSkills: [
      "LLM Integration",
      "Frontend Development",
      "API Design",
      "State Management",
      "Performance Optimization"
    ],
    softSkills: [
      "Project Leadership",
      "Technical Planning",
      "User Research",
      "Team Collaboration",
      "Problem Solving"
    ],
    features: [
      "Personalized recipe recommendations",
      "Dietary restriction handling",
      "Meal planning calendar",
      "Shopping list generation",
      "Nutritional analysis"
    ],
    roles: [
      {
        area: "Frontend Development",
        percentage: 100,
        description: "Complete implementation of React application"
      },
      {
        area: "LLM Integration",
        percentage: 80,
        description: "API integration and prompt engineering"
      },
      {
        area: "UI/UX Design",
        percentage: 60,
        description: "Interface design and user experience"
      }
    ]
  },
  {
    title: "KMU Global Campus",
    description: "A modern web platform connecting Silicon Valley companies with KMU's tech talent, featuring interactive portfolios and streamlined hiring processes.",
    detailedDescription: "KMU Global Campus serves as a bridge between Silicon Valley tech companies and talented developers. The platform showcases students' technical excellence and innovative capabilities while providing an intuitive interface for companies to connect with potential candidates.",
    image: "/assets/images/projects/kmuglobalcampus.png",
    images: [
      "/assets/images/kmu-dashboard.jpg",
      "/assets/images/kmu-portfolios.jpg",
      "/assets/images/kmu-projects.jpg",
      "/assets/images/kmu-contact.jpg"
    ],
    technologies: [
      "Nuxt.js 3",
      "TypeScript",
      "VueUse Motion",
      "CSS Grid/Flexbox",
      "Nodemailer",
      "Server-side Rendering"
    ],
    tools: [
      "Git",
      "npm/yarn",
      "Nuxt DevTools",
      "Vercel",
      "Font Awesome"
    ],
    hardSkills: [
      "Frontend Development",
      "UI/UX Design",
      "Animation Implementation",
      "Server-side Development",
      "Responsive Design",
      "API Integration"
    ],
    softSkills: [
      "Project Management",
      "Cross-cultural Communication",
      "Technical Documentation",
      "Team Collaboration",
      "Problem Solving"
    ],
    features: [
      "Interactive student portfolios",
      "Real-time project showcases",
      "Streamlined hiring process",
      "Animated UI components",
      "Contact form with email integration",
      "Responsive glass-morphism design"
    ],
    metrics: [
      "95% mobile responsiveness score",
      "40% increase in student engagement",
      "50% faster portfolio creation time",
      "30% improvement in page load speed"
    ],
    highlights: [
      "Implemented modern glass-morphism UI design",
      "Created custom animation system",
      "Developed responsive portfolio templates",
      "Built secure email integration system",
      "Designed intuitive navigation flow"
    ],
    challenges: [
      "Complex animation performance",
      "Cross-browser compatibility",
      "Email system security",
      "Responsive design implementation",
      "Content management system"
    ],
    solutions: [
      "Optimized animations with VueUse",
      "Implemented progressive enhancement",
      "Created secure server-side handlers",
      "Used mobile-first approach",
      "Developed custom CMS solution"
    ],
    github: "https://github.com/nukktae/kmu-global-campus",
    liveUrl: "https://kmu-global.vercel.app",
    address: "Seoul, South Korea",
    roles: [
      {
        area: "Frontend Development",
        percentage: 100,
        description: "Complete implementation of Nuxt.js application"
      },
      {
        area: "UI/UX Design",
        percentage: 90,
        description: "Design system and animation implementation"
      },
      {
        area: "Backend Integration",
        percentage: 70,
        description: "Server routes and email system development"
      }
    ]
  },
  {
    title: "COCO",
    description: "AI companion robot for education & stress support (Phase 3 in progress) combining ESP32 embedded systems, ESP32-CAM facial recognition, voice interaction, cloud AI, and web platform integration.",
    detailedDescription: "COCO is a cute, interactive AI companion robot currently in Phase 3 of development, designed to support learning, emotional regulation, and stress relief, especially for students and young users. It combines embedded systems (ESP32), ESP32-CAM with OV2640 camera for facial expression recognition, voice-based interaction, and cloud-based AI (OpenAI + Next.js platform) to create a warm, responsive, and educational assistant. COCO is not just a robot — it's a gentle presence that listens, sees, speaks, displays emotions, and connects to a web platform for extended intelligence and personalization. The project is actively being developed and demonstrates expertise in embedded systems, computer vision, hardware prototyping, IoT communication, full-stack development, AI integration, and human-centered product design.",
    image: "/assets/images/coco/cococover.png",
    images: [
      "/assets/images/coco/car2.png",
      "/assets/images/coco/oled.jpg",
      "/assets/images/coco/strctutre.jpg"
    ],
    imageDescriptions: [
      {
        title: "4WD Robot Chassis",
        text: "COCO's mobile base with L298N motor driver, enabling movement and positioning for interactive engagement."
      },
      {
        title: "OLED Display with Facial Expressions",
        text: "0.96\" OLED display showing COCO's emotional expressions and status indicators, creating a warm, readable interface."
      },
      {
        title: "System Architecture",
        text: "Complete hardware-to-software architecture diagram showing ESP32 integration with sensors, actuators, camera, and cloud AI platform."
      }
    ],
    technologies: [
      "ESP32",
      "ESP32-CAM (OV2640 Camera)",
      "INMP441 I2S Microphone",
      "PAM8403 Amplifier",
      "OLED Display (I2C)",
      "HC-SR04P Ultrasonic Sensor",
      "SG-90 Servo Motors",
      "L298N Motor Driver",
      "Next.js",
      "OpenAI GPT",
      "I2S Protocol",
      "Computer Vision",
      "Wi-Fi Communication",
      "RESTful APIs",
      "Hardware Prototyping",
      "Embedded Systems"
    ],
    tools: [
      "Arduino IDE",
      "ESP32 Development Board",
      "Breadboard",
      "Multimeter",
      "Oscilloscope",
      "Next.js",
      "VS Code",
      "Git & GitHub",
      "Figma",
      "3D Printing (Future)"
    ],
    hardSkills: [
      "Embedded Systems Development",
      "Hardware Prototyping",
      "Computer Vision",
      "I2S Audio Processing",
      "ESP32 Programming",
      "Camera Integration",
      "Sensor Integration",
      "Robotics (Servos, Motors)",
      "Full-Stack Development",
      "AI Integration",
      "Real-time Communication",
      "Hardware-Software Integration",
      "Circuit Design",
      "Power Management"
    ],
    softSkills: [
      "Hardware Debugging",
      "System Architecture Design",
      "Problem Solving",
      "User-Centered Design",
      "Technical Documentation",
      "Iterative Prototyping",
      "Cross-Domain Integration"
    ],
    features: [
      "Voice input via INMP441 digital I2S microphone",
      "Facial expression recognition with ESP32-CAM (OV2640 camera) for emotional awareness",
      "AI voice output through PAM8403 amplifier and speaker",
      "Visual feedback with 0.96\" OLED display showing facial expressions",
      "Environmental awareness with HC-SR04P ultrasonic distance sensor",
      "Cloud-connected intelligence via Next.js web platform",
      "OpenAI LLM integration for natural language understanding",
      "Expressive movement with SG-90 servo motors for head/body gestures",
      "4WD robot chassis with L298N motor driver for mobility",
      "Wi-Fi communication between ESP32 and web backend",
      "Real-time audio streaming and processing",
      "Emotional display system with OLED animations",
      "Proximity-based wake-up and interaction"
    ],
    metrics: [
      "Phase 3: Hardware-to-software system integration in progress (9+ components)",
      "Real-time voice processing pipeline implemented with I2S protocol",
      "Cloud AI response latency <2 seconds achieved",
      "OLED display system designed with 30 FPS animations",
      "Distance detection range: 2cm - 400cm implemented",
      "Wi-Fi connectivity with automatic reconnection implemented",
      "Multi-component hardware system (9+ components) being integrated",
      "Full-stack architecture from embedded to cloud in development"
    ],
    highlights: [
      "Building hardware-to-software AI companion system (Phase 3)",
      "Integrating ESP32 with multiple sensors and actuators",
      "Developing cloud-based AI brain using Next.js and OpenAI",
      "Creating emotional display system with OLED facial expressions",
      "Implementing real-time voice interaction pipeline",
      "Designing companion-focused AI personality for education and stress support",
      "Working on seamless hardware-software communication",
      "Demonstrating full-stack capabilities from embedded systems to web platform"
    ],
    challenges: [
      "Integrating multiple hardware components (microphone, display, sensors, motors)",
      "Real-time audio processing and streaming to cloud",
      "Managing power consumption across multiple components",
      "Synchronizing hardware responses with cloud AI latency",
      "Creating expressive animations on small OLED display",
      "Hardware debugging without proper test equipment",
      "Balancing functionality with physical size constraints",
      "Ensuring reliable Wi-Fi communication in various network conditions"
    ],
    solutions: [
      "Designed modular hardware architecture with clear component separation",
      "Implemented efficient I2S audio buffering and chunked transmission",
      "Used power management strategies including sleep modes and component gating",
      "Created async communication pattern with status indicators during AI processing",
      "Developed compact animation system using bitmap patterns and state machines",
      "Built comprehensive logging and serial debugging system",
      "Designed compact form factor with strategic component placement",
      "Implemented robust Wi-Fi reconnection logic with exponential backoff"
    ],
    github: "",
    liveUrl: "",
    address: "Seoul, South Korea",
    roles: [
      {
        area: "Embedded Systems Engineer",
        percentage: 100,
        description: "Designed and implemented ESP32 firmware, hardware integration, sensor communication, and motor control"
      },
      {
        area: "Backend Developer",
        percentage: 100,
        description: "Built Next.js web platform for AI processing, user profiles, conversation history, and API endpoints"
      },
      {
        area: "Frontend Developer",
        percentage: 80,
        description: "Developed web interface for COCO management, user profiles, and conversation history"
      },
      {
        area: "UI/UX Designer",
        percentage: 70,
        description: "Designed companion personality, emotional expressions, interaction flows, and user experience"
      }
    ]
  },
  {
    title: "Shinhan Scholarship Foundation",
    titleKo: "신한장학재단 프로젝트",
    description: "Led a client-facing product project to resolve manual monthly student report submissions, reducing operational burden while increasing platform engagement and brand usage.",
    descriptionKo: "수동 월간 학생 보고서 제출 문제를 해결하기 위한 클라이언트 대면 제품 프로젝트를 주도하여 운영 부담을 줄이면서 플랫폼 참여도와 브랜드 사용량을 증가시킴",
    detailedDescription: "As Product Engineer at Shinhan Scholarship Foundation, I led a client-facing product project that transformed the reporting workflow from manual monthly submissions to an automated, engaging platform experience. Conducted constraint-aware user research using web crawling, secondary data analysis, and data visualization due to interview sensitivity. Drove ideation using SCAMPER method to generate innovative solutions. Designed student-facing features including community, networking, and recurring activity reporting, alongside a lightweight admin CRM dashboard for faster student management and oversight. Collaborated across frontend and backend teams to deploy and iterate a PWA, integrating client feedback post-launch and achieving approximately 3 hours of backend processing time savings.",
    detailedDescriptionKo: "신한장학재단에서 프로덕트 엔지니어로 근무하며, 수동 월간 제출에서 자동화된 참여형 플랫폼 경험으로 보고 워크플로우를 전환한 클라이언트 대면 제품 프로젝트를 주도했습니다. 인터뷰 민감도로 인해 웹 크롤링, 2차 데이터 분석 및 데이터 시각화를 사용한 제약 인식 사용자 연구를 수행했습니다. SCAMPER 방법을 사용하여 혁신적인 솔루션을 생성하는 아이디어를 추진했습니다. 커뮤니티, 네트워킹 및 반복 활동 보고를 포함한 학생 대면 기능과 더 빠른 학생 관리 및 감독을 위한 경량 관리자 CRM 대시보드를 설계했습니다. 프론트엔드 및 백엔드 팀과 협력하여 PWA를 배포하고 반복했으며, 출시 후 클라이언트 피드백을 통합하고 약 3시간의 백엔드 처리 시간 절감을 달성했습니다.",
    image: "/assets/images/shinhan.png",
    images: [],
    technologies: [
      "PWA",
      "Web Technologies",
      "Responsive Design",
      "CRM",
      "Data Visualization",
      "Web Crawling",
      "Data Analysis"
    ],
    tools: [
      "Product Management",
      "User Research",
      "SCAMPER",
      "Data Visualization Tools",
      "Web Crawling Tools",
      "Collaboration Tools"
    ],
    hardSkills: [
      "Product Management",
      "User Research",
      "Data Analysis",
      "Web Crawling",
      "SCAMPER Ideation",
      "PWA Development",
      "CRM Design",
      "Client-Facing Project Leadership"
    ],
    softSkills: [
      "Client Communication",
      "Cross-Functional Collaboration",
      "Problem Solving",
      "Constraint-Aware Research",
      "Stakeholder Management"
    ],
    features: [
      "Automated recurring activity reporting system",
      "Student community platform with networking capabilities",
      "Lightweight admin CRM dashboard for student management",
      "Backend processing optimization achieving ~3 hours time savings",
      "Progressive Web App (PWA) with dual interfaces",
      "Constraint-aware user research using web crawling and data visualization",
      "SCAMPER method-driven ideation and solution design"
    ],
    metrics: [
      "~3 hours of backend processing time savings per cycle",
      "Eliminated manual monthly report submissions",
      "Increased platform engagement and brand usage",
      "Dual-interface PWA (student and admin)",
      "Automated reporting workflow implementation"
    ],
    highlights: [
      "Led client-facing product project from research to deployment",
      "Conducted constraint-aware user research using alternative methods",
      "Applied SCAMPER method for innovative ideation",
      "Designed and deployed dual-interface PWA solution",
      "Achieved significant operational efficiency improvements"
    ],
    challenges: [
      "Conducting user research with interview sensitivity constraints",
      "Balancing student engagement features with operational efficiency",
      "Designing dual interfaces for students and admins",
      "Optimizing backend processing time",
      "Integrating client feedback post-launch"
    ],
    solutions: [
      "Developed constraint-aware research approach using web crawling, secondary data analysis, and data visualization",
      "Used SCAMPER method for ideation to generate solutions addressing both user needs and operational requirements",
      "Architected separate but integrated interfaces within single PWA",
      "Automated manual workflows and streamlined data processing",
      "Established iterative development process with client collaboration"
    ],
    github: "",
    liveUrl: "",
    address: "Seoul, South Korea",
    roles: [
      {
        area: "Product Engineering",
        percentage: 100,
        description: "Led client-facing product project from research to deployment, conducting constraint-aware user research and driving ideation using SCAMPER method"
      },
      {
        area: "User Research",
        percentage: 90,
        description: "Conducted user research using web crawling, secondary data analysis, and data visualization due to interview sensitivity constraints"
      },
      {
        area: "Product Design",
        percentage: 85,
        description: "Designed student-facing features (community, networking, reporting) and lightweight admin CRM dashboard"
      },
      {
        area: "Full-Stack Development",
        percentage: 80,
        description: "Collaborated across frontend and backend teams to deploy and iterate PWA with dual interfaces"
      }
    ]
  },
  {
    title: "SolStudy",
    description: "Full-stack mentoring and study platform with role-based student/mentor flows, task management, AI-powered goals and study plans, calendar, chat, and JWT-based auth with RS256.",
    detailedDescription: "SolStudy is a full-stack mentoring and study platform that connects students with mentors through structured tasks, submissions, and feedback. The system implements role-based access with JWT (RS256), dual interfaces for students (planner, calendar, task detail with study timer and photo verification) and mentors (dashboard, task creation, student detail with submission review and feedback). Features include Supabase Storage for attachments, AI dashboard with subject-wise analytics, goal recommendation, study plans, and test question suggestions. Built with FastAPI backend and Next.js frontend, with middleware-based role routing and multipart file uploads for tasks and submissions.",
    image: "/assets/images/solstudy.png",
    images: [],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "Supabase Storage",
      "JWT (RS256)",
      "PostgreSQL",
      "Tailwind CSS",
      "Multipart File Upload",
      "Role-Based Access Control",
      "PWA-ready"
    ],
    tools: [
      "Next.js",
      "FastAPI",
      "Supabase",
      "VS Code",
      "Git & GitHub",
      "Postman",
      "jose (JWT)"
    ],
    hardSkills: [
      "Full-Stack Development",
      "Role-Based Authentication",
      "JWT RS256 Implementation",
      "RESTful API Design",
      "File Upload & Storage",
      "Middleware & Routing",
      "State Management",
      "Responsive UI"
    ],
    softSkills: [
      "System Architecture Design",
      "User Flow Design",
      "Cross-Functional Coordination",
      "Technical Documentation",
      "Constraint-Aware Implementation"
    ],
    features: [
      "Dual role flows: student (planner, calendar, task submit) and mentor (dashboard, task creation, submission review)",
      "JWT RS256 auth with public-key verification and role-based redirects",
      "Task creation with subject, due date, attachments (Supabase Storage); one submission per task per student",
      "Student planner with weekly view, subject icons, completion/feedback state, Zoom schedule, Pomodoro timer",
      "Task detail: study timer, study time slider, learning verification photos (camera/gallery), multipart submit",
      "Mentor submission list with filters, sort, search, pagination; student detail with SubmissionReview and FeedbackPanel",
      "AI dashboard: 60-day subject-wise submission and study time aggregation, goal recommendation, study plan, test questions",
      "Calendar (student: assignments per date; mentor: student/date view), chat list and thread UI, notifications",
      "Profile and settings for student and mentor; CORS and health endpoint on backend"
    ],
    metrics: [
      "Dual-interface app (student and mentor) with middleware-enforced role routing",
      "Multipart uploads: mentor tasks (up to 5 files, 10MB), student submissions (up to 10 files, 10MB)",
      "JWT 7-day expiry with cookie + localStorage sync for returning users",
      "ASCII-only storage paths for Supabase to avoid filename issues",
      "Comprehensive task and submission APIs with role-scoped access"
    ],
    highlights: [
      "Designed and implemented full student/mentor lifecycle: signup, login, tasks, submissions, feedback",
      "Built RS256 JWT auth with backend signing and frontend public-key verification",
      "Integrated Supabase Storage for task attachments and submission files with size and count limits",
      "Implemented role-based middleware routing (student vs mentor routes) and API guards",
      "Delivered planner, calendar, AI dashboard, chat UI, and profile/settings in design system"
    ],
    challenges: [
      "Validating JWT on frontend without Supabase Auth (solved with RS256 and public-key endpoint)",
      "Supabase Storage rejecting non-ASCII filenames (solved with UUID-based paths)",
      "Keeping task list in sync with backend while supporting offline/development (solved with store + fetch on login)",
      "Mentor feedback persistence (structured for future backend feedback API)"
    ],
    solutions: [
      "Used jose for RS256 signing/verification and GET /api/auth/public-key for frontend verification",
      "Standardized storage keys as attachments/{uuid}.{ext} and submissions/{task_id}/{uuid}.{ext}",
      "Centralized useMentorTasksStore with GET /api/tasks on login and POST response merge",
      "Designed feedback UI and local save hooks ready for feedback_per_task and daily_summary API"
    ],
    github: "",
    liveUrl: "",
    address: "Seoul, South Korea",
    roles: [
      {
        area: "Full-Stack Development",
        percentage: 100,
        description: "Implemented FastAPI backend and Next.js frontend with auth, tasks, submissions, and file storage"
      },
      {
        area: "Authentication & Security",
        percentage: 95,
        description: "JWT RS256 auth, role-based middleware, and API guards for student/mentor separation"
      },
      {
        area: "Product & UX",
        percentage: 85,
        description: "Student planner, mentor dashboard, calendar, AI dashboard, and profile/settings flows"
      }
    ]
  }
];

export default projectSummaries; 