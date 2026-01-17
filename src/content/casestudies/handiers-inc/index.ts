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
          React.createElement('p', { className: 'text-base font-semibold' }, 'UX Analysis, Multi-Platform Design (Consumer & Pro), Design Systems, Frontend Support')
        ),
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, 'Deliverables'),
          React.createElement('p', { className: 'text-base font-semibold' }, 'Consumer Mobile App, Service Provider (Pro) App, Marketing Landing Page')
        )
      )
    )
  );
}

// Helper function to build problem content
function buildProblemContent(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      'In the American market, the biggest barrier to hiring a handyman is ', React.createElement('strong', null, 'trust'), '. Homeowners are hesitant to invite strangers into their homes.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/60 dark:bg-card/70 border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2 text-lg' }, 'The Mission'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Transform a cold service marketplace into a "Warm Trust Network" through social proof and transparent design.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/60 dark:bg-card/70 border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-3 text-lg' }, 'The Impact'),
        React.createElement(
          'ul',
          { className: 'space-y-2 text-sm text-foreground/80' },
          React.createElement('li', { className: 'flex gap-2' },
            React.createElement('span', { className: 'mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0' }),
            React.createElement('span', null, React.createElement('strong', null, '60% reduction'), ' in job creation friction through a "Visual-First" onboarding flow.')
          ),
          React.createElement('li', { className: 'flex gap-2' },
            React.createElement('span', { className: 'mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0' }),
            React.createElement('span', null, React.createElement('strong', null, 'High-Fidelity Ecosystem:'), ' Designed and maintained a cohesive brand experience across two mobile apps and a high-conversion landing page.')
          ),
          React.createElement('li', { className: 'flex gap-2' },
            React.createElement('span', { className: 'mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0' }),
            React.createElement('span', null, React.createElement('strong', null, 'Engineering Synergy:'), ' Actively supported the frontend team by resolving UI bugs and ensuring pixel-perfect implementation of complex map and tracking features.')
          )
        )
      )
    )
  );
}

// Helper function to build UX analysis content
function buildUXAnalysisContent(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      'I conducted a deep UX analysis to understand why existing platforms fail to build confidence.'
    ),
    React.createElement(
      'div',
      { className: 'space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Key Insight'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Trust is not built by ratings alone; it is built by ', React.createElement('strong', null, 'Social Proximity'), '.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'The Solution'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Designed a ', React.createElement('strong', null, '"Trust Graph" UI'), ' that prioritizes pros who have worked for the user\'s friends or neighbors.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Visual Transparency'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Created a "Safety-First" arrival experience, featuring verified pro profiles, live GPS tracking, and clear identity verification markers.'
        )
      )
    )
  );
}

// Helper function to build multi-platform design content
function buildMultiPlatformDesignContent(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-8' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      'I owned the design of two distinct applications, ensuring they worked in perfect harmony while serving different user needs.'
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-bold text-foreground mb-4' }, 'A. The Consumer App (Simplicity & Confidence)'),
      React.createElement(
        'div',
        { className: 'space-y-4' },
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '"Point-and-Shoot" Onboarding'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            'Designed a multimodal upload flow where users can record a 10-second video of their problem, reducing the need for complex descriptions.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Interactive Map Discovery'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            'Engineered a "Fast-Match" map interface that visually highlights pros in the user\'s immediate vicinity.'
          )
        )
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-bold text-foreground mb-4' }, 'B. The Pro App (Efficiency & Growth)'),
      React.createElement(
        'div',
        { className: 'space-y-4' },
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'The "Job Radar"'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            'Designed a high-density dashboard for pros to manage incoming requests, track earnings, and optimize their service routes.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Trust-Building Tools'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            'Created a streamlined onboarding flow for pros to verify their credentials and build their "Social Trust Score."'
          )
        )
      )
    )
  );
}

// Helper function to build UX engineering content
function buildUXEngineeringContent(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      'I bridged the gap between design and development by ensuring the technical execution matched the high-fidelity vision.'
    ),
    React.createElement(
      'div',
      { className: 'space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Design System Ownership'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Built a comprehensive component library in ', React.createElement('strong', null, 'Flutter'), ', ensuring consistency across both apps.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Frontend Bug Resolution'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Actively participated in the development cycle, identifying and fixing UI/UX bugs related to map rendering, state transitions, and responsive layouts.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Performance-Driven Design'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Optimized image and video upload components to ensure a smooth experience even on low-bandwidth mobile connections.'
        )
      )
    )
  );
}

