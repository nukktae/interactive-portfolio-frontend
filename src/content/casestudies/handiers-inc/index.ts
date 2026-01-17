import React from 'react';
import { CaseStudyContent } from '../index';
import { Language } from '@/contexts/LanguageContext';

// Helper function to build overview content
function buildOverviewContent(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        { className: 'text-foreground/80 text-lg leading-relaxed mb-4' },
        'Transformed a cold service marketplace into a "Warm Trust Network" through social proof and transparent design. Achieved a 60% reduction in job creation friction through a "Visual-First" onboarding flow.'
      ),
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-3 gap-4 mt-6' },
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, 'Role'),
          React.createElement('p', { className: 'text-base font-semibold' }, 'Lead UI/UX Designer & UX Engineer')
        ),
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, 'Focus'),
          React.createElement('p', { className: 'text-base font-semibold' }, 'UX Analysis, Multi-Platform Design, Design Systems')
        ),
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, 'Deliverables'),
          React.createElement('p', { className: 'text-base font-semibold' }, 'Consumer App, Pro App, Landing Page')
        )
      )
    )
  );
}

// Helper function to build problem content
function buildProblemContent(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-4' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      'In the American market, the biggest barrier to hiring a handyman is trust. Homeowners are hesitant to invite strangers into their homes. Existing platforms fail to build confidence through ratings alone.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-3' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'The Trust Gap Challenge'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'The mission was to transform a cold service marketplace into a "Warm Trust Network" through social proof and transparent design, addressing the fundamental trust barrier in the American service economy.'
        )
      )
    )
  );
}

// Helper function to build solution content
function buildSolutionContent(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-8' },
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, 'The "Neighbor-to-Neighbor" Strategy'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Designed a "Trust Graph" UI that prioritizes pros who have worked for the user\'s friends or neighbors. Created a "Safety-First" arrival experience with verified pro profiles, live GPS tracking, and clear identity verification markers.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, 'Consumer App: Simplicity & Confidence'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Designed a "Point-and-Shoot" onboarding flow with multimodal upload where users can record a 10-second video of their problem. Engineered a "Fast-Match" map interface that visually highlights pros in the user\'s immediate vicinity.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, 'Pro App: Efficiency & Growth'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Designed a high-density "Job Radar" dashboard for pros to manage incoming requests, track earnings, and optimize service routes. Created a streamlined onboarding flow for pros to verify credentials and build their "Social Trust Score."'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, 'UX Engineering & Frontend Support'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Built a comprehensive component library in Flutter, ensuring consistency across both apps. Actively participated in development, identifying and fixing UI/UX bugs related to map rendering, state transitions, and responsive layouts.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, 'Complex UX Challenges Solved'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Replaced long forms with a Multimodal AI Upload flow, allowing users to "show" rather than "tell" their problem. Designed a Clustered Marker System and radius-based filtering to keep the map interface clean. Created a transparent Stripe-powered checkout with clear breakdowns of fees, insurance, and service guarantees.'
      )
    )
  );
}

// Helper function to build process content
function buildProcessContent(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      'Conducted deep UX analysis to understand why existing platforms fail to build confidence. Owned the design of two distinct applications, ensuring they worked in perfect harmony while serving different user needs.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'UX Analysis'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Key insight: Trust is not built by ratings alone; it is built by Social Proximity. This led to the "Neighbor-to-Neighbor" strategy and Trust Graph UI design.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'Design System Ownership'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Built a comprehensive component library in Flutter, ensuring consistency across Consumer App, Pro App, and Marketing Landing Page.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'Performance-Driven Design'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Optimized image and video upload components to ensure smooth experience even on low-bandwidth mobile connections.'
        )
      )
    )
  );
}

// Helper function to build results content
function buildResultsContent(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'div',
      { className: 'grid grid-cols-1 md:grid-cols-3 gap-6' },
      React.createElement(
        'div',
        { className: 'p-6 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-3xl font-black mb-2' }, '60%'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'Reduction in Job Creation Friction'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, 'Through Visual-First onboarding')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-3xl font-black mb-2' }, '3'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'Platforms Designed'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, 'Consumer App, Pro App, Landing Page')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-3xl font-black mb-2' }, '100%'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'Design-to-Development Alignment'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, 'Pixel-perfect implementation')
      )
    ),
    React.createElement(
      'div',
      { className: 'mt-8 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'High-Fidelity Ecosystem'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Designed and maintained a cohesive brand experience across two mobile apps and a high-conversion landing page, ensuring visual consistency and trust-building throughout the user journey.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'Engineering Synergy'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Actively supported the frontend team by resolving UI bugs and ensuring pixel-perfect implementation of complex map and tracking features, bridging the gap between design and development.'
        )
      )
    )
  );
}

// Helper function to build learnings content
function buildLearningsContent(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      'This project demonstrates the ability to solve deep human problems (Trust) through a combination of Psychological Design and Technical Execution.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'The Architect of Confidence'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'By owning the UX from the initial landing page to the final "Job Complete" screen, I built a platform that gives American homeowners the confidence to open their doors. The result is a seamless, trust-driven ecosystem that bridges the gap between consumers and service professionals.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'Multi-Platform Design Mastery'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Successfully designed two distinct applications (Consumer and Pro) that work in perfect harmony while serving different user needs. This required deep understanding of both user personas and their unique workflows.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'Design-to-Development Bridge'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Actively participated in the development cycle, ensuring technical execution matched the high-fidelity vision. This hands-on approach eliminated the "handoff tax" and resulted in pixel-perfect implementation.'
        )
      )
    )
  );
}

export function getHandiersCaseStudy(language: Language = 'en'): CaseStudyContent | null {
  if (language === 'ko') {
    // Korean version can be added later
    return null;
  }

  return {
    slug: 'handiers-inc',
    title: 'Handiers — Designing Trust in the American Service Economy',
    description: 'Lead UI/UX Designer & UX Engineer transforming a cold service marketplace into a "Warm Trust Network", achieving 60% reduction in job creation friction.',
    sections: [
      {
        id: 'overview',
        type: 'overview',
        title: 'Overview',
        content: buildOverviewContent()
      },
      {
        id: 'problem',
        type: 'problem',
        title: 'The Challenge',
        content: buildProblemContent()
      },
      {
        id: 'solution',
        type: 'solution',
        title: 'Design Solutions',
        content: buildSolutionContent()
      },
      {
        id: 'process',
        type: 'process',
        title: 'Process',
        content: buildProcessContent()
      },
      {
        id: 'results',
        type: 'results',
        title: 'Results & Impact',
        content: buildResultsContent()
      },
      {
        id: 'learnings',
        type: 'learnings',
        title: 'Key Learnings',
        content: buildLearningsContent()
      }
    ]
  };
}
