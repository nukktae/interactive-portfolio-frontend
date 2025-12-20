import {
  UserRole,
  RoleConfidenceScores,
  BehavioralSignal,
  RoleDetectionResult,
  ConversationContext
} from '@/types/role';

/**
 * Role Detection Service
 * 
 * Detects user roles through behavioral signals (soft detection)
 * and handles explicit overrides. Uses confidence scoring, not single labels.
 */

// Keyword patterns for each role
const ROLE_KEYWORDS: Record<UserRole, string[]> = {
  recruiter: [
    'experience', 'role', 'team', 'impact', 'years', 'collaboration',
    'worked with', 'delivered', 'achieved', 'responsibilities', 'position',
    'company', 'organization', 'hire', 'candidate', 'skills', 'qualifications'
  ],
  engineer: [
    'architecture', 'backend', 'performance', 'api', 'scaling', 'tradeoff',
    'decision', 'technical', 'stack', 'framework', 'database', 'server',
    'optimization', 'algorithm', 'code', 'implementation', 'system design',
    'scalability', 'latency', 'throughput', 'infrastructure'
  ],
  designer: [
    'ux', 'user flow', 'iteration', 'accessibility', 'rationale', 'wireframe',
    'design', 'user experience', 'interface', 'usability', 'prototype',
    'user research', 'testing', 'feedback', 'visual', 'aesthetic', 'layout',
    'interaction', 'cognitive load', 'user journey'
  ],
  founder: [
    'business', 'users', 'revenue', 'speed', 'ownership', 'roi', 'metrics',
    'growth', 'adoption', 'market', 'product', 'launch', 'scale', 'revenue',
    'customers', 'validation', 'mvp', 'pivot', 'strategy', 'execution'
  ],
  casual: [
    'cool', 'nice', 'interesting', 'tell me', 'show me', 'what', 'how'
  ]
};

// First question patterns
const FIRST_QUESTION_PATTERNS: Record<UserRole, RegExp[]> = {
  recruiter: [
    /what (have you|did you) (worked on|done|built)/i,
    /tell me about (your|yourself)/i,
    /what's your (experience|background)/i,
    /what (projects|work) (have you|did you)/i
  ],
  engineer: [
    /what (stack|tech|technology|framework) (did you|do you|are you)/i,
    /how (did you|do you) (implement|build|architect)/i,
    /what (architecture|system|backend)/i,
    /technical (details|implementation|approach)/i
  ],
  designer: [
    /why (did you|do you) (design|choose|decide)/i,
    /how (did you|do you) (design|approach|think)/i,
    /what (was|is) the (design|ux|user experience)/i,
    /design (process|thinking|rationale)/i
  ],
  founder: [
    /what (impact|results|outcomes|metrics)/i,
    /how (many|much) (users|customers|revenue)/i,
    /what (was|is) the (business|product|market)/i,
    /how (fast|quick|long) (did you|was it)/i
  ],
  casual: [
    /what (is|are|do)/i,
    /tell me/i,
    /show me/i
  ]
};

/**
 * Detect role from a single query
 */
export function detectRoleFromQuery(
  query: string,
  isFirstQuestion: boolean = false
): BehavioralSignal[] {
  const signals: BehavioralSignal[] = [];
  const queryLower = query.toLowerCase();

  // Check first question patterns
  if (isFirstQuestion) {
    Object.entries(FIRST_QUESTION_PATTERNS).forEach(([role, patterns]) => {
      patterns.forEach(pattern => {
        if (pattern.test(query)) {
          signals.push({
            role: role as UserRole,
            strength: 0.8,
            source: 'first-question',
            context: `First question matches ${role} pattern`
          });
        }
      });
    });
  }

  // Check keyword matches
  Object.entries(ROLE_KEYWORDS).forEach(([role, keywords]) => {
    const matches = keywords.filter(keyword => queryLower.includes(keyword));
    if (matches.length > 0) {
      const strength = Math.min(0.6, matches.length * 0.15);
      signals.push({
        role: role as UserRole,
        strength,
        source: 'keyword',
        context: `Found keywords: ${matches.slice(0, 3).join(', ')}`
      });
    }
  });

  // Check interaction style
  if (queryLower.includes('why') || queryLower.includes('rationale') || queryLower.includes('reason')) {
    signals.push({
      role: 'designer',
      strength: 0.4,
      source: 'interaction-style',
      context: 'Asks "why" questions'
    });
  }

  if (queryLower.includes('compare') || queryLower.includes('vs') || queryLower.includes('difference')) {
    signals.push({
      role: 'engineer',
      strength: 0.3,
      source: 'interaction-style',
      context: 'Drills down with comparisons'
    });
  }

  if (query.length < 20 && !queryLower.includes('?')) {
    signals.push({
      role: 'recruiter',
      strength: 0.3,
      source: 'interaction-style',
      context: 'Short, skimming style'
    });
  }

  return signals;
}

