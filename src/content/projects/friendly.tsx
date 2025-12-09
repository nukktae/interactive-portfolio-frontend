import React from 'react';
import { ProjectDetailContent } from '@/types/projectDetail';
import {
  Code, Database, Smartphone, BarChart3, Users, Zap, Shield, Layers, TrendingUp,
  Award, Brain, Mail, FileText, Sparkles, Component, LayoutTemplate, Workflow, ExternalLink
} from 'lucide-react';
import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiVercel,
  SiTwilio, SiGooglemaps, SiFigma, SiGithub, SiOpenai, SiFirebase, SiExpo
} from 'react-icons/si';

export const friendlyContent: ProjectDetailContent = {
  slug: 'friendly',
  sections: [
    {
      id: 'overview',
      type: 'overview',
      content: React.createElement(
        React.Fragment,
        null,
        React.createElement('p', null, 
          'Friendly is a comprehensive cross-platform mobile application designed to enhance student productivity. It leverages AI technologies to provide lecture recording and transcription, smart schedule management, PDF document analysis, GPA tracking, and a school-verified community.'
        ),
        React.createElement('p', null,
          'The project is built with React Native and Expo, supporting iOS, Android, and Web platforms. The backend is powered by a Node.js + Express REST API with real-time synchronization through Firebase.'
        ),
        React.createElement('p', null,
          'Using OpenAI’s GPT-4o-mini, GPT-3.5-turbo, Whisper API, and Vision API, the app provides advanced AI capabilities including real-time lecture transcription, document analysis, and image-based schedule extraction.'
        )
      )
    },

    // MY ROLE ----------------------------------------
    {
      id: 'my-role',
      type: 'role',
      roles: [
        {
          title: 'Backend Developer',
          icon: Code,
          responsibilities: [
            'Designed and implemented RESTful APIs using Express.js (100+ endpoints)',
            'Architected Firestore database using Firebase Admin SDK',
            'Integrated OpenAI APIs (Whisper, GPT-4o-mini, GPT-3.5-turbo, Vision)',
            'Developed PDF parsing and text extraction services',
            'Implemented Google Calendar API and Google Drive backup system',
            'Managed production servers using PM2 with automated backup scheduling'
          ],
          impacts: [
            'Built a complete backend infrastructure with over 100 API endpoints',
            'Implemented real-time AI-powered transcription and document analysis',
            'Improved data reliability through Google Drive autobackup'
          ]
        },
        {
          title: 'Frontend Developer',
          icon: Smartphone,
          responsibilities: [
            'Developed cross-platform app using React Native and Expo',
            'Implemented file-based routing using Expo Router',
            'Built responsive UI using NativeWind (Tailwind CSS)',
            'Implemented global state management using React Context API',
            'Built PDF viewer and navigation using PDF.js',
            'Developed drag-and-drop calendar interface',
            'Integrated Firebase Authentication + Firestore synchronization'
          ],
          impacts: [
            'Delivered a unified app experience across iOS, Android, and Web',
            'Created a reusable UI component library with 50+ components',
            'Designed intuitive and modern user experience'
          ]
        }
      ]
    },

    // PROBLEM ----------------------------------------
    {
      id: 'problem',
      type: 'problem',
      summary:
        'Students rely on multiple disconnected tools for lecture recording, schedule management, document analysis, GPA tracking, and community participation. This lowers productivity and makes academic information difficult to organize.',
      content:
        'Modern university students juggle many tools: separate apps for lecture recording, calendars for schedule management, external PDF readers, spreadsheets for GPA tracking, and social media for school communities. Constantly switching platforms wastes time and causes fragmented information.',
      painPoints: [
        { description: 'Separate tools required for lecture recording and transcription' },
        { description: 'Manual schedule entry leads to errors and wasted time' },
        { description: 'Reading and summarizing PDF documents is time-consuming' },
        { description: 'Manual GPA calculation and graduation requirement tracking' },
        { description: 'School communities are scattered across multiple platforms' }
      ],
      whyItMatters:
        'Improving academic productivity and automating repetitive tasks with AI allows students to focus more on learning. A verified school community also ensures reliable information sharing and collaboration.'
    },

    // GOALS ----------------------------------------
    {
      id: 'goals',
      type: 'goals',
      goals: [
        { icon: Zap, title: 'Real-time AI Transcription', metric: 'Enhanced learning with Whisper-based transcription' },
        { icon: Brain, title: 'AI-Powered Document Analysis', metric: 'Automated data extraction using GPT-4o Vision' },
        { icon: TrendingUp, title: 'Boost Study Productivity', metric: 'Reduce tool switching time by 70%' },
        { icon: Users, title: 'Community Participation', metric: 'Verified school-based information sharing' },
        { icon: BarChart3, title: 'Accurate GPA Tracking', metric: 'AI-based graduation requirement analysis' },
        { icon: Award, title: 'Cross-Platform Support', metric: 'Unified experience on iOS, Android, Web' }
      ]
    },

    // RESEARCH ----------------------------------------
    {
      id: 'research',
      type: 'research',
      insights: [
        {
          title: 'User Needs Analysis',
          items: [
            'Students want simultaneous lecture recording + transcription with real-time feedback',
            'Schedule management requires image-based automation',
            'PDF workflows need summarization + chatbot assistance',
            'GPA tracking must connect to graduation requirements',
            'Communities must be school-verified to ensure trust'
          ]
        },
        {
          title: 'Technical Requirements',
          items: [
            'React Native + Expo chosen for cross-platform support',
            'Firebase for real-time data syncing',
            'OpenAI integration for AI features',
            'Efficient storage constraints for large files',
            'Autobackup system required for data reliability'
          ]
        }
      ]
    },

    // ARCHITECTURE ----------------------------------------
    {
      id: 'architecture',
      type: 'architecture',
      items: [
        {
          title: 'System Architecture',
          description:
            'A modular service-layer architecture following microservice principles. Each domain (lecture, schedule, PDF, GPA, community) is separated to maximize scalability and maintainability.',
          features: [
            'RESTful backend service layer',
            'Realtime Firestore database',
            'Firebase Storage file management',
            'Service-layer separation for business logic',
            'PM2-based production process management'
          ]
        },
        {
          title: 'Main User Flows',
          userFlows: [
            {
              name: 'Lecture Recording & Transcription',
              icon: Users,
              description:
                'Users record lectures, which are transcribed in real time using Whisper. GPT-4o-mini generates summaries and action items.',
              steps: [
                'Start recording',
                'Stream audio in real time',
                'Whisper transcription',
                'Generate summary with GPT-4o-mini',
                'Extract action items',
                'Provide lecture-aware chatbot'
              ]
            },
            {
              name: 'Schedule Extraction from Images',
              icon: Mail,
              description:
                'Users upload schedule images. GPT-4o Vision extracts schedule data and displays it on a drag-and-drop calendar.',
              steps: [
                'Upload schedule image',
                'Analyze with GPT-4o Vision',
                'Extract schedule data',
                'Edit on calendar',
                'Convert to lecture record',
                'Sync to Google Calendar (optional)'
              ]
            },
            {
              name: 'PDF Analysis & Chatbot',
              icon: TrendingUp,
              description:
                'Uploaded PDFs are text-parsed, stored, and analyzed. Users can ask questions via a PDF-aware chatbot.',
              steps: [
                'Upload PDF',
                'Extract text using PDF-Parse',
                'Store in Firebase Storage',
                'Analyze with GPT-4o-mini',
                'Page-level analysis available',
                'Chat using selected context'
              ]
            }
          ]
        }
      ]
    },

    // DESIGN SYSTEM ----------------------------------------
    {
      id: 'design-system',
      type: 'design-system',
      items: [
        {
          title: 'Color System',
          type: 'colors',
          content: {
            colors: [
              { name: 'Primary Blue', hex: '#3B82F6', usage: 'Primary action buttons and highlights' },
              { name: 'Secondary Gray', hex: '#6B7280', usage: 'Supporting text and backgrounds' },
              { name: 'Success Green', hex: '#10B981', usage: 'Success states and confirmations' },
              { name: 'Warning Yellow', hex: '#F59E0B', usage: 'Warnings and attention indicators' },
              { name: 'Error Red', hex: '#EF4444', usage: 'Errors and destructive actions' },
              { name: 'Light Background', hex: '#F9FAFB', usage: 'Screen and card backgrounds' }
            ]
          }
        },
        {
          title: 'Component Structure',
          type: 'components',
          content: {
            components: [
              { title: 'UI Components', description: 'Accessible components based on Radix UI', icon: Sparkles },
              { title: 'Feature Components', description: 'Modular components grouped by feature domains', icon: Component },
              { title: 'Layout Components', description: 'Page layouts and navigation structures', icon: LayoutTemplate },
              { title: 'Service Layer', description: 'Business logic and API handling modules', icon: Layers },
              { title: 'State Management', description: 'Global state powered by React Context', icon: Workflow }
            ]
          }
        }
      ]
    },

    // SYSTEM ARCHITECTURE ----------------------------------------
    {
      id: 'system-architecture',
      type: 'system-architecture',
      categories: [
        {
          title: 'Frontend Architecture',
          icon: Code,
          items: [
            'React Native 0.81.5 + Expo SDK 54.0.22',
            'Expo Router 6.0.14 (file-based routing)',
            'TypeScript 5.9.2',
            'NativeWind 4.2.1',
            'React Context API',
            'PDF.js 4.0.379 viewer',
            'React Native Reanimated'
          ]
        },
        {
          title: 'Backend & API',
          icon: Database,
          items: [
            'Node.js + Express.js 5.1.0',
            'Firebase Admin SDK 13.5.0',
            'Firestore NoSQL database',
            'Firebase Storage',
            '100+ RESTful API endpoints',
            'PM2 process management',
            'Multer 2.0.2 for uploads'
          ]
        },
        {
          title: 'Integrations',
          icon: Layers,
          items: [
            'OpenAI (GPT-4o-mini, GPT-3.5-turbo, Whisper, Vision)',
            'Firebase Authentication',
            'Google Calendar API',
            'Google Drive API autobackup',
            'Google Sign-In',
            'PDF-Parse 2.4.5'
          ]
        }
      ]
    },

    // KEY FEATURES ----------------------------------------
    {
      id: 'key-features',
      type: 'key-features',
      metrics: [
        { title: 'API Endpoints', description: '100+ RESTful API endpoints implemented' },
        { title: 'Cross-Platform', description: 'Supports iOS, Android, and Web' },
        { title: 'AI Models', description: 'Integrated 4 OpenAI models' },
        { title: 'Component Library', description: '50+ reusable UI components' }
      ],
      userFeatures: [
        {
          title: 'AI-Powered Lecture Transcription',
          icon: BarChart3,
          items: [
            'Live audio recording and transcription',
            'AI summary and action item generation',
            'Lecture-aware chatbot',
            'Conversation history management'
          ]
        },
        {
          title: 'Smart Schedule Management',
          icon: TrendingUp,
          items: [
            'Image-based schedule extraction (GPT-4o Vision)',
            'Drag-and-drop calendar interface',
            'Editable schedule items',
            'Google Calendar integration'
          ]
        },
        {
          title: 'PDF Analysis & Chatbot',
          icon: FileText,
          items: [
            'PDF upload + text extraction',
            'AI analysis (full & page-level)',
            'PDF-aware chatbot with context',
            'PDF viewer with navigation'
          ]
        }
      ],
      engineeringFeatures: [
        {
          title: 'Architecture & Infrastructure',
          icon: Layers,
          items: [
            'Service-layer architecture',
            'PM2 production management',
            'Daily Google Drive backups',
            'Comprehensive error handling',
            'Security middleware + CORS'
          ]
        },
        {
          title: 'Performance Optimization',
          icon: Zap,
          items: [
            'Realtime Firestore sync',
            'Optimized file upload system',
            'Chunked upload for large files',
            'Memory-efficient PDF parsing'
          ]
        }
      ]
    },

    // CHALLENGES ----------------------------------------
    {
      id: 'challenges',
      type: 'challenges',
      challenges: [
        {
          challenge: 'Optimizing real-time audio transcription',
          solution:
            'Implemented chunk-based Whisper streaming to keep latency low while maintaining full transcription accuracy.'
        },
        {
          challenge: 'Handling large PDF files efficiently',
          solution:
            'Used PDF-Parse + Firebase Storage to support fast extraction and page-level analysis.'
        },
        {
          challenge: 'Maintaining cross-platform consistency',
          solution:
            'Used Expo + NativeWind to build shared UI logic with consistent visuals across platforms.'
        },
        {
          challenge: 'Improving accuracy of image-based schedule extraction',
          solution:
            'Enhanced GPT-4o Vision prompts and added user-editable confirmation steps to ensure accuracy.'
        },
        {
          challenge: 'Ensuring data stability and backup',
          solution:
            'Built an automatic Google Drive backup system running daily at 3 AM with PM2 task scheduling.'
        }
      ]
    },

    // RESULTS ----------------------------------------
    {
      id: 'results',
      type: 'results',
      metrics: [
        '100+ REST API endpoints delivered',
        'Cross-platform support (iOS, Android, Web)',
        'Integrated 4 OpenAI AI models',
        '50+ UI components built',
        '8+ Firestore collections',
        'Data reliability ensured via autobackup system'
      ],
      description:
        'Friendly successfully delivers an AI-powered productivity platform for students. With real-time transcription, document analysis, and intelligent schedule management, the app significantly enhances the academic workflow. Cross-platform support and modular architecture ensure performance, scalability, and maintainability.'
    },

    // LEARNINGS ----------------------------------------
    {
      id: 'learnings',
      type: 'learnings',
      cards: [
        {
          title: 'Cross-Platform Development',
          description:
            'Learned how to support iOS, Android, and Web from a single codebase, while designing components that adapt across platforms.',
          icon: Smartphone
        },
        {
          title: 'AI API Integration',
          description:
            'Gained experience integrating Whisper, GPT-4o-mini, GPT-3.5-turbo, and Vision for transcription and analysis features.',
          icon: Brain
        },
        {
          title: 'Service-Layer Architecture',
          description:
            'Improved maintainability by separating business logic into a service layer.',
          icon: Layers
        },
        {
          title: 'Production Infrastructure',
          description:
            'Learned to manage production servers using PM2, implement autobackups, and design proper monitoring/logging systems.',
          icon: Shield
        }
      ]
    },

    // TECH STACK ----------------------------------------
    {
      id: 'tech-stack',
      type: 'tech-stack',
      categories: [
        {
          category: 'Frontend Framework',
          items: [
            { name: 'React Native', icon: SiReact },
            { name: 'Expo', icon: SiExpo },
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'Tailwind CSS', icon: SiTailwindcss }
          ]
        },
        {
          category: 'Backend & Database',
          items: [
            { name: 'Node.js', icon: SiNodedotjs },
            { name: 'Express.js', icon: SiNodedotjs },
            { name: 'Firebase', icon: SiFirebase }
          ]
        },
        {
          category: 'AI & Services',
          items: [
            { name: 'OpenAI', icon: SiOpenai },
            { name: 'Google APIs', icon: SiGooglemaps }
          ]
        },
        {
          category: 'Tools & Platforms',
          items: [
            { name: 'GitHub', icon: SiGithub },
            { name: 'Figma', icon: SiFigma }
          ]
        }
      ]
    },

    // LINKS ----------------------------------------
    {
      id: 'links',
      type: 'links',
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/nukktae/friendly', icon: ExternalLink },
        { label: 'Live Site', url: 'https://friendlykr.com', icon: ExternalLink }
      ],
      figmaUrl: '',
      caseStudyUrl: ''
    }
  ]
};
