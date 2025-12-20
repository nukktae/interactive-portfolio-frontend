// Structure-only file: No user-facing strings, only keys, types, and icon references

export const handiersStructure = {
  slug: 'handiers-inc',
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
      'Flutter Engineering': 'Smartphone',
      'System & AI Architecture': 'Code'
    },
    goals: {
      'Reduce Friction': 'Zap',
      'AI-Powered Insights': 'Brain',
      'Smart Logistics': 'TrendingUp',
      'Trusted Matching': 'Users',
      'Performance': 'BarChart3',
      'Enterprise Reliability': 'Award'
    },
    architecture: {
      'Job Creation Flow': 'Brain',
      'Matching Flow': 'Users',
      'Payment Flow': 'Mail'
    },
    designSystem: {
      'Navigation Shells': 'LayoutTemplate',
      'Job Cards': 'Component',
      'AI Upload Components': 'Sparkles',
      'Location Layers': 'Layers',
      'Workflow Modals': 'Workflow'
    },
    systemArchitecture: {
      'Frontend Architecture': 'Smartphone',
      'Backend & API': 'Code',
      'Integrations': 'Layers'
    },
    keyFeatures: {
      'Consumer Features': 'Smartphone',
      'Pro Features': 'Users',
      'AI & ML': 'Brain',
      'Smart Logistics': 'Layers',
      'Enterprise Architecture': 'Shield'
    },
    learnings: {
      'Multimodal AI at Scale': 'Brain',
      'Graph Thinking': 'Layers',
      'Logistics Engineering': 'BarChart3',
      'Enterprise Payment Design': 'Shield'
    }
  },
  // Tech stack icon mappings
  techStackIcons: {
    'Flutter': 'SiFlutter',
    'Dart': 'SiDart',
    'gRPC Client': 'Code',
    'Stripe SDK': 'SiStripe',
    'Kotlin': 'SiKotlin',
    'Java 17': 'Code',
    'gRPC Microservices': 'Code',
    'Ktor Admin': 'Code',
    'MySQL': 'SiMysql',
    'Firestore': 'SiFirebase',
    'Neo4j Graph DB': 'SiNeo4J',
    'Vertex AI': 'SiGooglecloud',
    'AWS SNS/SES': 'SiAmazons3'
  },
  // Design system color values (non-textual)
  designSystemColors: [
    { name: 'Brand', hex: '#17453B' },
    { name: 'Gray', hex: '#757575' },
    { name: 'Soft Mint', hex: '#EAF1EF' },
    { name: 'Accent', hex: '#F4A300' },
    { name: 'White', hex: '#FFFFFF' }
  ],
  // Links structure
  links: {
    hasLinks: false,
    hasFigma: true,
    hasCaseStudy: true
  }
};

