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
        { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6' },
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
          React.createElement('p', { className: 'text-base font-semibold' }, 'IoT Integration (BLE), Real-Time Data Visualization, AI-Powered UX, Cross-Platform Engineering')
        ),
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, 'Stack'),
          React.createElement('p', { className: 'text-base font-semibold' }, 'Flutter, Dart, Firebase, TensorFlow Lite, Bluetooth Low Energy (BLE)')
        ),
        React.createElement(
          'div',
          { className: 'p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black' },
          React.createElement('p', { className: 'text-sm opacity-70 mb-1' }, 'Impact'),
          React.createElement('p', { className: 'text-base font-semibold' }, '99%+ BLE Connection Success, 95% Notification Delivery, 38+ Production Screens')
        )
      )
    )
  );
}

// Helper function to build problem content
function buildProblemContent(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      'Indoor plant care is often a game of guesswork, leading to high plant mortality rates.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/60 dark:bg-card/70 border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2 text-lg' }, 'The Mission'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Transform plant care from reactive guesswork into a proactive, data-driven routine by integrating custom IoT sensors with a high-fidelity mobile experience.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/60 dark:bg-card/70 border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-3 text-lg' }, 'The Impact'),
        React.createElement(
          'ul',
          { className: 'space-y-2 text-sm text-foreground/80' },
          React.createElement('li', { className: 'flex gap-2' },
            React.createElement('span', { className: 'mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0' }),
            React.createElement('span', null, React.createElement('strong', null, '99%+ BLE Reliability:'), ' Engineered a robust connection layer that handles complex iOS/Android Bluetooth differences.')
          ),
          React.createElement('li', { className: 'flex gap-2' },
            React.createElement('span', { className: 'mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0' }),
            React.createElement('span', null, React.createElement('strong', null, '95% AI Accuracy:'), ' Integrated on-device ML for instant plant identification.')
          ),
          React.createElement('li', { className: 'flex gap-2' },
            React.createElement('span', { className: 'mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0' }),
            React.createElement('span', null, React.createElement('strong', null, 'Real-Time Intelligence:'), ' Achieved ', React.createElement('strong', null, 'sub-2s latency'), ' for sensor-to-app data updates.')
          )
        )
      )
    )
  );
}

// Helper function to build UX engineering content
function buildUXEngineeringContent(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      'I led the design and implementation of the entire user journey, ensuring that complex hardware interactions felt seamless and intuitive.'
    ),
    React.createElement(
    'div',
    { className: 'space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'The "Zero-Friction" Onboarding'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Designed a guided, multi-step pairing flow that handles device discovery, BLE handshakes, and WiFi credential transmission in under 30 seconds.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Real-Time Health Visualization'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Engineered an interactive dashboard using ', React.createElement('strong', null, 'FL Chart'), ', providing users with 7-day moisture trends and automated health diagnostics.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Context-Aware Design'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Developed a color-coded status system (Ideal, Underwater, Overwater) that uses visual cues to reduce "watering anxiety" and guide user action.'
        )
      )
    )
  );
}

// Helper function to build frontend leadership content
function buildFrontendLeadershipContent(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      'As the Frontend Lead, I architected a modular system designed for performance and maintainability.'
    ),
    React.createElement(
      'div',
      { className: 'space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Modular Component Library'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Developed ', React.createElement('strong', null, '55+ reusable widgets'), ' and ', React.createElement('strong', null, '38+ production screens'), ' using a clean architecture pattern.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'State Management Mastery'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Implemented the ', React.createElement('strong', null, 'Provider pattern'), ' to manage complex global states, including multi-language support (English/Korean) and real-time sensor data streams.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Platform-Specific Optimization'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Engineered custom abstraction layers to handle the nuances of BLE and permission management across iOS and Android.'
        )
      )
    )
  );
}

