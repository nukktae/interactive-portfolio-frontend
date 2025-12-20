// English content file: All user-facing text strings

export const kspoSportsPlatformEN = {
  overview: {
    paragraphs: [
      {
        type: 'text',
        content: [
          { type: 'span', text: 'KSPO Sports Platform', className: 'font-semibold text-foreground' },
          ' is an AI-powered sports facility discovery and recommendation platform built for the Korea Sports Promotion Organization (KSPO). The platform helps users discover nearby public sports facilities, receive personalized recommendations, and explore fitness programs based on their goals, location, weather conditions, and predicted crowd levels.'
        ]
      },
      {
        type: 'text',
        content:
          'The platform integrates real-time data from over 500 Seoul public sports facilities with AI-driven recommendation logic, including weather-aware suggestions, air quality considerations, crowd prediction algorithms, and interactive map-based discovery with geolocation support.'
      },
      {
        type: 'text',
        content:
          'Built as a full-stack monorepo with a Next.js 15 frontend, NestJS backend, FastAPI-based AI service, and Supabase PostgreSQL database, the platform delivers a seamless and intelligent experience for discovering and engaging with sports facilities across Seoul.'
      }
    ]
  },

  role: {
    roles: [
      {
        title: 'Full-Stack Development',
        iconKey: 'Full-Stack Development',
        responsibilities: [
          'Designed and implemented the entire monorepo architecture covering frontend, backend, AI service, and shared packages',
          'Developed RESTful APIs using NestJS with modular architecture (facilities, programs, recommendations, weather, users)',
          'Built a responsive Next.js 15 frontend using React 19, TypeScript, and Tailwind CSS',
          'Designed database schemas and migrations using Drizzle ORM with Supabase PostgreSQL',
          'Implemented ETL pipelines to import and normalize Seoul public sports facility data from CSV sources'
        ],
        impacts: [
          'Delivered a production-ready platform with clear separation of concerns',
          'Enabled scalable development across multiple services with shared schemas',
          'Improved development velocity through reusable components and shared utilities'
        ]
      },
      {
        title: 'AI & ML Integration',
        iconKey: 'AI & ML Integration',
        responsibilities: [
          'Integrated GPT-4o to generate personalized, natural Korean coaching-style recommendations',
          'Built a FastAPI service implementing ML-based scoring algorithms for facilities and programs',
          'Designed weighted scoring systems considering distance, accessibility, category matching, weather suitability, and risk factors',
          'Implemented crowd prediction logic based on time of day, weekday/weekend patterns, and weather conditions',
          'Developed feature extraction pipelines using pandas and scikit-learn'
        ],
        impacts: [
          'Delivered highly personalized recommendations aligned with user goals and context',
          'Improved user trust through transparent, natural-language explanations',
          'Enabled intelligent multi-factor matching for facilities and programs'
        ]
      }
    ]
  },

  problem: {
    summary:
      'Finding suitable sports facilities in Seoul is difficult due to fragmented information, lack of personalization, and no consideration for real-world conditions such as weather or crowd levels.',
    content:
      'Users struggle to identify sports facilities that align with their fitness goals, accessibility needs, and schedules. Existing platforms do not account for dynamic factors such as weather conditions, air quality (PM2.5), or peak crowd times, resulting in poor recommendations and reduced engagement.',
    painPoints: [
      { description: 'Facility information scattered across multiple disconnected sources' },
      { description: 'No personalization based on fitness goals, age, or preferences' },
      { description: 'Outdoor activities suggested without considering weather or air quality' },
      { description: 'No crowd prediction to help users avoid peak hours' },
      { description: 'Limited program discovery aligned with user fitness goals' }
    ],
    whyItMatters:
      'KSPO’s mission is to promote sports and physical activity nationwide. Improving access to accurate, personalized facility information directly increases participation rates and supports better public health outcomes.'
  },

  goals: {
    goals: [
      { title: 'Real-Time Recommendations', iconKey: 'Real-time Recommendations', metric: 'AI-powered suggestions delivered in under 2 seconds' },
      { title: 'Personalized AI Guidance', iconKey: 'Personalized AI Guidance', metric: 'GPT-4o natural-language coaching recommendations' },
      { title: 'Comprehensive Data Coverage', iconKey: 'Data Integration', metric: '500+ Seoul public sports facilities integrated' },
      { title: 'Accessible User Experience', iconKey: 'User Experience', metric: 'Clean, modern UI optimized for 45+ year-old users' },
      { title: 'Weather-Aware Suggestions', iconKey: 'Weather Awareness', metric: 'KMA weather + AirKorea PM2.5 integration' },
      { title: 'Accessibility First', iconKey: 'Accessibility', metric: 'Clear accessibility scoring with visual indicators' }
    ]
  },

  research: {
    insights: [
      {
        title: 'User Needs',
        items: [
          'Users want recommendations tailored to specific fitness goals (diet, strength, endurance)',
          'Proximity is critical: most users prefer facilities within a 5km radius',
          'Weather strongly influences outdoor activity decisions',
          'Crowded facilities reduce satisfaction during peak hours (18:00–21:00)',
          'Accessibility features are essential for older users and users with mobility needs'
        ]
      },
      {
        title: 'Technical Constraints',
        items: [
          'Real-time data ingestion from multiple external APIs',
          'ML-based scoring requires normalized features and weighted heuristics',
          'Natural language generation needed for trust and clarity',
          'Accurate geolocation required for distance calculations',
          'Performance optimization necessary for real-time scoring across hundreds of facilities'
        ]
      }
    ]
  },

  architecture: {
    items: [
      {
        title: 'Monorepo Architecture',
        description:
          'The platform is structured as a monorepo with clear separation between frontend, backend, AI services, and shared utilities. This enables independent development and deployment while maintaining consistent data contracts.',
        features: [
          'Frontend: Next.js 15 App Router, React 19, TypeScript, Tailwind CSS',
          'Backend: NestJS with modular services and Drizzle ORM',
          'AI Service: FastAPI with ML-based scoring and feature extraction',
          'Shared: TypeScript utilities, Zod schemas, distance calculation helpers'
        ]
      },
      {
        title: 'Core User Flows',
        userFlows: [
          {
            name: 'Facility Discovery',
            iconKey: 'Facility Discovery',
            description: 'Users discover nearby facilities via AI recommendations or interactive maps',
            steps: [
              'User grants location access',
              'Facilities within a 5km radius are fetched',
              'AI service scores facilities based on user context',
              'GPT-4o generates personalized explanations',
              'User explores facility details and programs'
            ]
          },
          {
            name: 'AI Recommendation Flow',
            iconKey: 'AI Recommendation',
            description: 'Multi-factor AI recommendations tailored to user context',
            steps: [
              'User inputs goals and preferences',
              'Backend gathers facility and weather data',
              'AI service computes weighted scores',
              'GPT-4o generates coaching-style guidance',
              'Results shown with score breakdowns'
            ]
          }
        ]
      }
    ]
  },

  keyFeatures: {
    metrics: [],
    userFeatures: [
      {
        title: 'AI-Powered Recommendations',
        iconKey: 'AI-Powered Recommendations',
        items: ['Personalized facility and program recommendations based on user goals, location, weather, and accessibility needs']
      },
      {
        title: 'Interactive Map Discovery',
        iconKey: 'Interactive Map',
        items: ['Geolocation-based facility discovery with real-time distance calculations and visual map interface']
      },
      {
        title: 'Weather-Aware Suggestions',
        iconKey: 'Weather Awareness',
        items: ['Real-time weather and air quality integration to suggest suitable outdoor activities']
      },
      {
        title: 'Crowd Prediction',
        iconKey: 'Crowd Prediction',
        items: ['ML-based crowd level predictions to help users avoid peak hours']
      }
    ],
    engineeringFeatures: [
      {
        title: 'Monorepo Architecture',
        iconKey: 'Monorepo',
        items: ['Scalable monorepo structure with shared TypeScript schemas and utilities']
      },
      {
        title: 'Multi-Service Integration',
        iconKey: 'Service Integration',
        items: ['Seamless integration between Next.js frontend, NestJS backend, and FastAPI AI service']
      }
    ]
  },

  challenges: {
    challenges: [
      {
        problem: 'Integrating multiple external APIs with different formats and rate limits',
        solution:
          'Built robust API client wrappers with error handling, retry logic, and response normalization to handle KMA weather, AirKorea PM2.5, and facility data sources.'
      },
      {
        problem: 'Real-time ML scoring performance across 500+ facilities',
        solution:
          'Optimized scoring algorithms using pandas vectorization and implemented caching strategies to deliver recommendations in under 2 seconds.'
      },
      {
        problem: 'Balancing monorepo shared code with service independence',
        solution:
          'Designed clear package boundaries with shared TypeScript utilities and Zod schemas while maintaining service-specific implementations.'
      }
    ]
  },

  designSystem: {
    items: []
  },

  systemArchitecture: {
    categories: []
  },

  results: {
    metrics: [
      '500+ public sports facilities integrated',
      'AI recommendations delivered in under 2 seconds',
      '5 external APIs successfully integrated',
      'Multi-factor ML scoring system implemented',
      'Responsive UI optimized for accessibility',
      'Production-ready monorepo with four services'
    ],
    description:
      'The KSPO Sports Platform successfully combines real-time data, AI-driven recommendations, and weather-aware insights into a single user-friendly experience. The system enables citizens to discover and engage with sports facilities more easily, aligning public infrastructure with modern, data-driven user expectations.'
  },

  learnings: {
    cards: [
      {
        title: 'Monorepo Design at Scale',
        iconKey: 'Monorepo Design',
        description:
          'Learned how to balance shared code and service independence while maintaining clean boundaries across frontend, backend, and AI services.'
      },
      {
        title: 'Production AI Integration',
        iconKey: 'AI Integration',
        description:
          'Gained experience integrating LLMs with structured prompts, response caching, and cost control strategies in production environments.'
      },
      {
        title: 'ML Without Training Data',
        iconKey: 'ML Scoring',
        description:
          'Developed effective rule-based scoring systems using domain expertise and weighted heuristics instead of labeled datasets.'
      },
      {
        title: 'Complex API Orchestration',
        iconKey: 'API Integration',
        description:
          'Improved skills in handling multiple external APIs with differing formats, rate limits, and failure modes.'
      }
    ]
  },

  techStack: {
    categories: [
      {
        category: 'Core Stack',
        items: [
          'Next.js 15 (App Router)',
          'React 19',
          'TypeScript',
          'NestJS',
          'Supabase PostgreSQL'
        ]
      },
      {
        category: 'AI & Data',
        items: [
          'FastAPI',
          'Python',
          'OpenAI GPT-4o',
          'pandas',
          'scikit-learn'
        ]
      },
      {
        category: 'Infrastructure',
        items: [
          'Vercel',
          'Environment-based configuration',
          'Monorepo tooling',
          'Shared TypeScript schemas'
        ]
      }
    ]
  },

  links: {
    links: [],
    figmaUrl: '',
    caseStudyUrl: ''
  }
};
