// Korean content file: All user-facing text strings in Korean

export const handiersKO = {
  overview: {
    paragraphs: [
      {
        type: 'text',
        content: [
          { type: 'span', text: 'Handiers', className: 'font-semibold text-foreground' },
          '는 소비자와 전문 서비스 제공자를 연결하는 대규모 스마트 서비스 플랫폼입니다. AI 기반 작업 분석, 실시간 위치 인텔리전스, 신뢰 기반 매칭 시스템을 통해 기존 생활 서비스 시장의 비효율을 해결합니다.'
        ]
      },
      {
        type: 'text',
        content:
          'Flutter 기반의 소비자 앱과 프로 앱, 그리고 Kotlin gRPC 마이크로서비스 백엔드로 구성된 플랫폼으로, 멀티모달 AI, 스마트 물류, 엔터프라이즈급 인프라를 결합해 서비스 요청부터 매칭, 결제까지의 전 과정을 효율화했습니다.'
      },
      {
        type: 'text',
        content:
          '저는 Flutter 엔지니어링, 시스템 및 AI 아키텍처 설계, UX 플로우 전반에 참여하며 확장성과 안정성, 실제 사용 환경에서의 완성도를 중심으로 기여했습니다.'
      }
    ]
  },

  role: {
    roles: [
      {
        title: 'Flutter 엔지니어링',
        iconKey: 'Flutter Engineering',
        responsibilities: [
          '클린 아키텍처 기반의 소비자 및 프로 앱 플로우 구현',
          'Protobuf 기반 gRPC 클라이언트 연동',
          '카메라, 영상, 이미지 선택 및 멀티모달 업로드 기능 구현',
          '실시간 위치 추적 및 지도 기능 개발',
          'Firebase Auth, Firestore, Cloud Messaging 연동',
          'Stripe 결제 및 온보딩 플로우 통합'
        ],
        impacts: [
          '실시간 위치 추적 안정성 향상',
          '구조화된 에러 처리로 앱 크래시 감소',
          'AI 작업 분석을 고려한 미디어 업로드 UX 최적화'
        ]
      },
      {
        title: '시스템 & AI 아키텍처',
        iconKey: 'System & AI Architecture',
        responsibilities: [
          'Vertex AI 기반 멀티모달 AI 분석 파이프라인 설계',
          '위치, 가용성, 그래프 데이터를 활용한 스마트 매칭 알고리즘 설계',
          '실시간 업데이트를 고려한 Firestore 데이터 모델 구조화',
          'Flutter–Kotlin 간 연동을 위한 API 계약 정의'
        ],
        impacts: [
          'AI 작업 분류 정확도 향상',
          '더 빠르고 정교한 매칭 결과 제공',
          '명확한 계약 정의로 통합 오류 감소'
        ]
      }
    ]
  },

  problem: {
    summary:
      '소비자는 신뢰할 수 있는 전문가를 빠르게 찾기 어렵고, 전문가는 자신의 기술과 위치에 맞는 작업을 안정적으로 받기 어렵습니다.',
    content:
      '기존 생활 서비스 플랫폼은 수동 설명에 의존하고 실시간 물류나 신뢰 지표가 부족해, 매칭 속도와 정확도 모두에서 한계를 드러냅니다.',
    painPoints: [
      { description: '소비자가 문제를 반복적으로 직접 설명해야 함' },
      { description: '주변에 신뢰할 수 있는 전문가를 판단하기 어려움' },
      { description: '전문가의 가용성 및 위치 정보 부족으로 작업 손실 발생' },
      { description: 'AI 기반 분석 및 스마트 매칭의 부재' }
    ],
    whyItMatters:
      'AI, 실시간 위치, 신뢰 기반 추천을 결합하면 생활 서비스 매칭은 더 빠르고 안전하며 지능적으로 진화할 수 있습니다.'
  },

  goals: {
    goals: [
      { title: '마찰 최소화', iconKey: 'Reduce Friction', metric: '이미지·영상 기반 자동 작업 생성' },
      { title: 'AI 기반 인사이트', iconKey: 'AI-Powered Insights', metric: '비용 예측 및 카테고리 분류' },
      { title: '스마트 물류', iconKey: 'Smart Logistics', metric: '실시간 가용성 및 거리 기반 필터링' },
      { title: '신뢰 기반 매칭', iconKey: 'Trusted Matching', metric: '그래프 기반 추천 시스템' },
      { title: '성능', iconKey: 'Performance', metric: '저지연 gRPC 마이크로서비스' },
      { title: '엔터프라이즈 안정성', iconKey: 'Enterprise Reliability', metric: 'Stripe 및 클라우드급 인프라' }
    ]
  },

  research: {
    insights: [
      {
        title: '사용자 리서치',
        items: [
          '소비자는 설명 없이 즉시 견적을 받고 싶어함',
          '지인 추천이 신뢰 형성에 큰 영향을 미침',
          '전문가는 가까운 지역에서 꾸준한 작업을 원함',
          '양측 모두 실시간 상태 업데이트를 중요하게 인식'
        ]
      },
      {
        title: '핵심 인사이트',
        items: [
          '멀티모달 AI는 초기 진입 장벽을 크게 낮춤',
          '그래프 네트워크는 신뢰 기반 탐색을 강화함',
          '실시간 위치 정보는 전환율을 높임',
          'Stripe 인증은 전문가 신뢰도를 강화함'
        ]
      }
    ]
  },

  architecture: {
    items: [
      {
        title: '플랫폼 아키텍처',
        description:
          'Flutter 앱과 Kotlin 기반 gRPC 백엔드를 결합한 구조로, 각 핵심 기능을 독립적인 도메인 서비스로 분리하여 확장성을 확보했습니다.',
        features: [
          'AI 작업 분석',
          '스마트 매칭',
          '실시간 위치 추적',
          '결제 및 정산',
          '알림 시스템',
          '그래프 기반 추천'
        ]
      },
      {
        title: '주요 사용자 플로우',
        userFlows: [
          {
            name: '작업 생성 플로우',
            iconKey: 'Job Creation Flow',
            description: '소비자가 미디어를 업로드하면 AI가 작업을 분석합니다.',
            steps: ['미디어 촬영', '업로드', 'AI 분석', '작업 생성']
          },
          {
            name: '매칭 플로우',
            iconKey: 'Matching Flow',
            description: '다양한 신호를 기반으로 전문가를 랭킹합니다.',
            steps: ['거리 필터', '카테고리 필터', '그래프 랭킹', '가용성 확인']
          },
          {
            name: '결제 플로우',
            iconKey: 'Payment Flow',
            description: 'Stripe 기반의 안전한 결제 라이프사이클.',
            steps: ['카드 등록', '결제 생성', '작업 완료', '정산']
          }
        ]
      }
    ]
  },

  designSystem: {
    items: [
      {
        title: '디자인 시스템',
        type: 'design',
        colorUsages: [
          { usage: '브랜드 핵심 컬러' },
          { usage: '중립 UI 표면' },
          { usage: '카드 및 배경' },
          { usage: 'CTA 및 강조 요소' }
        ],
        components: [
          {
            title: '내비게이션 셸',
            iconKey: 'Navigation Shells',
            description: '소비자 및 전문가 앱 내비게이션 구조'
          },
          {
            title: '작업 카드',
            iconKey: 'Job Cards',
            description: '카테고리, 비용, 미디어, 상태 표현'
          },
          {
            title: 'AI 업로드 컴포넌트',
            iconKey: 'AI Upload Components',
            description: '카메라, 영상, 갤러리 플로우'
          },
          {
            title: '워크플로우 모달',
            iconKey: 'Workflow Modals',
            description: '결제, 견적, 매칭 단계 UX'
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
          '소비자·프로 앱을 포함한 Flutter 모노레포',
          '공유 Protobuf 계약',
          'Firestore 실시간 리스너',
          'Stripe 및 Firebase 연동'
        ]
      },
      {
        title: '백엔드 및 API',
        iconKey: 'Backend & API',
        items: [
          'Kotlin 기반 gRPC 마이크로서비스',
          'Ktor 관리자 및 웹훅 엔드포인트',
          'AI·결제·매칭 도메인 서비스 분리',
          '연결 풀링 및 서비스 격리'
        ]
      },
      {
        title: '외부 연동',
        iconKey: 'Integrations',
        items: [
          'Vertex AI 멀티모달 분석',
          'Stripe 결제 및 정산',
          'AWS SNS/SES 알림',
          '그래프 데이터 기반 신뢰 모델링'
        ]
      }
    ]
  },

  keyFeatures: {
    metrics: [
      { title: '멀티모달 AI', description: '이미지·영상 기반 작업 분석' },
      { title: '위치 인텔리전스', description: '실시간 반경 필터링' },
      { title: '그래프 랭킹', description: '신뢰 기반 추천' },
      { title: '엔터프라이즈 결제', description: '안전한 온보딩 및 정산' }
    ],
    userFeatures: [
      {
        title: '소비자 경험',
        iconKey: 'Consumer Experience',
        items: [
          'AI 기반 작업 생성',
          '견적 비교 및 전문가 고용',
          '실시간 도착 추적'
        ]
      },
      {
        title: '전문가 경험',
        iconKey: 'Pro Experience',
        items: [
          '즉시 작업 요청 수신',
          '가용성 및 위치 관리',
          '수익 및 정산 관리'
        ]
      }
    ],
    engineeringFeatures: [
      {
        title: 'AI & ML',
        iconKey: 'AI & ML',
        items: ['멀티모달 추론', '비용 예측 파이프라인']
      },
      {
        title: '스마트 물류',
        iconKey: 'Smart Logistics',
        items: ['이중 위치 추적', '온라인 상태 감지']
      },
      {
        title: '엔터프라이즈 아키텍처',
        iconKey: 'Enterprise Architecture',
        items: [
          '역할 기반 서비스 활성화',
          '인증 및 서비스 분리',
          'Docker 기반 마이크로서비스'
        ]
      }
    ]
  },

  challenges: {
    challenges: [
      {
        challenge: '대용량 멀티모달 미디어 업로드',
        solution: '청크 업로드, 압축, 비동기 스트리밍 방식으로 해결'
      },
      {
        challenge: '그래프 기반 추천 성능',
        solution: '캐싱 및 가중치 기반 점수 계산으로 최적화'
      },
      {
        challenge: '실시간 전문가 가용성 판단',
        solution: '하트비트 위치 업데이트 및 Firestore 리스너 활용'
      },
      {
        challenge: '엔터프라이즈 결제 컴플라이언스',
        solution: 'Stripe 온보딩 및 웹훅 검증 플로우 구축'
      }
    ]
  },

  results: {
    metrics: [
      '작업 생성 마찰 60% 감소',
      '200ms 이내 매칭 응답',
      '신뢰 점수 기반 전문가 수락률 향상',
      '플랫폼 전반 Stripe 정산 안정화'
    ],
    description:
      'Handiers는 AI, 물류, 엔터프라이즈 인프라를 결합한 차세대 생활 서비스 플랫폼으로, 소비자와 전문가 모두에게 실질적인 가치를 제공합니다.'
  },

  learnings: {
    cards: [
      {
        title: '멀티모달 AI 확장',
        iconKey: 'Multimodal AI at Scale',
        description: '실사용 환경을 고려한 AI 파이프라인 설계'
      },
      {
        title: '그래프 기반 신뢰 시스템',
        iconKey: 'Graph-Based Trust Systems',
        description: '관계와 이력을 신뢰 신호로 모델링'
      },
      {
        title: '물류 엔지니어링',
        iconKey: 'Logistics Engineering',
        description: '실시간 위치를 핵심 기능으로 설계'
      },
      {
        title: '엔터프라이즈 결제 설계',
        iconKey: 'Enterprise Payment Design',
        description: '정산·검증·컴플라이언스를 포함한 구조'
      }
    ]
  },

  techStack: {
    categories: [
      {
        category: '프론트엔드',
        items: ['Flutter', 'Dart', 'gRPC Client', 'Stripe SDK']
      },
      {
        category: '백엔드',
        items: ['Kotlin', 'Java 17', 'gRPC Microservices', 'Ktor']
      },
      {
        category: '데이터베이스 및 클라우드',
        items: ['Firestore', 'MySQL', 'Neo4j', 'Vertex AI', 'AWS SNS/SES']
      }
    ]
  },

  links: {
    links: [],
    figmaUrl: '#',
    caseStudyUrl: '#'
  }
};