// Helper function to build complex challenges content
function buildComplexChallengesContent(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'div',
      { className: 'grid grid-cols-1 md:grid-cols-3 gap-6' },
      React.createElement(
        'div',
        { className: 'p-6 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'The "Blank Page" Problem'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Replaced long forms with a ', React.createElement('strong', null, 'Multimodal AI Upload'), ' flow, allowing users to "show" rather than "tell" their problem.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Map Overload'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Designed a ', React.createElement('strong', null, 'Clustered Marker System'), ' and radius-based filtering to keep the map interface clean and actionable.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Payment Anxiety'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Designed a transparent ', React.createElement('strong', null, 'Stripe-powered checkout'), ' with clear breakdowns of fees, insurance, and service guarantees.'
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
      'This project demonstrates my ability to solve deep human problems (Trust) through a combination of ', React.createElement('strong', null, 'Psychological Design'), ' and ', React.createElement('strong', null, 'Technical Execution'), '.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/60 dark:bg-card/70 border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'The Takeaway'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'By owning the UX from the initial landing page to the final "Job Complete" screen, I built a platform that gives American homeowners the confidence to open their doors.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/60 dark:bg-card/70 border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'The Result'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'A seamless, trust-driven ecosystem that bridges the gap between consumers and service professionals.'
        )
      )
    )
  );
}


// Korean helper functions
function buildOverviewContentKO(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        { className: 'text-foreground/80 text-lg leading-relaxed mb-4' },
        '차가운 서비스 마켓플레이스를 사회적 신뢰가 작동하는 "Warm Trust Network"로 전환했습니다. 시각 중심(Visual-First) 온보딩 플로우를 통해 일자리 생성 마찰을 60% 감소시켰습니다.'
      ),
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-3 gap-4 mt-6' },
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, '역할'),
          React.createElement('p', { className: 'text-base font-semibold' }, 'Lead UI/UX Designer & UX Engineer')
        ),
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, 'Focus'),
          React.createElement('p', { className: 'text-base font-semibold' }, 'UX Analysis, Multi-Platform Design (Consumer & Pro), Design Systems, Frontend Support')
        ),
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, 'Deliverables'),
          React.createElement('p', { className: 'text-base font-semibold' }, 'Consumer Mobile App, Service Provider (Pro) App, Marketing Landing Page')
        )
      )
    )
  );
}

function buildProblemContentKO(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      '미국 시장에서 핸디맨을 고용할 때 가장 큰 장벽은 ', React.createElement('strong', null, '신뢰'), '입니다. 집주인들은 낯선 사람을 집 안으로 초대하는 것을 주저합니다.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/60 dark:bg-card/70 border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2 text-lg' }, 'The Mission'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '사회적 증명과 투명한 디자인을 통해 차가운 서비스 마켓플레이스를 "Warm Trust Network"로 전환합니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/60 dark:bg-card/70 border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-3 text-lg' }, 'The Impact'),
        React.createElement(
          'ul',
          { className: 'space-y-2 text-sm text-foreground/80' },
          React.createElement('li', { className: 'flex gap-2' },
            React.createElement('span', { className: 'mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0' }),
            React.createElement('span', null, React.createElement('strong', null, '60% 감소'), ' in job creation friction through a "Visual-First" onboarding flow.')
          ),
          React.createElement('li', { className: 'flex gap-2' },
            React.createElement('span', { className: 'mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0' }),
            React.createElement('span', null, React.createElement('strong', null, 'High-Fidelity Ecosystem:'), ' Designed and maintained a cohesive brand experience across two mobile apps and a high-conversion landing page.')
          ),
          React.createElement('li', { className: 'flex gap-2' },
            React.createElement('span', { className: 'mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0' }),
            React.createElement('span', null, React.createElement('strong', null, 'Engineering Synergy:'), ' Actively supported the frontend team by resolving UI bugs and ensuring pixel-perfect implementation of complex map and tracking features.')
          )
        )
      )
    )
  );
}

