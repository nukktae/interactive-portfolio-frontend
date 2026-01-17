import React from 'react';
import { CaseStudyContent } from '../index';
import { Language } from '@/contexts/LanguageContext';

// Helper function to build overview content
function buildOverviewContent(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        { className: 'text-foreground/80 text-lg leading-relaxed mb-4' },
        'Transformed plant care from reactive guesswork into a proactive, data-driven routine by integrating custom IoT sensors with a high-fidelity mobile experience. Achieved 99%+ BLE connection success and 95% notification delivery rate.'
      ),
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-3 gap-4 mt-6' },
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, 'Role'),
          React.createElement('p', { className: 'text-base font-semibold' }, 'Lead UX Engineer & Frontend Developer Lead')
        ),
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, 'Specialty'),
          React.createElement('p', { className: 'text-base font-semibold' }, 'IoT Integration, Real-Time Visualization, AI-Powered UX')
        ),
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, 'Stack'),
          React.createElement('p', { className: 'text-base font-semibold' }, 'Flutter, Dart, Firebase, TensorFlow Lite, BLE')
        )
      )
    )
  );
}

// Helper function to build problem content
function buildProblemContent(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-4' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      'Indoor plant care is often a game of guesswork, leading to high plant mortality rates. The challenge was to bridge the data gap in plant care by transforming reactive guesswork into a proactive, data-driven routine.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-3' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'The "Green Thumb" Challenge'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'The mission was to transform plant care from reactive guesswork into a proactive, data-driven routine by integrating custom IoT sensors with a high-fidelity mobile experience, bridging the gap between physical sensors and digital interfaces.'
        )
      )
    )
  );
}

// Helper function to build solution content
function buildSolutionContent(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-8' },
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, 'UX Engineering: Designing for the IoT Lifecycle'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Designed a guided, multi-step pairing flow that handles device discovery, BLE handshakes, and WiFi credential transmission in under 30 seconds. Engineered an interactive dashboard using FL Chart, providing users with 7-day moisture trends and automated health diagnostics. Developed a color-coded status system (Ideal, Underwater, Overwater) that uses visual cues to reduce "watering anxiety" and guide user action.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, 'Frontend Leadership: Scalable Cross-Platform Architecture'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Developed 55+ reusable widgets and 38+ production screens using a clean architecture pattern. Implemented the Provider pattern to manage complex global states, including multi-language support (English/Korean) and real-time sensor data streams. Engineered custom abstraction layers to handle the nuances of BLE and permission management across iOS and Android.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, 'Resilient BLE Communication Layer'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Built a custom BLE Service with proactive retry logic, 8-second connection timeouts, and automated cleanup to prevent memory leaks. Achieved a 99%+ connection success rate, ensuring users always have access to their plant\'s vital signs across diverse mobile hardware and OS versions.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, 'Intelligent Notification Ecosystem'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Architected a comprehensive notification service using Firebase Cloud Messaging (FCM) with local fallback and deep-linking capabilities. Achieved a 95% delivery rate for time-sensitive care reminders across foreground, background, and terminated app states, driving consistent user engagement and proactive plant care.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, 'On-Device AI & ML Integration'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Integrated TensorFlow Lite for on-device inference, combined with a backend species database for high-accuracy matching. Achieved instant, 95% accurate plant recognition that works even in low-connectivity environments, providing instant plant identification without relying solely on slow, cloud-based API calls.'
      )
    )
  );
}

// Helper function to build process content
function buildProcessContent(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      'Led the design and implementation of the entire user journey, ensuring that complex hardware interactions felt seamless and intuitive. Architected a modular system designed for performance and maintainability.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'The "Zero-Friction" Onboarding'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Designed a guided, multi-step pairing flow that handles device discovery, BLE handshakes, and WiFi credential transmission in under 30 seconds, ensuring users can start monitoring their plants immediately.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'Modular Component Library'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Developed 55+ reusable widgets and 38+ production screens using a clean architecture pattern, ensuring scalability and maintainability across the entire application.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'State Management Mastery'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Implemented the Provider pattern to manage complex global states, including multi-language support (English/Korean) and real-time sensor data streams, ensuring seamless user experience across different contexts.'
        )
      )
    )
  );
}

