import { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: "IoT Plant Care System",
    description: "A sophisticated plant care automation system combining IoT hardware with a Flutter-powered mobile app for intelligent plant monitoring and maintenance.",
    detailedDescription: "An innovative IoT solution that transforms plant care through intelligent monitoring and automated maintenance. The system combines custom-built hardware sensors with an intuitive Flutter mobile interface, leveraging AI for plant identification and health diagnostics.",
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
      "Raspberry Pi",
      "Arduino",
      "ESP32",
      "IoT Sensors",
      "REST APIs",
      "WebSockets"
    ],
    tools: [
      "VS Code",
      "Android Studio",
      "Firebase Console",
      "Git & GitHub",
      "Figma",
      "Arduino IDE",
      "Raspberry Pi OS"
    ],
    softSkills: [
      "System Architecture Design",
      "UI/UX Design Principles",
      "Technical Documentation",
      "Problem-solving",
      "Cross-functional Collaboration",
      "Agile Development"
    ],
    hardSkills: [
      "Mobile App Development",
      "IoT System Integration",
      "Sensor Data Processing",
      "Real-time Data Streaming",
      "Machine Learning Integration",
      "Hardware Programming",
      "API Development"
    ],
    metrics: [
      "30% improvement in plant survival rate",
      "90% user satisfaction rate",
      "50% reduction in water consumption",
      "95% accuracy in plant identification",
      "Real-time monitoring with <100ms latency"
    ],
    highlights: [
      "Developed a comprehensive Flutter app with 7 key screens for plant management",
      "Integrated TensorFlow Lite for real-time plant identification",
      "Implemented real-time soil moisture monitoring system",
      "Created custom hardware solution with multiple sensor types",
      "Built automated watering system with smart scheduling",
      "Designed intuitive UI with animated transitions and micro-interactions"
    ],
    challenges: [
      "Complex sensor data synchronization",
      "Battery optimization for IoT devices",
      "Real-time data reliability",
      "Cross-platform compatibility",
      "Sensor calibration accuracy"
    ],
    solutions: [
      "Implemented efficient data batching and WebSocket connections",
      "Developed custom power management algorithms",
      "Created robust error handling and data validation",
      "Used Flutter's platform channels for native integration",
      "Built automated calibration system with feedback loop"
    ],
    features: [
      "AI-powered plant identification",
      "Real-time moisture monitoring",
      "Automated watering schedules",
      "Plant health diagnostics",
      "Custom care recommendations",
      "Historical data analytics",
      "Push notifications",
      "Offline functionality"
    ],
    github: "https://github.com/yourusername/plant-care",
    liveUrl: "https://plant-care-demo.vercel.app"
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
    liveUrl: "https://recipe-gen-demo.vercel.app"
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
    technologies: ["AWS Kinesis", "AWS Rekognition", "DynamoDB"],
    metrics: [
      "95% moderation accuracy",
      "15% reduction in operational costs",
      "20% reduction in false positives"
    ],
    highlights: [
      "Designed real-time moderation pipeline",
      "Optimized for peak traffic handling",
      "Integrated multiple AWS services"
    ],
    challenges: [
      "Scaling for high traffic loads",
      "Reducing false positives",
      "Managing real-time processing"
    ],
    solutions: [
      "Implemented auto-scaling policies",
      "Developed ML-based verification",
      "Optimized stream processing"
    ],
    github: "https://github.com/your-username/aws-content-moderation-system",
    liveUrl: "https://content-mod-demo.vercel.app"
  }
]; 