// Korean content file: All user-facing text strings in Korean

export const moveparkKO = {
  overview: {
    paragraphs: [
      {
        type: 'text',
        content:
          'MovePARK은 여러 한국 공공 데이터 API의 실시간 교통, 날씨, 주차 및 이벤트 데이터를 통합하여 올림픽공원 시설의 이벤트로 가는 여정을 계획하는 데 도움을 주는 지능형 네비게이션 및 이벤트 계획 플랫폼입니다.'
      },
      {
        type: 'text',
        content:
          '이 플랫폼은 실시간 교통 상황, 날씨 예보 및 이벤트 시작 시간을 기반으로 한 스마트 출발 시간 계산 기능을 제공합니다. 날씨 인식 추천, 예측 주차 혼잡 모델링 및 경로 시각화를 포함한 대화형 Leaflet 기반 지도를 통해 다중 모드 교통 비교(자동차, 지하철, 버스, 자전거, 도보)를 제공합니다.'
      },
      {
        type: 'text',
        content:
          'Next.js 16 App Router로 구축된 이 애플리케이션은 교통을 위한 서울 열린데이터 API, 예보를 위한 기상청 날씨 API, 주차 가용성을 위한 서울 주차 API, 이벤트 장소를 위한 국민체육진흥공단 스포츠 시설 API를 포함한 여러 한국 공공 데이터 API를 통합합니다. 이 시스템은 출발 시간 예측, 주차 혼잡 모델링 및 날씨 인식 교통 추천을 위한 고급 알고리즘 계산을 보여줍니다.'
      }
    ]
  },
  role: {
    roles: [
      {
        title: '풀스택 개발자',
        iconKey: 'Code',
        responsibilities: [
          'App Router를 포함한 전체 Next.js 16 애플리케이션 설계 및 개발',
          '여러 한국 공공 데이터 API 통합(서울 교통, 기상청 날씨, 주차, 국민체육진흥공단 시설)',
          '교통, 날씨 및 이벤트 데이터를 결합한 지능형 출발 시간 계산 알고리즘 구축',
          'ML과 유사한 알고리즘을 사용한 예측 주차 혼잡 모델링 개발',
          '날씨 인식 교통 모드 추천 시스템 생성',
          '마커, 경로 및 지리적 위치를 포함한 대화형 Leaflet 지도 구현',
          '성능을 위한 API 경로 캐싱을 포함한 서버 사이드 렌더링 설계'
        ],
        impacts: [
          '실시간 데이터 통합을 포함한 포괄적인 이벤트 계획 플랫폼 제공',
          '다중 요소 계산을 통한 정확한 출발 시간 예측 달성',
          '예측 모델링을 통한 지능형 주차 추천 활성화',
          '대화형 지도 및 실시간 업데이트를 포함한 원활한 사용자 경험 생성'
        ]
      },
      {
        title: '데이터 통합 엔지니어',
        iconKey: 'Database',
        responsibilities: [
          '4개 이상의 다른 한국 공공 데이터 API의 데이터 정규화',
          '정확한 거리 계산을 위한 Haversine 공식 구현',
          'Next.js 재검증(60초-3600초)을 사용한 데이터 캐싱 전략 구축',
          'API 안정성을 위한 폴백 데이터 시스템 생성',
          '시설 데이터에서 이벤트 생성 시스템 개발',
          '이벤트, 날씨 및 시간적 요인을 고려한 주차 예측 알고리즘 설계'
        ],
        impacts: [
          '우아한 오류 처리 및 폴백을 통한 안정적인 데이터 액세스 보장',
          '지능형 캐싱 전략을 통한 API 사용 최적화',
          '정교한 알고리즘을 통한 정확한 예측 제공',
          'API 속도 제한에도 불구하고 높은 가용성 유지'
        ]
      }
    ]
  },
  problem: {
    summary: '올림픽공원의 이벤트로 가는 여정을 계획하려면 교통 상황, 날씨 예보, 주차 가용성 및 이벤트 일정 등 여러 분리된 데이터 소스를 동시에 처리해야 합니다. 사용자는 최적의 출발 시간과 교통 수단을 결정하는 데 어려움을 겪습니다.',
    content: '전통적인 네비게이션 앱은 이벤트 중 주차 혼잡, 도착 시간 요구사항(30분 일찍), 또는 다양한 교통 수단에 대한 날씨 영향과 같은 이벤트별 요인을 고려하지 않습니다. 사용자는 여러 플랫폼에서 교통, 날씨, 주차 및 이벤트 일정을 수동으로 확인해야 하며, 이는 이벤트를 놓치거나 늦게 도착하거나 나쁜 교통 선택으로 이어집니다.',
    painPoints: [
      { description: '교통, 날씨, 주차 및 이벤트 데이터를 결합하는 통합 플랫폼 없음' },
      { description: '여러 요인을 고려한 출발 시간의 수동 계산' },
      { description: '이벤트 중 예측 주차 가용성 부족' },
      { description: '날씨 인식 교통 모드 추천 없음' },
      { description: '실시간 데이터로 여러 교통 옵션을 비교하기 어려움' }
    ],
    whyItMatters: '계획 부족으로 인해 이벤트를 놓치거나 늦게 도착하는 것은 좌절과 시간 낭비를 만듭니다. MovePARK은 실시간 조건, 날씨 및 이벤트별 요인을 기반으로 최적의 출발 시간을 자동으로 계산하고 최상의 교통 수단을 추천함으로써 추측을 제거합니다.'
  },
  goals: {
    goals: [
      { title: '스마트 출발 계산', iconKey: 'Zap', metric: '교통, 날씨 및 이벤트 데이터를 포함한 다중 요소 알고리즘' },
      { title: '주차 지능', iconKey: 'Brain', metric: 'ML과 유사한 알고리즘을 사용한 예측 혼잡 모델링' },
      { title: '다중 모드 교통', iconKey: 'TrendingUp', metric: '5개 이상의 교통 수단에 대한 날씨 인식 추천' },
      { title: '실시간 데이터 통합', iconKey: 'Users', metric: '지능형 캐싱을 포함한 4개 이상의 한국 공공 데이터 API' },
      { title: '대화형 시각화', iconKey: 'BarChart3', metric: '마커, 경로 및 실시간 업데이트를 포함한 Leaflet 지도' },
      { title: '성능', iconKey: 'Award', metric: '최적화된 캐싱 전략을 포함한 서버 사이드 렌더링' }
    ]
  },
  research: {
    insights: [
      {
        title: '한국 공공 데이터 API 분석',
        items: [
          '서울 열린데이터 API는 혼잡 수준(원활/서행/정체)과 함께 실시간 교통 속도 데이터 제공',
          '기상청 날씨 API는 상세 조건 데이터와 함께 3일 예보 제공',
          '서울 주차 API는 용량, 점유율 및 요금 정보 포함',
          '국민체육진흥공단 스포츠 시설 API는 이벤트 생성을 위한 장소 데이터 제공',
          '각 API는 정규화가 필요한 다른 응답 구조를 가짐',
          'API 속도 제한 및 캐싱 전략이 성능에 중요함'
        ]
      },
      {
        title: '알고리즘 설계 요구사항',
        items: [
          '출발 시간 계산은 교통 속도, 날씨 영향 및 거리를 결합해야 함',
          '주차 예측은 이벤트 참석 추정 및 시간적 요인이 필요함',
          '교통 비교는 모드별 속도 계산 및 날씨 페널티가 필요함',
          'Haversine 공식은 지리적 위치에 대한 정확한 거리 계산 제공',
          '예측 신뢰성을 위한 신뢰도 점수 중요'
        ]
      }
    ]
  },
  architecture: {
    items: [
      {
        title: '시스템 아키텍처',
        description: '서버 사이드 렌더링, 데이터 가져오기를 위한 API 경로, 성능 및 안정성을 위한 지능형 캐싱 전략을 포함한 Next.js 16 App Router.',
        features: [
          'SEO 및 성능을 위한 서버 컴포넌트',
          'API 경로 (/api/events, /api/traffic, /api/weather, /api/parking, /api/facilities)',
          'Next.js 재검증 캐싱(교통 60초, 날씨 3600초)',
          '안정성을 위한 정적 JSON 파일의 폴백 데이터',
          '상태 관리를 위한 URL 검색 매개변수',
          '브라우저 API와의 지리적 위치 통합',
          '대화형 시각화를 위한 Leaflet 지도'
        ],
        userFlows: undefined
      },
      {
        title: '사용자 플로우',
        description: '',
        features: [],
        userFlows: [
          {
            name: '이벤트 계획 플로우',
            iconKey: 'Users',
            description: '사용자가 이벤트를 선택하면 시스템이 최적의 출발 시간을 계산하고 교통을 추천합니다',
            steps: [
              '사용자가 올림픽공원 시설의 이벤트를 탐색',
              '드롭다운에서 이벤트 선택(eventId로 URL 업데이트)',
              '시스템이 이벤트 데이터 및 장소 좌표 가져오기',
              '원하는 도착 시간 계산(이벤트 시작 - 30분)',
              '실시간 교통 및 날씨 데이터 가져오기',
              '다중 요소 알고리즘으로 최적의 출발 시간 계산',
              '날씨 인식 추천으로 교통 수단 비교',
              '이벤트 장소에 대한 주차 예측 표시',
              '경로 및 주차 위치를 포함한 대화형 지도 표시'
            ]
          },
          {
            name: '주차 발견 플로우',
            iconKey: 'MapPin',
            description: '사용자가 예측 혼잡 및 거리 기반 필터링을 포함한 주차장 확인',
            steps: [
              '시스템이 서울 주차 API에서 주차 데이터 가져오기',
              'Haversine 공식을 사용하여 사용자 위치로부터 거리 계산',
              '5마일(8km) 이내의 주차장 필터링',
              '주차 예측 알고리즘 실행(이벤트 영향, 날씨, 시간적 요인)',
              '예측 점유율로 정렬(가장 낮은 것부터)',
              '혼잡 예측 및 신뢰도 점수를 포함한 주차 카드 표시',
              '대화형 지도에 주차 위치 표시',
              '사용자가 주차장을 클릭하여 상세 정보 확인 가능'
            ]
          },
          {
            name: '교통 비교 플로우',
            iconKey: 'TrendingUp',
            description: '사용자가 실시간 데이터 및 날씨 영향을 포함한 여러 교통 수단 비교',
            steps: [
              '시스템이 각 모드(자동차, 지하철, 버스, 자전거, 도보)에 대한 이동 시간 계산',
              '예보 조건을 기반으로 날씨 페널티 적용',
              '비용 계산(연료, 주차, 교통 요금)',
              '비현실적인 경로 필터링(도보 >3km, 자전거 >10km)',
              '총 시간으로 정렬하고 최상의 옵션 추천',
              '시간, 비용 및 날씨 영향을 포함한 비교 카드 표시',
              '날씨 또는 교통이 변경될 때 추천 업데이트'
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
          { usage: '주요 작업 및 강조' },
          { usage: '원활한 교통, 사용 가능한 주차' },
          { usage: '느린 교통, 중간 혼잡' },
          { usage: '혼잡한 교통, 만차 주차' },
          { usage: '보조 텍스트 및 테두리' }
        ],
        components: undefined
      },
      {
        title: '컴포넌트 구조',
        type: 'components',
        colorUsages: undefined,
        components: [
          { title: '이벤트 컴포넌트', description: '이벤트 탐색 및 선택을 위한 EventSelector, EventCard', iconKey: 'Component' },
          { title: '지도 컴포넌트', description: 'Leaflet 통합, 마커, 경로 및 상호작용을 포함한 MapView', iconKey: 'MapPin' },
          { title: '교통 컴포넌트', description: '다중 모드 카드 및 날씨 인식 추천을 포함한 TransitComparison', iconKey: 'TrendingUp' },
          { title: '주차 컴포넌트', description: '혼잡 예측을 포함한 ParkingCard, ParkingPredictionCard', iconKey: 'Layers' },
          { title: '날씨 컴포넌트', description: '3일 예보 및 위험 평가를 포함한 WeatherInfo, WeatherRiskCard', iconKey: 'Cloud' },
          { title: '위치 컴포넌트', description: '브라우저 지리적 위치 통합을 위한 GeoLocationProvider', iconKey: 'MapPin' }
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
          'App Router 및 서버 컴포넌트를 포함한 Next.js 16.0.7',
          'TypeScript 5를 포함한 React 19.2.0',
          '스타일링을 위한 Tailwind CSS 4',
          '매핑을 위한 Leaflet 1.9.4 및 React-Leaflet 5.0.0',
          '상태 관리를 위한 URL 검색 매개변수',
          'SEO 및 성능을 위한 서버 사이드 렌더링',
          '대화형 기능(지도, 지리적 위치)을 위한 클라이언트 컴포넌트'
        ]
      },
      {
        title: '백엔드 및 API',
        iconKey: 'Database',
        items: [
          '데이터 가져오기 및 처리를 위한 Next.js API 경로',
          '여러 한국 공공 데이터 API 통합',
          'Next.js 재검증을 사용한 지능형 캐싱',
          '정적 JSON 파일의 폴백 데이터',
          '우아한 성능 저하를 포함한 오류 처리',
          '각 API에 대한 데이터 정규화 파이프라인',
          '거리 계산을 위한 Haversine 공식'
        ]
      },
      {
        title: '통합',
        iconKey: 'Layers',
        items: [
          '서울 열린데이터 API: 실시간 교통 속도 및 혼잡',
          '기상청 날씨 API: 3일 날씨 예보',
          '서울 주차 API: 주차장 데이터 및 가용성',
          '국민체육진흥공단 스포츠 시설 API: 체육관, 축구장, 수영장 데이터',
          '브라우저 지리적 위치 API: 사용자 위치 감지',
          'Leaflet 지도: 대화형 지도 시각화'
        ]
      }
    ]
  },
  keyFeatures: {
    metrics: [
      { title: 'API 통합', description: '지능형 캐싱을 포함한 4개 이상의 한국 공공 데이터 API' },
      { title: '출발 계산', description: '교통, 날씨 및 이벤트 데이터를 포함한 다중 요소 알고리즘' },
      { title: '주차 예측', description: '이벤트, 날씨 및 시간적 요인을 포함한 ML과 유사한 알고리즘' },
      { title: '교통 수단', description: '날씨 인식 추천을 포함한 5개 이상의 교통 수단' }
    ],
    userFeatures: [
      {
        title: '스마트 이벤트 계획',
        iconKey: 'BarChart3',
        items: [
          '올림픽공원 시설의 이벤트 탐색',
          '자동 출발 시간 계산',
          '이벤트 시작 30분 전 도착',
          '이벤트 기반 주차 예측',
          '다중 모드 교통 비교'
        ]
      },
      {
        title: '주차 지능',
        iconKey: 'MapPin',
        items: [
          '실시간 주차 가용성',
          '예측 혼잡 모델링',
          '거리 기반 필터링 및 정렬',
          '용량 및 요금 정보',
          '예측을 위한 신뢰도 점수'
        ]
      },
      {
        title: '대화형 지도',
        iconKey: 'MapPin',
        items: [
          '사용자 위치 감지',
          '목적지 및 이벤트 마커',
          '혼잡 색상을 포함한 주차장 위치',
          '경로 시각화',
          '시설 마커'
        ]
      }
    ],
    engineeringFeatures: [
      {
        title: '고급 알고리즘',
        iconKey: 'Brain',
        items: [
          '다중 요소 출발 시간 계산',
          'ML과 유사한 모델링을 포함한 주차 혼잡 예측',
          '날씨 인식 교통 추천',
          '정확한 거리를 위한 Haversine 공식',
          '예측을 위한 신뢰도 점수'
        ]
      },
      {
        title: '데이터 통합',
        iconKey: 'Layers',
        items: [
          '4개 이상의 다른 API 구조 정규화',
          '지능형 캐싱 전략(60초-3600초)',
          '안정성을 위한 폴백 데이터',
          '오류 처리 및 우아한 성능 저하',
          '실시간 데이터 업데이트'
        ]
      }
    ]
  },
  challenges: {
    challenges: [
      {
        challenge: '다른 응답 구조 및 속도 제한을 가진 여러 한국 공공 데이터 API 통합',
        solution: '각 API에 대한 정규화 파이프라인을 생성하고, 지능형 캐싱 전략(교통 60초, 날씨 3600초)을 구현하며, 정적 JSON 파일의 폴백 데이터 시스템을 구축했습니다. API를 사용할 수 없을 때 우아하게 성능을 저하시키기 위한 포괄적인 오류 처리를 추가했습니다.'
      },
      {
        challenge: '교통, 날씨 및 이벤트 데이터를 결합한 정확한 출발 시간 계산 구축',
        solution: '거리에 대한 Haversine 공식, 혼잡 페널티(5-50%)를 포함한 교통 속도, 날씨 영향 페널티(0-40%), 이벤트 기반 도착 시간 요구사항을 사용하는 다중 요소 알고리즘을 개발했습니다. 알고리즘은 모든 요인이 변경될 때 동적으로 업데이트됩니다.'
      },
      {
        challenge: '과거 데이터 없이 예측 주차 혼잡 모델 생성',
        solution: '이벤트 참석 추정, 운전 비율(30-50%), 시간적 요인(주말 +10%, 피크 시간 +5%), 날씨 영향(비/눈의 경우 지붕 있는 주차장 +15%), 현재 점유율 가중 평균(60% 현재, 40% 예측)을 고려하는 ML과 유사한 예측 알고리즘을 구축했습니다. 데이터 가용성을 기반으로 신뢰도 점수를 추가했습니다.'
      },
      {
        challenge: '여러 모드에 걸친 날씨 인식 교통 추천 구현',
        solution: '날씨 페널티(자동차: 비 +20%, 눈 +40%; 자전거: 비 +30%, 눈 +50%)를 포함한 모드별 계산을 생성했습니다. 비현실적인 경로를 필터링하고 나쁜 날씨에 대중 교통을 선호하는 스마트 추천 엔진을 구축했습니다. 연료, 주차 및 교통 요금을 포함하여 각 모드에 대한 비용을 계산했습니다.'
      }
    ]
  },
  results: {
    metrics: [
      '지능형 캐싱을 포함한 4개 이상의 한국 공공 데이터 API 통합',
      '다중 요소 계산을 통한 정확한 출발 시간 예측',
      '신뢰도 점수를 포함한 예측 주차 혼잡 모델링',
      '5개 이상의 모드에 대한 날씨 인식 교통 추천',
      '실시간 데이터 시각화를 포함한 대화형 지도',
      'SEO 및 성능을 위한 서버 사이드 렌더링',
      '폴백 데이터 시스템을 포함한 우아한 오류 처리'
    ],
    description: 'MovePARK은 여러 실시간 데이터 소스를 통합하는 포괄적인 이벤트 계획 및 네비게이션 플랫폼을 성공적으로 제공합니다. 지능형 출발 시간 계산, 예측 주차 모델링 및 날씨 인식 교통 추천은 사용자에게 올림픽공원 이벤트로 가는 여정을 계획하기 위한 실행 가능한 인사이트를 제공합니다. 이 플랫폼은 정교한 알고리즘 계산, 강력한 데이터 통합 및 사용자 중심 디자인을 보여줍니다.'
  },
  learnings: {
    cards: [
      {
        title: '공공 데이터 API 통합',
        iconKey: 'Layers',
        description: '각각 고유한 응답 구조 및 속도 제한을 가진 여러 한국 공공 데이터 API 작업 방법을 배웠습니다. API 제약에도 불구하고 안정성을 보장하기 위해 정규화 파이프라인, 캐싱 전략 및 폴백 시스템을 개발했습니다.'
      },
      {
        title: '알고리즘 문제 해결',
        iconKey: 'Brain',
        description: '레이블이 지정된 훈련 데이터 없이 예측 알고리즘을 구축하는 전문성을 얻었습니다. 여러 요인(이벤트, 날씨, 시간적 패턴)을 결합하여 신뢰도 점수를 포함한 ML과 유사한 예측 모델을 생성했습니다.'
      },
      {
        title: '지리 공간 계산',
        iconKey: 'MapPin',
        description: '정확한 거리 계산, 지리적 위치 통합 및 지도 시각화를 위한 Haversine 공식을 숙달했습니다. Leaflet을 사용하여 좌표, 마커, 경로 및 대화형 지도 기능 작업 방법을 배웠습니다.'
      },
      {
        title: '성능 최적화',
        iconKey: 'Zap',
        description: '데이터 신선도와 API 속도 제한의 균형을 맞추는 지능형 캐싱 전략을 구현했습니다. Next.js 재검증, 서버 사이드 렌더링 및 폴백 데이터를 사용하여 빠르고 안정적인 성능을 보장했습니다.'
      }
    ]
  },
  techStack: {
    categories: [
      { category: 'Frontend Framework', items: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4'] },
      { category: 'Mapping & Location', items: ['Leaflet', 'React-Leaflet', 'Geolocation API'] },
      { category: 'APIs & Services', items: ['Seoul Open Data API', 'KMA Weather API', 'Seoul Parking API', 'KSPO Facilities API'] },
      { category: 'Deployment', items: ['Vercel', 'GitHub'] }
    ]
  },
  links: {
    links: [],
    figmaUrl: '',
    caseStudyUrl: ''
  }
};
