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
        'Modernized a legacy financial institution\'s reporting workflow through strategic product leadership, constraint-aware research, and PWA architecture. Transformed manual monthly submissions into an automated, engaging platform experience that reduced operational burden while increasing student engagement.'
      ),
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-3 gap-4 mt-6' },
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, 'Role'),
          React.createElement('p', { className: 'text-base font-semibold' }, 'Lead Product Engineer & UX Strategist')
        ),
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, 'Specialty'),
          React.createElement('p', { className: 'text-base font-semibold' }, 'Operational Automation, Constraint-Aware Research, PWA Architecture, Agile Team Leadership')
        ),
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, 'Impact'),
          React.createElement('p', { className: 'text-base font-semibold' }, '3-Hour Backend Processing Reduction, Automated Compliance Monitoring, 100% Mobile Accessibility')
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
      'h3',
      { className: 'text-2xl font-bold text-foreground mb-4' },
      'The Strategic Challenge: Breaking the "Manual Submission" Bottleneck'
    ),
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      'The Shinhan Scholarship Foundation, a major institutional body, was struggling with a fragmented, manual process for monthly student report submissions. This created a massive operational burden for admins and a high-friction experience for students.'
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
          'To transform a legacy web-only platform into a high-engagement, automated ecosystem that reduces administrative overhead while strengthening the foundation\'s brand.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/60 dark:bg-card/70 border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2 text-lg' }, 'The Constraint'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Direct access to current scholarship recipients was restricted due to institutional sensitivity, making traditional user research impossible.'
        )
      )
    )
  );
}

// Helper function to build constraint-aware research content
function buildConstraintAwareResearchContent(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      'To bypass the research barrier, I led a "Digital Archaeology" initiative to uncover user pain points without direct access.'
    ),
    React.createElement(
    'div',
    { className: 'space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Strategic Web Crawling'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'I engineered a custom crawler to scan platforms like Linkareer, identifying a legacy post from a former recipient. This allowed us to track down and interview a key user, providing the "Aha!" moment: Students weren\'t lazy; the platform was simply inaccessible on mobile, where they spend 90% of their time.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Mind-Map Synthesis'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'After every stakeholder meeting and user interview, I utilized Mind Mapping to connect disparate data points, ensuring the product roadmap was aligned with both student needs and institutional goals.'
        )
      )
    )
  );
}

// Helper function to build product strategy content
function buildProductStrategyContent(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      'I utilized the SCAMPER method to drive ideation, specifically focusing on the "Adapt" phase.'
    ),
    React.createElement(
      'div',
      { className: 'space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'The Adaptation'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'I adapted the "Social Feed" concept from modern apps into a Recurring Activity Reporting system. Instead of a cold form, reporting became a "Social Check-in," increasing engagement by 40% and making compliance feel like community participation.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'SWOT-Driven Roadmap'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Conducted a comprehensive SWOT analysis to mitigate the risks of transitioning a legacy financial institution to a modern PWA.'
        )
      )
    )
  );
}

// Helper function to build technical vision content
function buildTechnicalVisionContent(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      'I made the strategic decision to architect the solution as a Progressive Web App (PWA) rather than a native application.'
    ),
    React.createElement(
      'div',
      { className: 'space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Why PWA?'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'It provided the perfect bridge: Instant Mobile Accessibility for students (with push notifications for "Submission Alarms") and Desktop Stability for admins, all while maintaining a single, low-maintenance codebase.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Automated Data Validation'),
      React.createElement(
        'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'I engineered a frontend validation layer that pre-processed student reports. This single move eliminated manual data entry errors and saved the backend team ~3 hours of processing time per cycle.'
        )
      )
    )
  );
}

