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
        'Engineered a unified, AI-powered ecosystem that automates the "Administrative Tax" of being a student. Successfully deployed a cross-platform solution (iOS, Android, Web) that secured a 120-user waitlist pre-launch.'
      ),
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6' },
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, 'Role'),
          React.createElement('p', { className: 'text-base font-semibold' }, 'Lead Product Engineer & Full-Stack Developer')
        ),
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, 'Focus'),
          React.createElement('p', { className: 'text-base font-semibold' }, 'Product Strategy, AI System Design, Cross-Platform Engineering (React Native/Expo), Backend Architecture (Node.js/Express)')
        ),
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, 'Impact'),
          React.createElement('p', { className: 'text-base font-semibold' }, '120+ User Waitlist, 124+ API Endpoints, App Store Deployment')
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
      'University students, especially those with complex double majors or international requirements, struggle with fragmented tools for credit planning and time management.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/60 dark:bg-card/70 border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2 text-lg' }, 'The Discovery'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Conducted in-depth interviews and surveys with ', React.createElement('strong', null, '~80 students'), ', confirming that ', React.createElement('strong', null, '~98%'), ' struggled with credit planning and academic organization.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/60 dark:bg-card/70 border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2 text-lg' }, 'The Mission'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Build a unified, AI-powered ecosystem that automates the "Administrative Tax" of being a student.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/60 dark:bg-card/70 border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2 text-lg' }, 'The Result'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Successfully deployed a cross-platform solution (iOS, Android, Web) that secured a ', React.createElement('strong', null, '120-user waitlist'), ' pre-launch.'
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
      'I led the product lifecycle from initial SWOT analysis to final App Store submission.'
    ),
    React.createElement(
      'div',
      { className: 'space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'User-Centric Scope'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Used research findings to define a core MVP focusing on three pillars: ', React.createElement('strong', null, 'AI Transcription'), ', ', React.createElement('strong', null, 'Smart Scheduling'), ', and ', React.createElement('strong', null, 'Document Intelligence'), '.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Strategic Roadmap'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Developed high-fidelity wireframes and a phased rollout plan, ensuring each feature solved a validated student pain point.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Market Validation'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Launched a high-conversion landing page that effectively communicated the "Friendly" value proposition, driving early adoption.'
        )
      )
    )
  );
}

// Helper function to build full-stack engineering content
function buildFullStackEngineeringContent(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-8' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      'I architected and implemented the entire technical stack, ensuring high performance and data reliability.'
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-bold text-foreground mb-4' }, 'A. Cross-Platform Frontend (React Native & Expo)'),
      React.createElement(
        'div',
        { className: 'space-y-4' },
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Unified Experience'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            'Engineered a single codebase using ', React.createElement('strong', null, 'Expo and React Native'), ' that delivers a native experience across iOS, Android, and Web.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'UI/UX Excellence'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            'Built a custom library of ', React.createElement('strong', null, '50+ reusable components'), ' using ', React.createElement('strong', null, 'NativeWind (Tailwind CSS)'), ', prioritizing accessibility and intuitive navigation.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Feature Highlights'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            'Developed a drag-and-drop calendar interface and a high-performance PDF viewer with real-time AI annotation.'
          )
        )
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-bold text-foreground mb-4' }, 'B. Scalable Backend Architecture (Node.js & Express)'),
      React.createElement(
        'div',
        { className: 'space-y-4' },
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'API Mastery'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            'Designed and implemented a robust RESTful API with ', React.createElement('strong', null, '124+ endpoints'), ', handling everything from user authentication to complex AI processing.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Real-Time Data'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            'Leveraged ', React.createElement('strong', null, 'Firebase/Firestore'), ' for instantaneous data synchronization across devices.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Infrastructure'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            'Managed production servers using ', React.createElement('strong', null, 'PM2'), ', implementing an automated ', React.createElement('strong', null, 'Google Drive backup system'), ' (running daily at 3 AM) to ensure 100% data durability.'
          )
        )
      )
    )
  );
}

