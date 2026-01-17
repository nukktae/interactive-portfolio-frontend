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
        'Engineered a high-fidelity MVP that secured a 300+ agent waitlist during LA Tech Week. Achieved a 60% reduction in operational overhead for early adopters by automating the "Speed to Lead" lifecycle.'
      ),
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-3 gap-4 mt-6' },
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, 'Role'),
          React.createElement('p', { className: 'text-base font-semibold' }, 'Lead Product Engineer & UX Architect')
        ),
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, 'Stack'),
          React.createElement('p', { className: 'text-base font-semibold' }, 'Next.js 15, React 19, TypeScript 5.9, OpenAI GPT-4')
        ),
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, 'Velocity'),
          React.createElement('p', { className: 'text-base font-semibold' }, 'From Concept to LA Tech Week Showcase')
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
      'Real estate agents were drowning in operational overhead, spending excessive time on lead management instead of closing deals. Legacy CRMs couldn\'t handle the scale and speed required for modern real estate operations.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-3' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'Market Validation at Scale'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Needed to prove product-market fit with a system capable of handling 10,000+ concurrent leads with sub-500ms latency, outperforming legacy enterprise CRMs.'
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
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, 'The 3-Click Paradigm'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Redesigned the core lead-to-close workflow, reducing cognitive load and interaction friction by 57% (from 7+ clicks to a streamlined 3-click sequence).'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, 'Atomic Design System'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Developed a library of 50+ high-performance reusable components using Tailwind CSS 4.0 and React 19 primitives, enabling instantaneous UI updates across the entire platform.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, 'Multimodal Communication Hub'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Engineered a unified workspace that synchronizes Email, SMS, and Voice, with a color-coded "Lead Heat Map" status system that uses psychological triggers to guide agent focus toward high-intent deals.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, 'Distributed State Management'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Engineered a custom Cross-Tab Event Bus using the CustomEvent API and localStorage synchronization, achieving zero-latency call state updates across the entire application.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, 'Resilient Integration Architecture'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Built a Self-Healing OAuth Layer with proactive token rotation and exponential backoff retry logic, achieving 99%+ delivery success rate for automated AI-nurture sequences.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, 'AI Strategy: Context-Aware Automation'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Integrated GPT-4 to solve specific agent bottlenecks: automatically distilling 50+ email threads into a 3-bullet "Executive Summary" and generating predictive outreach templates that adapt tone and content based on lead interaction history, saving 3 minutes per response.'
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
      'Established a weekly "Feedback-to-Feature" pipeline with real estate agents, translating qualitative pain points into production-ready code within 48-hour sprints.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'Rapid Iteration Cycles'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Weekly feedback sessions with real estate agents, translating qualitative pain points into production-ready code within 48-hour sprints.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'Mobile-First Field Engineering'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Optimized the interface for "One-Handed Operation," ensuring agents can manage million-dollar deals while on-site at properties.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'Performance Engineering'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Implemented Server-Side Pagination and Optimistic UI Updates for datasets exceeding 10,000 leads, achieving sub-2 second "Time to Interactive" (TTI) on mobile devices.'
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
        React.createElement('p', { className: 'text-3xl font-black mb-2' }, '300+'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'Agent Waitlist'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, 'Secured during LA Tech Week')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-3xl font-black mb-2' }, '60%'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'Reduction in Operational Overhead'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, 'For early adopters')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-3xl font-black mb-2' }, '57%'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'Reduction in Interaction Friction'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, 'From 7+ clicks to 3 clicks')
      )
    ),
    React.createElement(
      'div',
      { className: 'mt-8 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'System Performance'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Architected a system capable of handling 10,000+ concurrent leads with sub-500ms latency, outperforming legacy enterprise CRMs.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'Delivery Success Rate'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Achieved 99%+ delivery success rate for automated AI-nurture sequences through resilient integration architecture.'
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
      'This project showcases the power of operating at the intersection of Design, Engineering, and Product Strategy.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'Full-Spectrum Ownership'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'By owning the full stack—from the initial Figma wireframe to the final API route—I eliminated the "handoff tax," resulting in a product that is more cohesive, faster to market, and deeply aligned with user needs.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'Metric-Driven Development'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Every technical choice was tied to a business outcome: waitlist growth, speed improvements, and latency reduction. This "Speed-to-Value" mindset ensured we built features that mattered.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'Cutting-Edge Stack'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Using React 19 and Next.js 15 positioned us as "First Movers" in the developer community, enabling us to leverage the latest performance optimizations and developer experience improvements.'
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
        'LA Tech Week에서 300명 이상의 부동산 중개사 대기자 명단을 확보한 고품질 MVP를 설계했습니다. \'Speed to Lead\' 전 과정을 자동화하여 초기 사용자 기준 운영 오버헤드를 60% 감소시켰습니다.'
      ),
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-3 gap-4 mt-6' },
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, '역할'),
          React.createElement('p', { className: 'text-base font-semibold' }, 'Lead Product Engineer & UX Architect')
        ),
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, '기술 스택'),
          React.createElement('p', { className: 'text-base font-semibold' }, 'Next.js 15, React 19, TypeScript 5.9, OpenAI GPT-4')
        ),
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, '개발 속도'),
          React.createElement('p', { className: 'text-base font-semibold' }, '아이디어 구상부터 LA Tech Week 쇼케이스까지')
        )
      )
    )
  );
}

