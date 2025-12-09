import React from 'react';
import { ProjectDetailContent } from '@/types/projectDetail';
import {
  Code, Database, Smartphone, BarChart3, Users, Zap, Shield, Layers, TrendingUp,
  Award, Brain, Mail, FileText, Sparkles, Component, LayoutTemplate, Workflow, ExternalLink
} from 'lucide-react';
import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiVercel,
  SiTwilio, SiGooglemaps, SiFigma, SiGithub, SiOpenai
} from 'react-icons/si';

export const childnetContent: ProjectDetailContent = {
  slug: 'childnet-korea',
  sections: [
    {
      id: 'overview',
      type: 'overview',
      content: React.createElement(
        React.Fragment,
        null,
        React.createElement('p', null, 'ChildNet Korea is a high-risk child-protection platform built with zero-trust security architecture. The platform connects children, educators, counselors, caseworkers, and police officers to ensure the safety and well-being of every child through a secure, role-based system.'),
        React.createElement('p', null, 'The platform implements enterprise-grade security measures including PostgreSQL Row-Level Security (RLS), strict Role-Based Access Control (RBAC), field-level data masking, and event-level visibility rules. All sensitive data is protected at multiple layers, ensuring that no role can access information beyond their permission level.'),
        React.createElement('p', null, 'Built as a modern full-stack application with Next.js 15 frontend, NestJS backend API, and a separate FastAPI microservice for AI processing, ChildNet Korea demonstrates best practices in secure application development, microservices architecture, and database-level security enforcement.')
      )
    },
    {
      id: 'my-role',
      type: 'role',
      roles: [
        {
          title: 'Full-Stack Architecture & Security',
          icon: Code,
          responsibilities: [
            'Designed and implemented zero-trust security architecture with PostgreSQL RLS',
            'Built comprehensive RBAC system with 6 distinct roles and permission classes',
            'Developed field-level masking interceptor for role-based data visibility',
            'Created 46 RLS policies across 12 database tables with FORCE RLS enforcement',
            'Implemented RLS context management using AsyncLocalStorage for request-scoped security',
            'Architected microservices separation between backend and AI service for security isolation'
          ],
          impacts: [
            'Zero data breaches: Admin role explicitly blocked from accessing any case content',
            'Database-level security: RLS policies enforce access control even if application logic fails',
            '46 security policies protecting sensitive child welfare data at the database layer',
            'Complete audit trail: All API requests logged with user context and timestamps'
          ]
        },
        {
          title: 'Frontend Development & UX',
          icon: Smartphone,
          responsibilities: [
            'Built role-based theming system with CSS variables and Tailwind integration',
            'Created 6 role-specific layouts with custom sidebars and navigation',
            'Developed 11 reusable UI components with accessibility features',
            'Implemented role-appropriate microcopy and tone enforcement',
            'Designed 6 distinct dashboards tailored to each user role\'s needs',
            'Built JWT-based authentication with role-based redirects and middleware protection'
          ],
          impacts: [
            '45+ frontend files created: Complete UI component library and role-specific pages',
            'Seamless UX: Instant theme switching based on user role on login',
            'Accessibility-first: Skip links, ARIA labels, and keyboard navigation throughout',
            'Role-appropriate interfaces: Each role sees only relevant features and language'
          ]
        }
      ]
    },
    {
      id: 'problem',
      type: 'problem',
      summary: 'Child welfare systems require the highest level of security while enabling collaboration between multiple stakeholders with different access needs.',
      content: 'Traditional child protection platforms face critical challenges: they either expose too much sensitive data to unauthorized roles, or they\'re so locked down that collaboration becomes impossible. The system needs to support 6 distinct user roles (children, teachers, counselors, caseworkers, police, and administrators) each with different data access requirements, while ensuring zero data leakage between roles.',
      painPoints: [
        { description: 'Security vulnerabilities: Application-level security can be bypassed, leaving sensitive child data exposed' },
        { description: 'Complex access control: Managing permissions across multiple roles and data types requires careful orchestration' },
        { description: 'Data visibility conflicts: Different roles need different views of the same data (e.g., police need safety info but not emotional details)' },
        { description: 'Audit and compliance: Child welfare systems require complete audit trails for legal and compliance purposes' },
        { description: 'AI integration risks: AI services processing sensitive child data must never receive unredacted information' }
      ],
      whyItMatters: 'Child welfare data is among the most sensitive information in society. A single data breach could expose vulnerable children to harm, violate privacy laws, and destroy trust in the system. The platform must guarantee that teachers cannot see counselor notes, police cannot access emotional check-ins, and administrators cannot view any case content—all while enabling effective collaboration to protect children.'
    },
    {
      id: 'goals',
      type: 'goals',
      goals: [
        { icon: Shield, title: 'Zero-Trust Security', metric: '46 RLS policies + field-level masking + RBAC guards' },
        { icon: Zap, title: 'Performance', metric: '40+ API endpoints with <200ms response time' },
        { icon: Brain, title: 'AI Safety', metric: 'Separate microservice with mandatory data redaction' },
        { icon: Users, title: 'Multi-Role Support', metric: '6 distinct roles with role-specific UIs' },
        { icon: BarChart3, title: 'Complete Audit Trail', metric: '100% API request logging with user context' },
        { icon: Award, title: 'Production Ready', metric: '12 database tables, 85+ TypeScript files, comprehensive test fixtures' }
      ]
    },
    {
      id: 'research',
      type: 'research',
      insights: [
        {
          title: 'Security Architecture Patterns',
          items: [
            'PostgreSQL Row-Level Security (RLS) provides defense-in-depth: even if application logic fails, database policies enforce access control',
            'Field-level masking must happen at the interceptor level to ensure consistent application across all endpoints',
            'RLS context must be set using SECURITY DEFINER functions to bypass RLS for helper functions while maintaining security',
            'Microservices separation for AI processing ensures sensitive data never reaches AI services without explicit redaction'
          ]
        },
        {
          title: 'Role-Based Access Requirements',
          items: [
            'Children need simple, gentle interfaces with options-first design patterns',
            'Teachers require guided forms with tooltips and clear severity indicators',
            'Caseworkers need dense information displays with comprehensive timeline views',
            'Police officers need safety-focused views without emotional or counseling data',
            'Administrators must be completely blocked from case content to maintain separation of concerns',
            'Each role requires distinct theming and microcopy to match their professional context'
          ]
        }
      ]
    },
    {
      id: 'architecture',
      type: 'architecture',
      items: [
        {
          title: 'Zero-Trust Security Architecture',
          description: 'Multi-layered security approach with defense-in-depth principles',
          features: [
            'PostgreSQL Row-Level Security (RLS) on all 12 sensitive tables with FORCE RLS enabled',
            'RLS Context Management using AsyncLocalStorage for request-scoped user context',
            'RBAC Guards enforcing role-based access at the controller level',
            'Field-Level Masking Interceptor automatically hiding sensitive fields based on role',
            'RLS Guard automatically setting database session variables from JWT tokens',
            'RLS Subscriber injecting security context into all database queries',
            'Admin role explicitly blocked from accessing case content at database level',
            'AI Service separation: Only receives redacted data, never processes raw sensitive content'
          ]
        },
        {
          title: 'User Flows & Role Interactions',
          userFlows: [
            {
              name: 'Child Check-In Flow',
              icon: Users,
              description: 'Children can submit emotional check-ins that are visible to counselors and caseworkers',
              steps: [
                'Child logs in and sees gentle, options-first interface',
                'Child selects emotional state using visual emotion selector',
                'Check-in is created with child_checkin event type',
                'RLS policies ensure only assigned counselors and caseworkers can view',
                'Police and teachers cannot see emotional check-in data'
              ]
            },
            {
              name: 'Teacher Report Flow',
              icon: Mail,
              description: 'Teachers report concerns that trigger caseworker alerts and police notifications',
              steps: [
                'Teacher submits report with guided form and severity selection',
                'Report creates teacher_report timeline event',
                'Caseworkers receive alert for high-severity reports',
                'Police can view teacher reports for safety assessment',
                'RLS ensures teachers only see their own reports for assigned cases'
              ]
            },
            {
              name: 'Caseworker Timeline Review',
              icon: TrendingUp,
              description: 'Caseworkers review comprehensive timeline with all event types for case management',
              steps: [
                'Caseworker accesses timeline for assigned case',
                'RLS policies return all event types (teacher_report, child_checkin, counselor_note, police_safety_check)',
                'Timeline displays events with severity-based visual indicators',
                'Caseworker can create notes and update case status',
                'All actions are logged in audit_log table for compliance'
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
          title: 'Role-Based Color System',
          type: 'colors',
          content: {
            colors: [
              { name: 'Child Theme', hex: '#FF6B9D', usage: 'Gentle pink tones for child-friendly interface' },
              { name: 'Teacher Theme', hex: '#4A90E2', usage: 'Professional blue for educational context' },
              { name: 'Counselor Theme', hex: '#9B59B6', usage: 'Calming purple for supportive environment' },
              { name: 'Caseworker Theme', hex: '#E67E22', usage: 'Warm orange for active case management' },
              { name: 'Police Theme', hex: '#34495E', usage: 'Authoritative dark gray for safety focus' },
              { name: 'Admin Theme', hex: '#2C3E50', usage: 'Neutral dark for system administration' }
            ]
          }
        },
        {
          title: 'Component Structure',
          type: 'components',
          content: {
            components: [
              { title: 'UI Component Library', description: '11 reusable components: Button, Card, TextInput, TextArea, Select, SectionTitle, InfoTooltip, SeverityBadge, TimelineEvent, EmotionSelector, EmptyState', icon: Sparkles },
              { title: 'Role-Specific Sidebars', description: '6 custom navigation sidebars with role-appropriate menu items and microcopy', icon: Component },
              { title: 'Role Layouts', description: '6 distinct layouts wrapping role-specific pages with appropriate sidebars and theming', icon: LayoutTemplate },
              { title: 'Theme Provider', description: 'Client-side theme provider managing CSS variable switching based on user role', icon: Layers },
              { title: 'Role Copy System', description: 'Centralized microcopy system with role-specific tone and language enforcement', icon: Workflow }
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
            'Next.js 15 with App Router and TypeScript for type-safe development',
            'Route groups for role-based organization: (app), (auth), (public)',
            'Server and Client Components: Strategic use of "use client" for interactivity',
            'Middleware for route protection and role-based redirects',
            'Tailwind CSS 4 with custom theme tokens mapped to CSS variables',
            'Role-based theming system with instant theme switching on login',
            '45+ frontend files: Components, layouts, pages, and utilities',
            'JWT token management with secure storage and automatic refresh',
            'API client layer with typed request/response handling'
          ]
        },
        {
          title: 'Backend & API',
          icon: Database,
          items: [
            'NestJS framework with TypeScript for enterprise-grade API development',
            '9 main modules: auth, users, roles, cases, timeline, messaging, reports, ai, audit',
            '40+ RESTful API endpoints with comprehensive CRUD operations',
            'PostgreSQL database with 12 tables and 46 RLS policies',
            'TypeORM for database access with entity relationships',
            'Request Context Management using AsyncLocalStorage for RLS',
            'Global interceptors: MaskingInterceptor, AuditInterceptor, RlsContextInterceptor',
            'Exception filters for standardized error handling',
            'JWT authentication with Supabase Auth integration ready',
            'Comprehensive test fixtures with idempotent database scripts'
          ]
        },
        {
          title: 'Integrations',
          icon: Layers,
          items: [
            'Supabase Auth: JWT-based authentication with role extraction',
            'PostgreSQL RLS: Database-level security with helper functions in app schema',
            'FastAPI AI Service: Separate microservice for AI processing with mandatory redaction',
            'CORS configuration for cross-origin requests between frontend and backend',
            'Environment-based configuration with .env files for all services',
            'Concurrently script for running all services in development',
            'Database migration system ready for production deployments'
          ]
        }
      ]
    },
    {
      id: 'key-features',
      type: 'key-features',
      metrics: [
        { title: '46 RLS Policies', description: 'Database-level security policies protecting 12 sensitive tables' },
        { title: '6 User Roles', description: 'Distinct permission classes: child, teacher, counselor, caseworker, police, admin' },
        { title: '40+ API Endpoints', description: 'Comprehensive REST API covering all platform functionality' },
        { title: '100% Audit Coverage', description: 'All API requests logged with user context and timestamps' },
        { title: 'Zero Data Leakage', description: 'Admin role explicitly blocked from accessing any case content' },
        { title: 'Field-Level Masking', description: 'Automatic sensitive field hiding based on user role' }
      ],
      userFeatures: [
        {
          title: 'Role-Specific Dashboards',
          icon: BarChart3,
          items: [
            'Child Dashboard: Simple check-in interface with emotional state tracking',
            'Teacher Dashboard: Case overview with report submission and severity indicators',
            'Counselor Dashboard: Emotional trend analysis and session management',
            'Caseworker Dashboard: Comprehensive case management with alerts and timeline',
            'Police Dashboard: Safety-focused view with incident reports',
            'Admin Dashboard: System management without case content access'
          ]
        },
        {
          title: 'Timeline & Event Management',
          icon: FileText,
          items: [
            '5 event types: teacher_report, child_checkin, counselor_note, caseworker_note, police_safety_check',
            'Role-filtered timeline views showing only relevant events',
            'Severity-based visual indicators for quick assessment',
            'Event creation endpoints with role-specific validation'
          ]
        },
        {
          title: 'Secure Messaging',
          icon: Mail,
          items: [
            'Thread-based messaging system for case-related communication',
            'Role-based access control on message threads',
            'Message deletion with audit trail maintenance'
          ]
        }
      ],
      engineeringFeatures: [
        {
          title: 'Security Infrastructure',
          icon: Shield,
          items: [
            'RLS Context Management: AsyncLocalStorage-based request scoping',
            'RLS Guard: Automatic JWT token parsing and role ID lookup',
            'RLS Subscriber: Database query interception for session variable injection',
            'RLS Helper Functions: SECURITY DEFINER functions for RLS bypass when needed',
            'Field Masking Interceptor: Automatic sensitive field hiding in responses',
            'RBAC Guard: Role and permission-based endpoint protection'
          ]
        },
        {
          title: 'Database Architecture',
          icon: Database,
          items: [
            '12 tables: users, roles, agencies, cases, case_assignments, case_permissions, timeline_events, event_visibility_rules, message_threads, messages, reports, audit_log',
            'FORCE RLS enabled on all sensitive tables',
            'Proper foreign key relationships with cascade options',
            'Timestamps and soft-delete support throughout',
            'Idempotent test fixtures for safe repeated execution'
          ]
        },
        {
          title: 'Microservices Architecture',
          icon: Layers,
          items: [
            'Separated AI Service: FastAPI microservice running independently',
            'Mandatory data redaction before AI processing',
            'Health check endpoints for service monitoring',
            'CORS configuration for secure cross-service communication'
          ]
        }
      ]
    },
    {
      id: 'challenges',
      type: 'challenges',
      challenges: [
        {
          challenge: 'Implementing PostgreSQL RLS with proper context management across async request lifecycle',
          solution: 'Created AsyncLocalStorage-based RequestContext system that propagates user context throughout the entire request. Implemented RLS Guard that extracts role information from JWT tokens and sets database session variables. Created RLS Subscriber that intercepts all TypeORM queries to inject security context. Used SECURITY DEFINER functions for helper functions that need to bypass RLS while maintaining security.'
        },
        {
          challenge: 'Ensuring zero data leakage between roles while maintaining usability',
          solution: 'Implemented multi-layered security: RLS policies at database level, RBAC guards at controller level, and field-level masking at interceptor level. Created comprehensive permission matrix defining exactly what each role can see. Admin role explicitly blocked from all case-related tables at database level. Field masking interceptor automatically removes sensitive fields before responses are sent.'
        },
        {
          challenge: 'Building role-specific UIs that feel native to each user type',
          solution: 'Created role-based theming system with CSS variables that switch instantly on login. Developed role-specific microcopy system ensuring appropriate tone (gentle for children, professional for caseworkers). Built 6 distinct layouts with custom sidebars and navigation. Designed component library that adapts to role themes automatically.'
        },
        {
          challenge: 'Separating AI processing while ensuring data security',
          solution: 'Architected separate FastAPI microservice that never receives raw sensitive data. Backend is responsible for redacting data before sending to AI service. AI service includes validation endpoints to verify data is properly redacted. Clear separation of concerns ensures AI never processes unredacted child welfare data.'
        }
      ]
    },
    {
      id: 'results',
      type: 'results',
      metrics: [
        '46 RLS policies protecting sensitive data at database level',
        '12 database tables with comprehensive relationships and constraints',
        '40+ API endpoints with full CRUD operations and role-based filtering',
        '85+ TypeScript files in backend with complete type safety',
        '45+ frontend files including components, layouts, and pages',
        '6 role-specific dashboards with tailored UX for each user type',
        '100% API request audit coverage with user context tracking',
        'Zero data breaches: Admin role completely blocked from case content',
        'Production-ready test fixtures with idempotent database scripts'
      ],
      description: 'ChildNet Korea demonstrates enterprise-grade security architecture with zero-trust principles. The platform successfully implements database-level security (RLS), application-level access control (RBAC), and field-level data masking, ensuring that sensitive child welfare data is protected at every layer. The separation of AI processing into a microservice ensures that AI never receives unredacted data, and comprehensive audit logging provides complete traceability for compliance requirements.'
    },
    {
      id: 'learnings',
      type: 'learnings',
      cards: [
        { 
          title: 'Database-Level Security is Critical', 
          description: 'Implementing PostgreSQL RLS taught me that application-level security alone is insufficient. Database-level policies provide defense-in-depth, ensuring data protection even if application logic fails. The RLS context management system using AsyncLocalStorage and SECURITY DEFINER functions was crucial for making RLS work seamlessly with TypeORM.', 
          icon: Database 
        },
        { 
          title: 'Zero-Trust Requires Multiple Layers', 
          description: 'A true zero-trust architecture requires security at every layer: database (RLS), application (RBAC guards), and response (field masking). Each layer provides independent protection, and together they create an impenetrable security model. The admin role being blocked from case content at the database level ensures separation of concerns.', 
          icon: Shield 
        },
        { 
          title: 'Role-Based UX Requires Deep Understanding', 
          description: 'Building role-specific interfaces requires understanding each role\'s context deeply. Children need gentle, options-first interfaces. Caseworkers need dense information displays. Police need safety-focused views. The theming system and microcopy framework ensure each role feels the interface was built specifically for them.', 
          icon: Users 
        },
        { 
          title: 'Microservices Separation for Security', 
          description: 'Separating AI processing into its own microservice isn\'t just about scalability—it\'s a security requirement. By ensuring the AI service never receives raw sensitive data, we create a clear security boundary. The backend\'s responsibility to redact data before AI processing enforces the principle of least privilege.', 
          icon: Layers 
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
            { name: 'Tailwind CSS 4', icon: SiTailwindcss }
          ]
        },
        {
          category: 'Backend',
          items: [
            { name: 'NestJS', icon: SiNodedotjs },
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'PostgreSQL', icon: Database },
            { name: 'TypeORM', icon: Database }
          ]
        },
        {
          category: 'AI Service',
          items: [
            { name: 'FastAPI', icon: SiOpenai },
            { name: 'Python', icon: SiOpenai }
          ]
        },
        {
          category: 'Security & Auth',
          items: [
            { name: 'Supabase Auth', icon: Shield },
            { name: 'JWT', icon: Shield },
            { name: 'PostgreSQL RLS', icon: Database }
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
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/nukktae/childnet.git', icon: ExternalLink }
      ],
      figmaUrl: '',
      caseStudyUrl: ''
    }
  ]
};
