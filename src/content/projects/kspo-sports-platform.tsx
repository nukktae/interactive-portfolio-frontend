import React from 'react';
import { ProjectDetailContent } from '@/types/projectDetail';
import {
  Code, Database, Smartphone, BarChart3, Users, Zap, Shield, Layers, TrendingUp,
  Award, Brain, Mail, FileText, Sparkles, Component, LayoutTemplate, Workflow, MapPin, Cloud
} from 'lucide-react';
import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiVercel,
  SiTwilio, SiGooglemaps, SiFigma, SiGithub, SiOpenai, SiPython, SiSupabase, SiFastapi
} from 'react-icons/si';

export const kspoSportsContent: ProjectDetailContent = {
  slug: 'kspo-sports-platform',
  sections: [
    {
      id: 'overview',
      type: 'overview',
      content: React.createElement(
        React.Fragment,
        null,
        React.createElement('p', null, 'KSPO Sports Platform is a comprehensive AI-powered sports facility discovery and recommendation platform built for Korea Sports Promotion Organization (KSPO). The platform helps users find nearby sports facilities, get personalized recommendations, and discover fitness programs based on their preferences, location, weather conditions, and crowd predictions.'),
        React.createElement('p', null, 'The platform combines real-time facility data from Seoul public sports facilities with AI-powered recommendations using GPT-4o, weather-aware suggestions, crowd prediction algorithms, and interactive maps with geolocation support.'),
        React.createElement('p', null, 'Built as a full-stack monorepo with Next.js 15 frontend, NestJS backend, FastAPI AI service, and Supabase PostgreSQL database, the platform delivers a seamless experience for users to discover and engage with sports facilities across Seoul.')
      )
    },
    {
      id: 'my-role',
      type: 'role',
      roles: [
        {
          title: 'Full-Stack Development',
          icon: Code,
          responsibilities: [
            'Architected and implemented the entire monorepo structure with frontend, backend, AI service, and shared packages',
            'Developed RESTful APIs using NestJS with modular architecture (facilities, programs, recommend, weather, user modules)',
            'Built responsive Next.js 15 frontend with React 19, TypeScript, and Tailwind CSS',
            'Implemented database schema and migrations using Drizzle ORM with Supabase PostgreSQL',
            'Created ETL pipelines for importing Seoul public sports facility data from CSV files'
          ],
          impacts: [
            'Delivered a production-ready platform with clean separation of concerns',
            'Enabled scalable architecture supporting multiple services and shared utilities',
            'Reduced development time through reusable components and shared schemas'
          ]
        },
        {
          title: 'AI/ML Integration',
          icon: Smartphone,
          responsibilities: [
            'Integrated GPT-4o API for personalized, natural Korean coaching-style recommendations',
            'Built FastAPI service with ML-based scoring algorithms for facility and program recommendations',
            'Implemented weighted scoring system considering distance, accessibility, category matching, weather suitability, and risk scores',
            'Developed crowd prediction algorithms based on time, day, and weather conditions',
            'Created feature extraction and program scoring modules using scikit-learn and pandas'
          ],
          impacts: [
            'Delivered personalized recommendations that consider user goals, location, weather, and preferences',
            'Improved user experience with natural language explanations in Korean',
            'Enabled intelligent facility and program matching with multi-factor scoring'
          ]
        }
      ]
    },
    {
      id: 'problem',
      type: 'problem',
      summary: 'Finding suitable sports facilities in Seoul is challenging due to fragmented information, lack of personalization, and no consideration for weather or crowd conditions.',
      content: 'Users in Seoul struggle to discover sports facilities that match their fitness goals, accessibility needs, and preferences. Existing solutions don\'t consider real-time factors like weather conditions, PM2.5 levels, or crowd predictions, leading to poor user experiences and missed opportunities for engagement.',
      painPoints: [
        { description: 'Fragmented data sources make it difficult to find comprehensive facility information' },
        { description: 'No personalized recommendations based on user goals, age, or preferences' },
        { description: 'Weather conditions and air quality not considered when suggesting outdoor activities' },
        { description: 'No crowd prediction to help users avoid busy times' },
        { description: 'Lack of program recommendations matching user fitness goals' }
      ],
      whyItMatters: 'KSPO aims to promote sports and fitness in Korea. By making it easier for citizens to discover and engage with sports facilities, we can increase participation rates and improve public health outcomes.'
    },
    {
      id: 'goals',
      type: 'goals',
      goals: [
        { icon: Zap, title: 'Real-time Recommendations', metric: 'AI-powered facility suggestions delivered in <2s' },
        { icon: Brain, title: 'Personalized AI Guidance', metric: 'GPT-4o natural Korean coaching-style recommendations' },
        { icon: TrendingUp, title: 'Data Integration', metric: '500+ Seoul public sports facilities with real-time data' },
        { icon: Users, title: 'User Experience', metric: 'Clean, modern UI targeting 45+ year old users' },
        { icon: BarChart3, title: 'Weather-Aware', metric: 'KMA weather API + AirKorea PM2.5 integration' },
        { icon: Award, title: 'Accessibility First', metric: 'Accessibility scoring and color-coded indicators' }
      ]
    },
    {
      id: 'research',
      type: 'research',
      insights: [
        {
          title: 'User Needs Analysis',
          items: [
            'Users need personalized recommendations based on fitness goals (다이어트, 체력증진, etc.)',
            'Location proximity is critical - users prefer facilities within 5km radius',
            'Weather conditions significantly impact outdoor activity choices',
            'Crowd levels affect user satisfaction - peak hours (18-21) should be avoided',
            'Accessibility features are important for users with mobility needs'
          ]
        },
        {
          title: 'Technical Requirements',
          items: [
            'Real-time data integration from multiple APIs (KMA weather, AirKorea PM2.5, Kakao geocoding)',
            'ML-based scoring requires feature extraction and weighted algorithms',
            'Natural language generation needed for personalized Korean recommendations',
            'Geolocation support essential for accurate distance calculations',
            'Performance optimization needed for handling 500+ facilities with complex scoring'
          ]
        }
      ]
    },
    {
      id: 'architecture',
      type: 'architecture',
      items: [
        {
          title: 'Monorepo Structure',
          description: 'Organized as a monorepo with clear separation between frontend, backend, AI service, and shared utilities. Each service can be developed, tested, and deployed independently while sharing common schemas and utilities.',
          features: [
            'Frontend: Next.js 15 with App Router, React 19, TypeScript, Tailwind CSS',
            'Backend: NestJS with modular architecture, Drizzle ORM, Supabase client',
            'AI Service: FastAPI with ML scoring algorithms and feature extraction',
            'Shared: TypeScript utilities, Zod schemas, distance calculations'
          ]
        },
        {
          title: 'User Flows',
          userFlows: [
            {
              name: 'Facility Discovery',
              icon: Users,
              description: 'Users discover nearby facilities through interactive map or AI recommendations',
              steps: [
                'User grants geolocation permission',
                'System fetches facilities within 5km radius',
                'AI service scores facilities based on user preferences',
                'GPT-4o generates personalized Korean recommendations',
                'User views facility details and programs'
              ]
            },
            {
              name: 'AI Recommendation',
              icon: Sparkles,
              description: 'Personalized facility recommendations considering multiple factors',
              steps: [
                'User inputs fitness goal, age, and preferences',
                'Backend fetches facilities and current weather data',
                'AI service calculates ML-based scores (distance, accessibility, category, weather, risk)',
                'GPT-4o generates natural Korean explanation',
                'Results displayed with score breakdown and insights'
              ]
            },
            {
              name: 'Program Matching',
              icon: TrendingUp,
              description: 'Users discover fitness programs matching their goals and schedule',
              steps: [
                'User views facility detail page',
                'System fetches available programs at facility',
                'AI service scores programs based on goal matching, time compatibility, category, price',
                'Programs displayed with scores and GPT-4o recommendations',
                'User can view program details and schedule'
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'design-system',
      type: 'design-system',
      items: [
        {
          title: 'Color System',
          type: 'colors',
          content: {
            colors: [
              { name: 'Primary Dark', hex: '#0B1C33', usage: 'Primary buttons, active states, headers' },
              { name: 'Background White', hex: '#FFFFFF', usage: 'Main background, card backgrounds' },
              { name: 'Border Gray', hex: '#EEF1F2', usage: 'Card borders, dividers' },
              { name: 'Text Slate', hex: '#1E293B', usage: 'Primary text, headings' },
              { name: 'Text Gray', hex: '#64748B', usage: 'Secondary text, descriptions' },
              { name: 'Accessibility Green', hex: '#10B981', usage: 'High accessibility scores' },
              { name: 'Accessibility Yellow', hex: '#F59E0B', usage: 'Medium accessibility scores' },
              { name: 'Accessibility Red', hex: '#EF4444', usage: 'Low accessibility scores' }
            ]
          }
        },
        {
          title: 'Component Structure',
          type: 'components',
          content: {
            components: [
              { title: 'TodayRecommendation', description: 'GPT-4o powered daily facility recommendation with weather and crowd insights', icon: Sparkles },
              { title: 'BaseMap', description: 'Interactive Leaflet map with geolocation, facility markers, and distance filtering', icon: Component },
              { title: 'WeatherSummary', description: 'Real-time weather and PM2.5 display with color-coded indicators', icon: LayoutTemplate },
              { title: 'ProgramCard', description: 'Program recommendation cards with AI scores and GPT-4o explanations', icon: Layers },
              { title: 'WeeklyActivityChart', description: 'Chart.js visualization of user weekly activity tracking', icon: Workflow }
            ]
          }
        }
      ]
    },
    {
      id: 'system-architecture',
      type: 'system-architecture',
      categories: [
        {
          title: 'Frontend Architecture',
          icon: Code,
          items: [
            'Next.js 15 with App Router for file-based routing and server components',
            'React 19 with hooks (useGeolocation, useRecommend, useUserProfile)',
            'React Query (TanStack Query) for server state management and caching',
            'Tailwind CSS for utility-first styling with custom design tokens',
            'Leaflet maps with React Leaflet for interactive facility visualization',
            'Chart.js with react-chartjs-2 for activity tracking visualizations',
            'Framer Motion for smooth animations and transitions',
            'Zustand for client-side state management',
            'Zod for runtime type validation and schema definitions'
          ]
        },
        {
          title: 'Backend & API',
          icon: Database,
          items: [
            'NestJS framework with modular architecture (facilities, programs, recommend, weather, user, accessibility modules)',
            'Drizzle ORM for type-safe database queries and migrations',
            'Supabase PostgreSQL database for facilities, programs, and user activities',
            'RESTful API design with proper error handling and validation',
            'OpenAI SDK integration for GPT-4o natural language generation',
            'Axios for external API calls (KMA weather, AirKorea PM2.5, Kakao geocoding)',
            'ETL pipelines for importing Seoul public sports facility data from CSV',
            'Environment-based configuration with dotenv'
          ]
        },
        {
          title: 'Integrations',
          icon: Layers,
          items: [
            'FastAPI AI Service: ML-based scoring algorithms, feature extraction, program scoring',
            'OpenAI GPT-4o: Personalized Korean coaching-style recommendations',
            'KMA (Korea Meteorological Administration): Real-time weather data API',
            'AirKorea: PM2.5 air quality monitoring API',
            'Kakao Maps API: Geocoding and address conversion',
            'Supabase: PostgreSQL database, authentication, and real-time capabilities',
            'Vercel: Frontend deployment and hosting',
            'Shared Package: TypeScript utilities and Zod schemas used across services'
          ]
        }
      ]
    },
    {
      id: 'key-features',
      type: 'key-features',
      metrics: [
        { title: '500+ Facilities', description: 'Seoul public sports facilities with comprehensive data' },
        { title: '<2s Response Time', description: 'AI recommendations delivered in under 2 seconds' },
        { title: '5km Radius', description: 'Geolocation-based facility filtering within 5km' },
        { title: 'Real-time Weather', description: 'KMA weather API + AirKorea PM2.5 integration' }
      ],
      userFeatures: [
        {
          title: 'AI-Powered Recommendations',
          icon: Sparkles,
          items: [
            'GPT-4o personalized facility recommendations in natural Korean',
            'ML-based scoring considering distance, accessibility, category, weather, and risk',
            'Weather-aware suggestions with PM2.5 and rain probability considerations',
            'Crowd prediction to suggest best visit times'
          ]
        },
        {
          title: 'Interactive Map',
          icon: MapPin,
          items: [
            'Real-time geolocation with user position tracking',
            'Color-coded facility markers (blue: user, grey: facilities, red: selected)',
            'Distance filtering showing facilities within 5km radius',
            'Click navigation to facility detail pages'
          ]
        },
        {
          title: 'Program Recommendations',
          icon: BarChart3,
          items: [
            'Goal-based program matching (다이어트, 체력증진, etc.)',
            'Time compatibility matching preferred days/times',
            'Price awareness preferring programs under 70,000 won',
            'GPT-4o personalized program guidance'
          ]
        },
        {
          title: 'Activity Tracking',
          icon: TrendingUp,
          items: [
            'Weekly activity chart visualization',
            'Activity minutes tracking',
            'Activity type categorization',
            'Facility visit history'
          ]
        }
      ],
      engineeringFeatures: [
        {
          title: 'Monorepo Architecture',
          icon: Layers,
          items: [
            'Separate packages for frontend, backend, AI service, and shared utilities',
            'Shared TypeScript schemas and utilities across services',
            'Independent deployment and scaling of each service',
            'Type-safe API contracts between services'
          ]
        },
        {
          title: 'ML Scoring System',
          icon: Brain,
          items: [
            'Weighted scoring algorithm: Distance (30%), Accessibility (25%), Category (20%), Weather (15%), Risk (10%)',
            'Program scoring: Goal matching (30%), Category (30%), Time compatibility (20%), Price (10%), Target (10%)',
            'Feature extraction and normalization for ML models',
            'Crowd prediction based on time, day, and weather patterns'
          ]
        },
        {
          title: 'Data Pipeline',
          icon: Workflow,
          items: [
            'ETL scripts for importing Seoul public sports facility data',
            'CSV parsing and data normalization',
            'Geocoding integration for address to coordinates conversion',
            'Database migrations with Drizzle ORM'
          ]
        }
      ]
    },
    {
      id: 'challenges',
      type: 'challenges',
      challenges: [
        {
          challenge: 'Integrating multiple external APIs (KMA weather, AirKorea PM2.5, Kakao geocoding) with different response formats and rate limits',
          solution: 'Implemented unified API wrapper modules in NestJS backend with error handling, caching (10-minute cache for weather), and fallback mechanisms. Used Axios interceptors for request/response transformation and error recovery.'
        },
        {
          challenge: 'Building accurate ML-based scoring algorithms without labeled training data',
          solution: 'Developed rule-based weighted scoring system using domain knowledge. Implemented feature extraction for distance (Haversine), accessibility scores, category matching, weather suitability, and risk factors. Used scikit-learn for normalization and pandas for data processing.'
        },
        {
          challenge: 'Generating natural Korean recommendations with GPT-4o while maintaining consistency and cost efficiency',
          solution: 'Created structured prompts with context (user goals, facility data, weather, crowd predictions) and specific tone requirements (PT trainer style, motivational). Implemented prompt templates and response caching to reduce API costs while maintaining personalization.'
        },
        {
          challenge: 'Handling large dataset of 500+ facilities with complex scoring calculations in real-time',
          solution: 'Optimized database queries with proper indexing, implemented parallel processing in AI service, and used React Query for client-side caching. Reduced response time from ~5s to <2s through query optimization and async processing.'
        },
        {
          challenge: 'Managing monorepo with multiple services and shared dependencies',
          solution: 'Created shared package with TypeScript utilities and Zod schemas. Used workspace references in package.json for local development. Implemented consistent TypeScript configurations and ESLint rules across packages.'
        }
      ]
    },
    {
      id: 'results',
      type: 'results',
      metrics: [
        'Built complete full-stack platform with 4 services (frontend, backend, AI service, shared)',
        'Integrated 500+ Seoul public sports facilities with real-time data',
        'Delivered AI recommendations in <2s response time',
        'Implemented 5 external API integrations (OpenAI, KMA, AirKorea, Kakao, Supabase)',
        'Created ML-based scoring system with 5 weighted factors',
        'Developed responsive UI targeting 45+ year old users with accessibility focus'
      ],
      description: 'Successfully delivered a production-ready sports facility discovery platform that combines real-time data, AI-powered recommendations, and weather-aware suggestions. The platform enables users to easily discover and engage with sports facilities in Seoul, with personalized guidance based on their fitness goals, location, and preferences.'
    },
    {
      id: 'learnings',
      type: 'learnings',
      cards: [
        { 
          title: 'Monorepo Architecture', 
          description: 'Learned to structure monorepos effectively with shared packages, workspace references, and independent service deployment. Key insight: balance between code sharing and service independence.', 
          icon: Layers 
        },
        {
          title: 'AI Integration Patterns',
          description: 'Discovered best practices for integrating LLMs (GPT-4o) in production: structured prompts, response caching, cost optimization, and maintaining consistency while allowing personalization.',
          icon: Brain
        },
        {
          title: 'ML Scoring Without Training Data',
          description: 'Developed rule-based ML scoring systems using domain knowledge and weighted factors. Learned to extract meaningful features and normalize data for scoring algorithms.',
          icon: BarChart3
        },
        {
          title: 'API Integration Complexity',
          description: 'Gained experience handling multiple external APIs with different formats, rate limits, and error patterns. Implemented robust error handling, caching, and fallback mechanisms.',
          icon: Database
        }
      ]
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      categories: [
        {
          category: 'Frontend',
          items: [
            { name: 'Next.js 15', icon: SiNextdotjs },
            { name: 'React 19', icon: SiReact },
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'Tailwind CSS', icon: SiTailwindcss }
          ]
        },
        {
          category: 'Backend',
          items: [
            { name: 'NestJS', icon: SiNodedotjs },
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'Supabase', icon: SiSupabase }
          ]
        },
        {
          category: 'AI/ML',
          items: [
            { name: 'FastAPI', icon: SiFastapi },
            { name: 'Python', icon: SiPython },
            { name: 'OpenAI GPT-4o', icon: SiOpenai }
          ]
        },
        {
          category: 'Deployment',
          items: [
            { name: 'Vercel', icon: SiVercel }
          ]
        }
      ]
    },
    {
      id: 'links',
      type: 'links',
      links: [],
      figmaUrl: '',
      caseStudyUrl: ''
    }
  ]
};