// Helper function to build technical deep dive content
function buildTechnicalDeepDiveContent(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-8' },
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-bold text-foreground mb-4' }, 'A. Multimodal AI Pipeline (OpenAI GPT-4o & Whisper)'),
      React.createElement(
        'div',
        { className: 'space-y-3' },
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Challenge'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            'Providing accurate, real-time lecture transcription and schedule extraction.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Solution'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            'Integrated ', React.createElement('strong', null, 'Whisper API'), ' for low-latency audio processing and ', React.createElement('strong', null, 'GPT-4o Vision'), ' for extracting structured data from schedule images.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Result'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            'Reduced manual schedule entry time by ', React.createElement('strong', null, '70%'), ' and provided students with "Lecture-Aware" AI summaries.'
          )
        )
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-bold text-foreground mb-4' }, 'B. Document Intelligence (PDF-Parse & GPT-4o-mini)'),
      React.createElement(
        'div',
        { className: 'space-y-3' },
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Challenge'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            'Analyzing large academic PDFs without degrading mobile performance.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Solution'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            'Built a service-layer extraction pipeline that parses text and feeds it into a ', React.createElement('strong', null, 'fine-tuned AI model'), ' for page-level analysis and chatbot assistance.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Result'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            'Students can "chat" with their textbooks, extracting key concepts in seconds.'
          )
        )
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
      'Led the end-to-end product lifecycle, bridging the gap between raw user data and production-grade software. From rigorous research with 80+ student interviews to App Store deployment in a single, high-intensity development cycle.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'Discovery Phase'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Executed a rigorous research initiative involving ~80 in-depth student interviews. The data revealed a staggering 98% friction rate in credit planning and time management, validating the market need.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'Predictive Product Strategy'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Leveraged SWOT analysis and competitive benchmarking to define a high-impact MVP. Prioritized features that solved the "Administrative Tax" of double majors and international requirements.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'Rapid Prototyping to Production'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Translated complex user requirements into high-fidelity wireframes and a scalable UX architecture, ensuring a seamless transition from design to full-stack deployment.'
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
      { className: 'grid grid-cols-1 md:grid-cols-2 gap-6' },
      React.createElement(
        'div',
        { className: 'p-6 rounded-xl bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-sm opacity-70 mb-2 uppercase tracking-wider' }, 'API Complexity'),
        React.createElement('p', { className: 'text-2xl font-black mb-2' }, '124+ RESTful endpoints'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'With consistent contracts and error handling')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-xl bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-sm opacity-70 mb-2 uppercase tracking-wider' }, 'AI Integration'),
        React.createElement('p', { className: 'text-2xl font-black mb-2' }, '4 distinct OpenAI models'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'Orchestrated Whisper, Vision, GPT-4o, GPT-3.5')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-xl bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-sm opacity-70 mb-2 uppercase tracking-wider' }, 'Performance'),
        React.createElement('p', { className: 'text-2xl font-black mb-2' }, 'Sub-200ms API response'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'For core academic workflows')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-xl bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-sm opacity-70 mb-2 uppercase tracking-wider' }, 'Reliability'),
        React.createElement('p', { className: 'text-2xl font-black mb-2' }, '100% data recovery'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'Via automated daily cloud backups')
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
      'This project showcases my ability to operate as a Full-Cycle Product Engineer—identifying a market need, architecting the solution, and delivering a production-ready product.'
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
          'By combining ', React.createElement('strong', null, 'Deep User Research'), ' with ', React.createElement('strong', null, 'Sophisticated Full-Stack Engineering'), ', I built a platform that doesn\'t just manage tasks—it empowers students to focus on what matters: ', React.createElement('em', null, 'Learning.'), ''
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/60 dark:bg-card/70 border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'The Result'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'A successful App Store launch and a growing community of early adopters.'
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
        '행정적 복잡성을 자동화하는 AI-네이티브 \'학생을 위한 운영체제(Operating System for Students)\'를 구축했습니다. 120명 이상의 사용자 대기자를 확보하고 App Store 정식 배포를 통해 고신뢰 학사 환경 내 Product-Market Fit을 검증했습니다.'
      ),
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-3 gap-4 mt-6' },
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, '역할'),
          React.createElement('p', { className: 'text-base font-semibold' }, 'Lead Product Architect & Full-Stack Engineer')
        ),
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, '전문 영역'),
          React.createElement('p', { className: 'text-base font-semibold' }, 'AI 오케스트레이션, 분산 시스템, 크로스플랫폼 엔지니어링')
        ),
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, '성과'),
          React.createElement('p', { className: 'text-base font-semibold' }, '124+ API 엔드포인트, 98% 시장 검증, App Store 배포')
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
      '대학생들, 특히 복수전공이나 국제 요건이 복잡한 학생들은 학점 설계와 시간 관리를 위한 단편적인 도구들로 어려움을 겪고 있습니다.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/60 dark:bg-card/70 border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2 text-lg' }, 'The Discovery'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          React.createElement('strong', null, '~80명의 학생'), '을 대상으로 심층 인터뷰와 설문을 실시하여 ', React.createElement('strong', null, '~98%'), '가 학점 설계와 학업 조직화에 어려움을 겪고 있음을 확인했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/60 dark:bg-card/70 border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2 text-lg' }, 'The Mission'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '학생의 "행정 세금"을 자동화하는 통합 AI 기반 에코시스템을 구축합니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/60 dark:bg-card/70 border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2 text-lg' }, 'The Result'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'iOS, Android, Web을 지원하는 크로스플랫폼 솔루션을 성공적으로 배포하여 출시 전 ', React.createElement('strong', null, '120명의 사용자 대기자'), '를 확보했습니다.'
        )
      )
    )
  );
}

