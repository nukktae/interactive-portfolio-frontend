// English content file: All user-facing text strings

export const childnetEN = {
  overview: {
    paragraphs: [
      {
        type: 'text',
        content: [
          { type: 'span', text: 'ChildNet Korea', className: 'font-semibold text-foreground' },
          ' is a high-risk child protection platform built with a zero-trust security architecture.'
        ]
      },
      {
        type: 'text',
        content:
          'The platform connects children, educators, counselors, caseworkers, and police officers through a strictly role-based system designed to protect sensitive child welfare data while enabling effective collaboration.'
      },
      {
        type: 'text',
        content:
          'ChildNet Korea is implemented as a modern full-stack application using a Next.js frontend, a NestJS backend, and a separate FastAPI microservice for AI processing, demonstrating best practices in secure system design and database-level access control.'
      }
    ]
  },

  myRole: {
    roles: [
      {
        title: 'Full-Stack Architect & Security Engineer',
        description:
          'I designed and implemented the platform’s zero-trust security architecture, covering database, backend, and service-level protection.',
        responsibilities: [
          'Designed PostgreSQL Row-Level Security (RLS) architecture across all sensitive tables',
          'Implemented role-based access control (RBAC) for six distinct user roles',
          'Built field-level data masking to restrict sensitive attributes per role',
          'Created request-scoped RLS context management for secure database access',
          'Architected microservice separation to isolate AI processing from raw sensitive data'
        ]
      },
      {
        title: 'Frontend Engineer & UX Architect',
        description:
          'I built role-specific user experiences that balance usability with strict security constraints.',
        responsibilities: [
          'Developed role-based theming and layout system',
          'Created distinct dashboards for each user role',
          'Implemented authentication flows with role-based routing',
          'Built reusable, accessible UI components',
          'Ensured each role only sees appropriate language, tone, and features'
        ]
      }
    ]
  },

  problem: {
    summary:
      'Child welfare systems must enforce extreme data security while still enabling collaboration across multiple professional roles.',
    paragraphs: [
      {
        type: 'text',
        content:
          'Traditional platforms either expose too much sensitive data or become so restrictive that collaboration breaks down.'
      },
      {
        type: 'text',
        content:
          'Each stakeholder—children, teachers, counselors, caseworkers, police, and administrators—requires a different view of the same underlying data, with zero tolerance for data leakage.'
      }
    ]
  },

  goals: {
    items: [
      'Guarantee zero data leakage through database-level security',
      'Support six distinct roles with clear permission boundaries',
      'Enable collaboration without compromising privacy',
      'Provide complete auditability for compliance and accountability',
      'Isolate AI processing to prevent exposure of raw sensitive data'
    ]
  },

  research: {
    insights: [
      {
        title: 'Security Architecture',
        items: [
          'Database-level security is essential for defense in depth',
          'Application-only security is insufficient for high-risk data',
          'Field-level masking must be enforced consistently across all endpoints',
          'AI services should never process unredacted sensitive data'
        ]
      },
      {
        title: 'Role-Based Needs',
        items: [
          'Children require gentle, simplified interfaces',
          'Educators need structured reporting tools',
          'Caseworkers require dense, timeline-based views',
          'Police need safety-focused information only',
          'Administrators must not access case content'
        ]
      }
    ]
  },

  architecture: {
    paragraphs: [
      {
        type: 'text',
        content:
          'ChildNet Korea follows a zero-trust architecture with multiple independent layers of security enforcement.'
      }
    ],
    bullets: [
      'PostgreSQL Row-Level Security with forced enforcement',
      'Request-scoped security context management',
      'Role-based guards at API layer',
      'Field-level response masking',
      'Separated AI microservice with mandatory data redaction'
    ]
  },

  keyFeatures: {
    features: [
      {
        title: 'Zero-Trust Security Model',
        description:
          'Security enforced at database, API, and response levels to prevent data leakage.'
      },
      {
        title: 'Role-Specific Dashboards',
        description:
          'Six distinct user experiences tailored to professional context and permissions.'
      },
      {
        title: 'Timeline-Based Case Management',
        description:
          'Structured event timelines with role-filtered visibility.'
      },
      {
        title: 'Comprehensive Audit Logging',
        description:
          'Every API request is logged with user context and timestamps.'
      }
    ]
  },

  challenges: {
    items: [
      {
        problem: 'Enforcing access control consistently across asynchronous requests',
        solution:
          'Implemented request-scoped security context propagation to ensure RLS policies always receive correct role information.'
      },
      {
        problem: 'Preventing administrators from accessing sensitive case data',
        solution:
          'Blocked admin access at the database level using explicit RLS policies.'
      },
      {
        problem: 'Balancing usability with strict security',
        solution:
          'Designed role-specific interfaces that expose only necessary data while maintaining clarity.'
      },
      {
        problem: 'Integrating AI safely with sensitive data',
        solution:
          'Separated AI into its own microservice and enforced mandatory data redaction.'
      }
    ]
  },

  results: {
    bullets: [
      'Zero data leakage across all roles',
      '46 database-level RLS policies protecting sensitive data',
      'Six fully isolated role-based user experiences',
      'Complete audit coverage of all API activity',
      'Production-ready, scalable architecture'
    ]
  },

  learnings: {
    items: [
      {
        title: 'Database-Level Security Matters',
        description:
          'RLS provides protection even when application logic fails.'
      },
      {
        title: 'Zero-Trust Requires Multiple Layers',
        description:
          'True zero-trust systems must enforce security independently at every layer.'
      },
      {
        title: 'Role-Based UX Is as Important as RBAC',
        description:
          'Usability must align with professional context to be effective.'
      },
      {
        title: 'Security-Driven Microservices',
        description:
          'Service separation can be a security requirement, not just a scaling decision.'
      }
    ]
  },

  techStack: {
    frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    backend: ['NestJS', 'PostgreSQL', 'TypeORM'],
    services: ['FastAPI (AI Service)', 'Supabase Auth', 'JWT'],
    deployment: ['Vercel']
  }
};
