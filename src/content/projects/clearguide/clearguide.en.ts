// English content file: All user-facing text strings

export const clearguideEN = {
    overview: {
      paragraphs: [
        {
          type: 'text',
          content: [
            { type: 'span', text: 'ClearGuide', className: 'font-semibold text-foreground' },
            ' is an AI-powered web application that helps Korean residents understand and act on public documents issued by government agencies.'
          ]
        },
        {
          type: 'text',
          content:
            'The platform analyzes complex bureaucratic documents such as tax notices, fines, and official letters, transforming dense legal language into clear summaries, action items, and deadline reminders.'
        },
        {
          type: 'text',
          content:
            'By combining GPT-4o Vision for OCR, GPT-4o for document analysis, and a Retrieval-Augmented Generation (RAG) system, ClearGuide delivers accurate, explainable guidance while maintaining a strict privacy-first architecture.'
        }
      ]
    },
  
    role: {
      roles: [
        {
          title: 'Full-Stack Developer & AI Engineer',
          iconKey: 'Full-Stack Developer & AI Engineer',
          description:
            'I designed and implemented the entire system end-to-end, covering frontend architecture, backend APIs, AI pipelines, and privacy infrastructure.',
          responsibilities: [
            'Built the application using Next.js App Router and TypeScript',
            'Implemented 18+ API endpoints for document upload, OCR, parsing, and chat',
            'Designed hybrid entity extraction pipeline (NER + Regex + Relation Extraction)',
            'Implemented RAG system using vector embeddings for grounded chatbot responses',
            'Built multi-stage PII masking pipeline across the entire document lifecycle',
            'Designed TTL-based document retention and automatic deletion policies'
          ],
          impacts: [
            'Delivered a complete full-stack AI application with privacy-first architecture',
            'Enabled accurate document analysis through hybrid AI and rule-based systems',
            'Established robust PII protection across all document processing stages'
          ]
        },
        {
          title: 'Frontend Architect & UX Developer',
          iconKey: 'Frontend Architect & UX Developer',
          description:
            'I focused on making complex public documents understandable through intuitive UI, strong visual hierarchy, and accessible interaction patterns.',
          responsibilities: [
            'Built reusable component system with Tailwind CSS and Radix UI',
            'Designed responsive layouts for desktop, tablet, and mobile',
            'Implemented internationalization for Korean and English',
            'Developed intelligent chatbot UI with contextual awareness',
            'Built document library with search, filtering, and previews',
            'Created calendar and deadline management experience'
          ],
          impacts: [
            'Created an intuitive interface that makes complex documents accessible',
            'Enabled self-service document understanding reducing call center dependency',
            'Delivered a polished, accessible experience across all devices'
          ]
        }
      ]
    },
  
    problem: {
      summary:
        'Many Korean residents struggle to understand public documents due to complex legal language and unclear instructions.',
      content:
        'Government-issued documents are often written using formal terminology and legal phrasing that is difficult for non-experts to interpret. This lack of clarity leads to missed deadlines, incorrect actions, and increased dependence on call centers and in-person support.',
      painPoints: [
        { description: 'Complex legal language makes documents difficult to understand' },
        { description: 'Unclear instructions lead to missed deadlines and incorrect actions' },
        { description: 'High dependency on call centers and in-person support' },
        { description: 'Lack of centralized document management and tracking' }
      ],
      whyItMatters:
        'Improving document comprehension through AI-powered analysis can reduce errors, increase compliance, and empower citizens to handle public documents independently.'
    },
  
    goals: {
      goals: [
        { title: 'Plain Language Translation', iconKey: 'Plain Language Translation', metric: 'Complex documents simplified' },
        { title: 'Automatic Extraction', iconKey: 'Automatic Extraction', metric: 'Deadlines and actions extracted' },
        { title: 'Error Reduction', iconKey: 'Error Reduction', metric: 'Fewer missed submissions' },
        { title: 'Self-Service Support', iconKey: 'Self-Service Support', metric: 'Reduced call center dependency' },
        { title: 'Multi-Format Support', iconKey: 'Multi-Format Support', metric: '7+ document formats' },
        { title: 'Privacy Protection', iconKey: 'Privacy Protection', metric: 'PII masking by default' }
      ]
    },
  
    research: {
      insights: [
        {
          title: 'Document Complexity',
          items: [
            'Public documents come in diverse formats including PDF, HWP, DOCX, and scanned images',
            'Different formats require different parsing strategies',
            'OCR quality varies significantly across document sources'
          ]
        },
        {
          title: 'Privacy Requirements',
          items: [
            'Documents frequently contain sensitive personal information',
            'Users require control over data retention and deletion',
            'PII protection must be enforced at every processing stage'
          ]
        },
        {
          title: 'Accuracy & Trust',
          items: [
            'AI responses must be grounded in actual document content',
            'Hallucinated explanations reduce trust',
            'Clear source citations improve transparency'
          ]
        }
      ]
    },
  
    architecture: {
      items: [
        {
          title: 'Multi-Stage Document Processing',
          description:
            'ClearGuide uses a multi-stage document processing pipeline that balances accuracy, performance, and privacy.',
          features: [
            'File validation and upload handling',
            'OCR using GPT-4o Vision with fallback strategies',
            'PII detection and masking before storage',
            'AI-based parsing for summaries and action items',
            'Hybrid entity extraction for structured data',
            'Vector-based retrieval for chatbot grounding',
            'Automatic document deletion via TTL policies'
          ],
          userFlows: undefined
        }
      ]
    },
  
    keyFeatures: {
      metrics: [],
      userFeatures: [
        {
          title: 'Intelligent Document Analysis',
          iconKey: 'Intelligent Document Analysis',
          items: ['Automatically generates summaries, action items, deadlines, and risk alerts from uploaded documents.']
        },
        {
          title: 'Context-Aware Chatbot',
          iconKey: 'Context-Aware Chatbot',
          items: ['Answers user questions using RAG to ensure responses are grounded in document content with citations.']
        },
        {
          title: 'Deadline & Calendar Management',
          iconKey: 'Deadline & Calendar Management',
          items: ['Extracts deadlines and visualizes urgency through calendar views and reminders.']
        },
        {
          title: 'Document Library',
          iconKey: 'Document Library',
          items: ['Centralized storage with search, filtering, previews, and lifecycle management.']
        }
      ],
      engineeringFeatures: []
    },
  
    challenges: {
      challenges: [
        {
          problem: 'Handling diverse document formats with inconsistent quality',
          solution:
            'Implemented a fallback chain combining native parsers and GPT-4o Vision with error handling and OCR deduplication.'
        },
        {
          problem: 'Preventing hallucinations in AI responses',
          solution:
            'Built a RAG system with vector similarity search and enforced citation validation.'
        },
        {
          problem: 'Protecting sensitive personal data',
          solution:
            'Designed a multi-stage PII masking pipeline and ensured masked data is the only data ever persisted.'
        },
        {
          problem: 'Extracting entities accurately from Korean documents',
          solution:
            'Combined NER, regex patterns, and relation extraction for higher accuracy and validation.'
        }
      ]
    },
  
    results: {
      metrics: [
        'Production-ready application with large-scale modular codebase',
        'Support for 7 different document formats',
        'Average API response time under 2 seconds',
        'Accurate deadline and action extraction',
        'RAG-powered chatbot with citation-based responses',
        'Privacy-first system masking all sensitive data'
      ],
      description:
        'ClearGuide successfully delivers an AI-powered platform that makes complex public documents accessible to Korean residents. The system combines advanced document processing, privacy protection, and intuitive UX to empower citizens to understand and act on government communications independently.'
    },
  
    learnings: {
      cards: [
        {
          title: 'Hybrid AI Systems Are More Reliable',
          iconKey: 'Hybrid AI Systems',
          description:
            'Combining rule-based systems with LLMs improves accuracy and reduces failure modes.'
        },
        {
          title: 'Privacy Must Be Designed from the Start',
          iconKey: 'Privacy Design',
          description:
            'Applying PII masking at every stage prevents accidental data leaks and builds user trust.'
        },
        {
          title: 'Explainability Increases Adoption',
          iconKey: 'Explainability',
          description:
            'Grounded responses with citations help users trust and rely on AI-generated guidance.'
        }
      ]
    },
  
    techStack: {
      categories: [
        { category: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Radix UI'] },
        { category: 'Backend', items: ['Node.js', 'Firebase', 'Supabase'] },
        { category: 'AI', items: ['OpenAI GPT-4o', 'OpenAI Vision', 'Vector Embeddings'] },
        { category: 'Tools', items: ['Vercel'] }
      ]
    },
    designSystem: {
      items: []
    },
    systemArchitecture: {
      categories: []
    },
    links: {
      links: [],
      figmaUrl: '#',
      caseStudyUrl: '#'
    }
  };
  