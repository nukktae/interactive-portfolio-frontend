// Korean content file: All user-facing text strings in Korean

export const bestiaKO = {
  overview: {
    paragraphs: [
      {
        type: 'text',
        content: [
          { type: 'span', text: 'Bestia', className: 'font-semibold text-foreground' },
          '는 리드 캡처부터 거래 마감까지 전체 영업 파이프라인을 간소화하는 종합 부동산 리드 관리 CRM 플랫폼입니다. 부동산 투자자와 중개사를 위해 제작되었으며, 여러 채널에 걸친 분산된 커뮤니케이션과 데이터 관리의 핵심 문제를 해결합니다.'
        ]
      },
      {
        type: 'text',
        content: 'AI 기반 자동화, 멀티 채널 커뮤니케이션(이메일, SMS, 음성), 고급 분석을 통합하여 풀스택 애플리케이션을 설계하고 개발했습니다. 이를 통해 부동산 전문가들이 리드를 관리하고 거래를 마감하는 방식을 변화시켰습니다.'
      },
      {
        type: 'text',
        content: [
          '플랫폼은 ',
          { type: 'span', text: 'LA Tech Week', className: 'font-semibold text-foreground' },
          '에서 성공적으로 선보였으며, ',
          { type: 'span', text: '대기자 명단에 300명의 부동산 중개사', className: 'font-semibold text-foreground' },
          '를 확보했습니다. 설계자이자 프론트엔드 개발자로서 디자인 전략, 사용자 리서치, 프론트엔드 통합을 주도했으며, 디자인 피드백과 빠른 반복을 위해 부동산 중개사들과 주간으로 긴밀히 협업했습니다.'
        ]
      }
    ]
  },
  role: {
    roles: [
      {
        title: '프론트엔드 엔지니어링',
        iconKey: 'Frontend Engineering',
        responsibilities: [
          '애플리케이션 아키텍처 (Next.js 15 + 모듈형 기능 시스템)',
          'API 레이어 설계 (106개 API 라우트, 45개 이상의 커스텀 훅)',
          '데이터베이스 스키마 및 API 계약',
          '실시간 커뮤니케이션 기능',
          '통합: Gmail OAuth, Twilio, OpenAI, Google Places',
          '성능 최적화'
        ],
        impacts: [
          '500ms 미만 응답 시간의 이메일/SMS 동기화',
          '커스텀 이벤트 시스템을 통한 실시간 통화 상태',
          '10,000개 이상의 리드에서도 원활한 성능'
        ]
      },
      {
        title: 'UI/UX 디자인',
        iconKey: 'UI/UX Design',
        responsibilities: [
          '50개 이상의 재사용 가능한 컴포넌트 구축 (원자적 디자인)',
          '리드 관리 인터페이스 설계',
          '분석 시각화가 포함된 대시보드 생성',
          '멀티모달 커뮤니케이션 플로우 설계',
          '접근성 기반 구현'
        ],
        impacts: [
          '클릭 수를 7회 이상에서 3회로 감소',
          '명확한 상태 시스템으로 중개사 속도 향상',
          '강력한 UI/UX를 통해 300명의 중개사가 대기자 명단에 추가'
        ]
      }
    ]
  },
  problem: {
    summary: '부동산 팀은 거래를 추적하고 커뮤니케이션을 일관되게 유지하려고 노력하면서 이메일, 전화, SMS를 통해 리드를 관리합니다. 일반적인 CRM은 가격이 비싸거나 경직되어 있어 중개사들이 스프레드시트, 받은편지함, 전화 앱을 함께 사용해야 합니다.',
    content: '부동산 팀은 거래를 추적하고 커뮤니케이션을 일관되게 유지하려고 노력하면서 이메일, 전화, SMS를 통해 리드를 관리합니다. 일반적인 CRM은 가격이 비싸거나 경직되어 있어 중개사들이 스프레드시트, 받은편지함, 전화 앱을 함께 사용해야 합니다.',
    painPoints: [
      { description: '놓치거나 지연된 후속 조치로 인한 리드 손실' },
      { description: '채널 및 팀원 간 일관성 없는 커뮤니케이션' },
      { description: '팀 성과 및 거래 상태에 대한 가시성 부족' },
      { description: '수동 데이터 입력 및 반복적인 워크플로우로 인한 느린 응답' },
      { description: '한 곳에서 거래 진행 상황과 주요 지표를 추적하기 어려움' }
    ],
    whyItMatters: 'Bestia는 멀티 채널 커뮤니케이션을 통합하고, AI로 일상적인 단계를 자동화하며, 실행 가능한 인사이트를 제공하여 중개사들이 더 빠르게 움직이고 더 많은 거래를 마감할 수 있도록 합니다.'
  },
  goals: {
    goals: [
      { title: '커뮤니케이션 마찰 감소', iconKey: 'Reduce Communication Friction', metric: '이메일, SMS, 통화를 위한 단일 인터페이스' },
      { title: '일상 작업 자동화', iconKey: 'Automate Routine Tasks', metric: '수동 이메일/SMS 작성 시간 60% 감소' },
      { title: '거래 가시성 증가', iconKey: 'Increase Deal Visibility', metric: '실시간 상태 추적 및 분석 대시보드' },
      { title: '팀 협업 개선', iconKey: 'Improve Team Collaboration', metric: '공유 노트, 리드 할당, 역할 기반 권한' },
      { title: '성능', iconKey: 'Performance', metric: '페이지 로드 시간 < 2초, API 응답 시간 < 500ms' },
      { title: '사용자 채택', iconKey: 'User Adoption', metric: 'LA Tech Week에서 대기자 명단에 300명의 부동산 중개사' }
    ]
  },
  research: {
    insights: [
      {
        title: '사용자 리서치',
        items: [
          '주요 사용자: 부동산 투자자, 중개사, 팀 관리자',
          '식별된 문제점: 하루에 5개 이상의 도구를 전환하며, 플랫폼 간 정보 복사-붙여넣기',
          '알림 부족으로 인한 후속 조치 누락',
          '어떤 리드가 "핫"한지 추적하기 어려움',
          '부동산 중개사와의 주간 디자인 피드백 세션'
        ]
      },
      {
        title: '핵심 디자인 인사이트',
        items: [
          '색상 코딩된 상태 시스템이 사용자가 리드 우선순위를 빠르게 식별하는 데 도움',
          '컨텍스트 액션(통화, 이메일, SMS)은 한 번의 클릭으로 접근 가능해야 함',
          '진행 상황 시각화가 사용자에게 동기를 부여하고 파이프라인 상태를 보여줌',
          '현장 중개사를 위한 모바일 우선 디자인이 중요',
          'AI 제안은 방해가 되지 않으면서도 쉽게 접근 가능해야 함'
        ]
      }
    ]
  },
  architecture: {
    items: [
      {
        title: '기능 기반 아키텍처',
        description: '명확한 관심사 분리를 통해 애플리케이션을 기능 모듈로 구성했습니다. 각 기능은 자체 컴포넌트, 훅, API 로직을 포함하여 코드베이스를 확장 가능하고 유지보수 가능하게 만듭니다.',
        features: ['리드 관리', '이메일 통합', 'SMS 및 음성', 'AI 어시스턴트', '템플릿', '팀 관리', '분석 대시보드']
      },
      {
        title: '주요 사용자 플로우',
        userFlows: [
          {
            name: '리드 관리 플로우',
            iconKey: 'Lead Management Flow',
            description: '중개사가 하루에 20-30회 수행하는 핵심 워크플로우입니다.',
            steps: ['리드 보기', '필터 / 검색', '리드 선택', '상세 보기', '액션 수행 (이메일 / SMS / 통화)', '상태 업데이트', '멤버에게 할당']
          },
          {
            name: '커뮤니케이션 플로우',
            iconKey: 'Communication Flow',
            description: 'AI 지원으로 이메일, SMS, 통화 워크플로우를 통합합니다.',
            steps: ['리드 선택', '채널 선택', 'AI 콘텐츠 생성', '검토 / 편집', '전송 / 추적 / 기록']
          },
          {
            name: '거래 진행 플로우',
            iconKey: 'Deal Progression Flow',
            description: '표준화된 마감 파이프라인을 통해 중개사를 안내합니다.',
            steps: ['신규 리드', '데이터 보강', '초기 연락', '협상', 'DocuSign', '에스크로', '거래 완료']
          }
        ]
      }
    ]
  },
  designSystem: {
    items: [
      {
        title: '컬러 시스템',
        type: 'colors',
        colorUsages: [
          { usage: '브랜드 앵커' },
          { usage: 'CTA 및 링크' },
          { usage: '상태 및 글로우' },
          { usage: '캔버스 및 여백' }
        ],
        components: [
          {
            title: '원자적 디자인',
            iconKey: 'Atomic Design',
            description: '의도에 따라 시각적 요소를 확장하기 위한 Atoms → Molecules → Organisms'
          },
          {
            title: '50개 이상의 컴포넌트',
            iconKey: '50+ Components',
            description: '재사용 가능한 토큰으로 구축된 버튼, 입력, 테이블, 모달'
          },
          {
            title: '레이아웃 컴포넌트',
            iconKey: 'Layout Components',
            description: '그리드 프리미티브, 반응형 셸, 네비게이션 레일'
          },
          {
            title: '기능 컴포넌트',
            iconKey: 'Feature Components',
            description: 'LeadCard, StatusBadge, ActionMenu, 타임라인 블록'
          },
          {
            title: '20개 이상의 워크플로우 모달',
            iconKey: '20+ Workflow Modals',
            description: '일관된 UX를 가진 승인, 서명, 에스컬레이션'
          }
        ]
      }
    ]
  },
  systemArchitecture: {
    categories: [
      {
        title: '프론트엔드 아키텍처',
        iconKey: 'Frontend Architecture',
        items: [
          '서버 컴포넌트 및 클라이언트 컴포넌트를 포함한 Next.js 15 App Router',
          '자동 배칭 및 개선된 동시 렌더링을 포함한 React 19',
          '100% 타입 커버리지(331개 TypeScript 파일)를 포함한 TypeScript 5.9.3',
          '스타일링을 위한 Tailwind CSS 4.1.12',
          '전역 상태 관리를 위한 React Context',
          '데이터 페칭 및 비즈니스 로직을 위한 45개 이상의 커스텀 훅'
        ]
      },
      {
        title: '백엔드 및 API',
        iconKey: 'Backend & API',
        items: [
          '기능별로 구성된 106개 API 라우트 (Next.js API Routes)',
          '액세스 및 리프레시 토큰 패턴을 포함한 JWT 인증',
          '원활한 갱신을 통한 자동 토큰 리프레시',
          '팀 관리를 위한 역할 기반 액세스 제어 (RBAC)',
          '포괄적인 오류 처리를 포함한 API 게이트웨이 패턴',
          '대규모 데이터셋(10,000개 이상의 리드)을 위한 서버 측 페이지네이션'
        ]
      },
      {
        title: '통합',
        iconKey: 'Integrations',
        items: [
          'Gmail OAuth 2.0: 이메일 전송, 스레드 관리, 푸시 알림',
          'Twilio API: 음성 통화, SMS 메시징, 전화번호 관리, 통화 녹음',
          'OpenAI GPT-4: 이메일/SMS 생성, 리드 요약, 채팅 어시스턴트',
          'Google Places API: 주소 자동완성, 부동산 검색',
          'PDF.js 및 Mammoth: 문서 파싱 및 렌더링 (PDF, Word)'
        ]
      }
    ]
  },
  keyFeatures: {
    metrics: [
      { title: '15개 이상의 상태', description: '명확성을 위한 색상 코딩된 사용자 정의 상태' },
      { title: '50개 이상의 템플릿', description: '속도를 위한 재사용 가능한 SMS/이메일 플로우' },
      { title: 'AI 콘텐츠', description: '모든 채널에 대한 컨텍스트 인식 생성' },
      { title: '10,000개 이상의 리드', description: '대용량 성능을 위해 설계됨' }
    ],
    userFeatures: [
      {
        title: '리드 관리',
        iconKey: 'Lead Management',
        items: [
          '고급 필터링 (이름, 주소, 상태, 소스, 소유자)',
          '진행 상황 추적이 포함된 15개 이상의 사용자 정의 상태'
        ]
      },
      {
        title: '커뮤니케이션 허브',
        iconKey: 'Communication Hub',
        items: [
          '하나의 작업 공간에서 통합된 이메일, SMS 및 통화',
          '채널 전반에 걸친 AI 기반 콘텐츠 제안'
        ]
      },
      {
        title: '생산성 도구',
        iconKey: 'Productivity Tools',
        items: [
          '아웃리치 및 후속 조치를 위한 재사용 가능한 템플릿',
          '부동산 인텔리전스 및 금융 계산기'
        ]
      },
      {
        title: '협업 및 분석',
        iconKey: 'Collaboration & Analytics',
        items: [
          '할당 및 노트가 포함된 역할 기반 협업',
          '팀 성과 및 교육 영향에 대한 대시보드'
        ]
      }
    ],
    engineeringFeatures: [
      {
        title: '확장 가능한 아키텍처',
        iconKey: 'Scalable Architecture',
        items: [
          '공유 UI 프리미티브를 포함한 기능 기반 모듈',
          '일관된 계약을 가진 106개 API 라우트'
        ]
      },
      {
        title: '데이터 및 성능',
        iconKey: 'Data & Performance',
        items: [
          '10,000개 이상의 리드를 위해 구축된 서버 측 페이지네이션',
          '캐싱 및 디바운스된 쿼리가 포함된 45개 이상의 커스텀 훅'
        ]
      },
      {
        title: '실시간 및 안정성',
        iconKey: 'Real-time & Reliability',
        items: [
          '통화 상태 폴링, 이메일 스레드 동기화, SMS 추적',
          '즉각적인 UI 피드백을 위한 낙관적 업데이트'
        ]
      },
      {
        title: '보안 및 복원력',
        iconKey: 'Security & Resilience',
        items: [
          'RBAC, 토큰 리프레시 및 API 게이트웨이 패턴',
          '속도를 위한 지연 로딩 및 번들 최소화'
        ]
      }
    ]
  },
  challenges: {
    challenges: [
      {
        challenge: '컴포넌트 간 실시간 통화 상태 관리',
        solution: '컴포넌트 간 통신을 위해 CustomEvent API를 사용하는 커스텀 이벤트 시스템과 함께 localStorage 기반 상태 관리를 구현했습니다. getActiveCallState() 및 setActiveCallState() 유틸리티를 생성하고, 전역적으로 상태 변경을 수신하는 CallIndicator 컴포넌트를 추가했습니다. 결과: 복잡한 상태 관리 라이브러리 없이 전체 애플리케이션에서 원활한 통화 상태 동기화.'
      },
      {
        challenge: 'Gmail OAuth 토큰 리프레시 및 Watch 갱신',
        solution: '이메일 작업 전 자동 토큰 리프레시를 구현하고 Gmail 푸시 알림을 갱신하는 renewWatch() 함수를 생성했습니다. 중요한 작업 전에 토큰 유효성 검사 체크를 추가하고 일시적 실패에 대한 지수 백오프가 포함된 재시도 로직을 구축했습니다. 결과: 자동 토큰 관리로 99% 이상의 이메일 전송 성공률.'
      },
      {
        challenge: '동적 색상을 가진 복잡한 리드 상태 시스템',
        solution: 'API 데이터를 사용할 수 없을 때 기본 색상으로 폴백하는 회사별 상태 색상을 가져오는 useStatusConfig() 훅을 생성했습니다. 정적 및 동적 색상을 모두 처리하는 StatusBadge 컴포넌트를 구축하고, React Context를 사용하여 컴포넌트 간 상태 구성을 공유했습니다. 결과: 일관성을 유지하면서 사용자 정의를 지원하는 유연하고 유지보수 가능한 상태 시스템.'
      },
      {
        challenge: '대규모 데이터셋 성능 (10,000개 이상의 리드)',
        solution: '구성 가능한 페이지 크기를 가진 서버 측 페이지네이션, API 호출을 줄이기 위한 디바운스된 검색 쿼리, React.memo 및 useMemo로 최적화된 리렌더링, 무거운 컴포넌트(모달, 차트)의 지연 로딩을 구현했습니다. 결과: 10,000개 이상의 리드에서도 원활한 성능, 500ms 미만의 API 응답 시간.'
      }
    ]
  },
  results: {
    metrics: [
      '페이지 로드 시간 < 2초 (목표: < 3초)',
      'API 응답 시간 < 500ms 평균 (목표: < 1초)',
      '일반 작업에 대한 3클릭 워크플로우 (이전: 7회 이상 클릭)',
      'AI 생성 콘텐츠가 이메일/SMS당 2-3분 절약',
      '수동 이메일/SMS 작성 시간 60% 감소',
      'LA Tech Week에서 대기자 명단에 300명의 부동산 중개사'
    ],
    description: '플랫폼은 LA Tech Week에서 성공적으로 출시되어 대기자 명단에 300명의 부동산 중개사를 확보했습니다. 사용자 피드백은 직관적인 디자인과 상당한 시간 절약을 강조했습니다. 시스템은 기존 솔루션보다 더 안정적이고 빠르며 직관적인 것으로 입증되었으며, 초기 채택자들로부터 긍정적인 피드백을 받았습니다. 실시간 상태 업데이트는 페이지 새로고침의 필요성을 제거하고, 공유 노트 및 할당을 통한 개선된 협업은 커뮤니케이션 오버헤드를 줄입니다.'
  },
  learnings: {
    cards: [
      {
        title: '현대적인 프론트엔드 아키텍처',
        iconKey: 'Modern Frontend Architecture',
        description: '빠르고 확장 가능한 UI를 위해 RSC, 스트리밍, 배칭 및 동시 렌더링을 적용했습니다.'
      },
      {
        title: 'API 및 시스템 설계',
        iconKey: 'API & System Design',
        description: '강력한 오류 처리 및 안정적인 통합을 가진 일관된 계약을 설계했습니다.'
      },
      {
        title: '상태 및 성능 최적화',
        iconKey: 'State & Performance Optimization',
        description: 'Context와 로컬 상태의 균형을 맞추고, 캐싱, 지연 로딩, 디바운스된 쿼리를 추가했습니다.'
      },
      {
        title: '서드파티 통합',
        iconKey: 'Third-Party Integrations',
        description: '안정성을 위해 프로덕션 OAuth, 웹훅 및 속도 제한 API를 구축했습니다.'
      },
      {
        title: '사용자 중심 엔지니어링',
        iconKey: 'User-Centered Engineering',
        description: '주간 중개사 피드백이 실제 워크플로우를 채택을 이끈 UI로 변환했습니다.'
      },
      {
        title: '성능 전략',
        iconKey: 'Performance Strategy',
        description: '선택적 렌더링, 코드 분할 및 데이터 로딩 개선을 통해 지연 시간을 줄였습니다.'
      }
    ]
  },
  techStack: {
    categories: [
      {
        category: '핵심 아키텍처',
        items: [
          'Next.js 15 App Router (RSC + Client)',
          'React 19 (동시)',
          'TypeScript 5.9',
          'Node.js 런타임',
          'API Routes / Serverless'
        ]
      },
      {
        category: '커뮤니케이션 및 AI 통합',
        items: [
          'Gmail API (OAuth + Threads)',
          'Twilio Voice/SMS',
          'OpenAI GPT-4 (요약/템플릿)',
          'Google Places API'
        ]
      },
      {
        category: '인프라 및 개발자 경험',
        items: [
          'Vercel 배포',
          'CI/CD 자동화',
          '오류 모니터링',
          'Turbopack',
          'Git 및 GitHub',
          'Recharts',
          'PDF.js / Mammoth',
          '@dnd-kit/core'
        ]
      }
    ]
  },
  links: {
    links: [],
    figmaUrl: '#',
    caseStudyUrl: '#'
  }
};

