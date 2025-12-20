// English content file: All user-facing text strings

export const majorMatchEN = {
    overview: {
      paragraphs: [
        {
          type: 'text',
          content: [
            { type: 'span', text: 'MajorMatch AI', className: 'font-semibold text-foreground' },
            ' is an intelligent career guidance platform designed to help students discover their ideal academic and career paths through AI-powered personalization, hands-on challenges, and real-world mentorship.'
          ]
        },
        {
          type: 'text',
          content:
            'The platform leverages OpenAI GPT-4 to analyze student responses from a comprehensive assessment, generating personalized major recommendations complete with career paths, required skills, and salary expectations.'
        },
        {
          type: 'text',
          content:
            'Beyond assessments, MajorMatch AI enables students to explore recommended fields through interactive challenges and connect directly with industry professionals via a structured mentorship booking system.'
        }
      ]
    },
  
    role: {
      roles: [
        {
          title: 'Full-Stack Developer',
          iconKey: 'Full-Stack Developer',
          description:
            'I architected and developed the entire platform end-to-end, covering backend infrastructure, API design, database architecture, AI integration, and frontend implementation.',
          responsibilities: [
            'Designed and built a RESTful API using Express.js, TypeScript, and PostgreSQL',
            'Implemented Firebase Authentication with secure backend token verification',
            'Designed database schemas, migrations, and relational data models',
            'Integrated OpenAI GPT-4 for AI-powered career recommendations',
            'Built email notification system for mentor session bookings',
            'Implemented secure file upload system for profile photos'
          ],
          impacts: [
            'Delivered a complete full-stack platform with secure authentication and AI integration',
            'Enabled reliable AI-powered recommendations through structured API design',
            'Established scalable database architecture for future feature expansion'
          ]
        },
        {
          title: 'Frontend Engineer',
          iconKey: 'Frontend Engineer',
          description:
            'I developed a modern, responsive frontend focused on clarity, engagement, and smooth user experience across the entire career discovery flow.',
          responsibilities: [
            'Built a responsive React application using TypeScript and Vite',
            'Implemented global state management with Redux Toolkit',
            'Designed animated UI interactions using Framer Motion',
            'Created assessment flows with progress tracking',
            'Developed mentor discovery and booking experience',
            'Built AI chat assistant interface for challenge guidance'
          ],
          impacts: [
            'Created an intuitive and engaging user experience across all devices',
            'Enabled smooth career exploration through well-designed assessment and challenge flows',
            'Delivered a polished interface that encourages student engagement'
          ]
        }
      ]
    },
  
    problem: {
      summary:
        'Students struggle to choose college majors due to generic guidance, limited exposure to real career paths, and lack of personalized insights.',
          content:
        'Traditional career guidance often relies on generalized advice and static information, leaving students to make life-impacting decisions without understanding how their interests, strengths, and learning styles align with real-world careers. Without hands-on exploration or access to industry professionals, students frequently commit to majors based on incomplete or inaccurate assumptions, leading to dissatisfaction and costly course changes.',
      painPoints: [
        { description: 'Generic career advice doesn\'t account for individual strengths and interests' },
        { description: 'Limited exposure to real-world career paths and industry professionals' },
        { description: 'No hands-on way to explore majors before committing' },
        { description: 'Lack of personalized insights based on student responses and preferences' }
      ],
      whyItMatters:
        'Providing personalized AI-powered recommendations combined with hands-on challenges and real mentorship can help students make more informed decisions about their academic and career paths.'
    },
  
    goals: {
      goals: [
        { title: 'AI-Powered Recommendations', iconKey: 'AI-Powered Recommendations', metric: 'Personalized major suggestions' },
        { title: 'Hands-On Exploration', iconKey: 'Hands-On Exploration', metric: 'Interactive challenges across 6 fields' },
        { title: 'Mentorship Connection', iconKey: 'Mentorship Connection', metric: 'Direct access to industry professionals' },
        { title: 'Career Visibility', iconKey: 'Career Visibility', metric: 'Clear paths, skills, and outlooks' },
        { title: 'Progress Tracking', iconKey: 'Progress Tracking', metric: 'Unified platform for exploration' }
      ]
    },
  
    research: {
      insights: [
        {
          title: 'Student Needs',
          items: [
            'Personalized guidance over generic career advice',
            'Hands-on experience before committing to a major',
            'Access to real professionals and industry insights',
            'Clear progress tracking and motivation'
          ]
        },
        {
          title: 'Technical Considerations',
          items: [
            'Reliable AI integration with structured responses',
            'Secure authentication and data management',
            'Scalable database design',
            'Mobile-friendly, responsive user experience'
          ]
        }
      ]
    },
  
    architecture: {
      items: [
        {
          title: 'Full-Stack Architecture',
          description: 'MajorMatch AI follows a modern full-stack architecture with clear separation between frontend and backend, enabling scalability, maintainability, and future feature expansion.',
          features: [
        'RESTful API built with Express.js and TypeScript',
        'PostgreSQL database with migrations and relational schemas',
        'Firebase Authentication for secure user identity management',
        'React frontend with TypeScript, Redux Toolkit, and Tailwind CSS',
        'OpenAI GPT-4 integration for AI recommendations and chat assistance',
        'Email notification system for mentorship workflows'
          ],
          userFlows: undefined
        }
      ]
    },
  
    keyFeatures: {
      metrics: [],
      userFeatures: [
        {
          title: 'AI-Powered Assessments',
          iconKey: 'AI-Powered Assessments',
          items: ['A 20-question assessment analyzed by GPT-4 to generate personalized major and career recommendations.']
        },
        {
          title: 'Interactive Challenges',
          iconKey: 'Interactive Challenges',
          items: ['Hands-on challenges across six major fields, allowing students to explore real tasks before committing.']
        },
        {
          title: 'Mentorship Platform',
          iconKey: 'Mentorship Platform',
          items: ['Direct access to industry professionals through profile browsing, video introductions, and session booking.']
        },
        {
          title: 'Progress Tracking',
          iconKey: 'Progress Tracking',
          items: ['Clear visibility into completed assessments, challenges, and mentorship sessions.']
        }
      ],
      engineeringFeatures: []
    },
  
    challenges: {
      challenges: [
        {
          problem: 'Ensuring reliable AI responses from GPT-4',
          solution:
            'Implemented structured prompts, strict JSON schemas, validation layers, and fallback handling to ensure stable outputs.'
        },
        {
          problem: 'Synchronizing Firebase authentication with backend user records',
          solution:
            'Built middleware to verify Firebase tokens server-side and automatically provision database user profiles.'
        },
        {
          problem: 'Managing secure file uploads',
          solution:
            'Implemented UUID-based file naming, type validation, and controlled static file serving.'
        }
      ]
    },
  
    results: {
      metrics: [
        'Fully functional AI-powered career guidance platform',
        'Personalized major recommendations with career insights',
        '20+ interactive challenges across 6 fields',
        'Mentorship booking system with email notifications',
        'Secure authentication and profile management',
        'Responsive experience across desktop and mobile'
      ],
      description: 'MajorMatch AI successfully delivers a comprehensive career guidance platform that combines AI-powered recommendations, hands-on exploration, and real-world mentorship to help students make informed decisions about their academic and career paths.'
    },
  
    learnings: {
      cards: [
        {
          title: 'AI Integration',
          iconKey: 'AI Integration',
          description:
            'Learned the importance of prompt engineering, response validation, and fallback strategies when building AI-driven products.'
        },
        {
          title: 'Full-Stack Type Safety',
          iconKey: 'Full-Stack Type Safety',
          description:
            'Maintaining shared TypeScript contracts across frontend and backend significantly reduced bugs and improved development speed.'
        },
        {
          title: 'Scalable Architecture',
          iconKey: 'Scalable Architecture',
          description:
            'Designing clean separation between services made the platform easier to extend and maintain.'
        }
      ]
    },
  
    techStack: {
      categories: [
        { category: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Redux Toolkit'] },
        { category: 'Backend', items: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL'] },
        { category: 'Services', items: ['Firebase Authentication', 'OpenAI GPT-4', 'Nodemailer'] },
        { category: 'Tools', items: ['GitHub', 'Vercel'] }
      ]
    },
    designSystem: {
      items: []
    },
    systemArchitecture: {
      categories: []
    },
    links: {
      links: [],
      figmaUrl: '#',
      caseStudyUrl: '#'
    }
  };
  