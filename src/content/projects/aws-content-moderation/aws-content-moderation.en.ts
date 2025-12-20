// English content file: All user-facing text strings

export const awsContentModerationEN = {
    overview: {
      paragraphs: [
        {
          type: 'text',
          content: [
            { type: 'span', text: 'AWS Content Moderation System', className: 'font-semibold text-foreground' },
            ' is a real-time video content moderation platform designed to automatically detect and flag inappropriate content in live video streams using AWS Rekognition.'
          ]
        },
        {
          type: 'text',
          content:
            'The system processes video streams in near real time, analyzes frames using pre-trained machine learning models, and provides confidence-scored moderation results with automated alerts.'
        },
        {
          type: 'text',
          content:
            'Built on a serverless, event-driven architecture using AWS CDK for Infrastructure as Code, the platform combines Flask-based video processing, AWS Lambda, Kinesis Video Streams, DynamoDB, CloudWatch, and SNS to achieve scalability, low latency, and operational reliability.'
        }
      ]
    },
  
    role: {
      roles: [
        {
          title: 'Backend & Infrastructure Engineering',
          iconKey: 'Backend & Infrastructure Engineering',
          responsibilities: [
            'Designed serverless architecture using AWS CDK (TypeScript)',
            'Developed Flask application for real-time video frame capture with OpenCV',
            'Implemented AWS Lambda functions for Rekognition-based moderation',
            'Configured Kinesis Video Streams, DynamoDB, CloudWatch, and SNS',
            'Built EventBridge rules for automated stream processing',
            'Created API Gateway endpoints for video stream lifecycle management'
          ],
          impacts: [
            'Achieved 99.9% uptime through serverless architecture',
            'Reduced infrastructure setup time by 80% using Infrastructure as Code',
            'Enabled real-time moderation with sub-200ms processing latency'
          ]
        },
        {
          title: 'Full-Stack Development',
          iconKey: 'Full-Stack Development',
          responsibilities: [
            'Built real-time web dashboard displaying live video feeds and moderation results',
            'Implemented interactive charts for confidence metrics and trend analysis',
            'Designed event-driven frontend update system for real-time feedback',
            'Integrated CloudWatch metrics API for live monitoring',
            'Created responsive dashboard UI aligned with AWS design principles'
          ],
          impacts: [
            'Delivered real-time dashboard updates with 1-second refresh intervals',
            'Improved visibility into moderation accuracy and system performance',
            'Enabled operational monitoring through visual analytics'
          ]
        }
      ]
    },
  
    problem: {
      summary:
        'Organizations need scalable and automated solutions to moderate live video content in real time, preventing inappropriate material from reaching end users.',
      content:
        'Traditional content moderation relies heavily on manual review, which is slow, expensive, and unsuitable for live video streams. Human-based moderation cannot scale to high-throughput streaming environments and introduces delays that allow harmful content to slip through.',
      painPoints: [
        { description: 'Manual moderation cannot keep up with live video streams' },
        { description: 'High operational cost of human reviewers and infrastructure' },
        { description: 'Lack of real-time alerts for inappropriate content' },
        { description: 'Difficulty scaling moderation systems dynamically' },
        { description: 'No centralized visibility into moderation metrics and trends' }
      ],
      whyItMatters:
        'Real-time automated moderation protects users, reduces legal and reputational risk, and allows platforms to scale safely while maintaining content quality.'
    },
  
    goals: {
      goals: [
        { title: 'Real-Time Processing', iconKey: 'Real-Time Processing', metric: '<200ms latency per frame' },
        { title: 'AI-Powered Detection', iconKey: 'AI-Powered Detection', metric: '50+ moderation categories' },
        { title: 'Scalability', iconKey: 'Scalability', metric: 'Live stream support with automatic scaling' },
        { title: 'Reliability', iconKey: 'Reliability', metric: '99.9% uptime' },
        { title: 'Observability', iconKey: 'Observability', metric: 'Real-time dashboards and alerts' },
        { title: 'Cost Efficiency', iconKey: 'Cost Efficiency', metric: '80% faster infrastructure setup' }
      ]
    },
  
    research: {
      insights: [
        {
          title: 'Service Selection',
          items: [
            'Chose AWS Rekognition for pre-trained moderation labels and confidence scoring',
            'Used Kinesis Video Streams for scalable live video ingestion',
            'Selected DynamoDB for low-latency, auto-scaling result storage',
            'Adopted CloudWatch for metrics, logs, and dashboards',
            'Used SNS and EventBridge for real-time alerts and event-driven processing'
          ]
        },
        {
          title: 'Architecture Decisions',
          items: [
            'Serverless architecture for automatic scaling and cost efficiency',
            'Infrastructure as Code using AWS CDK for reproducible deployments',
            'Event-driven processing with EventBridge-triggered Lambdas',
            'Frame sampling strategy to balance accuracy and cost',
            'Multi-stack CDK design for separation of concerns'
          ]
        }
      ]
    },
  
    architecture: {
      items: [
        {
          title: 'System Architecture',
          description:
            'A serverless, event-driven architecture separating video ingestion, analysis, storage, and monitoring for scalability and maintainability.',
          features: [
            'Flask-based video capture with OpenCV',
            'AWS Rekognition content moderation',
            'DynamoDB storage with confidence scoring',
            'CloudWatch metrics and dashboards',
            'SNS notifications for flagged content',
            'Kinesis Video Streams for ingestion',
            'EventBridge-triggered Lambda processing',
            'API Gateway for stream management'
          ]
        },
        {
          title: 'Main User Flows',
          userFlows: [
            {
              name: 'Real-Time Video Moderation',
              iconKey: 'Real-Time Video Moderation',
              description:
                'Live video streams are continuously analyzed and flagged in real time.',
              steps: [
                'Capture video frames',
                'Sample frames for analysis',
                'Run Rekognition moderation',
                'Store results with timestamps',
                'Update dashboard in real time',
                'Trigger alerts for flagged content'
              ]
            },
            {
              name: 'Stream Management',
              iconKey: 'Stream Management',
              description:
                'Streams are created and managed via API-driven workflows.',
              steps: [
                'Create stream via API',
                'Provision Kinesis stream',
                'Schedule processing via EventBridge',
                'Analyze frames with Lambda',
                'Store results and notify',
                'Delete stream and clean up resources'
              ]
            }
          ]
        }
      ]
    },
  
    designSystem: {
      items: [
        {
          title: 'Design System',
          type: 'design',
          colorUsages: [
            { usage: 'Primary navigation and structure' },
            { usage: 'Alerts and critical states' },
            { usage: 'Interactive elements and links' },
            { usage: 'Confidence-based severity indicators' }
          ],
          components: [
            {
              title: 'Live Video Feed',
              iconKey: 'Live Video Feed',
              description: 'Real-time stream preview with processing status'
            },
            {
              title: 'Moderation Panel',
              iconKey: 'Moderation Panel',
              description: 'Detected labels with confidence scores'
            },
            {
              title: 'Analytics Charts',
              iconKey: 'Analytics Charts',
              description: 'Confidence trends over time'
            },
            {
              title: 'Event Updates',
              iconKey: 'Event Updates',
              description: 'Real-time UI updates without page reload'
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
            'Modern JavaScript with modular structure',
            'Event-driven UI updates',
            'Interactive chart visualizations',
            'Responsive dashboard layout',
            'REST API integration with backend services'
          ]
        },
        {
          title: 'Backend & API',
          iconKey: 'Backend & API',
          items: [
            'Flask for video processing and APIs',
            'OpenCV for frame extraction',
            'AWS SDK integrations',
            'AWS Lambda for serverless processing',
            'API Gateway for HTTP endpoints'
          ]
        },
        {
          title: 'AWS Integrations',
          iconKey: 'AWS Integrations',
          items: [
            'Amazon Rekognition',
            'Amazon Kinesis Video Streams',
            'Amazon DynamoDB',
            'Amazon CloudWatch',
            'Amazon SNS',
            'Amazon EventBridge',
            'AWS Lambda',
            'AWS CDK'
          ]
        }
      ]
    },
  
    keyFeatures: {
      metrics: [
        { title: 'Latency', description: 'Sub-200ms processing per frame' },
        { title: 'Detection Scope', description: '50+ moderation categories' },
        { title: 'Availability', description: '99.9% uptime' },
        { title: 'Cost Efficiency', description: 'Infrastructure setup reduced by 80%' }
      ],
      userFeatures: [
        {
          title: 'Real-Time Dashboard',
          iconKey: 'Real-Time Dashboard',
          items: [
            'Live video preview',
            'Confidence-based moderation results',
            'Trend analytics and history',
            'Alert visibility'
          ]
        },
        {
          title: 'Stream Operations',
          iconKey: 'Stream Operations',
          items: [
            'Create and delete streams via API',
            'Automated processing schedules',
            'Multi-stream support'
          ]
        }
      ],
      engineeringFeatures: [
        {
          title: 'Serverless Infrastructure',
          iconKey: 'Serverless Infrastructure',
          items: [
            'AWS CDK Infrastructure as Code',
            'Event-driven processing',
            'Automatic scaling and monitoring'
          ]
        },
        {
          title: 'Performance Optimization',
          iconKey: 'Performance Optimization',
          items: [
            'Frame sampling strategy',
            'Optimized DynamoDB queries',
            'Low-latency Lambda execution'
          ]
        }
      ]
    },
  
    challenges: {
      challenges: [
        {
          challenge: 'Balancing real-time performance with operational cost',
          solution:
            'Implemented frame sampling and custom CloudWatch metrics to reduce cost while maintaining accuracy.'
        },
        {
          challenge: 'Managing complex multi-service AWS infrastructure',
          solution:
            'Used AWS CDK with a multi-stack design to separate concerns and simplify deployments.'
        },
        {
          challenge: 'Synchronizing backend processing with frontend updates',
          solution:
            'Built an event-driven update model with polling and graceful error handling.'
        },
        {
          challenge: 'Efficient time-based querying in DynamoDB',
          solution:
            'Added Global Secondary Indexes and pagination for fast time-range queries.'
        }
      ]
    },
  
    results: {
      metrics: [
        'Sub-200ms moderation latency achieved',
        '99.9% uptime with serverless deployment',
        '50+ content categories detected',
        'Automated alerting with SNS',
        'Production-ready monitoring and dashboards'
      ],
      description:
        'The system delivers reliable real-time video moderation with high accuracy and low latency. Its serverless design ensures scalability and cost efficiency, making it suitable for production-grade content moderation use cases.'
    },
  
    learnings: {
      cards: [
        {
          title: 'Serverless System Design',
          iconKey: 'Serverless System Design',
          description: 'Designed event-driven architectures optimized for scalability and latency.'
        },
        {
          title: 'Infrastructure as Code',
          iconKey: 'Infrastructure as Code',
          description: 'Managed complex AWS resources using CDK with reproducible deployments.'
        },
        {
          title: 'Real-Time Visualization',
          iconKey: 'Real-Time Visualization',
          description: 'Built dashboards that reflect live backend state with minimal delay.'
        },
        {
          title: 'Cloud Service Integration',
          iconKey: 'Cloud Service Integration',
          description: 'Integrated multiple AWS services with secure and efficient data flows.'
        }
      ]
    },
  
    techStack: {
      categories: [
        {
          category: 'Frontend',
          items: ['JavaScript', 'Chart.js', 'HTML/CSS']
        },
        {
          category: 'Backend',
          items: ['Python', 'Flask', 'OpenCV', 'Node.js', 'TypeScript']
        },
        {
          category: 'AWS',
          items: [
            'AWS CDK',
            'AWS Lambda',
            'Amazon Rekognition',
            'Amazon Kinesis Video Streams',
            'Amazon DynamoDB',
            'Amazon CloudWatch',
            'Amazon SNS',
            'Amazon EventBridge',
            'API Gateway'
          ]
        },
        {
          category: 'Tools',
          items: ['Git', 'AWS SDK']
        }
      ]
    },
  
    links: {
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/2024PBL-AWS-project/ContentModeration' },
        { label: 'Demo Video', url: 'https://github.com/2024PBL-AWS-project/ContentModeration/issues/1' }
      ],
      figmaUrl: '',
      caseStudyUrl: ''
    }
  };
  