// Structure-only file: No user-facing strings, only keys, types, and icon references

export const moveparkStructure = {
  slug: 'movepark',
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
    'Next.js 16': 'SiNextdotjs',
    'React 19': 'SiReact',
    'TypeScript': 'SiTypescript',
    'Tailwind CSS 4': 'SiTailwindcss',
    'Leaflet': 'SiGooglemaps',
    'React-Leaflet': 'SiGooglemaps',
    'Geolocation API': 'MapPin',
    'Seoul Open Data API': 'SiGooglemaps',
    'KMA Weather API': 'Cloud',
    'Seoul Parking API': 'MapPin',
    'KSPO Facilities API': 'MapPin',
    'Vercel': 'SiVercel',
    'GitHub': 'SiGithub'
  },
  designSystemColors: [
    { name: 'Primary Blue', hex: '#3B82F6' },
    { name: 'Success Green', hex: '#10B981' },
    { name: 'Warning Orange', hex: '#F59E0B' },
    { name: 'Danger Red', hex: '#EF4444' },
    { name: 'Neutral Gray', hex: '#6B7280' }
  ],
  links: {
    hasLinks: false,
    hasFigma: true,
    hasCaseStudy: true
  }
};

