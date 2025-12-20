// English content file: All user-facing text strings

export const handiersEN = {
    overview: {
      paragraphs: [
        {
          type: 'text',
          content: [
            { type: 'span', text: 'Handiers', className: 'font-semibold text-foreground' },
            ' is a large-scale smart service marketplace that connects consumers with verified professional service providers through AI-powered job analysis, real-time location intelligence, and trusted matching systems.'
          ]
        },
        {
          type: 'text',
          content:
            'The platform consists of Flutter-based consumer and pro applications backed by a Kotlin gRPC microservice architecture. It leverages multimodal AI, smart logistics, and enterprise-grade infrastructure to streamline how domestic services are requested, matched, and fulfilled.'
        },
        {
          type: 'text',
          content:
            'I contributed across Flutter engineering, system architecture, AI pipelines, and UX flows—focusing on scalability, reliability, and real-world usability for both consumers and service professionals.'
        }
      ]
    },
  
    role: {
      roles: [
        {
          title: 'Flutter Engineering',
          iconKey: 'Flutter Engineering',
          responsibilities: [
            'Built consumer and pro app flows using clean architecture',
            'Integrated gRPC client with generated protobuf bindings',
            'Implemented camera, video, image picker, and multimodal uploads',
            'Built real-time location tracking and mapping features',
            'Integrated Firebase Auth, Firestore, Cloud Messaging',
            'Integrated Stripe for payments and onboarding'
          ],
          impacts: [
            'Improved reliability of real-time location tracking',
            'Reduced crashes through structured error handling',
            'Optimized media upload UX for AI-powered job analysis'
          ]
        },
        {
          title: 'System & AI Architecture',
          iconKey: 'System & AI Architecture',
          responsibilities: [
            'Designed multimodal AI analysis pipeline using Vertex AI',
            'Architected smart matching algorithm using location, availability, and graph data',
            'Structured Firestore data models for real-time updates',
            'Defined API contracts for Flutter and Kotlin integration'
          ],
          impacts: [
            'Improved AI job classification accuracy',
            'Faster and more relevant matching results',
            'Reduced integration errors through clear contracts'
          ]
        }
      ]
    },
  
    problem: {
      summary:
        'Consumers struggle to find trustworthy service professionals quickly, while pros struggle to receive relevant nearby jobs that match their skills and availability.',
      content:
        'Existing service platforms rely heavily on manual descriptions, lack real-time logistics, and provide limited trust signals. This results in slow matching, poor job fit, and low confidence on both sides of the marketplace.',
      painPoints: [
        { description: 'Consumers must manually explain issues repeatedly' },
        { description: 'Hard to identify trustworthy or nearby professionals' },
        { description: 'Pros miss jobs due to poor availability visibility' },
        { description: 'Lack of AI-driven analysis and smart matching' }
      ],
      whyItMatters:
        'Combining AI, real-time logistics, and trust-based recommendations transforms how domestic services are discovered—making hiring faster, safer, and more intelligent.'
    },
  
    goals: {
      goals: [
        { title: 'Reduce Friction', iconKey: 'Reduce Friction', metric: 'Auto job creation from images and videos' },
        { title: 'AI-Powered Insights', iconKey: 'AI-Powered Insights', metric: 'Cost estimation and category classification' },
        { title: 'Smart Logistics', iconKey: 'Smart Logistics', metric: 'Real-time pro availability and distance filtering' },
        { title: 'Trusted Matching', iconKey: 'Trusted Matching', metric: 'Graph-based recommendations' },
        { title: 'Performance', iconKey: 'Performance', metric: 'Low-latency gRPC services' },
        { title: 'Enterprise Reliability', iconKey: 'Enterprise Reliability', metric: 'Stripe and cloud-grade infrastructure' }
      ]
    },
  
    research: {
      insights: [
        {
          title: 'User Research',
          items: [
            'Consumers want instant estimates without manual explanations',
            'Trust is strongly influenced by social recommendations',
            'Pros want consistent nearby job opportunities',
            'Real-time updates are critical for both sides'
          ]
        },
        {
          title: 'Key Insights',
          items: [
            'Multimodal AI significantly reduces onboarding time',
            'Graph networks improve trust-based discovery',
            'Real-time location increases match conversion',
            'Stripe verification builds professional credibility'
          ]
        }
      ]
    },
  
    architecture: {
      items: [
        {
          title: 'Platform Architecture',
          description:
            'A unified system combining Flutter applications with a Kotlin-based gRPC backend. Each core feature operates as an independent domain service for scalability.',
          features: [
            'AI Job Analysis',
            'Smart Matching',
            'Real-time Location',
            'Payments & Payouts',
            'Notifications',
            'Graph-Based Recommendations'
          ]
        },
        {
          title: 'Main User Flows',
          userFlows: [
            {
              name: 'Job Creation Flow',
              iconKey: 'Job Creation Flow',
              description: 'Consumers create jobs through multimodal AI analysis.',
              steps: ['Capture Media', 'Upload', 'AI Analysis', 'Job Creation']
            },
            {
              name: 'Matching Flow',
              iconKey: 'Matching Flow',
              description: 'The matching engine ranks pros using multiple signals.',
              steps: ['Location Filter', 'Category Filter', 'Graph Ranking', 'Availability Check']
            },
            {
              name: 'Payment Flow',
              iconKey: 'Payment Flow',
              description: 'Secure Stripe-based payment lifecycle.',
              steps: ['Add Card', 'PaymentIntent', 'Work Completion', 'Payout']
            }
          ]
        }
      ]
    },
  
    designSystem: {
      items: [
        {
          title: 'Design Foundations',
          type: 'design',
          colorUsages: [
            { usage: 'Primary brand color' },
            { usage: 'Neutral UI surfaces' },
            { usage: 'Light backgrounds and cards' },
            { usage: 'CTAs and highlights' }
          ],
          components: [
            {
              title: 'Navigation Shells',
              iconKey: 'Navigation Shells',
              description: 'Consumer and pro navigation patterns'
            },
            {
              title: 'Job Cards',
              iconKey: 'Job Cards',
              description: 'Category, cost, media, and status representation'
            },
            {
              title: 'AI Upload Components',
              iconKey: 'AI Upload Components',
              description: 'Camera, video, and gallery workflows'
            },
            {
              title: 'Workflow Modals',
              iconKey: 'Workflow Modals',
              description: 'Payments, quotes, and matching steps'
            }
          ]
        }
      ]
    },
  
    systemArchitecture: {
      categories: [
        {
          title: 'Frontend Architecture',
          iconKey: 'Frontend Architecture',
          items: [
            'Flutter monorepo for consumer and pro apps',
            'Shared protobuf contracts',
            'Realtime Firestore listeners',
            'Stripe and Firebase integrations'
          ]
        },
        {
          title: 'Backend & API',
          iconKey: 'Backend & API',
          items: [
            'Kotlin gRPC microservices',
            'Ktor admin and webhook endpoints',
            'AI, payment, and matching domain services',
            'Connection pooling and service isolation'
          ]
        },
        {
          title: 'Integrations',
          iconKey: 'Integrations',
          items: [
            'Vertex AI for multimodal analysis',
            'Stripe payments and payouts',
            'AWS SNS and SES for notifications',
            'Graph database for social trust modeling'
          ]
        }
      ]
    },
  
    keyFeatures: {
      metrics: [
        { title: 'Multimodal AI', description: 'Image and video-based job analysis' },
        { title: 'Location Intelligence', description: 'Real-time radius filtering' },
        { title: 'Graph Ranking', description: 'Trust-based recommendations' },
        { title: 'Enterprise Payments', description: 'Secure onboarding and payouts' }
      ],
      userFeatures: [
        {
          title: 'Consumer Experience',
          iconKey: 'Consumer Experience',
          items: [
            'AI-powered job creation',
            'Quote comparison and hiring',
            'Real-time pro tracking'
          ]
        },
        {
          title: 'Pro Experience',
          iconKey: 'Pro Experience',
          items: [
            'Instant job requests',
            'Availability and location management',
            'Earnings and payout tracking'
          ]
        }
      ],
      engineeringFeatures: [
        {
          title: 'AI & ML',
          iconKey: 'AI & ML',
          items: ['Multimodal inference', 'Cost estimation pipeline']
        },
        {
          title: 'Smart Logistics',
          iconKey: 'Smart Logistics',
          items: ['Dual location tracking', 'Online presence detection']
        },
        {
          title: 'Enterprise Architecture',
          iconKey: 'Enterprise Architecture',
          items: [
            'Role-based enablement',
            'Auth, App Check, and service isolation',
            'Dockerized microservices'
          ]
        }
      ]
    },
  
    challenges: {
      challenges: [
        {
          challenge: 'Large multimodal media uploads',
          solution: 'Chunked uploads with compression and async streaming'
        },
        {
          challenge: 'Graph-based recommendation performance',
          solution: 'Optimized traversal with caching and weighted scoring'
        },
        {
          challenge: 'Realtime pro availability detection',
          solution: 'Heartbeat tracking with Firestore listeners'
        },
        {
          challenge: 'Enterprise payment compliance',
          solution: 'Full Stripe onboarding with webhook validation'
        }
      ]
    },
  
    results: {
      metrics: [
        '60% reduction in job creation friction',
        'Matching latency under 200ms',
        'Higher pro acceptance through trust scoring',
        'Stripe payouts successfully integrated'
      ],
      description:
        'Handiers demonstrates how AI, logistics, and enterprise infrastructure can combine to create a modern, scalable service marketplace that benefits both consumers and professionals.'
    },
  
    learnings: {
      cards: [
        {
          title: 'Multimodal AI at Scale',
          iconKey: 'Multimodal AI at Scale',
          description: 'Designing efficient AI pipelines for real-world usage'
        },
        {
          title: 'Graph-Based Trust Systems',
          iconKey: 'Graph-Based Trust Systems',
          description: 'Modeling trust and recommendations using graph data'
        },
        {
          title: 'Logistics Engineering',
          iconKey: 'Logistics Engineering',
          description: 'Real-time location as a first-class feature'
        },
        {
          title: 'Enterprise Payment Design',
          iconKey: 'Enterprise Payment Design',
          description: 'Building compliant and reliable payout systems'
        }
      ]
    },
  
    techStack: {
      categories: [
        {
          category: 'Frontend',
          items: ['Flutter', 'Dart', 'gRPC Client', 'Stripe SDK']
        },
        {
          category: 'Backend',
          items: ['Kotlin', 'Java 17', 'gRPC Microservices', 'Ktor']
        },
        {
          category: 'Databases & Cloud',
          items: ['Firestore', 'MySQL', 'Neo4j', 'Vertex AI', 'AWS SNS/SES']
        }
      ]
    },
  
    links: {
      links: [],
      figmaUrl: '#',
      caseStudyUrl: '#'
    }
  };
  