// Helper function to build technical deep dive content
function buildTechnicalDeepDiveContent(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-8' },
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-bold text-foreground mb-4' }, 'A. Resilient BLE Communication Layer'),
      React.createElement(
        'div',
        { className: 'space-y-3' },
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Challenge'),
      React.createElement(
        'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            'Maintaining stable Bluetooth connections across diverse mobile hardware and OS versions.'
      )
    ),
    React.createElement(
      'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Solution'),
      React.createElement(
        'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            'Built a custom ', React.createElement('strong', null, 'BLE Service'), ' with proactive retry logic, 8-second connection timeouts, and automated cleanup to prevent memory leaks.'
      )
    ),
    React.createElement(
      'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Result'),
      React.createElement(
        'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            'A ', React.createElement('strong', null, '99%+ connection success rate'), ', ensuring users always have access to their plant\'s vital signs.'
          )
        )
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-bold text-foreground mb-4' }, 'B. Intelligent Notification Ecosystem'),
      React.createElement(
        'div',
        { className: 'space-y-3' },
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Challenge'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            'Delivering time-sensitive care reminders across foreground, background, and terminated app states.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Solution'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            'Architected a comprehensive notification service using ', React.createElement('strong', null, 'Firebase Cloud Messaging (FCM)'), ' with local fallback and deep-linking capabilities.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Result'),
      React.createElement(
        'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            'A ', React.createElement('strong', null, '95% delivery rate'), ', driving consistent user engagement and proactive plant care.'
          )
        )
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-bold text-foreground mb-4' }, 'C. On-Device AI & ML Integration'),
      React.createElement(
        'div',
        { className: 'space-y-3' },
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Challenge'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            'Providing instant plant identification without relying solely on slow, cloud-based API calls.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Solution'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            'Integrated ', React.createElement('strong', null, 'TensorFlow Lite'), ' for on-device inference, combined with a backend species database for high-accuracy matching.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'Result'),
      React.createElement(
        'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            'Instant, 95% accurate plant recognition that works even in low-connectivity environments.'
          )
        )
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
      { className: 'grid grid-cols-1 md:grid-cols-2 gap-6' },
      React.createElement(
        'div',
        { className: 'p-6 rounded-xl bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-sm opacity-70 mb-2 uppercase tracking-wider' }, 'Connectivity'),
        React.createElement('p', { className: 'text-2xl font-black mb-2' }, '99%+ BLE Success Rate'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'With automated error recovery')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-xl bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-sm opacity-70 mb-2 uppercase tracking-wider' }, 'Latency'),
        React.createElement('p', { className: 'text-2xl font-black mb-2' }, '<2s Real-Time Sync'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'From hardware sensor to mobile UI')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-xl bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-sm opacity-70 mb-2 uppercase tracking-wider' }, 'Engagement'),
        React.createElement('p', { className: 'text-2xl font-black mb-2' }, '95% Notification Delivery'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'For proactive care reminders')
      ),
      React.createElement(
        'div',
        { className: 'p-6 rounded-xl bg-black dark:bg-white text-white dark:text-black' },
        React.createElement('p', { className: 'text-sm opacity-70 mb-2 uppercase tracking-wider' }, 'Scalability'),
        React.createElement('p', { className: 'text-2xl font-black mb-2' }, '38+ Screens & 55+ Widgets'),
        React.createElement('p', { className: 'text-sm opacity-90' }, 'Built on a modular, clean architecture')
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
      'This project showcases my ability to lead the development of complex, hardware-integrated mobile applications.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/60 dark:bg-card/70 border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'The Takeaway'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'By owning the UX Engineering and Frontend Architecture, I bridged the gap between physical sensors and digital interfaces, creating a product that is both technically robust and emotionally resonant.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/60 dark:bg-card/70 border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, 'The Result'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'A production-ready IoT ecosystem that empowers users to become successful indoor gardeners through data and AI.'
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

// Korean helper functions for separate sections
function buildUXEngineeringContentKO(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      '복잡한 하드웨어 상호작용이 자연스럽고 직관적으로 느껴지도록 전체 사용자 여정을 설계·구현했습니다.'
    ),
    React.createElement(
      'div',
      { className: 'space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '"제로 마찰" 온보딩'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '디바이스 탐색, BLE 핸드셰이크, Wi-Fi 자격 증명 전달을 포함한 가이드형 페어링 플로우를 30초 이내로 설계했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '실시간 건강 시각화'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          React.createElement('strong', null, 'FL Chart'), '를 활용한 인터랙티브 대시보드를 설계하여 7일 수분 트렌드와 자동 건강 진단을 제공합니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '컨텍스트 인식 디자인'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '컬러 코딩 상태 시스템(Ideal, Underwater, Overwater)을 개발하여 시각적 신호로 "물 주기 불안"을 줄이고 사용자 행동을 유도합니다.'
        )
      )
    )
  );
}

