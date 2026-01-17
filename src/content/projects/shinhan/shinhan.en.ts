// English content file: All user-facing text strings

export const shinhanEN = {
  overview: {
    paragraphs: [
      {
        type: 'text',
        content: [
          { type: 'span', text: 'Shinhan Scholarship Foundation', className: 'font-semibold text-foreground' },
          ' applied project focused on resolving manual monthly student report submissions that created operational burden for the foundation while limiting student engagement with the platform.'
        ]
      },
      {
        type: 'text',
        content:
          'As Product Engineer, I led a client-facing product project that transformed the reporting workflow through constraint-aware user research, data-driven ideation, and full-stack development of both student-facing features and an admin CRM dashboard.'
      },
      {
        type: 'text',
        content:
          'The solution deployed as a Progressive Web App (PWA) integrated community features, networking capabilities, and recurring activity reporting for students, alongside a lightweight admin dashboard that streamlined student management and oversight, achieving approximately 3 hours of backend processing time savings.'
      }
    ]
  },

  role: {
    roles: [
      {
        title: 'Product Engineer',
        iconKey: 'Product Engineer',
        responsibilities: [
          'Led client-facing product project from research to deployment',
          'Conducted constraint-aware user research using web crawling, secondary data analysis, and data visualization due to interview sensitivity',
          'Drove ideation using SCAMPER method to generate innovative solutions',
          'Designed student-facing features including community, networking, and recurring activity reporting',
          'Architected lightweight admin CRM dashboard for faster student management and oversight',
          'Collaborated across frontend and backend teams to deploy and iterate PWA',
          'Integrated client feedback post-launch and optimized backend processing workflows'
        ],
        impacts: [
          'Reduced operational burden by eliminating manual monthly report submissions',
          'Increased platform engagement and brand usage through improved student experience',
          'Achieved ~3 hours of backend processing time savings through automation',
          'Delivered production-ready PWA with both student and admin interfaces'
        ]
      }
    ]
  },

  problem: {
    summary:
      'The foundation faced significant operational burden from manual monthly student report submissions, while students had limited engagement with the platform and brand.',
    content:
      'Monthly student report submissions required manual processing, creating administrative overhead and delays. Students found the reporting process cumbersome and had limited reasons to engage with the platform beyond mandatory submissions. This reduced both operational efficiency and student engagement with the foundation\'s brand and services.',
    painPoints: [
      { description: 'Manual monthly report processing created significant administrative burden' },
      { description: 'Students had limited engagement with the platform beyond mandatory reporting' },
      { description: 'Lack of community and networking features reduced platform value for students' },
      { description: 'No streamlined way for admins to manage and oversee student activities' },
      { description: 'Backend processing time was inefficient due to manual workflows' }
    ],
    whyItMatters:
      'Automating the reporting process while adding value-driven features increases both operational efficiency and student engagement, strengthening the foundation\'s relationship with scholarship recipients and reducing administrative costs.'
  },

  goals: {
    goals: [
      { title: 'Automate Reporting', iconKey: 'Automate Reporting', metric: 'Eliminate manual monthly report submissions' },
      { title: 'Increase Engagement', iconKey: 'Increase Engagement', metric: 'Boost platform usage and brand interaction' },
      { title: 'Reduce Processing Time', iconKey: 'Reduce Processing Time', metric: 'Save ~3 hours of backend processing time' },
      { title: 'Community Building', iconKey: 'Community Building', metric: 'Enable student networking and community features' },
      { title: 'Admin Efficiency', iconKey: 'Admin Efficiency', metric: 'Streamline student management and oversight' },
      { title: 'PWA Deployment', iconKey: 'PWA Deployment', metric: 'Deploy cross-platform Progressive Web App' }
    ]
  },

  research: {
    insights: [
      {
        title: 'User Research Constraints',
        items: [
          'Interview sensitivity required alternative research methods',
          'Web crawling provided insights into student behavior patterns',
          'Secondary data analysis revealed reporting pain points',
          'Data visualization helped identify workflow inefficiencies',
          'Constraint-aware approach ensured ethical and effective research'
        ]
      },
      {
        title: 'Key Findings',
        items: [
          'Students wanted community and networking features beyond reporting',
          'Recurring activity reporting needed automation and simplification',
          'Admins required better tools for student oversight and management',
          'Platform engagement correlated with feature value and ease of use',
          'Backend processing could be significantly optimized through automation'
        ]
      }
    ]
  },

  architecture: {
    items: [
      {
        title: 'System Architecture',
        description:
          'A dual-interface Progressive Web App architecture serving both student-facing features and admin dashboard, with automated reporting workflows and community engagement capabilities.',
        features: [
          'Progressive Web App (PWA) for cross-platform deployment',
          'Student-facing interface with community, networking, and reporting features',
          'Lightweight admin CRM dashboard for student management',
          'Automated recurring activity reporting system',
          'Backend processing optimization for time savings'
        ]
      },
      {
        title: 'Main User Flows',
        userFlows: [
          {
            name: 'Student Activity Reporting',
            iconKey: 'Student Activity Reporting',
            description:
              'Students can submit recurring activity reports through an automated, streamlined interface.',
            steps: [
              'Access reporting interface',
              'Fill out activity details',
              'Submit recurring reports',
              'Track submission history',
              'Engage with community features'
            ]
          },
          {
            name: 'Community & Networking',
            iconKey: 'Community & Networking',
            description:
              'Students can connect with peers, participate in community discussions, and build networks.',
            steps: [
              'Join community platform',
              'Connect with other students',
              'Participate in discussions',
              'Build professional network',
              'Share experiences and resources'
            ]
          },
          {
            name: 'Admin Dashboard',
            iconKey: 'Admin Dashboard',
            description:
              'Administrators can efficiently manage students, review reports, and monitor platform engagement.',
            steps: [
              'Access admin CRM dashboard',
              'View student overview and activities',
              'Review and process reports',
              'Monitor engagement metrics',
              'Manage student information'
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
          { usage: 'Primary actions and brand elements' },
          { usage: 'Supporting interfaces and backgrounds' },
          { usage: 'Status indicators and notifications' },
          { usage: 'Clean, accessible student and admin interfaces' }
        ],
        components: [
          {
            title: 'Student Interface Components',
            iconKey: 'Student Interface Components',
            description: 'Community, networking, and reporting interface elements'
          },
          {
            title: 'Admin Dashboard Components',
            iconKey: 'Admin Dashboard Components',
            description: 'CRM dashboard elements for student management'
          },
          {
            title: 'Reporting Components',
            iconKey: 'Reporting Components',
            description: 'Automated reporting form and workflow components'
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
          'Progressive Web App (PWA)',
          'Responsive web design',
          'Student-facing interface',
          'Admin CRM dashboard',
          'Community and networking features'
        ]
      },
      {
        title: 'Backend & Processing',
        iconKey: 'Backend & Processing',
        items: [
          'Automated report processing',
          'Student data management',
          'Admin dashboard API',
          'Community platform backend',
          'Optimized processing workflows'
        ]
      },
      {
        title: 'Research & Methods',
        iconKey: 'Research & Methods',
        items: [
          'Web crawling for user insights',
          'Secondary data analysis',
          'Data visualization',
          'SCAMPER ideation method',
          'Constraint-aware research approach'
        ]
      }
    ]
  },

  keyFeatures: {
    metrics: [
      { title: 'Processing Time Savings', description: '~3 hours of backend processing time saved' },
      { title: 'Dual Interface', description: 'Student and admin interfaces in single PWA' },
      { title: 'Automated Reporting', description: 'Eliminated manual monthly report submissions' },
      { title: 'Community Features', description: 'Networking and community engagement capabilities' }
    ],
    userFeatures: [
      {
        title: 'Automated Reporting',
        iconKey: 'Automated Reporting',
        items: [
          'Streamlined recurring activity reporting',
          'Automated submission workflow',
          'Report history tracking',
          'Simplified reporting interface'
        ]
      },
      {
        title: 'Community & Networking',
        iconKey: 'Community & Networking',
        items: [
          'Student community platform',
          'Peer networking capabilities',
          'Discussion and engagement features',
          'Resource sharing and collaboration'
        ]
      },
      {
        title: 'Student Dashboard',
        iconKey: 'Student Dashboard',
        items: [
          'Activity tracking and reporting',
          'Community engagement',
          'Network connections',
          'Platform usage analytics'
        ]
      }
    ],
    engineeringFeatures: [
      {
        title: 'Admin CRM Dashboard',
        iconKey: 'Admin CRM Dashboard',
        items: [
          'Student management interface',
          'Report review and processing',
          'Engagement metrics monitoring',
          'Streamlined oversight tools'
        ]
      },
      {
        title: 'Backend Optimization',
        iconKey: 'Backend Optimization',
        items: [
          'Automated processing workflows',
          'Time-saving optimizations',
          'Efficient data management',
          'Reduced manual intervention'
        ]
      },
      {
        title: 'PWA Architecture',
        iconKey: 'PWA Architecture',
        items: [
          'Cross-platform deployment',
          'Offline capabilities',
          'Responsive design',
          'Fast loading and performance'
        ]
      }
    ]
  },

  challenges: {
    challenges: [
      {
        challenge: 'Conducting user research with interview sensitivity constraints',
        solution:
          'Developed constraint-aware research approach using web crawling, secondary data analysis, and data visualization to gather insights without direct interviews.'
      },
      {
        challenge: 'Balancing student engagement features with operational efficiency',
        solution:
          'Used SCAMPER method for ideation to generate solutions that both increased student value and reduced administrative burden.'
      },
      {
        challenge: 'Designing dual interfaces for students and admins',
        solution:
          'Architected separate but integrated interfaces within a single PWA, ensuring both user types had optimized experiences.'
      },
      {
        challenge: 'Optimizing backend processing time',
        solution:
          'Automated manual workflows and streamlined data processing to achieve ~3 hours of time savings per processing cycle.'
      },
      {
        challenge: 'Integrating client feedback post-launch',
        solution:
          'Established iterative development process with client collaboration to refine features and workflows based on real-world usage.'
      }
    ]
  },

  results: {
    metrics: [
      'Eliminated manual monthly report submissions',
      'Achieved ~3 hours of backend processing time savings',
      'Increased platform engagement and brand usage',
      'Deployed production-ready PWA with dual interfaces',
      'Enabled community and networking features for students',
      'Streamlined admin student management and oversight'
    ],
    description:
      'The Shinhan Scholarship Foundation project successfully transformed the reporting workflow from a manual, time-consuming process into an automated, engaging platform experience. By combining constraint-aware research, innovative ideation, and full-stack development, the solution reduced operational burden while increasing student engagement. The dual-interface PWA serves both students and administrators effectively, with significant time savings and improved platform value.'
  },

  learnings: {
    cards: [
      {
        title: 'Constraint-Aware Research',
        iconKey: 'Constraint-Aware Research',
        description: 'Learned to conduct effective user research when direct interviews are not feasible, using web crawling, data analysis, and visualization to gather insights.'
      },
      {
        title: 'SCAMPER Ideation Method',
        iconKey: 'SCAMPER Ideation Method',
        description: 'Applied SCAMPER method to systematically generate innovative solutions that address both user needs and operational requirements.'
      },
      {
        title: 'Dual-Interface Design',
        iconKey: 'Dual-Interface Design',
        description: 'Designed and architected separate interfaces for different user types within a single application, balancing distinct needs while maintaining consistency.'
      },
      {
        title: 'Client-Facing Product Leadership',
        iconKey: 'Client-Facing Product Leadership',
        description: 'Led a complete product project from research to deployment, collaborating with clients and cross-functional teams to deliver measurable impact.'
      }
    ]
  },

  techStack: {
    categories: [
      {
        category: 'Product Management',
        items: ['SCAMPER', 'User Research', 'Data Analysis', 'Web Crawling', 'Data Visualization']
      },
      {
        category: 'UI',
        items: ['PWA', 'Web Technologies', 'Responsive Design', 'CRM Dashboard']
      },
      {
        category: 'UX',
        items: ['Community Features', 'Networking', 'Activity Reporting', 'User Engagement']
      }
    ]
  },

  links: {
    links: [],
    figmaUrl: '',
    caseStudyUrl: ''
  }
};
