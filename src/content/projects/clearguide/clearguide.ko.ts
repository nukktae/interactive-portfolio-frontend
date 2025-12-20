// Korean content file: All user-facing text strings

export const clearguideKO = {
    overview: {
      paragraphs: [
        {
          type: 'text',
          content: [
            { type: 'span', text: 'ClearGuide', className: 'font-semibold text-foreground' },
            '는 한국 거주자들이 정부 및 공공기관으로부터 받은 각종 공공 문서를 쉽게 이해하고 대응할 수 있도록 돕는 AI 기반 웹 애플리케이션입니다.'
          ]
        },
        {
          type: 'text',
          content:
            '세금 고지서, 과태료 안내, 각종 공문 등 복잡한 행정 문서를 분석해 핵심 요약, 해야 할 행동, 중요한 기한 정보를 명확하게 제공합니다.'
        },
        {
          type: 'text',
          content:
            'GPT-4o Vision을 활용한 OCR, GPT-4o 기반 문서 분석, 그리고 RAG(Retrieval-Augmented Generation) 구조를 결합해 정확성과 설명 가능성을 동시에 확보했으며, 개인정보 보호를 최우선으로 설계했습니다.'
        }
      ]
    },
  
    role: {
      roles: [
        {
          title: '풀스택 개발자 & AI 엔지니어',
          iconKey: 'Full-Stack Developer & AI Engineer',
          description:
            '프론트엔드부터 백엔드, AI 파이프라인, 개인정보 보호 구조까지 전체 시스템을 단독으로 설계하고 구현했습니다.',
          responsibilities: [
            'Next.js App Router와 TypeScript 기반 애플리케이션 설계 및 구현',
            '문서 업로드, OCR, 파싱, 챗봇을 위한 18개 이상의 API 엔드포인트 개발',
            'NER + 정규식 + 관계 추출을 결합한 하이브리드 엔티티 추출 파이프라인 구축',
            '문서 기반 응답을 위한 벡터 임베딩 기반 RAG 시스템 구현',
            '문서 처리 전 과정에 적용되는 다단계 개인정보 마스킹 구조 설계',
            'TTL 기반 문서 보관 및 자동 삭제 정책 설계'
          ],
          impacts: [
            '개인정보 보호를 최우선으로 하는 완전한 풀스택 AI 애플리케이션 제공',
            '하이브리드 AI와 규칙 기반 시스템을 통한 정확한 문서 분석 기능 구현',
            '모든 문서 처리 단계에서 강력한 개인정보 보호 체계 구축'
          ]
        },
        {
          title: '프론트엔드 아키텍트 & UX 개발자',
          iconKey: 'Frontend Architect & UX Developer',
          description:
            '어려운 공공 문서를 누구나 직관적으로 이해할 수 있도록 UI 구조와 사용자 경험 설계에 집중했습니다.',
          responsibilities: [
            'Tailwind CSS와 Radix UI를 활용한 재사용 가능한 컴포넌트 시스템 구축',
            '데스크톱·태블릿·모바일을 모두 고려한 반응형 레이아웃 설계',
            '한국어·영어를 지원하는 국제화(i18n) 시스템 구현',
            '문서 맥락을 이해하는 지능형 챗봇 UI 개발',
            '검색·필터·미리보기를 포함한 문서 라이브러리 구현',
            '기한 관리 및 일정 확인을 위한 캘린더 UX 설계'
          ],
          impacts: [
            '복잡한 문서를 누구나 이해할 수 있는 직관적인 인터페이스 제공',
            '셀프 서비스 문서 이해 환경을 통해 상담센터 의존도 감소',
            '모든 기기에서 사용 가능한 세련되고 접근 가능한 경험 제공'
          ]
        }
      ]
    },
  
    problem: {
      summary:
        '많은 시민들이 공공 문서의 복잡한 표현과 불명확한 안내로 인해 내용을 이해하지 못하고 혼란을 겪고 있습니다.',
          content:
        '공공기관에서 발송되는 문서는 법률 및 행정 용어 위주로 작성되어, 일반 시민이 내용을 바로 이해하기 어렵습니다. 이로 인해 기한을 놓치거나 잘못 대응하는 문제가 발생하며, 상담센터나 오프라인 창구에 대한 의존도가 높아집니다.',
      painPoints: [
        { description: '복잡한 법률 용어로 인한 문서 이해 어려움' },
        { description: '불명확한 안내로 인한 기한 누락 및 잘못된 대응' },
        { description: '상담센터 및 오프라인 창구에 대한 높은 의존도' },
        { description: '중앙화된 문서 관리 및 추적 시스템 부재' }
      ],
      whyItMatters:
        'AI 기반 문서 분석을 통한 이해도 향상은 오류 감소, 규정 준수율 향상, 시민들이 공공 문서를 독립적으로 처리할 수 있는 역량 강화에 기여합니다.'
    },
  
    goals: {
      goals: [
        { title: '쉬운 언어 변환', iconKey: 'Plain Language Translation', metric: '복잡한 문서 간소화' },
        { title: '자동 추출', iconKey: 'Automatic Extraction', metric: '기한 및 행동 항목 추출' },
        { title: '오류 감소', iconKey: 'Error Reduction', metric: '기한 누락 방지' },
        { title: '셀프 서비스 지원', iconKey: 'Self-Service Support', metric: '상담센터 의존도 감소' },
        { title: '다양한 포맷 지원', iconKey: 'Multi-Format Support', metric: '7가지 이상 문서 포맷' },
        { title: '개인정보 보호', iconKey: 'Privacy Protection', metric: '기본값 PII 마스킹' }
      ]
    },
  
    research: {
      insights: [
        {
          title: '문서 복잡성',
          items: [
            '공공 문서는 PDF, HWP, DOCX, 스캔 이미지 등 다양한 형식으로 제공됨',
            '문서 형식에 따라 파싱 전략이 달라져야 함',
            'OCR 품질은 문서 출처와 스캔 상태에 따라 크게 달라짐'
          ]
        },
        {
          title: '개인정보 보호 요구',
          items: [
            '공공 문서에는 주민등록번호, 계좌번호 등 민감 정보가 포함됨',
            '사용자는 데이터 보관 및 삭제에 대한 통제권을 원함',
            '모든 처리 단계에서 개인정보 보호가 적용되어야 함'
          ]
        },
        {
          title: '정확성과 신뢰',
          items: [
            'AI 응답은 실제 문서 내용에 근거해야 함',
            '잘못된 설명은 사용자 신뢰를 크게 저하시킴',
            '출처가 명확한 설명이 이해와 신뢰를 높임'
          ]
        }
      ]
    },
  
    architecture: {
      items: [
        {
          title: '다단계 문서 처리',
          description:
            'ClearGuide는 정확성, 성능, 개인정보 보호를 균형 있게 고려한 다단계 문서 처리 파이프라인을 사용합니다.',
          features: [
        '파일 검증 및 업로드 처리',
        'GPT-4o Vision 기반 OCR 및 대체 전략',
        '저장 전 개인정보 탐지 및 마스킹',
        '요약·행동 항목·기한을 위한 AI 파싱',
        '구조화된 데이터 생성을 위한 하이브리드 추출',
        '챗봇 응답 정확도를 위한 벡터 검색',
        'TTL 기반 문서 자동 삭제'
          ],
          userFlows: undefined
        }
      ]
    },
  
    keyFeatures: {
      metrics: [],
      userFeatures: [
        {
          title: '지능형 문서 분석',
          iconKey: 'Intelligent Document Analysis',
          items: ['업로드된 문서에서 요약, 행동 항목, 기한, 위험 요소를 자동으로 추출합니다.']
        },
        {
          title: '문서 기반 챗봇',
          iconKey: 'Context-Aware Chatbot',
          items: ['RAG 구조를 통해 문서 내용에 근거한 답변을 출처와 함께 제공합니다.']
        },
        {
          title: '기한 및 일정 관리',
          iconKey: 'Deadline & Calendar Management',
          items: ['문서에서 추출한 기한을 캘린더로 시각화하고 알림을 제공합니다.']
        },
        {
          title: '문서 라이브러리',
          iconKey: 'Document Library',
          items: ['문서를 한 곳에서 검색, 정렬, 미리보기, 관리할 수 있습니다.']
        }
      ],
      engineeringFeatures: []
    },
  
    challenges: {
      challenges: [
        {
          problem: '형식과 품질이 다양한 문서 처리',
          solution:
            '네이티브 파서와 GPT-4o Vision을 결합한 다단계 폴백 구조를 구현해 안정성을 확보했습니다.'
        },
        {
          problem: 'AI 응답의 환각(hallucination) 방지',
          solution:
            '벡터 검색 기반 RAG 시스템과 출처 검증 로직을 통해 문서 근거 없는 응답을 차단했습니다.'
        },
        {
          problem: '개인정보 보호와 기능성의 균형',
          solution:
            '모든 처리 단계에서 개인정보를 마스킹하고, 마스킹된 데이터만 저장되도록 설계했습니다.'
        },
        {
          problem: '한국어 문서에서의 정확한 엔티티 추출',
          solution:
            'NER, 정규식, 관계 추출을 결합해 정확도를 높이고 상호 검증 구조를 도입했습니다.'
        }
      ]
    },
  
    results: {
      metrics: [
        '실제 사용 가능한 수준의 프로덕션 애플리케이션 완성',
        '7가지 문서 포맷 안정적 지원',
        '평균 API 응답 시간 2초 이내',
        '기한 및 행동 항목 자동 추출 정확도 향상',
        '출처 기반 챗봇 응답 제공',
        '모든 민감 정보가 마스킹되는 개인정보 보호 구조 구현'
      ],
      description:
        'ClearGuide는 복잡한 공공 문서를 한국 거주자들이 이해하고 대응할 수 있도록 돕는 AI 기반 플랫폼을 성공적으로 제공합니다. 고급 문서 처리, 개인정보 보호, 직관적인 UX를 결합하여 시민들이 정부 통신을 독립적으로 이해하고 처리할 수 있도록 지원합니다.'
    },
  
    learnings: {
      cards: [
        {
          title: '하이브리드 AI 구조의 강점',
          iconKey: 'Hybrid AI Systems',
          description:
            '규칙 기반 로직과 LLM을 결합하면 정확성과 안정성을 동시에 확보할 수 있음을 경험했습니다.'
        },
        {
          title: '개인정보 보호는 설계 단계부터 필요',
          iconKey: 'Privacy Design',
          description:
            '사후 처리보다 전 과정에 걸친 보호 설계가 신뢰와 안전성을 높였습니다.'
        },
        {
          title: '설명 가능성이 서비스 신뢰를 만든다',
          iconKey: 'Explainability',
          description:
            '출처가 명확한 AI 응답은 사용자의 이해와 서비스 신뢰도를 크게 높였습니다.'
        }
      ]
    },
  
    techStack: {
      categories: [
        { category: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Radix UI'] },
        { category: 'Backend', items: ['Node.js', 'Firebase', 'Supabase'] },
        { category: 'AI', items: ['OpenAI GPT-4o', 'OpenAI Vision', 'Vector Embeddings'] },
        { category: 'Tools', items: ['Vercel'] }
      ]
    },
    designSystem: {
      items: []
    },
    systemArchitecture: {
      categories: []
    },
    links: {
      links: [],
      figmaUrl: '#',
      caseStudyUrl: '#'
    }
  };
  