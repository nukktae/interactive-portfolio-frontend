// Korean content file: All user-facing text strings in Korean

export const awsContentModerationKO = {
    overview: {
      paragraphs: [
        {
          type: 'text',
          content: [
            { type: 'span', text: 'AWS Content Moderation System', className: 'font-semibold text-foreground' },
            '은 AWS Rekognition을 활용해 실시간 영상 스트림에서 부적절한 콘텐츠를 자동으로 감지하고 차단하는 실시간 영상 콘텐츠 모더레이션 플랫폼입니다.'
          ]
        },
        {
          type: 'text',
          content:
            '영상 스트림을 준실시간으로 처리하며, 사전 학습된 머신러닝 모델을 통해 프레임 단위 분석을 수행하고 신뢰도 점수와 함께 모더레이션 결과 및 자동 알림을 제공합니다.'
        },
        {
          type: 'text',
          content:
            'AWS CDK 기반 Infrastructure as Code를 적용한 서버리스·이벤트 기반 아키텍처로 설계되었으며, Flask 영상 처리, AWS Lambda, Kinesis Video Streams, DynamoDB, CloudWatch, SNS를 결합해 확장성과 저지연 성능, 운영 안정성을 동시에 확보했습니다.'
        }
      ]
    },
  
    role: {
      roles: [
        {
          title: '백엔드 및 인프라 엔지니어링',
          iconKey: 'Backend & Infrastructure Engineering',
          responsibilities: [
            'AWS CDK(TypeScript)를 활용한 서버리스 아키텍처 설계',
            'OpenCV 기반 Flask 애플리케이션으로 실시간 영상 프레임 처리',
            'Rekognition 연동 AWS Lambda 함수 구현',
            'Kinesis Video Streams, DynamoDB, CloudWatch, SNS 구성',
            'EventBridge 규칙을 통한 자동 스트림 처리 파이프라인 구축',
            '영상 스트림 생명주기 관리를 위한 API Gateway 엔드포인트 구현'
          ],
          impacts: [
            '서버리스 아키텍처로 99.9% 가용성 달성',
            'Infrastructure as Code 도입으로 인프라 구축 시간 80% 단축',
            '프레임 처리 지연 200ms 이하의 실시간 모더레이션 구현'
          ]
        },
        {
          title: '풀스택 개발',
          iconKey: 'Full-Stack Development',
          responsibilities: [
            '실시간 영상 피드 및 모더레이션 결과를 표시하는 웹 대시보드 구축',
            '신뢰도 지표 및 트렌드 분석을 위한 인터랙티브 차트 구현',
            '실시간 UI 반영을 위한 이벤트 기반 프론트엔드 구조 설계',
            'CloudWatch 메트릭 API 연동을 통한 실시간 모니터링',
            'AWS 디자인 가이드라인을 반영한 반응형 UI 구현'
          ],
          impacts: [
            '1초 주기의 실시간 대시보드 업데이트 제공',
            '모더레이션 정확도 및 시스템 상태 가시성 향상',
            '운영 관점의 모니터링 및 분석 환경 제공'
          ]
        }
      ]
    },
  
    problem: {
      summary:
        '조직은 실시간 영상 콘텐츠에서 부적절한 콘텐츠가 사용자에게 노출되기 전에 자동으로 감지하고 차단할 수 있는 확장 가능한 모더레이션 솔루션이 필요합니다.',
      content:
        '기존 콘텐츠 모더레이션은 인력 중심의 수동 검수에 의존해 왔으며, 이는 비용이 높고 실시간 영상 스트리밍 환경에서는 확장성이 부족합니다. 수동 검수는 지연을 발생시키고, 대규모 라이브 스트림 환경에서는 위험 콘텐츠를 즉시 차단하기 어렵습니다.',
      painPoints: [
        { description: '수동 모더레이션은 실시간 영상 스트림을 처리하기 어려움' },
        { description: '인력 및 인프라 운영 비용이 매우 높음' },
        { description: '부적절한 콘텐츠에 대한 실시간 알림 부족' },
        { description: '영상 트래픽 증가에 따른 확장성 한계' },
        { description: '모더레이션 성능과 추이를 한눈에 파악할 수 있는 대시보드 부재' }
      ],
      whyItMatters:
        '부적절한 콘텐츠는 플랫폼 신뢰도 저하, 정책 위반, 법적 리스크로 이어질 수 있습니다. 실시간 자동 모더레이션은 비용을 절감하면서도 대규모 환경에서 안전한 콘텐츠 품질을 유지할 수 있게 합니다.'
    },
  
    goals: {
      goals: [
        { title: '실시간 처리', iconKey: 'Real-Time Processing', metric: '프레임당 지연 시간 200ms 이하' },
        { title: 'AI 기반 감지', iconKey: 'AI-Powered Detection', metric: '50개 이상의 모더레이션 카테고리 감지' },
        { title: '확장성', iconKey: 'Scalability', metric: '자동 확장 가능한 라이브 스트림 처리' },
        { title: '신뢰성', iconKey: 'Reliability', metric: '99.9% 가용성' },
        { title: '관측 가능성', iconKey: 'Observability', metric: '실시간 대시보드 및 알림' },
        { title: '비용 효율성', iconKey: 'Cost Efficiency', metric: '인프라 구축 시간 80% 단축' }
      ]
    },
  
    research: {
      insights: [
        {
          title: '서비스 선택',
          items: [
            '사전 학습된 모더레이션 라벨과 신뢰도 점수를 제공하는 Rekognition 선택',
            '실시간 영상 수집을 위해 Kinesis Video Streams 채택',
            '저지연 자동 확장이 가능한 DynamoDB 선택',
            '메트릭·로그·대시보드를 위한 CloudWatch 활용',
            '실시간 알림 및 이벤트 처리에 SNS와 EventBridge 사용'
          ]
        },
        {
          title: '아키텍처 결정',
          items: [
            '자동 확장과 비용 효율성을 위한 서버리스 아키텍처 채택',
            'AWS CDK 기반 Infrastructure as Code 적용',
            'EventBridge 기반 이벤트 중심 처리 구조 설계',
            '정확도와 비용의 균형을 위한 프레임 샘플링 전략 적용',
            '관심사 분리를 위한 멀티 스택 CDK 구조'
          ]
        }
      ]
    },
  
    architecture: {
      items: [
        {
          title: '시스템 아키텍처',
          description:
            '영상 수집, 분석, 저장, 모니터링을 분리한 서버리스·이벤트 기반 구조로 확장성과 유지보수성을 확보했습니다.',
          features: [
            'OpenCV 기반 Flask 영상 캡처',
            'AWS Rekognition 콘텐츠 모더레이션',
            '신뢰도 점수를 포함한 DynamoDB 결과 저장',
            'CloudWatch 메트릭 및 대시보드',
            '부적절 콘텐츠에 대한 SNS 알림',
            'Kinesis Video Streams 영상 수집',
            'EventBridge 기반 Lambda 트리거',
            'API Gateway를 통한 스트림 관리'
          ]
        },
        {
          title: '주요 사용자 플로우',
          userFlows: [
            {
              name: '실시간 영상 모더레이션',
              iconKey: 'Real-Time Video Moderation',
              description:
                '라이브 영상 스트림을 실시간으로 분석하고 부적절 콘텐츠를 감지합니다.',
              steps: [
                '영상 프레임 캡처',
                '프레임 샘플링',
                'Rekognition 모더레이션 분석',
                '타임스탬프와 함께 결과 저장',
                '대시보드 실시간 업데이트',
                '부적절 콘텐츠 알림 전송'
              ]
            },
            {
              name: '스트림 관리',
              iconKey: 'Stream Management',
              description:
                'API 기반으로 스트림을 생성·관리합니다.',
              steps: [
                'API를 통한 스트림 생성',
                'Kinesis 스트림 프로비저닝',
                'EventBridge 처리 스케줄 설정',
                'Lambda 분석 실행',
                '결과 저장 및 알림',
                '스트림 삭제 및 리소스 정리'
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
            { usage: '주요 내비게이션 및 구조' },
            { usage: '경고 및 위험 상태 강조' },
            { usage: '인터랙션 요소 및 링크' },
            { usage: '신뢰도 기반 심각도 표시' }
          ],
          components: [
            {
              title: '라이브 영상 피드',
              iconKey: 'Live Video Feed',
              description: '실시간 스트림 미리보기 및 처리 상태 표시'
            },
            {
              title: '모더레이션 패널',
              iconKey: 'Moderation Panel',
              description: '감지된 라벨과 신뢰도 점수 표시'
            },
            {
              title: '분석 차트',
              iconKey: 'Analytics Charts',
              description: '시간별 신뢰도 변화 시각화'
            },
            {
              title: '이벤트 업데이트',
              iconKey: 'Event Updates',
              description: '페이지 새로고침 없는 실시간 UI 반영'
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
            '모듈형 JavaScript 구조',
            '이벤트 기반 UI 업데이트',
            '인터랙티브 차트 시각화',
            '반응형 대시보드 레이아웃',
            'REST API 연동'
          ]
        },
        {
          title: '백엔드 및 API',
          iconKey: 'Backend & API',
          items: [
            'Flask 기반 영상 처리 및 API',
            'OpenCV 프레임 추출',
            'AWS SDK 연동',
            'AWS Lambda 서버리스 처리',
            'API Gateway HTTP 엔드포인트'
          ]
        },
        {
          title: 'AWS 연동',
          iconKey: 'AWS Integrations',
          items: [
            'Amazon Rekognition',
            'Amazon Kinesis Video Streams',
            'Amazon DynamoDB',
            'Amazon CloudWatch',
            'Amazon SNS',
            'Amazon EventBridge',
            'AWS Lambda',
            'AWS CDK'
          ]
        }
      ]
    },
  
    keyFeatures: {
      metrics: [
        { title: '지연 시간', description: '프레임당 200ms 이하 처리' },
        { title: '감지 범위', description: '50개 이상의 모더레이션 카테고리' },
        { title: '가용성', description: '99.9% 시스템 안정성' },
        { title: '비용 효율', description: '인프라 구축 시간 80% 단축' }
      ],
      userFeatures: [
        {
          title: '실시간 대시보드',
          iconKey: 'Real-Time Dashboard',
          items: [
            '라이브 영상 미리보기',
            '신뢰도 기반 모더레이션 결과',
            '트렌드 및 히스토리 분석',
            '알림 상태 확인'
          ]
        },
        {
          title: '스트림 운영',
          iconKey: 'Stream Operations',
          items: [
            'API 기반 스트림 생성 및 삭제',
            '자동 처리 스케줄',
            '다중 스트림 지원'
          ]
        }
      ],
      engineeringFeatures: [
        {
          title: '서버리스 인프라',
          iconKey: 'Serverless Infrastructure',
          items: [
            'AWS CDK 기반 Infrastructure as Code',
            '이벤트 중심 처리 구조',
            '자동 확장 및 모니터링'
          ]
        },
        {
          title: '성능 최적화',
          iconKey: 'Performance Optimization',
          items: [
            '프레임 샘플링 전략',
            'DynamoDB 쿼리 최적화',
            '저지연 Lambda 실행'
          ]
        }
      ]
    },
  
    challenges: {
      challenges: [
        {
          challenge: '실시간 성능과 비용 효율성의 균형',
          solution:
            '프레임 샘플링과 커스텀 CloudWatch 메트릭을 통해 비용을 줄이면서 정확도를 유지했습니다.'
        },
        {
          challenge: '다수 AWS 서비스로 구성된 복잡한 인프라 관리',
          solution:
            '멀티 스택 구조의 AWS CDK를 적용해 관심사를 분리하고 배포를 단순화했습니다.'
        },
        {
          challenge: '백엔드 처리와 프론트엔드 UI 동기화',
          solution:
            '이벤트 기반 업데이트 구조와 오류 복구 로직을 구현했습니다.'
        },
        {
          challenge: '시간 기반 DynamoDB 조회 성능',
          solution:
            'GSI와 페이지네이션을 적용해 시간 범위 조회를 최적화했습니다.'
        }
      ]
    },
  
    results: {
      metrics: [
        '프레임당 200ms 이하 모더레이션 달성',
        '서버리스 기반 99.9% 가용성',
        '50개 이상의 콘텐츠 카테고리 감지',
        'SNS 기반 자동 알림 시스템 구축',
        '운영 가능한 모니터링 대시보드 완성'
      ],
      description:
        '본 시스템은 높은 정확도와 낮은 지연 시간의 실시간 영상 모더레이션을 안정적으로 제공합니다. 서버리스 아키텍처를 통해 확장성과 비용 효율성을 동시에 확보했으며, 실제 운영 환경에 적용 가능한 구조로 설계되었습니다.'
    },
  
    learnings: {
      cards: [
        {
          title: '서버리스 시스템 설계',
          iconKey: 'Serverless System Design',
          description: '확장성과 지연 시간을 고려한 이벤트 기반 아키텍처를 설계했습니다.'
        },
        {
          title: 'Infrastructure as Code',
          iconKey: 'Infrastructure as Code',
          description: 'AWS CDK를 활용해 복잡한 인프라를 코드로 관리했습니다.'
        },
        {
          title: '실시간 데이터 시각화',
          iconKey: 'Real-Time Visualization',
          description: '백엔드 상태를 즉시 반영하는 대시보드를 구현했습니다.'
        },
        {
          title: '클라우드 서비스 통합',
          iconKey: 'Cloud Service Integration',
          description: '다수의 AWS 서비스를 안정적으로 연동했습니다.'
        }
      ]
    },
  
    techStack: {
      categories: [
        {
          category: '프론트엔드',
          items: ['JavaScript', 'Chart.js', 'HTML/CSS']
        },
        {
          category: '백엔드',
          items: ['Python', 'Flask', 'OpenCV', 'Node.js', 'TypeScript']
        },
        {
          category: 'AWS',
          items: [
            'AWS CDK',
            'AWS Lambda',
            'Amazon Rekognition',
            'Amazon Kinesis Video Streams',
            'Amazon DynamoDB',
            'Amazon CloudWatch',
            'Amazon SNS',
            'Amazon EventBridge',
            'API Gateway'
          ]
        },
        {
          category: '도구',
          items: ['Git', 'AWS SDK']
        }
      ]
    },
  
    links: {
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/2024PBL-AWS-project/ContentModeration' },
        { label: 'Demo Video', url: 'https://github.com/2024PBL-AWS-project/ContentModeration/issues/1' }
      ],
      figmaUrl: '',
      caseStudyUrl: ''
    }
  };
  