/**
 * Detect explicit override requests
 */
export function detectExplicitOverride(query: string): UserRole | null {
  const queryLower = query.toLowerCase();
  
  if (queryLower.includes('recruiter') || queryLower.includes('hiring') || queryLower.includes('hr')) {
    return 'recruiter';
  }
  if (queryLower.includes('engineer') || queryLower.includes('technical') || queryLower.includes('developer')) {
    return 'engineer';
  }
  if (queryLower.includes('designer') || queryLower.includes('design') || queryLower.includes('ux')) {
    return 'designer';
  }
  if (queryLower.includes('founder') || queryLower.includes('pm') || queryLower.includes('product manager') || queryLower.includes('business')) {
    return 'founder';
  }
  if (queryLower.includes('explain from') || queryLower.includes('perspective')) {
    // Try to extract role from context
    if (queryLower.includes('recruiter')) return 'recruiter';
    if (queryLower.includes('engineer') || queryLower.includes('technical')) return 'engineer';
    if (queryLower.includes('designer') || queryLower.includes('design')) return 'designer';
    if (queryLower.includes('founder') || queryLower.includes('business')) return 'founder';
  }
  
  return null;
}

/**
 * Calculate confidence scores from signals
 */
export function calculateConfidenceScores(
  signals: BehavioralSignal[],
  previousScores?: RoleConfidenceScores
): RoleConfidenceScores {
  const scores: RoleConfidenceScores = {
    recruiter: previousScores?.recruiter || 0,
    engineer: previousScores?.engineer || 0,
    designer: previousScores?.designer || 0,
    founder: previousScores?.founder || 0,
    casual: previousScores?.casual || 0.1 // Default slight casual bias
  };

  // Aggregate signals
  signals.forEach(signal => {
    scores[signal.role] += signal.strength;
  });

  // Normalize to 0-1 range
  const total = Object.values(scores).reduce((sum, val) => sum + val, 0);
  if (total > 0) {
    Object.keys(scores).forEach(role => {
      scores[role as UserRole] = Math.min(1, scores[role as UserRole] / total);
    });
  }

  // Apply decay to previous scores (60% weight to new, 40% to old)
  if (previousScores) {
    Object.keys(scores).forEach(role => {
      const newScore = scores[role as UserRole];
      const oldScore = previousScores[role as UserRole];
      scores[role as UserRole] = newScore * 0.6 + oldScore * 0.4;
    });
  }

  return scores;
}

/**
 * Get primary role from confidence scores
 */
export function getPrimaryRole(scores: RoleConfidenceScores): UserRole {
  let maxScore = 0;
  let primaryRole: UserRole = 'casual';

  Object.entries(scores).forEach(([role, score]) => {
    if (score > maxScore) {
      maxScore = score;
      primaryRole = role as UserRole;
    }
  });

  return primaryRole;
}

/**
 * Update role confidence based on conversation
 */
export function updateRoleConfidence(
  query: string,
  conversationContext: ConversationContext
): RoleDetectionResult {
  const isFirstQuestion = conversationContext.messages.length === 0;
  
  // Check for explicit override first
  const explicitOverride = detectExplicitOverride(query);
  
  // Detect signals from current query
  const signals = detectRoleFromQuery(query, isFirstQuestion);
  
  // If explicit override, boost that role
  if (explicitOverride) {
    signals.push({
      role: explicitOverride,
      strength: 0.9,
      source: 'explicit',
      context: 'User explicitly requested this perspective'
    });
  }
  
  // Calculate confidence scores
  const previousScores = conversationContext.detectedRole?.confidenceScores;
  const confidenceScores = calculateConfidenceScores(signals, previousScores);
  const primaryRole = getPrimaryRole(confidenceScores);
  
  return {
    confidenceScores,
    primaryRole: explicitOverride || primaryRole,
    signals,
    explicitOverride: explicitOverride || undefined
  };
}

/**
 * Initialize role detection for new conversation
 */
export function initializeRoleDetection(): RoleDetectionResult {
  return {
    confidenceScores: {
      recruiter: 0,
      engineer: 0,
      designer: 0,
      founder: 0,
      casual: 0.1
    },
    primaryRole: 'casual',
    signals: []
  };
}

