// Structure-only file: No user-facing strings, only keys, types, and icon references

export const bestiaStructure = {
  slug: 'bestia',
  sections: [
    { id: 'overview', type: 'overview' },
    { id: 'my-role', type: 'role' },
    { id: 'problem', type: 'problem' },
    { id: 'goals', type: 'goals' },
    { id: 'research', type: 'research' },
    { id: 'architecture', type: 'architecture' },
    { id: 'design-system', type: 'design-system' },
    { id: 'system-architecture', type: 'system-architecture' },
    { id: 'key-features', type: 'key-features' },
    { id: 'challenges', type: 'challenges' },
    { id: 'results', type: 'results' },
    { id: 'learnings', type: 'learnings' },
    { id: 'tech-stack', type: 'tech-stack' },
    { id: 'links', type: 'links' }
  ],
  // Icon mappings (as string keys that will be resolved to actual icons)
  iconMappings: {
    role: {
      'Frontend Engineering': 'Code',
      'UI/UX Design': 'Smartphone'
    },
    goals: {
      'Reduce Communication Friction': 'Zap',
      'Automate Routine Tasks': 'Brain',
      'Increase Deal Visibility': 'TrendingUp',
      'Improve Team Collaboration': 'Users',
      'Performance': 'BarChart3',
      'User Adoption': 'Award'
    },
    architecture: {
      'Lead Management Flow': 'Users',
      'Communication Flow': 'Mail',
      'Deal Progression Flow': 'TrendingUp'
    },
    designSystem: {
      'Atomic Design': 'Sparkles',
      '50+ Components': 'Component',
      'Layout Components': 'LayoutTemplate',
      'Feature Components': 'Layers',
      '20+ Workflow Modals': 'Workflow'
    },
    systemArchitecture: {
      'Frontend Architecture': 'Code',
      'Backend & API': 'Database',
      'Integrations': 'Layers'
    },
    keyFeatures: {
      'Lead Management': 'BarChart3',
      'Communication Hub': 'Mail',
      'Productivity Tools': 'FileText',
      'Collaboration & Analytics': 'Users',
      'Scalable Architecture': 'Layers',
      'Data & Performance': 'Database',
      'Real-time & Reliability': 'Zap',
      'Security & Resilience': 'Shield'
    },
    learnings: {
      'Modern Frontend Architecture': 'Layers',
      'API & System Design': 'Shield',
      'State & Performance Optimization': 'Zap',
      'Third-Party Integrations': 'Mail',
      'User-Centered Engineering': 'Users',
      'Performance Strategy': 'BarChart3'
    }
  },
  // Tech stack icon mappings
  techStackIcons: {
    'Next.js 15 App Router (RSC + Client)': 'SiNextdotjs',
    'React 19 (concurrent)': 'SiReact',
    'TypeScript 5.9': 'SiTypescript',
    'Node.js runtime': 'SiNodedotjs',
    'API Routes / Serverless': 'Code',
    'Gmail API (OAuth + Threads)': 'Mail',
    'Twilio Voice/SMS': 'SiTwilio',
    'OpenAI GPT-4 (summaries/templates)': 'SiOpenai',
    'Google Places API': 'SiGooglemaps',
    'Vercel Deployment': 'SiVercel',
    'CI/CD automation': 'Workflow',
    'Error monitoring': 'Shield',
    'Turbopack': 'Zap',
    'Git & GitHub': 'SiGithub',
    'Recharts': 'BarChart3',
    'PDF.js / Mammoth': 'FileText',
    '@dnd-kit/core': 'Layers'
  },
  // Design system color values (non-textual)
  designSystemColors: [
    { name: 'Primary', hex: '#1E40AF' },
    { name: 'Accent', hex: '#3B82F6' },
    { name: 'Highlight', hex: '#6366F1' },
    { name: 'Neutral', hex: '#FFFFFF' }
  ],
  // Links structure
  links: {
    hasLinks: false,
    hasFigma: true,
    hasCaseStudy: true
  }
};

