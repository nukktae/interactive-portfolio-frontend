import React from 'react';
import { ProjectDetailContent } from '@/types/projectDetail';
import {
  Code, Database, Smartphone, BarChart3, Users, Zap, Shield, Layers, TrendingUp,
  Award, Brain, Mail, FileText, Sparkles, Component, LayoutTemplate, Workflow,
  Camera, Calendar, Heart, Bell, ChefHat, ExternalLink
} from 'lucide-react';
import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiVercel,
  SiTwilio, SiGooglemaps, SiFigma, SiGithub, SiOpenai, SiFirebase, SiGoogle,
  SiFlutter, SiDart
} from 'react-icons/si';

export const makeeatContent: ProjectDetailContent = {
  slug: 'makeeat',
  sections: [
    {
      id: 'overview',
      type: 'overview',
      content: React.createElement(
        React.Fragment,
        null,
        React.createElement('p', null, 'MakeEat is an innovative AI-powered mobile application that revolutionizes home cooking by transforming available ingredients into personalized, delicious recipes. Built with Flutter for cross-platform compatibility, the app combines cutting-edge AI technology with intuitive user experience design.'),
        React.createElement('p', null, 'The application leverages OpenAI\'s GPT models for intelligent recipe generation, advanced OCR technology for receipt scanning, and Firebase for robust backend services. Users can scan grocery receipts, input ingredients manually, or select from their pantry to generate customized recipes tailored to their dietary preferences, allergies, and nutritional goals.'),
        React.createElement('p', null, 'With features including meal planning calendars, favorite recipe management, nutritional tracking via FatSecret API, and push notifications, MakeEat provides a comprehensive solution for meal preparation and dietary management. The app supports multiple authentication methods, personalized onboarding flows, and offline recipe storage capabilities.')
      )
    },
    {
      id: 'my-role',
      type: 'role',
      roles: [
        {
          title: 'Full-Stack Mobile Developer',
          icon: Code,
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
          icon: Smartphone,
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
    {
      id: 'problem',
      type: 'problem',
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
    {
      id: 'goals',
      type: 'goals',
      goals: [
        { icon: Zap, title: 'Recipe Generation Speed', metric: 'Generate personalized recipes in under 10 seconds' },
        { icon: Brain, title: 'AI Accuracy', metric: '95%+ recipe relevance matching user preferences and ingredients' },
        { icon: TrendingUp, title: 'User Engagement', metric: 'Target 80%+ weekly active users through meal planning features' },
        { icon: Users, title: 'Onboarding Completion', metric: 'Achieve 75%+ completion rate for user preference onboarding' },
        { icon: BarChart3, title: 'Receipt OCR Accuracy', metric: 'Extract 90%+ of ingredients accurately from receipt images' },
        { icon: Award, title: 'App Store Rating', metric: 'Maintain 4.5+ star rating across iOS and Android platforms' }
      ]
    },
    {
      id: 'research',
      type: 'research',
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
    {
      id: 'architecture',
      type: 'architecture',
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
          ]
        },
        {
          title: 'User Flows',
          userFlows: [
            {
              name: 'Recipe Generation Flow',
              icon: ChefHat,
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
              icon: Camera,
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
              icon: Users,
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
              icon: Calendar,
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
    {
      id: 'design-system',
      type: 'design-system',
      items: [
        {
          title: 'Color System',
          type: 'colors',
          content: {
            colors: [
              { name: 'Primary Orange', hex: '#F48600', usage: 'Primary actions, highlights, selected states' },
              { name: 'Background Cream', hex: '#FFFAF5', usage: 'Main app background for warm, appetizing feel' },
              { name: 'Text Dark', hex: '#191919', usage: 'Primary text for headings and important content' },
              { name: 'Text Gray', hex: '#666666', usage: 'Secondary text, descriptions, metadata' },
              { name: 'Border Gray', hex: '#CCCCCC', usage: 'Card borders, dividers, input borders' },
              { name: 'White', hex: '#FFFFFF', usage: 'Card backgrounds, input fields, contrast elements' }
            ]
          }
        },
        {
          title: 'Component Structure',
          type: 'components',
          content: {
            components: [
              { title: 'Recipe Cards', description: 'Reusable cards displaying recipe title, image, cook time, and quick actions. Features rounded corners, shadow effects, and gesture handling for navigation.', icon: Sparkles },
              { title: 'Bottom Navigation Bar', description: 'Custom bottom nav with 4 main sections: Home, Recipe Builder, Favorites, and Profile. Includes icon indicators and smooth transitions.', icon: Component },
              { title: 'Ingredient Selection Grid', description: 'Interactive grid system for selecting and managing ingredients. Supports chip-based display with add/remove functionality.', icon: LayoutTemplate },
              { title: 'Meal Calendar Widget', description: 'Monthly calendar view with date selection, recipe indicators, and navigation controls. Highlights selected dates and dates with planned meals.', icon: Layers },
              { title: 'Recipe Builder Steps', description: 'Multi-step form component with progress indicators. Guides users through meal type, preferences, ingredients, and confirmation screens.', icon: Workflow },
              { title: 'Nutritional Info Display', description: 'Visual representation of macro and micronutrients using pie charts and progress bars. Integrates with FatSecret API data.', icon: BarChart3 }
            ]
          }
        },
        {
          title: 'Typography',
          type: 'components',
          content: {
            components: [
              { title: 'Primary Font: DM Sans', description: 'Used throughout the app for body text, headings, and UI elements. Provides excellent readability at all sizes.', icon: FileText },
              { title: 'Font Weights', description: 'Regular (400) for body text, Medium (500) for labels, SemiBold (600) for subheadings, Bold (700) for headings', icon: FileText }
            ]
          }
        }
      ]
    },
    {
      id: 'system-architecture',
      type: 'system-architecture',
      categories: [
        {
          title: 'Frontend Architecture',
          icon: Code,
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
          icon: Database,
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
          icon: Layers,
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
    {
      id: 'key-features',
      type: 'key-features',
      metrics: [
        { title: 'Recipe Generation Time', description: 'Average 8-12 seconds from ingredient selection to complete recipe' },
        { title: 'OCR Accuracy Rate', description: '90%+ ingredient extraction accuracy from receipt images' },
        { title: 'App Size', description: 'Optimized to under 50MB for iOS and Android' },
        { title: 'Offline Capability', description: '100% recipe viewing and favorites management without internet' }
      ],
      userFeatures: [
        {
          title: 'AI-Powered Recipe Generation',
          icon: Brain,
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
          icon: Camera,
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
          icon: Calendar,
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
          icon: Heart,
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
          icon: Users,
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
          icon: BarChart3,
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
          icon: Bell,
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
          icon: Layers,
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
          icon: Workflow,
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
          icon: Code,
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
          icon: Database,
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
          icon: Camera,
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
          icon: Shield,
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
    {
      id: 'challenges',
      type: 'challenges',
      challenges: [
        {
          challenge: 'OCR Accuracy for Receipt Scanning - Receipt images have varying quality, lighting conditions, and formats, making accurate ingredient extraction difficult.',
          solution: 'Implemented robust image preprocessing, integrated with specialized backend OCR service, and added user review/selection step allowing manual correction. This two-step process ensures 90%+ accuracy while maintaining user control.'
        },
        {
          challenge: 'Complex Recipe Generation with Multiple Constraints - Generating recipes that satisfy dietary restrictions, allergies, calorie limits, and available ingredients simultaneously requires sophisticated prompt engineering.',
          solution: 'Developed structured prompt templates with clear constraint hierarchy, implemented validation layers, and created fallback mechanisms. Used OpenAI GPT-4 for better reasoning capabilities and structured JSON output parsing.'
        },
        {
          challenge: 'State Management Across Multiple Screens - Recipe builder flow spans 5+ screens requiring state persistence and efficient navigation.',
          solution: 'Implemented Provider-based state management with service layer abstraction. Created RecipeBuilderFlow coordinator to manage state across screens. Used Navigator.push with result callbacks for clean data flow.'
        },
        {
          challenge: 'Offline Functionality Requirements - Users need to access saved recipes and favorites without internet connectivity.',
          solution: 'Utilized SharedPreferences for local recipe storage, implemented offline-first architecture with sync capabilities. Created local database abstraction layer allowing seamless offline/online transitions.'
        },
        {
          challenge: 'API Rate Limiting and Error Handling - OpenAI API has rate limits and costs, requiring efficient usage and error recovery.',
          solution: 'Implemented request queuing, exponential backoff for retries, comprehensive error handling with user-friendly messages, and request optimization to minimize token usage while maintaining quality.'
        },
        {
          challenge: 'Cross-Platform UI Consistency - Ensuring consistent design and behavior across iOS and Android platforms.',
          solution: 'Used Flutter\'s Material Design components with platform-specific adaptations, created custom widgets that adapt to platform conventions, and thorough testing on both platforms. Leveraged Flutter\'s platform channels for native features when needed.'
        }
      ]
    },
    {
      id: 'results',
      type: 'results',
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
    {
      id: 'learnings',
      type: 'learnings',
      cards: [
        {
          title: 'AI Integration Best Practices',
          description: 'Learned the importance of structured prompting, constraint hierarchy, and response validation when integrating GPT models. Implementing fallback mechanisms and clear error messaging significantly improved reliability and user experience.',
          icon: Brain
        },
        {
          title: 'Mobile State Management',
          description: 'Gained deep understanding of Provider pattern and MVVM architecture in Flutter. Balancing between local state, shared state, and persistent state is crucial for maintainable, scalable mobile applications.',
          icon: Workflow
        },
        {
          title: 'Cross-Platform Development',
          description: 'Flutter\'s single codebase approach dramatically reduces development time, but platform-specific considerations are still essential. Testing on both iOS and Android from early stages prevents costly refactoring.',
          icon: Smartphone
        },
        {
          title: 'API Design & Integration',
          description: 'Working with multiple third-party APIs taught the importance of abstraction layers, error handling, and rate limiting. Creating service classes with clear interfaces makes testing and maintenance much easier.',
          icon: Code
        },
        {
          title: 'User Experience Design',
          description: 'Onboarding flow and preference collection significantly impact user engagement. Breaking complex processes into clear steps with progress indicators reduces abandonment and improves completion rates.',
          icon: Users
        },
        {
          title: 'Performance Optimization',
          description: 'Image processing, API calls, and state management require careful optimization. Implementing lazy loading, caching strategies, and efficient widget rebuilding is essential for smooth user experience.',
          icon: Zap
        }
      ]
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      categories: [
        {
          category: 'Frontend Framework',
          items: [
            { name: 'Flutter', icon: SiFlutter },
            { name: 'Dart', icon: SiDart }
          ]
        },
        {
          category: 'Backend & Services',
          items: [
            { name: 'Firebase', icon: SiFirebase },
            { name: 'Node.js', icon: SiNodedotjs }
          ]
        },
        {
          category: 'AI & APIs',
          items: [
            { name: 'OpenAI', icon: SiOpenai },
            { name: 'Google Maps', icon: SiGooglemaps }
          ]
        },
        {
          category: 'Authentication',
          items: [
            { name: 'Firebase Auth', icon: SiFirebase },
            { name: 'Google Sign-In', icon: SiGoogle }
          ]
        },
        {
          category: 'Design & Tools',
          items: [
            { name: 'Figma', icon: SiFigma },
            { name: 'GitHub', icon: SiGithub }
          ]
        }
      ]
    },
    {
      id: 'links',
      type: 'links',
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/MakeEat/frontend', icon: ExternalLink }
      ],
      figmaUrl: '',
      caseStudyUrl: ''
    }
  ]
};