// Helper function to build results content
function buildResultsContent(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'div',
      { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' },
      React.createElement(
        'div',
        { className: 'p-6 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-3xl font-black mb-2' }, '99%+'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'BLE Success Rate'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, 'With automated error recovery')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-3xl font-black mb-2' }, '<2s'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'Real-Time Sync'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, 'From sensor to mobile UI')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-3xl font-black mb-2' }, '95%'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'Notification Delivery'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, 'For proactive care reminders')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-3xl font-black mb-2' }, '38+'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'Production Screens'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, '55+ reusable widgets')
      )
    ),
    React.createElement(
      'div',
      { className: 'mt-8 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'Connectivity Excellence'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          '99%+ BLE Success Rate with automated error recovery. Engineered a robust connection layer that handles complex iOS/Android Bluetooth differences, ensuring users always have access to their plant\'s vital signs.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'AI Accuracy'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          '95% AI Accuracy with integrated on-device ML for instant plant identification. Achieved instant, 95% accurate plant recognition that works even in low-connectivity environments.'
        )
      )
    )
  );
}

// Helper function to build learnings content
function buildLearningsContent(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      'This project showcases the ability to lead the development of complex, hardware-integrated mobile applications, bridging the gap between physical sensors and digital interfaces.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'The IoT UX Specialist'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'By owning the UX Engineering and Frontend Architecture, I bridged the gap between physical sensors and digital interfaces, creating a product that is both technically robust and emotionally resonant. The result is a production-ready IoT ecosystem that empowers users to become successful indoor gardeners through data and AI.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'IoT Mastery'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Highlighting BLE, WiFi credential transmission, and sensor pairing signals the ability to handle the most difficult mobile engineering challenges. The 99%+ connection success rate demonstrates expertise in building resilient IoT communication layers.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'Frontend Leadership & AI/ML Integration'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Emphasizing the 38+ screens and 55+ widgets shows the ability to lead large-scale, production-grade projects. Using TensorFlow Lite for on-device inference positions the work at the cutting edge of mobile technology, combining frontend leadership with AI/ML expertise.'
        )
      )
    )
  );
}

// Korean helper functions
function buildOverviewContentKO(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        { className: 'text-foreground/80 text-lg leading-relaxed mb-4' },
        '맞춤형 IoT 센서와 고신뢰 모바일 경험을 결합해 식물 관리를 사후 대응이 아닌, 선제적·데이터 기반 루틴으로 전환했습니다. BLE 연결 성공률 99%+ 및 알림 전달률 95%를 달성했습니다.'
      ),
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-3 gap-4 mt-6' },
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, '역할'),
          React.createElement('p', { className: 'text-base font-semibold' }, 'Lead UX Engineer & Frontend Developer Lead')
        ),
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, '전문 영역'),
          React.createElement('p', { className: 'text-base font-semibold' }, 'IoT 연동, 실시간 시각화, AI 기반 UX')
        ),
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, '기술 스택'),
          React.createElement('p', { className: 'text-base font-semibold' }, 'Flutter, Dart, Firebase, TensorFlow Lite, BLE')
        )
      )
    )
  );
}

function buildProblemContentKO(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-4' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      '실내 식물 관리는 종종 감에 의존하며, 이는 높은 고사율로 이어집니다. 맞춤형 IoT 센서와 고신뢰 모바일 경험을 결합해 사후 대응이 아닌 선제적·데이터 기반 루틴으로 전환하는 것이 과제였습니다.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-3' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, '\'그린 썸(Green Thumb)\' 과제'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          '맞춤형 IoT 센서와 고신뢰 모바일 경험을 결합해 식물 관리를 사후 대응이 아닌, 선제적·데이터 기반 루틴으로 전환하는 것이 미션이었습니다. 물리적 센서와 디지털 인터페이스 간의 간극을 해소했습니다.'
        )
      )
    )
  );
}