// Korean helper functions for separate sections
function buildUXAnalysisContentKO(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      '기존 플랫폼들이 왜 신뢰 형성에 실패하는지 이해하기 위해 심층 UX 분석을 수행했습니다.'
    ),
    React.createElement(
      'div',
      { className: 'space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '핵심 인사이트'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '신뢰는 별점만으로 형성되는 것이 아니라 ', React.createElement('strong', null, '사회적 근접성'), '에 의해 형성됩니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'The Solution'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '사용자의 친구나 이웃과 함께 일한 경험이 있는 프로를 우선시하는 ', React.createElement('strong', null, '"Trust Graph" UI'), '를 설계했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Visual Transparency'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '검증된 프로 프로필, 실시간 GPS 추적, 명확한 신원 인증 마커를 포함한 "Safety-First" 도착 경험을 만들었습니다.'
        )
      )
    )
  );
}

function buildMultiPlatformDesignContentKO(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-8' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      '서로 다른 사용자 요구를 충족하면서 완벽한 조화를 이루도록 작동하는 두 개의 고유한 애플리케이션의 디자인을 담당했습니다.'
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-bold text-foreground mb-4' }, 'A. The Consumer App (Simplicity & Confidence)'),
      React.createElement(
        'div',
        { className: 'space-y-4' },
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '"Point-and-Shoot" Onboarding'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            '사용자가 문제를 10초 비디오로 녹화할 수 있는 멀티모달 업로드 플로우를 설계하여 복잡한 설명의 필요성을 줄였습니다.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Interactive Map Discovery'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            '사용자의 즉각적인 주변 지역의 프로를 시각적으로 강조하는 "Fast-Match" 지도 인터페이스를 설계했습니다.'
          )
        )
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-bold text-foreground mb-4' }, 'B. The Pro App (Efficiency & Growth)'),
      React.createElement(
        'div',
        { className: 'space-y-4' },
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'The "Job Radar"'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            '프로가 들어오는 요청을 관리하고, 수익을 추적하며, 서비스 경로를 최적화할 수 있는 고밀도 대시보드를 설계했습니다.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Trust-Building Tools'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            '프로가 자격 증명을 확인하고 "Social Trust Score"를 구축할 수 있는 간소화된 온보딩 플로우를 만들었습니다.'
          )
        )
      )
    )
  );
}

function buildUXEngineeringContentKO(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      '기술적 실행이 고품질 비전과 일치하도록 보장하여 디자인과 개발 사이의 간극을 해소했습니다.'
    ),
    React.createElement(
      'div',
      { className: 'space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Design System Ownership'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          React.createElement('strong', null, 'Flutter'), '에서 포괄적인 컴포넌트 라이브러리를 구축하여 두 앱 전반에 일관성을 보장했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Frontend Bug Resolution'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '개발 주기에 적극적으로 참여하여 지도 렌더링, 상태 전환, 반응형 레이아웃과 관련된 UI/UX 버그를 식별하고 수정했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Performance-Driven Design'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '저대역폭 모바일 연결에서도 원활한 경험을 보장하기 위해 이미지 및 비디오 업로드 컴포넌트를 최적화했습니다.'
        )
      )
    )
  );
}

function buildComplexChallengesContentKO(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'div',
      { className: 'grid grid-cols-1 md:grid-cols-3 gap-6' },
      React.createElement(
        'div',
        { className: 'p-6 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'The "Blank Page" Problem'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '긴 폼을 ', React.createElement('strong', null, 'Multimodal AI Upload'), ' 플로우로 대체하여 사용자가 문제를 "말하는" 대신 "보여줄" 수 있도록 했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Map Overload'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '지도 인터페이스를 깔끔하고 실행 가능하게 유지하기 위해 ', React.createElement('strong', null, 'Clustered Marker System'), ' 및 반경 기반 필터링을 설계했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Payment Anxiety'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '수수료, 보험 및 서비스 보장에 대한 명확한 세부 내역을 포함한 투명한 ', React.createElement('strong', null, 'Stripe-powered checkout'), '을 설계했습니다.'
        )
      )
    )
  );
}

