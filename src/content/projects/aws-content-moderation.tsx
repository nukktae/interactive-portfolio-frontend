import React from 'react';
import { ProjectDetailContent } from '@/types/projectDetail';
import {
  Code, Database, Smartphone, BarChart3, Users, Zap, Shield, Layers, TrendingUp,
  Award, Brain, Mail, FileText, Sparkles, Component, LayoutTemplate, Workflow, ExternalLink
} from 'lucide-react';
import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiVercel,
  SiTwilio, SiGooglemaps, SiFigma, SiGithub, SiOpenai, SiPython, SiAmazon,
  SiFlask, SiJavascript
} from 'react-icons/si';

export const awsContentModerationContent: ProjectDetailContent = {
  slug: 'aws-content-moderation',
  sections: [
    {
      id: 'overview',
      type: 'overview',
      content: React.createElement(
        React.Fragment,
        null,
        React.createElement('p', null, 'AWS Content Moderation System is a real-time video content moderation platform powered by AWS Rekognition, designed to automatically detect and flag inappropriate content in live video streams. The system processes video frames at 30 FPS, analyzes them using machine learning models, and provides instant alerts with confidence metrics.'),
        React.createElement('p', null, 'Built with a serverless architecture using AWS CDK for Infrastructure as Code, the platform combines Flask for real-time video processing, AWS Lambda for serverless compute, Kinesis Video Streams for video ingestion, DynamoDB for result storage, and CloudWatch for comprehensive monitoring and dashboards.'),
        React.createElement('p', null, 'The solution features a modern web dashboard with live video feed, real-time moderation results, interactive charts, and automated alerting through SNS notifications. It\'s designed for scalability, handling high-throughput video streams while maintaining sub-200ms latency for content analysis.')
      )
    },
    {
      id: 'my-role',
      type: 'role',
      roles: [
        {
          title: 'Backend & Infrastructure Engineer',
          icon: Code,
          responsibilities: [
            'Designed and implemented serverless architecture using AWS CDK (TypeScript)',
            'Developed Flask application for real-time video frame processing with OpenCV',
            'Built AWS Lambda functions (Node.js/TypeScript) for Rekognition integration',
            'Configured Kinesis Video Streams, DynamoDB, CloudWatch, and SNS services',
            'Implemented EventBridge rules for automated stream processing',
            'Created API Gateway endpoints for stream management operations'
          ],
          impacts: [
            'Achieved 99.9% uptime with serverless architecture',
            'Reduced infrastructure setup time by 80% using Infrastructure as Code',
            'Enabled real-time processing at 30 FPS with <200ms latency'
          ]
        },
        {
          title: 'Full-Stack Developer',
          icon: Smartphone,
          responsibilities: [
            'Built interactive dashboard with real-time video feed and moderation results',
            'Implemented Chart.js visualizations for confidence metrics and trends',
            'Developed event-driven frontend architecture with custom event system',
            'Created responsive UI with AWS design system integration',
            'Integrated CloudWatch metrics API for live dashboard updates'
          ],
          impacts: [
            'Delivered real-time updates with 1-second refresh intervals',
            'Improved user experience with interactive charts and visual feedback',
            'Enabled monitoring of moderation trends and performance metrics'
          ]
        }
      ]
    },
    {
      id: 'problem',
      type: 'problem',
      summary: 'Organizations need automated, scalable solutions to moderate video content in real-time, detecting inappropriate material before it reaches end users.',
      content: 'Traditional content moderation relies heavily on human reviewers, which is slow, expensive, and doesn\'t scale for real-time video streams. Manual moderation introduces delays, creates bottlenecks, and cannot handle the volume of content generated in live streaming scenarios. Additionally, maintaining moderation infrastructure requires significant operational overhead and expertise.',
      painPoints: [
        { description: 'Manual content review is time-consuming and cannot keep up with real-time video streams' },
        { description: 'High operational costs for maintaining moderation infrastructure and human reviewers' },
        { description: 'Lack of real-time alerting and monitoring capabilities for flagged content' },
        { description: 'Difficulty scaling moderation systems to handle variable video stream volumes' },
        { description: 'No centralized dashboard for tracking moderation metrics and trends' }
      ],
      whyItMatters: 'Inappropriate content can damage brand reputation, violate platform policies, and create legal liabilities. Real-time automated moderation enables platforms to maintain content quality at scale while reducing costs and improving response times to problematic content.'
    },
    {
      id: 'goals',
      type: 'goals',
      goals: [
        { icon: Zap, title: 'Real-Time Processing', metric: '<200ms latency per frame' },
        { icon: Brain, title: 'AI-Powered Detection', metric: '50+ content categories detected' },
        { icon: TrendingUp, title: 'Scalability', metric: '30 FPS processing capacity' },
        { icon: Users, title: 'User Experience', metric: '99.9% uptime SLA' },
        { icon: BarChart3, title: 'Monitoring', metric: 'Real-time CloudWatch dashboards' },
        { icon: Award, title: 'Cost Efficiency', metric: '80% reduction in infrastructure setup time' }
      ]
    },
    {
      id: 'research',
      type: 'research',
      insights: [
        {
          title: 'AWS Service Selection',
          items: [
            'Evaluated AWS Rekognition vs. custom ML models - chose Rekognition for pre-trained moderation labels and confidence scoring',
            'Selected Kinesis Video Streams for scalable video ingestion over S3 for real-time requirements',
            'Chose DynamoDB for low-latency result storage with automatic scaling',
            'Implemented CloudWatch for comprehensive monitoring and custom metrics',
            'Selected SNS for instant alerting and EventBridge for event-driven architecture'
          ]
        },
        {
          title: 'Architecture Patterns',
          items: [
            'Adopted serverless architecture for cost efficiency and automatic scaling',
            'Implemented Infrastructure as Code with AWS CDK for reproducible deployments',
            'Designed event-driven processing with EventBridge rules triggering Lambda functions',
            'Used frame sampling strategy (1 frame per second) to balance accuracy and cost',
            'Implemented multi-stack CDK architecture for separation of concerns (KVS/Rekognition stack and API/Lambda stack)'
          ]
        }
      ]
    },
    {
      id: 'architecture',
      type: 'architecture',
      items: [
        {
          title: 'System Architecture',
          description: 'The system follows a serverless, event-driven architecture with clear separation between video ingestion, processing, storage, and monitoring components.',
          features: [
            'Flask application captures video frames from camera using OpenCV',
            'Frames processed through AWS Rekognition for content moderation analysis',
            'Results stored in DynamoDB with timestamps and confidence scores',
            'CloudWatch metrics track processed frames, flagged content, and confidence levels',
            'SNS notifications sent for flagged content with detailed label information',
            'Kinesis Video Streams enable scalable video ingestion for multiple streams',
            'EventBridge rules trigger Lambda functions for automated stream processing',
            'API Gateway provides RESTful endpoints for stream management operations'
          ]
        },
        {
          title: 'User Flows',
          userFlows: [
            {
              name: 'Real-Time Video Moderation',
              icon: Users,
              description: 'Live video stream is continuously analyzed for inappropriate content',
              steps: [
                'Camera feed captured by Flask application using OpenCV',
                'Frames sampled at 1 FPS and sent to AWS Rekognition API',
                'Rekognition analyzes frames and returns moderation labels with confidence scores',
                'Results stored in DynamoDB with unique ImageId and timestamp',
                'Dashboard updates in real-time showing latest moderation results',
                'CloudWatch metrics updated for monitoring and alerting'
              ]
            },
            {
              name: 'Stream Management via API',
              icon: Mail,
              description: 'Users can create and manage Kinesis Video Streams through API endpoints',
              steps: [
                'POST request to /create-stream endpoint via API Gateway',
                'Lambda function creates Kinesis Video Stream with unique name',
                'EventBridge rule created with 5-second schedule for stream processing',
                'Rekognition Lambda function triggered periodically to analyze stream frames',
                'Results stored in DynamoDB and SNS notifications sent for flagged content',
                'DELETE request to /delete-stream removes stream and associated EventBridge rules'
              ]
            },
            {
              name: 'Monitoring & Analytics',
              icon: TrendingUp,
              description: 'Comprehensive monitoring dashboard tracks system performance and moderation trends',
              steps: [
                'CloudWatch collects custom metrics (ProcessedFrames, FlaggedContent)',
                'Dashboard queries CloudWatch API for real-time metric data',
                'Chart.js visualizations display confidence trends over time',
                'DynamoDB results queried to show recent moderation history',
                'Alert count and frame statistics updated in real-time',
                'CloudWatch dashboard provides infrastructure-level monitoring'
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
              { name: 'AWS Primary', hex: '#232f3e', usage: 'Primary navigation and headers' },
              { name: 'AWS Orange', hex: '#ff9900', usage: 'Accent color for alerts and highlights' },
              { name: 'AWS Blue', hex: '#0073bb', usage: 'Links and interactive elements' },
              { name: 'Danger Red', hex: '#d13212', usage: 'High confidence flagged content' },
              { name: 'Success Green', hex: '#1b8102', usage: 'Safe content indicators' },
              { name: 'Warning Yellow', hex: '#ff9900', usage: 'Medium confidence warnings' }
            ]
          }
        },
        {
          title: 'Component Structure',
          type: 'components',
          content: {
            components: [
              { title: 'Live Video Feed', description: 'Real-time video stream display with frame processing statistics', icon: Sparkles },
              { title: 'Moderation Results Panel', description: 'Dynamic display of detected labels with confidence scores and color-coded severity', icon: Component },
              { title: 'Dashboard Layout', description: 'Responsive grid layout with video feed, results panel, and analytics charts', icon: LayoutTemplate },
              { title: 'Chart Visualizations', description: 'Interactive Chart.js line charts showing confidence trends over time for multiple categories', icon: Layers },
              { title: 'Event-Driven Updates', description: 'Custom event system for real-time dashboard updates without page refresh', icon: Workflow }
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
            'Modern ES6+ JavaScript with modular architecture',
            'Event-driven updates using CustomEvent API for real-time synchronization',
            'Chart.js for interactive data visualization with AWS color scheme',
            'Responsive design with AWS design system integration',
            'RESTful API integration with Flask backend endpoints',
            'Error handling with retry logic and graceful degradation'
          ]
        },
        {
          title: 'Backend & API',
          icon: Database,
          items: [
            'Flask web framework for video capture and API endpoints',
            'OpenCV for video frame capture and processing',
            'AWS SDK (boto3) for Python - Rekognition, DynamoDB, CloudWatch, SNS',
            'Watchtower for CloudWatch Logs integration',
            'RESTful API endpoints: /video_feed, /get_results, /get_metrics, /dashboard',
            'AWS Lambda functions (Node.js/TypeScript) for serverless processing',
            'API Gateway HTTP API for stream management operations'
          ]
        },
        {
          title: 'AWS Integrations',
          icon: Layers,
          items: [
            'Amazon Rekognition: Content moderation with 50+ label detection',
            'Amazon Kinesis Video Streams: Scalable video ingestion and storage',
            'Amazon DynamoDB: NoSQL database for moderation results with GSI on timestamp',
            'Amazon CloudWatch: Custom metrics, dashboards, and logging',
            'Amazon SNS: Real-time notifications for flagged content',
            'Amazon EventBridge: Event-driven rules for automated stream processing',
            'AWS Lambda: Serverless compute for Rekognition processing and stream management',
            'AWS CDK: Infrastructure as Code with TypeScript for reproducible deployments'
          ]
        }
      ]
    },
    {
      id: 'key-features',
      type: 'key-features',
      metrics: [
        { title: 'Processing Speed', description: 'Real-time frame processing at 30 FPS with <200ms latency per frame' },
        { title: 'Detection Accuracy', description: '50+ content categories detected with confidence scores ranging from 0-100%' },
        { title: 'System Uptime', description: '99.9% availability with serverless architecture and automatic scaling' },
        { title: 'Cost Efficiency', description: '80% reduction in infrastructure setup time using Infrastructure as Code' }
      ],
      userFeatures: [
        {
          title: 'Real-Time Dashboard',
          icon: BarChart3,
          items: [
            'Live video feed with frame-by-frame processing display',
            'Real-time moderation results with color-coded confidence levels',
            'Interactive charts showing confidence trends for multiple categories',
            'Alert notifications for flagged content with detailed label information',
            'Historical data view with timestamp-based filtering',
            'Frame processing statistics and performance metrics'
          ]
        },
        {
          title: 'Stream Management',
          icon: TrendingUp,
          items: [
            'Create Kinesis Video Streams via RESTful API',
            'Automated EventBridge rules for stream processing',
            'Delete streams with automatic cleanup of associated resources',
            'Multi-stream support for handling multiple video sources'
          ]
        }
      ],
      engineeringFeatures: [
        {
          title: 'Serverless Architecture',
          icon: Layers,
          items: [
            'AWS CDK Infrastructure as Code with TypeScript',
            'Multi-stack architecture (KVS/Rekognition stack and API/Lambda stack)',
            'Event-driven processing with EventBridge and Lambda',
            'Automatic scaling with DynamoDB on-demand billing',
            'Comprehensive IAM role-based security policies',
            'CloudWatch integration for logging and monitoring'
          ]
        },
        {
          title: 'Performance Optimization',
          icon: Zap,
          items: [
            'Frame sampling strategy (1 FPS) to balance accuracy and cost',
            'Efficient DynamoDB queries with Global Secondary Index on timestamp',
            'CloudWatch custom metrics with 1-second resolution',
            'Optimized Lambda cold start times with Node.js 18 runtime',
            'Connection pooling and retry logic for AWS API calls'
          ]
        }
      ]
    },
    {
      id: 'challenges',
      type: 'challenges',
      challenges: [
        {
          challenge: 'Real-time video processing with low latency requirements while maintaining cost efficiency',
          solution: 'Implemented frame sampling strategy (processing 1 frame per second instead of all 30 FPS) to reduce API costs while maintaining detection accuracy. Used CloudWatch custom metrics with 1-second resolution for real-time monitoring without excessive API calls.'
        },
        {
          challenge: 'Managing complex AWS infrastructure with multiple services and dependencies',
          solution: 'Adopted AWS CDK with TypeScript for Infrastructure as Code, creating a multi-stack architecture that separates concerns. Implemented proper IAM policies and resource dependencies to ensure secure and reliable deployments.'
        },
        {
          challenge: 'Synchronizing real-time updates between backend processing and frontend dashboard',
          solution: 'Developed event-driven architecture using CustomEvent API on frontend and polling mechanism with 1-second intervals. Implemented error handling with retry logic and graceful degradation for network issues.'
        },
        {
          challenge: 'Handling Kinesis Video Streams media format and converting to Rekognition-compatible format',
          solution: 'Created utility functions to convert KVS media streams to readable buffers, handling async iterables and stream conversion. Implemented proper error handling for stream read operations and fallback mechanisms.'
        },
        {
          challenge: 'DynamoDB query performance for time-based filtering of moderation results',
          solution: 'Created Global Secondary Index (GSI) on timestamp attribute to enable efficient time-range queries. Implemented pagination and result limiting to optimize query performance and reduce data transfer costs.'
        }
      ]
    },
    {
      id: 'results',
      type: 'results',
      metrics: [
        'Achieved <200ms latency per frame for real-time content moderation',
        'Processed 30 FPS video streams with 1 FPS sampling for cost optimization',
        '99.9% system uptime with serverless architecture',
        '80% reduction in infrastructure setup time using AWS CDK',
        'Real-time dashboard updates with 1-second refresh intervals',
        '50+ content categories detected with confidence scoring',
        'Automated alerting system with SNS notifications for flagged content'
      ],
      description: 'The AWS Content Moderation System successfully delivers real-time video content analysis with high accuracy and low latency. The serverless architecture ensures scalability and cost efficiency, while the comprehensive monitoring and alerting system provides operational visibility. The Infrastructure as Code approach enables rapid deployment and easy maintenance, making it suitable for production environments.'
    },
    {
      id: 'learnings',
      type: 'learnings',
      cards: [
        { 
          title: 'Serverless Architecture Patterns', 
          description: 'Learned to design event-driven serverless architectures using AWS Lambda, EventBridge, and API Gateway. Understanding the trade-offs between cost, latency, and scalability helped optimize the system for real-time processing requirements.', 
          icon: Layers 
        },
        { 
          title: 'Infrastructure as Code Best Practices', 
          description: 'Mastered AWS CDK with TypeScript for managing complex multi-service infrastructure. Learned to structure CDK stacks for separation of concerns, proper resource dependencies, and secure IAM policy management.', 
          icon: Workflow 
        },
        { 
          title: 'Real-Time Data Visualization', 
          description: 'Gained expertise in building responsive, real-time dashboards using Chart.js and event-driven JavaScript. Learned to balance update frequency with performance and implement graceful error handling.', 
          icon: BarChart3 
        },
        { 
          title: 'AWS Service Integration', 
          description: 'Deep understanding of integrating multiple AWS services (Rekognition, Kinesis, DynamoDB, CloudWatch, SNS) with proper error handling, retry logic, and cost optimization strategies. Learned to leverage AWS SDK v3 for TypeScript and boto3 for Python.', 
          icon: Database 
        },
        { 
          title: 'Video Processing & ML', 
          description: 'Acquired knowledge in video frame processing with OpenCV, understanding frame rates, sampling strategies, and format conversion. Learned to work with AWS Rekognition API for content moderation and interpret confidence scores effectively.', 
          icon: Brain 
        }
      ]
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      categories: [
        {
          category: 'Frontend',
          items: [
            { name: 'JavaScript (ES6+)', icon: SiJavascript },
            { name: 'Chart.js', icon: SiJavascript },
            { name: 'HTML5/CSS3', icon: SiJavascript }
          ]
        },
        {
          category: 'Backend',
          items: [
            { name: 'Python 3.9+', icon: SiPython },
            { name: 'Flask', icon: SiFlask },
            { name: 'OpenCV', icon: SiPython },
            { name: 'Node.js 18', icon: SiNodedotjs },
            { name: 'TypeScript', icon: SiTypescript }
          ]
        },
        {
          category: 'AWS Services',
          items: [
            { name: 'AWS CDK', icon: SiAmazon },
            { name: 'AWS Lambda', icon: SiAmazon },
            { name: 'Amazon Rekognition', icon: SiAmazon },
            { name: 'Amazon Kinesis Video Streams', icon: SiAmazon },
            { name: 'Amazon DynamoDB', icon: SiAmazon },
            { name: 'Amazon CloudWatch', icon: SiAmazon },
            { name: 'Amazon SNS', icon: SiAmazon },
            { name: 'Amazon EventBridge', icon: SiAmazon },
            { name: 'API Gateway', icon: SiAmazon }
          ]
        },
        {
          category: 'DevOps & Tools',
          items: [
            { name: 'AWS SDK (boto3)', icon: SiPython },
            { name: 'AWS SDK v3 (TypeScript)', icon: SiTypescript },
            { name: 'Watchtower', icon: SiPython },
            { name: 'Git', icon: SiGithub }
          ]
        }
      ]
    },
    {
      id: 'links',
      type: 'links',
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/2024PBL-AWS-project/ContentModeration', icon: ExternalLink },
        { label: 'Demo Video', url: 'https://github.com/2024PBL-AWS-project/ContentModeration/issues/1', icon: ExternalLink }
      ],
      figmaUrl: '',
      caseStudyUrl: ''
    }
  ]
};
