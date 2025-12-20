import { DesignPhilosophy } from '@/types/knowledge';

/**
 * Design Philosophy
 * 
 * Extracted from project patterns, challenges, and solutions
 * across the portfolio to understand how Anu approaches design and development.
 */
export const designPhilosophy: DesignPhilosophy = {
  principles: [
    'User-centric design: Always start with user needs and pain points',
    'Data-driven decisions: Use metrics and user feedback to guide improvements',
    'Iterative development: Build, test, learn, and refine continuously',
    'Simplicity over complexity: Solve problems elegantly without over-engineering',
    'Accessibility first: Ensure products are usable by everyone',
    'Performance matters: Optimize for speed and efficiency',
    'Collaborative approach: Work closely with stakeholders and users'
  ],
  approach: {
    userCentric: true,
    dataDriven: true,
    iterative: true,
    collaborative: true
  },
  values: [
    'Innovation through practical solutions',
    'Quality and attention to detail',
    'Continuous learning and growth',
    'Empathy for users and team members',
    'Transparency in decision-making',
    'Impact over features'
  ],
  decisionMakingProcess: 'Anu follows a structured approach: (1) Understand the problem deeply through research and user feedback, (2) Explore multiple solutions with pros/cons analysis, (3) Prototype and test with real users, (4) Measure impact with metrics, (5) Iterate based on learnings. This process emphasizes user needs, data validation, and collaborative input.',
  examples: [
    {
      project: 'Bestia',
      principle: 'User-centric design with data-driven decisions',
      application: 'Worked directly with real estate agents weekly for design feedback, leading to UX redesigns that enhanced clarity and conversion through data-backed decisions. Generated 300 agents on waiting list at LA Tech Week.'
    },
    {
      project: 'Rootin',
      principle: 'Iterative development and user experience focus',
      application: 'Led complete UI/UX redesign with comprehensive design system, implemented offline-first architecture, and created intuitive onboarding flow that reduced user drop-off. Achieved 90% user satisfaction and 40% increase in engagement.'
    },
    {
      project: 'Handiers Inc.',
      principle: 'Collaborative approach and data-driven improvements',
      application: 'Led major UX redesigns (chat, booking, quote request) by collaborating closely with backend devs and CEO, using data to enhance clarity and conversion. Built consistent UI across mobile apps and marketing website.'
    },
    {
      project: 'ChildNet Korea',
      principle: 'Security-first thinking and accessibility',
      application: 'Implemented zero-trust security architecture with 46 PostgreSQL RLS policies, ensuring data protection while maintaining usability. Created role-based theming system with 6 distinct user experiences.'
    },
    {
      project: 'ClearGuide',
      principle: 'User-centric problem solving',
      application: 'Built AI-powered document analysis system to help Korean residents understand complex public documents, making bureaucratic processes accessible. Focused on solving real user pain points with intelligent automation.'
    }
  ]
};