function buildSolutionContentKO(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-8' },
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, '\'이웃에서 이웃으로\' 전략'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        '사용자의 친구·이웃과 연결된 이력이 있는 프로를 우선 노출하는 \'Trust Graph\' UI를 설계했습니다. 검증된 프로필, 실시간 GPS 이동 경로, 명확한 신원 인증 마커를 포함한 Safety-First 도착 경험(Arrival Experience)을 만들었습니다.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, '소비자 앱: 단순함 & 안심'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        '긴 설명 대신, 문제 상황을 10초 영상으로 촬영·업로드하는 멀티모달 \'Point-and-Shoot\' 온보딩 플로우를 설계했습니다. 사용자의 즉각적인 반경 내 프로를 강조하는 Fast-Match 지도 인터페이스를 설계했습니다.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, 'Pro 앱: 효율 & 성장'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        '요청 관리, 수익 추적, 동선 최적화를 한 화면에서 처리하는 고밀도 \'Job Radar\' 대시보드를 설계했습니다. 자격 인증을 간소화하고 개인의 Social Trust Score를 축적할 수 있는 온보딩 플로우를 만들었습니다.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, 'UX 엔지니어링 & 프론트엔드 서포트'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Flutter 기반 공통 컴포넌트 라이브러리를 구축하여 두 앱 간 UI/UX 일관성을 확보했습니다. 지도 렌더링, 상태 전환, 반응형 레이아웃 관련 UI/UX 이슈를 직접 해결하며 프론트엔드 팀과 긴밀히 협업했습니다.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, '복잡한 UX 문제 해결'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        '긴 폼 대신 문제를 "설명"하는 것이 아닌 "보여줄 수 있는" 멀티모달 AI 업로드 플로우를 도입했습니다. 클러스터 마커 시스템과 반경 기반 필터링으로 지도 과밀 문제를 해결했습니다. Stripe 기반 투명한 결제 UI를 설계하여 수수료, 보험, 서비스 보장 내역을 명확히 표시했습니다.'
      )
    )
  );
}

function buildProcessContentKO(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      '기존 플랫폼들이 왜 신뢰 형성에 실패하는지에 대해 심층 UX 분석을 진행했습니다. 서로 다른 목적을 가진 두 앱을 하나의 생태계처럼 유기적으로 설계했습니다.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'UX 분석'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          '핵심 인사이트: 신뢰는 단순한 별점이 아니라 사회적 근접성(Social Proximity)에서 형성됩니다. 이는 \'이웃에서 이웃으로\' 전략과 Trust Graph UI 설계로 이어졌습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, '디자인 시스템 오너십'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Flutter 기반 공통 컴포넌트 라이브러리를 구축하여 소비자 앱, Pro 앱, 마케팅 랜딩 페이지 전반에 걸친 일관성을 확보했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, '성능 중심 UX 설계'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          '저속 네트워크 환경에서도 안정적인 경험을 위해 이미지·영상 업로드 컴포넌트를 최적화했습니다.'
        )
      )
    )
  );
}

function buildResultsContentKO(): React.ReactNode {
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
        React.createElement('p', { className: 'text-sm opacity-90' }, '일자리 생성 마찰 감소'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, '시각 중심 온보딩을 통해')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-3xl font-black mb-2' }, '3'),
        React.createElement('p', { className: 'text-sm opacity-90' }, '플랫폼 설계'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, '소비자 앱, Pro 앱, 랜딩 페이지')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-3xl font-black mb-2' }, '100%'),
        React.createElement('p', { className: 'text-sm opacity-90' }, '디자인-개발 정렬'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, '픽셀 단위 구현')
      )
    ),
    React.createElement(
      'div',
      { className: 'mt-8 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, '고품질 생태계'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          '두 개의 모바일 앱(Consumer & Pro)과 고전환 마케팅 랜딩 페이지 전반에 걸친 일관된 브랜드 경험을 설계 및 유지했습니다. 시각적 일관성과 신뢰 구축을 사용자 여정 전반에 걸쳐 보장했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, '엔지니어링 시너지'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          '프론트엔드 팀과 긴밀히 협업하며 지도·트래킹 등 복잡한 UI 기능의 픽셀 단위 구현과 UI 버그 해결을 지원했습니다. 디자인과 개발 사이의 간극을 줄이며 설계 의도가 실제 제품에서 그대로 구현되도록 책임졌습니다.'
        )
      )
    )
  );
}

