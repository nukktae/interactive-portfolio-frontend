// Korean content file: All user-facing text strings in Korean

export const cocoKO = {
  overview: {
    paragraphs: [
      {
        type: 'text',
        content:
          'COCO는 특히 학생과 젊은 사용자를 위한 학습, 감정 조절 및 스트레스 완화를 지원하도록 설계된 귀여운 인터랙티브 AI 동반자 로봇입니다. 임베디드 시스템(ESP32), 음성 기반 상호작용, 클라우드 기반 AI(OpenAI + Next.js 플랫폼)를 결합하여 따뜻하고 반응적이며 교육적인 어시스턴트를 만듭니다.'
      },
      {
        type: 'text',
        content:
          '현재 3단계 개발 중인 COCO는 하드웨어부터 백엔드, 프론트엔드, UI/UX 디자인까지 구축 중인 풀스택 프로젝트입니다. 시스템은 ESP32 마이크로컨트롤러를 여러 센서(초음파 거리 센서, I2S 마이크, OV2640 카메라가 있는 ESP32-CAM), 액추에이터(서보 모터, DC 모터), 디스플레이(OLED 화면)와 통합하여 표현력 있고 상호작용하는 동반자를 만들고 있습니다. ESP32-CAM은 얼굴 표정 인식을 가능하게 하여 COCO가 사용자의 감정을 이해하고 그에 따라 응답할 수 있게 합니다. ESP32는 OpenAI LLM을 통해 음성 입력 및 카메라 데이터를 처리하는 Next.js 웹 플랫폼과 통신하여 개인화되고 지원적인 응답을 생성합니다.'
      },
      {
        type: 'text',
        content:
          'COCO는 단순한 로봇이 아닙니다 — 듣고, 보고, 말하고, 감정을 표시하며, 확장된 지능과 개인화를 위해 웹 플랫폼에 연결하는 부드러운 존재입니다. ESP32-CAM 얼굴 인식 기능을 통해 COCO는 사용자의 표정과 감정을 인식할 수 있어 상호작용이 더 공감적이고 컨텍스트 인식적입니다. 현재 3단계 개발 중이며, 이 프로젝트는 임베디드 시스템, 컴퓨터 비전, 하드웨어 프로토타이핑, IoT 통신, 풀스택 개발, AI 통합 및 인간 중심 제품 디자인에 대한 전문성을 보여줍니다.'
      }
    ]
  },
  role: {
    roles: [
      {
        title: '임베디드 시스템 엔지니어',
        iconKey: 'Code',
        responsibilities: [
          '8개 이상의 하드웨어 구성 요소(마이크, 센서, 서보, 모터)를 통합하는 ESP32 펌웨어 설계 및 구현',
          'I2S 오디오 처리, OLED 디스플레이 드라이버 및 Wi-Fi 통신 프로토콜 개발',
          '안정적인 다중 구성 요소 작동을 위한 모터 제어 시스템 및 전원 관리 구축'
        ],
        impacts: [
          '실시간 센서 처리를 포함한 완전히 기능하는 하드웨어 프로토타입 제공',
          '자동 재연결 로직을 통한 원활한 클라우드 연결성 활성화'
        ]
      },
      {
        title: '백엔드 개발자',
        iconKey: 'Database',
        responsibilities: [
          'RESTful API 엔드포인트를 포함한 COCO의 클라우드 두뇌로서 Next.js 웹 플랫폼 아키텍처 설계',
          '자연어 이해 및 AI 성격 조정을 위한 OpenAI GPT API 통합',
          '오디오 처리 파이프라인 및 대화 기록 관리 구축'
        ],
        impacts: [
          '음성 입력에서 AI 출력까지 <2초 응답 지연 시간 달성',
          '여러 COCO 장치를 지원하는 확장 가능한 아키텍처 생성'
        ]
      },
      {
        title: '프론트엔드 개발자 & UI/UX 디자이너',
        iconKey: 'Smartphone',
        responsibilities: [
          'COCO 관리, 대화 기록 및 장치 모니터링을 위한 웹 인터페이스 개발',
          'OLED 디스플레이를 위한 얼굴 표정 시스템을 포함한 COCO의 동반자 성격 설계',
          '음성 기반 대화를 위한 상호작용 플로우 및 시각적 피드백 시스템 생성'
        ],
        impacts: [
          '접근하기 쉬운 따뜻하고 친근한 AI 성격 확립',
          '도구 중심이 아닌 동반자 중심 사용자 경험 설계'
        ]
      }
    ]
  },
  problem: {
    summary: '학생과 젊은 사용자들은 감정적 지원과 교육적 도움이 필요하지만, 기존 AI 인터페이스는 차갑고 비인격적으로 느껴져 진정한 동반자의 따뜻함과 존재감이 부족합니다.',
    content: '전통적인 AI 어시스턴트는 효율성과 작업 완료에 초점을 맞추지만, 감정적 존재감과 진정한 동반자 관계를 제공할 능력이 부족합니다. 스트레스, 불안, 학습 도전에 직면한 학생들에게 차가운 인터페이스는 필요한 위로와 지원을 제공하지 못합니다. 기존 솔루션은 순수 소프트웨어 기반(물리적 존재 부족)이거나 순수 하드웨어 기반(지능 부족)이어서 감정적으로 인식되고 물리적으로 존재하는 AI 동반자를 위한 공간을 만듭니다.',
    painPoints: [
      { description: 'AI 상호작용에서 감정적 존재감과 따뜻함 부족' },
      { description: 'AI를 멀고 비인격적으로 느끼게 만드는 물리적 구현 부재' },
      { description: '교육 지원 시스템이 동반자 중심이 아닌 작업 중심' },
      { description: '스트레스 완화 도구가 동반자의 상호작용적이고 반응적인 특성 부족' },
      { description: '기존 로봇은 너무 비싸거나 클라우드 지능이 부족함' }
    ],
    whyItMatters: '정신 건강과 학습 지원은 학생들에게 중요하며, 특히 오늘날의 고압력 학업 환경에서 더욱 그렇습니다. 물리적 존재, 감정적 인식, 교육적 지능을 결합한 AI 동반자는 진정한 지원을 제공할 수 있습니다. AI를 차갑고 거래적이 아닌 친절하고 존재하며 지원적으로 느껴지게 만들어 사람들이 실제로 더 나아지고 더 효과적으로 학습할 수 있도록 돕는 기술을 만들 수 있습니다.'
  },
  goals: {
    goals: [
      { title: '음성 상호작용', iconKey: 'Zap', metric: '<2초 클라우드 응답 지연 시간으로 실시간 음성 입력/출력' },
      { title: '감정 디스플레이', iconKey: 'Heart', metric: '감정 및 상태를 보여주는 표현력 있는 OLED 애니메이션' },
      { title: '클라우드 지능', iconKey: 'Brain', metric: '개인화되고 지원적인 응답을 위한 OpenAI LLM 통합' },
      { title: '물리적 존재', iconKey: 'Users', metric: '서보를 사용한 근접 감지 및 반응형 움직임' },
      { title: '신뢰성', iconKey: 'Award', metric: '자동 재연결을 통한 99% 이상의 Wi-Fi 연결성' },
      { title: '사용자 경험', iconKey: 'TrendingUp', metric: '따뜻하고 접근하기 쉬운 동반자 중심 디자인' }
    ]
  },
  architecture: {
    items: [
      {
        title: '하드웨어 아키텍처',
        description: 'COCO의 하드웨어 시스템은 모든 구성 요소를 조정하는 두뇌 역할을 하는 ESP32 마이크로컨트롤러를 중심으로 합니다. 시스템은 센서(마이크, 거리 센서), 액추에이터(서보, 모터), 디스플레이(OLED)를 일관된 로봇 플랫폼으로 통합합니다. 전원 관리는 모든 구성 요소에서 안정적인 작동을 보장합니다.',
        features: [
          '중앙 마이크로컨트롤러로서 ESP32 USB-C 개발 보드',
          '얼굴 표정 인식을 위한 ESP32-CAM 블루투스+WiFi(OV2640 카메라) + 어댑터 보드',
          '고품질 음성 캡처를 위한 INMP441 I2S 디지털 마이크',
          '명확한 오디오 출력을 위한 PAM8403 증폭기 + 50mm 스피커',
          '얼굴 표정 및 상태를 위한 0.96" OLED 디스플레이(I2C)',
          '근접 감지를 위한 HC-SR04P 초음파 센서',
          '머리 및 몸 움직임을 위한 SG-90 서보 모터(×2)',
          '이동성을 위한 L298N 모터 드라이버가 있는 4WD 로봇 섀시',
          '빠른 반복을 위한 모듈식 브레드보드 프로토타이핑'
        ],
        userFlows: undefined
      },
      {
        title: '소프트웨어 아키텍처',
        description: '소프트웨어 아키텍처는 ESP32가 Next.js 클라우드 백엔드와 통신하는 클라이언트 역할을 하는 클라이언트-서버 모델을 따릅니다. 백엔드는 OpenAI를 통해 음성 입력을 처리하고, 응답을 생성하며, ESP32로 반환하여 오디오 출력 및 디스플레이 업데이트를 수행합니다.',
        features: [
          'ESP32 펌웨어가 하드웨어 제어 및 센서 읽기 처리',
          'ESP32 ↔ Next.js 백엔드를 위한 Wi-Fi 통신 프로토콜',
          'AI 요청 처리 및 사용자 데이터 관리를 위한 Next.js 웹 플랫폼',
          '자연어 이해를 위한 OpenAI GPT 통합',
          '계층 간 깨끗한 통신을 위한 RESTful API 설계',
          '실시간 오디오 스트리밍 및 처리 파이프라인',
          '네트워크 신뢰성을 위한 오류 처리 및 재연결 로직'
        ],
        userFlows: [
          {
            name: '음성 상호작용 플로우',
            iconKey: 'Zap',
            description: '사용자 음성에서 COCO 응답까지의 완전한 사이클',
            steps: [
              '사용자가 말함 → INMP441 마이크가 I2S를 통해 오디오 캡처',
              'ESP32가 Wi-Fi를 통해 오디오를 Next.js 백엔드로 스트리밍',
              '백엔드가 OpenAI Whisper → GPT를 통해 응답 생성',
              'ESP32로 응답 반환 → 오디오 출력 + OLED 표정 + 서보 애니메이션'
            ]
          },
          {
            name: '근접 감지 플로우',
            iconKey: 'Users',
            description: '사용자 존재를 기반으로 한 깨우기 및 상호작용 트리거',
            steps: [
              'HC-SR04P 센서가 범위 내 사용자 감지(<50cm)',
              'COCO가 인사 표정 및 서보 제스처로 깨어남',
              '시스템이 활성 듣기 모드로 진입',
              '상호작용이 없으면 절전 모드로 복귀'
            ]
          }
        ]
      }
    ]
  },
  systemArchitecture: {
    categories: [
      {
        title: '하드웨어 구성 요소',
        iconKey: 'Layers',
        items: [
          'ESP32 USB-C 개발 보드(Wi-Fi 및 블루투스가 있는 듀얼 코어 MCU)',
          'ESP32-CAM 블루투스+WiFi(OV2640 카메라) + 어댑터 보드(얼굴 표정 인식)',
          'INMP441 I2S 마이크 + PAM8403 증폭기 + 스피커(오디오 입출력)',
          '0.96" OLED 디스플레이 I2C(시각적 피드백 및 표정)',
          'HC-SR04P 초음파 센서(근접 감지)',
          'SG-90 서보 모터 ×2 + 4WD 섀시 + L298N 드라이버(이동)',
          '다중 구성 요소를 위한 전원 관리 시스템'
        ]
      },
      {
        title: '소프트웨어 스택',
        iconKey: 'Code',
        items: [
          'ESP32 펌웨어(Arduino IDE) I2S, Wi-Fi, HTTP, 카메라 라이브러리 포함',
          '얼굴 표정 인식을 위한 ESP32-CAM 카메라 처리',
          'TypeScript를 사용한 Next.js 15+ 웹 플랫폼',
          'AI 처리를 위한 OpenAI API(GPT-4 + Whisper)',
          'ESP32 ↔ 백엔드 통신을 위한 RESTful API 설계'
        ]
      },
      {
        title: '통신 프로토콜',
        iconKey: 'Database',
        items: [
          'I2S(오디오), I2C(디스플레이), Wi-Fi 802.11(클라우드 통신)',
          '카메라 인터페이스(OV2640), HTTP/REST(API), PWM(서보 제어), GPIO(센서/모터)'
        ]
      }
    ]
  },
  keyFeatures: {
    metrics: [
      { title: '음성 처리 지연 시간', description: '음성 입력에서 AI 응답 출력까지 <2초' },
      { title: '하드웨어 통합', description: 'ESP32 조정으로 조화롭게 작동하는 9개 이상의 구성 요소' },
      { title: '클라우드 연결성', description: '자동 재연결을 통한 99% 이상의 Wi-Fi 신뢰성' },
      { title: '얼굴 인식', description: '사용자 표정 및 감정을 인식하기 위한 OV2640 카메라가 있는 ESP32-CAM' },
      { title: '감정 표현', description: 'OLED 디스플레이에 10개 이상의 얼굴 표정 패턴' }
    ],
    userFeatures: [
      {
        title: '음성 상호작용',
        iconKey: 'Zap',
        items: [
          'I2S 마이크 및 증폭기를 통한 실시간 음성 입출력',
          'OpenAI GPT를 통한 자연어 이해',
          '대화 기록을 포함한 지원적이고 교육적인 AI 응답'
        ]
      },
      {
        title: '감정 디스플레이',
        iconKey: 'Heart',
        items: [
          '애니메이션 전환을 포함한 OLED 얼굴 표정',
          '상태 표시기(듣기, 생각하기, 말하기, 유휴)',
          '근접 기반 깨우기 애니메이션'
        ]
      },
      {
        title: '물리적 상호작용',
        iconKey: 'Users',
        items: [
          '사용자 감지를 위한 초음파 거리 감지',
          '감정 인식을 위한 ESP32-CAM 얼굴 표정 인식',
          '서보 모터 애니메이션 및 4WD 섀시 이동',
          '표현력 있는 제스처 및 근접 기반 참여'
        ]
      },
      {
        title: '클라우드 지능',
        iconKey: 'Brain',
        items: [
          '지능적 대화를 위한 OpenAI GPT 통합',
          '교육 및 스트레스 완화 지원을 포함한 개인화된 응답',
          '확장된 기능 및 관리를 위한 웹 플랫폼'
        ]
      }
    ],
    engineeringFeatures: [
      {
        title: '하드웨어 통합',
        iconKey: 'Layers',
        items: [
          'I2S 오디오 처리를 포함한 ESP32를 통한 다중 구성 요소 조정',
          '실시간 센서 읽기, 모터 제어 및 전원 관리',
          '빠른 프로토타이핑을 위한 모듈식 하드웨어 아키텍처'
        ]
      },
      {
        title: '펌웨어 & 백엔드',
        iconKey: 'Code',
        items: [
          'Wi-Fi, REST API 클라이언트, OLED 드라이버를 포함한 ESP32 Arduino 프레임워크',
          'OpenAI 통합(GPT + Whisper)을 포함한 Next.js API 라우트',
          '사용자 프로필 관리, 오디오 처리 및 오류 처리'
        ]
      }
    ]
  },
  challenges: {
    challenges: [
      {
        problem: '다중 하드웨어 구성 요소 통합',
        solution: 'ESP32를 중앙 조정자로 하는 모듈식 아키텍처를 설계했습니다. 안정적인 다중 구성 요소 작동을 위한 전원 관리 및 포괄적인 테스트를 구현했습니다.'
      },
      {
        problem: '실시간 오디오 처리 및 클라우드 지연 시간',
        solution: '청크 전송을 포함한 효율적인 I2S 버퍼링을 구현했습니다. AI 처리 중 "생각 중" 상태 표시기를 만들고 하드웨어가 반응성을 유지하도록 비동기 통신 패턴을 설계했습니다.'
      },
      {
        problem: '작은 OLED 디스플레이에 표현력 있는 애니메이션 생성',
        solution: '부드러운 전환을 위한 상태 머신을 포함한 컴팩트한 비트맵 패턴 시스템을 개발했습니다. 128x64 픽셀 디스플레이에 최적화된 10개 이상의 표정 패턴을 설계했습니다.'
      },
      {
        problem: '신뢰할 수 있는 Wi-Fi 통신',
        solution: '자동 재연결, 하트비트 모니터링 및 지수 백오프를 포함한 강력한 연결 관리를 구현했습니다. 오프라인 작동을 위한 폴백 상태를 설계했습니다.'
      }
    ]
  },
  results: {
    metrics: [
      '3단계: 9개 이상의 구성 요소를 가진 하드웨어-소프트웨어 통합 진행 중',
      '<2초 클라우드 응답 지연 시간으로 실시간 음성 상호작용 파이프라인 구현',
      '10개 이상의 얼굴 표정 패턴을 가진 표현력 있는 감정 디스플레이 시스템 설계',
      '자동 재연결 로직을 포함한 Wi-Fi 연결성 구현',
      '하드웨어에서 UI/UX 디자인까지의 풀스택 개발 활발히 진행 중'
    ],
    description: '현재 3단계 개발 중인 COCO는 하드웨어, 펌웨어, 백엔드, 프론트엔드 및 UI/UX 디자인을 아우르는 포괄적인 풀스택 프로젝트를 보여줍니다. 시스템은 여러 하드웨어 구성 요소를 일관된 로봇 플랫폼으로 통합하고 있으며, 지능적 대화를 위해 클라우드 AI에 연결하고, 따뜻하고 동반자 중심의 사용자 경험을 개발하고 있습니다. 이 프로젝트는 임베디드 시스템, IoT 통신, 풀스택 개발, AI 통합 및 인간 중심 디자인에 대한 전문성을 보여주며, 활발한 개발이 진행 중입니다.'
  },
  learnings: {
    cards: [
      {
        title: '임베디드 시스템 개발',
        iconKey: 'Layers',
        description: '하드웨어-소프트웨어 시스템 구축은 마이크로컨트롤러, 센서 및 통신 프로토콜에 대한 깊은 이해가 필요합니다. 전원 관리 및 구성 요소 조정은 안정적인 작동에 중요합니다.'
      },
      {
        title: '하드웨어-소프트웨어 통합',
        iconKey: 'Code',
        description: '물리적 하드웨어와 클라우드 소프트웨어 간의 격차를 메우는 것은 신중한 프로토콜 설계가 필요합니다. 하드웨어의 실시간 제약은 네트워크 지연 시간과 균형을 맞춰야 하며, 비동기 작업 관리와 명확한 상태 피드백이 필요합니다.'
      },
      {
        title: '물리적 제품의 AI 통합',
        iconKey: 'Brain',
        description: '물리적 장치에 클라우드 AI를 통합하는 것은 네트워크 지연 시간과 오류 상태를 우아하게 처리해야 합니다. AI 성격 디자인은 기술적 구현만큼 중요합니다 — AI를 따뜻하게 느끼게 만드는 것은 신중한 프롬프트 엔지니어링이 필요합니다.'
      },
      {
        title: '풀스택 제품 개발',
        iconKey: 'TrendingUp',
        description: '하드웨어에서 UI까지 완전한 제품을 구축하는 것은 각 계층을 깊이 이해하면서 시스템 수준의 관점을 유지해야 합니다. 동반자 중심 디자인은 기능 복잡성보다 감정적 연결을 우선시합니다.'
      }
    ]
  },
  techStack: {
    categories: [
      { category: 'Hardware', items: ['ESP32', 'INMP441 Microphone', 'PAM8403 Amplifier', 'OLED Display', 'HC-SR04P Sensor', 'SG-90 Servos', 'L298N Motor Driver', '4WD Chassis'] },
      { category: 'Firmware', items: ['Arduino IDE', 'ESP32 Framework', 'I2S Library', 'Wi-Fi Library', 'HTTP Client'] },
      { category: 'Backend', items: ['Next.js', 'TypeScript', 'OpenAI API', 'RESTful APIs'] },
      { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript'] },
      { category: 'Design & Tools', items: ['Figma', 'Arduino IDE', 'Git & GitHub'] }
    ]
  },
  links: {
    links: [],
    figmaUrl: '',
    caseStudyUrl: ''
  }
};

