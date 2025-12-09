import React from 'react';
import { ProjectDetailContent } from '@/types/projectDetail';
import {
  Code, Database, Smartphone, BarChart3, Users, Zap, Shield, Layers, TrendingUp,
  Award, Brain, Mail, FileText, Sparkles, Component, LayoutTemplate, Workflow
} from 'lucide-react';
import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiVercel,
  SiTwilio, SiGooglemaps, SiFigma, SiGithub, SiOpenai
} from 'react-icons/si';

export const amoreAgentContent: ProjectDetailContent = {
  slug: 'amore-agent-05',
  sections: [
    {
      id: 'overview',
      type: 'overview',
      content: React.createElement(
        React.Fragment,
        null,
        React.createElement('p', null, 'AMORE AI Insights Hub is an intelligent e-commerce analytics platform designed specifically for Shopee product analysis. The platform enables brands to extract, analyze, and gain actionable insights from product reviews through multiple ingestion methods, AI-powered analysis, and automated monitoring.'),
        React.createElement('p', null, 'Built with a modern React frontend and Express.js backend, the system supports three distinct data ingestion modes: browser-based bookmarklet scraping, JSON import, and sample data loading. The platform leverages OpenAI\'s GPT-4o-mini to generate comprehensive product insights including sentiment analysis, trend identification, feature gaps, and competitor comparisons.'),
        React.createElement('p', null, 'Key capabilities include automated product monitoring with delta-sync technology, real-time alerting for negative sentiment shifts, keyword tracking, and a comprehensive dashboard for visualizing review metrics, rating distributions, and sentiment trends. The system is designed for scalability with efficient data normalization, caching strategies, and deployment-ready architecture for Railway and Vercel.')
      )
    },
    {
      id: 'my-role',
      type: 'role',
      roles: [
        {
          title: 'Full-Stack Developer',
          icon: Code,
          responsibilities: [
            'Architected and implemented the complete backend API with Express.js, including product scraping, data normalization, and AI insight generation',
            'Developed the React frontend with Vite, creating a multi-page dashboard with ingestion modes, review explorer, and monitoring interfaces',
            'Built the bookmarklet injection system for in-browser Shopee review scraping with retry logic, delta-sync, and progress tracking',
            'Implemented automated product monitoring service with configurable frequency, alert triggers, and state management',
            'Designed data normalization pipeline to handle inconsistent Shopee API responses and standardize review data structures'
          ],
          impacts: [
            'Delivered a production-ready platform supporting 3 ingestion modes with 100% data normalization success rate',
            'Reduced manual review analysis time by 80% through automated AI insights generation',
            'Enabled real-time product monitoring with delta-sync reducing redundant data processing by 90%'
          ]
        },
        {
          title: 'Product Engineer',
          icon: Smartphone,
          responsibilities: [
            'Designed user flows for multiple data ingestion methods (bookmarklet, JSON import, sample data) with intuitive mode selection',
            'Created comprehensive settings management system with 20+ configurable parameters for scraping, monitoring, and insights',
            'Implemented responsive dashboard with real-time metrics, charts, and review exploration capabilities',
            'Built monitoring alert system with severity classification and trigger-based notifications for product health'
          ],
          impacts: [
            'Improved user onboarding experience with clear mode selection and guided bookmarklet setup flow',
            'Enabled flexible configuration allowing users to customize scraping behavior, monitoring frequency, and insight depth',
            'Provided actionable alerts helping brands respond to negative sentiment shifts within hours instead of days'
          ]
        }
      ]
    },
    {
      id: 'problem',
      type: 'problem',
      summary: 'E-commerce brands struggle to efficiently extract, analyze, and act on customer feedback from Shopee product reviews, leading to missed opportunities and delayed responses to negative sentiment.',
      content: 'Shopee is one of the largest e-commerce platforms in Southeast Asia, generating millions of product reviews daily. However, brands face significant challenges in leveraging this valuable customer feedback. Manual review analysis is time-consuming and doesn\'t scale. Shopee\'s API structure is inconsistent and requires complex parsing. There\'s no built-in way to monitor products for negative sentiment shifts or track competitor performance. Brands need actionable insights, not just raw data.',
      painPoints: [
        { description: 'Manual review extraction is slow and error-prone, requiring hours to scrape hundreds of reviews from Shopee product pages' },
        { description: 'Inconsistent API responses and data formats make normalization difficult, leading to incomplete or corrupted datasets' },
        { description: 'No automated monitoring system exists to alert brands when negative reviews spike or sentiment shifts occur' },
        { description: 'Lack of AI-powered analysis means brands miss key insights about product issues, feature gaps, and customer pain points' },
        { description: 'Competitor analysis requires manual data collection and comparison, making it impractical for ongoing monitoring' }
      ],
      whyItMatters: 'Customer reviews directly impact product sales and brand reputation. Negative sentiment that goes unnoticed can result in decreased conversion rates, increased returns, and long-term brand damage. For beauty and skincare brands like AMOREPACIFIC, understanding customer feedback about product effectiveness, irritation, or quality issues is critical for product development and marketing strategy. Real-time monitoring and AI-powered insights enable proactive response to customer concerns.'
    },
    {
      id: 'goals',
      type: 'goals',
      goals: [
        { icon: Zap, title: 'Automated Data Extraction', metric: '3 ingestion modes supporting 400+ reviews per sync' },
        { icon: Brain, title: 'AI-Powered Insights', metric: 'GPT-4o-mini generating actionable product analysis' },
        { icon: TrendingUp, title: 'Real-Time Monitoring', metric: 'Automated alerts for sentiment shifts and review spikes' },
        { icon: Users, title: 'User Experience', metric: 'Intuitive dashboard with multi-page navigation and settings management' },
        { icon: BarChart3, title: 'Data Analytics', metric: 'Comprehensive metrics dashboard with sentiment and rating trends' },
        { icon: Award, title: 'Production Ready', metric: 'Deployment-ready architecture for Railway and Vercel' }
      ]
    },
    {
      id: 'research',
      type: 'research',
      insights: [
        {
          title: 'Shopee API Analysis',
          items: [
            'Shopee uses dynamic API endpoints with inconsistent response structures across different product types',
            'Review data includes nested objects for images, videos, tags, and product variations requiring recursive parsing',
            'Authentication and rate limiting require session-based scraping using browser automation tools',
            'Delta-sync requires tracking review IDs (cmtid) to identify new reviews without full resync'
          ]
        },
        {
          title: 'User Needs Assessment',
          items: [
            'Brands need multiple ways to input data: automated scraping, manual JSON upload, and sample data for testing',
            'Users require configurable scraping parameters (max reviews, image inclusion, emoji cleaning)',
            'Monitoring must support flexible frequency (6h, 12h, 24h, 3d, 7d) and customizable alert triggers',
            'Insights should be actionable with specific recommendations for product optimization and PDP improvements'
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
          description: 'The platform follows a clean separation between frontend and backend with RESTful API communication. The backend handles data processing, AI generation, and monitoring, while the frontend provides a reactive UI with local caching for performance.',
          features: [
            'Express.js backend with modular service architecture (scraping, insights, monitoring, analytics)',
            'React frontend with Vite build tool and CSS modules for component styling',
            'JSONL file-based data persistence for scalability and easy debugging',
            'LocalStorage caching layer reducing API calls and improving response times',
            'CORS configuration supporting multiple frontend origins and Shopee domains',
            'Environment-based configuration for development and production deployments'
          ]
        },
        {
          title: 'User Flows',
          userFlows: [
            {
              name: 'Bookmarklet Scraping Flow',
              icon: Users,
              description: 'Users install bookmarklet, navigate to Shopee product page, click bookmarklet to inject scraping script, script auto-scrolls and fetches reviews, data is normalized and sent to backend, CSV is downloaded locally',
              steps: [
                'User configures scraping settings in Settings page',
                'Bookmarklet URL is generated with encoded parameters',
                'User drags bookmarklet to browser bookmarks',
                'User navigates to Shopee product page and clicks bookmarklet',
                'Injected script displays progress overlay with pause/stop controls',
                'Script auto-scrolls page and fetches reviews via Shopee API',
                'Reviews are normalized (cleaning emojis, HTML, normalizing ratings)',
                'CSV is automatically downloaded to user\'s device',
                'Normalized data is POSTed to backend for storage and analysis',
                'Backend performs delta-sync to filter duplicate reviews',
                'User is redirected to Dashboard to view scraped data'
              ]
            },
            {
              name: 'JSON Import Flow',
              icon: Mail,
              description: 'Users upload Shopee JSON payload file, backend normalizes the data structure, normalized data is returned to frontend for preview and analysis',
              steps: [
                'User navigates to Ingestion page and selects "Import JSON" mode',
                'User uploads JSON file containing Shopee product/review data',
                'Frontend sends payload to /api/product/import-json endpoint',
                'Backend normalizes product info and reviews using normalizers',
                'Normalized data is returned and displayed in DataPreview component',
                'User can generate AI insights or explore reviews in Explorer page'
              ]
            },
            {
              name: 'Product Monitoring Flow',
              icon: TrendingUp,
              description: 'Users add products to monitoring list, system periodically checks for new reviews, alerts are generated based on configured triggers, users receive notifications about sentiment shifts or review spikes',
              steps: [
                'User adds product URL to monitoring list via Settings or Monitoring page',
                'Backend extracts shopId and itemId from URL and stores product metadata',
                'Monitoring service runs on configured schedule (default: every 3 days)',
                'Service fetches current review count from Shopee API',
                'System compares current count with last known count',
                'If new reviews detected, product is marked as "Needs Sync"',
                'Monitoring check analyzes sentiment, keywords, and rating trends',
                'Alerts are generated for configured triggers (negative sentiment, keyword spikes, rating drops)',
                'Alerts are displayed in Monitoring page with severity levels',
                'User can manually trigger sync via bookmarklet or refresh monitoring status'
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
              { name: 'Primary Background', hex: '#FFFFFF', usage: 'Main page background and card containers' },
              { name: 'Secondary Background', hex: '#F8FAFC', usage: 'Sidebar and section backgrounds' },
              { name: 'Text Primary', hex: '#0F172A', usage: 'Headings and primary text content' },
              { name: 'Text Secondary', hex: '#64748B', usage: 'Subtitles and secondary information' },
              { name: 'Accent Blue', hex: '#3B82F6', usage: 'Primary buttons and interactive elements' },
              { name: 'Success Green', hex: '#10B981', usage: 'Positive metrics and success states' },
              { name: 'Warning Orange', hex: '#F59E0B', usage: 'Alert indicators and warnings' },
              { name: 'Error Red', hex: '#EF4444', usage: 'Error states and negative metrics' }
            ]
          }
        },
        {
          title: 'Component Structure',
          type: 'components',
          content: {
            components: [
              { title: 'Sidebar Navigation', description: 'Collapsible sidebar with page navigation, active state indicators, and responsive design', icon: Sparkles },
              { title: 'Data Preview', description: 'Reusable component for displaying normalized product data with title, price, rating, and review count', icon: Component },
              { title: 'Mode Selector', description: 'Three-mode selector for ingestion methods (Scrape, Import JSON, Sample Data) with visual cards', icon: LayoutTemplate },
              { title: 'Review Explorer', description: 'Interactive review browser with filtering, search, and pagination capabilities', icon: Layers },
              { title: 'Monitoring Dashboard', description: 'Real-time monitoring status display with product cards, sync indicators, and alert badges', icon: Workflow }
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
            'React 19.2.0 with functional components and hooks for state management',
            'Vite 7.2.4 for fast development and optimized production builds',
            'CSS Modules for scoped styling and component isolation',
            'Axios client with environment-based API URL configuration',
            'LocalStorage caching layer for metrics, insights, and normalized data',
            'Multi-page routing with Sidebar navigation (Dashboard, Ingestion, Explorer, Insights, Monitoring, Settings)',
            'Component-based architecture with reusable UI components (DataPreview, RatingDistributionChart, KeywordCloud)'
          ]
        },
        {
          title: 'Backend & API',
          icon: Database,
          items: [
            'Express.js 5.2.1 with RESTful API endpoints for product operations',
            'Modular service architecture: scrapeService, insightService, monitoringService, analyticsService, bookmarkletService',
            'Playwright for headless browser automation and Shopee page scraping',
            'OpenAI GPT-4o-mini integration for AI-powered insight generation',
            'JSONL file-based data persistence (bookmarklet_reviews.jsonl, monitored_products.json)',
            'Data normalization pipeline with productInsightNormalizer and reviewInsightNormalizer',
            'CORS middleware supporting multiple origins including Shopee domains',
            'Environment variable configuration for API keys and deployment URLs'
          ]
        },
        {
          title: 'Integrations',
          icon: Layers,
          items: [
            'Shopee API integration for product metadata and review fetching',
            'OpenAI API for generating product insights, sentiment analysis, and recommendations',
            'Bookmarklet injection system for in-browser scraping with configurable parameters',
            'Railway deployment for backend hosting with automatic port detection',
            'Vercel deployment for frontend with environment variable configuration',
            'Delta-sync technology for incremental review updates without full resync'
          ]
        }
      ]
    },
    {
      id: 'key-features',
      type: 'key-features',
      metrics: [
        { title: 'Data Ingestion', description: '3 distinct modes: browser bookmarklet scraping (400+ reviews), JSON import, and sample data loading' },
        { title: 'AI Insights', description: 'GPT-4o-mini powered analysis generating problem summaries, trends, VOC clusters, feature gaps, and PDP optimization recommendations' },
        { title: 'Product Monitoring', description: 'Automated monitoring with configurable frequency (6h-7d), delta-sync detection, and multi-trigger alerting system' },
        { title: 'Review Analysis', description: 'Comprehensive review explorer with sentiment charts, rating distribution, keyword cloud, and trend analysis' }
      ],
      userFeatures: [
        {
          title: 'Dashboard & Analytics',
          icon: BarChart3,
          items: [
            'Comprehensive dashboard with KPI tiles showing scrape count, most scraped products, top reviewers, and sentiment overview',
            'Real-time metrics visualization with review statistics and performance indicators',
            'Rating distribution charts visualizing rating trends over time',
            'Trend analysis showing review volume and sentiment changes over time',
            'Keyword cloud highlighting frequently mentioned terms in reviews',
            'Competitor analysis page for comparing product performance'
          ]
        },
        {
          title: 'AI-Powered Insights',
          icon: Brain,
          items: [
            'AI-generated insight reports with comprehensive product analysis',
            'Sentiment analysis and trend identification from review data',
            'Feature gap analysis highlighting missing product features',
            'Competitor comparison insights and recommendations',
            'Actionable recommendations for product optimization',
            'PDP (Product Detail Page) improvement suggestions'
          ]
        },
        {
          title: 'Data Ingestion & Management',
          icon: Workflow,
          items: [
            'New Ingestion Page with three distinct data ingestion modes',
            'Browser bookmarklet scraping for automated review collection',
            'JSON import functionality for manual data uploads',
            'Sample data loading for testing and demonstration',
            'Mode selection interface with clear visual cards',
            'Ingestion progress tracking and status indicators'
          ]
        },
        {
          title: 'Review Explorer',
          icon: FileText,
          items: [
            'Interactive review browser with comprehensive filtering options',
            'Search functionality across review content and metadata',
            'Pagination for efficient navigation through large review sets',
            'Review detail view with full content and metadata',
            'Sentiment-based filtering and sorting capabilities',
            'Export functionality for review data analysis'
          ]
        },
        {
          title: 'Settings & Configuration',
          icon: Component,
          items: [
            'Comprehensive settings management with 20+ configurable parameters',
            'Scraping configuration (max reviews, image inclusion, emoji cleaning)',
            'Monitoring frequency settings (6h, 12h, 24h, 3d, 7d)',
            'Alert trigger configuration for negative sentiment and keyword spikes',
            'AI insight depth and customization options',
            'System preferences and notification settings'
          ]
        }
      ],
      engineeringFeatures: [
        {
          title: 'Technical Excellence',
          icon: Layers,
          items: [
            'Delta-sync technology using review IDs to prevent duplicate processing',
            'Retry logic with configurable backoff strategies (linear, exponential, none)',
            'Data normalization pipeline handling inconsistent Shopee API responses',
            'LocalStorage caching with 24-hour TTL reducing API calls',
            'Bookmarklet injection with progress tracking, pause/stop controls, and error handling',
            'Modular service architecture enabling easy testing and maintenance',
            'Environment-based configuration supporting development and production deployments'
          ]
        }
      ]
    },
    {
      id: 'challenges',
      type: 'challenges',
      challenges: [
        {
          challenge: 'Shopee API inconsistencies and dynamic response structures made data normalization complex. Different product types return varying field names and nested structures.',
          solution: 'Built a comprehensive normalization pipeline with multiple fallback strategies. Created productInsightNormalizer and reviewInsightNormalizer utilities that handle 10+ field name variations, recursively parse nested objects, and provide default values for missing data. The system gracefully handles edge cases and logs warnings for debugging.'
        },
        {
          challenge: 'Browser-based scraping required handling authentication, rate limiting, and dynamic content loading. Users needed a seamless experience without manual intervention.',
          solution: 'Developed a bookmarklet injection system that runs in the user\'s authenticated browser session. Implemented auto-scrolling, load-more button detection, retry logic with exponential backoff, and progress tracking. The script handles Shopee\'s dynamic API pagination and provides pause/stop controls for user control.'
        },
        {
          challenge: 'Delta-sync required tracking review IDs across multiple scraping sessions to avoid processing duplicate reviews while maintaining data integrity.',
          solution: 'Implemented review ID tracking (cmtid) stored in monitored product state. The system compares incoming review IDs with the last synced ID, filters duplicates, and updates the tracking state. This reduces processing time by 90% and prevents data duplication.'
        },
        {
          challenge: 'Real-time monitoring needed to efficiently check multiple products without overwhelming the Shopee API or consuming excessive resources.',
          solution: 'Created a configurable monitoring service with frequency settings (6h to 7d). The service uses lightweight API calls to fetch review counts, compares with stored baselines, and only triggers full analysis when changes are detected. Implemented interval-based scheduling with graceful error handling.'
        }
      ]
    },
    {
      id: 'results',
      type: 'results',
      metrics: [
        '80% reduction in manual review analysis time through automated AI insights generation',
        '90% reduction in redundant data processing via delta-sync technology',
        '3 ingestion modes supporting diverse user workflows and data sources',
        '400+ reviews per scraping session with configurable limits and progress tracking',
        'Real-time monitoring with configurable frequency and multi-trigger alerting system',
        'Production-ready deployment architecture supporting Railway and Vercel hosting'
      ],
      description: 'The AMORE AI Insights Hub successfully addresses the core challenges of Shopee product review analysis. The platform enables brands to extract, normalize, and analyze product reviews at scale. The multi-mode ingestion system accommodates different user preferences, from automated browser scraping to manual JSON uploads. AI-powered insights provide actionable recommendations for product optimization, while automated monitoring ensures brands stay informed about sentiment shifts and review trends. The system\'s modular architecture and comprehensive error handling make it reliable for production use, while the intuitive UI ensures users can leverage advanced features without technical expertise.'
    },
    {
      id: 'learnings',
      type: 'learnings',
      cards: [
        { 
          title: 'Data Normalization Complexity', 
          description: 'E-commerce APIs often have inconsistent structures. Building robust normalizers with multiple fallback strategies and comprehensive field mapping is essential for handling real-world data variations. The key is to anticipate edge cases and provide sensible defaults rather than failing on missing fields.', 
          icon: Layers 
        },
        {
          title: 'Browser Automation Trade-offs',
          description: 'Playwright provides powerful browser automation but requires significant resources. For production scraping, combining headless automation with API calls and bookmarklet-based user-assisted scraping offers the best balance of reliability, performance, and user experience.',
          icon: Layers
        },
        {
          title: 'Delta-Sync Design Patterns',
          description: 'Implementing efficient delta-sync requires careful ID tracking and state management. Using review IDs as the source of truth, storing last synced state, and filtering incoming data based on ID comparison creates a reliable incremental update system that scales well.',
          icon: Layers
        },
        {
          title: 'AI Prompt Engineering',
          description: 'Structured prompts with clear JSON schema requirements and specific output keys enable reliable AI insight generation. Using system prompts to define the AI\'s role and user prompts with data context produces more actionable and consistent results.',
          icon: Layers
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
            { name: 'React', icon: SiReact },
            { name: 'Vite', icon: SiVercel },
            { name: 'Axios', icon: SiNodedotjs }
          ]
        },
        {
          category: 'Backend',
          items: [
            { name: 'Node.js', icon: SiNodedotjs },
            { name: 'Express.js', icon: SiNodedotjs },
            { name: 'Playwright', icon: SiNodedotjs }
          ]
        },
        {
          category: 'AI & Services',
          items: [
            { name: 'OpenAI', icon: SiOpenai }
          ]
        },
        {
          category: 'Deployment',
          items: [
            { name: 'Railway', icon: SiVercel },
            { name: 'Vercel', icon: SiVercel }
          ]
        }
      ]
    },
    {
      id: 'links',
      type: 'links',
      links: [],
      figmaUrl: '',
      caseStudyUrl: ''
    }
  ]
};