// Helper function to build leadership & execution content
function buildLeadershipExecutionContent(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      'I led the design and deployment of a lightweight Admin CRM Dashboard to give the foundation "Speed-to-Insight."'
    ),
    React.createElement(
      'div',
      { className: 'space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Automated Red-Flagging'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Designed an intelligent monitoring system that automatically flags late or non-compliant reports, allowing admins to manage 500+ students with the effort previously required for 50.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Agile Team Leadership'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Managed a cross-functional team of frontend and backend engineers, implementing Bi-Weekly Sprint Reviews and Automated CI/CD Pipelines to ensure a zero-downtime launch.'
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
      { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' },
      React.createElement(
        'div',
        { className: 'p-6 rounded-xl bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-sm opacity-70 mb-2 uppercase tracking-wider' }, 'Metric'),
        React.createElement('p', { className: 'text-lg font-semibold mb-4' }, 'Strategic Achievement')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-xl bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-sm opacity-70 mb-2 uppercase tracking-wider' }, 'Operational ROI'),
        React.createElement('p', { className: 'text-2xl font-black mb-2' }, '3-Hour Reduction'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'In manual backend processing per month')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-xl bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-sm opacity-70 mb-2 uppercase tracking-wider' }, 'Engagement'),
        React.createElement('p', { className: 'text-2xl font-black mb-2' }, '100% Mobile Adoption'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'Via PWA architecture')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-xl bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-sm opacity-70 mb-2 uppercase tracking-wider' }, 'Compliance'),
        React.createElement('p', { className: 'text-2xl font-black mb-2' }, '95% On-Time Submission Rate'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'Driven by automated PWA alarms')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-xl bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-sm opacity-70 mb-2 uppercase tracking-wider' }, 'Leadership'),
        React.createElement('p', { className: 'text-2xl font-black mb-2' }, 'Tier-1 Success'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'Successfully navigated Tier-1 Financial Institution security and compliance hurdles')
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
      'h3',
      { className: 'text-2xl font-bold text-foreground mb-4' },
      'Executive Reflection: The Strategic Product Architect'
    ),
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      'This project demonstrates my ability to lead high-stakes digital transformations within rigid corporate environments.'
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
          'By combining Creative Research (Crawling) with Technical Pragmatism (PWA) and Agile Leadership, I delivered a solution that turned a bureaucratic hurdle into a brand-strengthening asset.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/60 dark:bg-card/70 border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'The Result'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'A modernized, automated foundation that serves the next generation of leaders with world-class efficiency.'
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
        '전략적 제품 리더십, 제약 조건을 고려한 연구, PWA 아키텍처를 통해 레거시 금융 기관의 보고 워크플로우를 현대화했습니다. 수동 월간 제출을 자동화되고 참여형 플랫폼 경험으로 전환하여 운영 부담을 줄이면서 학생 참여를 증가시켰습니다.'
      ),
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-3 gap-4 mt-6' },
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, '역할'),
          React.createElement('p', { className: 'text-base font-semibold' }, '리드 프로덕트 엔지니어 & UX 전략가')
        ),
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, '전문 분야'),
          React.createElement('p', { className: 'text-base font-semibold' }, '운영 자동화, 제약 인식 연구, PWA 아키텍처, 애자일 팀 리더십')
        ),
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, '임팩트'),
          React.createElement('p', { className: 'text-base font-semibold' }, '3시간 백엔드 처리 시간 절감, 자동화된 규정 준수 모니터링, 100% 모바일 접근성')
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
      'h3',
      { className: 'text-2xl font-bold text-foreground mb-4' },
      '전략적 도전: "수동 제출" 병목 현상 해결'
    ),
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      '신한장학재단은 주요 기관으로서 월간 학생 보고서 제출을 위한 분산되고 수동적인 프로세스로 어려움을 겪고 있었습니다. 이는 관리자에게 막대한 운영 부담을 주고 학생들에게 높은 마찰 경험을 제공했습니다.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/60 dark:bg-card/70 border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2 text-lg' }, '미션'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '레거시 웹 전용 플랫폼을 관리 오버헤드를 줄이면서 재단의 브랜드를 강화하는 고참여도 자동화 생태계로 전환하는 것.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/60 dark:bg-card/70 border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2 text-lg' }, '제약 조건'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '기관의 민감성으로 인해 현재 장학생에 대한 직접 접근이 제한되어 전통적인 사용자 연구가 불가능했습니다.'
        )
      )
    )
  );
}

// Korean helper functions for separate sections
function buildConstraintAwareResearchContentKO(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      '연구 장벽을 우회하기 위해 직접 접근 없이 사용자 고통 포인트를 발견하는 "디지털 고고학" 이니셔티브를 주도했습니다.'
    ),
    React.createElement(
      'div',
      { className: 'space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '전략적 웹 크롤링'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Linkareer와 같은 플랫폼을 스캔하는 맞춤형 크롤러를 설계하여 전 수혜자의 레거시 게시물을 식별했습니다. 이를 통해 핵심 사용자를 추적하고 인터뷰할 수 있었으며, "아하!" 순간을 제공했습니다: 학생들이 게으른 것이 아니라 플랫폼이 학생들이 90%의 시간을 보내는 모바일에서 단순히 접근 불가능했던 것입니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '마인드맵 통합'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '모든 이해관계자 회의와 사용자 인터뷰 후, 마인드 매핑을 활용하여 분산된 데이터 포인트를 연결하여 제품 로드맵이 학생 요구사항과 기관 목표 모두와 일치하도록 했습니다.'
        )
      )
    )
  );
}

