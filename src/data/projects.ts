import { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: "Handiers Inc",
    description: "UI/UX Designer leading frontend development for mobile apps and marketing website, delivering consistent user experiences across platforms.",
    detailedDescription: "Led comprehensive UI/UX design and frontend development for Handiers Inc, a service marketplace platform. Designed and developed frontend for two mobile apps and a marketing website, delivering consistent UI across platforms. Spearheaded major UX redesigns for chat, booking, and quote request features, enhancing clarity and conversion through data-backed decisions.",
    image: "/assets/images/projects/handiers.png",
    images: [
      "/assets/images/handiers-mobile-app.jpg",
      "/assets/images/handiers-website.jpg",
      "/assets/images/handiers-chat-redesign.jpg",
      "/assets/images/handiers-booking-flow.jpg",
      "/assets/images/handiers-quote-request.jpg"
    ],
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
    title: "AWS Content Moderation",
    description: "A sophisticated content moderation system leveraging AWS services for real-time content filtering and analysis.",
    detailedDescription: "A real-time content moderation system built on AWS infrastructure, utilizing services like Kinesis, Rekognition, and Lambda for efficient content analysis and filtering.",
    image: "/assets/images/aws-architecture.png",
    images: [
      "/assets/images/aws-dashboard.png",
      "/assets/images/aws-metrics.png",
      "/assets/images/aws-analysis.png"
    ],
    technologies: [
      "AWS Lambda",
      "Amazon Rekognition",
      "Amazon Kinesis",
      "DynamoDB",
      "CloudWatch",
      "API Gateway",
      "S3"
    ],
    tools: [
      "AWS Console",
      "Terraform",
      "VS Code",
      "Git",
      "GitHub",
      "Postman"
    ],
    metrics: [
      "40% improvement in UI response time",
      "95% user satisfaction rate",
      "30% reduction in data loading time",
      "60% decrease in UI-related bug reports"
    ],
    highlights: [
      "Designed responsive dashboard with real-time updates",
      "Implemented efficient state management with Redux",
      "Created reusable component library",
      "Built interactive data visualization components",
      "Integrated real-time WebSocket notifications"
    ],
    challenges: [
      "Complex real-time data visualization",
      "Performance optimization for large datasets",
      "Cross-browser compatibility issues",
      "Responsive design for multiple screen sizes",
      "State management for real-time updates"
    ],
    solutions: [
      "Implemented data virtualization for large lists",
      "Used React.memo and useMemo for performance",
      "Created custom hooks for WebSocket management",
      "Developed mobile-first responsive layouts",
      "Implemented efficient caching strategies"
    ],
    github: "https://github.com/2024PBL-AWS-project/ContentModeration",
    hardSkills: [
      "React.js Development",
      "TypeScript",
      "State Management",
      "UI/UX Implementation",
      "Performance Optimization",
      "Component Architecture"
    ],
    softSkills: [
      "Frontend Architecture",
      "UI/UX Principles",
      "Technical Documentation",
      "Team Collaboration",
      "Agile Development"
    ],
    features: [
      "Real-time content filtering",
      "Multi-media support",
      "Automated moderation",
      "Performance analytics",
      "Custom filter rules"
    ],
    roles: [
      {
        area: "Frontend Development",
        percentage: 100,
        description: "Complete implementation of React dashboard"
      },
      {
        area: "UI/UX Design",
        percentage: 75,
        description: "Dashboard design and user experience"
      },
      {
        area: "Performance Optimization",
        percentage: 85,
        description: "Frontend optimization and state management"
      }
    ],
    liveUrl: "https://aws-content-moderation.demo"
  },
  {
    title: "MajorMatch",
    description: "An intelligent career guidance platform helping students discover their ideal academic path using AI-powered assessments and personalized mentorship.",
    detailedDescription: "MajorMatch is a comprehensive career guidance platform that leverages GPT-4 for personalized major recommendations, interactive career challenges, and real-time mentorship connections. The platform features a responsive design and detailed analytics tracking.",
    image: "/assets/images/projects/majormatch.png",
    images: [
      "/assets/images/demo/home.png",
      "/assets/images/demo/aiassistant.png",
      "/assets/images/demo/careerchallenges.png",
      "/assets/images/demo/assessmentquestions.png",
      "/assets/images/demo/assessmentresult.png",
      "/assets/images/demo/profile.png"
    ],
    technologies: [
      "Flutter",
      "Next.js",
      "TypeScript",
      "Python",
      "Firebase",
      "AWS",
      "TensorFlow",
      "GPT-4 API"
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
      "AI-Powered Assessments",
      "Interactive Career Challenges",
      "Mentor Matching System",
      "Real-time Progress Tracking",
      "Responsive Dashboard",
      "Video Call Integration"
    ],
    metrics: [
      "90% user satisfaction rate",
      "45% improvement in career decision confidence",
      "30% reduction in assessment time",
      "85% mentor-student match success rate"
    ],
    highlights: [
      "Developed custom GPT-4 assessment engine",
      "Built real-time mentorship platform",
      "Implemented interactive challenge system",
      "Created analytics dashboard",
      "Designed responsive UI/UX"
    ],
    challenges: [
      "Complex AI model integration",
      "Real-time video streaming",
      "Data privacy compliance",
      "Scalable matching algorithm",
      "Cross-platform compatibility"
    ],
    solutions: [
      "Implemented efficient API caching",
      "Used WebRTC for video calls",
      "Enhanced data encryption",
      "Optimized matching algorithms",
      "Created responsive design system"
    ],
    github: "https://github.com/nukktae/major-match-ai",
    liveUrl: "https://majormatch-demo.vercel.app",
    roles: [
      {
        area: "Full Stack Development",
        percentage: 100,
        description: "Led end-to-end development of the platform"
      },
      {
        area: "AI Integration",
        percentage: 85,
        description: "Implemented GPT-4 assessment system"
      },
      {
        area: "UI/UX Design",
        percentage: 70,
        description: "Designed user interface and experience"
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
  }
];

export default projects; 