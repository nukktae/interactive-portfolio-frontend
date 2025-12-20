// Korean content file: All user-facing text strings in Korean

export const kspoSportsPlatformKO = {
  overview: {
    paragraphs: [
      {
        type: 'text',
        content: [
          { type: 'span', text: 'KSPO Sports Platform', className: 'font-semibold text-foreground' },
          '은 국민체육진흥공단(KSPO)을 위해 설계된 AI 기반 스포츠 시설 탐색 및 추천 플랫폼입니다. 사용자는 위치, 선호 운동 목적, 날씨, 혼잡도 예측을 기반으로 주변 스포츠 시설을 쉽게 찾고, 개인 맞춤형 추천과 운동 프로그램을 탐색할 수 있습니다.'
        ]
      },
      {
        type: 'text',
        content:
          '서울시 공공 스포츠 시설 데이터를 기반으로 실시간 시설 정보, 날씨 인식 추천, 미세먼지(PM2.5) 고려, 시간대별 혼잡도 예측, 위치 기반 인터랙티브 지도를 결합하여 기존 시설 검색 서비스의 한계를 해결했습니다.'
      },
      {
        type: 'text',
        content:
          'Next.js 15 프론트엔드, NestJS 백엔드, FastAPI 기반 AI 서비스, Supabase PostgreSQL 데이터베이스로 구성된 풀스택 모노레포 구조를 통해, 서울 전역의 스포츠 시설을 하나의 통합 플랫폼에서 탐색하고 이용할 수 있는 경험을 제공합니다.'
      }
    ]
  },

  role: {
    roles: [
      {
        title: '풀스택 개발',
        iconKey: 'Full-Stack Development',
        responsibilities: [
          '프론트엔드, 백엔드, AI 서비스, 공용 패키지를 포함한 전체 모노레포 아키텍처 설계 및 구현',
          'NestJS 기반 RESTful API 개발 (시설, 프로그램, 추천, 날씨, 사용자 모듈)',
          'React 19, TypeScript, Tailwind CSS를 활용한 반응형 Next.js 15 프론트엔드 구축',
          'Supabase PostgreSQL과 Drizzle ORM을 활용한 데이터베이스 스키마 및 마이그레이션 설계',
          '서울시 공공 스포츠 시설 CSV 데이터를 위한 ETL 파이프라인 구축'
        ],
        impacts: [
          '관심사 분리가 명확한 프로덕션 수준의 플랫폼 구축',
          '다중 서비스 확장을 고려한 확장 가능한 아키텍처 제공',
          '공용 스키마 및 컴포넌트 재사용으로 개발 효율 향상'
        ]
      },
      {
        title: 'AI / ML 통합',
        iconKey: 'AI & ML Integration',
        responsibilities: [
          'GPT-4o API를 활용한 자연스러운 한국어 코칭 스타일 추천 시스템 구현',
          'FastAPI 기반 AI 서비스에서 시설 및 프로그램 추천용 ML 스코어링 로직 개발',
          '거리, 접근성, 종목 일치도, 날씨 적합도, 위험도 등을 고려한 가중치 기반 점수 시스템 설계',
          '시간대, 요일, 날씨 조건을 반영한 혼잡도 예측 로직 구현',
          'pandas 및 scikit-learn을 활용한 피처 추출 및 점수 정규화'
        ],
        impacts: [
          '사용자 목표와 환경을 반영한 고도화된 개인 맞춤 추천 제공',
          '설명 가능한 AI 추천으로 사용자 신뢰도 향상',
          '다중 요소 기반 시설 및 프로그램 매칭 구현'
        ]
      }
    ]
  },

  problem: {
    summary:
      '서울에서 적합한 스포츠 시설을 찾는 과정은 정보 분산, 개인화 부족, 날씨 및 혼잡도 미반영으로 인해 사용자 경험이 제한적입니다.',
    content:
      '기존 스포츠 시설 검색 서비스는 단순 위치 정보에 의존하거나 시설 목록 제공에 그치는 경우가 많습니다. 사용자의 운동 목적, 접근성, 날씨, 공기질, 혼잡도와 같은 실제 이용에 중요한 요소들이 고려되지 않아 이용률 저하로 이어집니다.',
    painPoints: [
      { description: '공공 스포츠 시설 정보가 여러 출처에 분산되어 있음' },
      { description: '사용자 목표(다이어트, 체력 증진 등)를 반영한 추천 부재' },
      { description: '날씨 및 미세먼지 상태를 고려하지 않는 야외 활동 추천' },
      { description: '혼잡 시간대 예측 부재로 인한 불편한 이용 경험' },
      { description: '운동 목적에 맞는 프로그램 탐색의 어려움' }
    ],
    whyItMatters:
      '국민체육진흥공단의 핵심 목표는 국민의 스포츠 참여 확대입니다. 접근성과 개인화를 개선하면 시민들의 시설 이용률을 높이고, 장기적으로 국민 건강 증진에 기여할 수 있습니다.'
  },

  goals: {
    goals: [
      { title: '실시간 추천', iconKey: 'Real-Time Recommendations', metric: '2초 이내 AI 추천 제공' },
      { title: '개인 맞춤 AI 가이드', iconKey: 'Personalized AI Guidance', metric: 'GPT-4o 기반 한국어 코칭 추천' },
      { title: '데이터 통합', iconKey: 'Data Integration', metric: '서울시 공공 스포츠 시설 500+곳 통합' },
      { title: '사용자 경험', iconKey: 'User Experience', metric: '45세 이상 사용자 친화적 UI 설계' },
      { title: '날씨 인식', iconKey: 'Weather Awareness', metric: '기상청 + 미세먼지 API 연동' },
      { title: '접근성 중심', iconKey: 'Accessibility', metric: '접근성 점수 및 시각적 지표 제공' }
    ]
  },

  research: {
    insights: [
      {
        title: '사용자 요구 분석',
        items: [
          '운동 목적에 따른 개인화 추천 필요 (다이어트, 체력 증진 등)',
          '대부분의 사용자는 5km 이내 시설을 선호',
          '날씨와 공기질은 야외 운동 결정에 큰 영향',
          '퇴근 시간대(18~21시) 혼잡 회피 니즈',
          '고령 사용자 및 이동 약자를 고려한 접근성 정보 중요'
        ]
      },
      {
        title: '기술적 요구사항',
        items: [
          '다수 외부 API와의 실시간 데이터 통합',
          '가중치 기반 ML 스코어링을 위한 피처 정규화',
          '신뢰도를 높이기 위한 자연어 설명 생성',
          '정확한 거리 계산을 위한 지오로케이션 처리',
          '500개 이상 시설에 대한 실시간 점수 계산 성능 확보'
        ]
      }
    ]
  },

  architecture: {
    items: [
      {
        title: '모노레포 아키텍처',
        description:
          '프론트엔드, 백엔드, AI 서비스, 공용 유틸리티를 하나의 모노레포로 구성하여 코드 재사용성과 서비스 독립성을 동시에 확보했습니다.',
        features: [
          'Frontend: Next.js 15 App Router, React 19, TypeScript, Tailwind CSS',
          'Backend: NestJS, Drizzle ORM, Supabase Client',
          'AI Service: FastAPI 기반 ML 스코어링',
          'Shared: TypeScript 유틸리티, Zod 스키마'
        ]
      },
      {
        title: '주요 사용자 플로우',
        userFlows: [
          {
            name: '시설 탐색',
            iconKey: 'Facility Discovery',
            description: 'AI 추천 또는 지도를 통해 인근 시설 탐색',
            steps: [
              '위치 권한 허용',
              '5km 반경 시설 조회',
              'AI 점수 계산',
              'GPT-4o 추천 문구 생성',
              '시설 및 프로그램 상세 확인'
            ]
          },
          {
            name: 'AI 추천 플로우',
            iconKey: 'AI Recommendation',
            description: '다중 요소를 고려한 개인 맞춤 추천',
            steps: [
              '운동 목표 및 선호 입력',
              '시설 및 날씨 데이터 수집',
              'AI 서비스 점수 계산',
              '자연어 추천 설명 생성',
              '결과 시각화'
            ]
          }
        ]
      }
    ]
  },

  keyFeatures: {
    metrics: [],
    userFeatures: [
      {
        title: 'AI 기반 추천',
        iconKey: 'AI-Powered Recommendations',
        items: ['사용자 목표, 위치, 날씨, 접근성을 고려한 개인 맞춤형 시설 및 프로그램 추천']
      },
      {
        title: '인터랙티브 지도 탐색',
        iconKey: 'Interactive Map',
        items: ['지오로케이션 기반 시설 탐색 및 실시간 거리 계산, 시각적 지도 인터페이스']
      },
      {
        title: '날씨 인식 추천',
        iconKey: 'Weather Awareness',
        items: ['실시간 날씨 및 공기질 데이터를 반영한 야외 활동 추천']
      },
      {
        title: '혼잡도 예측',
        iconKey: 'Crowd Prediction',
        items: ['ML 기반 혼잡도 예측으로 피크 시간대 회피 지원']
      }
    ],
    engineeringFeatures: [
      {
        title: '모노레포 아키텍처',
        iconKey: 'Monorepo',
        items: ['공용 TypeScript 스키마와 유틸리티를 포함한 확장 가능한 모노레포 구조']
      },
      {
        title: '다중 서비스 통합',
        iconKey: 'Service Integration',
        items: ['Next.js 프론트엔드, NestJS 백엔드, FastAPI AI 서비스 간 원활한 통합']
      }
    ]
  },

  challenges: {
    challenges: [
      {
        problem: '서로 다른 형식과 제한을 가진 다수 외부 API 통합',
        solution:
          '기상청 날씨, 미세먼지, 시설 데이터 소스를 처리하기 위해 오류 처리, 재시도 로직, 응답 정규화를 포함한 견고한 API 클라이언트 래퍼를 구축했습니다.'
      },
      {
        problem: '500개 이상 시설에 대한 실시간 ML 스코어링 성능',
        solution:
          'pandas 벡터화를 활용한 스코어링 알고리즘 최적화 및 캐싱 전략을 구현하여 2초 이내 추천을 제공했습니다.'
      },
      {
        problem: '모노레포 공용 코드와 서비스 독립성 균형',
        solution:
          '서비스별 구현을 유지하면서 공용 TypeScript 유틸리티와 Zod 스키마를 포함한 명확한 패키지 경계를 설계했습니다.'
      }
    ]
  },

  designSystem: {
    items: []
  },

  systemArchitecture: {
    categories: []
  },

  results: {
    metrics: [
      '서울시 공공 스포츠 시설 500+곳 통합',
      'AI 추천 응답 시간 2초 이내',
      '5개 외부 API 통합',
      '다중 요소 기반 ML 스코어링 시스템 구축',
      '접근성을 고려한 사용자 중심 UI 구현',
      '프로덕션 수준 모노레포 플랫폼 완성'
    ],
    description:
      'KSPO Sports Platform은 실시간 데이터와 AI 추천을 결합하여 시민들이 스포츠 시설을 보다 쉽게 발견하고 이용할 수 있도록 지원합니다. 날씨, 혼잡도, 접근성을 고려한 추천을 통해 공공 스포츠 인프라의 활용도를 높이는 데 기여했습니다.'
  },

  learnings: {
    cards: [
      {
        title: '모노레포 설계',
        iconKey: 'Monorepo Design',
        description:
          '공용 코드 재사용과 서비스 독립성을 균형 있게 유지하는 모노레포 설계 경험을 축적했습니다.'
      },
      {
        title: '프로덕션 AI 통합',
        iconKey: 'AI Integration',
        description:
          'LLM을 실제 서비스에 적용하며 프롬프트 구조화, 비용 최적화, 응답 일관성 관리의 중요성을 학습했습니다.'
      },
      {
        title: '학습 데이터 없는 ML 스코어링',
        iconKey: 'ML Scoring',
        description:
          '라벨 데이터 없이 도메인 지식을 활용한 가중치 기반 점수 시스템을 설계했습니다.'
      },
      {
        title: '복합 API 오케스트레이션',
        iconKey: 'API Integration',
        description:
          '서로 다른 형식과 제한을 가진 외부 API를 안정적으로 통합하는 경험을 쌓았습니다.'
      }
    ]
  },

  techStack: {
    categories: [
      {
        category: '핵심 기술 스택',
        items: [
          'Next.js 15 App Router',
          'React 19',
          'TypeScript',
          'NestJS',
          'Supabase PostgreSQL'
        ]
      },
      {
        category: 'AI & 데이터',
        items: [
          'FastAPI',
          'Python',
          'OpenAI GPT-4o',
          'pandas',
          'scikit-learn'
        ]
      },
      {
        category: '인프라 및 운영',
        items: [
          'Vercel',
          '환경 변수 기반 설정',
          '모노레포 툴링',
          '공용 TypeScript 스키마'
        ]
      }
    ]
  },

  links: {
    links: [],
    figmaUrl: '',
    caseStudyUrl: ''
  }
};