function buildSolutionContentKO(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-8' },
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, 'UX 엔지니어링: IoT 라이프사이클을 위한 설계'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        '디바이스 탐색, BLE 핸드셰이크, Wi-Fi 자격 증명 전달을 포함한 가이드형 페어링 플로우를 30초 이내로 완성했습니다. FL Chart 기반 인터랙티브 대시보드로 7일 수분 트렌드와 자동 건강 진단을 제공합니다. Ideal / Underwater / Overwater 컬러 상태 시스템으로 \'물 주기 불안\'을 줄이고 올바른 행동을 유도합니다.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, '프론트엔드 리더십: 확장 가능한 크로스플랫폼 아키텍처'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Clean Architecture 패턴 기반으로 55+ 재사용 위젯, 38+ 프로덕션 화면을 개발했습니다. Provider 패턴을 적용해 다국어(영/한) 및 실시간 센서 스트림을 포함한 전역 상태를 관리합니다. iOS/Android BLE 및 권한 처리 차이를 흡수하는 커스텀 추상화 레이어를 설계했습니다.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, '복원력 있는 BLE 통신 레이어'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        '사전 재시도 로직, 8초 연결 타임아웃, 자동 정리(cleanup)를 포함한 커스텀 BLE 서비스를 구축했습니다. 다양한 모바일 하드웨어와 OS 버전에서 연결 성공률 99%+를 달성하여 사용자가 언제든 식물의 핵심 상태에 접근할 수 있도록 했습니다.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, '지능형 알림 에코시스템'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'Firebase Cloud Messaging(FCM) 기반 로컬 폴백 및 딥링크를 포함한 통합 알림 아키텍처를 설계했습니다. 포그라운드/백그라운드/앱 종료 상태 전반에서 시간 민감 알림의 95% 전달률을 달성하여 지속적인 사용자 참여와 선제적 관리 행동을 유도합니다.'
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-semibold text-foreground mb-4' }, '온디바이스 AI & ML 통합'),
      React.createElement(
        'p',
        { className: 'text-foreground/80 leading-relaxed mb-4' },
        'TensorFlow Lite를 활용한 온디바이스 추론을 백엔드 종 데이터베이스와 결합해 정확도를 향상시켰습니다. 저연결 환경에서도 안정적으로 동작하는 95% 정확도의 즉각적인 식물 인식을 달성하여 느린 클라우드 API 의존 없이 즉각적인 식물 인식을 제공합니다.'
      )
    )
  );
}

function buildProcessContentKO(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      '복잡한 하드웨어 상호작용이 자연스럽고 직관적으로 느껴지도록 전체 사용자 여정을 설계·구현했습니다. 성능·유지보수성을 고려한 모듈형 시스템을 설계했습니다.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'Zero-Friction 온보딩'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          '디바이스 탐색, BLE 핸드셰이크, Wi-Fi 자격 증명 전달을 포함한 가이드형 페어링 플로우를 30초 이내로 완성하여 사용자가 즉시 식물 모니터링을 시작할 수 있도록 했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, '모듈형 컴포넌트 라이브러리'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Clean Architecture 패턴 기반으로 55+ 재사용 위젯, 38+ 프로덕션 화면을 개발하여 전체 애플리케이션 전반의 확장성과 유지보수성을 보장했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, '상태 관리 숙련도'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'Provider 패턴을 적용해 다국어(영/한) 및 실시간 센서 스트림을 포함한 복잡한 전역 상태를 관리하여 다양한 컨텍스트에서 원활한 사용자 경험을 보장했습니다.'
        )
      )
    )
  );
}

function buildResultsContentKO(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'div',
      { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' },
      React.createElement(
        'div',
        { className: 'p-6 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-3xl font-black mb-2' }, '99%+'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'BLE 성공률'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, '자동 오류 복구 포함')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-3xl font-black mb-2' }, '<2초'),
        React.createElement('p', { className: 'text-sm opacity-90' }, '실시간 동기화'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, '센서에서 모바일 UI까지')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-3xl font-black mb-2' }, '95%'),
        React.createElement('p', { className: 'text-sm opacity-90' }, '알림 전달률'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, '선제적 관리 알림')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-3xl font-black mb-2' }, '38+'),
        React.createElement('p', { className: 'text-sm opacity-90' }, '프로덕션 화면'),
        React.createElement('p', { className: 'text-xs opacity-70 mt-2' }, '55+ 재사용 위젯')
      )
    ),
    React.createElement(
      'div',
      { className: 'mt-8 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, '연결성 우수성'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          '자동 오류 복구를 포함한 BLE 성공률 99%+를 달성했습니다. iOS/Android 간 블루투스 차이를 고려한 견고한 연결 레이어를 설계하여 사용자가 언제든 식물의 핵심 상태에 접근할 수 있도록 했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'AI 정확도'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          '온디바이스 ML을 통한 즉각적인 식물 인식으로 95% AI 정확도를 달성했습니다. 저연결 환경에서도 안정적으로 동작하는 95% 정확도의 즉각적인 식물 인식을 달성했습니다.'
        )
      )
    )
  );
}

