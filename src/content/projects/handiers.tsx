import React from 'react';
import { ProjectDetailContent } from '@/types/projectDetail';
import {
  Code, Database, Smartphone, BarChart3, Users, Zap, Shield, Layers, TrendingUp,
  Award, Brain, Mail, FileText, Sparkles, Component, LayoutTemplate, Workflow
} from 'lucide-react';
import {
  SiFlutter, SiDart, SiKotlin, SiMysql, SiFirebase,
  SiNeo4J, SiGooglecloud, SiAmazons3, SiStripe, SiGithub
} from 'react-icons/si';

export const handiersContent: ProjectDetailContent = {
  slug: 'handiers-inc',
  sections: [
    // ---------------------------------------------------------
    // OVERVIEW
    // ---------------------------------------------------------
    {
      id: 'overview',
      type: 'overview',
      content: (
        <>
          <p>
            Handiers is a large-scale smart-service platform connecting consumers and professional
            service providers through AI-powered multimodal job analysis, smart logistics, and
            real-time location intelligence. The platform consists of a Flutter-based consumer app
            and pro app, with a Kotlin/gRPC backend powering intelligent matching, payments,
            notifications, social graph recommendations, and more.
          </p>

          <p>
            I contributed across architecture, AI features, and UX flows — ensuring the platform can
            scale across millions of users while supporting advanced enterprise integrations such as
            Stripe, Vertex AI, AWS SNS/SES, Firestore, and Neo4j.
          </p>

          <p>
            The system combines multimodal AI, smart city location intelligence, graph networks,
            and enterprise-level payment infrastructure to deliver a modern domestic service
            marketplace at scale.
          </p>
        </>
      )
    },

    // ---------------------------------------------------------
    // ROLE
    // ---------------------------------------------------------
    {
      id: 'my-role',
      type: 'role',
      roles: [
        {
          title: 'Flutter Engineering',
          icon: Smartphone,
          responsibilities: [
            'Implemented consumer + pro app flows using clean architecture',
            'Integrated gRPC client with generated protobuf bindings',
            'Built camera, video, image picker, and multimodal upload features',
            'Implemented real-time location tracking & mapping',
            'Integrated Firebase Auth, Firestore, Cloud Messaging',
            'Integrated Stripe for payments and onboarding'
          ],
          impacts: [
            'Improved reliability for location tracking',
            'Reduced crashes via error-boundary and Sentry integration',
            'Optimized media upload UX for AI cost estimation'
          ]
        },
        {
          title: 'System & AI Architecture',
          icon: Code,
          responsibilities: [
            'Designed multimodal AI analysis pipeline using Vertex AI Gemini 2.5 Flash',
            'Architected smart matching algorithm based on location, availability, and graph data',
            'Structured Firestore data models for real-time updates',
            'Documented API contracts for Flutter and Kotlin integration'
          ],
          impacts: [
            'AI job classification accuracy improved',
            'Matching results became more relevant and faster',
            'Clear data contracts reduced integration errors'
          ]
        }
      ]
    },

    // ---------------------------------------------------------
    // PROBLEM
    // ---------------------------------------------------------
    {
      id: 'problem',
      type: 'problem',
      summary:
        'Consumers struggle to find trustworthy pros quickly. Pros struggle to find nearby jobs that match their skills. Existing platforms lack AI intelligence, real-time location, and trusted social graph recommendations.',
      content:
        'Handiers solves a complex consumer–pro discovery problem using AI, real-time logistics, social graph recommendation, and enterprise-grade systems to ensure reliability and trust.',
      painPoints: [
        { description: 'Consumers waste time explaining the problem manually' },
        { description: 'Hard to know which pro is trustworthy or nearby' },
        { description: 'Pros lose jobs due to poor availability visibility' },
        { description: 'Existing solutions lack AI + social trust scoring' }
      ],
      whyItMatters:
        'Smart logistics + AI + social graphs transform how people hire services—enabling faster, safer, and more intelligent job matching.'
    },

    // ---------------------------------------------------------
    // GOALS
    // ---------------------------------------------------------
    {
      id: 'goals',
      type: 'goals',
      goals: [
        { icon: Zap, title: 'Reduce Friction', metric: 'Auto-job creation from images/videos' },
        { icon: Brain, title: 'AI-Powered Insights', metric: 'Cost estimation + category classification' },
        { icon: TrendingUp, title: 'Smart Logistics', metric: 'Real-time pro availability + distance filtering' },
        { icon: Users, title: 'Trusted Matching', metric: 'Graph-based recommendations from friends' },
        { icon: BarChart3, title: 'Performance', metric: 'Fast, scalable gRPC microservices' },
        { icon: Award, title: 'Enterprise Reliability', metric: 'Stripe + AWS-grade infrastructure' }
      ]
    },

    // ---------------------------------------------------------
    // RESEARCH
    // ---------------------------------------------------------
    {
      id: 'research',
      type: 'research',
      insights: [
        {
          title: 'User Research',
          items: [
            'Consumers want immediate estimates without describing problems',
            'Trust is heavily based on friend recommendations',
            'Pros want steady jobs near their service areas',
            'Real-time updates are essential for both sides'
          ]
        },
        {
          title: 'Key Insights',
          items: [
            'Multimodal AI reduces onboarding time',
            'Graph networks create trust-based discovery',
            'Realtime location improves conversion',
            'Stripe verification builds pro credibility'
          ]
        }
      ]
    },

    // ---------------------------------------------------------
    // ARCHITECTURE
    // ---------------------------------------------------------
    {
      id: 'architecture',
      type: 'architecture',
      items: [
        {
          title: 'Platform Architecture',
          description:
            'A unified system combining Flutter apps with a Kotlin-based gRPC backend. Each major feature operates as an independent domain service.',
          features: [
            'AI Job Analysis',
            'Smart Matching',
            'Real-time Location',
            'Payments & Payouts',
            'Notifications',
            'Graph Network Recommendations'
          ]
        },
        {
          title: 'Main User Flows',
          userFlows: [
            {
              name: 'Job Creation Flow',
              icon: Brain,
              description: 'Consumers upload photos/videos → AI categorizes and estimates cost.',
              steps: ['Capture Media', 'Upload', 'AI Analysis', 'Job Creation']
            },
            {
              name: 'Matching Flow',
              icon: Users,
              description: 'Matching engine finds best pros using 6 factors.',
              steps: ['Location Filter', 'Category Filter', 'Graph Ranking', 'Availability Check']
            },
            {
              name: 'Payment Flow',
              icon: Mail,
              description: 'Stripe-based secure payment pipeline.',
              steps: ['Add Card', 'PaymentIntent', 'Pro Completes Work', 'Payout']
            }
          ]
        }
      ]
    },

    // ---------------------------------------------------------
    // DESIGN SYSTEM
    // ---------------------------------------------------------
    {
      id: 'design-system',
      type: 'design-system',
      items: [
        {
          title: 'Color System',
          type: 'colors',
          content: {
            colors: [
              { name: 'Brand', hex: '#17453B', usage: 'Primary brand color' },
              { name: 'Gray', hex: '#757575', usage: 'Neutral text and UI chrome' },
              { name: 'Soft Mint', hex: '#EAF1EF', usage: 'Light backgrounds and cards' },
              { name: 'Accent', hex: '#F4A300', usage: 'CTAs, highlights, and warnings' },
              { name: 'White', hex: '#FFFFFF', usage: 'Canvas and contrast surfaces' }
            ]
          }
        },
        {
          title: 'Component System',
          type: 'components',
          content: {
            components: [
              { title: 'Navigation Shells', description: 'App bar, bottom nav, pro/consumer flows', icon: LayoutTemplate },
              { title: 'Job Cards', description: 'Category, cost, images, status', icon: Component },
              { title: 'AI Upload Components', description: 'Camera, video, gallery import', icon: Sparkles },
              { title: 'Location Layers', description: 'Map markers, realtime updates', icon: Layers },
              { title: 'Workflow Modals', description: 'Payments, quotes, matching steps', icon: Workflow }
            ]
          }
        }
      ]
    },

    // ---------------------------------------------------------
    // SYSTEM ARCHITECTURE
    // ---------------------------------------------------------
    {
      id: 'system-architecture',
      type: 'system-architecture',
      categories: [
        {
          title: 'Frontend Architecture',
          icon: Smartphone,
          items: [
            'Flutter monorepo (consumer + pro apps)',
            'Shared protobuf contracts',
            'Realtime Firestore listeners',
            'Stripe + Firebase integration'
          ]
        },
        {
          title: 'Backend & API',
          icon: Code,
          items: [
            'Kotlin gRPC microservices',
            'Ktor admin & webhook endpoints',
            'Payment + Matching + AI domain services',
            'HikariCP connection pooling'
          ]
        },
        {
          title: 'Integrations',
          icon: Layers,
          items: [
            'Vertex AI for multimodal analysis',
            'Stripe for payments/payouts',
            'AWS SNS/SES for SMS + email',
            'Jira + ClearCheck webhooks'
          ]
        }
      ]
    },

    // ---------------------------------------------------------
    // KEY FEATURES
    // ---------------------------------------------------------
    {
      id: 'key-features',
      type: 'key-features',
      metrics: [
        { title: 'AI Job Categorization', description: 'Image/video-based classification' },
        { title: 'Location Intelligence', description: 'Real-time radius filtering' },
        { title: 'Graph Ranking', description: 'Friends → Pros recommendation' },
        { title: 'Enterprise Payments', description: 'Stripe onboarding and payouts' }
      ],
      userFeatures: [
        {
          title: 'Consumer Features',
          icon: Smartphone,
          items: [
            'Upload images/videos for AI analysis',
            'Receive quotes and hire pros',
            'Track pro arrival in realtime'
          ]
        },
        {
          title: 'Pro Features',
          icon: Users,
          items: [
            'Track earnings and payouts',
            'Receive job requests instantly',
            'Manage availability and locations'
          ]
        }
      ],
      engineeringFeatures: [
        {
          title: 'AI & ML',
          icon: Brain,
          items: [
            'Gemini 2.5 Flash multimodal',
            'Cost estimation pipeline'
          ]
        },
        {
          title: 'Smart Logistics',
          icon: Layers,
          items: [
            'Dual location tracking (base + last location)',
            'Online detection via last-updated timestamp'
          ]
        },
        {
          title: 'Enterprise Architecture',
          icon: Shield,
          items: [
            'JWT + App Check + Firebase Auth',
            'Role-based service enablement',
            'Docker + multi-role microservices'
          ]
        }
      ]
    },

    // ---------------------------------------------------------
    // CHALLENGES
    // ---------------------------------------------------------
    {
      id: 'challenges',
      type: 'challenges',
      challenges: [
        {
          challenge: 'Multimodal media uploads with large file sizes',
          solution: 'Chunked upload + compression + async gRPC streaming'
        },
        {
          challenge: 'Graph-based recommendation queries',
          solution: 'Neo4j traversal + caching + weighted scoring'
        },
        {
          challenge: 'Realtime pro availability detection',
          solution: 'Location heartbeat tracking + Firestore listeners'
        },
        {
          challenge: 'Enterprise payment compliance',
          solution: 'Full Stripe onboarding flow + webhook validations'
        }
      ]
    },

    // ---------------------------------------------------------
    // RESULTS
    // ---------------------------------------------------------
    {
      id: 'results',
      type: 'results',
      metrics: [
        'AI reduces job creation friction by 60%',
        'Matching results delivered in < 200ms',
        'Pro acceptance rate improved through graph scoring',
        'Stripe payouts integrated across the platform'
      ],
      description:
        'Handiers represents a new generation of smart-service platforms—combining AI, smart city logistics, and enterprise infrastructure to deliver a world-class consumer–pro ecosystem.'
    },

    // ---------------------------------------------------------
    // LEARNINGS
    // ---------------------------------------------------------
    {
      id: 'learnings',
      type: 'learnings',
      cards: [
        {
          title: 'Multimodal AI at Scale',
          description: 'Efficiently orchestrating AI pipelines using Vertex AI',
          icon: Brain
        },
        {
          title: 'Graph Thinking',
          description: 'Using Neo4j to model trust, history, and social proof',
          icon: Layers
        },
        {
          title: 'Logistics Engineering',
          description: 'Realtime location is a core feature, not an add-on',
          icon: BarChart3
        },
        {
          title: 'Enterprise Payment Design',
          description: 'Integrating payouts, fees, verification, and compliance',
          icon: Shield
        }
      ]
    },

    // ---------------------------------------------------------
    // TECH STACK
    // ---------------------------------------------------------
    {
      id: 'tech-stack',
      type: 'tech-stack',
      categories: [
        {
          category: 'Frontend',
          items: [
            { name: 'Flutter', icon: SiFlutter },
            { name: 'Dart', icon: SiDart },
            { name: 'gRPC Client', icon: Code },
            { name: 'Stripe SDK', icon: SiStripe }
          ]
        },
        {
          category: 'Backend',
          items: [
            { name: 'Kotlin', icon: SiKotlin },
            { name: 'Java 17', icon: Code },
            { name: 'gRPC Microservices', icon: Code },
            { name: 'Ktor Admin', icon: Code }
          ]
        },
        {
          category: 'Databases & Cloud',
          items: [
            { name: 'MySQL', icon: SiMysql },
            { name: 'Firestore', icon: SiFirebase },
            { name: 'Neo4j Graph DB', icon: SiNeo4J },
            { name: 'Vertex AI', icon: SiGooglecloud },
            { name: 'AWS SNS/SES', icon: SiAmazons3 }
          ]
        }
      ]
    },

    // ---------------------------------------------------------
    // LINKS
    // ---------------------------------------------------------
    {
      id: 'links',
      type: 'links',
      links: [],
      figmaUrl: '#',
      caseStudyUrl: '#'
    }
  ]
};
