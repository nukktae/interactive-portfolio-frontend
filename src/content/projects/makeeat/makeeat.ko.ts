// Korean content file: All user-facing text strings in Korean

export const makeeatKO = {
  overview: {
    paragraphs: [
      {
        type: 'text',
        content:
          'MakeEat은 사용 가능한 재료를 개인화된 맛있는 레시피로 변환하여 가정 요리를 혁신하는 혁신적인 AI 기반 모바일 애플리케이션입니다. 크로스 플랫폼 호환성을 위해 Flutter로 구축된 이 앱은 최첨단 AI 기술과 직관적인 사용자 경험 디자인을 결합합니다.'
      },
      {
        type: 'text',
        content:
          '이 애플리케이션은 지능형 레시피 생성을 위한 OpenAI의 GPT 모델, 영수증 스캔을 위한 고급 OCR 기술, 강력한 백엔드 서비스를 위한 Firebase를 활용합니다. 사용자는 식료품 영수증을 스캔하거나, 재료를 수동으로 입력하거나, 식료품 저장소에서 선택하여 식이 선호도, 알레르기 및 영양 목표에 맞춘 맞춤형 레시피를 생성할 수 있습니다.'
      },
      {
        type: 'text',
        content:
          '식사 계획 캘린더, 즐겨찾는 레시피 관리, FatSecret API를 통한 영양 추적, 푸시 알림을 포함한 기능으로 MakeEat은 식사 준비 및 식이 관리에 대한 포괄적인 솔루션을 제공합니다. 앱은 여러 인증 방법, 개인화된 온보딩 플로우 및 오프라인 레시피 저장 기능을 지원합니다.'
      }
    ]
  },
  role: {
    roles: [
      {
        title: '풀스택 모바일 개발자',
        iconKey: 'Code',
        responsibilities: [
          '전체 Flutter 모바일 애플리케이션 아키텍처 설계 및 구현',
          '식이 제약 조건을 포함한 지능형 레시피 생성을 위한 OpenAI GPT API 통합',
          '맞춤형 백엔드 API를 통한 OCR 기술을 사용한 영수증 스캔 기능 구축',
          '이메일/비밀번호 및 Google Sign-In을 포함한 Firebase 인증 시스템 개발',
          '상태 관리를 위한 Provider를 사용한 MVVM 아키텍처 패턴 구현',
          '사용자 선호도 수집을 포함한 포괄적인 온보딩 플로우 생성',
          '레시피 스케줄링을 포함한 식사 계획 캘린더 시스템 구축',
          '영양 정보 추적을 위한 FatSecret API 통합'
        ],
        impacts: [
          'iOS 및 Android를 지원하는 크로스 플랫폼 앱 성공적으로 출시',
          '수동 검색에서 즉각적인 AI 기반 결과로 레시피 생성 시간 단축',
          '개인화된 레시피 추천을 통한 사용자 참여 개선',
          '영수증 OCR 기술을 통한 원활한 재료 입력 활성화'
        ]
      },
      {
        title: 'UI/UX 디자이너 및 제품 아키텍트',
        iconKey: 'Smartphone',
        responsibilities: [
          '맞춤형 그라디언트 테마 및 DM Sans 타이포그래피를 포함한 직관적인 사용자 인터페이스 설계',
          '레시피 구축, 식사 계획 및 선호도를 위한 포괄적인 사용자 플로우 생성',
          '다양한 화면 크기에 대한 반응형 디자인 패턴 구현',
          '일관된 디자인 시스템을 가진 재사용 가능한 컴포넌트 라이브러리 구축',
          '식이 선호도 및 알레르기 수집을 위한 온보딩 경험 설계',
          '하단 탭 바 및 중첩 라우팅을 포함한 부드러운 네비게이션 생성',
          '향상된 사용자 경험을 위한 애니메이션 및 전환 구현'
        ],
        impacts: [
          '직관적이고 현대적인 인터페이스 디자인으로 높은 사용자 만족도 달성',
          '간소화된 선호도 수집을 통한 온보딩 마찰 감소',
          '시각적으로 매력적인 레시피 카드 및 세부 정보로 레시피 발견 개선',
          '명확한 네비게이션 및 오류 처리를 통한 접근성 향상'
        ]
      }
    ]
  },
  problem: {
    summary: '가정 요리사들은 식이 제한, 영양 목표 및 시간 제약을 관리하면서 사용 가능한 재료로 식사를 만드는 데 어려움을 겪습니다.',
    content: '전통적인 레시피 앱은 사용자가 특정 재료를 염두에 두거나 레시피를 별도로 검색해야 합니다. 이는 사용자가 식료품 저장소에 무작위 재료를 가지고 있거나 식료품 쇼핑 후에 마찰을 만듭니다. 또한 식이 제한, 알레르기 또는 특정 영양 목표를 가진 사용자는 모든 요구사항을 충족하는 레시피를 찾기 어렵습니다. 영수증 스캔, 재료 관리 및 레시피 생성 간의 통합 부족은 단편적인 요리 경험을 만듭니다.',
    painPoints: [
      { description: '사용자는 사용 가능한 재료와 일치하지 않는 레시피를 검색하는 데 시간을 낭비함' },
      { description: '여러 식이 제한 및 알레르기를 동시에 수용하는 레시피를 찾기 어려움' },
      { description: '수동 재료 입력은 특히 쇼핑 후에 지루하고 오류가 발생하기 쉬움' },
      { description: '영양 인식 부족으로 칼로리 및 매크로 목표 달성의 어려움으로 이어짐' },
      { description: '식사를 계획하고 요리 일정을 구성하는 체계적인 방법 없음' },
      { description: '식사 계획, 레시피 발견 및 영양 추적을 위한 여러 앱에 걸친 단편적인 경험' }
    ],
    whyItMatters: '가정 요리, 건강 의식 및 음식 낭비 감소에 대한 관심이 증가함에 따라 사용 가능한 재료와 맛있고 개인화된 식사 사이의 격차를 메우는 지능형 솔루션이 필요합니다. MakeEat은 AI를 활용하여 식사 계획 및 레시피 발견을 단순화하는 올인원 플랫폼을 제공하여 이러한 문제점을 해결합니다.'
  },
  goals: {
    goals: [
      { title: '레시피 생성 속도', iconKey: 'Zap', metric: '10초 이내에 개인화된 레시피 생성' },
      { title: 'AI 정확도', iconKey: 'Brain', metric: '사용자 선호도 및 재료와 일치하는 95% 이상의 레시피 관련성' },
      { title: '사용자 참여', iconKey: 'TrendingUp', metric: '식사 계획 기능을 통한 80% 이상의 주간 활성 사용자 목표' },
      { title: '온보딩 완료', iconKey: 'Users', metric: '사용자 선호도 온보딩에 대해 75% 이상의 완료율 달성' },
      { title: '영수증 OCR 정확도', iconKey: 'BarChart3', metric: '영수증 이미지에서 재료의 90% 이상을 정확하게 추출' },
      { title: '앱 스토어 평점', iconKey: 'Award', metric: 'iOS 및 Android 플랫폼에서 4.5 이상의 별점 유지' }
    ]
  },
  research: {
    insights: [
      {
        title: '사용자 행동 패턴',
        items: [
          '사용자는 수동 재료 입력보다 영수증 스캔을 선호함 (3배 빠름)',
          '식이 제한 관리가 가장 많이 요청된 기능',
          '식사 계획 캘린더가 앱 유지율을 크게 증가시킴',
          '사용자는 정확한 칼로리 요구사항과 일치하는 레시피를 원함',
          '즐겨찾기 기능은 반복 요리에 필수적임',
          '식사 알림을 위한 푸시 알림이 일일 참여를 개선함'
        ]
      },
      {
        title: '기술적 요구사항',
        items: [
          'OpenAI GPT 모델이 대안 대비 최고의 레시피 생성 품질 제공',
          '영수증 OCR 처리를 위한 맞춤형 백엔드 API 필요',
          'Firebase Auth가 원활한 크로스 플랫폼 인증 제공',
          'Firestore가 식사 계획 데이터에 대한 실시간 동기화 활성화',
          '오프라인 레시피 저장을 위한 SharedPreferences 충분함',
          'FatSecret API가 포괄적인 영양 데이터 제공'
        ]
      },
      {
        title: '디자인 인사이트',
        items: [
          '그라디언트 배경이 현대적이고 식욕을 돋우는 시각적 매력 생성',
          'DM Sans 타이포그래피가 레시피 지침에 대한 가독성 향상',
          '카드 기반 레이아웃이 레시피 탐색에 가장 적합함',
          '색상 코딩된 식사 유형이 캘린더 시각화 개선',
          '단계별 레시피 빌더가 사용자 압도 감소',
          '크고 명확한 재료 선택이 사용성 개선'
        ]
      }
    ]
  },
  architecture: {
    items: [
      {
        title: '애플리케이션 아키텍처',
        description: 'MakeEat은 서비스 계층 추상화를 가진 MVVM(Model-View-ViewModel) 아키텍처를 따릅니다. 앱은 명확한 관심사 분리로 구성됩니다: 화면(UI), 서비스(비즈니스 로직), 모델(데이터 구조), 위젯(재사용 가능한 컴포넌트), 유틸리티(헬퍼 함수).',
        features: [
          '의존성 주입을 위한 Provider를 사용한 서비스 로케이터 패턴',
          '데이터 관리 추상화를 위한 리포지토리 패턴',
          '반응형 상태 관리를 위한 옵저버 패턴',
          '기능 기반 그룹화를 포함한 모듈형 화면 구성',
          '일관성을 위한 재사용 가능한 위젯 컴포넌트',
          'API 상호작용을 위한 중앙화된 서비스 클래스'
        ],
        userFlows: undefined
      },
      {
        title: '사용자 플로우',
        description: '',
        features: [],
        userFlows: [
          {
            name: '레시피 생성 플로우',
            iconKey: 'ChefHat',
            description: '재료 입력부터 개인화된 레시피까지의 완전한 여정',
            steps: [
              '사용자가 식사 유형 선택(아침, 점심, 저녁, 간식)',
              '요리 선호도 선택(이탈리아, 멕시코, 인도 등)',
              '식이 제한 및 알레르기 설정',
              '인분 크기 및 칼로리 목표 지정',
              '수동 입력 또는 영수증 스캔을 통해 재료 추가',
              '확인 화면에서 선호도 검토',
              'AI가 영양 정보를 포함한 개인화된 레시피 생성',
              '사용자가 요리 지침과 함께 레시피 세부 정보 확인',
              '즐겨찾기에 저장하거나 식사 계획에 추가 가능'
            ]
          },
          {
            name: '영수증 스캔 플로우',
            iconKey: 'Camera',
            description: '식료품 영수증에서 원활한 재료 추출',
            steps: [
              '사용자가 재료 선택 화면에서 카메라 열기',
              '식료품 영수증 사진 촬영',
              '이미지를 백엔드 OCR API 엔드포인트로 전송',
              '백엔드가 이미지를 처리하고 재료 목록 추출',
              '사용자가 관련 재료 검토 및 선택',
              '선택한 재료가 레시피 빌더에 추가됨',
              '표준 레시피 생성 플로우 계속'
            ]
          },
          {
            name: '온보딩 플로우',
            iconKey: 'Users',
            description: '개인화를 위한 포괄적인 사용자 선호도 수집',
            steps: [
              '앱 기능을 소개하는 환영 슬라이드',
              '사용자가 계정 생성(이메일/비밀번호 또는 Google Sign-In)',
              '식이 선택 화면(클래식, 케토, 비건 등)',
              '사용자 정의 입력 옵션을 포함한 알레르기 선택',
              '싫어함/선호도 지정',
              '알림 권한을 포함한 식사 알림 설정',
              '칼로리 및 영양 목표 구성',
              '완료 화면 및 홈으로 네비게이션'
            ]
          },
          {
            name: '식사 계획 플로우',
            iconKey: 'Calendar',
            description: '체계적인 식사 스케줄링 및 관리',
            steps: [
              '사용자가 홈 화면에서 월간 캘린더 확인',
              '식사 계획을 위한 날짜 선택',
              '선택한 날짜에 대한 "레시피 추가" 버튼 탭',
              '레시피 빌더를 통해 이동하거나 즐겨찾기에서 선택',
              '생성된 레시피가 자동으로 캘린더에 추가됨',
              '선택한 날짜의 모든 식사 확인 가능',
              '캘린더 보기에서 직접 레시피 세부 정보 액세스',
              '식사 계획에서 식사 편집 또는 제거'
            ]
          }
        ]
      }
    ]
  },
  designSystem: {
    items: [
      {
        title: '색상 시스템',
        type: 'colors',
        colorUsages: [
          { usage: '주요 작업, 강조, 선택된 상태' },
          { usage: '따뜻하고 식욕을 돋우는 느낌을 위한 메인 앱 배경' },
          { usage: '제목 및 중요한 콘텐츠를 위한 주요 텍스트' },
          { usage: '보조 텍스트, 설명, 메타데이터' },
          { usage: '카드 테두리, 구분선, 입력 테두리' },
          { usage: '카드 배경, 입력 필드, 대비 요소' }
        ],
        components: undefined
      },
      {
        title: '컴포넌트 구조',
        type: 'components',
        colorUsages: undefined,
        components: [
          { title: '레시피 카드', description: '레시피 제목, 이미지, 조리 시간 및 빠른 작업을 표시하는 재사용 가능한 카드. 네비게이션을 위한 둥근 모서리, 그림자 효과 및 제스처 처리 기능.', iconKey: 'Sparkles' },
          { title: '하단 네비게이션 바', description: '4개의 주요 섹션을 가진 맞춤형 하단 네비게이션: 홈, 레시피 빌더, 즐겨찾기 및 프로필. 아이콘 표시기 및 부드러운 전환 포함.', iconKey: 'Component' },
          { title: '재료 선택 그리드', description: '재료 선택 및 관리를 위한 대화형 그리드 시스템. 추가/제거 기능을 가진 칩 기반 표시 지원.', iconKey: 'LayoutTemplate' },
          { title: '식사 캘린더 위젯', description: '날짜 선택, 레시피 표시기 및 네비게이션 컨트롤을 포함한 월간 캘린더 보기. 선택한 날짜 및 계획된 식사가 있는 날짜 강조.', iconKey: 'Layers' },
          { title: '레시피 빌더 단계', description: '진행 표시기를 가진 다단계 양식 컴포넌트. 사용자를 식사 유형, 선호도, 재료 및 확인 화면을 통해 안내합니다.', iconKey: 'Workflow' },
          { title: '영양 정보 표시', description: '파이 차트 및 진행 표시줄을 사용한 매크로 및 미세 영양소의 시각적 표현. FatSecret API 데이터와 통합.', iconKey: 'BarChart3' }
        ]
      },
      {
        title: '타이포그래피',
        type: 'components',
        colorUsages: undefined,
        components: [
          { title: '주요 폰트: DM Sans', description: '본문 텍스트, 제목 및 UI 요소에 대해 앱 전체에서 사용됩니다. 모든 크기에서 우수한 가독성을 제공합니다.', iconKey: 'FileText' },
          { title: '폰트 두께', description: '본문 텍스트용 일반(400), 레이블용 중간(500), 소제목용 세미볼드(600), 제목용 볼드(700)', iconKey: 'FileText' }
        ]
      }
    ]
  },
  systemArchitecture: {
    categories: [
      {
        title: '프론트엔드 아키텍처',
        iconKey: 'Code',
        items: [
          'Dart 프로그래밍 언어를 가진 Flutter 3.0+ 프레임워크',
          'Provider 상태 관리를 가진 MVVM 아키텍처 패턴',
          '서비스 계층 추상화(AuthService, OpenAIService, ReceiptAnalysisService)',
          '데이터 액세스 및 로컬 저장소를 위한 리포지토리 패턴',
          '재사용성을 위한 위젯 기반 컴포넌트 아키텍처',
          'Material Design 라우팅을 가진 화면 기반 네비게이션',
          'StatefulWidget 및 Provider를 사용한 로컬 상태 관리',
          '오프라인 데이터 지속성을 위한 SharedPreferences',
          'image_picker 및 camera 플러그인을 사용한 이미지 처리',
          '색상 구성표 및 타이포그래피를 가진 맞춤형 테마'
        ]
      },
      {
        title: '백엔드 및 API',
        iconKey: 'Database',
        items: [
          '맞춤형 레시피 생성 API (http://54.173.54.132:8010/api/recipe/generate)',
          '영수증 OCR 분석 API (http://54.173.54.132:8010/api/receipt/analyze)',
          '사용자 관리를 위한 Firebase 인증(이메일/비밀번호, Google Sign-In)',
          '사용자 데이터, 선호도 및 식사 계획을 위한 Cloud Firestore',
          '푸시 알림을 위한 Firebase Cloud Messaging',
          '지능형 레시피 생성을 위한 OpenAI GPT API',
          '레시피 이미지 생성을 위한 OpenAI DALL-E API',
          '포괄적인 영양 정보를 위한 FatSecret API',
          'HTTP 클라이언트를 사용한 RESTful API 통신',
          'API 보안을 위한 Bearer 토큰 인증'
        ]
      },
      {
        title: '통합',
        iconKey: 'Layers',
        items: [
          'Firebase 제품군: Auth, Firestore, Cloud Messaging, Analytics',
          '원활한 인증을 위한 Google Sign-In SDK',
          '레시피 콘텐츠 생성을 위한 OpenAI GPT-3.5/GPT-4',
          '레시피 이미지 생성을 위한 OpenAI DALL-E',
          '영양 데이터를 위한 FatSecret Platform API',
          '영수증 스캔을 위한 카메라 및 이미지 선택기 플러그인',
          '장치 권한 관리를 위한 권한 핸들러',
          '식사 알림을 위한 로컬 알림',
          '영구 로컬 저장소를 위한 SharedPreferences',
          '부드러운 UI 애니메이션을 위한 Flutter Animate',
          '애니메이션 일러스트레이션 및 로딩 상태를 위한 Lottie'
        ]
      }
    ]
  },
  keyFeatures: {
    metrics: [
      { title: '레시피 생성 시간', description: '재료 선택부터 완전한 레시피까지 평균 8-12초' },
      { title: 'OCR 정확도', description: '영수증 이미지에서 재료 추출 정확도 90% 이상' },
      { title: '앱 크기', description: 'iOS 및 Android용 50MB 미만으로 최적화' },
      { title: '오프라인 기능', description: '인터넷 없이 레시피 보기 및 즐겨찾기 관리 100%' }
    ],
    userFeatures: [
      {
        title: 'AI 기반 레시피 생성',
        iconKey: 'Brain',
        items: [
          '사용 가능한 재료에서 즉시 레시피 생성',
          '식이 제한 및 알레르기 필터링',
          '칼로리 및 매크로 영양소 타겟팅',
          '요리 유형 사용자 정의',
          '인분 크기 적응',
          '기술 수준 고려'
        ]
      },
      {
        title: '영수증 스캔 및 OCR',
        iconKey: 'Camera',
        items: [
          '카메라 기반 영수증 캡처',
          '자동 재료 추출',
          '스마트 재료 선택 인터페이스',
          '수동 재료 편집 기능',
          '다양한 영수증 형식 지원'
        ]
      },
      {
        title: '식사 계획 캘린더',
        iconKey: 'Calendar',
        items: [
          '식사 스케줄링을 포함한 월간 캘린더 보기',
          '계획된 식사를 위한 시각적 표시기',
          '특정 날짜에 대한 빠른 레시피 추가',
          '일일 식사 개요 및 관리',
          '날짜별 레시피 구성'
        ]
      },
      {
        title: '즐겨찾기 및 레시피 관리',
        iconKey: 'Heart',
        items: [
          '빠른 액세스를 위해 레시피를 즐겨찾기에 저장',
          '오프라인 보기를 위한 로컬 저장소',
          '전체 지침을 포함한 레시피 세부 정보',
          '영양 정보 표시',
          '레시피용 이미지 생성'
        ]
      },
      {
        title: '개인화된 온보딩',
        iconKey: 'Users',
        items: [
          '식이 선호도 선택(케토, 비건 등)',
          '알레르기 및 불내성 추적',
          '재료 싫어함 지정',
          '식사 알림 구성',
          '칼로리 목표 설정'
        ]
      },
      {
        title: '영양 추적',
        iconKey: 'BarChart3',
        items: [
          '레시피당 칼로리 계산',
          '매크로 영양소 분석(단백질, 탄수화물, 지방)',
          '미세 영양소 정보',
          'FatSecret 데이터베이스와 통합',
          '시각적 영양 차트 및 그래프'
        ]
      },
      {
        title: '푸시 알림',
        iconKey: 'Bell',
        items: [
          '식사 알림 알림',
          '선호도를 기반으로 한 레시피 제안',
          'Firebase Cloud Messaging 통합',
          '사용자 정의 알림 기본 설정',
          '백그라운드 알림 처리'
        ]
      }
    ],
    engineeringFeatures: [
      {
        title: '크로스 플랫폼 아키텍처',
        iconKey: 'Layers',
        items: [
          'iOS 및 Android용 단일 코드베이스',
          '플랫폼별 최적화',
          '플랫폼 간 일관된 UI/UX',
          'Flutter를 사용한 네이티브 성능',
          '빠른 개발을 위한 핫 리로드'
        ]
      },
      {
        title: '상태 관리',
        iconKey: 'Workflow',
        items: [
          '반응형 상태를 위한 Provider 패턴',
          '서비스 기반 아키텍처',
          '중앙화된 인증 상태',
          '효율적인 위젯 재구축',
          '메모리 최적화된 상태 처리'
        ]
      },
      {
        title: 'API 통합',
        iconKey: 'Code',
        items: [
          'RESTful API 통신',
          '오류 처리 및 재시도 로직',
          '요청/응답 로깅',
          '토큰 기반 인증',
          'API 호출을 위한 Async/await 패턴'
        ]
      },
      {
        title: '데이터 지속성',
        iconKey: 'Database',
        items: [
          '로컬 저장소를 위한 SharedPreferences',
          '클라우드 동기화를 위한 Firestore',
          '오프라인 우선 아키텍처',
          '민감한 정보를 위한 데이터 암호화',
          '효율적인 캐싱 전략'
        ]
      },
      {
        title: '이미지 처리',
        iconKey: 'Camera',
        items: [
          '권한을 포함한 카메라 통합',
          '갤러리 액세스를 위한 이미지 선택기',
          '이미지 압축 및 최적화',
          'OCR을 위한 멀티파트 파일 업로드',
          '생성된 이미지 캐싱'
        ]
      },
      {
        title: '보안 및 인증',
        iconKey: 'Shield',
        items: [
          'Firebase 인증 통합',
          '보안 API 키 관리',
          '토큰 새로고침 처리',
          '권한 기반 액세스 제어',
          '보안 로컬 저장소 관행'
        ]
      }
    ]
  },
  challenges: {
    challenges: [
      {
        problem: '영수증 스캔을 위한 OCR 정확도 - 영수증 이미지는 품질, 조명 조건 및 형식이 다양하여 정확한 재료 추출이 어렵습니다.',
        solution: '강력한 이미지 전처리를 구현하고, 전문 백엔드 OCR 서비스와 통합하며, 수동 수정을 허용하는 사용자 검토/선택 단계를 추가했습니다. 이 두 단계 프로세스는 사용자 제어를 유지하면서 90% 이상의 정확도를 보장합니다.'
      },
      {
        problem: '여러 제약 조건을 가진 복잡한 레시피 생성 - 식이 제한, 알레르기, 칼로리 제한 및 사용 가능한 재료를 동시에 만족하는 레시피를 생성하는 것은 정교한 프롬프트 엔지니어링이 필요합니다.',
        solution: '명확한 제약 계층을 가진 구조화된 프롬프트 템플릿을 개발하고, 검증 계층을 구현하며, 폴백 메커니즘을 생성했습니다. 더 나은 추론 능력과 구조화된 JSON 출력 파싱을 위해 OpenAI GPT-4를 사용했습니다.'
      },
      {
        problem: '여러 화면에 걸친 상태 관리 - 레시피 빌더 플로우는 상태 지속성 및 효율적인 네비게이션이 필요한 5개 이상의 화면에 걸쳐 있습니다.',
        solution: '서비스 계층 추상화를 가진 Provider 기반 상태 관리를 구현했습니다. 화면 간 상태를 관리하는 RecipeBuilderFlow 코디네이터를 생성했습니다. 깨끗한 데이터 흐름을 위해 결과 콜백을 가진 Navigator.push를 사용했습니다.'
      },
      {
        problem: '오프라인 기능 요구사항 - 사용자는 인터넷 연결 없이 저장된 레시피 및 즐겨찾기에 액세스해야 합니다.',
        solution: '로컬 레시피 저장소를 위해 SharedPreferences를 활용하고, 동기화 기능을 가진 오프라인 우선 아키텍처를 구현했습니다. 원활한 오프라인/온라인 전환을 허용하는 로컬 데이터베이스 추상화 계층을 생성했습니다.'
      },
      {
        problem: 'API 속도 제한 및 오류 처리 - OpenAI API에는 속도 제한 및 비용이 있어 효율적인 사용 및 오류 복구가 필요합니다.',
        solution: '요청 대기열, 재시도를 위한 지수 백오프, 사용자 친화적인 메시지를 포함한 포괄적인 오류 처리, 품질을 유지하면서 토큰 사용을 최소화하는 요청 최적화를 구현했습니다.'
      },
      {
        problem: '크로스 플랫폼 UI 일관성 - iOS 및 Android 플랫폼 간 일관된 디자인 및 동작 보장.',
        solution: '플랫폼별 적응을 가진 Flutter의 Material Design 컴포넌트를 사용하고, 플랫폼 규칙에 적응하는 맞춤형 위젯을 생성하며, 두 플랫폼에서 철저한 테스트를 수행했습니다. 필요할 때 네이티브 기능을 위해 Flutter의 플랫폼 채널을 활용했습니다.'
      }
    ]
  },
  results: {
    metrics: [
      'iOS 및 Android를 지원하는 크로스 플랫폼 모바일 애플리케이션 성공적으로 출시',
      '레시피 발견 시간을 5-10분에서 15초 미만으로 단축',
      '영수증 기반 재료 추출에 대해 90% 이상의 OCR 정확도 달성',
      '10개 이상의 식이 유형을 지원하는 포괄적인 식이 제한 관리 구현',
      '50개 이상의 화면 및 기능을 지원하는 확장 가능한 아키텍처 구축',
      '5개 이상의 타사 API 통합(OpenAI, Firebase, FatSecret, OCR, Google Sign-In)',
      '75% 이상의 완료율을 가진 원활한 사용자 온보딩 플로우 생성',
      '인터넷 없이 전체 레시피 액세스를 가진 오프라인 우선 아키텍처 개발'
    ],
    description: 'MakeEat은 AI 기술과 직관적인 디자인을 결합하여 가정 요리 경험을 성공적으로 변환합니다. 애플리케이션은 몇 초 만에 개인화된 레시피 생성을 제공하고, OCR 기술을 통해 수동 재료 입력을 제거하며, 포괄적인 식사 계획 도구를 제공합니다. 크로스 플랫폼 아키텍처는 기기 간 일관된 경험을 보장하는 반면, 오프라인 우선 접근 방식은 연결성에 관계없이 접근성을 보장합니다. 이 프로젝트는 풀스택 모바일 개발, AI 통합 및 사용자 중심 디자인에 대한 전문성을 보여줍니다.'
  },
  learnings: {
    cards: [
      {
        title: 'AI 통합 모범 사례',
        iconKey: 'Brain',
        description: 'GPT 모델을 통합할 때 구조화된 프롬프팅, 제약 계층 및 응답 검증의 중요성을 배웠습니다. 폴백 메커니즘 및 명확한 오류 메시징 구현이 신뢰성 및 사용자 경험을 크게 개선했습니다.'
      },
      {
        title: '모바일 상태 관리',
        iconKey: 'Workflow',
        description: 'Flutter에서 Provider 패턴 및 MVVM 아키텍처에 대한 깊은 이해를 얻었습니다. 로컬 상태, 공유 상태 및 지속 상태 간의 균형을 맞추는 것이 유지보수 가능하고 확장 가능한 모바일 애플리케이션에 중요합니다.'
      },
      {
        title: '크로스 플랫폼 개발',
        iconKey: 'Smartphone',
        description: 'Flutter의 단일 코드베이스 접근 방식은 개발 시간을 크게 줄이지만 플랫폼별 고려사항은 여전히 필수적입니다. 초기 단계부터 iOS 및 Android 모두에서 테스트하면 비용이 많이 드는 리팩토링을 방지합니다.'
      },
      {
        title: 'API 설계 및 통합',
        iconKey: 'Code',
        description: '여러 타사 API 작업은 추상화 계층, 오류 처리 및 속도 제한의 중요성을 가르쳤습니다. 명확한 인터페이스를 가진 서비스 클래스를 생성하면 테스트 및 유지보수가 훨씬 쉬워집니다.'
      },
      {
        title: '사용자 경험 디자인',
        iconKey: 'Users',
        description: '온보딩 플로우 및 선호도 수집이 사용자 참여에 크게 영향을 미칩니다. 진행 표시기와 함께 복잡한 프로세스를 명확한 단계로 나누면 포기율을 줄이고 완료율을 개선합니다.'
      },
      {
        title: '성능 최적화',
        iconKey: 'Zap',
        description: '이미지 처리, API 호출 및 상태 관리에는 신중한 최적화가 필요합니다. 지연 로딩, 캐싱 전략 및 효율적인 위젯 재구축 구현이 부드러운 사용자 경험에 필수적입니다.'
      }
    ]
  },
  techStack: {
    categories: [
      { category: 'Frontend Framework', items: ['Flutter', 'Dart'] },
      { category: 'Backend & Services', items: ['Firebase', 'Node.js'] },
      { category: 'AI & APIs', items: ['OpenAI', 'Google Maps'] },
      { category: 'Authentication', items: ['Firebase Auth', 'Google Sign-In'] },
      { category: 'Design & Tools', items: ['Figma', 'GitHub'] }
    ]
  },
  links: {
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/MakeEat/frontend' }
    ],
    figmaUrl: '',
    caseStudyUrl: ''
  }
};