// Korean helper functions for separate sections
function buildProductStrategyContentKO(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      '초기 SWOT 분석부터 최종 App Store 제출까지 제품 생명주기를 주도했습니다.'
    ),
    React.createElement(
      'div',
      { className: 'space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '사용자 중심 범위'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '연구 결과를 활용하여 ', React.createElement('strong', null, 'AI 전사'), ', ', React.createElement('strong', null, '스마트 스케줄링'), ', ', React.createElement('strong', null, '문서 인텔리전스'), ' 세 가지 기둥에 초점을 맞춘 핵심 MVP를 정의했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '전략적 로드맵'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '고정밀 와이어프레임과 단계별 출시 계획을 개발하여 각 기능이 검증된 학생 고통 포인트를 해결하도록 했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '시장 검증'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '"Friendly" 가치 제안을 효과적으로 전달하는 고전환 랜딩 페이지를 출시하여 초기 채택을 유도했습니다.'
        )
      )
    )
  );
}

function buildFullStackEngineeringContentKO(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-8' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      '전체 기술 스택을 설계하고 구현하여 고성능과 데이터 신뢰성을 보장했습니다.'
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-bold text-foreground mb-4' }, 'A. 크로스플랫폼 프론트엔드 (React Native & Expo)'),
      React.createElement(
        'div',
        { className: 'space-y-4' },
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '통합 경험'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            React.createElement('strong', null, 'Expo와 React Native'), '를 사용하여 iOS, Android, Web 전반에 네이티브 경험을 제공하는 단일 코드베이스를 설계했습니다.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'UI/UX 우수성'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            React.createElement('strong', null, 'NativeWind (Tailwind CSS)'), '를 사용하여 접근성과 직관적인 네비게이션을 우선시하는 ', React.createElement('strong', null, '50+ 재사용 가능한 컴포넌트'), '의 커스텀 라이브러리를 구축했습니다.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '기능 하이라이트'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            '드래그 앤 드롭 캘린더 인터페이스와 실시간 AI 주석이 있는 고성능 PDF 뷰어를 개발했습니다.'
          )
        )
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-bold text-foreground mb-4' }, 'B. 확장 가능한 백엔드 아키텍처 (Node.js & Express)'),
      React.createElement(
        'div',
        { className: 'space-y-4' },
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'API 숙련도'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            '사용자 인증부터 복잡한 AI 처리까지 모든 것을 처리하는 ', React.createElement('strong', null, '124+ 엔드포인트'), '를 가진 강력한 RESTful API를 설계하고 구현했습니다.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '실시간 데이터'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            '디바이스 전반에 즉각적인 데이터 동기화를 위해 ', React.createElement('strong', null, 'Firebase/Firestore'), '를 활용했습니다.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '인프라'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            React.createElement('strong', null, 'PM2'), '를 사용하여 프로덕션 서버를 관리하고, 100% 데이터 내구성을 보장하기 위해 자동화된 ', React.createElement('strong', null, 'Google Drive 백업 시스템'), ' (매일 오전 3시 실행)을 구현했습니다.'
          )
        )
      )
    )
  );
}

