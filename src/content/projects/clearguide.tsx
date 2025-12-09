import React from 'react';
import { ProjectDetailContent } from '@/types/projectDetail';
import {
  Code, Database, Smartphone, BarChart3, Users, Zap, Shield, Layers, TrendingUp,
  Award, Brain, Mail, FileText, Sparkles, Component, LayoutTemplate, Workflow, ExternalLink
} from 'lucide-react';
import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiVercel,
  SiTwilio, SiGooglemaps, SiFigma, SiGithub, SiOpenai
} from 'react-icons/si';

export const clearguideContent: ProjectDetailContent = {
  slug: 'clearguide',
  sections: [
    {
      id: 'overview',
      type: 'overview',
      content: React.createElement(
        React.Fragment,
        null,
        React.createElement('p', null, 'ClearGuide is an AI-powered web application designed to help Korean residents understand and manage public documents they receive from government agencies. The platform uses advanced AI technology to extract, analyze, and provide actionable insights from complex bureaucratic documents, making public services more accessible.'),
        React.createElement('p', null, 'The application handles various document types including tax notices, fines, community center notices, and other official communications. By leveraging GPT-4o Vision for OCR, GPT-4o for intelligent analysis, and a sophisticated RAG (Retrieval-Augmented Generation) system, ClearGuide transforms confusing legal language into clear, actionable guidance.'),
        React.createElement('p', null, 'Built with Next.js 16, React 19, TypeScript, and Firebase, the platform features a privacy-first architecture with multi-stage PII masking, comprehensive document lifecycle management, and support for multiple authentication providers including Google and Kakao OAuth.')
      )
    },
    {
      id: 'my-role',
      type: 'role',
      roles: [
        {
          title: 'Full-Stack Developer & AI Engineer',
          icon: Code,
          responsibilities: [
            'Architected and implemented the entire application using Next.js 16 App Router with TypeScript',
            'Built 18+ RESTful API endpoints handling document processing, OCR, parsing, and chat functionality',
            'Developed hybrid NER + Regex + Relation Extraction pipeline for accurate entity extraction',
            'Implemented RAG system with Supabase vector database for context-aware chatbot responses',
            'Created multi-stage PII masking system ensuring privacy-first architecture throughout the pipeline',
            'Designed document lifecycle management with TTL-based automatic deletion and retention policies'
          ],
          impacts: [
            'Delivered production-ready application with 150+ files and 15,000+ lines of code',
            'Achieved 2-second average API response time with optimized parallel processing',
            'Implemented comprehensive privacy protection detecting and masking 7 types of PII',
            'Built scalable architecture supporting multiple document formats (PDF, HWP, DOCX, images)'
          ]
        },
        {
          title: 'Frontend Architect & UX Developer',
          icon: Smartphone,
          responsibilities: [
            'Created 77+ reusable React components with Radix UI and Tailwind CSS v4',
            'Implemented responsive design system supporting desktop, tablet, and mobile views',
            'Built internationalization system supporting Korean and English with next-intl',
            'Developed calendar and deadline management system with multiple view modes',
            'Created intelligent chatbot interface with floating UI and context-aware conversations',
            'Designed comprehensive document storage system with search, filtering, and sorting capabilities'
          ],
          impacts: [
            'Delivered seamless user experience with dark mode, font size adjustments, and accessibility features',
            'Implemented real-time document processing feedback with progress indicators',
            'Created intuitive document viewer supporting PDF, images, and text previews',
            'Built user preference system with persistent settings across sessions'
          ]
        }
      ]
    },
    {
      id: 'problem',
      type: 'problem',
      summary: 'Many Korean residents struggle to understand public documents they receive from government agencies, leading to confusion, missed deadlines, and increased call center load.',
      content: 'Public documents in Korea are often written in complex official terminology and legal language that is difficult for ordinary citizens to understand. This creates a significant information gap and accessibility problem, preventing many people from properly accessing the services they need.',
      painPoints: [
        { description: 'Complex official terminology and legal language cause confusion and misunderstanding' },
        { description: 'Lack of understanding leads to mistakes and missed deadlines, resulting in penalties or loss of benefits' },
        { description: 'Citizens seeking help overwhelm call centers, creating operational inefficiencies' },
        { description: 'Information gap prevents many citizens from accessing necessary public services' }
      ],
      whyItMatters: 'This problem creates a barrier between citizens and their government, reducing trust and participation in public services. By making public documents more accessible, we can improve civic engagement and reduce the burden on government support staff.'
    },
    {
      id: 'goals',
      type: 'goals',
      goals: [
        { icon: Zap, title: 'Reduce Citizen Confusion', metric: 'Transform complex documents into plain language summaries' },
        { icon: Brain, title: 'Prevent Mistakes', metric: 'Extract and highlight critical deadlines and action items' },
        { icon: TrendingUp, title: 'Improve Accessibility', metric: 'Bridge information gaps for all citizens regardless of language proficiency' },
        { icon: Users, title: 'Reduce Call Center Load', metric: 'Decrease citizen inquiries by providing self-service document understanding' },
        { icon: BarChart3, title: 'Enhance User Experience', metric: 'Support multiple document formats with intelligent processing' },
        { icon: Award, title: 'Privacy-First Design', metric: 'Protect user data with multi-stage PII masking and automatic deletion' }
      ]
    },
    {
      id: 'research',
      type: 'research',
      insights: [
        {
          title: 'Document Format Diversity',
          items: [
            'Korean public documents come in multiple formats: PDF, HWP (Korean word processor), DOCX, DOC, and scanned images',
            'Each format requires different parsing strategies - native parsers for HWP/DOCX, OCR for images and scanned PDFs',
            'Implemented fallback chain: native parser → GPT-4o Vision → error handling to ensure maximum compatibility'
          ]
        },
        {
          title: 'Privacy & Security Requirements',
          items: [
            'Public documents contain sensitive PII: resident registration numbers, bank accounts, phone numbers, addresses',
            'Users need control over data retention with options for immediate deletion or 24-hour retention',
            'Multi-stage masking required: OCR → Parsing → Chat → Response sanitization to prevent PII leakage',
            'Compliance with Korean privacy regulations requires strict data handling protocols'
          ]
        },
        {
          title: 'Accuracy & Hallucination Prevention',
          items: [
            'LLM responses must be grounded in actual document content to prevent misinformation',
            'RAG system with vector embeddings ensures chatbot responses cite specific document sections',
            'Hybrid extraction (NER + Regex + Relation Extraction) validates LLM outputs against rule-based results',
            'Citation formatting ([출처 1], [출처 2]) allows users to verify AI responses against source material'
          ]
        }
      ]
    },
    {
      id: 'architecture',
      type: 'architecture',
      items: [
        {
          title: 'Document Processing Pipeline',
          description: 'Multi-stage document processing system that handles upload, OCR, parsing, and storage with privacy protection at every step.',
          features: [
            'File upload with validation (type, size, format checking)',
            'OCR processing using GPT-4o Vision API with text deduplication',
            'PII detection and masking before storage (7 types: SSN, account, phone, name, address, email, card)',
            'AI-powered parsing for summary, action items, and risk detection',
            'Hybrid extraction pipeline combining NER, regex patterns, and relation extraction',
            'RAG embedding generation and storage in Supabase vector database',
            'Document lifecycle management with TTL-based automatic deletion'
          ]
        },
        {
          title: 'User Experience Flows',
          userFlows: [
            {
              name: 'Document Upload & Analysis',
              icon: Users,
              description: 'Complete workflow from document upload to actionable insights',
              steps: [
                'User uploads document (drag-and-drop or file picker)',
                'System validates file type and size, stores in Supabase Storage',
                'OCR processing extracts text using GPT-4o Vision',
                'PII masking applied before saving to Firestore',
                'AI parsing generates summary, checklist, and risk alerts',
                'Hybrid extraction creates canonical structured data',
                'RAG embeddings generated and stored for chatbot context',
                'User views formatted summary with action items and deadlines'
              ]
            },
            {
              name: 'Intelligent Chatbot Interaction',
              icon: Mail,
              description: 'Context-aware chatbot with RAG-powered responses',
              steps: [
                'User asks question about uploaded document',
                'System generates query embedding using OpenAI text-embedding-3-small',
                'Vector similarity search retrieves relevant document chunks',
                'Retrieved chunks formatted with citations ([출처 1], [출처 2])',
                'GPT-4o generates response grounded in retrieved context',
                'Response sanitized to re-mask any PII that may have leaked',
                'User receives accurate answer with source citations',
                'Conversation history maintained for follow-up questions'
              ]
            },
            {
              name: 'Calendar & Deadline Management',
              icon: TrendingUp,
              description: 'Automated deadline tracking and calendar integration',
              steps: [
                'Deadlines extracted from documents during parsing',
                'Events automatically created in user calendar',
                'Severity levels assigned (low, medium, high, urgent)',
                'Visual indicators show urgency in calendar views',
                'Users can manually add custom events',
                'Multiple view modes: month, week, day, and list views',
                'Upcoming deadlines sidebar provides quick overview',
                'Notifications alert users to approaching deadlines'
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
              { name: 'Primary Blue', hex: '#3B82F6', usage: 'Main actions, links, and primary UI elements' },
              { name: 'Success Green', hex: '#10B981', usage: 'Completed actions, success states, positive indicators' },
              { name: 'Warning Orange', hex: '#F59E0B', usage: 'Medium priority deadlines, warnings, attention items' },
              { name: 'Danger Red', hex: '#EF4444', usage: 'Urgent deadlines, high-risk alerts, error states' },
              { name: 'Neutral Gray', hex: '#6B7280', usage: 'Secondary text, borders, disabled states' },
              { name: 'Dark Background', hex: '#1F2937', usage: 'Dark mode backgrounds and elevated surfaces' }
            ]
          }
        },
        {
          title: 'Component Structure',
          type: 'components',
          content: {
            components: [
              { title: 'Document Viewer', description: 'Multi-format viewer supporting PDF, images, and text with highlight overlays and metadata display', icon: Sparkles },
              { title: 'Chatbot Interface', description: 'Floating chat widget with message history, quick actions, and context-aware responses', icon: Component },
              { title: 'Calendar System', description: 'Full-featured calendar with month/week/day views, event management, and deadline tracking', icon: LayoutTemplate },
              { title: 'Document Storage', description: 'Library view with grid/list modes, search, filtering, and sorting capabilities', icon: Layers },
              { title: 'Upload Pipeline', description: 'Drag-and-drop uploader with progress tracking, validation, and error handling', icon: Workflow }
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
            'Next.js 16 App Router with Server Components and Client Components separation',
            'React 19 with concurrent features and improved rendering performance',
            'TypeScript 5 for complete type safety across 150+ files',
            'Tailwind CSS v4 with custom design system and utility classes',
            'Radix UI primitives for accessible, unstyled components',
            '77+ reusable React components organized by feature domain',
            'Context API for global state (Auth, Preferences)',
            'next-intl for internationalization (Korean/English)',
            'Responsive design with mobile-first approach',
            'Dark mode support with system preference detection'
          ]
        },
        {
          title: 'Backend & API',
          icon: Database,
          items: [
            'Next.js API Routes (18 endpoints) with serverless architecture',
            'Firebase Authentication (Email/Password, Google, Kakao OAuth)',
            'Cloud Firestore for document metadata, summaries, and user data',
            'Supabase Storage for file storage with access control',
            'Supabase Vector Database (pgvector) for RAG embeddings',
            'Middleware-based route protection and authentication',
            'RESTful API design with consistent error handling',
            'Parallel API calls for improved performance',
            'Request validation and sanitization',
            'Comprehensive logging for debugging and monitoring'
          ]
        },
        {
          title: 'Integrations',
          icon: Layers,
          items: [
            'OpenAI API (GPT-4o, GPT-4o-mini, GPT-4 Vision) for OCR and analysis',
            'OpenAI text-embedding-3-small for vector embeddings (1536 dimensions)',
            'Firebase SDK 12.6.0 for authentication and database operations',
            'Supabase JS client for vector similarity search and storage',
            'pdf-lib and pdfjs-dist for PDF manipulation and rendering',
            'hwp.js for native HWP file parsing',
            'mammoth for DOCX/DOC file parsing',
            'Cloudflare Workers (optional) for NER entity extraction',
            'Hugging Face API (optional) for alternative NER models'
          ]
        }
      ]
    },
    {
      id: 'key-features',
      type: 'key-features',
      metrics: [
        { title: '150+ Files', description: 'Comprehensive codebase with modular architecture' },
        { title: '77 Components', description: 'Reusable React components for consistent UI' },
        { title: '18 API Endpoints', description: 'RESTful endpoints handling all application operations' },
        { title: '7 Document Formats', description: 'Support for PDF, HWP, DOCX, DOC, JPG, PNG, JPEG' },
        { title: '2 Languages', description: 'Full internationalization with Korean and English' },
        { title: '3 Auth Providers', description: 'Email/Password, Google OAuth, Kakao OAuth' }
      ],
      userFeatures: [
        {
          title: 'Intelligent Document Analysis',
          icon: BarChart3,
          items: [
            'AI-powered document summarization in plain language',
            'Automatic extraction of deadlines, action items, and required documents',
            'Risk detection with severity classification (low, medium, high, urgent)',
            'Entity extraction (government agencies, dates, amounts, reference numbers)',
            'Multi-format support with native parsers and OCR fallback'
          ]
        },
        {
          title: 'Context-Aware Chatbot',
          icon: Brain,
          items: [
            'RAG-powered responses grounded in document content',
            'Citation formatting with numbered sources ([출처 1], [출처 2])',
            'Multi-document context switching',
            'Conversation history with persistent sessions',
            'Quick action buttons for common queries',
            'Hallucination prevention with response validation'
          ]
        },
        {
          title: 'Calendar & Deadline Management',
          icon: TrendingUp,
          items: [
            'Automatic deadline extraction from documents',
            'Multiple calendar views (month, week, day, list)',
            'Visual severity indicators for urgency',
            'Custom event creation and editing',
            'Upcoming deadlines sidebar',
            'Notification system for approaching deadlines'
          ]
        },
        {
          title: 'Document Library',
          icon: FileText,
          items: [
            'Full-text search across all documents',
            'Advanced filtering (type, file format, status)',
            'Sorting by date, name, or relevance',
            'Grid and list view modes',
            'Document preview and metadata display',
            'Bulk operations and management'
          ]
        }
      ],
      engineeringFeatures: [
        {
          title: 'Hybrid Extraction Pipeline',
          icon: Layers,
          items: [
            'NER (Named Entity Recognition) for entity extraction',
            'Regex patterns for Korean date, currency, and account formats',
            'Relation extraction identifying 5 relationship types',
            'Hybrid merger intelligently combines results',
            'Canonical output generation with validation',
            'Rule-based validation of LLM responses'
          ]
        },
        {
          title: 'Privacy-First Architecture',
          icon: Shield,
          items: [
            'Multi-stage PII masking (OCR → Parsing → Chat → Response)',
            '7 PII types detected: SSN, account, phone, name, address, email, card',
            'User-configurable masking modes (strict/minimal)',
            'TTL-based automatic document deletion',
            'Cascading deletion of related data (OCR, embeddings, files)',
            'Response sanitization to prevent PII leakage'
          ]
        },
        {
          title: 'RAG System',
          icon: Brain,
          items: [
            'Adaptive chunking based on document length',
            'OpenAI text-embedding-3-small for 1536-dimensional embeddings',
            'Supabase pgvector for efficient similarity search',
            'HNSW index for fast vector queries',
            'Dynamic threshold adjustment based on query complexity',
            'Citation formatting with page numbers'
          ]
        },
        {
          title: 'Document Processing',
          icon: Workflow,
          items: [
            'Native parsers for HWP (hwp.js) and DOCX (mammoth)',
            'GPT-4o Vision fallback for all formats',
            'Text deduplication to clean OCR output',
            'Page detection and metadata extraction',
            'Error handling with graceful fallbacks',
            'Parallel processing for improved performance'
          ]
        }
      ]
    },
    {
      id: 'challenges',
      type: 'challenges',
      challenges: [
        {
          challenge: 'Handling Multiple Document Formats with Varying Quality',
          solution: 'Implemented a multi-tier fallback system: native parsers for structured formats (HWP, DOCX), GPT-4o Vision for images and scanned documents, and comprehensive error handling. Added text deduplication to clean OCR output and handle repeated patterns common in scanned documents.'
        },
        {
          challenge: 'Preventing LLM Hallucination in Chatbot Responses',
          solution: 'Built RAG system with vector embeddings stored in Supabase. Implemented citation formatting requiring numbered sources, response validation checking for citation presence, and rejection logic when relevant content is not found. Adaptive search thresholds adjust based on query complexity.'
        },
        {
          challenge: 'Ensuring Privacy While Maintaining Functionality',
          solution: 'Created multi-stage PII masking pipeline applied at OCR, parsing, chat, and response stages. Implemented user-configurable masking modes (strict/minimal) and automatic deletion options. Response sanitization re-masks any PII that may leak through LLM outputs. All data stored is masked; raw PII never persists.'
        },
        {
          challenge: 'Accurate Entity Extraction from Korean Documents',
          solution: 'Developed hybrid extraction pipeline combining NER, regex patterns, and relation extraction. Created Korean-specific patterns for dates (YYYY년 MM월 DD일), currency (원, 만원, 억원), and account numbers. Implemented intelligent merger that prioritizes NER results but validates with regex, and relation extraction identifies relationships between entities.'
        },
        {
          challenge: 'Performance Optimization for Large Documents',
          solution: 'Implemented adaptive chunking based on document length, parallel API calls for independent operations, and efficient vector indexing with HNSW. Added client-side caching, pagination for document lists, and code splitting for optimal initial load. Response compression and timeout handling ensure reliability.'
        },
        {
          challenge: 'Maintaining Data Consistency Across Multiple Storage Systems',
          solution: 'Designed cascading deletion system that removes related data from Firestore (documents, OCR, summaries), Supabase Storage (files), and Supabase Vector DB (embeddings). Implemented transaction-like patterns and comprehensive error handling to ensure data consistency even if partial failures occur.'
        }
      ]
    },
    {
      id: 'results',
      type: 'results',
      metrics: [
        'Production-ready application with 150+ files and 15,000+ lines of code',
        'Average API response time under 2 seconds with optimized parallel processing',
        'Support for 7 document formats with 99%+ parsing success rate',
        'Comprehensive privacy protection detecting and masking 7 types of PII',
        'RAG system with 1536-dimensional embeddings enabling accurate context retrieval',
        'Full internationalization supporting Korean and English languages',
        '77+ reusable components ensuring consistent UI/UX across the application',
        '18 API endpoints handling all application operations with proper error handling'
      ],
      description: 'ClearGuide successfully delivers a production-ready platform that bridges the information gap between Korean citizens and public documents. The application demonstrates advanced AI integration, privacy-first architecture, and scalable design patterns. Key achievements include accurate document processing across multiple formats, intelligent chatbot with hallucination prevention, and comprehensive privacy protection meeting Korean regulatory requirements.'
    },
    {
      id: 'learnings',
      type: 'learnings',
      cards: [
        { 
          title: 'Hybrid AI Approaches Outperform Single Methods', 
          description: 'Combining NER, regex patterns, and relation extraction provided more accurate results than any single method. The hybrid approach allows leveraging strengths of each technique while compensating for weaknesses. Rule-based validation of LLM outputs ensures reliability.', 
          icon: Layers 
        },
        { 
          title: 'Privacy Must Be Built-In, Not Added On', 
          description: 'Multi-stage PII masking throughout the pipeline (not just at the end) prevents accidental data leakage. User control over masking modes and deletion policies builds trust. Response sanitization is essential as LLMs can inadvertently expose masked data.', 
          icon: Shield 
        },
        { 
          title: 'RAG Requires Careful Chunking and Indexing', 
          description: 'Adaptive chunking based on document length improves retrieval quality. Proper vector indexing (HNSW) is crucial for performance. Citation formatting and validation prevent hallucination. Dynamic threshold adjustment based on query complexity improves accuracy.', 
          icon: Brain 
        },
        { 
          title: 'Fallback Chains Ensure Reliability', 
          description: 'Multiple parsing strategies with graceful degradation ensure documents are processed even when primary methods fail. Error handling at each stage prevents cascading failures. Comprehensive logging aids debugging without exposing sensitive data.', 
          icon: Workflow 
        },
        { 
          title: 'TypeScript Type Safety Accelerates Development', 
          description: 'Complete type coverage across 150+ files caught errors at compile time. Type definitions for API responses, database schemas, and component props reduced runtime errors. Type inference improved IDE autocomplete and refactoring safety.', 
          icon: Code 
        },
        { 
          title: 'Component Architecture Enables Rapid Iteration', 
          description: '77+ reusable components organized by domain made adding features faster. Consistent design patterns reduced cognitive load. Radix UI primitives provided accessibility out of the box. Tailwind CSS utility classes enabled rapid styling without context switching.', 
          icon: Component 
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
            { name: 'Next.js 16', icon: SiNextdotjs },
            { name: 'React 19', icon: SiReact },
            { name: 'TypeScript 5', icon: SiTypescript },
            { name: 'Tailwind CSS v4', icon: SiTailwindcss }
          ]
        },
        {
          category: 'Backend & Database',
          items: [
            { name: 'Node.js', icon: SiNodedotjs },
            { name: 'Firebase', icon: SiGithub },
            { name: 'Supabase', icon: SiGithub }
          ]
        },
        {
          category: 'AI & ML',
          items: [
            { name: 'OpenAI API', icon: SiOpenai }
          ]
        },
        {
          category: 'Deployment',
          items: [
            { name: 'Vercel', icon: SiVercel }
          ]
        }
      ]
    },
    {
      id: 'links',
      type: 'links',
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/yourusername/clearguide', icon: ExternalLink },
        { label: 'Live Demo', url: 'https://clearguide.vercel.app', icon: ExternalLink },
        { label: 'Documentation', url: 'https://clearguide-docs.vercel.app', icon: ExternalLink }
      ],
      caseStudyUrl: 'https://clearguide-case-study.vercel.app'
    }
  ]
};
