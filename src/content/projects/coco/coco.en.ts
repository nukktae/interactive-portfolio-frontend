// English content file: All user-facing text strings

export const cocoEN = {
  overview: {
    paragraphs: [
      {
        type: 'text',
        content:
          'COCO is a cute, interactive AI companion robot designed to support learning, emotional regulation, and stress relief, especially for students and young users. It combines embedded systems (ESP32), voice-based interaction, and cloud-based AI (OpenAI + Next.js platform) to create a warm, responsive, and educational assistant.'
      },
      {
        type: 'text',
        content:
          'Currently in Phase 3 of development, COCO is a full-stack project being built from hardware to backend to frontend to UI/UX design. The system integrates ESP32 microcontroller with multiple sensors (ultrasonic distance sensor, I2S microphone, ESP32-CAM with OV2640 camera), actuators (servo motors, DC motors), and displays (OLED screen) to create an expressive, interactive companion. The ESP32-CAM enables facial expression recognition, allowing COCO to understand user emotions and respond accordingly. The ESP32 communicates with a Next.js web platform that processes voice input and camera data through OpenAI LLM, generating personalized, supportive responses.'
      },
      {
        type: 'text',
        content:
          'COCO is not just a robot — it\'s a gentle presence that listens, sees, speaks, displays emotions, and connects to a web platform for extended intelligence and personalization. With ESP32-CAM facial recognition capabilities, COCO can recognize user expressions and emotions, making interactions more empathetic and context-aware. Currently in Phase 3, the project is actively being developed and demonstrates expertise in embedded systems, computer vision, hardware prototyping, IoT communication, full-stack development, AI integration, and human-centered product design.'
      }
    ]
  },
  role: {
    roles: [
      {
        title: 'Embedded Systems Engineer',
        iconKey: 'Code',
        responsibilities: [
          'Designed and implemented ESP32 firmware integrating 8+ hardware components (microphone, sensors, servos, motors)',
          'Developed I2S audio processing, OLED display driver, and Wi-Fi communication protocol',
          'Built motor control system and power management for stable multi-component operation'
        ],
        impacts: [
          'Delivered fully functional hardware prototype with real-time sensor processing',
          'Enabled seamless cloud connectivity with automatic reconnection logic'
        ]
      },
      {
        title: 'Backend Developer',
        iconKey: 'Database',
        responsibilities: [
          'Architected Next.js web platform as COCO\'s cloud brain with RESTful API endpoints',
          'Integrated OpenAI GPT API for natural language understanding and AI personality tuning',
          'Built audio processing pipeline and conversation history management'
        ],
        impacts: [
          'Achieved <2 second response latency from voice input to AI output',
          'Created scalable architecture supporting multiple COCO devices'
        ]
      },
      {
        title: 'Frontend Developer & UI/UX Designer',
        iconKey: 'Smartphone',
        responsibilities: [
          'Developed web interface for COCO management, conversation history, and device monitoring',
          'Designed COCO\'s companion personality with facial expression system for OLED display',
          'Created interaction flows and visual feedback systems for voice-based conversations'
        ],
        impacts: [
          'Established warm, friendly AI personality that feels approachable',
          'Designed companion-focused user experience rather than tool-focused interface'
        ]
      }
    ]
  },
  problem: {
    summary: 'Students and young users need emotional support and educational assistance, but existing AI interfaces feel cold and impersonal, lacking the warmth and presence of a true companion.',
    content: 'Traditional AI assistants focus on efficiency and task completion, but they lack emotional presence and the ability to provide genuine companionship. For students dealing with stress, anxiety, and learning challenges, a cold interface doesn\'t provide the comfort and support they need. Existing solutions are either purely software-based (lacking physical presence) or purely hardware-based (lacking intelligence), creating a gap for an emotionally-aware, physically-present AI companion.',
    painPoints: [
      { description: 'Lack of emotional presence and warmth in AI interactions' },
      { description: 'No physical embodiment making AI feel distant and impersonal' },
      { description: 'Educational support systems are task-focused rather than companion-focused' },
      { description: 'Stress relief tools lack the interactive, responsive nature of a companion' },
      { description: 'Existing robots are either too expensive or lack cloud intelligence' }
    ],
    whyItMatters: 'Mental health and learning support are critical for students, especially in today\'s high-pressure academic environment. An AI companion that combines physical presence, emotional awareness, and educational intelligence can provide genuine support. By making AI feel kind, present, and supportive rather than cold and transactional, we can create technology that truly helps people feel better and learn more effectively.'
  },
  goals: {
    goals: [
      { title: 'Voice Interaction', iconKey: 'Zap', metric: 'Real-time voice input/output with <2s cloud response latency' },
      { title: 'Emotional Display', iconKey: 'Heart', metric: 'Expressive OLED animations showing emotions and status' },
      { title: 'Cloud Intelligence', iconKey: 'Brain', metric: 'OpenAI LLM integration with personalized, supportive responses' },
      { title: 'Physical Presence', iconKey: 'Users', metric: 'Proximity detection and responsive movement with servos' },
      { title: 'Reliability', iconKey: 'Award', metric: '99%+ Wi-Fi connectivity with automatic reconnection' },
      { title: 'User Experience', iconKey: 'TrendingUp', metric: 'Companion-focused design that feels warm and approachable' }
    ]
  },
  architecture: {
    items: [
      {
        title: 'Hardware Architecture',
        description: 'COCO\'s hardware system centers around the ESP32 microcontroller, which acts as the brain coordinating all components. The system integrates sensors (microphone, distance sensor), actuators (servos, motors), and displays (OLED) into a cohesive robot platform. Power management ensures stable operation across all components.',
        features: [
          'ESP32 USB-C Development Board as central microcontroller',
          'ESP32-CAM with Bluetooth+WiFi (OV2640 camera) + adapter board for facial expression recognition',
          'INMP441 I2S digital microphone for high-quality voice capture',
          'PAM8403 amplifier + 50mm speaker for clear audio output',
          '0.96" OLED display (I2C) for facial expressions and status',
          'HC-SR04P ultrasonic sensor for proximity detection',
          'SG-90 servo motors (×2) for head and body movement',
          '4WD robot chassis with L298N motor driver for mobility',
          'Modular breadboard prototyping for rapid iteration'
        ],
        userFlows: undefined
      },
      {
        title: 'Software Architecture',
        description: 'The software architecture follows a client-server model where ESP32 acts as the client communicating with a Next.js cloud backend. The backend processes voice input through OpenAI, generates responses, and returns them to ESP32 for audio output and display updates.',
        features: [
          'ESP32 firmware handles hardware control and sensor reading',
          'Wi-Fi communication protocol for ESP32 ↔ Next.js backend',
          'Next.js web platform processes AI requests and manages user data',
          'OpenAI GPT integration for natural language understanding',
          'RESTful API design for clean communication between layers',
          'Real-time audio streaming and processing pipeline',
          'Error handling and reconnection logic for network reliability'
        ],
        userFlows: [
          {
            name: 'Voice Interaction Flow',
            iconKey: 'Zap',
            description: 'Complete cycle from user speech to COCO response',
            steps: [
              'User speaks → INMP441 microphone captures audio via I2S',
              'ESP32 streams audio to Next.js backend via Wi-Fi',
              'Backend processes through OpenAI Whisper → GPT generates response',
              'Response returned to ESP32 → Audio output + OLED expression + Servo animation'
            ]
          },
          {
            name: 'Proximity Detection Flow',
            iconKey: 'Users',
            description: 'Wake-up and interaction triggering based on user presence',
            steps: [
              'HC-SR04P sensor detects user within range (<50cm)',
              'COCO wakes up with greeting expression and servo gesture',
              'System enters active listening mode',
              'Returns to sleep if no interaction detected'
            ]
          }
        ]
      }
    ]
  },
  systemArchitecture: {
    categories: [
      {
        title: 'Hardware Components',
        iconKey: 'Layers',
        items: [
          'ESP32 USB-C Development Board (Dual-core MCU with Wi-Fi & Bluetooth)',
          'ESP32-CAM with Bluetooth+WiFi (OV2640 camera) + adapter board (Facial expression recognition)',
          'INMP441 I2S Microphone + PAM8403 Amplifier + Speaker (Audio I/O)',
          '0.96" OLED Display I2C (Visual feedback and expressions)',
          'HC-SR04P Ultrasonic Sensor (Proximity detection)',
          'SG-90 Servo Motors ×2 + 4WD Chassis + L298N Driver (Movement)',
          'Power management system for multiple components'
        ]
      },
      {
        title: 'Software Stack',
        iconKey: 'Code',
        items: [
          'ESP32 Firmware (Arduino IDE) with I2S, Wi-Fi, HTTP, Camera libraries',
          'ESP32-CAM camera processing for facial expression recognition',
          'Next.js 15+ web platform with TypeScript',
          'OpenAI API (GPT-4 + Whisper) for AI processing',
          'RESTful API design for ESP32 ↔ Backend communication'
        ]
      },
      {
        title: 'Communication Protocols',
        iconKey: 'Database',
        items: [
          'I2S (Audio), I2C (Display), Wi-Fi 802.11 (Cloud communication)',
          'Camera Interface (OV2640), HTTP/REST (API), PWM (Servo control), GPIO (Sensors/Motors)'
        ]
      }
    ]
  },
  keyFeatures: {
    metrics: [
      { title: 'Voice Processing Latency', description: '<2 seconds from speech input to AI response output' },
      { title: 'Hardware Integration', description: '9+ components working in harmony with ESP32 coordination' },
      { title: 'Cloud Connectivity', description: '99%+ Wi-Fi reliability with automatic reconnection' },
      { title: 'Facial Recognition', description: 'ESP32-CAM with OV2640 camera for recognizing user expressions and emotions' },
      { title: 'Emotional Expressions', description: '10+ facial expression patterns on OLED display' }
    ],
    userFeatures: [
      {
        title: 'Voice Interaction',
        iconKey: 'Zap',
        items: [
          'Real-time voice input/output via I2S microphone and amplifier',
          'Natural language understanding through OpenAI GPT',
          'Supportive, educational AI responses with conversation history'
        ]
      },
      {
        title: 'Emotional Display',
        iconKey: 'Heart',
        items: [
          'OLED facial expressions with animated transitions',
          'Status indicators (listening, thinking, speaking, idle)',
          'Proximity-based wake-up animations'
        ]
      },
      {
        title: 'Physical Interaction',
        iconKey: 'Users',
        items: [
          'Ultrasonic distance sensing for user detection',
          'ESP32-CAM facial expression recognition for emotional awareness',
          'Servo motor animations and 4WD chassis movement',
          'Expressive gestures and proximity-based engagement'
        ]
      },
      {
        title: 'Cloud Intelligence',
        iconKey: 'Brain',
        items: [
          'OpenAI GPT integration for intelligent conversations',
          'Personalized responses with educational and stress-relief support',
          'Web platform for extended features and management'
        ]
      }
    ],
    engineeringFeatures: [
      {
        title: 'Hardware Integration',
        iconKey: 'Layers',
        items: [
          'Multi-component coordination via ESP32 with I2S audio processing',
          'Real-time sensor reading, motor control, and power management',
          'Modular hardware architecture for rapid prototyping'
        ]
      },
      {
        title: 'Firmware & Backend',
        iconKey: 'Code',
        items: [
          'ESP32 Arduino framework with Wi-Fi, REST API client, OLED driver',
          'Next.js API routes with OpenAI integration (GPT + Whisper)',
          'User profile management, audio processing, and error handling'
        ]
      }
    ]
  },
  challenges: {
    challenges: [
      {
        problem: 'Integrating Multiple Hardware Components',
        solution: 'Designed modular architecture with ESP32 as central coordinator. Implemented power management and comprehensive testing for stable multi-component operation.'
      },
      {
        problem: 'Real-Time Audio Processing and Cloud Latency',
        solution: 'Implemented efficient I2S buffering with chunked transmission. Created status indicators for "thinking" state and async communication pattern to keep hardware responsive during AI processing.'
      },
      {
        problem: 'Expressive Animations on Small OLED Display',
        solution: 'Developed compact bitmap pattern system with state machine for smooth transitions. Designed 10+ expression patterns optimized for 128x64 pixel display.'
      },
      {
        problem: 'Reliable Wi-Fi Communication',
        solution: 'Implemented robust connection management with automatic reconnection, heartbeat monitoring, and exponential backoff. Designed fallback states for offline operation.'
      }
    ]
  },
  results: {
    metrics: [
      'Phase 3: Hardware-to-software integration with 9+ components in progress',
      'Real-time voice interaction pipeline implemented with <2 second cloud response latency',
      'Expressive emotional display system with 10+ facial expression patterns designed',
      'Wi-Fi connectivity with automatic reconnection logic implemented',
      'Full-stack development from hardware to UI/UX design actively in progress'
    ],
    description: 'Currently in Phase 3 of development, COCO is demonstrating a comprehensive full-stack project spanning hardware, firmware, backend, frontend, and UI/UX design. The system is integrating multiple hardware components into a cohesive robot platform, connecting to cloud AI for intelligent conversations, and developing a warm, companion-focused user experience. The project showcases expertise in embedded systems, IoT communication, full-stack development, AI integration, and human-centered design, with active development ongoing.'
  },
  learnings: {
    cards: [
      {
        title: 'Embedded Systems Development',
        iconKey: 'Layers',
        description: 'Building hardware-software systems requires deep understanding of microcontrollers, sensors, and communication protocols. Power management and component coordination are critical for stable operation.'
      },
      {
        title: 'Hardware-Software Integration',
        iconKey: 'Code',
        description: 'Bridging physical hardware and cloud software requires careful protocol design. Real-time hardware constraints must be balanced with network latency, requiring async operations and clear status feedback.'
      },
      {
        title: 'AI Integration in Physical Products',
        iconKey: 'Brain',
        description: 'Integrating cloud AI into physical devices requires handling network latency and error states gracefully. AI personality design is as important as technical implementation — making AI feel warm requires careful prompt engineering.'
      },
      {
        title: 'Full-Stack Product Development',
        iconKey: 'TrendingUp',
        description: 'Building from hardware to UI requires understanding each layer while maintaining system-level perspective. Companion-focused design prioritizes emotional connection over feature complexity.'
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