function buildProductStrategyContentKO(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      'SCAMPER 방법을 활용하여 아이디어를 도출했으며, 특히 "적응" 단계에 집중했습니다.'
    ),
    React.createElement(
      'div',
      { className: 'space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '적응'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '현대 앱의 "소셜 피드" 개념을 반복 활동 보고 시스템으로 적응시켰습니다. 차가운 양식 대신 보고가 "소셜 체크인"이 되어 참여도가 40% 증가하고 규정 준수가 커뮤니티 참여처럼 느껴지게 했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'SWOT 기반 로드맵'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '레거시 금융 기관을 현대적인 PWA로 전환하는 위험을 완화하기 위해 포괄적인 SWOT 분석을 수행했습니다.'
        )
      )
    )
  );
}

function buildTechnicalVisionContentKO(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      '네이티브 애플리케이션보다는 프로그레시브 웹 앱(PWA)으로 솔루션을 설계하는 전략적 결정을 내렸습니다.'
    ),
    React.createElement(
      'div',
      { className: 'space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'PWA를 선택한 이유?'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '완벽한 다리를 제공했습니다: 학생을 위한 즉각적인 모바일 접근성("제출 알람" 푸시 알림 포함)과 관리자를 위한 데스크톱 안정성, 모두 단일의 유지보수가 적은 코드베이스를 유지하면서.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '자동화된 데이터 검증'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '학생 보고서를 사전 처리하는 프론트엔드 검증 레이어를 설계했습니다. 이 단일 조치로 수동 데이터 입력 오류를 제거하고 백엔드 팀이 주기당 약 3시간의 처리 시간을 절약했습니다.'
        )
      )
    )
  );
}

function buildLeadershipExecutionContentKO(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      '재단에 "인사이트 속도"를 제공하기 위해 경량 관리자 CRM 대시보드의 설계 및 배포를 주도했습니다.'
    ),
    React.createElement(
      'div',
      { className: 'space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '자동화된 경고 시스템'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '지연되거나 규정을 준수하지 않는 보고서를 자동으로 플래그 지정하는 지능형 모니터링 시스템을 설계하여 관리자가 이전에 50명에 필요한 노력으로 500명 이상의 학생을 관리할 수 있게 했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '애자일 팀 리더십'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '프론트엔드 및 백엔드 엔지니어의 크로스 기능 팀을 관리하여 격주 스프린트 리뷰와 자동화된 CI/CD 파이프라인을 구현하여 무중단 출시를 보장했습니다.'
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
      { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' },
      React.createElement(
        'div',
        { className: 'p-6 rounded-xl bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-sm opacity-70 mb-2 uppercase tracking-wider' }, '지표'),
        React.createElement('p', { className: 'text-lg font-semibold mb-4' }, '전략적 성과')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-xl bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-sm opacity-70 mb-2 uppercase tracking-wider' }, '운영 ROI'),
        React.createElement('p', { className: 'text-2xl font-black mb-2' }, '3시간 절감'),
        React.createElement('p', { className: 'text-sm opacity-90' }, '월간 수동 백엔드 처리 시간')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-xl bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-sm opacity-70 mb-2 uppercase tracking-wider' }, '참여도'),
        React.createElement('p', { className: 'text-2xl font-black mb-2' }, '100% 모바일 채택'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'PWA 아키텍처를 통해')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-xl bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-sm opacity-70 mb-2 uppercase tracking-wider' }, '규정 준수'),
        React.createElement('p', { className: 'text-2xl font-black mb-2' }, '95% 정시 제출률'),
        React.createElement('p', { className: 'text-sm opacity-90' }, '자동화된 PWA 알람으로 달성')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-xl bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-sm opacity-70 mb-2 uppercase tracking-wider' }, '리더십'),
        React.createElement('p', { className: 'text-2xl font-black mb-2' }, '1등급 성공'),
        React.createElement('p', { className: 'text-sm opacity-90' }, '1등급 금융 기관 보안 및 규정 준수 장애물 성공적으로 극복')
      )
    )
  );
}

function buildLearningsContentKO(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'h3',
      { className: 'text-2xl font-bold text-foreground mb-4' },
      '경영진 성찰: 전략적 제품 아키텍트'
    ),
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      '이 프로젝트는 엄격한 기업 환경 내에서 고위험 디지털 전환을 주도할 수 있는 능력을 보여줍니다.'
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
          '창의적 연구(크롤링)와 기술적 실용주의(PWA), 애자일 리더십을 결합하여 관료적 장애물을 브랜드 강화 자산으로 전환하는 솔루션을 제공했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/60 dark:bg-card/70 border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '결과'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '차세대 리더들에게 세계적 수준의 효율성으로 서비스를 제공하는 현대화되고 자동화된 재단.'
        )
      )
    )
  );
}

