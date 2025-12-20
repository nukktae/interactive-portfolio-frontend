/**
 * Role Detection Types
 * 
 * Defines types for role detection, confidence scoring, and behavioral signals
 */

export type UserRole = 'recruiter' | 'engineer' | 'designer' | 'founder' | 'casual';

export interface RoleConfidenceScores {
  recruiter: number;
  engineer: number;
  designer: number;
  founder: number;
  casual: number;
}

export interface BehavioralSignal {
  role: UserRole;
  strength: number; // 0-1
  source: 'first-question' | 'keyword' | 'interaction-style' | 'explicit';
  context: string;
}

export interface RoleDetectionResult {
  confidenceScores: RoleConfidenceScores;
  primaryRole: UserRole;
  signals: BehavioralSignal[];
  explicitOverride?: UserRole;
}

export interface ConversationContext {
  messages: Array<{
    role: 'user' | 'bot';
    content: string;
    timestamp: Date;
  }>;
  roleHistory: RoleConfidenceScores[];
  detectedRole: RoleDetectionResult;
}

export interface RoleAdaptationConfig {
  targetRole: UserRole;
  confidence: number;
  style: {
    tone: string;
    focus: string[];
    avoid: string[];
    offers: string[];
  };
}

