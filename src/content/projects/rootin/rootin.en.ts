// English content file: All user-facing text strings

export const rootinEN = {
  overview: {
    paragraphs: [
      {
        type: 'text',
        content:
          'Rootin is an AI-powered plant care companion that revolutionizes indoor gardening by combining IoT technology with intelligent recommendations. The app connects to custom Bluetooth Low Energy (BLE) soil moisture sensors, providing real-time monitoring and personalized care guidance for plant owners.'
      },
      {
        type: 'text',
        content:
          'Built with Flutter for cross-platform mobile development, Rootin features real-time data visualization, AI-powered plant identification, intelligent push notifications, and a conversational AI assistant. The system integrates seamlessly with Firebase for backend services, ensuring reliable data synchronization and notification delivery.'
      },
      {
        type: 'text',
        content:
          'The project demonstrates expertise in mobile development, IoT integration, real-time data processing, machine learning, and cloud architecture. With a focus on user experience and technical excellence, Rootin helps users maintain healthy plants through data-driven insights and proactive care reminders.'
      }
    ]
  },
  role: {
    roles: [
      {
        title: 'Full-Stack Mobile Developer',
        iconKey: 'Code',
        responsibilities: [
          'Architected and developed the entire Flutter mobile application with 38+ screens and 55+ reusable widgets',
          'Implemented custom BLE service for reliable IoT sensor communication with retry logic and error handling',
          'Built real-time data visualization using FL Chart with interactive weekly trends and moisture tracking',
          'Developed Firebase Cloud Messaging integration achieving 95% notification delivery rate',
          'Created AI-powered plant identification service with image processing and ML model integration',
          'Designed and implemented RESTful API client for backend communication with authentication'
        ],
        impacts: [
          'Delivered a production-ready mobile app supporting iOS and Android platforms',
          'Achieved reliable BLE connectivity with 10-second timeout handling and iOS-specific permission management',
          'Enabled real-time plant health monitoring with historical data visualization',
          'Implemented robust notification system with foreground/background message handling'
        ]
      },
      {
        title: 'IoT & Backend Integration Engineer',
        iconKey: 'Smartphone',
        responsibilities: [
          'Designed custom BLE protocol for sensor communication with WiFi credential transmission',
          'Implemented sensor pairing flow with device discovery, connection, and network configuration',
          'Built data transformation service for processing sensor readings and moisture calculations',
          'Integrated Firebase services (Auth, Firestore, Storage, Cloud Messaging) for backend operations',
          'Developed plant detection service using TensorFlow Lite for on-device ML inference',
          'Created notification service with local and remote notification handling'
        ],
        impacts: [
          'Enabled seamless IoT device onboarding with guided setup flow',
          'Established reliable data pipeline from sensors to cloud storage',
          'Reduced plant identification time from manual search to instant AI recognition',
          'Improved user engagement through intelligent, context-aware notifications'
        ]
      }
    ]
  },
  problem: {
    summary: 'Plant owners struggle with knowing when and how much to water their plants, leading to overwatering, underwatering, and plant health issues.',
    content: 'Indoor plant care is more complex than it appears. Different plant species have unique watering needs, and environmental factors like humidity, light, and soil type all affect moisture requirements. Without real-time data, plant owners rely on guesswork, often resulting in plant stress or death. Traditional methods like finger testing or scheduled watering are unreliable and don\'t account for individual plant needs or changing conditions.',
    painPoints: [
      { description: 'No real-time visibility into soil moisture levels, leading to reactive rather than proactive care' },
      { description: 'Difficulty identifying plant species and their specific care requirements' },
      { description: 'Lack of personalized guidance based on actual plant conditions and environmental factors' },
      { description: 'Forgetting to water plants or watering at incorrect times' },
      { description: 'Inability to track plant health trends over time to identify patterns or issues' }
    ],
    whyItMatters: 'Plants are living investments that require consistent, informed care. Poor watering practices not only waste time and money but also contribute to plant loss and frustration. By combining IoT sensors with AI-powered insights, we can transform plant care from guesswork into a data-driven, manageable routine that helps users succeed in their gardening journey.'
  },
  goals: {
    goals: [
      { title: 'Real-Time Monitoring', iconKey: 'Zap', metric: 'Achieve <2s latency for sensor data updates' },
      { title: 'AI Accuracy', iconKey: 'Brain', metric: '95%+ plant identification accuracy with visual recognition' },
      { title: 'User Engagement', iconKey: 'TrendingUp', metric: '95% notification delivery rate with intelligent scheduling' },
      { title: 'User Experience', iconKey: 'Users', metric: 'Seamless BLE pairing with <30s setup time' },
      { title: 'Data Visualization', iconKey: 'BarChart3', metric: 'Interactive charts showing 7-day moisture trends' },
      { title: 'Reliability', iconKey: 'Award', metric: '99%+ BLE connection success rate with retry mechanisms' }
    ]
  },
  research: {
    insights: [
      {
        title: 'User Behavior Analysis',
        items: [
          'Users prefer visual plant identification over manual search (80% adoption rate)',
          'Real-time moisture data reduces watering anxiety and increases confidence',
          'Context-aware notifications are more effective than generic reminders',
          'Users want to track plant health trends over time, not just current status',
          'Multi-language support (English/Korean) is essential for target markets'
        ]
      },
      {
        title: 'Technical Requirements',
        items: [
          'BLE communication must handle iOS and Android platform differences',
          'Firebase integration requires robust error handling for offline scenarios',
          'ML model needs to be lightweight for on-device inference',
          'Notification system must work in foreground, background, and terminated states',
          'Data visualization requires efficient chart rendering for large datasets',
          'Sensor pairing flow must be intuitive for non-technical users'
        ]
      }
    ]
  },
  architecture: {
    items: [
      {
        title: 'Core System Architecture',
        description: 'Rootin follows a clean architecture pattern with clear separation between UI, business logic, and data layers. The app uses Provider for state management, ensuring reactive updates across 38+ screens. Services handle all external communications (BLE, API, Firebase), while models provide type-safe data structures.',
        features: [
          'Modular widget architecture with 55+ reusable components',
          'Service layer abstraction for BLE, API, and Firebase operations',
          'Provider-based state management for language, theme, and app state',
          'Localization support with AppLocalizations for multi-language UI',
          'Custom theme system with consistent design tokens',
          'Error handling and retry logic throughout the application'
        ],
        userFlows: undefined
      },
      {
        title: 'User Flows & Interactions',
        description: '',
        features: [],
        userFlows: [
          {
            name: 'Plant Onboarding Flow',
            iconKey: 'Users',
            description: 'Guided multi-step process for adding plants with sensor pairing',
            steps: [
              'Onboarding screens introduce app features and value proposition',
              'User selects plant via camera (AI identification) or manual search',
              'Plant details screen shows species information and care requirements',
              'BLE sensor discovery and pairing with permission handling',
              'WiFi network selection and credential transmission to sensor',
              'Sensor connection confirmation and plant association',
              'Final setup confirmation with plant added to home screen'
            ]
          },
          {
            name: 'Notification System',
            iconKey: 'Mail',
            description: 'Intelligent push notifications for watering reminders and plant health alerts',
            steps: [
              'FCM token registration on app launch',
              'Backend analyzes plant moisture data and determines notification triggers',
              'Context-aware notifications sent based on plant status (underwater, ideal, overwater)',
              'Foreground notification handling with local notification display',
              'Background message processing with data extraction',
              'Notification tap navigation to relevant plant detail screen',
              'User notification preferences stored and respected'
            ]
          },
          {
            name: 'Real-Time Monitoring',
            iconKey: 'TrendingUp',
            description: 'Live soil moisture tracking with historical trend visualization',
            steps: [
              'Sensor sends moisture readings via BLE or WiFi to backend',
              'Backend processes and stores data in Firestore',
              'App fetches latest readings and historical data via API',
              'Real-time moisture display with status indicators (ideal, underwater, overwater)',
              'Weekly trends chart visualization using FL Chart',
              'Interactive chart allows users to see 7-day moisture patterns',
              'Automated health diagnostics based on moisture ranges'
            ]
          }
        ]
      }
    ]
  },
  designSystem: {
    items: [
      {
        title: 'Color System',
        type: 'colors',
        colorUsages: [
          { usage: 'Main brand color for plant-related actions and success states' },
          { usage: 'Moisture level indicator for optimal plant conditions' },
          { usage: 'Warning color for plants needing water' },
          { usage: 'Alert color for excessive moisture conditions' },
          { usage: 'App background and card surfaces' },
          { usage: 'Main text content and headings' }
        ],
        components: undefined
      },
      {
        title: 'Component Structure',
        type: 'components',
        colorUsages: undefined,
        components: [
          { title: 'Plant Cards', description: 'Reusable plant display cards with status indicators, images, and quick actions for home and care screens', iconKey: 'Sparkles' },
          { title: 'Status Icons', description: 'Visual status system (ideal, underwater, overwater, measuring) with color-coded badges and icons', iconKey: 'Component' },
          { title: 'Navigation System', description: 'Custom bottom navigation bar with 4 main sections (Home, Care, Community, Profile) and smooth transitions', iconKey: 'LayoutTemplate' },
          { title: 'Chart Components', description: 'Interactive FL Chart widgets for weekly moisture trends with touch interactions and data points', iconKey: 'Layers' },
          { title: 'BLE Modals', description: 'Bluetooth search and connection modals with device discovery, pairing status, and error handling', iconKey: 'Workflow' }
        ]
      }
    ]
  },
  systemArchitecture: {
    categories: [
      {
        title: 'Frontend Architecture',
        iconKey: 'Code',
        items: [
          'Flutter 3.16 with Dart 3.2 for cross-platform mobile development',
          'Provider pattern for state management (LanguageProvider, ThemeProvider)',
          'Clean architecture: screens (38), widgets (55), services (9), models (4)',
          'Custom theme system with AppTheme for consistent styling',
          'Localization with AppLocalizations supporting English and Korean',
          'FL Chart for interactive data visualization and trend analysis',
          'Image processing with image_picker and camera packages',
          'Permission handling for BLE, location, camera, and notifications'
        ]
      },
      {
        title: 'Backend & API',
        iconKey: 'Database',
        items: [
          'Firebase Cloud Platform: Auth, Firestore, Storage, Cloud Messaging',
          'RESTful API at api.rootin.me for plant identification and chat services',
          'Firebase Cloud Messaging for push notifications with 95% delivery rate',
          'Cloud Firestore for real-time plant data and moisture history storage',
          'Firebase Storage for plant images and user-uploaded photos',
          'FCM token registration and management for device targeting',
          'Background message handlers for notification processing',
          'API client with authentication and error handling'
        ]
      },
      {
        title: 'IoT & Integrations',
        iconKey: 'Layers',
        items: [
          'Bluetooth Low Energy (BLE) with flutter_blue_plus and flutter_reactive_ble',
          'Custom BLE protocol with service UUID and characteristic communication',
          'WiFi credential transmission to sensors via BLE',
          'Sensor pairing flow with device discovery and connection management',
          'Real-time moisture data streaming from sensors',
          'ML model integration (TensorFlow Lite) for plant detection',
          'Plant identification API with image upload and species recognition',
          'AI chatbot integration with session management and image support'
        ]
      }
    ]
  },
  keyFeatures: {
    metrics: [
      { title: 'Notification Delivery', description: '95% successful delivery rate with intelligent retry logic and foreground/background handling' },
      { title: 'BLE Connection Success', description: '99%+ connection rate with iOS-specific timeout handling and permission management' },
      { title: 'Plant Identification', description: '95%+ accuracy with AI-powered visual recognition and species database matching' },
      { title: 'Real-Time Data Latency', description: '<2 seconds from sensor reading to app display with efficient data pipeline' }
    ],
    userFeatures: [
      {
        title: 'Smart Monitoring',
        iconKey: 'BarChart3',
        items: [
          'Real-time soil moisture tracking with custom BLE sensors',
          'Interactive weekly trends visualization using FL Chart',
          'Automated plant health diagnostics based on moisture ranges',
          'Status indicators: Ideal, Underwater, Overwater, Measuring, No Sensor',
          'Historical data tracking with 7-day moisture patterns',
          'Multi-plant management with filtering by location and room'
        ]
      },
      {
        title: 'AI-Powered Features',
        iconKey: 'Brain',
        items: [
          'Visual plant identification via camera with ML model inference',
          'Species-specific care recommendations and watering schedules',
          'Conversational AI assistant for plant care questions',
          'Image-based plant detection with confidence scoring',
          'Personalized care tips based on plant type and current conditions'
        ]
      },
      {
        title: 'Intelligent Notifications',
        iconKey: 'Mail',
        items: [
          'Context-aware watering reminders based on actual moisture levels',
          'Predictive plant health alerts before issues become critical',
          'Battery and sensor status updates for device management',
          'Customizable notification preferences per plant',
          'Background and foreground notification handling',
          'Deep linking to relevant screens on notification tap'
        ]
      }
    ],
    engineeringFeatures: [
      {
        title: 'IoT Integration',
        iconKey: 'Layers',
        items: [
          'Custom BLE service with retry logic and connection state management',
          'iOS-specific permission handling for location and Bluetooth',
          'WiFi network scanning and credential transmission via BLE',
          'Device discovery with filtering and connection timeout handling',
          'Real-time data streaming with characteristic subscriptions',
          'Error recovery and reconnection logic for unstable connections'
        ]
      },
      {
        title: 'Data Processing',
        iconKey: 'Database',
        items: [
          'Efficient data transformation service for sensor readings',
          'Moisture history service with time-series data management',
          'API client with authentication and multipart file uploads',
          'Firestore real-time listeners for live data updates',
          'Local data persistence with SharedPreferences',
          'Background sync for offline data synchronization'
        ]
      },
      {
        title: 'Performance Optimization',
        iconKey: 'Zap',
        items: [
          'Lazy loading for plant lists and image optimization',
          'Efficient chart rendering with data point limiting',
          'Image compression before upload to reduce bandwidth',
          'Cached API responses and local state management',
          'Optimized widget rebuilds with Provider selectors',
          'Background processing for notification handling'
        ]
      }
    ]
  },
  challenges: {
    challenges: [
      {
        problem: 'BLE Connection Reliability on iOS',
        solution: 'Implemented iOS-specific permission handling with location services check, retry logic with 3 attempts, and 8-second timeout. Added proper cleanup for subscriptions and connection state management to prevent memory leaks. Created user-friendly error messages guiding users to enable required permissions in Settings.'
      },
      {
        problem: 'Real-Time Notification Delivery',
        solution: 'Built comprehensive notification service handling foreground, background, and terminated app states. Implemented Firebase Cloud Messaging with local notification fallback, proper channel configuration for Android, and attachment support for iOS. Added retry logic and token refresh mechanism to maintain 95% delivery rate.'
      },
      {
        problem: 'Large Dataset Chart Rendering',
        solution: 'Optimized FL Chart implementation by limiting data points to 7-day windows, implementing efficient sorting algorithms, and using lazy loading for historical data. Added loading states and empty state handling. Optimized widget rebuilds to only update chart when new data arrives.'
      },
      {
        problem: 'Cross-Platform BLE Differences',
        solution: 'Created abstraction layer in BleService handling platform-specific differences. Used flutter_reactive_ble for Android and flutter_blue_plus for iOS compatibility. Implemented platform-specific permission requests and connection timeout strategies. Added comprehensive error handling for both platforms.'
      },
      {
        problem: 'Plant Identification Accuracy',
        solution: 'Integrated TensorFlow Lite model for on-device inference, combined with backend API for species database matching. Implemented image preprocessing (compression, format conversion) before upload. Added confidence scoring and fallback to manual search if identification fails.'
      }
    ]
  },
  results: {
    metrics: [
      '95% notification delivery rate with intelligent scheduling',
      '99%+ BLE connection success rate with retry mechanisms',
      '95%+ plant identification accuracy with AI recognition',
      '<2s latency for real-time sensor data updates',
      'Support for unlimited plants per user with efficient data management',
      '7-day historical trend visualization with interactive charts',
      'Multi-language support (English/Korean) with full localization'
    ],
    description: 'Rootin successfully delivers a production-ready IoT mobile application that combines hardware sensors with intelligent software. The app has achieved high reliability metrics across all core features, from BLE connectivity to notification delivery. Users can seamlessly onboard plants, monitor their health in real-time, and receive proactive care guidance. The technical architecture supports scalability and maintainability, with clean code organization and comprehensive error handling. The project demonstrates expertise in mobile development, IoT integration, cloud services, and AI/ML implementation.'
  },
  learnings: {
    cards: [
      {
        title: 'IoT Development Complexity',
        iconKey: 'Layers',
        description: 'Building reliable BLE communication requires deep understanding of platform-specific behaviors, permission models, and connection lifecycle management. iOS and Android handle Bluetooth differently, requiring careful abstraction and testing on both platforms.'
      },
      {
        title: 'Real-Time Data Architecture',
        iconKey: 'Database',
        description: 'Designing efficient data pipelines for IoT requires balancing real-time updates with battery life, network usage, and user experience. Implementing proper caching, offline support, and background sync is crucial for mobile IoT applications.'
      },
      {
        title: 'Notification System Design',
        iconKey: 'Mail',
        description: 'Achieving high notification delivery rates requires understanding foreground, background, and terminated app states. Implementing proper FCM configuration, local notification fallbacks, and user preference management creates a robust notification experience.'
      },
      {
        title: 'ML Integration in Mobile',
        iconKey: 'Brain',
        description: 'On-device ML inference requires model optimization, efficient image processing, and graceful fallbacks. Balancing accuracy with performance and battery usage is key to successful ML integration in mobile apps.'
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
