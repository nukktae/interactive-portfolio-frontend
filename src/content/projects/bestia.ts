import React from 'react';
import { ProjectDetailContent } from '@/types/projectDetail';
import { Code, Database, Smartphone, BarChart3, Users, Zap, Shield, Layers, TrendingUp, Award, Brain, Mail, FileText, Sparkles, Component, LayoutTemplate, Workflow } from 'lucide-react';
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiVercel, 
  SiTwilio, 
  SiGooglemaps, 
  SiFigma, 
  SiGithub,
  SiOpenai
} from 'react-icons/si';

export const bestiaContent: ProjectDetailContent = {
  slug: 'bestia',
  sections: [
    {
      id: 'overview',
      type: 'overview',
      content: React.createElement(
        React.Fragment,
        null,
        React.createElement('p', null,
          React.createElement('span', { className: 'font-semibold text-foreground' }, 'Bestia'),
          ' is a comprehensive real estate lead management CRM platform that streamlines the entire sales pipeline from lead capture to deal closure. Built for real estate investors and agents, it solves the critical problem of fragmented communication and data management across multiple channels.'
        ),
        React.createElement('p', null,
          'I architected and developed the full-stack application, integrating AI-powered automation, multi-channel communication (email, SMS, voice), and advanced analytics to transform how real estate professionals manage their leads and close deals.'
        ),
        React.createElement('p', null,
          'The platform was successfully showcased at ',
          React.createElement('span', { className: 'font-semibold text-foreground' }, 'LA Tech Week'),
          ', where it generated ',
          React.createElement('span', { className: 'font-semibold text-foreground' }, '300 real estate agents on the waiting list'),
          ' through compelling design and seamless functionality. As the designer and frontend developer, I led the design strategy, user research, and frontend integration, working closely with real estate agents weekly for design feedback and rapid iteration.'
        )
      )
    },
    {
      id: 'my-role',
      type: 'role',
      roles: [
        {
          title: 'Frontend Engineering',
          icon: Code,
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
          icon: Smartphone,
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
    {
      id: 'problem',
      type: 'problem',
      summary:
        'Real estate teams juggle leads across email, phone, and SMS while trying to track deals and keep communication consistent. Generic CRMs are either overpriced or rigid, forcing agents to stitch together spreadsheets, inboxes, and phone apps.',
      content:
        'Real estate teams juggle leads across email, phone, and SMS while trying to track deals and keep communication consistent. Generic CRMs are either overpriced or rigid, forcing agents to stitch together spreadsheets, inboxes, and phone apps.',
      painPoints: [
        { description: 'Lost leads from missed or delayed follow-up' },
        { description: 'Inconsistent communication across channels and teammates' },
        { description: 'Poor visibility into team performance and deal health' },
        { description: 'Manual data entry and repetitive workflows slow response' },
        { description: 'Hard to track deal progression and key metrics in one place' }
      ],
      whyItMatters:
        'Bestia unifies multi-channel communication, automates routine steps with AI, and surfaces actionable insights so agents move faster and close more deals.'
    },
    {
      id: 'goals',
      type: 'goals',
      goals: [
        { icon: Zap, title: 'Reduce Communication Friction', metric: 'Single interface for email, SMS, and calls' },
        { icon: Brain, title: 'Automate Routine Tasks', metric: '60% reduction in manual email/SMS composition time' },
        { icon: TrendingUp, title: 'Increase Deal Visibility', metric: 'Real-time status tracking and analytics dashboard' },
        { icon: Users, title: 'Improve Team Collaboration', metric: 'Shared notes, lead assignment, role-based permissions' },
        { icon: BarChart3, title: 'Performance', metric: 'Page load time < 2s, API response time < 500ms' },
        { icon: Award, title: 'User Adoption', metric: '300 real estate agents on waiting list from LA Tech Week' }
      ]
    },
    {
      id: 'research',
      type: 'research',
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
    {
      id: 'architecture',
      type: 'architecture',
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
              icon: Users,
              description: 'Core workflow agents perform 20–30 times per day.',
              steps: ['View Leads', 'Filter / Search', 'Select Lead', 'View Details', 'Take Action (Email / SMS / Call)', 'Update Status', 'Assign to Member']
            },
            {
              name: 'Communication Flow',
              icon: Mail,
              description: 'Unifies email, SMS, call workflows with AI assistance.',
              steps: ['Select Lead', 'Choose Channel', 'AI Generate Content', 'Review / Edit', 'Send / Track / History']
            },
            {
              name: 'Deal Progression Flow',
              icon: TrendingUp,
              description: 'Guides agents through the standardized closing pipeline.',
              steps: ['New Lead', 'Data Enrichment', 'Initial Contact', 'Negotiation', 'DocuSign', 'Escrow', 'Closed Deal']
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
              { name: 'Primary', hex: '#1E40AF', usage: 'Brand anchor' },
              { name: 'Accent', hex: '#3B82F6', usage: 'CTAs & links' },
              { name: 'Highlight', hex: '#6366F1', usage: 'States & glow' },
              { name: 'Neutral', hex: '#FFFFFF', usage: 'Canvas & breathing room' }
            ]
          }
        },
        {
          title: 'Component Structure',
          type: 'components',
          content: {
            components: [
              {
                title: 'Atomic Design',
                description: 'Atoms → Molecules → Organisms to scale visuals with intent',
                icon: Sparkles
              },
              {
                title: '50+ Components',
                description: 'Buttons, inputs, tables, modals built as reusable tokens',
                icon: Component
              },
              {
                title: 'Layout Components',
                description: 'Grid primitives, responsive shells, navigation rails',
                icon: LayoutTemplate
              },
              {
                title: 'Feature Components',
                description: 'LeadCard, StatusBadge, ActionMenu, timeline blocks',
                icon: Layers
              },
              {
                title: '20+ Workflow Modals',
                description: 'Approvals, signatures, escalations with consistent UX',
                icon: Workflow
              }
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
          icon: Database,
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
          icon: Layers,
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
    {
      id: 'key-features',
      type: 'key-features',
      metrics: [
        { title: '15+ Statuses', description: 'Color-coded, customizable states for clarity' },
        { title: '50+ Templates', description: 'Reusable SMS/email flows for speed' },
        { title: 'AI Content', description: 'Context-aware generation for every channel' },
        { title: '10,000+ Leads', description: 'Designed for high-volume performance' }
      ],
      userFeatures: [
        {
          title: 'Lead Management',
          icon: BarChart3,
          items: [
            'Advanced filtering (name, address, status, source, owner)',
            '15+ customizable statuses with progress tracking'
          ]
        },
        {
          title: 'Communication Hub',
          icon: Mail,
          items: [
            'Unified email, SMS, and calls in one workspace',
            'AI-powered content suggestions across channels'
          ]
        },
        {
          title: 'Productivity Tools',
          icon: FileText,
          items: [
            'Reusable templates for outreach and follow-ups',
            'Property intelligence and financial calculators'
          ]
        },
        {
          title: 'Collaboration & Analytics',
          icon: Users,
          items: [
            'Role-based collaboration with assignments and notes',
            'Dashboards for team performance and training impact'
          ]
        }
      ],
      engineeringFeatures: [
        {
          title: 'Scalable Architecture',
          icon: Layers,
          items: [
            'Feature-based modules with shared UI primitives',
            '106 API routes with consistent contracts'
          ]
        },
        {
          title: 'Data & Performance',
          icon: Database,
          items: [
            'Server-side pagination built for 10,000+ leads',
            '45+ custom hooks with caching and debounced queries'
          ]
        },
        {
          title: 'Real-time & Reliability',
          icon: Zap,
          items: [
            'Call status polling, email thread sync, SMS tracking',
            'Optimistic updates for instant UI feedback'
          ]
        },
        {
          title: 'Security & Resilience',
          icon: Shield,
          items: [
            'RBAC, token refresh, and API gateway patterns',
            'Lazy loading and bundle minimization for speed'
          ]
        }
      ]
    },
    {
      id: 'challenges',
      type: 'challenges',
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
    {
      id: 'results',
      type: 'results',
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
    {
      id: 'learnings',
      type: 'learnings',
      cards: [
        {
          title: 'Modern Frontend Architecture',
          description: 'Applied RSC, streaming, batching, and concurrent rendering for fast, scalable UI.',
          icon: Layers
        },
        {
          title: 'API & System Design',
          description: 'Designed consistent contracts with strong error handling and stable integrations.',
          icon: Shield
        },
        {
          title: 'State & Performance Optimization',
          description: 'Balanced Context and local state; added caching, lazy loading, debounced queries.',
          icon: Zap
        },
        {
          title: 'Third-Party Integrations',
          description: 'Built production OAuth, webhooks, and rate-limited APIs for reliability.',
          icon: Mail
        },
        {
          title: 'User-Centered Engineering',
          description: 'Weekly agent feedback translated real workflows into UI that drove adoption.',
          icon: Users
        },
        {
          title: 'Performance Strategy',
          description: 'Reduced latency via selective rendering, code splitting, and data loading wins.',
          icon: BarChart3
        }
      ]
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      categories: [
        {
          category: 'Core Architecture',
          items: [
            { name: 'Next.js 15 App Router (RSC + Client)', icon: SiNextdotjs },
            { name: 'React 19 (concurrent)', icon: SiReact },
            { name: 'TypeScript 5.9', icon: SiTypescript },
            { name: 'Node.js runtime', icon: SiNodedotjs },
            { name: 'API Routes / Serverless', icon: Code }
          ]
        },
        {
          category: 'Communication & AI Integrations',
          items: [
            { name: 'Gmail API (OAuth + Threads)', icon: Mail },
            { name: 'Twilio Voice/SMS', icon: SiTwilio },
            { name: 'OpenAI GPT-4 (summaries/templates)', icon: SiOpenai },
            { name: 'Google Places API', icon: SiGooglemaps }
          ]
        },
        {
          category: 'Infrastructure & Developer Experience',
          items: [
            { name: 'Vercel Deployment', icon: SiVercel },
            { name: 'CI/CD automation', icon: Workflow },
            { name: 'Error monitoring', icon: Shield },
            { name: 'Turbopack', icon: Zap },
            { name: 'Git & GitHub', icon: SiGithub },
            { name: 'Recharts', icon: BarChart3 },
            { name: 'PDF.js / Mammoth', icon: FileText },
            { name: '@dnd-kit/core', icon: Layers }
          ]
        }
      ]
    },
    {
      id: 'links',
      type: 'links',
      links: [],
      figmaUrl: '#',
      caseStudyUrl: '#'
    }
  ]
};

