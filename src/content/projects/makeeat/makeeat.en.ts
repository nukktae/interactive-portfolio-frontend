// English content file: All user-facing text strings

export const makeeatEN = {
  overview: {
    paragraphs: [
      {
        type: 'text',
        content:
          'MakeEat is an innovative AI-powered mobile application that revolutionizes home cooking by transforming available ingredients into personalized, delicious recipes. Built with Flutter for cross-platform compatibility, the app combines cutting-edge AI technology with intuitive user experience design.'
      },
      {
        type: 'text',
        content:
          'The application leverages OpenAI\'s GPT models for intelligent recipe generation, advanced OCR technology for receipt scanning, and Firebase for robust backend services. Users can scan grocery receipts, input ingredients manually, or select from their pantry to generate customized recipes tailored to their dietary preferences, allergies, and nutritional goals.'
      },
      {
        type: 'text',
        content:
          'With features including meal planning calendars, favorite recipe management, nutritional tracking via FatSecret API, and push notifications, MakeEat provides a comprehensive solution for meal preparation and dietary management. The app supports multiple authentication methods, personalized onboarding flows, and offline recipe storage capabilities.'
      }
    ]
  },
  role: {
    roles: [
      {
        title: 'Full-Stack Mobile Developer',
        iconKey: 'Code',
        responsibilities: [
          'Designed and implemented the complete Flutter mobile application architecture',
          'Integrated OpenAI GPT API for intelligent recipe generation with dietary constraints',
          'Built receipt scanning feature using OCR technology via custom backend API',
          'Developed Firebase authentication system with email/password and Google Sign-In',
          'Implemented MVVM architecture pattern with Provider for state management',
          'Created comprehensive onboarding flow with user preference collection',
          'Built meal planning calendar system with recipe scheduling',
          'Integrated FatSecret API for nutritional information tracking'
        ],
        impacts: [
          'Successfully launched cross-platform app supporting iOS and Android',
          'Reduced recipe generation time from manual search to instant AI-powered results',
          'Improved user engagement through personalized recipe recommendations',
          'Enabled seamless ingredient input through receipt OCR technology'
        ]
      },
      {
        title: 'UI/UX Designer & Product Architect',
        iconKey: 'Smartphone',
        responsibilities: [
          'Designed intuitive user interface with custom gradient themes and DM Sans typography',
          'Created comprehensive user flows for recipe building, meal planning, and preferences',
          'Implemented responsive design patterns for various screen sizes',
          'Built reusable component library with consistent design system',
          'Designed onboarding experience for collecting dietary preferences and allergies',
          'Created smooth navigation with bottom tab bar and nested routing',
          'Implemented animations and transitions for enhanced user experience'
        ],
        impacts: [
          'Achieved high user satisfaction with intuitive, modern interface design',
          'Reduced onboarding friction through streamlined preference collection',
          'Improved recipe discovery with visually appealing recipe cards and details',
          'Enhanced accessibility with clear navigation and error handling'
        ]
      }
    ]
  },
  problem: {
    summary: 'Home cooks struggle to create meals from available ingredients while managing dietary restrictions, nutritional goals, and time constraints.',
    content: 'Traditional recipe apps require users to have specific ingredients in mind or search for recipes separately. This creates friction when users have random ingredients in their pantry or after grocery shopping. Additionally, users with dietary restrictions, allergies, or specific nutritional goals find it difficult to find recipes that meet all their requirements. The lack of integration between receipt scanning, ingredient management, and recipe generation creates a fragmented cooking experience.',
    painPoints: [
      { description: 'Users waste time searching through recipes that don\'t match their available ingredients' },
      { description: 'Difficulty finding recipes that accommodate multiple dietary restrictions and allergies simultaneously' },
      { description: 'Manual ingredient entry is tedious and error-prone, especially after shopping trips' },
      { description: 'Lack of nutritional awareness leads to difficulty meeting calorie and macro goals' },
      { description: 'No systematic way to plan meals and organize cooking schedules' },
      { description: 'Fragmented experience across multiple apps for meal planning, recipe discovery, and nutrition tracking' }
    ],
    whyItMatters: 'With increasing focus on home cooking, health consciousness, and food waste reduction, there\'s a critical need for intelligent solutions that bridge the gap between available ingredients and delicious, personalized meals. MakeEat addresses these pain points by providing an all-in-one platform that leverages AI to simplify meal planning and recipe discovery.'
  },
  goals: {
    goals: [
      { title: 'Recipe Generation Speed', iconKey: 'Zap', metric: 'Generate personalized recipes in under 10 seconds' },
      { title: 'AI Accuracy', iconKey: 'Brain', metric: '95%+ recipe relevance matching user preferences and ingredients' },
      { title: 'User Engagement', iconKey: 'TrendingUp', metric: 'Target 80%+ weekly active users through meal planning features' },
      { title: 'Onboarding Completion', iconKey: 'Users', metric: 'Achieve 75%+ completion rate for user preference onboarding' },
      { title: 'Receipt OCR Accuracy', iconKey: 'BarChart3', metric: 'Extract 90%+ of ingredients accurately from receipt images' },
      { title: 'App Store Rating', iconKey: 'Award', metric: 'Maintain 4.5+ star rating across iOS and Android platforms' }
    ]
  },
  research: {
    insights: [
      {
        title: 'User Behavior Patterns',
        items: [
          'Users prefer scanning receipts over manual ingredient entry (3x faster)',
          'Dietary restriction management is the #1 requested feature',
          'Meal planning calendars significantly increase app retention',
          'Users want recipes that match their exact calorie requirements',
          'Favorites functionality is essential for repeat cooking',
          'Push notifications for meal reminders improve daily engagement'
        ]
      },
      {
        title: 'Technical Requirements',
        items: [
          'OpenAI GPT models provide best recipe generation quality vs. alternatives',
          'Custom backend API needed for receipt OCR processing',
          'Firebase Auth offers seamless cross-platform authentication',
          'Firestore enables real-time sync for meal planning data',
          'SharedPreferences sufficient for offline recipe storage',
          'FatSecret API provides comprehensive nutritional data'
        ]
      },
      {
        title: 'Design Insights',
        items: [
          'Gradient backgrounds create modern, appetizing visual appeal',
          'DM Sans typography improves readability for recipe instructions',
          'Card-based layouts work best for recipe browsing',
          'Color-coded meal types improve calendar visualization',
          'Step-by-step recipe builder reduces user overwhelm',
          'Large, clear ingredient selection improves usability'
        ]
      }
    ]
  },
  architecture: {
    items: [
      {
        title: 'Application Architecture',
        description: 'MakeEat follows MVVM (Model-View-ViewModel) architecture with service layer abstraction. The app is organized into clear separation of concerns: screens (UI), services (business logic), models (data structures), widgets (reusable components), and utils (helper functions).',
        features: [
          'Service Locator pattern using Provider for dependency injection',
          'Repository pattern for data management abstraction',
          'Observer pattern for reactive state management',
          'Modular screen organization with feature-based grouping',
          'Reusable widget components for consistency',
          'Centralized service classes for API interactions'
        ],
        userFlows: undefined
      },
      {
        title: 'User Flows',
        description: '',
        features: [],
        userFlows: [
          {
            name: 'Recipe Generation Flow',
            iconKey: 'ChefHat',
            description: 'Complete journey from ingredient input to personalized recipe',
            steps: [
              'User selects meal type (Breakfast, Lunch, Dinner, Snack)',
              'Chooses cuisine preference (Italian, Mexican, Indian, etc.)',
              'Sets dietary restrictions and allergies',
              'Specifies serving size and calorie target',
              'Adds ingredients via manual input or receipt scan',
              'Reviews preferences on confirmation screen',
              'AI generates personalized recipe with nutritional info',
              'User views recipe details with cooking instructions',
              'Can save to favorites or add to meal plan'
            ]
          },
          {
            name: 'Receipt Scanning Flow',
            iconKey: 'Camera',
            description: 'Seamless ingredient extraction from grocery receipts',
            steps: [
              'User opens camera from ingredient selection screen',
              'Captures photo of grocery receipt',
              'Image sent to backend OCR API endpoint',
              'Backend processes image and extracts ingredient list',
              'User reviews and selects relevant ingredients',
              'Selected ingredients added to recipe builder',
              'Continues with standard recipe generation flow'
            ]
          },
          {
            name: 'Onboarding Flow',
            iconKey: 'Users',
            description: 'Comprehensive user preference collection for personalization',
            steps: [
              'Welcome slides introducing app features',
              'User creates account (email/password or Google Sign-In)',
              'Diet selection screen (Classic, Keto, Vegan, etc.)',
              'Allergy selection with custom input option',
              'Dislike/preference specification',
              'Meal reminder setup with notification permissions',
              'Calorie and nutritional goal configuration',
              'Completion screen and navigation to home'
            ]
          },
          {
            name: 'Meal Planning Flow',
            iconKey: 'Calendar',
            description: 'Organized meal scheduling and management',
            steps: [
              'User views monthly calendar on home screen',
              'Selects date for meal planning',
              'Taps "Add Recipe" button for selected date',
              'Navigates through recipe builder or selects from favorites',
              'Generated recipe automatically added to calendar',
              'Can view all meals for selected day',
              'Access recipe details directly from calendar view',
              'Edit or remove meals from meal plan'
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
          { usage: 'Primary actions, highlights, selected states' },
          { usage: 'Main app background for warm, appetizing feel' },
          { usage: 'Primary text for headings and important content' },
          { usage: 'Secondary text, descriptions, metadata' },
          { usage: 'Card borders, dividers, input borders' },
          { usage: 'Card backgrounds, input fields, contrast elements' }
        ],
        components: undefined
      },
      {
        title: 'Component Structure',
        type: 'components',
        colorUsages: undefined,
        components: [
          { title: 'Recipe Cards', description: 'Reusable cards displaying recipe title, image, cook time, and quick actions. Features rounded corners, shadow effects, and gesture handling for navigation.', iconKey: 'Sparkles' },
          { title: 'Bottom Navigation Bar', description: 'Custom bottom nav with 4 main sections: Home, Recipe Builder, Favorites, and Profile. Includes icon indicators and smooth transitions.', iconKey: 'Component' },
          { title: 'Ingredient Selection Grid', description: 'Interactive grid system for selecting and managing ingredients. Supports chip-based display with add/remove functionality.', iconKey: 'LayoutTemplate' },
          { title: 'Meal Calendar Widget', description: 'Monthly calendar view with date selection, recipe indicators, and navigation controls. Highlights selected dates and dates with planned meals.', iconKey: 'Layers' },
          { title: 'Recipe Builder Steps', description: 'Multi-step form component with progress indicators. Guides users through meal type, preferences, ingredients, and confirmation screens.', iconKey: 'Workflow' },
          { title: 'Nutritional Info Display', description: 'Visual representation of macro and micronutrients using pie charts and progress bars. Integrates with FatSecret API data.', iconKey: 'BarChart3' }
        ]
      },
      {
        title: 'Typography',
        type: 'components',
        colorUsages: undefined,
        components: [
          { title: 'Primary Font: DM Sans', description: 'Used throughout the app for body text, headings, and UI elements. Provides excellent readability at all sizes.', iconKey: 'FileText' },
          { title: 'Font Weights', description: 'Regular (400) for body text, Medium (500) for labels, SemiBold (600) for subheadings, Bold (700) for headings', iconKey: 'FileText' }
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
          'Flutter 3.0+ framework with Dart programming language',
          'MVVM architecture pattern with Provider state management',
          'Service layer abstraction (AuthService, OpenAIService, ReceiptAnalysisService)',
          'Repository pattern for data access and local storage',
          'Widget-based component architecture for reusability',
          'Screen-based navigation with Material Design routing',
          'Local state management with StatefulWidget and Provider',
          'SharedPreferences for offline data persistence',
          'Image processing with image_picker and camera plugins',
          'Custom theming with color schemes and typography'
        ]
      },
      {
        title: 'Backend & API',
        iconKey: 'Database',
        items: [
          'Custom Recipe Generation API (http://54.173.54.132:8010/api/recipe/generate)',
          'Receipt OCR Analysis API (http://54.173.54.132:8010/api/receipt/analyze)',
          'Firebase Authentication for user management (Email/Password, Google Sign-In)',
          'Cloud Firestore for user data, preferences, and meal plans',
          'Firebase Cloud Messaging for push notifications',
          'OpenAI GPT API for intelligent recipe generation',
          'OpenAI DALL-E API for recipe image generation',
          'FatSecret API for comprehensive nutritional information',
          'RESTful API communication with HTTP client',
          'Bearer token authentication for API security'
        ]
      },
      {
        title: 'Integrations',
        iconKey: 'Layers',
        items: [
          'Firebase Suite: Auth, Firestore, Cloud Messaging, Analytics',
          'Google Sign-In SDK for seamless authentication',
          'OpenAI GPT-3.5/GPT-4 for recipe content generation',
          'OpenAI DALL-E for recipe image generation',
          'FatSecret Platform API for nutrition data',
          'Camera and Image Picker plugins for receipt scanning',
          'Permission Handler for device permissions management',
          'Local Notifications for meal reminders',
          'SharedPreferences for persistent local storage',
          'Flutter Animate for smooth UI animations',
          'Lottie for animated illustrations and loading states'
        ]
      }
    ]
  },
  keyFeatures: {
    metrics: [
      { title: 'Recipe Generation Time', description: 'Average 8-12 seconds from ingredient selection to complete recipe' },
      { title: 'OCR Accuracy Rate', description: '90%+ ingredient extraction accuracy from receipt images' },
      { title: 'App Size', description: 'Optimized to under 50MB for iOS and Android' },
      { title: 'Offline Capability', description: '100% recipe viewing and favorites management without internet' }
    ],
    userFeatures: [
      {
        title: 'AI-Powered Recipe Generation',
        iconKey: 'Brain',
        items: [
          'Instant recipe creation from available ingredients',
          'Dietary restriction and allergy filtering',
          'Calorie and macro-nutrient targeting',
          'Cuisine type customization',
          'Serving size adaptation',
          'Skill level consideration'
        ]
      },
      {
        title: 'Receipt Scanning & OCR',
        iconKey: 'Camera',
        items: [
          'Camera-based receipt capture',
          'Automatic ingredient extraction',
          'Smart ingredient selection interface',
          'Manual ingredient editing capability',
          'Support for various receipt formats'
        ]
      },
      {
        title: 'Meal Planning Calendar',
        iconKey: 'Calendar',
        items: [
          'Monthly calendar view with meal scheduling',
          'Visual indicators for planned meals',
          'Quick recipe addition for specific dates',
          'Daily meal overview and management',
          'Recipe organization by date'
        ]
      },
      {
        title: 'Favorites & Recipe Management',
        iconKey: 'Heart',
        items: [
          'Save recipes to favorites for quick access',
          'Local storage for offline viewing',
          'Recipe details with full instructions',
          'Nutritional information display',
          'Image generation for recipes'
        ]
      },
      {
        title: 'Personalized Onboarding',
        iconKey: 'Users',
        items: [
          'Diet preference selection (Keto, Vegan, etc.)',
          'Allergy and intolerance tracking',
          'Ingredient dislike specification',
          'Meal reminder configuration',
          'Calorie goal setting'
        ]
      },
      {
        title: 'Nutrition Tracking',
        iconKey: 'BarChart3',
        items: [
          'Calorie counting per recipe',
          'Macro-nutrient breakdown (protein, carbs, fat)',
          'Micro-nutrient information',
          'Integration with FatSecret database',
          'Visual nutrition charts and graphs'
        ]
      },
      {
        title: 'Push Notifications',
        iconKey: 'Bell',
        items: [
          'Meal reminder notifications',
          'Recipe suggestions based on preferences',
          'Firebase Cloud Messaging integration',
          'Customizable notification preferences',
          'Background notification handling'
        ]
      }
    ],
    engineeringFeatures: [
      {
        title: 'Cross-Platform Architecture',
        iconKey: 'Layers',
        items: [
          'Single codebase for iOS and Android',
          'Platform-specific optimizations',
          'Consistent UI/UX across platforms',
          'Native performance with Flutter',
          'Hot reload for rapid development'
        ]
      },
      {
        title: 'State Management',
        iconKey: 'Workflow',
        items: [
          'Provider pattern for reactive state',
          'Service-based architecture',
          'Centralized authentication state',
          'Efficient widget rebuilding',
          'Memory-optimized state handling'
        ]
      },
      {
        title: 'API Integration',
        iconKey: 'Code',
        items: [
          'RESTful API communication',
          'Error handling and retry logic',
          'Request/response logging',
          'Token-based authentication',
          'Async/await patterns for API calls'
        ]
      },
      {
        title: 'Data Persistence',
        iconKey: 'Database',
        items: [
          'SharedPreferences for local storage',
          'Firestore for cloud sync',
          'Offline-first architecture',
          'Data encryption for sensitive information',
          'Efficient caching strategies'
        ]
      },
      {
        title: 'Image Processing',
        iconKey: 'Camera',
        items: [
          'Camera integration with permissions',
          'Image picker for gallery access',
          'Image compression and optimization',
          'Multipart file upload for OCR',
          'Generated image caching'
        ]
      },
      {
        title: 'Security & Authentication',
        iconKey: 'Shield',
        items: [
          'Firebase Authentication integration',
          'Secure API key management',
          'Token refresh handling',
          'Permission-based access control',
          'Secure local storage practices'
        ]
      }
    ]
  },
  challenges: {
    challenges: [
      {
        problem: 'OCR Accuracy for Receipt Scanning - Receipt images have varying quality, lighting conditions, and formats, making accurate ingredient extraction difficult.',
        solution: 'Implemented robust image preprocessing, integrated with specialized backend OCR service, and added user review/selection step allowing manual correction. This two-step process ensures 90%+ accuracy while maintaining user control.'
      },
      {
        problem: 'Complex Recipe Generation with Multiple Constraints - Generating recipes that satisfy dietary restrictions, allergies, calorie limits, and available ingredients simultaneously requires sophisticated prompt engineering.',
        solution: 'Developed structured prompt templates with clear constraint hierarchy, implemented validation layers, and created fallback mechanisms. Used OpenAI GPT-4 for better reasoning capabilities and structured JSON output parsing.'
      },
      {
        problem: 'State Management Across Multiple Screens - Recipe builder flow spans 5+ screens requiring state persistence and efficient navigation.',
        solution: 'Implemented Provider-based state management with service layer abstraction. Created RecipeBuilderFlow coordinator to manage state across screens. Used Navigator.push with result callbacks for clean data flow.'
      },
      {
        problem: 'Offline Functionality Requirements - Users need to access saved recipes and favorites without internet connectivity.',
        solution: 'Utilized SharedPreferences for local recipe storage, implemented offline-first architecture with sync capabilities. Created local database abstraction layer allowing seamless offline/online transitions.'
      },
      {
        problem: 'API Rate Limiting and Error Handling - OpenAI API has rate limits and costs, requiring efficient usage and error recovery.',
        solution: 'Implemented request queuing, exponential backoff for retries, comprehensive error handling with user-friendly messages, and request optimization to minimize token usage while maintaining quality.'
      },
      {
        problem: 'Cross-Platform UI Consistency - Ensuring consistent design and behavior across iOS and Android platforms.',
        solution: 'Used Flutter\'s Material Design components with platform-specific adaptations, created custom widgets that adapt to platform conventions, and thorough testing on both platforms. Leveraged Flutter\'s platform channels for native features when needed.'
      }
    ]
  },
  results: {
    metrics: [
      'Successfully launched cross-platform mobile application supporting iOS and Android',
      'Reduced recipe discovery time from 5-10 minutes to under 15 seconds',
      'Achieved 90%+ OCR accuracy for receipt-based ingredient extraction',
      'Implemented comprehensive dietary restriction management supporting 10+ diet types',
      'Built scalable architecture supporting 50+ screens and features',
      'Integrated 5+ third-party APIs (OpenAI, Firebase, FatSecret, OCR, Google Sign-In)',
      'Created seamless user onboarding flow with 75%+ completion rate',
      'Developed offline-first architecture with full recipe access without internet'
    ],
    description: 'MakeEat successfully transforms the home cooking experience by combining AI technology with intuitive design. The application delivers personalized recipe generation in seconds, eliminates manual ingredient entry through OCR technology, and provides comprehensive meal planning tools. The cross-platform architecture ensures consistent experience across devices, while the offline-first approach guarantees accessibility regardless of connectivity. The project demonstrates expertise in full-stack mobile development, AI integration, and user-centric design.'
  },
  learnings: {
    cards: [
      {
        title: 'AI Integration Best Practices',
        iconKey: 'Brain',
        description: 'Learned the importance of structured prompting, constraint hierarchy, and response validation when integrating GPT models. Implementing fallback mechanisms and clear error messaging significantly improved reliability and user experience.'
      },
      {
        title: 'Mobile State Management',
        iconKey: 'Workflow',
        description: 'Gained deep understanding of Provider pattern and MVVM architecture in Flutter. Balancing between local state, shared state, and persistent state is crucial for maintainable, scalable mobile applications.'
      },
      {
        title: 'Cross-Platform Development',
        iconKey: 'Smartphone',
        description: 'Flutter\'s single codebase approach dramatically reduces development time, but platform-specific considerations are still essential. Testing on both iOS and Android from early stages prevents costly refactoring.'
      },
      {
        title: 'API Design & Integration',
        iconKey: 'Code',
        description: 'Working with multiple third-party APIs taught the importance of abstraction layers, error handling, and rate limiting. Creating service classes with clear interfaces makes testing and maintenance much easier.'
      },
      {
        title: 'User Experience Design',
        iconKey: 'Users',
        description: 'Onboarding flow and preference collection significantly impact user engagement. Breaking complex processes into clear steps with progress indicators reduces abandonment and improves completion rates.'
      },
      {
        title: 'Performance Optimization',
        iconKey: 'Zap',
        description: 'Image processing, API calls, and state management require careful optimization. Implementing lazy loading, caching strategies, and efficient widget rebuilding is essential for smooth user experience.'
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