export function getShinhanCaseStudy(language: Language = 'en'): CaseStudyContent {
  if (language === 'ko') {
    return {
      slug: 'shinhan',
      title: '신한장학재단 — 레거시 시스템 현대화를 통한 전략적 제품 리더십',
      description: '전략적 제품 리더십, 제약 조건을 고려한 연구, PWA 아키텍처를 통해 레거시 금융 기관의 보고 워크플로우를 현대화했습니다.',
      sections: [
        {
          id: 'overview',
          type: 'overview',
          title: 'Overview',
          titleKo: '개요',
          content: buildOverviewContentKO()
        },
        {
          id: 'strategic-challenge',
          type: 'problem',
          title: 'The Strategic Challenge: Breaking the "Manual Submission" Bottleneck',
          titleKo: '전략적 도전: "수동 제출" 병목 현상 해결',
          content: buildProblemContentKO()
        },
        {
          id: 'constraint-aware-research',
          type: 'solution',
          title: 'Constraint-Aware Research: The "Digital Archaeology" Approach',
          titleKo: '제약 인식 연구: "디지털 고고학" 접근법',
          content: buildConstraintAwareResearchContentKO()
        },
        {
          id: 'product-strategy',
          type: 'solution',
          title: 'Product Strategy: The SCAMPER Innovation',
          titleKo: '제품 전략: SCAMPER 혁신',
          content: buildProductStrategyContentKO()
        },
        {
          id: 'technical-vision',
          type: 'solution',
          title: 'Technical Vision: The PWA Transformation',
          titleKo: '기술 비전: PWA 전환',
          content: buildTechnicalVisionContentKO()
        },
        {
          id: 'leadership-execution',
          type: 'solution',
          title: 'Leadership & Execution: The "Admin-Centric" CRM',
          titleKo: '리더십 & 실행: "관리자 중심" CRM',
          content: buildLeadershipExecutionContentKO()
        },
        {
          id: 'kpis',
          type: 'results',
          title: 'Key Performance Indicators (KPIs)',
          titleKo: '주요 성과 지표 (KPI)',
          content: buildResultsContentKO()
        },
        {
          id: 'executive-reflection',
          type: 'learnings',
          title: 'Executive Reflection: The Strategic Product Architect',
          titleKo: '경영진 성찰: 전략적 제품 아키텍트',
          content: buildLearningsContentKO()
        }
      ]
    };
  }

  return {
    slug: 'shinhan',
    title: 'Shinhan Scholarship Foundation — Modernizing Legacy Systems through Strategic Product Leadership',
    description: 'Modernized a legacy financial institution\'s reporting workflow through strategic product leadership, constraint-aware research, and PWA architecture.',
    sections: [
        {
          id: 'overview',
          type: 'overview',
          title: 'Overview',
          titleKo: '개요',
          content: buildOverviewContent()
        },
        {
          id: 'strategic-challenge',
          type: 'problem',
          title: 'The Strategic Challenge: Breaking the "Manual Submission" Bottleneck',
          titleKo: '전략적 도전: "수동 제출" 병목 현상 해결',
          content: buildProblemContent()
        },
        {
          id: 'constraint-aware-research',
          type: 'solution',
          title: 'Constraint-Aware Research: The "Digital Archaeology" Approach',
          titleKo: '제약 인식 연구: "디지털 고고학" 접근법',
          content: buildConstraintAwareResearchContent()
        },
        {
          id: 'product-strategy',
          type: 'solution',
          title: 'Product Strategy: The SCAMPER Innovation',
          titleKo: '제품 전략: SCAMPER 혁신',
          content: buildProductStrategyContent()
        },
        {
          id: 'technical-vision',
          type: 'solution',
          title: 'Technical Vision: The PWA Transformation',
          titleKo: '기술 비전: PWA 전환',
          content: buildTechnicalVisionContent()
        },
        {
          id: 'leadership-execution',
          type: 'solution',
          title: 'Leadership & Execution: The "Admin-Centric" CRM',
          titleKo: '리더십 & 실행: "관리자 중심" CRM',
          content: buildLeadershipExecutionContent()
        },
        {
          id: 'kpis',
          type: 'results',
          title: 'Key Performance Indicators (KPIs)',
          titleKo: '주요 성과 지표 (KPI)',
          content: buildResultsContent()
        },
        {
          id: 'executive-reflection',
          type: 'learnings',
          title: 'Executive Reflection: The Strategic Product Architect',
          titleKo: '경영진 성찰: 전략적 제품 아키텍트',
          content: buildLearningsContent()
        }
    ]
  };
}
