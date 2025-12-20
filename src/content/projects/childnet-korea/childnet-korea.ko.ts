// Korean content file: All user-facing text strings in Korean

export const childnetKO = {
  overview: {
    paragraphs: [
      {
        type: 'text',
        content: [
          { type: 'span', text: 'ChildNet Korea', className: 'font-semibold text-foreground' },
          '는 제로 트러스트 보안 아키텍처를 기반으로 구축된 고위험 아동 보호 플랫폼입니다. 아동, 교사, 상담사, 사례관리사, 경찰 등 다양한 이해관계자를 하나의 역할 기반 시스템으로 연결하여, 민감한 아동 복지 데이터를 안전하게 보호하면서도 협업이 가능하도록 설계되었습니다.'
        ]
      },
      {
        type: 'text',
        content:
          'PostgreSQL Row-Level Security(RLS), 엄격한 역할 기반 접근 제어(RBAC), 필드 단위 데이터 마스킹, 이벤트 수준 가시성 규칙을 적용하여, 어떤 사용자도 자신의 권한 범위를 넘어 데이터에 접근할 수 없도록 보안 체계를 구성했습니다.'
      },
      {
        type: 'text',
        content:
          'Next.js 15 프론트엔드, NestJS 백엔드 API, 그리고 AI 처리를 위한 별도의 FastAPI 마이크로서비스로 구성된 현대적인 풀스택 구조를 통해, 보안 중심 애플리케이션 설계와 데이터베이스 수준 접근 제어의 모범 사례를 구현했습니다.'
      }
    ]
  },

  role: {
    roles: [
      {
        title: '풀스택 아키텍처 및 보안 설계',
        iconKey: 'Full-Stack Architecture & Security',
        responsibilities: [
          'PostgreSQL RLS 기반 제로 트러스트 보안 아키텍처 설계 및 구현',
          '6개 역할(아동, 교사, 상담사, 사례관리사, 경찰, 관리자)을 위한 RBAC 시스템 구축',
          '역할별 데이터 가시성을 제어하는 필드 단위 마스킹 인터셉터 개발',
          '12개 테이블에 대해 46개의 RLS 정책 설계 및 FORCE RLS 적용',
          'AsyncLocalStorage 기반 요청 단위 보안 컨텍스트 관리',
          '보안 격리를 위한 백엔드–AI 서비스 마이크로서비스 분리'
        ],
        impacts: [
          '관리자 역할의 케이스 접근을 데이터베이스 수준에서 완전 차단',
          '애플리케이션 로직 오류 시에도 보호되는 방어적 보안 구조',
          '아동 복지 데이터를 보호하는 46개의 데이터베이스 보안 정책',
          '모든 API 요청에 사용자 컨텍스트가 포함된 감사 로그 구축'
        ]
      },
      {
        title: '프론트엔드 개발 및 역할 기반 UX',
        iconKey: 'Frontend Development & UX',
        responsibilities: [
          'CSS 변수와 Tailwind를 활용한 역할 기반 테마 시스템 구축',
          '6개 역할별 레이아웃과 커스텀 사이드바 설계',
          '접근성을 고려한 11개의 재사용 UI 컴포넌트 개발',
          '역할별 톤과 언어를 반영한 마이크로카피 시스템 적용',
          '각 역할의 업무 흐름에 맞춘 대시보드 설계',
          'JWT 기반 인증 및 역할별 리디렉션·미들웨어 보호 구현'
        ],
        impacts: [
          '45개 이상의 프론트엔드 파일로 구성된 역할 기반 UI 시스템',
          '로그인 즉시 역할에 따라 전환되는 테마 경험',
          'ARIA 라벨, 키보드 내비게이션 등 접근성 우선 구현',
          '각 역할이 필요한 정보만 노출되는 인터페이스 제공'
        ]
      }
    ]
  },

  problem: {
    summary:
      '아동 복지 시스템은 최고 수준의 보안을 요구하면서도, 서로 다른 권한을 가진 여러 기관 간의 협업을 동시에 지원해야 합니다.',
    content:
      '기존 아동 보호 시스템은 과도한 데이터 노출로 보안 위험을 초래하거나, 지나치게 제한적인 구조로 인해 협업이 어려운 문제가 있었습니다. 6개의 역할이 서로 다른 접근 권한을 가지면서도, 단 하나의 데이터 유출도 발생하지 않도록 설계되어야 했습니다.',
    painPoints: [
      { description: '애플리케이션 레벨 보안만으로는 민감 데이터 보호에 한계가 있음' },
      { description: '다중 역할과 데이터 유형에 대한 복잡한 접근 권한 관리' },
      { description: '역할마다 동일 데이터에 대해 다른 가시성이 필요한 문제' },
      { description: '법적·행정 요구사항을 충족하는 감사 로그 필요성' },
      { description: 'AI 처리 과정에서 민감 데이터가 노출될 위험' }
    ],
    whyItMatters:
      '아동 복지 데이터는 사회에서 가장 민감한 정보 중 하나입니다. 단 한 번의 보안 사고도 아동에게 직접적인 피해를 줄 수 있으며, 시스템 전체에 대한 신뢰를 무너뜨릴 수 있습니다.'
  },

  goals: {
    goals: [
      { title: '제로 트러스트 보안', iconKey: 'Zero-Trust Security', metric: '46개 RLS 정책 + RBAC + 필드 마스킹' },
      { title: '성능', iconKey: 'Performance', metric: '40개 이상 API, 평균 응답 < 200ms' },
      { title: 'AI 안전성', iconKey: 'AI Safety', metric: '비식별화 데이터만 AI 처리' },
      { title: '다중 역할 지원', iconKey: 'Multi-Role Support', metric: '6개 역할별 UI 및 권한 체계' },
      { title: '감사 추적', iconKey: 'Audit Trail', metric: '모든 API 요청 100% 기록' },
      { title: '프로덕션 준비', iconKey: 'Production Ready', metric: '12개 테이블, 80+ TS 파일' }
    ]
  },

  research: {
    insights: [
      {
        title: '보안 아키텍처 인사이트',
        items: [
          'RLS는 애플리케이션 오류 시에도 접근 제어를 강제하는 최후의 방어선',
          '필드 단위 마스킹은 응답 레벨에서 일관되게 적용되어야 함',
          'SECURITY DEFINER 함수는 제한적으로 사용해야 함',
          'AI 서비스는 반드시 별도 마이크로서비스로 분리 필요'
        ]
      },
      {
        title: '역할 기반 UX 인사이트',
        items: [
          '아동은 감정 중심의 부드러운 인터페이스 필요',
          '교사는 가이드와 명확한 심각도 표시 필요',
          '사례관리사는 밀도 높은 정보와 타임라인 필요',
          '경찰은 안전 중심 정보만 접근해야 함',
          '관리자는 시스템 관리만 가능해야 함'
        ]
      }
    ]
  },

  architecture: {
    items: [
      {
        title: '제로 트러스트 보안 아키텍처',
        description:
          '보안을 단일 계층이 아닌 데이터베이스, 애플리케이션, 응답 레벨 전반에 걸쳐 분산 적용했습니다.',
        features: [
          'PostgreSQL RLS 기반 접근 제어',
          'RBAC 가드 및 미들웨어 보호',
          '필드 단위 마스킹 인터셉터',
          'JWT 기반 세션 컨텍스트 전달',
          'AI 서비스 완전 분리'
        ]
      },
      {
        title: '주요 사용자 플로우',
        userFlows: [
          {
            name: '아동 체크인 플로우',
            iconKey: 'Child Check-in Flow',
            description: '아동이 감정 상태를 안전하게 기록하는 핵심 플로우',
            steps: ['로그인', '감정 선택', '체크인 제출', '권한별 데이터 가시성 적용']
          },
          {
            name: '교사 신고 플로우',
            iconKey: 'Teacher Report Flow',
            description: '교사가 위험 징후를 신고하는 프로세스',
            steps: ['신고 작성', '심각도 선택', '사례관리사 알림', '경찰 접근 제한']
          }
        ]
      }
    ]
  },

  results: {
    metrics: [
      '46개 RLS 정책으로 데이터베이스 수준 보안 구현',
      '12개 핵심 테이블과 엄격한 관계 제약',
      '40개 이상의 API 엔드포인트',
      '6개 역할별 대시보드',
      '모든 요청에 대한 감사 로그 기록',
      '관리자 케이스 접근 완전 차단'
    ],
    description:
      'ChildNet Korea는 제로 트러스트 원칙을 기반으로 한 보안 중심 시스템으로, 민감한 아동 복지 데이터를 보호하면서도 기관 간 협업이 가능한 구조를 성공적으로 구현했습니다.'
  },

  learnings: {
    cards: [
      {
        title: '데이터베이스 수준 보안의 중요성',
        iconKey: 'Database-Level Security',
        description:
          '애플리케이션 레벨 보안만으로는 충분하지 않으며, 데이터베이스 자체에서 접근을 통제해야 함을 경험했습니다.'
      },
      {
        title: '제로 트러스트의 다층 구조',
        iconKey: 'Zero-Trust Layers',
        description:
          'RLS, RBAC, 필드 마스킹이 결합될 때 실질적인 보안이 완성됩니다.'
      },
      {
        title: '역할 기반 UX 설계',
        iconKey: 'Role-Based UX',
        description:
          '각 역할의 맥락을 이해한 UI 설계가 보안과 사용성을 동시에 만족시킵니다.'
      }
    ]
  },

  techStack: {
    categories: [
      {
        category: '핵심 아키텍처',
        items: [
          'Next.js 15 App Router',
          'NestJS',
          'PostgreSQL + RLS',
          'TypeScript',
          'FastAPI (AI Service)'
        ]
      },
      {
        category: '보안',
        items: [
          'JWT 기반 인증',
          'RBAC',
          '필드 단위 데이터 마스킹',
          '감사 로그 시스템'
        ]
      }
    ]
  },

  links: {
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/nukktae/childnet' }
    ],
    figmaUrl: '',
    caseStudyUrl: ''
  }
};
