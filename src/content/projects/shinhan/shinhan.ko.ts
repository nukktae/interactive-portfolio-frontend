// Korean content file: All user-facing text strings in Korean

export const shinhanKO = {
  overview: {
    paragraphs: [
      {
        type: 'text',
        content: [
          { type: 'span', text: '신한장학재단', className: 'font-semibold text-foreground' },
          ' 지원 프로젝트는 재단의 수동 월간 학생 보고서 제출로 인한 운영 부담을 해결하고 플랫폼 참여도를 높이는 데 중점을 둔 프로젝트입니다.'
        ]
      },
      {
        type: 'text',
        content:
          '프로덕트 엔지니어로서 클라이언트 대면 제품 프로젝트를 주도하여 제약 조건을 고려한 사용자 연구, 데이터 기반 아이디어 도출, 학생용 기능 및 관리자 CRM 대시보드의 풀스택 개발을 통해 보고서 워크플로우를 혁신했습니다.'
      },
      {
        type: 'text',
        content:
          '프로그레시브 웹 앱(PWA)으로 배포된 솔루션은 학생을 위한 커뮤니티 기능, 네트워킹 기능, 반복 활동 보고서와 함께 학생 관리 및 감독을 간소화하는 경량 관리자 대시보드를 통합하여 약 3시간의 백엔드 처리 시간 절약을 달성했습니다.'
      }
    ]
  },

  role: {
    roles: [
      {
        title: '프로덕트 엔지니어',
        iconKey: 'Product Engineer',
        responsibilities: [
          '연구부터 배포까지 클라이언트 대면 제품 프로젝트 주도',
          '인터뷰 민감성으로 인해 웹 크롤링, 2차 데이터 분석 및 데이터 시각화를 사용한 제약 조건을 고려한 사용자 연구 수행',
          'SCAMPER 방법을 사용한 혁신적인 솔루션 생성 아이디어 도출',
          '커뮤니티, 네트워킹 및 반복 활동 보고서를 포함한 학생용 기능 설계',
          '더 빠른 학생 관리 및 감독을 위한 경량 관리자 CRM 대시보드 아키텍처 설계',
          '프론트엔드 및 백엔드 팀과 협력하여 PWA 배포 및 반복',
          '런칭 후 클라이언트 피드백 통합 및 백엔드 처리 워크플로우 최적화'
        ],
        impacts: [
          '수동 월간 보고서 제출을 제거하여 운영 부담 감소',
          '개선된 학생 경험을 통해 플랫폼 참여도 및 브랜드 사용량 증가',
          '자동화를 통해 약 3시간의 백엔드 처리 시간 절약 달성',
          '학생 및 관리자 인터페이스를 갖춘 프로덕션 준비 PWA 제공'
        ]
      }
    ]
  },

  problem: {
    summary:
      '재단은 수동 월간 학생 보고서 제출로 인한 상당한 운영 부담에 직면했으며, 학생들은 플랫폼 및 브랜드와의 참여가 제한적이었습니다.',
    content:
      '월간 학생 보고서 제출은 수동 처리가 필요하여 행정 오버헤드와 지연을 초래했습니다. 학생들은 보고 프로세스가 번거롭다고 느꼈으며 필수 제출 외에 플랫폼과 참여할 이유가 제한적이었습니다. 이는 운영 효율성과 재단의 브랜드 및 서비스에 대한 학생 참여를 모두 감소시켰습니다.',
    painPoints: [
      { description: '수동 월간 보고서 처리가 상당한 행정 부담을 초래함' },
      { description: '학생들은 필수 보고 외에 플랫폼과의 참여가 제한적이었음' },
      { description: '커뮤니티 및 네트워킹 기능 부족으로 학생을 위한 플랫폼 가치 감소' },
      { description: '관리자가 학생 활동을 관리하고 감독할 수 있는 간소화된 방법 부재' },
      { description: '수동 워크플로우로 인해 백엔드 처리 시간이 비효율적이었음' }
    ],
    whyItMatters:
      '보고 프로세스를 자동화하면서 가치 중심 기능을 추가하면 운영 효율성과 학생 참여를 모두 높여 재단과 장학생 간의 관계를 강화하고 행정 비용을 줄일 수 있습니다.'
  },

  goals: {
    goals: [
      { title: '보고 자동화', iconKey: 'Automate Reporting', metric: '수동 월간 보고서 제출 제거' },
      { title: '참여도 증가', iconKey: 'Increase Engagement', metric: '플랫폼 사용량 및 브랜드 상호작용 증가' },
      { title: '처리 시간 단축', iconKey: 'Reduce Processing Time', metric: '약 3시간의 백엔드 처리 시간 절약' },
      { title: '커뮤니티 구축', iconKey: 'Community Building', metric: '학생 네트워킹 및 커뮤니티 기능 활성화' },
      { title: '관리자 효율성', iconKey: 'Admin Efficiency', metric: '학생 관리 및 감독 간소화' },
      { title: 'PWA 배포', iconKey: 'PWA Deployment', metric: '크로스 플랫폼 프로그레시브 웹 앱 배포' }
    ]
  },

  research: {
    insights: [
      {
        title: '사용자 연구 제약 조건',
        items: [
          '인터뷰 민감성으로 인해 대체 연구 방법 필요',
          '웹 크롤링이 학생 행동 패턴에 대한 인사이트 제공',
          '2차 데이터 분석으로 보고 고통 지점 발견',
          '데이터 시각화가 워크플로우 비효율성 식별에 도움',
          '제약 조건을 고려한 접근 방식으로 윤리적이고 효과적인 연구 보장'
        ]
      },
      {
        title: '주요 발견 사항',
        items: [
          '학생들은 보고 외에 커뮤니티 및 네트워킹 기능을 원함',
          '반복 활동 보고는 자동화 및 간소화가 필요함',
          '관리자는 학생 감독 및 관리를 위한 더 나은 도구 필요',
          '플랫폼 참여는 기능 가치 및 사용 편의성과 상관관계',
          '백엔드 처리는 자동화를 통해 크게 최적화 가능'
        ]
      }
    ]
  },

  architecture: {
    items: [
      {
        title: '시스템 아키텍처',
        description:
          '학생용 기능과 관리자 대시보드를 모두 제공하는 이중 인터페이스 프로그레시브 웹 앱 아키텍처로, 자동화된 보고 워크플로우 및 커뮤니티 참여 기능을 포함합니다.',
        features: [
          '크로스 플랫폼 배포를 위한 프로그레시브 웹 앱(PWA)',
          '커뮤니티, 네트워킹 및 보고 기능을 갖춘 학생용 인터페이스',
          '학생 관리를 위한 경량 관리자 CRM 대시보드',
          '자동화된 반복 활동 보고 시스템',
          '시간 절약을 위한 백엔드 처리 최적화'
        ]
      },
      {
        title: '주요 사용자 플로우',
        userFlows: [
          {
            name: '학생 활동 보고',
            iconKey: 'Student Activity Reporting',
            description:
              '학생들은 자동화되고 간소화된 인터페이스를 통해 반복 활동 보고서를 제출할 수 있습니다.',
            steps: [
              '보고 인터페이스 접근',
              '활동 세부 정보 작성',
              '반복 보고서 제출',
              '제출 이력 추적',
              '커뮤니티 기능 참여'
            ]
          },
          {
            name: '커뮤니티 및 네트워킹',
            iconKey: 'Community & Networking',
            description:
              '학생들은 동료와 연결하고, 커뮤니티 토론에 참여하며, 네트워크를 구축할 수 있습니다.',
            steps: [
              '커뮤니티 플랫폼 가입',
              '다른 학생들과 연결',
              '토론 참여',
              '전문 네트워크 구축',
              '경험 및 리소스 공유'
            ]
          },
          {
            name: '관리자 대시보드',
            iconKey: 'Admin Dashboard',
            description:
              '관리자는 학생을 효율적으로 관리하고, 보고서를 검토하며, 플랫폼 참여를 모니터링할 수 있습니다.',
            steps: [
              '관리자 CRM 대시보드 접근',
              '학생 개요 및 활동 보기',
              '보고서 검토 및 처리',
              '참여 지표 모니터링',
              '학생 정보 관리'
            ]
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
          { usage: '주요 작업 및 브랜드 요소' },
          { usage: '지원 인터페이스 및 배경' },
          { usage: '상태 표시기 및 알림' },
          { usage: '깔끔하고 접근 가능한 학생 및 관리자 인터페이스' }
        ],
        components: [
          {
            title: '학생 인터페이스 컴포넌트',
            iconKey: 'Student Interface Components',
            description: '커뮤니티, 네트워킹 및 보고 인터페이스 요소'
          },
          {
            title: '관리자 대시보드 컴포넌트',
            iconKey: 'Admin Dashboard Components',
            description: '학생 관리를 위한 CRM 대시보드 요소'
          },
          {
            title: '보고 컴포넌트',
            iconKey: 'Reporting Components',
            description: '자동화된 보고 양식 및 워크플로우 컴포넌트'
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
          '프로그레시브 웹 앱(PWA)',
          '반응형 웹 디자인',
          '학생용 인터페이스',
          '관리자 CRM 대시보드',
          '커뮤니티 및 네트워킹 기능'
        ]
      },
      {
        title: '백엔드 및 처리',
        iconKey: 'Backend & Processing',
        items: [
          '자동화된 보고서 처리',
          '학생 데이터 관리',
          '관리자 대시보드 API',
          '커뮤니티 플랫폼 백엔드',
          '최적화된 처리 워크플로우'
        ]
      },
      {
        title: '연구 및 방법',
        iconKey: 'Research & Methods',
        items: [
          '사용자 인사이트를 위한 웹 크롤링',
          '2차 데이터 분석',
          '데이터 시각화',
          'SCAMPER 아이디어 도출 방법',
          '제약 조건을 고려한 연구 접근 방식'
        ]
      }
    ]
  },

  keyFeatures: {
    metrics: [
      { title: '처리 시간 절약', description: '약 3시간의 백엔드 처리 시간 절약' },
      { title: '이중 인터페이스', description: '단일 PWA 내 학생 및 관리자 인터페이스' },
      { title: '자동화된 보고', description: '수동 월간 보고서 제출 제거' },
      { title: '커뮤니티 기능', description: '네트워킹 및 커뮤니티 참여 기능' }
    ],
    userFeatures: [
      {
        title: '자동화된 보고',
        iconKey: 'Automated Reporting',
        items: [
          '간소화된 반복 활동 보고',
          '자동화된 제출 워크플로우',
          '보고서 이력 추적',
          '간소화된 보고 인터페이스'
        ]
      },
      {
        title: '커뮤니티 및 네트워킹',
        iconKey: 'Community & Networking',
        items: [
          '학생 커뮤니티 플랫폼',
          '동료 네트워킹 기능',
          '토론 및 참여 기능',
          '리소스 공유 및 협업'
        ]
      },
      {
        title: '학생 대시보드',
        iconKey: 'Student Dashboard',
        items: [
          '활동 추적 및 보고',
          '커뮤니티 참여',
          '네트워크 연결',
          '플랫폼 사용 분석'
        ]
      }
    ],
    engineeringFeatures: [
      {
        title: '관리자 CRM 대시보드',
        iconKey: 'Admin CRM Dashboard',
        items: [
          '학생 관리 인터페이스',
          '보고서 검토 및 처리',
          '참여 지표 모니터링',
          '간소화된 감독 도구'
        ]
      },
      {
        title: '백엔드 최적화',
        iconKey: 'Backend Optimization',
        items: [
          '자동화된 처리 워크플로우',
          '시간 절약 최적화',
          '효율적인 데이터 관리',
          '수동 개입 감소'
        ]
      },
      {
        title: 'PWA 아키텍처',
        iconKey: 'PWA Architecture',
        items: [
          '크로스 플랫폼 배포',
          '오프라인 기능',
          '반응형 디자인',
          '빠른 로딩 및 성능'
        ]
      }
    ]
  },

  challenges: {
    challenges: [
      {
        challenge: '인터뷰 민감성 제약 조건이 있는 사용자 연구 수행',
        solution:
          '직접 인터뷰 없이 인사이트를 수집하기 위해 웹 크롤링, 2차 데이터 분석 및 데이터 시각화를 사용하는 제약 조건을 고려한 연구 접근 방식을 개발했습니다.'
      },
      {
        challenge: '학생 참여 기능과 운영 효율성의 균형 유지',
        solution:
          '학생 가치를 높이고 행정 부담을 줄이는 솔루션을 생성하기 위해 SCAMPER 방법을 사용하여 아이디어를 도출했습니다.'
      },
      {
        challenge: '학생 및 관리자를 위한 이중 인터페이스 설계',
        solution:
          '단일 PWA 내에서 분리되었지만 통합된 인터페이스를 설계하여 두 사용자 유형 모두 최적화된 경험을 갖도록 했습니다.'
      },
      {
        challenge: '백엔드 처리 시간 최적화',
        solution:
          '수동 워크플로우를 자동화하고 데이터 처리를 간소화하여 처리 주기당 약 3시간의 시간 절약을 달성했습니다.'
      },
      {
        challenge: '런칭 후 클라이언트 피드백 통합',
        solution:
          '실제 사용을 기반으로 기능과 워크플로우를 개선하기 위해 클라이언트 협업과 함께 반복 개발 프로세스를 수립했습니다.'
      }
    ]
  },

  results: {
    metrics: [
      '수동 월간 보고서 제출 제거',
      '약 3시간의 백엔드 처리 시간 절약 달성',
      '플랫폼 참여도 및 브랜드 사용량 증가',
      '이중 인터페이스를 갖춘 프로덕션 준비 PWA 배포',
      '학생을 위한 커뮤니티 및 네트워킹 기능 활성화',
      '관리자 학생 관리 및 감독 간소화'
    ],
    description:
      '신한장학재단 프로젝트는 수동적이고 시간이 많이 걸리는 프로세스에서 자동화되고 매력적인 플랫폼 경험으로 보고 워크플로우를 성공적으로 전환했습니다. 제약 조건을 고려한 연구, 혁신적인 아이디어 도출 및 풀스택 개발을 결합하여 운영 부담을 줄이면서 학생 참여를 증가시켰습니다. 이중 인터페이스 PWA는 상당한 시간 절약과 개선된 플랫폼 가치로 학생과 관리자 모두에게 효과적으로 서비스를 제공합니다.'
  },

  learnings: {
    cards: [
      {
        title: '제약 조건을 고려한 연구',
        iconKey: 'Constraint-Aware Research',
        description: '직접 인터뷰가 불가능할 때 웹 크롤링, 데이터 분석 및 시각화를 사용하여 인사이트를 수집하는 효과적인 사용자 연구를 수행하는 방법을 배웠습니다.'
      },
      {
        title: 'SCAMPER 아이디어 도출 방법',
        iconKey: 'SCAMPER Ideation Method',
        description: '사용자 요구사항과 운영 요구사항을 모두 해결하는 혁신적인 솔루션을 체계적으로 생성하기 위해 SCAMPER 방법을 적용했습니다.'
      },
      {
        title: '이중 인터페이스 디자인',
        iconKey: 'Dual-Interface Design',
        description: '단일 애플리케이션 내에서 다른 사용자 유형을 위한 별도의 인터페이스를 설계하고 아키텍처하여 일관성을 유지하면서 고유한 요구사항의 균형을 맞췄습니다.'
      },
      {
        title: '클라이언트 대면 제품 리더십',
        iconKey: 'Client-Facing Product Leadership',
        description: '연구부터 배포까지 완전한 제품 프로젝트를 주도하여 클라이언트 및 크로스 기능 팀과 협력하여 측정 가능한 영향을 제공했습니다.'
      }
    ]
  },

  techStack: {
    categories: [
      {
        category: '프로덕트 매니지먼트',
        items: ['SCAMPER', '사용자 연구', '데이터 분석', '웹 크롤링', '데이터 시각화']
      },
      {
        category: 'UI',
        items: ['PWA', '웹 기술', '반응형 디자인', 'CRM 대시보드']
      },
      {
        category: 'UX',
        items: ['커뮤니티 기능', '네트워킹', '활동 보고', '사용자 참여']
      }
    ]
  },

  links: {
    links: [],
    figmaUrl: '',
    caseStudyUrl: ''
  }
};