function buildFrontendLeadershipContentKO(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'p',
      { className: 'text-foreground/80 text-lg leading-relaxed' },
      '프론트엔드 리드로서 성능과 유지보수성을 고려한 모듈형 시스템을 설계했습니다.'
    ),
    React.createElement(
      'div',
      { className: 'space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '모듈형 컴포넌트 라이브러리'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'Clean Architecture 패턴을 사용하여 ', React.createElement('strong', null, '55+ 재사용 위젯'), '과 ', React.createElement('strong', null, '38+ 프로덕션 화면'), '을 개발했습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '상태 관리 숙련도'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          React.createElement('strong', null, 'Provider 패턴'), '을 구현하여 다국어 지원(영어/한국어) 및 실시간 센서 데이터 스트림을 포함한 복잡한 전역 상태를 관리합니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '플랫폼별 최적화'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'iOS와 Android 간 BLE 및 권한 관리의 미묘한 차이를 처리하는 커스텀 추상화 레이어를 설계했습니다.'
        )
      )
    )
  );
}

function buildTechnicalDeepDiveContentKO(): React.ReactNode {
  return React.createElement(
    'div',
    { className: 'space-y-8' },
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-bold text-foreground mb-4' }, 'A. 복원력 있는 BLE 통신 레이어'),
      React.createElement(
        'div',
        { className: 'space-y-3' },
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '도전 과제'),
      React.createElement(
        'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            '다양한 모바일 하드웨어와 OS 버전에서 안정적인 Bluetooth 연결 유지.'
      )
    ),
    React.createElement(
      'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '솔루션'),
      React.createElement(
        'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            '사전 재시도 로직, 8초 연결 타임아웃, 메모리 누수 방지를 위한 자동 정리를 포함한 커스텀 ', React.createElement('strong', null, 'BLE 서비스'), '를 구축했습니다.'
      )
    ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '결과'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            React.createElement('strong', null, '99%+ 연결 성공률'), '을 달성하여 사용자가 언제든 식물의 핵심 상태에 접근할 수 있도록 했습니다.'
          )
        )
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-bold text-foreground mb-4' }, 'B. 지능형 알림 에코시스템'),
      React.createElement(
        'div',
        { className: 'space-y-3' },
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '도전 과제'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            '포그라운드, 백그라운드, 앱 종료 상태 전반에서 시간 민감한 관리 알림 전달.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '솔루션'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            '로컬 폴백 및 딥링크 기능을 포함한 ', React.createElement('strong', null, 'Firebase Cloud Messaging (FCM)'), ' 기반 통합 알림 서비스를 설계했습니다.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '결과'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            React.createElement('strong', null, '95% 전달률'), '을 달성하여 지속적인 사용자 참여와 선제적 식물 관리를 유도합니다.'
          )
        )
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-xl font-bold text-foreground mb-4' }, 'C. 온디바이스 AI & ML 통합'),
      React.createElement(
        'div',
        { className: 'space-y-3' },
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '도전 과제'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            '느린 클라우드 기반 API 호출에만 의존하지 않고 즉각적인 식물 식별 제공.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '솔루션'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            '온디바이스 추론을 위해 ', React.createElement('strong', null, 'TensorFlow Lite'), '를 통합하고, 고정확도 매칭을 위해 백엔드 종 데이터베이스와 결합했습니다.'
          )
        ),
        React.createElement(
          'div',
          { className: 'p-5 rounded-xl bg-card/50 dark:bg-card/60 border border-border/40' },
          React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '결과'),
          React.createElement(
            'p',
            { className: 'text-sm text-foreground/80 leading-relaxed' },
            '저연결 환경에서도 작동하는 즉각적이고 95% 정확한 식물 인식.'
          )
        )
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
      '이 프로젝트는 복잡한 하드웨어 통합 모바일 애플리케이션 개발을 주도할 수 있는 능력을 보여줍니다.'
    ),
    React.createElement(
      'div',
      { className: 'mt-6 space-y-4' },
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/60 dark:bg-card/70 border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '핵심 교훈'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          'UX 엔지니어링과 프론트엔드 아키텍처를 직접 소유함으로써 물리적 센서와 디지털 인터페이스 간의 간극을 해소했습니다. 기술적으로 견고하고 감정적으로 공감되는 제품을 만들었습니다.'
        )
      ),
      React.createElement(
        'div',
        { className: 'p-5 rounded-xl bg-card/60 dark:bg-card/70 border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]' },
        React.createElement('p', { className: 'font-semibold text-foreground mb-2' }, '결과'),
        React.createElement(
          'p',
          { className: 'text-sm text-foreground/80 leading-relaxed' },
          '데이터와 AI를 통해 사용자가 성공적인 실내 가드너가 되도록 돕는 프로덕션 레디 IoT 에코시스템.'
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
          title: 'Overview',
          titleKo: '개요',
          content: buildOverviewContentKO()
        },
        {
          id: 'green-thumb-challenge',
          type: 'problem',
          title: 'The "Green Thumb" Challenge: Bridging the Data Gap in Plant Care',
          titleKo: '"그린 썸" 도전: 식물 관리의 데이터 격차 해소',
          content: buildProblemContentKO()
        },
        {
          id: 'ux-engineering',
          type: 'solution',
          title: 'UX Engineering: Designing for the IoT Lifecycle',
          titleKo: 'UX 엔지니어링: IoT 라이프사이클을 위한 설계',
          content: buildUXEngineeringContentKO()
        },
        {
          id: 'frontend-leadership',
          type: 'solution',
          title: 'Frontend Leadership: Scalable Cross-Platform Architecture',
          titleKo: '프론트엔드 리더십: 확장 가능한 크로스플랫폼 아키텍처',
          content: buildFrontendLeadershipContentKO()
        },
        {
          id: 'technical-deep-dive',
          type: 'solution',
          title: 'Technical Deep Dive: Solving the "Hard" IoT Problems',
          titleKo: '기술 심화: "어려운" IoT 문제 해결',
          content: buildTechnicalDeepDiveContentKO()
        },
        {
          id: 'kpis',
          type: 'results',
          title: 'Key Performance Indicators (KPIs)',
          titleKo: '주요 성과 지표 (KPI)',
          content: buildResultsContentKO()
        },
        {
          id: 'executive-reflection',
          type: 'learnings',
          title: 'Executive Reflection: The IoT UX Specialist',
          titleKo: '경영진 성찰: IoT UX 전문가',
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
          titleKo: '개요',
        content: buildOverviewContent()
      },
      {
          id: 'green-thumb-challenge',
        type: 'problem',
          title: 'The "Green Thumb" Challenge: Bridging the Data Gap in Plant Care',
          titleKo: '"그린 썸" 도전: 식물 관리의 데이터 격차 해소',
        content: buildProblemContent()
      },
      {
          id: 'ux-engineering',
          type: 'solution',
          title: 'UX Engineering: Designing for the IoT Lifecycle',
          titleKo: 'UX 엔지니어링: IoT 라이프사이클을 위한 설계',
          content: buildUXEngineeringContent()
        },
        {
          id: 'frontend-leadership',
        type: 'solution',
          title: 'Frontend Leadership: Scalable Cross-Platform Architecture',
          titleKo: '프론트엔드 리더십: 확장 가능한 크로스플랫폼 아키텍처',
          content: buildFrontendLeadershipContent()
        },
        {
          id: 'technical-deep-dive',
          type: 'solution',
          title: 'Technical Deep Dive: Solving the "Hard" IoT Problems',
          titleKo: '기술 심화: "어려운" IoT 문제 해결',
          content: buildTechnicalDeepDiveContent()
        },
        {
          id: 'kpis',
        type: 'results',
          title: 'Key Performance Indicators (KPIs)',
          titleKo: '주요 성과 지표 (KPI)',
        content: buildResultsContent()
      },
      {
          id: 'executive-reflection',
        type: 'learnings',
          title: 'Executive Reflection: The IoT UX Specialist',
          titleKo: '경영진 성찰: IoT UX 전문가',
        content: buildLearningsContent()
      }
    ]
  };
}
