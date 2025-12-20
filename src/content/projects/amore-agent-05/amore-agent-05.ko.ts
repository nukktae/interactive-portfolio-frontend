// Korean content file: All user-facing text strings

export const amoreAgentKO = {
  overview: {
    paragraphs: [
      {
        type: 'text',
        content: [
          { type: 'span', text: 'AMORE AI Insights Hub', className: 'font-semibold text-foreground' },
          '는 Shopee 상품 리뷰를 대규모로 분석하고 실행 가능한 인사이트로 전환하기 위해 구축된 AI 기반 이커머스 분석 플랫폼입니다.'
        ]
      },
      {
        type: 'text',
        content:
          '브랜드는 여러 데이터 수집 방식으로 리뷰 데이터를 가져오고, AI를 통해 감정 분석, 트렌드 파악, 기능 격차, 경쟁사 비교 등 실질적인 제품 인사이트를 도출할 수 있습니다.'
      },
      {
        type: 'text',
        content:
          '자동화된 모니터링, 델타 싱크(delta-sync) 기술, 실시간 알림을 통해 부정적 감정 변화나 리뷰 급증을 조기에 감지하고 선제적으로 대응할 수 있도록 설계되었습니다.'
      }
    ]
  },

  myRole: {
    roles: [
      {
        title: '풀스택 개발자',
        description:
          '백엔드 서비스, 프론트엔드 대시보드, 데이터 파이프라인, AI 인사이트 생성까지 전체 시스템을 처음부터 끝까지 설계하고 구현했습니다.',
        responsibilities: [
          '스크래핑, 데이터 정규화, AI 인사이트, 모니터링을 담당하는 Express.js 백엔드 구축',
          '다중 페이지 구조의 React 기반 대시보드 프론트엔드 개발',
          '브라우저 북마클릿을 활용한 Shopee 리뷰 인페이지 스크래핑 시스템 구현',
          '중복 리뷰 처리를 방지하는 델타 싱크 구조 설계',
          '알림 트리거와 상태 추적을 포함한 자동화 모니터링 서비스 구현'
        ]
      },
      {
        title: '프로덕트 엔지니어',
        description:
          '기술 중심이 아닌, 실제 브랜드 사용자가 다양한 워크플로우에서 쉽게 활용할 수 있는 제품 경험 설계에 집중했습니다.',
        responsibilities: [
          '북마클릿, JSON 업로드, 샘플 데이터 등 다양한 수집 방식 UX 설계',
          '분석·모니터링·리뷰 탐색을 위한 대시보드 UX 설계',
          '스크래핑, 모니터링, AI 분석을 위한 설정 시스템 구축',
          '부정적 감정 및 리뷰 급증을 감지하는 알림 시스템 설계'
        ]
      }
    ]
  },

  problem: {
    summary:
      '이커머스 브랜드는 Shopee 리뷰를 효율적으로 분석하고 부정적 고객 피드백에 빠르게 대응하는 데 어려움을 겪고 있습니다.',
    paragraphs: [
      {
        type: 'text',
        content:
          'Shopee에는 방대한 양의 상품 리뷰가 생성되지만, 이를 의미 있는 인사이트로 전환하는 과정은 매우 복잡하고 시간이 많이 소요됩니다.'
      },
      {
        type: 'text',
        content:
          '수작업 분석은 확장성이 없고, API 데이터 구조는 일관성이 부족하며, 감정 변화나 경쟁사 동향을 자동으로 추적할 수 있는 수단도 제한적입니다.'
      }
    ]
  },

  goals: {
    items: [
      'Shopee 리뷰 데이터 수집 자동화',
      '고객 피드백 기반 AI 제품 인사이트 제공',
      '감정 변화 및 리뷰 증가에 대한 실시간 모니터링',
      '제품 팀을 위한 명확한 분석 대시보드 제공',
      '다양한 데이터 수집 워크플로우 지원',
      '실제 운영 환경에서 사용 가능한 프로덕션 시스템 구축'
    ]
  },

  research: {
    insights: [
      {
        title: 'Shopee 데이터 특성',
        items: [
          '상품 유형에 따라 API 응답 구조가 상이함',
          '리뷰 데이터는 깊은 중첩 구조와 불규칙한 필드를 포함함',
          '중복 처리를 방지하기 위해 리뷰 ID 기반 델타 싱크가 필요함'
        ]
      },
      {
        title: '사용자 니즈',
        items: [
          '자동·수동을 모두 지원하는 데이터 수집 방식 필요',
          '스크래핑 및 모니터링 동작에 대한 세밀한 설정 요구',
          '단순 요약이 아닌 실행 가능한 인사이트 필요'
        ]
      }
    ]
  },

  architecture: {
    paragraphs: [
      {
        type: 'text',
        content:
          '시스템은 프론트엔드와 백엔드를 명확히 분리한 구조로 설계되었으며, 백엔드는 데이터 처리와 AI 분석을 담당하고 프론트엔드는 시각화와 사용자 상호작용에 집중합니다.'
      }
    ],
    bullets: [
      '모듈형 Express.js 백엔드 서비스',
      '클라이언트 캐싱을 포함한 React 프론트엔드',
      '브라우저 기반 북마클릿 스크래핑',
      '증분 업데이트를 위한 델타 싱크 파이프라인',
      'AI 기반 인사이트 생성',
      '주기 설정이 가능한 모니터링 서비스'
    ]
  },

  keyFeatures: {
    features: [
      {
        title: '다중 데이터 수집 방식',
        description:
          '브라우저 북마클릿 스크래핑, JSON 업로드, 샘플 데이터 로딩을 지원합니다.'
      },
      {
        title: 'AI 리뷰 인사이트',
        description:
          '감정 분석, 트렌드 파악, 기능 격차 및 개선 제안을 자동으로 생성합니다.'
      },
      {
        title: '자동화된 제품 모니터링',
        description:
          '리뷰 수와 감정 변화를 추적하고 알림을 제공합니다.'
      },
      {
        title: '분석 대시보드',
        description:
          '리뷰 메트릭, 평점 분포, 키워드 및 트렌드를 시각화합니다.'
      }
    ]
  },

  challenges: {
    items: [
      {
        problem: 'Shopee API 응답 구조의 비일관성',
        solution:
          '여러 폴백 전략과 기본값 처리를 포함한 정규화 파이프라인을 구축했습니다.'
      },
      {
        problem: '동적 Shopee 페이지의 안정적인 스크래핑',
        solution:
          '인증된 브라우저 세션에서 실행되는 북마클릿 기반 스크래핑 방식을 도입했습니다.'
      },
      {
        problem: '중복 리뷰 처리',
        solution:
          '리뷰 ID를 기준으로 한 델타 싱크 구조를 설계했습니다.'
      },
      {
        problem: '다수 상품의 효율적인 모니터링',
        solution:
          '변경 사항이 감지될 때만 전체 분석을 수행하도록 경량 모니터링 구조를 설계했습니다.'
      }
    ]
  },

  results: {
    bullets: [
      '수작업 리뷰 분석 시간 80% 절감',
      '델타 싱크를 통한 중복 처리 90% 감소',
      '3가지 데이터 수집 방식 지원',
      '감정 변화 및 리뷰 급증에 대한 자동 알림 제공',
      'Railway 및 Vercel 기반 프로덕션 배포 완료'
    ]
  },

  learnings: {
    items: [
      {
        title: '실제 데이터에서는 정규화가 핵심',
        description:
          '이커머스 데이터는 불규칙하기 때문에 견고한 정규화 로직이 시스템 안정성을 좌우합니다.'
      },
      {
        title: '사용자 보조형 스크래핑의 장점',
        description:
          '인증 세션 내에서 실행되는 스크래핑은 자동화의 제약을 효과적으로 회피할 수 있습니다.'
      },
      {
        title: '증분 동기화의 확장성',
        description:
          '델타 싱크는 처리 비용을 크게 줄이고 시스템 확장성을 높입니다.'
      },
      {
        title: '구조화된 프롬프트의 중요성',
        description:
          '명확한 출력 구조를 가진 프롬프트가 일관된 AI 인사이트 생성을 가능하게 합니다.'
      }
    ]
  },

  techStack: {
    frontend: ['React', 'Vite', 'Axios'],
    backend: ['Node.js', 'Express.js', 'Playwright'],
    ai: ['OpenAI GPT-4o-mini'],
    deployment: ['Railway', 'Vercel']
  }
};
