// English content file: All user-facing text strings

export const bestiaEN = {
  overview: {
    paragraphs: [
      {
        type: 'text',
        content: [
          { type: 'span', text: 'Bestia', className: 'font-semibold text-foreground' },
          ' is a comprehensive real estate lead management CRM platform that streamlines the entire sales pipeline from lead capture to deal closure. Built for real estate investors and agents, it solves the critical problem of fragmented communication and data management across multiple channels.'
        ]
      },
      {
        type: 'text',
        content: 'I architected and developed the full-stack application, integrating AI-powered automation, multi-channel communication (email, SMS, voice), and advanced analytics to transform how real estate professionals manage their leads and close deals.'
      },
      {
        type: 'text',
        content: [
          'The platform was successfully showcased at ',
          { type: 'span', text: 'LA Tech Week', className: 'font-semibold text-foreground' },
          ', where it generated ',
          { type: 'span', text: '300 real estate agents on the waiting list', className: 'font-semibold text-foreground' },
          ' through compelling design and seamless functionality. As the designer and frontend developer, I led the design strategy, user research, and frontend integration, working closely with real estate agents weekly for design feedback and rapid iteration.'
        ]
      }
    ]
  },
  role: {
    roles: [
      {
        title: 'Frontend Engineering',
        iconKey: 'Frontend Engineering',
        responsibilities: [
          'Application architecture (Next.js 15 + modular feature system)',
          'API layer design (106 API routes, 45+ custom hooks)',
          'Database schema and API contracts',
          'Real-time communication features',
          'Integrations: Gmail OAuth, Twilio, OpenAI, Google Places',
          'Performance optimization'
        ],
        impacts: [
          'Email/SMS sync with <500ms response',
          'Real-time call status with custom event system',
          'Smooth performance with 10,000+ leads'
        ]
      },
      {
        title: 'UI/UX Design',
        iconKey: 'UI/UX Design',
        responsibilities: [
          'Built 50+ reusable components (atomic design)',
          'Designed lead management interface',
          'Created dashboard with analytics visualizations',
          'Designed multimodal communication flows',
          'Implemented accessibility foundations'
        ],
        impacts: [
          'Reduced clicks from 7+ to 3',
          'Clear status system improved agent speed',
          '300 agents added to waitlist via strong UI/UX'
        ]
      }
    ]
  },
  problem: {
    summary: 'Real estate teams juggle leads across email, phone, and SMS while trying to track deals and keep communication consistent. Generic CRMs are either overpriced or rigid, forcing agents to stitch together spreadsheets, inboxes, and phone apps.',
    content: 'Real estate teams juggle leads across email, phone, and SMS while trying to track deals and keep communication consistent. Generic CRMs are either overpriced or rigid, forcing agents to stitch together spreadsheets, inboxes, and phone apps.',
    painPoints: [
      { description: 'Lost leads from missed or delayed follow-up' },
      { description: 'Inconsistent communication across channels and teammates' },
      { description: 'Poor visibility into team performance and deal health' },
      { description: 'Manual data entry and repetitive workflows slow response' },
      { description: 'Hard to track deal progression and key metrics in one place' }
    ],
    whyItMatters: 'Bestia unifies multi-channel communication, automates routine steps with AI, and surfaces actionable insights so agents move faster and close more deals.'
  },
  goals: {
    goals: [
      { title: 'Reduce Communication Friction', iconKey: 'Reduce Communication Friction', metric: 'Single interface for email, SMS, and calls' },
      { title: 'Automate Routine Tasks', iconKey: 'Automate Routine Tasks', metric: '60% reduction in manual email/SMS composition time' },
      { title: 'Increase Deal Visibility', iconKey: 'Increase Deal Visibility', metric: 'Real-time status tracking and analytics dashboard' },
      { title: 'Improve Team Collaboration', iconKey: 'Improve Team Collaboration', metric: 'Shared notes, lead assignment, role-based permissions' },
      { title: 'Performance', iconKey: 'Performance', metric: 'Page load time < 2s, API response time < 500ms' },
      { title: 'User Adoption', iconKey: 'User Adoption', metric: '300 real estate agents on waiting list from LA Tech Week' }
    ]
  },
  research: {
    insights: [
      {
        title: 'User Research',
        items: [
          'Primary users: Real estate investors, agents, team managers',
          'Identified pain points: Switching between 5+ tools daily, copy-pasting information across platforms',
          'Missing follow-ups due to lack of reminders',
          'Difficulty tracking which leads are "hot"',
          'Weekly design feedback sessions with real estate agents'
        ]
      },
      {
        title: 'Key Design Insights',
        items: [
          'Color-coded status system helps users quickly identify lead priority',
          'Contextual actions (call, email, SMS) should be one click away',
          'Progress visualization motivates users and shows pipeline health',
          'Mobile-first design critical for field agents',
          'AI suggestions should be non-intrusive but easily accessible'
        ]
      }
    ]
  },
  architecture: {
    items: [
      {
        title: 'Feature-Based Architecture',
        description: 'Organized the application into feature modules with clear separation of concerns. Each feature contains its own components, hooks, and API logic, making the codebase scalable and maintainable.',
        features: ['Leads Management', 'Email Integration', 'SMS & Voice', 'AI Assistants', 'Templates', 'Team Management', 'Analytics Dashboard']
      },
      {
        title: 'Main User Flows',
        userFlows: [
          {
            name: 'Lead Management Flow',
            iconKey: 'Lead Management Flow',
            description: 'Core workflow agents perform 20–30 times per day.',
            steps: ['View Leads', 'Filter / Search', 'Select Lead', 'View Details', 'Take Action (Email / SMS / Call)', 'Update Status', 'Assign to Member']
          },
          {
            name: 'Communication Flow',
            iconKey: 'Communication Flow',
            description: 'Unifies email, SMS, call workflows with AI assistance.',
            steps: ['Select Lead', 'Choose Channel', 'AI Generate Content', 'Review / Edit', 'Send / Track / History']
          },
          {
            name: 'Deal Progression Flow',
            iconKey: 'Deal Progression Flow',
            description: 'Guides agents through the standardized closing pipeline.',
            steps: ['New Lead', 'Data Enrichment', 'Initial Contact', 'Negotiation', 'DocuSign', 'Escrow', 'Closed Deal']
          }
        ]
      }
    ]
  },
  designSystem: {
    items: [
      {
        title: 'Color System',
        type: 'colors',
        colorUsages: [
          { usage: 'Brand anchor' },
          { usage: 'CTAs & links' },
          { usage: 'States & glow' },
          { usage: 'Canvas & breathing room' }
        ],
        components: [
          {
            title: 'Atomic Design',
            iconKey: 'Atomic Design',
            description: 'Atoms → Molecules → Organisms to scale visuals with intent'
          },
          {
            title: '50+ Components',
            iconKey: '50+ Components',
            description: 'Buttons, inputs, tables, modals built as reusable tokens'
          },
          {
            title: 'Layout Components',
            iconKey: 'Layout Components',
            description: 'Grid primitives, responsive shells, navigation rails'
          },
          {
            title: 'Feature Components',
            iconKey: 'Feature Components',
            description: 'LeadCard, StatusBadge, ActionMenu, timeline blocks'
          },
          {
            title: '20+ Workflow Modals',
            iconKey: '20+ Workflow Modals',
            description: 'Approvals, signatures, escalations with consistent UX'
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
          'Next.js 15 App Router with Server Components and Client Components',
          'React 19 with automatic batching and improved concurrent rendering',
          'TypeScript 5.9.3 with 100% type coverage (331 TypeScript files)',
          'Tailwind CSS 4.1.12 for styling',
          'React Context for global state management',
          '45+ custom hooks for data fetching and business logic'
        ]
      },
      {
        title: 'Backend & API',
        iconKey: 'Backend & API',
        items: [
          '106 API Routes organized by feature (Next.js API Routes)',
          'JWT authentication with access and refresh token pattern',
          'Automatic token refresh with seamless renewal',
          'Role-based access control (RBAC) for team management',
          'API Gateway pattern with comprehensive error handling',
          'Server-side pagination for large datasets (10,000+ leads)'
        ]
      },
      {
        title: 'Integrations',
        iconKey: 'Integrations',
        items: [
          'Gmail OAuth 2.0: Email sending, thread management, push notifications',
          'Twilio API: Voice calls, SMS messaging, phone number management, call recording',
          'OpenAI GPT-4: Email/SMS generation, lead summarization, chat assistants',
          'Google Places API: Address autocomplete, property search',
          'PDF.js & Mammoth: Document parsing and rendering (PDF, Word)'
        ]
      }
    ]
  },
  keyFeatures: {
    metrics: [
      { title: '15+ Statuses', description: 'Color-coded, customizable states for clarity' },
      { title: '50+ Templates', description: 'Reusable SMS/email flows for speed' },
      { title: 'AI Content', description: 'Context-aware generation for every channel' },
      { title: '10,000+ Leads', description: 'Designed for high-volume performance' }
    ],
    userFeatures: [
      {
        title: 'Lead Management',
        iconKey: 'Lead Management',
        items: [
          'Advanced filtering (name, address, status, source, owner)',
          '15+ customizable statuses with progress tracking'
        ]
      },
      {
        title: 'Communication Hub',
        iconKey: 'Communication Hub',
        items: [
          'Unified email, SMS, and calls in one workspace',
          'AI-powered content suggestions across channels'
        ]
      },
      {
        title: 'Productivity Tools',
        iconKey: 'Productivity Tools',
        items: [
          'Reusable templates for outreach and follow-ups',
          'Property intelligence and financial calculators'
        ]
      },
      {
        title: 'Collaboration & Analytics',
        iconKey: 'Collaboration & Analytics',
        items: [
          'Role-based collaboration with assignments and notes',
          'Dashboards for team performance and training impact'
        ]
      }
    ],
    engineeringFeatures: [
      {
        title: 'Scalable Architecture',
        iconKey: 'Scalable Architecture',
        items: [
          'Feature-based modules with shared UI primitives',
          '106 API routes with consistent contracts'
        ]
      },
      {
        title: 'Data & Performance',
        iconKey: 'Data & Performance',
        items: [
          'Server-side pagination built for 10,000+ leads',
          '45+ custom hooks with caching and debounced queries'
        ]
      },
      {
        title: 'Real-time & Reliability',
        iconKey: 'Real-time & Reliability',
        items: [
          'Call status polling, email thread sync, SMS tracking',
          'Optimistic updates for instant UI feedback'
        ]
      },
      {
        title: 'Security & Resilience',
        iconKey: 'Security & Resilience',
        items: [
          'RBAC, token refresh, and API gateway patterns',
          'Lazy loading and bundle minimization for speed'
        ]
      }
    ]
  },
  challenges: {
    challenges: [
      {
        challenge: 'Real-time Call State Management Across Components',
        solution: 'Implemented localStorage-based state management with custom event system using CustomEvent API for cross-component communication. Created getActiveCallState() and setActiveCallState() utilities, and added CallIndicator component that listens to state changes globally. Result: Seamless call state synchronization across the entire application without complex state management libraries.'
      },
      {
        challenge: 'Gmail OAuth Token Refresh and Watch Renewal',
        solution: 'Implemented automatic token refresh before email operations and created renewWatch() function that refreshes Gmail push notifications. Added token validation checks before critical operations and built retry logic with exponential backoff for transient failures. Result: 99%+ email send success rate with automatic token management.'
      },
      {
        challenge: 'Complex Lead Status System with Dynamic Colors',
        solution: 'Created useStatusConfig() hook that fetches company-specific status colors with fallback to default colors when API data unavailable. Built StatusBadge component that handles both static and dynamic colors, and used React Context to share status configuration across components. Result: Flexible, maintainable status system that supports customization while maintaining consistency.'
      },
      {
        challenge: 'Large Dataset Performance (10,000+ Leads)',
        solution: 'Implemented server-side pagination with configurable page sizes, debounced search queries to reduce API calls, optimized re-renders with React.memo and useMemo, and lazy loaded heavy components (modals, charts). Result: Smooth performance even with 10,000+ leads, sub-500ms API response times.'
      }
    ]
  },
  results: {
    metrics: [
      'Page load time < 2 seconds (target: < 3s)',
      'API response time < 500ms average (target: < 1s)',
      '3-click workflow for common actions (was 7+ clicks)',
      'AI-generated content saves 2-3 minutes per email/SMS',
      '60% reduction in manual email/SMS composition time',
      '300 real estate agents on waiting list from LA Tech Week'
    ],
    description: 'The platform successfully launched at LA Tech Week, generating 300 real estate agents on the waiting list. User feedback highlighted intuitive design and significant time savings. The system proved to be more stable, faster, and more intuitive than existing solutions, with positive feedback from early adopters. Real-time status updates eliminate the need to refresh pages, and improved collaboration through shared notes and assignments reduces communication overhead.'
  },
  learnings: {
    cards: [
      {
        title: 'Modern Frontend Architecture',
        iconKey: 'Modern Frontend Architecture',
        description: 'Applied RSC, streaming, batching, and concurrent rendering for fast, scalable UI.'
      },
      {
        title: 'API & System Design',
        iconKey: 'API & System Design',
        description: 'Designed consistent contracts with strong error handling and stable integrations.'
      },
      {
        title: 'State & Performance Optimization',
        iconKey: 'State & Performance Optimization',
        description: 'Balanced Context and local state; added caching, lazy loading, debounced queries.'
      },
      {
        title: 'Third-Party Integrations',
        iconKey: 'Third-Party Integrations',
        description: 'Built production OAuth, webhooks, and rate-limited APIs for reliability.'
      },
      {
        title: 'User-Centered Engineering',
        iconKey: 'User-Centered Engineering',
        description: 'Weekly agent feedback translated real workflows into UI that drove adoption.'
      },
      {
        title: 'Performance Strategy',
        iconKey: 'Performance Strategy',
        description: 'Reduced latency via selective rendering, code splitting, and data loading wins.'
      }
    ]
  },
  techStack: {
    categories: [
      {
        category: 'Core Architecture',
        items: [
          'Next.js 15 App Router (RSC + Client)',
          'React 19 (concurrent)',
          'TypeScript 5.9',
          'Node.js runtime',
          'API Routes / Serverless'
        ]
      },
      {
        category: 'Communication & AI Integrations',
        items: [
          'Gmail API (OAuth + Threads)',
          'Twilio Voice/SMS',
          'OpenAI GPT-4 (summaries/templates)',
          'Google Places API'
        ]
      },
      {
        category: 'Infrastructure & Developer Experience',
        items: [
          'Vercel Deployment',
          'CI/CD automation',
          'Error monitoring',
          'Turbopack',
          'Git & GitHub',
          'Recharts',
          'PDF.js / Mammoth',
          '@dnd-kit/core'
        ]
      }
    ]
  },
  links: {
    links: [],
    figmaUrl: '#',
    caseStudyUrl: '#'
  }
};