function buildProblemContentKO(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-4' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      '부동산 중개사들은 운영 오버헤드에 시달리며 딜 마감보다 리드 관리에 과도한 시간을 소비하고 있었습니다. 기존 CRM 시스템은 현대적인 부동산 운영에 필요한 규모와 속도를 처리할 수 없었습니다.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-3' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, '대규모 시장 검증'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          '10,000명 이상의 동시 리드 처리가 가능하고 500ms 미만의 지연 시간을 가진 시스템으로 제품-시장 적합성을 입증해야 했으며, 기존 엔터프라이즈 CRM 대비 성능 우위를 확보해야 했습니다.'
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
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, '3-Click 패러다임'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        '핵심 Lead-to-Close 플로우를 재설계하여 클릭 수를 7회 이상에서 3회로 축소했습니다. 인지 부하 및 인터랙션 마찰을 57% 감소시켰습니다.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, 'Atomic Design 시스템'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Tailwind CSS 4.0과 React 19 기반으로 50개 이상의 고성능 재사용 컴포넌트 라이브러리를 구축하여 전체 플랫폼에 즉시 반영 가능한 디자인-투-코드 생태계를 완성했습니다.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, '멀티모달 커뮤니케이션 허브'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Email, SMS, Voice를 하나의 워크스페이스로 통합했습니다. 심리적 트리거를 활용한 컬러 기반 \'Lead Heat Map\' 상태 시스템으로 고의도 딜에 자연스럽게 집중을 유도합니다.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, '분산 상태 관리'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'CustomEvent API와 localStorage 동기화를 기반으로 Cross-Tab Event Bus를 직접 설계했습니다. 애플리케이션 전반에서 지연 없는 상태 동기화를 달성하여 고위험 협상 상황에서도 컨텍스트 손실이 없습니다.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, '복원력 있는 통합 아키텍처'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        '사전 토큰 로테이션과 지수 백오프 재시도 로직을 포함한 Self-Healing OAuth 레이어를 구축했습니다. AI 자동 너처링 시퀀스의 99% 이상 전송 성공률을 달성했습니다.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, 'AI 전략: 맥락 기반 자동화'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        '에이전트의 실제 병목을 해결하는 방향으로 GPT-4를 활용했습니다. 50개 이상의 이메일 스레드를 3줄 핵심 요약(Executive Summary)으로 자동 압축하고, 이전 상호작용 히스토리를 기반으로 톤과 메시지를 자동 조정하는 예측형 아웃리치 템플릿을 생성하여 응답당 평균 3분을 절약합니다.'
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
      '부동산 중개사와의 주간 인터뷰를 기반으로 Feedback → Feature 파이프라인을 구축했습니다. 정성적 페인포인트를 48시간 스프린트 내 실제 프로덕션 코드로 전환했습니다.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, '빠른 반복 구조'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          '부동산 중개사와의 주간 피드백 세션을 통해 정성적 페인포인트를 48시간 스프린트 내 프로덕션 코드로 전환했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, '모바일 퍼스트 필드 환경 최적화'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          '\'One-Handed Operation\'을 기준으로 UI를 설계하여 현장에서 수백만 달러 규모의 딜을 한 손으로 관리할 수 있도록 최적화했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, '대규모 성능 엔지니어링'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          '10,000건 이상의 데이터셋에 Server-Side Pagination과 Optimistic UI를 적용하여 데이터 부하 상황에서도 모바일 기준 TTI 2초 이내를 유지했습니다.'
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
        React.createElement('p', { className: 'text-3xl font-black mb-2' }, '300+'),
        React.createElement('p', { className: 'text-sm opacity-90' }, '중개사 대기자 명단'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, 'LA Tech Week에서 확보')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-3xl font-black mb-2' }, '60%'),
        React.createElement('p', { className: 'text-sm opacity-90' }, '운영 오버헤드 감소'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, '초기 사용자 기준')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-3xl font-black mb-2' }, '57%'),
        React.createElement('p', { className: 'text-sm opacity-90' }, '인터랙션 마찰 감소'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, '7회 이상 → 3회 클릭')
      )
    ),
    React.createElement(
      'div',
      { className: 'mt-8 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, '시스템 성능'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          '10,000명 이상의 동시 리드 처리가 가능하고 500ms 미만의 지연 시간을 가진 시스템을 설계하여 기존 엔터프라이즈 CRM 대비 성능 우위를 확보했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, '전송 성공률'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          '복원력 있는 통합 아키텍처를 통해 AI 자동 너처링 시퀀스의 99% 이상 전송 성공률을 달성했습니다.'
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
      '이 프로젝트는 디자인, 엔지니어링, 프로덕트 전략의 교차점에서 일할 수 있는 역량을 보여줍니다.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, '전 과정 직접 소유'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Figma 와이어프레임부터 API Route까지 전 과정을 직접 소유하며 \'핸드오프 비용\'을 제거했습니다. 그 결과, 더 빠르고, 더 응집력 있으며, 사용자 니즈에 정확히 부합하는 제품을 완성했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, '지표 기반 개발'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          '모든 기술적 선택이 비즈니스 결과와 연결되었습니다: 대기자 명단 성장, 속도 개선, 지연 시간 감소. 이 \'Speed-to-Value\' 사고방식으로 의미 있는 기능만을 구축했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, '최첨단 기술 스택'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'React 19와 Next.js 15를 사용하여 개발자 커뮤니티에서 \'First Mover\'로 포지셔닝했습니다. 최신 성능 최적화와 개발자 경험 개선을 활용할 수 있었습니다.'
        )
      )
    )
  );
}