function buildTechnicalDeepDiveContentKO(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-8' },
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-bold text-foreground mb-4' }, 'A. 멀티모달 AI 파이프라인 (OpenAI GPT-4o & Whisper)'),
      React.createElement(
        'div',
        { className: 'space-y-3' },
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '도전 과제'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            '정확하고 실시간인 강의 전사 및 스케줄 추출 제공.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '솔루션'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            '저지연 오디오 처리를 위해 ', React.createElement('strong', null, 'Whisper API'), '를 통합하고, 스케줄 이미지에서 구조화된 데이터를 추출하기 위해 ', React.createElement('strong', null, 'GPT-4o Vision'), '를 활용했습니다.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '결과'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            '수동 스케줄 입력 시간을 ', React.createElement('strong', null, '70%'), ' 줄이고 학생들에게 "강의 인식" AI 요약을 제공했습니다.'
          )
        )
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-bold text-foreground mb-4' }, 'B. 문서 인텔리전스 (PDF-Parse & GPT-4o-mini)'),
      React.createElement(
        'div',
        { className: 'space-y-3' },
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '도전 과제'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            '모바일 성능을 저하시키지 않고 대규모 학술 PDF 분석.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '솔루션'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            '텍스트를 파싱하고 페이지 수준 분석 및 챗봇 지원을 위해 ', React.createElement('strong', null, '파인튜닝된 AI 모델'), '에 공급하는 서비스 레이어 추출 파이프라인을 구축했습니다.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '결과'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            '학생들이 교과서와 "채팅"하여 몇 초 만에 핵심 개념을 추출할 수 있습니다.'
          )
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
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, '인텔리전스 레이어: AI 오케스트레이션'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Whisper, GPT-4o, GPT-4o-mini, Vision 총 4개 OpenAI 모델을 통합하는 정교한 오케스트레이션 레이어를 설계했습니다. 실시간 강의 오디오 스트리밍을 구조화된 지식 베이스로 변환하는 Whisper-to-Insight 엔진을 개발했습니다. GPT-4o Vision 기반 OCR-to-JSON 파이프라인을 설계하여 시간표·일정 이미지 입력 시 수동 입력 작업을 70% 감소시켰습니다.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, '백엔드 코어: 분산 API 설계'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Node.js와 Express를 사용하여 124개 이상의 고성능 REST API 엔드포인트를 설계·배포했습니다. Firebase/Firestore를 활용한 분산 상태 관리로 iOS, Android, Web 전반에서 100ms 미만의 데이터 동기화를 보장했습니다. PM2 기반 프로덕션 환경 관리와 Google Drive Cloud Backup 연동으로 수동 개입 없는 100% 데이터 보존 구조(Self-Healing)를 구축했습니다.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, 'Academic Graph 문제'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        '대학별로 상이한 복수전공·부전공 졸업 요건을 모델링하기 위해 다양한 학점 구조를 해석하도록 AI 모델을 튜닝하는 Academic Logic Engine을 설계했습니다. 실시간 졸업 가능성 및 경로 안내를 제공합니다.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, '고성능 문서 분석'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        '모바일 환경에서 대규모 학사 PDF 분석 및 질의 처리를 위해 서버 사이드 PDF-to-Context 파이프라인을 구축했습니다. 문서 추출·정제·인덱싱 후 문맥을 이해하는 PDF-Aware 챗봇을 구현했습니다.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, '프로덕트 전략 & 시장 검증'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'SWOT 분석 및 경쟁 제품 벤치마킹을 통해 고임팩트 MVP를 정의했습니다. 복잡한 요구사항을 고정밀 와이어프레임 및 확장 가능한 UX 아키텍처로 설계하여 디자인 단계에서 곧바로 풀스택 배포를 고려한 구조로 전환했습니다.'
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
      '아이디어 검증부터 배포까지, 사용자 데이터에서 프로덕션 소프트웨어로의 전 과정을 직접 리드했습니다. 약 80명의 학생 대상 심층 인터뷰를 기반으로 한 조사에서 App Store 배포까지 단일, 고강도 개발 사이클로 완성했습니다.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, '리서치 & 발견'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          '약 80명의 학생 대상 심층 인터뷰를 기반으로 한 정량·정성 조사를 수행했습니다. 학점 설계 및 시간 관리 과정에서 98%의 마찰(Friction) 발생을 확인하여 시장 필요성을 검증했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, '예측 기반 프로덕트 전략'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'SWOT 분석 및 경쟁 제품 벤치마킹을 통해 고임팩트 MVP를 정의했습니다. 복수전공, 다전공, 국제학생 요건에서 발생하는 \'행정 세금(Administrative Tax)\'을 핵심 문제로 설정했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, '프로토타입 → 실서비스 전환'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          '복잡한 요구사항을 고정밀 와이어프레임 및 확장 가능한 UX 아키텍처로 설계하여 디자인 단계에서 곧바로 풀스택 배포를 고려한 구조로 전환했습니다.'
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
      { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' },
      React.createElement(
        'div',
        { className: 'p-6 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-3xl font-black mb-2' }, '124+'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'API 엔드포인트'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, '100% 타입 안정성 및 에러 복원력')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-3xl font-black mb-2' }, '98%'),
        React.createElement('p', { className: 'text-sm opacity-90' }, '시장 검증'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, '80+ 학생 대상 문제 검증')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-3xl font-black mb-2' }, '120+'),
        React.createElement('p', { className: 'text-sm opacity-90' }, '사용자 대기자'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, '런치 전 확보')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-3xl font-black mb-2' }, '100%'),
        React.createElement('p', { className: 'text-sm opacity-90' }, '데이터 무결성'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, '무손실 아키텍처')
      )
    ),
    React.createElement(
      'div',
      { className: 'mt-8 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, '시스템 복잡도'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          '124+ 프로덕션 API 엔드포인트로 100% 타입 안정성 및 에러 복원력을 보장합니다. 고가용성과 실시간 동기화를 고려한 분산 시스템을 설계했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, '배포 속도'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          '리서치에서 App Store까지 단일, 고강도 개발 사이클로 완성했습니다. 120명 이상의 사용자 대기자를 확보하고 App Store 정식 배포를 통해 고신뢰 학사 환경 내 Product-Market Fit을 검증했습니다.'
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
      '이 프로젝트는 시장 필요를 식별하고, 솔루션을 설계하며, 프로덕션 준비 제품을 제공하는 풀 사이클 제품 엔지니어로서의 능력을 보여줍니다.'
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
          React.createElement('strong', null, '심층 사용자 연구'), '와 ', React.createElement('strong', null, '정교한 풀스택 엔지니어링'), '을 결합하여 작업만 관리하는 것이 아니라 학생들이 중요한 것에 집중할 수 있도록 하는 플랫폼을 구축했습니다: ', React.createElement('em', null, '학습.'), ''
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/60 dark:bg-card/70 border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '결과'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '성공적인 App Store 출시와 성장하는 초기 채택자 커뮤니티.'
        )
      )
    )
  );
}

