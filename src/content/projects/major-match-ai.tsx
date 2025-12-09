import React from 'react';
import { ProjectDetailContent } from '@/types/projectDetail';
import {
  Code, Database, Smartphone, BarChart3, Users, Zap, Shield, Layers, TrendingUp,
  Award, Brain, Mail, FileText, Sparkles, Component, LayoutTemplate, Workflow, ExternalLink
} from 'lucide-react';
import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiVercel,
  SiTwilio, SiGooglemaps, SiFigma, SiGithub, SiOpenai, SiPostgresql,
  SiFirebase
} from 'react-icons/si';

export const majorMatchAiContent: ProjectDetailContent = {
  slug: 'majormatch-ai',
  sections: [
    {
      id: 'overview',
      type: 'overview',
      content: React.createElement(
        React.Fragment,
        null,
        React.createElement('p', null, 'MajorMatch AI is an intelligent career guidance platform that revolutionizes how students discover their ideal academic path. By combining cutting-edge AI technology with personalized mentorship and hands-on challenges, the platform provides a comprehensive solution for career exploration and decision-making.'),
        React.createElement('p', null, 'The platform leverages OpenAI\'s GPT-4 to analyze student responses from comprehensive assessments, generating personalized major recommendations with detailed career paths, required skills, and salary expectations. Students can then explore these recommendations through interactive challenges across six major fields: Computer Science, Business, Psychology, Engineering, Design, and Data Science.'),
        React.createElement('p', null, 'Beyond assessments, MajorMatch AI connects students with industry professionals through a sophisticated mentorship system. Students can browse mentor profiles, view introductory videos, and book one-on-one sessions. The platform also includes a robust profile management system, progress tracking, and an AI-powered chat assistant to help students understand challenges and career paths.')
      )
    },
    {
      id: 'my-role',
      type: 'role',
      roles: [
        {
          title: 'Full-Stack Developer',
          icon: Code,
          responsibilities: [
            'Architected and developed the entire full-stack application from scratch',
            'Built RESTful API backend with Express.js, TypeScript, and PostgreSQL',
            'Implemented Firebase Authentication for secure user management',
            'Created comprehensive database schema with migrations and triggers',
            'Developed file upload system for profile photos using Multer',
            'Integrated OpenAI GPT-4 API for AI-powered career recommendations',
            'Built email notification system using Nodemailer for mentor session bookings'
          ],
          impacts: [
            'Delivered a production-ready application with scalable architecture',
            'Implemented secure authentication and authorization middleware',
            'Created efficient database queries with proper indexing for performance',
            'Established robust error handling and validation across all endpoints'
          ]
        },
        {
          title: 'Frontend Engineer',
          icon: Smartphone,
          responsibilities: [
            'Developed responsive React application with TypeScript and Vite',
            'Implemented complex state management using Redux Toolkit',
            'Created beautiful, animated UI components with Framer Motion and Tailwind CSS',
            'Built comprehensive routing system with protected routes',
            'Developed interactive assessment flow with progress tracking',
            'Created challenge system with filtering, search, and detailed views',
            'Implemented mentor booking system with calendar integration',
            'Built profile management with photo upload and editing capabilities',
            'Designed and implemented AI chat assistant interface'
          ],
          impacts: [
            'Created an intuitive, modern user experience with smooth animations',
            'Implemented responsive design that works seamlessly across all devices',
            'Built reusable component library for consistent UI/UX',
            'Delivered high-performance frontend with optimized bundle size'
          ]
        }
      ]
    },
    {
      id: 'problem',
      type: 'problem',
      summary: 'Students face overwhelming choices when selecting college majors, often lacking personalized guidance and real-world insights into different career paths.',
      content: 'The traditional approach to career guidance relies heavily on generic advice and limited exposure to actual career fields. Students often make major decisions based on incomplete information, leading to dissatisfaction, career changes, and wasted time and resources. There\'s a critical need for a platform that combines AI-powered personalization with real-world experiences and mentorship opportunities.',
      painPoints: [
        { description: 'Lack of personalized career recommendations based on individual interests, learning styles, and goals' },
        { description: 'Limited hands-on experience to explore different fields before committing to a major' },
        { description: 'Difficulty accessing industry professionals and mentors for guidance' },
        { description: 'Generic career information that doesn\'t account for individual strengths and preferences' },
        { description: 'No centralized platform to track progress and explore multiple career paths simultaneously' }
      ],
      whyItMatters: 'Choosing the right major is one of the most important decisions students make, impacting their career trajectory, job satisfaction, and financial future. By providing AI-powered insights, hands-on challenges, and direct access to mentors, MajorMatch AI empowers students to make informed decisions aligned with their passions and potential.'
    },
    {
      id: 'goals',
      type: 'goals',
      goals: [
        { icon: Zap, title: 'AI-Powered Recommendations', metric: 'GPT-4 powered assessment engine generating personalized major recommendations' },
        { icon: Brain, title: 'Interactive Learning', metric: '20+ hands-on challenges across 6 major fields with progress tracking' },
        { icon: TrendingUp, title: 'User Engagement', metric: 'Comprehensive assessment system with 20 questions covering learning styles, problem-solving, and career goals' },
        { icon: Users, title: 'Mentorship Network', metric: 'Direct connection with industry professionals through booking system and video introductions' },
        { icon: BarChart3, title: 'Progress Analytics', metric: 'Real-time tracking of assessments completed, challenges finished, and mentor sessions booked' },
        { icon: Award, title: 'Career Discovery', metric: 'Detailed career information including job outlook, salary expectations, and required coursework for each major' }
      ]
    },
    {
      id: 'research',
      type: 'research',
      insights: [
        {
          title: 'User Needs Analysis',
          items: [
            'Students need personalized recommendations based on their unique interests and learning styles',
            'Hands-on experience is crucial before committing to a major field of study',
            'Access to industry professionals provides invaluable real-world insights',
            'Progress tracking motivates continued engagement and exploration',
            'Visual and interactive interfaces improve user engagement and comprehension'
          ]
        },
        {
          title: 'Technical Requirements',
          items: [
            'AI integration requires robust API handling and error management',
            'Real-time data synchronization needed for profile updates and session bookings',
            'Secure file upload system required for profile photos',
            'Email notifications essential for mentor-student communication',
            'Scalable database architecture to support growing user base and assessment data',
            'Responsive design critical for mobile-first student user base'
          ]
        }
      ]
    },
    {
      id: 'architecture',
      type: 'architecture',
      items: [
        {
          title: 'System Architecture',
          description: 'MajorMatch AI follows a modern full-stack architecture with clear separation between frontend and backend, enabling scalability and maintainability.',
          features: [
            'RESTful API backend built with Express.js and TypeScript',
            'PostgreSQL database with comprehensive schema and migrations',
            'Firebase Authentication for secure user management',
            'React frontend with TypeScript, Vite, and Redux for state management',
            'File upload system with Multer for profile photo management',
            'Email service integration using Nodemailer',
            'OpenAI GPT-4 integration for AI-powered recommendations',
            'CORS-enabled API for cross-origin requests'
          ]
        },
        {
          title: 'User Flows',
          userFlows: [
            {
              name: 'Assessment & Discovery Flow',
              icon: Users,
              description: 'Complete AI-powered assessment to discover ideal majors',
              steps: [
                'User signs up/logs in with Firebase Authentication',
                'Navigates to Assessments page and starts 20-question assessment',
                'Answers questions covering learning style, problem-solving, work environment, and career goals',
                'System sends responses to OpenAI GPT-4 API for analysis',
                'Receives personalized major recommendations with detailed career information',
                'Can save results to profile and explore recommended majors further'
              ]
            },
            {
              name: 'Mentorship Booking Flow',
              icon: Mail,
              description: 'Connect with industry professionals through structured mentorship sessions',
              steps: [
                'Browse mentor profiles with specialties, experience, and ratings',
                'View mentor introduction videos and detailed profiles',
                'Select preferred date and time using calendar interface',
                'Add personalized message explaining goals and questions',
                'System creates session record in database',
                'Email notification sent to mentor with session details',
                'Mentor can accept, reject, or reschedule through email response'
              ]
            },
            {
              name: 'Challenge Exploration Flow',
              icon: TrendingUp,
              description: 'Explore career fields through hands-on challenges with progress tracking',
              steps: [
                'Browse challenges filtered by field, difficulty, or search query',
                'View challenge details including tasks, prerequisites, and resources',
                'Access AI chat assistant to understand challenge requirements',
                'Complete prerequisite learning materials (videos, articles, tools)',
                'Work through challenge tasks with step-by-step instructions',
                'Track progress and mark tasks as completed',
                'Earn points and achievements upon challenge completion'
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
              { name: 'Violet Primary', hex: '#7C3AED', usage: 'Primary brand color for buttons, links, and key UI elements' },
              { name: 'Fuchsia Accent', hex: '#D946EF', usage: 'Accent color for gradients, highlights, and interactive states' },
              { name: 'Slate Background', hex: '#F8FAFC', usage: 'Light background for cards and content areas' },
              { name: 'Gradient Overlay', hex: 'from-violet-600 to-fuchsia-500', usage: 'Gradient backgrounds for hero sections and CTAs' }
            ]
          }
        },
        {
          title: 'Component Structure',
          type: 'components',
          content: {
            components: [
              { title: 'Layout Components', description: 'PageLayout, Navbar, and ProtectedRoute components providing consistent structure and navigation', icon: LayoutTemplate },
              { title: 'Assessment Components', description: 'AssessmentQuestion, AssessmentResults, and AssessmentHistory for the AI-powered assessment flow', icon: Component },
              { title: 'Challenge Components', description: 'ChallengeCard, ChallengeDetail, TaskInstructions, and PreRequisites for interactive challenge system', icon: Sparkles },
              { title: 'Mentor Components', description: 'MentorVideo, BookingSection, SessionManager, and Calendar for mentorship booking system', icon: Layers },
              { title: 'Profile Components', description: 'PhotoUpload, EditProfileForm, Stats, and StatCard for user profile management', icon: Workflow }
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
            'React 18 with TypeScript for type-safe component development',
            'Vite for fast development and optimized production builds',
            'Redux Toolkit for centralized state management',
            'React Router v6 for client-side routing with protected routes',
            'Framer Motion for smooth animations and transitions',
            'Tailwind CSS for utility-first styling with custom design system',
            'Component-based architecture with reusable UI components',
            'Custom hooks (useAuth, useProfile) for shared logic',
            'Context API (AuthContext) for authentication state',
            'Responsive design with mobile-first approach'
          ]
        },
        {
          title: 'Backend & API',
          icon: Database,
          items: [
            'Express.js RESTful API with TypeScript',
            'PostgreSQL database with comprehensive schema design',
            'Database migrations for version-controlled schema changes',
            'Firebase Admin SDK for server-side authentication verification',
            'JWT-based authentication middleware for route protection',
            'Multer middleware for multipart/form-data file uploads',
            'Nodemailer for email notifications and mentor communications',
            'CORS configuration for cross-origin resource sharing',
            'Error handling middleware with structured error responses',
            'Health check endpoint for monitoring and deployment verification'
          ]
        },
        {
          title: 'Integrations',
          icon: Layers,
          items: [
            'Firebase Authentication for user sign-up, login, and session management',
            'OpenAI GPT-4 API for AI-powered career recommendations and chat assistance',
            'PostgreSQL database for persistent data storage (users, profiles, sessions)',
            'File system storage for profile photo uploads with UUID-based naming',
            'Email service (Nodemailer) for mentor session notifications',
            'React Icons library for consistent iconography across the application',
            'Date-fns for date manipulation and formatting in calendar components'
          ]
        }
      ]
    },
    {
      id: 'key-features',
      type: 'key-features',
      metrics: [
        { title: '20-Question Assessment', description: 'Comprehensive assessment covering learning styles, problem-solving approaches, work preferences, and career goals' },
        { title: '6 Career Fields', description: 'Challenges available across Computer Science, Business, Psychology, Engineering, Design, and Data Science' },
        { title: '20+ Interactive Challenges', description: 'Hands-on projects ranging from beginner to advanced difficulty levels' },
        { title: 'AI-Powered Recommendations', description: 'GPT-4 generates personalized major recommendations with career paths, skills, and salary data' }
      ],
      userFeatures: [
        {
          title: 'Assessment & Discovery',
          icon: BarChart3,
          items: [
            '20-question comprehensive assessment with multiple categories',
            'AI-powered major recommendations using GPT-4',
            'Detailed career information including job outlook and salary expectations',
            'Assessment history tracking for multiple attempts',
            'Progress visualization with completion metrics'
          ]
        },
        {
          title: 'Interactive Challenges',
          icon: TrendingUp,
          items: [
            'Filterable challenge library by field, difficulty, and search',
            'Step-by-step task instructions with prerequisites',
            'AI chat assistant to explain challenges and answer questions',
            'Progress tracking with task completion status',
            'Resource links for learning materials and tools'
          ]
        },
        {
          title: 'Mentorship Platform',
          icon: Users,
          items: [
            'Browse mentor profiles with specialties and ratings',
            'Watch mentor introduction videos',
            'Calendar-based session booking system',
            'Email notifications for session confirmations',
            'Session status tracking (pending, accepted, completed)'
          ]
        },
        {
          title: 'Profile Management',
          icon: FileText,
          items: [
            'Customizable user profiles with photo uploads',
            'Display name and nickname customization',
            'Assessment results and challenge progress tracking',
            'Statistics dashboard with completion metrics',
            'Secure profile editing with validation'
          ]
        }
      ],
      engineeringFeatures: [
        {
          title: 'Backend Infrastructure',
          icon: Layers,
          items: [
            'TypeScript-based Express.js API with type safety',
            'PostgreSQL database with migrations and triggers',
            'Firebase Admin SDK integration for authentication',
            'File upload system with Multer and UUID-based storage',
            'Email service integration with Nodemailer',
            'Comprehensive error handling and validation middleware'
          ]
        },
        {
          title: 'Frontend Architecture',
          icon: Code,
          items: [
            'React 18 with TypeScript for type-safe development',
            'Redux Toolkit for centralized state management',
            'Protected route system with authentication checks',
            'Reusable component library with consistent styling',
            'Optimized bundle size with Vite build system',
            'Responsive design with Tailwind CSS utility classes'
          ]
        },
        {
          title: 'AI Integration',
          icon: Brain,
          items: [
            'OpenAI GPT-4 API integration for career recommendations',
            'Structured JSON response parsing and validation',
            'Chat completion API for interactive assistance',
            'Error handling and fallback mechanisms',
            'API key management with environment variables'
          ]
        }
      ]
    },
    {
      id: 'challenges',
      type: 'challenges',
      challenges: [
        {
          challenge: 'Integrating OpenAI GPT-4 API with structured JSON responses',
          solution: 'Implemented a robust prompt engineering system with clear JSON schema definitions, response format constraints, and comprehensive error handling. Created fallback mechanisms for API failures and validation for response structure to ensure reliable major recommendations.'
        },
        {
          challenge: 'Managing file uploads securely with proper storage and access',
          solution: 'Built a Multer-based file upload system with UUID-based file naming to prevent conflicts, implemented file type validation, and created a static file serving endpoint. Added proper error handling for file size limits and storage failures.'
        },
        {
          challenge: 'Synchronizing authentication state between Firebase and PostgreSQL',
          solution: 'Developed a middleware system that verifies Firebase tokens on the backend and creates corresponding user records in PostgreSQL. Implemented automatic user profile creation on first login and proper session management across frontend and backend.'
        },
        {
          challenge: 'Building a scalable challenge system with multiple fields and difficulty levels',
          solution: 'Created a modular challenge data structure with TypeScript interfaces, organized challenges by field in separate files, and implemented efficient filtering and search algorithms. Built reusable components for challenge display and detail views.'
        },
        {
          challenge: 'Implementing real-time email notifications for mentor sessions',
          solution: 'Integrated Nodemailer with proper email templating, configured SMTP settings, and created a robust email service that handles both session creation notifications and error scenarios. Added proper error handling and logging for email delivery issues.'
        },
        {
          challenge: 'Creating smooth animations and transitions without performance issues',
          solution: 'Used Framer Motion for declarative animations, implemented proper animation optimization with will-change CSS properties, and used React.memo for expensive components. Ensured animations don\'t block the main thread and provide smooth 60fps performance.'
        }
      ]
    },
    {
      id: 'results',
      type: 'results',
      metrics: [
        'Full-stack application with complete frontend and backend implementation',
        'AI-powered assessment system generating personalized major recommendations',
        '20+ interactive challenges across 6 major career fields',
        'Mentorship booking system with email notifications',
        'Comprehensive user profile management with photo uploads',
        'Responsive design working seamlessly across desktop, tablet, and mobile devices',
        'Type-safe codebase with TypeScript throughout frontend and backend',
        'Scalable database architecture with proper migrations and indexing',
        'Secure authentication and authorization system',
        'Production-ready error handling and validation'
      ],
      description: 'MajorMatch AI successfully delivers a comprehensive career guidance platform that combines AI technology, hands-on learning, and mentorship opportunities. The application provides students with personalized insights, real-world experience through challenges, and direct access to industry professionals. The technical implementation demonstrates modern full-stack development practices with a focus on scalability, security, and user experience.'
    },
    {
      id: 'learnings',
      type: 'learnings',
      cards: [
        { 
          title: 'AI Integration Best Practices', 
          description: 'Learned the importance of prompt engineering, structured response formats, and comprehensive error handling when integrating AI APIs. Implemented fallback mechanisms and validation to ensure reliable user experience even when AI services encounter issues.', 
          icon: Brain 
        },
        { 
          title: 'Full-Stack Type Safety', 
          description: 'Gained deep understanding of TypeScript\'s value in full-stack development. Maintaining consistent types across frontend and backend reduces bugs and improves developer experience. Created shared type definitions and interfaces for API contracts.', 
          icon: Shield 
        },
        { 
          title: 'Database Design & Migrations', 
          description: 'Mastered PostgreSQL schema design with proper relationships, indexes, and triggers. Learned the importance of migration-based database versioning for maintaining schema consistency across environments and enabling rollback capabilities.', 
          icon: Database 
        },
        { 
          title: 'State Management at Scale', 
          description: 'Implemented Redux Toolkit for complex state management, learning when to use global state vs local state. Created reusable slices and selectors that improved code organization and performance through proper memoization.', 
          icon: Workflow 
        },
        { 
          title: 'File Upload Security', 
          description: 'Developed secure file upload system with proper validation, storage management, and access control. Learned about MIME type validation, file size limits, and secure file naming strategies to prevent security vulnerabilities.', 
          icon: Shield 
        },
        { 
          title: 'Authentication Architecture', 
          description: 'Gained expertise in implementing Firebase Authentication with custom backend verification. Learned to create middleware for protected routes, handle token refresh, and synchronize user state across frontend and backend systems.', 
          icon: Shield 
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
            { name: 'React', icon: SiReact },
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'Vite', icon: SiReact },
            { name: 'Tailwind CSS', icon: SiTailwindcss },
            { name: 'Redux Toolkit', icon: SiReact }
          ]
        },
        {
          category: 'Backend',
          items: [
            { name: 'Node.js', icon: SiNodedotjs },
            { name: 'Express', icon: SiNodedotjs },
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'PostgreSQL', icon: SiPostgresql }
          ]
        },
        {
          category: 'Services & Integrations',
          items: [
            { name: 'Firebase', icon: SiFirebase },
            { name: 'OpenAI', icon: SiOpenai },
            { name: 'Nodemailer', icon: Mail }
          ]
        },
        {
          category: 'Tools & Deployment',
          items: [
            { name: 'GitHub', icon: SiGithub },
            { name: 'Vercel', icon: SiVercel }
          ]
        }
      ]
    },
    {
      id: 'links',
      type: 'links',
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/nukktae/major-match-ai', icon: ExternalLink },
        { label: 'Live Demo', url: 'https://majormatch-demo.vercel.app', icon: ExternalLink }
      ],
      figmaUrl: '',
      caseStudyUrl: ''
    }
  ]
};
