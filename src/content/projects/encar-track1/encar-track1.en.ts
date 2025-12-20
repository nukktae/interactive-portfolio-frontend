// English content file: All user-facing text strings

export const encarTrack1EN = {
    overview: {
      paragraphs: [
        {
          type: 'text',
        content:
          'Encar Track 1 is a deep learning computer vision competition project that classifies car images into 10 distinct angle/view categories: front, rear, left, right, inside, tire, and their combinations. The project achieved **>95% accuracy** on an extremely small dataset (~100 images per class) using advanced ensemble methods, cross-validation, and vision-language models.'
        },
        {
          type: 'text',
          content:
          'The primary challenge was overcoming dataset limitations through sophisticated deep learning techniques. Traditional approaches fail with such small sample sizes, requiring innovative solutions including multi-model ensembles, test-time augmentation, and transfer learning from pre-trained models like EfficientNet, MobileNet, and OpenAI CLIP.'
        },
        {
          type: 'text',
          content:
          'This project demonstrates mastery of advanced ML engineering practices including cross-validation training pipelines, ensemble learning strategies, regularization techniques, and production-ready evaluation systems. The solution integrates both traditional CNN architectures and modern vision-language models for robust classification performance.'
        }
      ]
    },
    myRole: {
      roles: [
        {
          title: 'ML Engineer & Researcher',
        iconKey: 'Brain',
          responsibilities: [
          'Designed and implemented multi-model ensemble architecture (EfficientNet-B0, MobileNetV3, CLIP)',
          'Developed cross-validation training pipeline with 5-fold CV and 3 seeds per fold (15 models total)',
          'Implemented advanced data augmentation strategies including Mixup, CutMix, and epoch-based schedules',
          'Created test-time augmentation system with 8 variants per image for robust inference',
          'Integrated vision-language models (CLIP) for zero-shot and fine-tuned classification'
        ],
        impacts: [
          'Achieved >95% validation accuracy on extremely small dataset (~100 images/class)',
          'Built production-ready evaluation pipeline generating competition-ready CSV outputs',
          'Established reproducible training system with comprehensive logging and checkpoint management'
          ]
        },
        {
          title: 'Deep Learning Architect',
        iconKey: 'Layers',
          responsibilities: [
          'Architected modular codebase with separate modules for models, datasets, training, and evaluation',
          'Implemented two-phase CLIP training strategy (frozen vision encoder → fine-tuned)',
          'Designed dual ensemble systems combining CNN and CLIP models with weighted averaging',
          'Created custom dataset class with flexible transform application and class mapping',
          'Optimized training hyperparameters including learning rate scheduling, regularization, and early stopping'
        ],
        impacts: [
          'Delivered maintainable, extensible codebase supporting multiple model architectures',
          'Enabled rapid experimentation through configurable training scripts and hyperparameters',
          'Ensured reproducibility with seed control and comprehensive experiment tracking'
          ]
        }
      ]
    },
    problem: {
    summary: 'Classifying car images into 10 angle categories with only ~100 images per class requires sophisticated deep learning techniques beyond standard approaches.',
      paragraphs: [
        {
          type: 'text',
          content:
          'The Encar Track 1 competition presented a classic small-dataset challenge in computer vision. With only approximately 100 images per class across 10 categories (front, rear, left, right, inside, tire, and combinations), traditional deep learning approaches would severely overfit or fail to generalize. The competition required achieving >90% accuracy, which is exceptionally difficult with such limited data.'
        },
        {
          type: 'text',
          content:
            'Achieving high accuracy required transfer learning, strong regularization, ensemble methods, and robust validation strategies.'
        }
    ],
    painPoints: [
      { description: 'Extremely small dataset (~100 images/class) makes standard training approaches prone to overfitting' },
      { description: 'Limited data diversity requires sophisticated augmentation and regularization strategies' },
      { description: 'Need for robust performance estimation through cross-validation rather than single train/test split' },
      { description: 'Competition format requires production-ready evaluation pipeline with CSV output generation' },
      { description: 'Multiple model architectures needed to create diverse ensemble for improved accuracy' }
    ],
    whyItMatters: 'Small datasets are common in real-world applications where data collection is expensive or limited. Successfully solving this challenge demonstrates advanced ML engineering skills including transfer learning, ensemble methods, and robust training strategies that are essential for production ML systems.'
  },
    goals: {
    goals: [
      { title: 'Accuracy Target', iconKey: 'Target', metric: '>95% validation accuracy achieved' },
      { title: 'Model Diversity', iconKey: 'Brain', metric: '15+ models across 3 architectures (EfficientNet, MobileNet, CLIP)' },
      { title: 'Ensemble Performance', iconKey: 'TrendingUp', metric: 'Dual ensemble combining CNN and vision-language models' },
      { title: 'Cross-Validation', iconKey: 'GitBranch', metric: '5-fold CV with 3 seeds per fold for robust evaluation' },
      { title: 'Production Ready', iconKey: 'BarChart3', metric: 'Complete evaluation pipeline with CSV output generation' },
      { title: 'Competition Ready', iconKey: 'Award', metric: 'Reproducible, well-documented solution meeting all requirements' }
    ]
  },
    research: {
      insights: [
        {
        title: 'Small Dataset Optimization Strategies',
        items: [
          'Transfer learning from ImageNet pre-trained models (EfficientNet-B0, MobileNetV3) proved essential',
          'Advanced augmentation (Mixup, CutMix, RandAugment) significantly improved generalization',
          'Epoch-based augmentation schedule (strong → moderate → minimal) prevented overfitting',
          'Cross-validation with multiple seeds provided robust performance estimation and ensemble diversity',
          'Label smoothing (0.15-0.25) and weight decay (2e-4 to 5e-4) were critical for regularization'
        ]
      },
      {
        title: 'Ensemble Learning Insights',
          items: [
          'Combining different architectures (EfficientNet + MobileNet) provided complementary predictions',
          'Test-time augmentation with 8 variants per image improved inference robustness by 2-3%',
          'Vision-language models (CLIP) added semantic understanding not captured by pure CNNs',
          'Dual ensemble strategy (zero-shot CLIP + fine-tuned CLIP) balanced robustness and accuracy',
          'Weighted averaging (30% zero-shot, 70% fine-tuned) optimized ensemble performance'
        ]
      },
      {
        title: 'CLIP Integration Findings',
          items: [
          'Zero-shot CLIP achieved 60-80% accuracy without any training, providing strong baseline',
          'Fine-tuned CLIP with custom classifier head reached 85-95% accuracy after training',
          'Two-phase training (frozen vision encoder → fine-tuned) improved stability and convergence',
          'CLIP preprocessing and normalization were critical for optimal performance',
          'Combining zero-shot and fine-tuned CLIP provided best of both worlds: robustness and accuracy'
          ]
        }
      ]
    },
    architecture: {
      paragraphs: [
        {
          type: 'text',
          content:
          'The solution employs a sophisticated ensemble of multiple deep learning models trained with cross-validation to maximize accuracy and robustness on the small dataset.'
        }
      ],
      bullets: [
      'EfficientNet-B0: Primary model trained with 5-fold CV × 3 seeds = 15 models',
      'MobileNetV3-Large: Secondary model providing architectural diversity',
      'CLIP Zero-Shot: Pre-trained vision-language model requiring no training',
      'CLIP Fine-Tuned: Domain-adapted CLIP with custom classifier head (15 models)',
      'Test-Time Augmentation: 8 variants per image (rotations, flips, color jitter)',
      'Weighted Ensemble: Configurable averaging across all models and TTA variants'
    ],
    items: [
      {
        title: 'Multi-Model Ensemble Architecture',
        description: 'The solution employs a sophisticated ensemble of multiple deep learning models trained with cross-validation to maximize accuracy and robustness on the small dataset.',
        features: [
          'EfficientNet-B0: Primary model trained with 5-fold CV × 3 seeds = 15 models',
          'MobileNetV3-Large: Secondary model providing architectural diversity',
          'CLIP Zero-Shot: Pre-trained vision-language model requiring no training',
          'CLIP Fine-Tuned: Domain-adapted CLIP with custom classifier head (15 models)',
          'Test-Time Augmentation: 8 variants per image (rotations, flips, color jitter)',
          'Weighted Ensemble: Configurable averaging across all models and TTA variants'
        ],
        userFlows: [
          {
            name: 'Cross-Validation Training',
            iconKey: 'GitBranch',
            description: 'Robust training pipeline using stratified K-fold cross-validation with multiple seeds',
            steps: [
              'Load dataset and create stratified 5-fold splits',
              'For each fold: train with 3 different random seeds',
              'Apply epoch-based augmentation schedule (strong → moderate → minimal)',
              'Use learning rate scheduling (warmup → cosine annealing → fine-tune)',
              'Save best model checkpoint per fold/seed combination',
              'Generate training logs with per-epoch metrics'
            ]
          },
          {
            name: 'CLIP Two-Phase Training',
            iconKey: 'Brain',
            description: 'Specialized training strategy for vision-language models with frozen and fine-tuned phases',
            steps: [
              'Phase 1: Freeze CLIP vision encoder, train only classifier head',
              'Use CLIP-specific preprocessing and normalization',
              'Apply Mixup augmentation for regularization',
              'Phase 2: Unfreeze vision encoder, fine-tune entire model with reduced LR',
              'Use cosine annealing scheduler with early stopping',
              'Save checkpoints for ensemble evaluation'
            ]
          },
          {
            name: 'Ensemble Evaluation',
            iconKey: 'TrendingUp',
            description: 'Production-ready evaluation pipeline combining all models with test-time augmentation',
            steps: [
              'Load all trained model checkpoints (15 EfficientNet + 1 MobileNet + 15 CLIP)',
              'For each test image: generate 8 TTA variants',
              'Get predictions from all models on all TTA variants',
              'Average predictions across models and TTA variants',
              'Generate final predictions with class probabilities',
              'Export results to CSV format for competition submission'
            ]
          }
        ]
      }
    ]
  },
  designSystem: {
    items: [
      {
        title: 'Model Architecture Components',
        type: 'components',
        components: [
          { title: 'BaseModel (EfficientNet-B0)', description: 'Primary CNN architecture with ImageNet pre-training, optimized for small datasets with compound scaling', iconKey: 'Layers' },
          { title: 'MobileNetModel (MobileNetV3-Large)', description: 'Lightweight complementary model providing ensemble diversity with different inductive bias', iconKey: 'Component' },
          { title: 'CLIPZeroShotModel', description: 'Vision-language model for zero-shot classification using text-image similarity matching', iconKey: 'Sparkles' },
          { title: 'CLIPFineTunedModel', description: 'Domain-adapted CLIP with custom classification head and two-phase training strategy', iconKey: 'Brain' },
          { title: 'EncarDataset', description: 'Custom PyTorch dataset class with flexible transform application and automatic class detection', iconKey: 'Database' }
        ]
      },
      {
        title: 'Training & Evaluation Modules',
        type: 'components',
        components: [
          { title: 'Cross-Validation Trainer', description: 'Automated K-fold CV training with multiple seeds, checkpoint management, and comprehensive logging', iconKey: 'Workflow' },
          { title: 'CLIP Trainer', description: 'Specialized training pipeline for CLIP models with two-phase strategy and CLIP-specific preprocessing', iconKey: 'Settings' },
          { title: 'Ensemble Evaluator', description: 'Production-ready evaluation system combining multiple models with TTA and weighted averaging', iconKey: 'TrendingUp' },
          { title: 'Data Augmentation Pipeline', description: 'Epoch-based augmentation schedule with Mixup, CutMix, and geometric transforms', iconKey: 'ImageIcon' },
          { title: 'Test-Time Augmentation', description: '8-variant TTA system with rotations, flips, and color jitter for robust inference', iconKey: 'Eye' }
        ]
      }
    ]
  },
  systemArchitecture: {
    categories: [
      {
        title: 'Model Architecture Layer',
        iconKey: 'Brain',
        items: [
          'EfficientNet-B0: TIMM-based implementation with ImageNet pre-trained weights',
          'MobileNetV3-Large: Lightweight architecture from TIMM library',
          'CLIP ViT-B/32: OpenAI CLIP vision transformer with 512-dim feature space',
          'Custom classification heads: Linear layers with dropout for CLIP fine-tuning',
          'Modular design: Separate model classes for easy extension and maintenance'
        ]
      },
      {
        title: 'Training Infrastructure',
        iconKey: 'Database',
        items: [
          'Cross-validation pipeline: 5-fold stratified splits with scikit-learn',
          'Checkpoint management: Per-fold, per-seed model saving with state preservation',
          'Logging system: CSV logs with per-epoch metrics (loss, accuracy, LR)',
          'Early stopping: Patience-based stopping with validation accuracy monitoring',
          'Learning rate scheduling: Warmup, cosine annealing, and plateau reduction',
          'GPU/CPU support: Automatic device detection with CUDA fallback'
        ]
      },
      {
        title: 'Data Processing & Augmentation',
        iconKey: 'Layers',
        items: [
          'Custom dataset class: EncarDataset with flexible transform application',
          'Epoch-based augmentation: Adaptive schedule (strong → moderate → minimal)',
          'Advanced augmentation: Mixup, CutMix, RandAugment, geometric transforms',
          'Test-time augmentation: 8 variants per image for robust inference',
          'Image preprocessing: CLIP-specific transforms and ImageNet normalization',
          'Stratified splitting: Balanced class distribution in train/val sets'
        ]
      },
      {
        title: 'Evaluation & Inference',
        iconKey: 'TrendingUp',
        items: [
          'Ensemble prediction: Weighted averaging across multiple models',
          'TTA integration: Average predictions across 8 augmentation variants',
          'CSV output generation: Competition-ready submission format',
          'Validation evaluation: Per-class accuracy tracking and metrics',
          'Batch processing: Efficient inference on test sets with DataLoader',
          'Model loading: Automatic checkpoint discovery and state restoration'
        ]
      }
    ]
  },
    keyFeatures: {
    metrics: [
      { title: 'Validation Accuracy', description: '>95% accuracy achieved on validation set using dual ensemble + TTA' },
      { title: 'Model Ensemble Size', description: '31+ models total (15 EfficientNet + 1 MobileNet + 15 CLIP fine-tuned)' },
      { title: 'Cross-Validation Folds', description: '5-fold CV with 3 seeds per fold for robust performance estimation' },
      { title: 'Test-Time Augmentation', description: '8 variants per image for inference robustness' },
      { title: 'Dataset Size', description: '~100 images per class (10 classes total, extremely small dataset)' }
    ],
    userFeatures: [
      {
        title: 'Advanced Training Techniques',
        iconKey: 'Brain',
        items: [
          '5-fold cross-validation with 3 seeds per fold (15 models per architecture)',
          'Epoch-based augmentation schedule adapting to training stage',
          'Mixup & CutMix probabilistic augmentation selection',
          'Two-phase CLIP training (frozen vision encoder → fine-tuned)',
          'Learning rate scheduling with warmup, cosine annealing, and fine-tuning phases'
        ]
      },
      {
        title: 'Regularization & Optimization',
        iconKey: 'Shield',
        items: [
          'Label smoothing (0.15-0.25) to prevent overconfident predictions',
          'Weight decay (2e-4 to 5e-4) for L2 regularization',
          'Dropout (0.3) in CLIP classifier head',
          'Gradient clipping (max_norm=1.0) to prevent exploding gradients',
          'Early stopping with patience-based monitoring'
        ]
      }
    ],
    engineeringFeatures: [
      {
        title: 'Production-Ready Infrastructure',
        iconKey: 'Code',
        items: [
          'Modular codebase with separate modules for models, datasets, training, evaluation',
          'Comprehensive logging system with CSV output and per-epoch metrics',
          'Checkpoint management with automatic best model saving',
          'GPU/CPU automatic detection and fallback',
          'Reproducible experiments with seed control throughout pipeline',
          'CSV output generation for competition submission'
        ]
      },
      {
        title: 'Ensemble & Evaluation Systems',
        iconKey: 'Layers',
        items: [
          'Dual ensemble combining EfficientNet-B0 CV + MobileNetV3',
          'CLIP dual ensemble (zero-shot + fine-tuned CV) with configurable weights',
          'Test-time augmentation with 8 variants per image',
          'Weighted averaging across models and TTA variants',
          'Validation set evaluation with per-class accuracy tracking',
          'Batch processing for efficient inference on large test sets'
        ]
      }
    ],
      features: [
        {
          title: 'Multi-Model Ensemble',
        description: 'Combines CNN and vision-language models for improved accuracy.'
        },
        {
          title: 'Cross-Validation Training',
        description: 'Uses stratified K-fold CV with multiple seeds to maximize data usage.'
        },
        {
          title: 'Advanced Augmentation',
        description: 'Applies Mixup, CutMix, and adaptive augmentation schedules.'
        },
        {
          title: 'Production-Ready Evaluation',
        description: 'Generates competition-ready CSV predictions with reproducible results.'
        }
      ]
    },
    challenges: {
      items: [
        {
        challenge: 'Extremely small dataset (~100 images per class) made standard deep learning approaches prone to severe overfitting. Traditional training would fail to generalize.',
        solution: 'Implemented sophisticated regularization techniques including label smoothing, weight decay, dropout, and gradient clipping. Used transfer learning from ImageNet pre-trained models (EfficientNet, MobileNet) and CLIP. Applied advanced augmentation strategies (Mixup, CutMix, RandAugment) with epoch-based scheduling to maximize data diversity while preventing overfitting.'
      },
      {
        challenge: 'Need for robust performance estimation with limited data. Single train/test split would provide unreliable accuracy estimates.',
        solution: 'Designed comprehensive cross-validation pipeline with 5-fold stratified splits ensuring balanced class distribution. Trained 3 models per fold with different random seeds, creating 15 models per architecture for robust ensemble. This approach maximized data utilization while providing reliable performance estimates.'
      },
      {
        challenge: 'Integrating vision-language models (CLIP) required specialized training strategies different from standard CNN training.',
        solution: 'Developed two-phase CLIP training strategy: first freezing the vision encoder and training only the classifier head, then unfreezing for fine-tuning with reduced learning rate. Used CLIP-specific preprocessing and normalization. Created dual ensemble combining zero-shot CLIP (no training) with fine-tuned CLIP for best of both worlds: robustness and accuracy.'
      },
      {
        challenge: 'Creating production-ready evaluation pipeline that combines multiple models, handles test-time augmentation, and generates competition-ready outputs.',
        solution: 'Built modular evaluation system that automatically discovers and loads all trained checkpoints. Implemented 8-variant test-time augmentation system. Created weighted ensemble averaging across all models and TTA variants. Designed CSV output generation matching competition submission format with proper class predictions and probabilities.'
      },
      {
        challenge: 'Ensuring reproducibility and maintainability across complex training pipeline with multiple models, folds, and seeds.',
        solution: 'Implemented comprehensive seed control throughout entire pipeline (data splitting, model initialization, training). Created modular codebase with clear separation of concerns (models, datasets, training, evaluation). Built extensive logging system tracking all hyperparameters and metrics. Used checkpoint management preserving full training state for reproducibility.'
      }
    ]
  },
    results: {
      bullets: [
      '>95% validation accuracy achieved with dual ensemble + TTA',
      '31+ models trained across 3 architectures (EfficientNet, MobileNet, CLIP)',
      '5-fold cross-validation with 3 seeds per fold for robust evaluation',
      'Production-ready evaluation pipeline generating competition-ready CSV outputs',
      'Comprehensive logging and checkpoint management for reproducibility',
      'Successfully overcame small dataset challenge (~100 images/class)'
    ],
    metrics: [
      '>95% validation accuracy achieved with dual ensemble + TTA',
      '31+ models trained across 3 architectures (EfficientNet, MobileNet, CLIP)',
      '5-fold cross-validation with 3 seeds per fold for robust evaluation',
      'Production-ready evaluation pipeline generating competition-ready CSV outputs',
      'Comprehensive logging and checkpoint management for reproducibility',
      'Successfully overcame small dataset challenge (~100 images/class)'
    ],
    description: 'The project successfully achieved the competition goal of >90% accuracy, reaching >95% validation accuracy using sophisticated ensemble methods. The solution demonstrates advanced ML engineering practices including cross-validation training, ensemble learning, and production-ready evaluation systems. Key achievements include overcoming the small dataset challenge through transfer learning, advanced regularization, and multi-model ensembles. The integration of vision-language models (CLIP) provided semantic understanding capabilities beyond pure CNNs, while the comprehensive training infrastructure ensured reproducibility and maintainability.'
  },
    learnings: {
      items: [
        {
        title: 'Small Dataset Optimization',
        iconKey: 'Brain',
        description: 'Learned that small datasets require sophisticated regularization beyond standard techniques. Transfer learning, advanced augmentation (Mixup, CutMix), and cross-validation are essential. Epoch-based augmentation scheduling prevents overfitting while maximizing data diversity.'
      },
      {
        title: 'Ensemble Learning Power',
        iconKey: 'TrendingUp',
        description: 'Discovered that combining diverse architectures (EfficientNet + MobileNet) and training strategies (CNN + CLIP) significantly improves accuracy. Test-time augmentation adds 2-3% improvement. Weighted ensemble averaging is crucial for optimal performance.'
      },
      {
        title: 'Vision-Language Models',
        iconKey: 'Sparkles',
        description: 'Gained deep understanding of CLIP architecture and training. Zero-shot CLIP provides strong baseline without training. Two-phase fine-tuning (frozen → unfrozen) improves stability. Combining zero-shot and fine-tuned CLIP balances robustness and accuracy.'
      },
      {
        title: 'ML Engineering Best Practices',
        iconKey: 'Code',
        description: 'Learned importance of modular code design, comprehensive logging, and checkpoint management. Reproducibility through seed control is critical. Cross-validation with multiple seeds provides robust performance estimation and ensemble diversity.'
      },
      {
        title: 'Production ML Pipelines',
        iconKey: 'Workflow',
        description: 'Understood requirements for production-ready ML systems: automatic device detection, batch processing, CSV output generation, validation evaluation, and error handling. Well-documented, maintainable code is essential for real-world deployment.'
      }
    ]
  },
    techStack: {
      frameworks: ['PyTorch', 'TorchVision', 'OpenAI CLIP', 'TIMM'],
      data: ['NumPy', 'Pandas', 'scikit-learn', 'OpenCV'],
      tools: ['Python', 'Jupyter', 'Git']
  },
  links: {
    links: [
      { label: 'GitHub Repository', url: 'https://github.com' },
      { label: 'Project Documentation', url: 'https://github.com' }
    ],
    figmaUrl: '',
    caseStudyUrl: ''
    }
  };
  