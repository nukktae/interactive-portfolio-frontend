// English content file: All user-facing text strings

export const amoreAgentEN = {
    overview: {
      paragraphs: [
        {
          type: 'text',
          content: [
            { type: 'span', text: 'AMORE AI Insights Hub', className: 'font-semibold text-foreground' },
            ' is an AI-powered e-commerce analytics platform built to help brands analyze and act on Shopee product reviews at scale.'
          ]
        },
        {
          type: 'text',
          content:
            'The platform enables brands to ingest review data through multiple methods and generate actionable insights such as sentiment trends, feature gaps, keyword analysis, and competitor comparisons using AI.'
        },
        {
          type: 'text',
          content:
            'With automated monitoring, delta-sync technology, and real-time alerts, AMORE AI Insights Hub allows teams to detect negative sentiment shifts early and respond proactively.'
        }
      ]
    },
  
    myRole: {
      roles: [
        {
          title: 'Full-Stack Developer',
          description:
            'I designed and implemented the entire system end-to-end, covering backend services, frontend dashboards, data pipelines, and AI-powered insight generation.',
          responsibilities: [
            'Built Express.js backend handling scraping, normalization, AI insights, and monitoring',
            'Developed React frontend with multi-page dashboard and ingestion workflows',
            'Implemented browser bookmarklet for in-page Shopee review scraping',
            'Designed delta-sync system to process only new reviews',
            'Built automated monitoring service with alert triggers and state tracking'
          ]
        },
        {
          title: 'Product Engineer',
          description:
            'I focused on building a usable, configurable product that supports multiple data ingestion workflows and turns raw reviews into clear business insights.',
          responsibilities: [
            'Designed user flows for bookmarklet scraping, JSON import, and sample data',
            'Built dashboard UX for analytics, monitoring, and review exploration',
            'Implemented configurable settings for scraping, monitoring, and AI insights',
            'Designed alert system for negative sentiment and review spikes'
          ]
        }
      ]
    },
  
    problem: {
      summary:
        'E-commerce brands struggle to efficiently analyze Shopee product reviews and react quickly to negative customer feedback.',
      paragraphs: [
        {
          type: 'text',
          content:
            'Shopee generates massive volumes of product reviews, but extracting meaningful insights from this data is difficult and time-consuming.'
        },
        {
          type: 'text',
          content:
            'Manual review analysis does not scale, API data is inconsistent, and there is no built-in way to monitor sentiment changes or competitor performance.'
        }
      ]
    },
  
    goals: {
      items: [
        'Automate review data extraction from Shopee',
        'Generate AI-powered product insights from customer feedback',
        'Enable real-time monitoring for sentiment and review changes',
        'Provide a clear analytics dashboard for product teams',
        'Support flexible ingestion methods for different workflows',
        'Deliver a production-ready, scalable system'
      ]
    },
  
    research: {
      insights: [
        {
          title: 'Shopee Data Constraints',
          items: [
            'Shopee API responses vary across product types',
            'Review data contains deeply nested and inconsistent fields',
            'Delta-sync requires tracking review IDs to avoid duplicate processing'
          ]
        },
        {
          title: 'User Needs',
          items: [
            'Multiple ingestion options are required (automated and manual)',
            'Users need fine-grained control over scraping and monitoring behavior',
            'Insights must be actionable, not just descriptive'
          ]
        }
      ]
    },
  
    architecture: {
      paragraphs: [
        {
          type: 'text',
          content:
            'The system follows a clear separation between frontend and backend, with the backend handling data processing and AI analysis, and the frontend focusing on visualization and interaction.'
        }
      ],
      bullets: [
        'Express.js backend with modular services',
        'React frontend with client-side caching',
        'Bookmarklet-based in-browser scraping',
        'Delta-sync pipeline for incremental updates',
        'AI insight generation using GPT models',
        'Monitoring service with configurable schedules'
      ]
    },
  
    keyFeatures: {
      features: [
        {
          title: 'Multi-Mode Data Ingestion',
          description:
            'Supports browser bookmarklet scraping, JSON import, and sample data loading.'
        },
        {
          title: 'AI-Powered Review Insights',
          description:
            'Generates sentiment analysis, trend detection, feature gaps, and optimization recommendations.'
        },
        {
          title: 'Automated Product Monitoring',
          description:
            'Tracks review volume and sentiment changes with alert-based notifications.'
        },
        {
          title: 'Analytics Dashboard',
          description:
            'Visualizes review metrics, rating distributions, keywords, and trends.'
        }
      ]
    },
  
    challenges: {
      items: [
        {
          problem: 'Inconsistent Shopee API responses',
          solution:
            'Built robust normalization pipelines with fallback logic and default handling.'
        },
        {
          problem: 'Scraping dynamic Shopee pages reliably',
          solution:
            'Implemented bookmarklet-based scraping within authenticated browser sessions.'
        },
        {
          problem: 'Avoiding duplicate review processing',
          solution:
            'Introduced delta-sync based on review ID tracking.'
        },
        {
          problem: 'Monitoring multiple products efficiently',
          solution:
            'Designed lightweight monitoring checks that trigger full analysis only when needed.'
        }
      ]
    },
  
    results: {
      bullets: [
        '80% reduction in manual review analysis time',
        '90% reduction in redundant data processing via delta-sync',
        'Three ingestion modes supporting diverse workflows',
        'Automated alerts for sentiment shifts and review spikes',
        'Production-ready deployment on Railway and Vercel'
      ]
    },
  
    learnings: {
      items: [
        {
          title: 'Normalization Is Critical for Real-World Data',
          description:
            'E-commerce data is inconsistent by nature. Strong normalization logic is essential for reliability.'
        },
        {
          title: 'User-Assisted Scraping Improves Reliability',
          description:
            'Running scraping logic inside authenticated browser sessions avoids many automation limitations.'
        },
        {
          title: 'Incremental Sync Scales Better Than Full Reprocessing',
          description:
            'Delta-sync dramatically reduces processing time and resource usage.'
        },
        {
          title: 'Structured Prompts Improve AI Output',
          description:
            'Clear schemas and prompt structure lead to more consistent, actionable AI insights.'
        }
      ]
    },
  
    techStack: {
      frontend: ['React', 'Vite', 'Axios'],
      backend: ['Node.js', 'Express.js', 'Playwright'],
      ai: ['OpenAI GPT-4o-mini'],
      deployment: ['Railway', 'Vercel']
    }
  };
  