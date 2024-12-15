import { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: "Rootin",
    description: "A sophisticated plant care automation system combining IoT hardware with a Flutter-powered iOS app for intelligent plant monitoring and maintenance.",
    detailedDescription: "An innovative IoT solution that transforms plant care through intelligent monitoring and automated maintenance. The system combines custom-built hardware sensors with an intuitive Flutter iOS interface, leveraging AI for plant identification and health diagnostics.",
    image: "/assets/images/rootin.jpg",
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
    title: "LLM Recipe Generator",
    description: "AI-powered recipe recommendation system with personalized dietary suggestions and meal planning capabilities.",
    detailedDescription: "An intelligent recipe recommendation platform that leverages Large Language Models to provide personalized meal planning and dietary suggestions. The system adapts to user preferences and dietary restrictions while offering creative cooking solutions.",
    image: "/assets/images/recipe.jpg",
    images: [
      "/assets/images/recipe-dashboard.jpg",
      "/assets/images/recipe-suggestions.jpg",
      "/assets/images/recipe-planner.jpg"
    ],
    technologies: ["LLM", "Frontend Development", "UI/UX Design"],
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
    title: "AWS Content Moderation System",
    description: "Real-time content moderation platform utilizing AWS services for scalable and accurate content filtering.",
    detailedDescription: "A sophisticated content moderation system built on AWS infrastructure, providing real-time content filtering for large-scale applications. The platform combines multiple AWS services to deliver accurate and efficient content moderation.",
    image: "/assets/images/content-mod.png",
    images: [
      "/assets/images/moderation-dashboard.jpg",
      "/assets/images/moderation-metrics.jpg",
      "/assets/images/moderation-filters.jpg"
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "AWS Amplify",
      "GraphQL",
      "WebSocket",
      "Redux Toolkit"
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
    github: "https://github.com/your-username/aws-content-moderation-system",
    liveUrl: "https://content-mod-demo.vercel.app",
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
    ]
  }
]; 