function buildLearningsContentKO(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      '이 프로젝트는 하드웨어가 결합된 복잡한 모바일 애플리케이션을 리드할 수 있는 역량을 증명하며, 물리적 센서와 디지털 인터페이스 간의 간극을 해소합니다.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'IoT UX 스페셜리스트'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'UX 엔지니어링과 프론트엔드 아키텍처를 직접 소유함으로써 물리적 센서와 디지털 인터페이스 간의 간극을 해소했습니다. 데이터와 AI를 통해 사용자가 성공적인 실내 가드너가 되도록 돕는 프로덕션 레디 IoT 에코시스템을 완성했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, 'IoT 숙련도'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          'BLE, Wi-Fi 자격 증명 전달, 센서 페어링을 강조하여 가장 어려운 모바일 엔지니어링 과제를 처리할 수 있는 역량을 보여줍니다. 연결 성공률 99%+는 복원력 있는 IoT 통신 레이어 구축 전문성을 입증합니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'font-semibold mb-2' }, '프론트엔드 리더십 & AI/ML 통합'),
        React.createElement(
          'p',
          { className: 'text-sm opacity-90' },
          '38+ 화면과 55+ 위젯을 강조하여 대규모 프로덕션급 프로젝트를 리드할 수 있는 역량을 보여줍니다. TensorFlow Lite를 활용한 온디바이스 추론은 모바일 기술의 최첨단에 위치하며, 프론트엔드 리더십과 AI/ML 전문성을 결합합니다.'
        )
      )
    )
  );
}

export function getRootinCaseStudy(language: Language = 'en'): CaseStudyContent | null {
  if (language === 'ko') {
    return {
      slug: 'rootin',
      title: 'Rootin — IoT 기반 식물 인텔리전스의 미래를 엔지니어링하다',
      description: 'Lead UX Engineer & Frontend Developer Lead로서 IoT 기반 식물 관리 플랫폼을 구축하고, BLE 연결 성공률 99%+, 알림 전달률 95%, 프로덕션 화면 38+개를 달성했습니다.',
      sections: [
        {
          id: 'overview',
          type: 'overview',
          title: '개요',
          content: buildOverviewContentKO()
        },
        {
          id: 'problem',
          type: 'problem',
          title: '도전 과제',
          content: buildProblemContentKO()
        },
        {
          id: 'solution',
          type: 'solution',
          title: '엔지니어링 솔루션',
          content: buildSolutionContentKO()
        },
        {
          id: 'process',
          type: 'process',
          title: '프로세스',
          content: buildProcessContentKO()
        },
        {
          id: 'results',
          type: 'results',
          title: '결과 및 임팩트',
          content: buildResultsContentKO()
        },
        {
          id: 'learnings',
          type: 'learnings',
          title: '핵심 인사이트',
          content: buildLearningsContentKO()
        }
      ]
    };
  }

  return {
    slug: 'rootin',
    title: 'Rootin — Engineering the Future of IoT-Driven Plant Intelligence',
    description: 'Lead UX Engineer & Frontend Developer Lead building an IoT-driven plant care platform with 99%+ BLE connection success, 95% notification delivery, and 38+ production screens.',
    sections: [
      {
        id: 'overview',
        type: 'overview',
        title: 'Overview',
        content: buildOverviewContent()
      },
      {
        id: 'problem',
        type: 'problem',
        title: 'The Challenge',
        content: buildProblemContent()
      },
      {
        id: 'solution',
        type: 'solution',
        title: 'Engineering Solutions',
        content: buildSolutionContent()
      },
      {
        id: 'process',
        type: 'process',
        title: 'Process',
        content: buildProcessContent()
      },
      {
        id: 'results',
        type: 'results',
        title: 'Results & Impact',
        content: buildResultsContent()
      },
      {
        id: 'learnings',
        type: 'learnings',
        title: 'Key Learnings',
        content: buildLearningsContent()
      }
    ]
  };
}
