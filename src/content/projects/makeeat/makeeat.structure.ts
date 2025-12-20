// Structure-only file: No user-facing strings, only keys, types, and icon references

export const makeeatStructure = {
  slug: 'makeeat',
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
  iconMappings: {
    role: {},
    goals: {},
    architecture: {},
    designSystem: {},
    systemArchitecture: {},
    keyFeatures: {},
    learnings: {}
  },
  techStackIcons: {
    'Flutter': 'SiFlutter',
    'Dart': 'SiDart',
    'Firebase': 'SiFirebase',
    'Node.js': 'SiNodedotjs',
    'OpenAI': 'SiOpenai',
    'Google Maps': 'SiGooglemaps',
    'Firebase Auth': 'SiFirebase',
    'Google Sign-In': 'SiGoogle',
    'Figma': 'SiFigma',
    'GitHub': 'SiGithub'
  },
  designSystemColors: [
    { name: 'Primary Orange', hex: '#F48600' },
    { name: 'Background Cream', hex: '#FFFAF5' },
    { name: 'Text Dark', hex: '#191919' },
    { name: 'Text Gray', hex: '#666666' },
    { name: 'Border Gray', hex: '#CCCCCC' },
    { name: 'White', hex: '#FFFFFF' }
  ],
  links: {
    hasLinks: false,
    hasFigma: true,
    hasCaseStudy: true
  }
};

