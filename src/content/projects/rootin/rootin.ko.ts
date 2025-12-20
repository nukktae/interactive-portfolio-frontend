// Korean content file: All user-facing text strings in Korean

export const rootinKO = {
  overview: {
    paragraphs: [
      {
        type: 'text',
        content:
          'Rootin은 IoT 기술과 지능형 추천을 결합하여 실내 원예를 혁신하는 AI 기반 식물 관리 동반자입니다. 앱은 맞춤형 블루투스 저전력(BLE) 토양 수분 센서에 연결되어 실시간 모니터링과 개인화된 식물 관리 가이드를 제공합니다.'
      },
      {
        type: 'text',
        content:
          '크로스 플랫폼 모바일 개발을 위한 Flutter로 구축된 Rootin은 실시간 데이터 시각화, AI 기반 식물 식별, 지능형 푸시 알림, 대화형 AI 어시스턴트 기능을 제공합니다. 시스템은 백엔드 서비스를 위해 Firebase와 원활하게 통합되어 안정적인 데이터 동기화 및 알림 전달을 보장합니다.'
      },
      {
        type: 'text',
        content:
          '이 프로젝트는 모바일 개발, IoT 통합, 실시간 데이터 처리, 머신러닝, 클라우드 아키텍처에 대한 전문성을 보여줍니다. 사용자 경험과 기술적 우수성에 중점을 두고 Rootin은 데이터 기반 인사이트와 선제적 관리 알림을 통해 사용자가 건강한 식물을 유지할 수 있도록 돕습니다.'
      }
    ]
  },
  role: {
    roles: [
      {
        title: '풀스택 모바일 개발자',
        iconKey: 'Code',
        responsibilities: [
          '38개 이상의 화면과 55개 이상의 재사용 가능한 위젯을 포함한 전체 Flutter 모바일 애플리케이션 설계 및 개발',
          '재시도 로직 및 오류 처리를 포함한 안정적인 IoT 센서 통신을 위한 맞춤형 BLE 서비스 구현',
          '대화형 주간 트렌드 및 수분 추적을 포함한 FL Chart를 사용한 실시간 데이터 시각화 구축',
          '95% 알림 전달률을 달성한 Firebase Cloud Messaging 통합 개발',
          '이미지 처리 및 ML 모델 통합을 포함한 AI 기반 식물 식별 서비스 생성',
          '인증을 포함한 백엔드 통신을 위한 RESTful API 클라이언트 설계 및 구현'
        ],
        impacts: [
          'iOS 및 Android 플랫폼을 지원하는 프로덕션 준비 모바일 앱 제공',
          '10초 타임아웃 처리 및 iOS 특정 권한 관리를 포함한 안정적인 BLE 연결성 달성',
          '과거 데이터 시각화를 포함한 실시간 식물 건강 모니터링 활성화',
          '포그라운드/백그라운드 메시지 처리를 포함한 강력한 알림 시스템 구현'
        ]
      },
      {
        title: 'IoT 및 백엔드 통합 엔지니어',
        iconKey: 'Smartphone',
        responsibilities: [
          'WiFi 자격 증명 전송을 포함한 센서 통신을 위한 맞춤형 BLE 프로토콜 설계',
          '장치 발견, 연결 및 네트워크 구성을 포함한 센서 페어링 플로우 구현',
          '센서 판독값 및 수분 계산 처리를 위한 데이터 변환 서비스 구축',
          '백엔드 작업을 위한 Firebase 서비스(Auth, Firestore, Storage, Cloud Messaging) 통합',
          '온디바이스 ML 추론을 위한 TensorFlow Lite를 사용한 식물 감지 서비스 개발',
          '로컬 및 원격 알림 처리를 포함한 알림 서비스 생성'
        ],
        impacts: [
          '가이드 설정 플로우를 포함한 원활한 IoT 장치 온보딩 활성화',
          '센서에서 클라우드 스토리지로의 안정적인 데이터 파이프라인 구축',
          '수동 검색에서 즉각적인 AI 인식으로 식물 식별 시간 단축',
          '지능형 컨텍스트 인식 알림을 통한 사용자 참여 개선'
        ]
      }
    ]
  },
  problem: {
    summary: '식물 소유자는 식물에 물을 언제, 얼마나 줘야 하는지 알기 어려워 과수분, 수분 부족 및 식물 건강 문제가 발생합니다.',
    content: '실내 식물 관리는 보이는 것보다 더 복잡합니다. 다양한 식물 종은 고유한 물주기 요구사항을 가지며, 습도, 빛, 토양 유형과 같은 환경 요인은 모두 수분 요구사항에 영향을 미칩니다. 실시간 데이터 없이는 식물 소유자가 추측에 의존하게 되어 종종 식물 스트레스나 사망으로 이어집니다. 손가락 테스트나 예정된 물주기와 같은 전통적인 방법은 신뢰할 수 없으며 개별 식물의 요구사항이나 변화하는 조건을 고려하지 않습니다.',
    painPoints: [
      { description: '토양 수분 수준에 대한 실시간 가시성 부족으로 반응적이 아닌 선제적 관리로 이어짐' },
      { description: '식물 종 및 특정 관리 요구사항 식별의 어려움' },
      { description: '실제 식물 조건 및 환경 요인을 기반으로 한 개인화된 가이드 부족' },
      { description: '식물에 물을 주는 것을 잊거나 잘못된 시간에 물주기' },
      { description: '시간에 따른 식물 건강 트렌드를 추적하여 패턴이나 문제를 식별할 수 없음' }
    ],
    whyItMatters: '식물은 일관되고 정보에 입각한 관리가 필요한 살아있는 투자입니다. 나쁜 물주기 관행은 시간과 돈을 낭비할 뿐만 아니라 식물 손실과 좌절에 기여합니다. IoT 센서와 AI 기반 인사이트를 결합하면 식물 관리를 추측에서 데이터 기반의 관리 가능한 루틴으로 변환하여 사용자가 원예 여정에서 성공할 수 있도록 돕습니다.'
  },
  goals: {
    goals: [
      { title: '실시간 모니터링', iconKey: 'Zap', metric: '센서 데이터 업데이트에 대해 <2초 지연 시간 달성' },
      { title: 'AI 정확도', iconKey: 'Brain', metric: '시각 인식을 통한 95% 이상의 식물 식별 정확도' },
      { title: '사용자 참여', iconKey: 'TrendingUp', metric: '지능형 스케줄링을 통한 95% 알림 전달률' },
      { title: '사용자 경험', iconKey: 'Users', metric: '<30초 설정 시간으로 원활한 BLE 페어링' },
      { title: '데이터 시각화', iconKey: 'BarChart3', metric: '7일 수분 트렌드를 보여주는 대화형 차트' },
      { title: '신뢰성', iconKey: 'Award', metric: '재시도 메커니즘을 통한 99% 이상의 BLE 연결 성공률' }
    ]
  },
  research: {
    insights: [
      {
        title: '사용자 행동 분석',
        items: [
          '사용자는 수동 검색보다 시각적 식물 식별을 선호함 (80% 채택률)',
          '실시간 수분 데이터는 물주기 불안을 줄이고 자신감을 높임',
          '컨텍스트 인식 알림이 일반적인 알림보다 더 효과적임',
          '사용자는 현재 상태뿐만 아니라 시간에 따른 식물 건강 트렌드를 추적하고 싶어함',
          '다국어 지원(영어/한국어)은 대상 시장에 필수적임'
        ]
      },
      {
        title: '기술적 요구사항',
        items: [
          'BLE 통신은 iOS 및 Android 플랫폼 차이를 처리해야 함',
          'Firebase 통합은 오프라인 시나리오에 대한 강력한 오류 처리가 필요함',
          'ML 모델은 온디바이스 추론을 위해 경량이어야 함',
          '알림 시스템은 포그라운드, 백그라운드 및 종료된 상태에서 작동해야 함',
          '데이터 시각화는 대용량 데이터셋에 대한 효율적인 차트 렌더링이 필요함',
          '센서 페어링 플로우는 비기술 사용자를 위해 직관적이어야 함'
        ]
      }
    ]
  },
  architecture: {
    items: [
      {
        title: '핵심 시스템 아키텍처',
        description: 'Rootin은 UI, 비즈니스 로직 및 데이터 계층 간의 명확한 분리를 가진 클린 아키텍처 패턴을 따릅니다. 앱은 상태 관리에 Provider를 사용하여 38개 이상의 화면에서 반응형 업데이트를 보장합니다. 서비스는 모든 외부 통신(BLE, API, Firebase)을 처리하는 반면, 모델은 타입 안전 데이터 구조를 제공합니다.',
        features: [
          '55개 이상의 재사용 가능한 컴포넌트를 포함한 모듈형 위젯 아키텍처',
          'BLE, API 및 Firebase 작업을 위한 서비스 계층 추상화',
          '언어, 테마 및 앱 상태를 위한 Provider 기반 상태 관리',
          '다국어 UI를 위한 AppLocalizations를 사용한 현지화 지원',
          '일관된 디자인 토큰을 가진 맞춤형 테마 시스템',
          '애플리케이션 전체에 걸친 오류 처리 및 재시도 로직'
        ],
        userFlows: undefined
      },
      {
        title: '사용자 플로우 및 상호작용',
        description: '',
        features: [],
        userFlows: [
          {
            name: '식물 온보딩 플로우',
            iconKey: 'Users',
            description: '센서 페어링을 포함한 식물 추가를 위한 가이드 다단계 프로세스',
            steps: [
              '온보딩 화면에서 앱 기능 및 가치 제안 소개',
              '사용자가 카메라(AI 식별) 또는 수동 검색을 통해 식물 선택',
              '식물 상세 화면에서 종 정보 및 관리 요구사항 표시',
              '권한 처리를 포함한 BLE 센서 발견 및 페어링',
              'WiFi 네트워크 선택 및 센서로 자격 증명 전송',
              '센서 연결 확인 및 식물 연결',
              '홈 화면에 식물이 추가된 최종 설정 확인'
            ]
          },
          {
            name: '알림 시스템',
            iconKey: 'Mail',
            description: '물주기 알림 및 식물 건강 알림을 위한 지능형 푸시 알림',
            steps: [
              '앱 시작 시 FCM 토큰 등록',
              '백엔드가 식물 수분 데이터를 분석하고 알림 트리거 결정',
              '식물 상태(수분 부족, 이상적, 과수분)를 기반으로 컨텍스트 인식 알림 전송',
              '로컬 알림 표시를 포함한 포그라운드 알림 처리',
              '데이터 추출을 포함한 백그라운드 메시지 처리',
              '알림 탭 시 관련 식물 상세 화면으로 네비게이션',
              '사용자 알림 기본 설정 저장 및 준수'
            ]
          },
          {
            name: '실시간 모니터링',
            iconKey: 'TrendingUp',
            description: '과거 트렌드 시각화를 포함한 실시간 토양 수분 추적',
            steps: [
              '센서가 BLE 또는 WiFi를 통해 백엔드로 수분 판독값 전송',
              '백엔드가 데이터를 처리하고 Firestore에 저장',
              '앱이 API를 통해 최신 판독값 및 과거 데이터 가져오기',
              '상태 표시기(이상적, 수분 부족, 과수분)를 포함한 실시간 수분 표시',
              'FL Chart를 사용한 주간 트렌드 차트 시각화',
              '대화형 차트를 통해 사용자가 7일 수분 패턴 확인 가능',
              '수분 범위를 기반으로 한 자동 건강 진단'
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
          { usage: '식물 관련 작업 및 성공 상태를 위한 주요 브랜드 색상' },
          { usage: '최적의 식물 조건을 위한 수분 수준 표시기' },
          { usage: '물이 필요한 식물을 위한 경고 색상' },
          { usage: '과도한 수분 조건을 위한 알림 색상' },
          { usage: '앱 배경 및 카드 표면' },
          { usage: '주요 텍스트 콘텐츠 및 제목' }
        ],
        components: undefined
      },
      {
        title: '컴포넌트 구조',
        type: 'components',
        colorUsages: undefined,
        components: [
          { title: '식물 카드', description: '홈 및 관리 화면을 위한 상태 표시기, 이미지 및 빠른 작업을 포함한 재사용 가능한 식물 표시 카드', iconKey: 'Sparkles' },
          { title: '상태 아이콘', description: '색상 코딩된 배지 및 아이콘을 포함한 시각적 상태 시스템(이상적, 수분 부족, 과수분, 측정 중)', iconKey: 'Component' },
          { title: '네비게이션 시스템', description: '4개의 주요 섹션(홈, 관리, 커뮤니티, 프로필) 및 부드러운 전환을 포함한 맞춤형 하단 네비게이션 바', iconKey: 'LayoutTemplate' },
          { title: '차트 컴포넌트', description: '터치 상호작용 및 데이터 포인트를 포함한 주간 수분 트렌드를 위한 대화형 FL Chart 위젯', iconKey: 'Layers' },
          { title: 'BLE 모달', description: '장치 발견, 페어링 상태 및 오류 처리를 포함한 블루투스 검색 및 연결 모달', iconKey: 'Workflow' }
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
          '크로스 플랫폼 모바일 개발을 위한 Flutter 3.16 및 Dart 3.2',
          '상태 관리를 위한 Provider 패턴(LanguageProvider, ThemeProvider)',
          '클린 아키텍처: 화면(38), 위젯(55), 서비스(9), 모델(4)',
          '일관된 스타일링을 위한 AppTheme를 사용한 맞춤형 테마 시스템',
          '영어 및 한국어를 지원하는 AppLocalizations를 사용한 현지화',
          '대화형 데이터 시각화 및 트렌드 분석을 위한 FL Chart',
          'image_picker 및 camera 패키지를 사용한 이미지 처리',
          'BLE, 위치, 카메라 및 알림을 위한 권한 처리'
        ]
      },
      {
        title: '백엔드 및 API',
        iconKey: 'Database',
        items: [
          'Firebase Cloud Platform: Auth, Firestore, Storage, Cloud Messaging',
          '식물 식별 및 채팅 서비스를 위한 api.rootin.me의 RESTful API',
          '95% 전달률을 가진 Firebase Cloud Messaging을 사용한 푸시 알림',
          '실시간 식물 데이터 및 수분 기록 저장을 위한 Cloud Firestore',
          '식물 이미지 및 사용자 업로드 사진을 위한 Firebase Storage',
          '장치 타겟팅을 위한 FCM 토큰 등록 및 관리',
          '알림 처리를 위한 백그라운드 메시지 핸들러',
          '인증 및 오류 처리를 포함한 API 클라이언트'
        ]
      },
      {
        title: 'IoT 및 통합',
        iconKey: 'Layers',
        items: [
          'flutter_blue_plus 및 flutter_reactive_ble를 사용한 블루투스 저전력(BLE)',
          '서비스 UUID 및 특성 통신을 포함한 맞춤형 BLE 프로토콜',
          'BLE를 통한 센서로의 WiFi 자격 증명 전송',
          '장치 발견 및 연결 관리를 포함한 센서 페어링 플로우',
          '센서로부터의 실시간 수분 데이터 스트리밍',
          '식물 감지를 위한 ML 모델 통합(TensorFlow Lite)',
          '이미지 업로드 및 종 인식을 포함한 식물 식별 API',
          '세션 관리 및 이미지 지원을 포함한 AI 챗봇 통합'
        ]
      }
    ]
  },
  keyFeatures: {
    metrics: [
      { title: '알림 전달', description: '지능형 재시도 로직 및 포그라운드/백그라운드 처리를 통한 95% 성공 전달률' },
      { title: 'BLE 연결 성공', description: 'iOS 특정 타임아웃 처리 및 권한 관리를 통한 99% 이상의 연결률' },
      { title: '식물 식별', description: 'AI 기반 시각 인식 및 종 데이터베이스 매칭을 통한 95% 이상의 정확도' },
      { title: '실시간 데이터 지연 시간', description: '효율적인 데이터 파이프라인을 통한 센서 판독값에서 앱 표시까지 <2초' }
    ],
    userFeatures: [
      {
        title: '스마트 모니터링',
        iconKey: 'BarChart3',
        items: [
          '맞춤형 BLE 센서를 사용한 실시간 토양 수분 추적',
          'FL Chart를 사용한 대화형 주간 트렌드 시각화',
          '수분 범위를 기반으로 한 자동 식물 건강 진단',
          '상태 표시기: 이상적, 수분 부족, 과수분, 측정 중, 센서 없음',
          '7일 수분 패턴을 포함한 과거 데이터 추적',
          '위치 및 방별 필터링을 포함한 다중 식물 관리'
        ]
      },
      {
        title: 'AI 기반 기능',
        iconKey: 'Brain',
        items: [
          'ML 모델 추론을 포함한 카메라를 통한 시각적 식물 식별',
          '종별 관리 권장사항 및 물주기 일정',
          '식물 관리 질문을 위한 대화형 AI 어시스턴트',
          '신뢰도 점수를 포함한 이미지 기반 식물 감지',
          '식물 유형 및 현재 조건을 기반으로 한 개인화된 관리 팁'
        ]
      },
      {
        title: '지능형 알림',
        iconKey: 'Mail',
        items: [
          '실제 수분 수준을 기반으로 한 컨텍스트 인식 물주기 알림',
          '문제가 심각해지기 전에 예측적 식물 건강 알림',
          '장치 관리를 위한 배터리 및 센서 상태 업데이트',
          '식물별 맞춤형 알림 기본 설정',
          '백그라운드 및 포그라운드 알림 처리',
          '알림 탭 시 관련 화면으로 딥 링킹'
        ]
      }
    ],
    engineeringFeatures: [
      {
        title: 'IoT 통합',
        iconKey: 'Layers',
        items: [
          '재시도 로직 및 연결 상태 관리를 포함한 맞춤형 BLE 서비스',
          '위치 및 블루투스를 위한 iOS 특정 권한 처리',
          'BLE를 통한 WiFi 네트워크 스캔 및 자격 증명 전송',
          '필터링 및 연결 타임아웃 처리를 포함한 장치 발견',
          '특성 구독을 포함한 실시간 데이터 스트리밍',
          '불안정한 연결을 위한 오류 복구 및 재연결 로직'
        ]
      },
      {
        title: '데이터 처리',
        iconKey: 'Database',
        items: [
          '센서 판독값을 위한 효율적인 데이터 변환 서비스',
          '시계열 데이터 관리를 포함한 수분 기록 서비스',
          '인증 및 멀티파트 파일 업로드를 포함한 API 클라이언트',
          '실시간 데이터 업데이트를 위한 Firestore 실시간 리스너',
          'SharedPreferences를 사용한 로컬 데이터 지속성',
          '오프라인 데이터 동기화를 위한 백그라운드 동기화'
        ]
      },
      {
        title: '성능 최적화',
        iconKey: 'Zap',
        items: [
          '식물 목록 및 이미지 최적화를 위한 지연 로딩',
          '데이터 포인트 제한을 포함한 효율적인 차트 렌더링',
          '대역폭을 줄이기 위한 업로드 전 이미지 압축',
          '캐시된 API 응답 및 로컬 상태 관리',
          'Provider 선택기를 사용한 최적화된 위젯 재구축',
          '알림 처리를 위한 백그라운드 처리'
        ]
      }
    ]
  },
  challenges: {
    challenges: [
      {
        problem: 'iOS에서의 BLE 연결 신뢰성',
        solution: '위치 서비스 확인, 3회 시도의 재시도 로직, 8초 타임아웃을 포함한 iOS 특정 권한 처리를 구현했습니다. 메모리 누수를 방지하기 위한 구독 및 연결 상태 관리에 대한 적절한 정리 작업을 추가했습니다. 사용자가 설정에서 필요한 권한을 활성화하도록 안내하는 사용자 친화적인 오류 메시지를 생성했습니다.'
      },
      {
        problem: '실시간 알림 전달',
        solution: '포그라운드, 백그라운드 및 종료된 앱 상태를 처리하는 포괄적인 알림 서비스를 구축했습니다. 로컬 알림 폴백, Android용 적절한 채널 구성, iOS용 첨부 파일 지원을 포함한 Firebase Cloud Messaging을 구현했습니다. 95% 전달률을 유지하기 위한 재시도 로직 및 토큰 새로고침 메커니즘을 추가했습니다.'
      },
      {
        problem: '대용량 데이터셋 차트 렌더링',
        solution: '데이터 포인트를 7일 창으로 제한하고, 효율적인 정렬 알고리즘을 구현하며, 과거 데이터에 지연 로딩을 사용하여 FL Chart 구현을 최적화했습니다. 로딩 상태 및 빈 상태 처리를 추가했습니다. 새 데이터가 도착할 때만 차트를 업데이트하도록 위젯 재구축을 최적화했습니다.'
      },
      {
        problem: '크로스 플랫폼 BLE 차이',
        solution: '플랫폼별 차이를 처리하는 BleService의 추상화 계층을 생성했습니다. Android 호환성을 위해 flutter_reactive_ble를 사용하고 iOS 호환성을 위해 flutter_blue_plus를 사용했습니다. 플랫폼별 권한 요청 및 연결 타임아웃 전략을 구현했습니다. 두 플랫폼 모두에 대한 포괄적인 오류 처리를 추가했습니다.'
      },
      {
        problem: '식물 식별 정확도',
        solution: '온디바이스 추론을 위한 TensorFlow Lite 모델을 통합하고, 종 데이터베이스 매칭을 위한 백엔드 API와 결합했습니다. 업로드 전 이미지 전처리(압축, 형식 변환)를 구현했습니다. 신뢰도 점수를 추가하고 식별이 실패하면 수동 검색으로 폴백하도록 했습니다.'
      }
    ]
  },
  results: {
    metrics: [
      '지능형 스케줄링을 통한 95% 알림 전달률',
      '재시도 메커니즘을 통한 99% 이상의 BLE 연결 성공률',
      'AI 인식을 통한 95% 이상의 식물 식별 정확도',
      '실시간 센서 데이터 업데이트에 대해 <2초 지연 시간',
      '효율적인 데이터 관리를 통한 사용자당 무제한 식물 지원',
      '대화형 차트를 포함한 7일 과거 트렌드 시각화',
      '전체 현지화를 포함한 다국어 지원(영어/한국어)'
    ],
    description: 'Rootin은 하드웨어 센서와 지능형 소프트웨어를 결합한 프로덕션 준비 IoT 모바일 애플리케이션을 성공적으로 제공합니다. 앱은 BLE 연결성부터 알림 전달까지 모든 핵심 기능에서 높은 신뢰성 메트릭을 달성했습니다. 사용자는 식물을 원활하게 온보딩하고, 실시간으로 건강을 모니터링하며, 선제적 관리 가이드를 받을 수 있습니다. 기술 아키텍처는 확장성과 유지보수성을 지원하며, 깨끗한 코드 구성 및 포괄적인 오류 처리를 포함합니다. 이 프로젝트는 모바일 개발, IoT 통합, 클라우드 서비스 및 AI/ML 구현에 대한 전문성을 보여줍니다.'
  },
  learnings: {
    cards: [
      {
        title: 'IoT 개발 복잡성',
        iconKey: 'Layers',
        description: '안정적인 BLE 통신 구축은 플랫폼별 동작, 권한 모델 및 연결 수명 주기 관리에 대한 깊은 이해가 필요합니다. iOS와 Android는 블루투스를 다르게 처리하므로 두 플랫폼 모두에서 신중한 추상화 및 테스트가 필요합니다.'
      },
      {
        title: '실시간 데이터 아키텍처',
        iconKey: 'Database',
        description: 'IoT를 위한 효율적인 데이터 파이프라인 설계는 실시간 업데이트와 배터리 수명, 네트워크 사용량 및 사용자 경험의 균형을 맞추는 것이 필요합니다. 적절한 캐싱, 오프라인 지원 및 백그라운드 동기화 구현은 모바일 IoT 애플리케이션에 중요합니다.'
      },
      {
        title: '알림 시스템 설계',
        iconKey: 'Mail',
        description: '높은 알림 전달률 달성은 포그라운드, 백그라운드 및 종료된 앱 상태에 대한 이해가 필요합니다. 적절한 FCM 구성, 로컬 알림 폴백 및 사용자 기본 설정 관리를 구현하면 강력한 알림 경험을 만들 수 있습니다.'
      },
      {
        title: '모바일의 ML 통합',
        iconKey: 'Brain',
        description: '온디바이스 ML 추론은 모델 최적화, 효율적인 이미지 처리 및 우아한 폴백이 필요합니다. 정확도와 성능 및 배터리 사용량의 균형을 맞추는 것이 모바일 앱에서 성공적인 ML 통합의 핵심입니다.'
      }
    ]
  },
  techStack: {
    categories: [
      { category: 'Mobile Framework', items: ['Flutter', 'Dart'] },
      { category: 'Backend & Cloud', items: ['Firebase', 'Google Cloud'] },
      { category: 'IoT & Hardware', items: ['Bluetooth LE'] },
      { category: 'AI & ML', items: ['TensorFlow Lite', 'OpenAI', 'Python'] },
      { category: 'Design & Tools', items: ['Figma', 'GitHub'] }
    ]
  },
  links: {
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/yourusername/rootin' },
      { label: 'App Demo Video', url: 'https://drive.google.com/file/d/1LueaIvcmNsAWvzxk6HQSYY1rBAJRS86Q/view' },
      { label: 'Sensor Setup Demo', url: 'https://drive.google.com/file/d/1AmaRr6iMf5mYG0wnsaKu8x5EEEB4C2DV/view' }
    ],
    figmaUrl: '',
    caseStudyUrl: ''
  }
};
