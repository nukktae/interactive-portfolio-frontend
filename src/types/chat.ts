export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ConversationHistory {
  messages: Array<{
    role: 'user' | 'bot';
    content: string;
    timestamp: Date;
  }>;
}

export interface ChatRequest {
  message: string;
  conversationHistory?: ConversationHistory;
  userType?: string; // Legacy support
}

import { SessionContext } from '@/services/contextMemory';

export interface ChatResponse {
  reply: string;
  roleDetection?: {
    primaryRole: string;
    confidenceScores: Record<string, number>;
  };
  sessionContext?: SessionContext;
  responseType?: 'overview' | 'deep-dive' | 'code' | 'ui' | 'metrics';
  followUpChosen?: string;
  followUpSuggestions?: string[];
} 