function buildLearningsContentKO(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      '이 프로젝트는 ', React.createElement('strong', null, '심리적 디자인'), '과 ', React.createElement('strong', null, '기술적 실행'), '의 조합을 통해 깊은 인간적 문제(신뢰)를 해결할 수 있는 능력을 보여줍니다.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/60 dark:bg-card/70 border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '핵심 교훈'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '초기 랜딩 페이지부터 최종 "작업 완료" 화면까지 UX를 직접 소유함으로써 미국 집주인들이 문을 열 수 있는 자신감을 주는 플랫폼을 구축했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/60 dark:bg-card/70 border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '결과'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '소비자와 서비스 전문가 사이의 간극을 해소하는 매끄럽고 신뢰 중심의 생태계.'
        )
      )
    )
  );
}

export function getHandiersCaseStudy(language: Language = 'en'): CaseStudyContent | null {
  if (language === 'ko') {
    return {
      slug: 'handiers-inc',
      title: 'Handiers — 미국 서비스 시장에서 \'신뢰\'를 설계하다',
      description: 'Lead UI/UX Designer & UX Engineer로서 차가운 서비스 마켓플레이스를 \'Warm Trust Network\'로 전환하고, 일자리 생성 마찰을 60% 감소시켰습니다.',
      sections: [
        {
          id: 'overview',
          type: 'overview',
          title: 'Overview',
          titleKo: '개요',
          content: buildOverviewContentKO()
        },
        {
          id: 'trust-gap-challenge',
          type: 'problem',
          title: 'The "Trust Gap" Challenge: Designing for Safety',
          titleKo: '"신뢰 격차" 도전: 안전을 위한 설계',
          content: buildProblemContentKO()
        },
        {
          id: 'ux-analysis',
          type: 'solution',
          title: 'UX Analysis: The "Neighbor-to-Neighbor" Strategy',
          titleKo: 'UX 분석: "이웃-대-이웃" 전략',
          content: buildUXAnalysisContentKO()
        },
        {
          id: 'multi-platform-design',
          type: 'solution',
          title: 'Multi-Platform Design: Consumer vs. Pro',
          titleKo: '멀티플랫폼 디자인: 소비자 vs 프로',
          content: buildMultiPlatformDesignContentKO()
        },
        {
          id: 'ux-engineering',
          type: 'solution',
          title: 'UX Engineering & Frontend Support',
          titleKo: 'UX 엔지니어링 & 프론트엔드 지원',
          content: buildUXEngineeringContentKO()
        },
        {
          id: 'complex-challenges',
          type: 'results',
          title: 'Solving Complex UX Challenges',
          titleKo: '복잡한 UX 도전 과제 해결',
          content: buildComplexChallengesContentKO()
        },
        {
          id: 'reflection',
          type: 'learnings',
          title: 'Reflection: The Architect of Confidence',
          titleKo: '성찰: 신뢰의 아키텍트',
          content: buildLearningsContentKO()
        }
      ]
    };
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
          titleKo: '개요',
          content: buildOverviewContent()
        },
        {
          id: 'trust-gap-challenge',
          type: 'problem',
          title: 'The "Trust Gap" Challenge: Designing for Safety',
          titleKo: '"신뢰 격차" 도전: 안전을 위한 설계',
          content: buildProblemContent()
        },
        {
          id: 'ux-analysis',
          type: 'solution',
          title: 'UX Analysis: The "Neighbor-to-Neighbor" Strategy',
          titleKo: 'UX 분석: "이웃-대-이웃" 전략',
          content: buildUXAnalysisContent()
        },
        {
          id: 'multi-platform-design',
          type: 'solution',
          title: 'Multi-Platform Design: Consumer vs. Pro',
          titleKo: '멀티플랫폼 디자인: 소비자 vs 프로',
          content: buildMultiPlatformDesignContent()
        },
        {
          id: 'ux-engineering',
          type: 'solution',
          title: 'UX Engineering & Frontend Support',
          titleKo: 'UX 엔지니어링 & 프론트엔드 지원',
          content: buildUXEngineeringContent()
        },
        {
          id: 'complex-challenges',
          type: 'results',
          title: 'Solving Complex UX Challenges',
          titleKo: '복잡한 UX 도전 과제 해결',
          content: buildComplexChallengesContent()
        },
        {
          id: 'reflection',
          type: 'learnings',
          title: 'Reflection: The Architect of Confidence',
          titleKo: '성찰: 신뢰의 아키텍트',
          content: buildLearningsContent()
        }
      ]
  };
}