export function getBestiaCaseStudy(language: Language = 'en'): CaseStudyContent | null {
  if (language === 'ko') {
    return {
      slug: 'bestia',
      title: 'Bestia — 부동산 인텔리전스의 미래를 설계하다',
      description: 'Lead Product Engineer & UX Architect로서 LA Tech Week에서 300명 이상의 중개사 대기자 명단을 확보한 고품질 MVP를 구축하고, 운영 오버헤드를 60% 감소시켰습니다.',
      sections: [
        {
          id: 'overview',
          type: 'overview',
          title: '개요',
          content: buildOverviewContentKO()
        },
        {
          id: 'problem',
          type: 'problem',
          title: '도전 과제',
          content: buildProblemContentKO()
        },
        {
          id: 'solution',
          type: 'solution',
          title: '엔지니어링 솔루션',
          content: buildSolutionContentKO()
        },
        {
          id: 'process',
          type: 'process',
          title: '프로세스',
          content: buildProcessContentKO()
        },
        {
          id: 'results',
          type: 'results',
          title: '결과 및 임팩트',
          content: buildResultsContentKO()
        },
        {
          id: 'learnings',
          type: 'learnings',
          title: '핵심 인사이트',
          content: buildLearningsContentKO()
        }
      ]
    };
  }

  return {
    slug: 'bestia',
    title: 'Bestia — Engineering the Future of Real Estate Intelligence',
    description: 'Lead Product Engineer & UX Architect building a high-fidelity MVP that secured 300+ agent waitlist during LA Tech Week, achieving 60% reduction in operational overhead.',
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
        title: 'Engineering Solutions',
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
