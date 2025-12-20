// Korean content file: All user-facing text strings

export const majorMatchKO = {
    overview: {
      paragraphs: [
        {
          type: 'text',
          content: [
            { type: 'span', text: 'MajorMatch AI', className: 'font-semibold text-foreground' },
            '는 학생들이 자신의 적성과 진로에 맞는 전공을 발견할 수 있도록 돕는 AI 기반 커리어 가이드 플랫폼입니다. 개인화된 분석, 실습형 과제, 그리고 현업 멘토링을 결합해 진로 탐색의 새로운 방식을 제시합니다.'
          ]
        },
        {
          type: 'text',
          content:
            'OpenAI GPT-4를 활용해 학생들의 심층 설문 응답을 분석하고, 추천 전공과 함께 진로 방향, 필요 역량, 예상 연봉 등 구체적인 커리어 정보를 제공합니다.'
        },
        {
          type: 'text',
          content:
            '단순한 추천에 그치지 않고, 학생들이 실제로 분야를 경험해볼 수 있도록 인터랙티브 챌린지를 제공하며, 현업 전문가와 직접 연결되는 멘토링 예약 시스템도 함께 제공합니다.'
        }
      ]
    },
  
    role: {
      roles: [
        {
          title: '풀스택 개발자',
          iconKey: '풀스택 개발자',
          description:
            '플랫폼의 전체 구조를 설계하고, 백엔드·프론트엔드·AI 연동까지 전반적인 개발을 단독으로 담당했습니다.',
          responsibilities: [
            'Express.js와 TypeScript 기반 RESTful API 설계 및 구현',
            'Firebase Authentication 연동 및 서버 측 인증 검증 로직 구현',
            'PostgreSQL 데이터베이스 스키마 설계 및 마이그레이션 구성',
            'OpenAI GPT-4 API 연동을 통한 전공 추천 로직 구현',
            '멘토링 세션 예약을 위한 이메일 알림 시스템 구축',
            '프로필 이미지 업로드를 위한 파일 업로드 시스템 구현'
          ],
          impacts: [
            '안전한 인증과 AI 연동을 갖춘 완전한 풀스택 플랫폼 제공',
            '구조화된 API 설계를 통해 신뢰할 수 있는 AI 기반 추천 기능 구현',
            '향후 기능 확장을 위한 확장 가능한 데이터베이스 아키텍처 구축'
          ]
        },
        {
          title: '프론트엔드 엔지니어',
          iconKey: '프론트엔드 엔지니어',
          description:
            '학생들이 부담 없이 탐색하고 몰입할 수 있는 직관적인 사용자 경험을 목표로 프론트엔드를 설계·구현했습니다.',
          responsibilities: [
            'React와 TypeScript 기반의 반응형 웹 애플리케이션 개발',
            'Redux Toolkit을 활용한 전역 상태 관리',
            'Framer Motion을 활용한 자연스러운 인터랙션과 애니메이션 구현',
            '진단 테스트 흐름 및 진행 상태 관리 UI 개발',
            '멘토 탐색 및 예약 플로우 구현',
            '챌린지 이해를 돕는 AI 채팅 인터페이스 설계'
          ],
          impacts: [
            '모든 기기에서 직관적이고 매력적인 사용자 경험 제공',
            '잘 설계된 진단 및 챌린지 플로우를 통한 원활한 진로 탐색 가능',
            '학생 참여를 유도하는 세련된 인터페이스 제공'
          ]
        }
      ]
    },
  
    problem: {
      summary:
        '많은 학생들이 전공 선택 과정에서 개인화된 정보와 실제 경험이 부족해 혼란을 겪고 있습니다.',
          content:
        '기존 진로 상담은 일반적인 정보 제공에 그치는 경우가 많아, 학생 개개인의 성향이나 강점을 충분히 반영하지 못합니다. 실제 전공이나 직무를 경험해보기 어려운 환경에서 중요한 결정을 내려야 하기 때문에, 전공 변경이나 진로 불만족으로 이어지는 사례도 빈번합니다.',
      painPoints: [
        { description: '일반적인 조언이 개인의 강점과 관심사를 충분히 반영하지 못함' },
        { description: '실제 진로 경로와 업계 전문가에 대한 접근성 부족' },
        { description: '전공 선택 전 실제 경험을 해볼 수 있는 방법 부재' },
        { description: '학생 응답과 선호도 기반의 개인화된 인사이트 부족' }
      ],
      whyItMatters:
        '개인화된 AI 기반 추천과 실습형 챌린지, 실제 멘토링을 결합하면 학생들이 학업 및 진로 경로에 대해 더 정보에 입각한 결정을 내릴 수 있습니다.'
    },
  
    goals: {
      goals: [
        { title: 'AI 기반 추천', iconKey: 'AI 기반 추천', metric: '개인 맞춤형 전공 제안' },
        { title: '실습형 탐색', iconKey: '실습형 탐색', metric: '6개 분야 인터랙티브 챌린지' },
        { title: '멘토링 연결', iconKey: '멘토링 연결', metric: '업계 전문가 직접 접근' },
        { title: '진로 가시성', iconKey: '진로 가시성', metric: '명확한 경로, 역량, 전망' },
        { title: '진행도 추적', iconKey: '진행도 추적', metric: '통합 탐색 플랫폼' }
      ]
    },
  
    research: {
      insights: [
        {
          title: '사용자 니즈',
          items: [
            '일반적인 조언이 아닌 개인 맞춤형 가이드 필요',
            '전공 선택 전 실제 경험의 중요성',
            '현업 종사자의 현실적인 조언에 대한 수요',
            '탐색 과정을 시각적으로 확인할 수 있는 구조'
          ]
        },
        {
          title: '기술적 고려사항',
          items: [
            '안정적인 AI 응답 처리를 위한 구조 설계',
            '보안이 강화된 인증 및 사용자 데이터 관리',
            '확장 가능한 데이터베이스 구조',
            '모바일 환경을 고려한 반응형 UX'
          ]
        }
      ]
    },
  
    architecture: {
      items: [
        {
          title: '풀스택 아키텍처',
          description: 'MajorMatch AI는 프론트엔드와 백엔드를 명확히 분리한 구조를 기반으로, 확장성과 유지보수를 고려한 현대적인 풀스택 아키텍처를 따릅니다.',
          features: [
        'Express.js + TypeScript 기반 REST API',
        'PostgreSQL 기반 관계형 데이터베이스 및 마이그레이션',
        'Firebase Authentication을 활용한 사용자 인증',
        'React + Redux Toolkit 기반 프론트엔드',
        'OpenAI GPT-4 연동을 통한 AI 추천 및 상담 기능',
        '멘토링 예약을 위한 이메일 알림 시스템'
          ],
          userFlows: undefined
        }
      ]
    },
  
    keyFeatures: {
      metrics: [],
      userFeatures: [
        {
          title: 'AI 전공 진단',
          iconKey: 'AI 전공 진단',
          items: ['20문항으로 구성된 설문을 기반으로 GPT-4가 전공 및 커리어를 분석·추천합니다.']
        },
        {
          title: '인터랙티브 챌린지',
          iconKey: '인터랙티브 챌린지',
          items: ['6개 분야의 실습형 과제를 통해 전공과 직무를 미리 경험할 수 있습니다.']
        },
        {
          title: '멘토링 플랫폼',
          iconKey: '멘토링 플랫폼',
          items: ['현업 전문가의 프로필을 확인하고, 1:1 멘토링 세션을 예약할 수 있습니다.']
        },
        {
          title: '진행도 관리',
          iconKey: '진행도 관리',
          items: ['진단, 챌린지, 멘토링 진행 상황을 한눈에 확인할 수 있습니다.']
        }
      ],
      engineeringFeatures: []
    },
  
    challenges: {
      challenges: [
        {
          problem: 'GPT-4 응답의 일관성과 안정성 확보',
          solution:
            '명확한 프롬프트 구조와 JSON 스키마 검증, 예외 처리 로직을 통해 안정적인 결과를 제공했습니다.'
        },
        {
          problem: 'Firebase 인증과 백엔드 사용자 데이터 동기화',
          solution:
            '서버 측 토큰 검증 미들웨어를 구현하고, 최초 로그인 시 사용자 레코드를 자동 생성하도록 설계했습니다.'
        },
        {
          problem: '파일 업로드 보안',
          solution:
            'UUID 기반 파일 명명과 타입 검증을 적용해 안전한 업로드 환경을 구축했습니다.'
        }
      ]
    },
  
    results: {
      metrics: [
        'AI 기반 전공 추천이 가능한 커리어 플랫폼 완성',
        '개인 맞춤형 전공 및 진로 정보 제공',
        '6개 분야, 20개 이상의 실습형 챌린지 구축',
        '멘토링 예약 및 이메일 알림 시스템 구현',
        '안정적인 인증 및 프로필 관리 기능 제공',
        '모바일·데스크톱 환경 모두 대응하는 반응형 UI'
      ],
      description: 'MajorMatch AI는 AI 기반 추천, 실습형 탐색, 실제 멘토링을 결합하여 학생들이 학업 및 진로 경로에 대해 정보에 입각한 결정을 내릴 수 있도록 돕는 포괄적인 커리어 가이드 플랫폼을 성공적으로 제공합니다.'
    },
  
    learnings: {
      cards: [
        {
          title: 'AI 서비스 설계',
          iconKey: 'AI 서비스 설계',
          description:
            '프롬프트 설계와 응답 검증이 AI 기반 서비스의 신뢰도를 좌우한다는 점을 깊이 이해하게 되었습니다.'
        },
        {
          title: '풀스택 타입 안정성',
          iconKey: '풀스택 타입 안정성',
          description:
            '프론트엔드와 백엔드에서 타입을 공유함으로써 개발 속도와 안정성을 동시에 확보할 수 있었습니다.'
        },
        {
          title: '확장 가능한 구조 설계',
          iconKey: '확장 가능한 구조 설계',
          description:
            '초기 단계부터 구조를 명확히 설계하는 것이 유지보수와 기능 확장에 큰 도움이 된다는 것을 경험했습니다.'
        }
      ]
    },
  
    techStack: {
      categories: [
        { category: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Redux Toolkit'] },
        { category: 'Backend', items: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL'] },
        { category: 'Services', items: ['Firebase Authentication', 'OpenAI GPT-4', 'Nodemailer'] },
        { category: 'Tools', items: ['GitHub', 'Vercel'] }
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
  