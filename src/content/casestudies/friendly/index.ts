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
        'Engineered a unified, AI-native "Operating System for Students" that automates administrative complexity. Successfully generated a 120-user waitlist and achieved App Store deployment, validating product-market fit within a high-stakes academic environment.'
      ),
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-3 gap-4 mt-6' },
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, 'Role'),
          React.createElement('p', { className: 'text-base font-semibold' }, 'Lead Product Architect & Full-Stack Engineer')
        ),
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, 'Specialty'),
          React.createElement('p', { className: 'text-base font-semibold' }, 'AI Orchestration, Distributed Systems, Cross-Platform Engineering')
        ),
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, 'Impact'),
          React.createElement('p', { className: 'text-base font-semibold' }, '124+ API Endpoints, 98% Market Validation, App Store Deployment')
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
      'In the modern university landscape, students suffer from "Platform Fatigue"—juggling disconnected tools for credits, lectures, and community. Executed a rigorous research initiative involving ~80 in-depth student interviews, revealing a staggering 98% friction rate in credit planning and time management.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-3' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'The Academic Fragmentation Crisis'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'The mission was to engineer a unified, AI-native "Operating System for Students" that automates administrative complexity, solving the "Administrative Tax" of double majors and international requirements.'
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
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, 'The Intelligence Layer: AI Orchestration'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Engineered a sophisticated orchestration layer integrating 4 OpenAI models (Whisper, GPT-4o, GPT-4o-mini, Vision). Developed a low-latency audio streaming pipeline that converts live lectures into structured, searchable knowledge bases. Architected a proprietary OCR-to-JSON pipeline using GPT-4o Vision to automate schedule extraction from images, reducing manual input by 70%.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, 'The Backend Core: Distributed API Design'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Designed and deployed a high-performance RESTful API with 124+ endpoints using Node.js and Express. Leveraged Firebase/Firestore for distributed state management, ensuring sub-100ms data synchronization across iOS, Android, and Web. Managed production environments using PM2, featuring a self-healing Google Drive Cloud Backup system that ensures 100% data durability with zero manual intervention.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, 'The Academic Graph Challenge'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Engineered a flexible Academic Logic Engine that fine-tunes AI models to interpret diverse credit structures and provide accurate, real-time graduation guidance for double majors and minors.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, 'High-Performance Document Analysis'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Built a server-side PDF-to-Context pipeline that extracts, cleans, and indexes document data, enabling a "PDF-Aware" chatbot with deep contextual memory for processing large-scale academic PDFs on resource-constrained mobile devices.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, 'Product Strategy & Market Validation'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Leveraged SWOT analysis and competitive benchmarking to define a high-impact MVP. Translated complex user requirements into high-fidelity wireframes and a scalable UX architecture, ensuring seamless transition from design to full-stack deployment.'
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
      { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' },
      React.createElement(
        'div',
        { className: 'p-6 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-3xl font-black mb-2' }, '124+'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'API Endpoints'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, '100% type safety and error resilience')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-3xl font-black mb-2' }, '98%'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'Market Validation'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, 'Problem confirmation from 80+ students')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-3xl font-black mb-2' }, '120+'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'User Waitlist'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, 'Generated before launch')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-3xl font-black mb-2' }, '100%'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'Data Integrity'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, 'Zero data loss architecture')
      )
    ),
    React.createElement(
      'div',
      { className: 'mt-8 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'System Complexity'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          '124+ Production API Endpoints with 100% type safety and error resilience. Architected a robust, distributed system designed for high availability and real-time synchronization.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'Deployment Velocity'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'From Research to App Store in a single, high-intensity development cycle. Successfully achieved App Store deployment, validating the product-market fit within a high-stakes academic environment.'
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
      'This project is a testament to the ability to operate as a Full-Cycle Architect—one who can identify a deep market pain point, design a sophisticated solution, and engineer the full-stack infrastructure to bring it to life.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'The Full-Cycle Architect'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'By combining Data-Driven Product Strategy with Cutting-Edge AI Engineering, I built a platform that transforms the student experience from "Surviving" to "Thriving." The takeaway: combining architectural framing with founder mindset creates solutions that solve deep market pain points.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'Architectural Framing'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Used terms like "Distributed State Management," "AI Orchestration," and "Self-Healing Infrastructure" to signal senior-level expertise. The 124+ API endpoints and 4-model AI pipeline provide concrete proof of ability to handle large-scale technical challenges.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'Founder Mindset'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Highlighted the ability to lead Product Strategy and Market Validation, from rigorous research with 80+ student interviews to App Store deployment. This makes the approach attractive for Lead or Founding Engineer roles.'
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
    { className: 'space-y-4' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      '현대 대학 환경에서 학생들은 학점, 강의, 일정, 커뮤니티를 위해 서로 단절된 수많은 플랫폼을 동시에 사용하며 극심한 Platform Fatigue를 겪고 있습니다. 약 80명의 학생 대상 심층 인터뷰를 기반으로 한 조사에서 학점 설계 및 시간 관리 과정에서 98%의 마찰(Friction) 발생을 확인했습니다.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-3' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, '학사 파편화(Academic Fragmentation) 위기'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          '행정적 복잡성을 자동화하는 AI-네이티브 \'학생을 위한 운영체제(Operating System for Students)\'를 구축하는 것이 미션이었습니다. 복수전공, 다전공, 국제학생 요건에서 발생하는 \'행정 세금(Administrative Tax)\'을 핵심 문제로 설정했습니다.'
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
      '이 프로젝트는 깊은 시장 문제를 발견하고, 고도화된 해법을 설계하며, 풀스택 인프라까지 완성할 수 있는 \'Full-Cycle Architect\' 역량을 증명합니다.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, '풀사이클 아키텍트'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          '데이터 기반 프로덕트 전략과 최첨단 AI 엔지니어링을 결합함으로써 학생 경험을 \'버티는 것\'에서 \'성장하는 것\'으로 전환하는 플랫폼을 구축했습니다. 핵심 인사이트: 아키텍처 프레이밍과 파운더 마인드셋을 결합하면 깊은 시장 문제를 해결하는 솔루션을 만들 수 있습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, '아키텍처 프레이밍'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          '\'분산 상태 관리\', \'AI 오케스트레이션\', \'Self-Healing 인프라\'와 같은 용어를 사용하여 시니어 레벨의 전문성을 보여줍니다. 124+ API 엔드포인트와 4모델 AI 파이프라인은 대규모 기술적 도전을 처리할 수 있는 구체적인 증거를 제공합니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, '파운더 마인드셋'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          '약 80명의 학생 대상 심층 인터뷰를 기반으로 한 정량·정성 조사에서 App Store 배포까지 프로덕트 전략과 시장 검증을 리드할 수 있는 역량을 강조했습니다. 이는 Lead 또는 Founding Engineer 역할에 매력적인 접근 방식입니다.'
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
    slug: 'friendly',
    title: 'Friendly — Architecting a High-Intelligence Academic Ecosystem',
    description: 'Lead Product Architect & Full-Stack Engineer building an AI-native "Operating System for Students" with 124+ API endpoints, achieving 98% market validation and App Store deployment.',
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
