// English content file: All user-facing text strings

export const friendlyEN = {
    overview: {
      paragraphs: [
        {
          type: 'text',
          content: [
            { type: 'span', text: 'Friendly', className: 'font-semibold text-foreground' },
            ' is a cross-platform productivity application designed to help university students manage lectures, schedules, documents, GPA tracking, and school communities in one unified experience.'
          ]
        },
        {
          type: 'text',
          content:
            'The app is built with React Native and Expo, supporting iOS, Android, and Web from a single codebase. It integrates real-time synchronization through Firebase and a Node.js + Express backend.'
        },
        {
          type: 'text',
          content:
            'By leveraging OpenAI models including Whisper, GPT-4o-mini, GPT-3.5-turbo, and Vision, Friendly provides real-time lecture transcription, document analysis, image-based schedule extraction, and AI-powered study assistance.'
        }
      ]
    },
  
    role: {
      roles: [
        {
          title: 'Backend Development',
          iconKey: 'Backend Development',
          responsibilities: [
            'Designed and implemented RESTful APIs using Express.js (100+ endpoints)',
            'Architected Firestore database with Firebase Admin SDK',
            'Integrated OpenAI APIs for transcription, analysis, and summarization',
            'Developed PDF parsing and text extraction services',
            'Integrated Google Calendar API and Google Drive autobackup system',
            'Managed production servers with PM2 and scheduled background jobs'
          ],
          impacts: [
            'Delivered a complete backend system with over 100 API endpoints',
            'Enabled real-time AI-powered transcription and document analysis',
            'Improved data reliability through automated daily backups'
          ]
        },
        {
          title: 'Frontend Development',
          iconKey: 'Frontend Development',
          responsibilities: [
            'Built a cross-platform application using React Native and Expo',
            'Implemented file-based routing with Expo Router',
            'Developed responsive UI using NativeWind (Tailwind CSS)',
            'Managed global state with React Context API',
            'Built PDF viewer and navigation experience',
            'Developed drag-and-drop calendar interface',
            'Integrated Firebase Authentication and Firestore synchronization'
          ],
          impacts: [
            'Delivered a unified experience across iOS, Android, and Web',
            'Built a reusable component system with 50+ UI components',
            'Created a clean, intuitive, and modern student-focused UX'
          ]
        }
      ]
    },
  
    problem: {
      summary:
        'Students rely on multiple disconnected tools for lecture recording, scheduling, document analysis, GPA tracking, and community participation, which reduces productivity and fragments academic information.',
      content:
        'Modern students juggle separate apps for lecture recording, calendar management, PDF reading, GPA calculation, and school communities. Constant context switching wastes time and makes it difficult to keep academic information organized.',
      painPoints: [
        { description: 'Separate tools required for lecture recording and transcription' },
        { description: 'Manual schedule entry is time-consuming and error-prone' },
        { description: 'Reading and summarizing PDFs takes significant effort' },
        { description: 'GPA and graduation requirement tracking is manual' },
        { description: 'School communities are fragmented across platforms' }
      ],
      whyItMatters:
        'Automating repetitive academic tasks with AI allows students to focus more on learning, while school-verified communities ensure reliable information sharing and collaboration.'
    },
  
    goals: {
      goals: [
        { title: 'Real-time AI Transcription', iconKey: 'Real-time AI Transcription', metric: 'Whisper-based live lecture transcription' },
        { title: 'AI Document Analysis', iconKey: 'AI Document Analysis', metric: 'Vision-based PDF and image understanding' },
        { title: 'Boost Productivity', iconKey: 'Boost Productivity', metric: 'Reduce tool switching by up to 70%' },
        { title: 'Verified Communities', iconKey: 'Verified Communities', metric: 'School-based trusted information sharing' },
        { title: 'Accurate GPA Tracking', iconKey: 'Accurate GPA Tracking', metric: 'Graduation requirement analysis' },
        { title: 'Cross-Platform Support', iconKey: 'Cross-Platform Support', metric: 'Single app across iOS, Android, and Web' }
      ]
    },
  
    research: {
      insights: [
        {
          title: 'User Needs',
          items: [
            'Students want real-time lecture recording and transcription',
            'Schedule creation should be automated from images',
            'PDF workflows need summarization and Q&A',
            'GPA tracking must connect to graduation requirements',
            'Communities must be school-verified to ensure trust'
          ]
        },
        {
          title: 'Technical Considerations',
          items: [
            'Cross-platform development required for reach and speed',
            'Realtime synchronization needed for academic data',
            'AI integration essential for productivity gains',
            'Large file handling and storage optimization required',
            'Reliable backup systems critical for user trust'
          ]
        }
      ]
    },
  
    architecture: {
      items: [
        {
          title: 'System Architecture',
          description:
            'A modular service-layer architecture separating lecture, schedule, PDF, GPA, and community domains to maximize scalability and maintainability.',
          features: [
            'RESTful backend service layer',
            'Realtime Firestore database',
            'Firebase Storage for file management',
            'Service-based separation of business logic',
            'PM2-based production process management'
          ]
        },
        {
          title: 'Main User Flows',
          userFlows: [
            {
              name: 'Lecture Recording & Transcription',
              iconKey: 'Lecture Recording & Transcription',
              description:
                'Lectures are recorded and transcribed in real time, with AI-generated summaries and action items.',
              steps: [
                'Start recording',
                'Stream audio',
                'Whisper transcription',
                'Generate AI summary',
                'Extract action items',
                'Lecture-aware chatbot'
              ]
            },
            {
              name: 'Schedule Extraction from Images',
              iconKey: 'Schedule Extraction from Images',
              description:
                'Schedule images are analyzed and converted into editable calendar entries.',
              steps: [
                'Upload schedule image',
                'Analyze with Vision model',
                'Extract schedule data',
                'Edit via calendar UI',
                'Convert to lecture records',
                'Optional Google Calendar sync'
              ]
            },
            {
              name: 'PDF Analysis & Chatbot',
              iconKey: 'PDF Analysis & Chatbot',
              description:
                'PDF documents are parsed and analyzed, enabling contextual Q&A.',
              steps: [
                'Upload PDF',
                'Extract text',
                'Store securely',
                'AI analysis',
                'Page-level insights',
                'Context-aware chat'
              ]
            }
          ]
        }
      ]
    },
  
    designSystem: {
      items: [
        {
          title: 'Design System',
          type: 'design',
          colorUsages: [
            { usage: 'Primary actions and highlights' },
            { usage: 'Supporting text and surfaces' },
            { usage: 'Success and warning states' },
            { usage: 'Clean academic canvas' }
          ],
          components: [
            {
              title: 'UI Components',
              iconKey: 'UI Components',
              description: 'Accessible and reusable UI primitives'
            },
            {
              title: 'Feature Components',
              iconKey: 'Feature Components',
              description: 'Domain-based components grouped by feature'
            },
            {
              title: 'Layout Components',
              iconKey: 'Layout Components',
              description: 'Navigation, screens, and responsive layouts'
            },
            {
              title: 'Service Layer',
              iconKey: 'Service Layer',
              description: 'Business logic and API handling'
            }
          ]
        }
      ]
    },
  
    systemArchitecture: {
      categories: [
        {
          title: 'Frontend Architecture',
          iconKey: 'Frontend Architecture',
          items: [
            'React Native with Expo',
            'Expo Router for file-based navigation',
            'TypeScript',
            'NativeWind (Tailwind CSS)',
            'React Context API',
            'PDF viewer integration'
          ]
        },
        {
          title: 'Backend & API',
          iconKey: 'Backend & API',
          items: [
            'Node.js and Express.js',
            'Firestore NoSQL database',
            'Firebase Storage',
            '100+ RESTful API endpoints',
            'PM2 production process management'
          ]
        },
        {
          title: 'Integrations',
          iconKey: 'Integrations',
          items: [
            'OpenAI (Whisper, GPT-4o-mini, GPT-3.5-turbo, Vision)',
            'Firebase Authentication',
            'Google Calendar API',
            'Google Drive autobackup',
            'PDF parsing services'
          ]
        }
      ]
    },
  
    keyFeatures: {
      metrics: [
        { title: '100+ APIs', description: 'Fully implemented REST endpoints' },
        { title: 'Cross-Platform', description: 'iOS, Android, and Web support' },
        { title: 'AI Models', description: 'Multiple OpenAI models integrated' },
        { title: 'UI Components', description: '50+ reusable components' }
      ],
      userFeatures: [
        {
          title: 'AI Lecture Transcription',
          iconKey: 'AI Lecture Transcription',
          items: [
            'Live audio recording and transcription',
            'AI-generated summaries and action items',
            'Lecture-aware chatbot'
          ]
        },
        {
          title: 'Smart Scheduling',
          iconKey: 'Smart Scheduling',
          items: [
            'Image-based schedule extraction',
            'Drag-and-drop calendar editing',
            'Google Calendar integration'
          ]
        },
        {
          title: 'PDF Analysis & Chat',
          iconKey: 'PDF Analysis & Chat',
          items: [
            'PDF upload and text extraction',
            'Context-aware AI analysis',
            'Interactive PDF chatbot'
          ]
        }
      ],
      engineeringFeatures: [
        {
          title: 'Infrastructure',
          iconKey: 'Infrastructure',
          items: [
            'Service-layer architecture',
            'Automated backups',
            'Secure file handling',
            'Production monitoring'
          ]
        },
        {
          title: 'Performance',
          iconKey: 'Performance',
          items: [
            'Realtime Firestore sync',
            'Optimized file uploads',
            'Efficient PDF parsing'
          ]
        }
      ]
    },
  
    challenges: {
      challenges: [
        {
          challenge: 'Real-time audio transcription latency',
          solution:
            'Implemented chunk-based Whisper streaming to maintain low latency and high accuracy.'
        },
        {
          challenge: 'Large PDF file handling',
          solution:
            'Optimized parsing and storage with Firebase Storage and efficient text extraction.'
        },
        {
          challenge: 'Cross-platform UI consistency',
          solution:
            'Used Expo and NativeWind to share UI logic across platforms.'
        },
        {
          challenge: 'Image-based schedule extraction accuracy',
          solution:
            'Improved Vision prompts and added user confirmation steps.'
        },
        {
          challenge: 'Data stability and backups',
          solution:
            'Built an automated Google Drive backup system with scheduled jobs.'
        }
      ]
    },
  
    results: {
      metrics: [
        '100+ REST API endpoints delivered',
        'Cross-platform support achieved',
        'Multiple AI models successfully integrated',
        '50+ reusable UI components built',
        'Stable data backed up automatically'
      ],
      description:
        'Friendly delivers an AI-powered academic productivity platform that simplifies how students manage lectures, schedules, and study materials. Its modular architecture and cross-platform design ensure scalability, reliability, and long-term maintainability.'
    },
  
    learnings: {
      cards: [
        {
          title: 'Cross-Platform Engineering',
          iconKey: 'Cross-Platform Engineering',
          description: 'Designed a single codebase supporting mobile and web platforms.'
        },
        {
          title: 'AI Integration',
          iconKey: 'AI Integration',
          description: 'Integrated multiple AI models for real-time transcription and analysis.'
        },
        {
          title: 'Service Architecture',
          iconKey: 'Service Architecture',
          description: 'Separated business logic into scalable service layers.'
        },
        {
          title: 'Production Systems',
          iconKey: 'Production Systems',
          description: 'Built reliable infrastructure with monitoring and automated backups.'
        }
      ]
    },
  
    techStack: {
      categories: [
        {
          category: 'Frontend',
          items: ['React Native', 'Expo', 'TypeScript', 'Tailwind CSS']
        },
        {
          category: 'Backend',
          items: ['Node.js', 'Express.js', 'Firebase']
        },
        {
          category: 'AI & Integrations',
          items: ['OpenAI', 'Google APIs']
        },
        {
          category: 'Tools',
          items: ['GitHub', 'Figma']
        }
      ]
    },
  
    links: {
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/nukktae/friendly' },
        { label: 'Live Site', url: 'https://friendlykr.com' }
      ],
      figmaUrl: '',
      caseStudyUrl: ''
    }
  };
  