// Korean content file: All user-facing text strings in Korean

export const friendlyKO = {
    overview: {
      paragraphs: [
        {
          type: 'text',
          content: [
            { type: 'span', text: 'Friendly', className: 'font-semibold text-foreground' },
            '는 대학생의 학습 생산성을 높이기 위해 설계된 크로스 플랫폼 모바일 애플리케이션입니다. 강의 녹음과 전사, 일정 관리, 문서 분석, 학점 관리, 학교 인증 커뮤니티를 하나의 경험으로 통합합니다.'
          ]
        },
        {
          type: 'text',
          content:
            'React Native와 Expo를 기반으로 iOS, Android, Web을 단일 코드베이스로 지원하며, Firebase 실시간 동기화와 Node.js + Express 백엔드를 통해 안정적인 데이터 흐름을 제공합니다.'
        },
        {
          type: 'text',
          content:
            'Whisper, GPT-4o-mini, GPT-3.5-turbo, Vision 등 OpenAI 모델을 활용해 실시간 강의 전사, 문서 분석, 이미지 기반 일정 추출, AI 학습 보조 기능을 제공합니다.'
        }
      ]
    },
  
    role: {
      roles: [
        {
          title: '백엔드 개발',
          iconKey: 'Backend Development',
          responsibilities: [
            'Express.js 기반 REST API 설계 및 구현 (100개 이상 엔드포인트)',
            'Firebase Admin SDK를 활용한 Firestore 데이터베이스 아키텍처 설계',
            'Whisper, GPT 계열, Vision API 등 OpenAI 모델 통합',
            'PDF 파싱 및 텍스트 추출 서비스 개발',
            'Google Calendar API 및 Google Drive 자동 백업 시스템 연동',
            'PM2 기반 프로덕션 서버 운영 및 백그라운드 작업 스케줄링'
          ],
          impacts: [
            '100개 이상의 API를 갖춘 완전한 백엔드 인프라 구축',
            'AI 기반 실시간 전사 및 문서 분석 기능 구현',
            '자동 백업을 통한 데이터 안정성 강화'
          ]
        },
        {
          title: '프론트엔드 개발',
          iconKey: 'Frontend Development',
          responsibilities: [
            'React Native + Expo 기반 크로스 플랫폼 앱 개발',
            'Expo Router를 활용한 파일 기반 라우팅 구현',
            'NativeWind(Tailwind CSS) 기반 반응형 UI 개발',
            'React Context API를 활용한 전역 상태 관리',
            'PDF 뷰어 및 문서 네비게이션 UX 구현',
            '드래그 앤 드롭 기반 캘린더 인터페이스 개발',
            'Firebase Authentication 및 Firestore 동기화 연동'
          ],
          impacts: [
            'iOS, Android, Web에서 일관된 사용자 경험 제공',
            '50개 이상의 재사용 가능한 UI 컴포넌트 구축',
            '학생 중심의 직관적이고 현대적인 UX 설계'
          ]
        }
      ]
    },
  
    problem: {
      summary:
        '학생들은 강의 녹음, 일정 관리, 문서 분석, 학점 관리, 커뮤니티 활동을 위해 여러 개의 분리된 도구를 사용하고 있으며, 이는 생산성을 저하시킵니다.',
      content:
        '현대의 대학생들은 강의 녹음 앱, 캘린더, PDF 리더, 학점 계산용 스프레드시트, 학교 커뮤니티 플랫폼을 각각 따로 사용합니다. 잦은 앱 전환은 시간을 낭비하게 하고 학습 정보를 분산시킵니다.',
      painPoints: [
        { description: '강의 녹음과 전사를 위한 별도의 도구 사용' },
        { description: '수동 일정 입력으로 인한 시간 낭비와 오류' },
        { description: 'PDF 읽기 및 요약에 많은 시간 소요' },
        { description: '학점 및 졸업 요건 관리의 수동 처리' },
        { description: '학교 커뮤니티가 여러 플랫폼에 분산됨' }
      ],
      whyItMatters:
        'AI를 통해 반복적인 학습 작업을 자동화하면 학생들은 학습 자체에 더 집중할 수 있으며, 학교 인증 커뮤니티는 신뢰할 수 있는 정보 공유 환경을 제공합니다.'
    },
  
    goals: {
      goals: [
        { title: '실시간 AI 전사', iconKey: 'Real-time AI Transcription', metric: 'Whisper 기반 강의 실시간 전사' },
        { title: 'AI 문서 분석', iconKey: 'AI Document Analysis', metric: 'Vision 기반 PDF·이미지 이해' },
        { title: '학습 생산성 향상', iconKey: 'Boost Productivity', metric: '도구 전환 시간 최대 70% 감소' },
        { title: '인증된 커뮤니티', iconKey: 'Verified Communities', metric: '학교 기반 신뢰 정보 공유' },
        { title: '정확한 학점 관리', iconKey: 'Accurate GPA Tracking', metric: '졸업 요건 연계 분석' },
        { title: '크로스 플랫폼', iconKey: 'Cross-Platform Support', metric: 'iOS·Android·Web 단일 앱' }
      ]
    },
  
    research: {
      insights: [
        {
          title: '사용자 니즈',
          items: [
            '강의 녹음과 전사를 동시에 진행하고 싶어함',
            '이미지 기반 일정 자동 생성 필요',
            'PDF 요약 및 질의응답 기능 요구',
            '학점 관리가 졸업 요건과 연결되길 원함',
            '학교 인증 기반 커뮤니티에 대한 신뢰 요구'
          ]
        },
        {
          title: '기술적 고려사항',
          items: [
            '빠른 개발과 확장을 위한 크로스 플랫폼 필요',
            '학습 데이터의 실시간 동기화 필수',
            'AI 통합은 생산성 향상의 핵심 요소',
            '대용량 파일 처리 및 저장 최적화 필요',
            '안정적인 백업 시스템이 사용자 신뢰에 중요'
          ]
        }
      ]
    },
  
    architecture: {
      items: [
        {
          title: '시스템 아키텍처',
          description:
            '강의, 일정, PDF, 학점, 커뮤니티 도메인을 분리한 서비스 레이어 구조로 확장성과 유지보수성을 확보했습니다.',
          features: [
            'REST 기반 백엔드 서비스 레이어',
            'Firestore 실시간 데이터베이스',
            'Firebase Storage 파일 관리',
            '비즈니스 로직의 도메인 분리',
            'PM2 기반 프로덕션 프로세스 관리'
          ]
        },
        {
          title: '주요 사용자 플로우',
          userFlows: [
            {
              name: '강의 녹음 및 전사',
              iconKey: 'Lecture Recording & Transcription',
              description:
                '강의를 녹음하면 실시간 전사와 함께 요약 및 액션 아이템이 생성됩니다.',
              steps: [
                '녹음 시작',
                '오디오 스트리밍',
                'Whisper 전사',
                'AI 요약 생성',
                '액션 아이템 추출',
                '강의 맥락 챗봇'
              ]
            },
            {
              name: '이미지 기반 일정 추출',
              iconKey: 'Schedule Extraction from Images',
              description:
                '시간표 이미지를 분석해 편집 가능한 캘린더 일정으로 변환합니다.',
              steps: [
                '이미지 업로드',
                'Vision 모델 분석',
                '일정 데이터 추출',
                '캘린더에서 수정',
                '강의 기록으로 변환',
                'Google Calendar 연동(선택)'
              ]
            },
            {
              name: 'PDF 분석 및 챗봇',
              iconKey: 'PDF Analysis & Chatbot',
              description:
                'PDF 문서를 분석해 문맥 기반 질의응답을 제공합니다.',
              steps: [
                'PDF 업로드',
                '텍스트 추출',
                '안전하게 저장',
                'AI 분석',
                '페이지 단위 인사이트',
                '문서 기반 채팅'
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
            { usage: '주요 액션 및 강조' },
            { usage: '보조 텍스트 및 표면' },
            { usage: '성공·경고 상태' },
            { usage: '학습에 집중할 수 있는 캔버스' }
          ],
          components: [
            {
              title: 'UI 컴포넌트',
              iconKey: 'UI Components',
              description: '접근성과 재사용성을 고려한 UI 프리미티브'
            },
            {
              title: '기능 컴포넌트',
              iconKey: 'Feature Components',
              description: '도메인별로 구성된 기능 컴포넌트'
            },
            {
              title: '레이아웃 컴포넌트',
              iconKey: 'Layout Components',
              description: '내비게이션과 반응형 화면 구조'
            },
            {
              title: '서비스 레이어',
              iconKey: 'Service Layer',
              description: '비즈니스 로직 및 API 처리'
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
            'React Native + Expo',
            'Expo Router 기반 파일 라우팅',
            'TypeScript',
            'NativeWind(Tailwind CSS)',
            'React Context API',
            'PDF 뷰어 통합'
          ]
        },
        {
          title: '백엔드 및 API',
          iconKey: 'Backend & API',
          items: [
            'Node.js + Express.js',
            'Firestore NoSQL 데이터베이스',
            'Firebase Storage',
            '100개 이상의 REST API',
            'PM2 프로덕션 관리'
          ]
        },
        {
          title: '외부 연동',
          iconKey: 'Integrations',
          items: [
            'OpenAI (Whisper, GPT-4o-mini, GPT-3.5-turbo, Vision)',
            'Firebase Authentication',
            'Google Calendar API',
            'Google Drive 자동 백업',
            'PDF 파싱 서비스'
          ]
        }
      ]
    },
  
    keyFeatures: {
      metrics: [
        { title: '100+ API', description: '완전 구현된 REST 엔드포인트' },
        { title: '크로스 플랫폼', description: 'iOS·Android·Web 지원' },
        { title: 'AI 모델', description: '다수의 OpenAI 모델 통합' },
        { title: 'UI 컴포넌트', description: '50개 이상의 재사용 컴포넌트' }
      ],
      userFeatures: [
        {
          title: 'AI 강의 전사',
          iconKey: 'AI Lecture Transcription',
          items: [
            '실시간 강의 녹음 및 전사',
            'AI 요약 및 액션 아이템',
            '강의 맥락 기반 챗봇'
          ]
        },
        {
          title: '스마트 일정 관리',
          iconKey: 'Smart Scheduling',
          items: [
            '이미지 기반 일정 추출',
            '드래그 앤 드롭 캘린더',
            'Google Calendar 연동'
          ]
        },
        {
          title: 'PDF 분석 및 채팅',
          iconKey: 'PDF Analysis & Chat',
          items: [
            'PDF 업로드 및 텍스트 추출',
            '문맥 기반 AI 분석',
            '인터랙티브 문서 챗봇'
          ]
        }
      ],
      engineeringFeatures: [
        {
          title: '인프라',
          iconKey: 'Infrastructure',
          items: [
            '서비스 레이어 아키텍처',
            '자동 백업 시스템',
            '보안 파일 처리',
            '프로덕션 모니터링'
          ]
        },
        {
          title: '성능',
          iconKey: 'Performance',
          items: [
            'Firestore 실시간 동기화',
            '최적화된 파일 업로드',
            '효율적인 PDF 파싱'
          ]
        }
      ]
    },
  
    challenges: {
      challenges: [
        {
          challenge: '실시간 오디오 전사의 지연 시간',
          solution:
            'Whisper 청크 스트리밍을 적용해 낮은 지연과 높은 정확도를 동시에 확보했습니다.'
        },
        {
          challenge: '대용량 PDF 처리',
          solution:
            'Firebase Storage와 최적화된 텍스트 추출로 성능을 개선했습니다.'
        },
        {
          challenge: '크로스 플랫폼 UI 일관성',
          solution:
            'Expo와 NativeWind를 사용해 UI 로직을 공유했습니다.'
        },
        {
          challenge: '이미지 기반 일정 추출 정확도',
          solution:
            'Vision 프롬프트를 개선하고 사용자 확인 단계를 추가했습니다.'
        },
        {
          challenge: '데이터 안정성과 백업',
          solution:
            '스케줄 기반 Google Drive 자동 백업 시스템을 구축했습니다.'
        }
      ]
    },
  
    results: {
      metrics: [
        '100개 이상의 REST API 구축',
        '크로스 플랫폼 지원 달성',
        '다중 AI 모델 안정적 통합',
        '50개 이상의 UI 컴포넌트 구축',
        '자동 백업을 통한 데이터 안정성 확보'
      ],
      description:
        'Friendly는 강의, 일정, 학습 자료 관리를 하나로 통합한 AI 기반 학습 생산성 플랫폼입니다. 모듈형 아키텍처와 크로스 플랫폼 설계를 통해 확장성과 유지보수성을 동시에 확보했습니다.'
    },
  
    learnings: {
      cards: [
        {
          title: '크로스 플랫폼 엔지니어링',
          iconKey: 'Cross-Platform Engineering',
          description: '모바일과 웹을 단일 코드베이스로 지원하는 구조를 설계했습니다.'
        },
        {
          title: 'AI 통합',
          iconKey: 'AI Integration',
          description: '실시간 전사와 분석을 위해 다양한 AI 모델을 연동했습니다.'
        },
        {
          title: '서비스 아키텍처',
          iconKey: 'Service Architecture',
          description: '비즈니스 로직을 서비스 레이어로 분리해 확장성을 높였습니다.'
        },
        {
          title: '프로덕션 시스템',
          iconKey: 'Production Systems',
          description: '모니터링과 자동 백업을 포함한 안정적인 운영 환경을 구축했습니다.'
        }
      ]
    },
  
    techStack: {
      categories: [
        {
          category: '프론트엔드',
          items: ['React Native', 'Expo', 'TypeScript', 'Tailwind CSS']
        },
        {
          category: '백엔드',
          items: ['Node.js', 'Express.js', 'Firebase']
        },
        {
          category: 'AI 및 연동',
          items: ['OpenAI', 'Google APIs']
        },
        {
          category: '도구',
          items: ['GitHub', 'Figma']
        }
      ]
    },
  
    links: {
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/nukktae/friendly' },
        { label: 'Live Site', url: 'https://friendlykr.com' }
      ],
      figmaUrl: '',
      caseStudyUrl: ''
    }
  };
  