export function getFriendlyCaseStudy(language: Language = 'en'): CaseStudyContent | null {
  if (language === 'ko') {
    return {
      slug: 'friendly',
      title: 'Friendly — 고지능 학사 에코시스템을 설계하다',
      description: 'Lead Product Architect & Full-Stack Engineer로서 AI-네이티브 \'학생을 위한 운영체제\'를 구축하고, 124+ API 엔드포인트, 98% 시장 검증, App Store 배포를 달성했습니다.',
      sections: [
        {
          id: 'overview',
          type: 'overview',
          title: '개요',
          content: buildOverviewContentKO()
        },
        {
          id: 'academic-friction-challenge',
          type: 'problem',
          title: 'The "Academic Friction" Challenge: Identifying the Gap',
          titleKo: '"학업 마찰" 도전: 격차 식별',
          content: buildProblemContentKO()
        },
        {
          id: 'product-strategy',
          type: 'solution',
          title: 'Product Strategy: From Data to Deployment',
          titleKo: '제품 전략: 데이터에서 배포까지',
          content: buildProductStrategyContentKO()
        },
        {
          id: 'full-stack-engineering',
          type: 'solution',
          title: 'Full-Stack Engineering: Building the Academic Engine',
          titleKo: '풀스택 엔지니어링: 학업 엔진 구축',
          content: buildFullStackEngineeringContentKO()
        },
        {
          id: 'technical-deep-dive',
          type: 'solution',
          title: 'Technical Deep Dive: AI & System Integration',
          titleKo: '기술 심화: AI 및 시스템 통합',
          content: buildTechnicalDeepDiveContentKO()
        },
        {
          id: 'key-metrics',
          type: 'results',
          title: 'Key Metrics & Engineering Wins',
          titleKo: '주요 지표 및 엔지니어링 성과',
          content: buildResultsContentKO()
        },
        {
          id: 'executive-reflection',
          type: 'learnings',
          title: 'Executive Reflection: The Full-Cycle Engineer',
          titleKo: '경영진 성찰: 풀 사이클 엔지니어',
          content: buildLearningsContentKO()
        }
      ]
    };
  }

  return {
    slug: 'friendly',
    title: 'Friendly — Architecting a High-Intelligence Academic Ecosystem',
    description: 'Lead Product Architect & Full-Stack Engineer building an AI-native "Operating System for Students" with 124+ API endpoints, achieving 98% market validation and App Store deployment.',
      sections: [
        {
          id: 'overview',
          type: 'overview',
          title: 'Overview',
          titleKo: '개요',
          content: buildOverviewContent()
        },
        {
          id: 'academic-friction-challenge',
          type: 'problem',
          title: 'The "Academic Friction" Challenge: Identifying the Gap',
          titleKo: '"학업 마찰" 도전: 격차 식별',
          content: buildProblemContent()
        },
        {
          id: 'product-strategy',
          type: 'solution',
          title: 'Product Strategy: From Data to Deployment',
          titleKo: '제품 전략: 데이터에서 배포까지',
          content: buildProductStrategyContent()
        },
        {
          id: 'full-stack-engineering',
          type: 'solution',
          title: 'Full-Stack Engineering: Building the Academic Engine',
          titleKo: '풀스택 엔지니어링: 학업 엔진 구축',
          content: buildFullStackEngineeringContent()
        },
        {
          id: 'technical-deep-dive',
          type: 'solution',
          title: 'Technical Deep Dive: AI & System Integration',
          titleKo: '기술 심화: AI 및 시스템 통합',
          content: buildTechnicalDeepDiveContent()
        },
        {
          id: 'key-metrics',
          type: 'results',
          title: 'Key Metrics & Engineering Wins',
          titleKo: '주요 지표 및 엔지니어링 성과',
          content: buildResultsContent()
        },
        {
          id: 'executive-reflection',
          type: 'learnings',
          title: 'Executive Reflection: The Full-Cycle Engineer',
          titleKo: '경영진 성찰: 풀 사이클 엔지니어',
          content: buildLearningsContent()
        }
      ]
  };
}
