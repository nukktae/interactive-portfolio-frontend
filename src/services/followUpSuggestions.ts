import { UserRole } from '@/types/role';
import { ProjectKnowledge } from '@/types/knowledge';

/**
 * Smart Follow-Up Suggestions Service
 * 
 * Generates contextual, mutually exclusive, lightweight follow-up suggestions
 * that never ask open-ended questions when we know the best next steps.
 */

export interface FollowUpSuggestion {
  label: string; // Short label for chip (2-4 words)
  query: string; // Full question to send
  type: 'depth-control' | 'perspective-switching' | 'proof-vs-story' | 'compare-recommend' | 'explore';
  context: string; // Why this suggestion is relevant
}

export interface SuggestionContext {
  previousQuestion: string;
  previousAnswer: string;
  detectedRole: UserRole;
  roleConfidence: number;
  mentionedProject?: ProjectKnowledge;
  conversationLength: number;
  answerType: 'project' | 'skill' | 'general' | 'comparison' | 'technical';
}

/**
 * Detect answer type from content
 */
function detectAnswerType(answer: string, question: string): SuggestionContext['answerType'] {
  const answerLower = answer.toLowerCase();
  const questionLower = question.toLowerCase();
  
  if (questionLower.includes('compare') || answerLower.includes('compared to') || answerLower.includes('versus')) {
    return 'comparison';
  }
  
  if (answerLower.includes('architecture') || answerLower.includes('technical') || 
      answerLower.includes('code') || answerLower.includes('implementation')) {
    return 'technical';
  }
  
  if (answerLower.includes('project') || questionLower.includes('project')) {
    return 'project';
  }
  
  if (answerLower.includes('skill') || answerLower.includes('experience') || 
      answerLower.includes('proficiency')) {
    return 'skill';
  }
  
  return 'general';
}

/**
 * Generate depth control suggestions
 */
function generateDepthControlSuggestions(
  context: SuggestionContext,
  role: UserRole
): FollowUpSuggestion[] {
  const suggestions: FollowUpSuggestion[] = [];
  
  if (role === 'engineer') {
    suggestions.push(
      {
        label: 'High-level',
        query: 'Can you explain this at a high level?',
        type: 'depth-control',
        context: 'User might want conceptual overview'
      },
      {
        label: 'Code-level',
        query: 'Can you show me the code-level implementation details?',
        type: 'depth-control',
        context: 'User might want technical depth'
      }
    );
  } else if (role === 'recruiter') {
    suggestions.push(
      {
        label: 'Quick overview',
        query: 'Can you give me a quick overview?',
        type: 'depth-control',
        context: 'Recruiter wants concise summary'
      },
      {
        label: 'Impact metrics',
        query: 'What were the impact metrics?',
        type: 'depth-control',
        context: 'Recruiter cares about outcomes'
      }
    );
  } else {
    suggestions.push(
      {
        label: 'Quick summary',
        query: 'Can you summarize this quickly?',
        type: 'depth-control',
        context: 'User might want brief version'
      },
      {
        label: 'Deep dive',
        query: 'Can you go deeper into the technical details?',
        type: 'depth-control',
        context: 'User might want more depth'
      }
    );
  }
  
  return suggestions.slice(0, 2);
}

/**
 * Generate perspective switching suggestions
 */
function generatePerspectiveSuggestions(
  context: SuggestionContext,
  role: UserRole
): FollowUpSuggestion[] {
  const suggestions: FollowUpSuggestion[] = [];
  
  if (context.mentionedProject) {
    if (role === 'designer' || role === 'engineer') {
      suggestions.push(
        {
          label: 'Design angle',
          query: `Explain ${context.mentionedProject.title} from a design perspective`,
          type: 'perspective-switching',
          context: 'Switch to design focus'
        },
        {
          label: 'Engineering angle',
          query: `Explain ${context.mentionedProject.title} from an engineering perspective`,
          type: 'perspective-switching',
          context: 'Switch to technical focus'
        }
      );
    } else if (role === 'founder') {
      suggestions.push(
        {
          label: 'Business impact',
          query: `What was the business impact of ${context.mentionedProject.title}?`,
          type: 'perspective-switching',
          context: 'Founder cares about business outcomes'
        },
        {
          label: 'User side',
          query: `What was the user experience like for ${context.mentionedProject.title}?`,
          type: 'perspective-switching',
          context: 'Founder cares about users'
        }
      );
    }
  }
  
  return suggestions.slice(0, 2);
}

/**
 * Generate proof vs story suggestions
 */
function generateProofVsStorySuggestions(
  context: SuggestionContext,
  role: UserRole
): FollowUpSuggestion[] {
  const suggestions: FollowUpSuggestion[] = [];
  
  if (context.answerType === 'project' && context.mentionedProject) {
    if (role === 'designer') {
      suggestions.push(
        {
          label: 'See UI',
          query: `Show me the UI for ${context.mentionedProject.title}`,
          type: 'proof-vs-story',
          context: 'Designer wants visual proof'
        },
        {
          label: 'Design rationale',
          query: `What was the design rationale for ${context.mentionedProject.title}?`,
          type: 'proof-vs-story',
          context: 'Designer wants reasoning'
        }
      );
    } else if (role === 'engineer') {
      suggestions.push(
        {
          label: 'Architecture',
          query: `Show me the architecture for ${context.mentionedProject.title}`,
          type: 'proof-vs-story',
          context: 'Engineer wants system design'
        },
        {
          label: 'Code structure',
          query: `What was the code structure for ${context.mentionedProject.title}?`,
          type: 'proof-vs-story',
          context: 'Engineer wants implementation details'
        }
      );
    } else if (role === 'recruiter') {
      suggestions.push(
        {
          label: 'Impact metrics',
          query: `What were the impact metrics for ${context.mentionedProject.title}?`,
          type: 'proof-vs-story',
          context: 'Recruiter wants quantifiable results'
        },
        {
          label: 'Team context',
          query: `What was the team context for ${context.mentionedProject.title}?`,
          type: 'proof-vs-story',
          context: 'Recruiter wants collaboration details'
        }
      );
    } else {
      suggestions.push(
        {
          label: 'Screenshots',
          query: `Show me screenshots of ${context.mentionedProject.title}`,
          type: 'proof-vs-story',
          context: 'User wants visual proof'
        },
        {
          label: 'Metrics',
          query: `What were the metrics for ${context.mentionedProject.title}?`,
          type: 'proof-vs-story',
          context: 'User wants quantifiable results'
        }
      );
    }
  }
  
  return suggestions.slice(0, 2);
}

/**
 * Generate compare & recommend suggestions
 */
function generateCompareSuggestions(
  context: SuggestionContext
): FollowUpSuggestion[] {
  const suggestions: FollowUpSuggestion[] = [];
  
  if (context.answerType === 'project' && context.mentionedProject) {
    suggestions.push(
      {
        label: 'Compare projects',
        query: `Compare ${context.mentionedProject.title} with another project`,
        type: 'compare-recommend',
        context: 'User might want to see differences'
      },
      {
        label: 'Similar projects',
        query: `What other projects are similar to ${context.mentionedProject.title}?`,
        type: 'compare-recommend',
        context: 'User might want related work'
      }
    );
  } else if (context.answerType === 'skill') {
    suggestions.push(
      {
        label: 'Where used',
        query: 'Where else was this skill used?',
        type: 'compare-recommend',
        context: 'User wants to see skill application'
      },
      {
        label: 'Related skills',
        query: 'What related skills does Anu have?',
        type: 'compare-recommend',
        context: 'User wants skill context'
      }
    );
  }
  
  return suggestions.slice(0, 2);
}

/**
 * Generate role-adaptive suggestions
 */
function generateRoleAdaptiveSuggestions(
  context: SuggestionContext,
  role: UserRole
): FollowUpSuggestion[] {
  const suggestions: FollowUpSuggestion[] = [];
  
  if (role === 'recruiter') {
    suggestions.push(
      {
        label: 'Role & ownership',
        query: 'What was Anu\'s role and ownership in this?',
        type: 'explore',
        context: 'Recruiter cares about responsibility'
      },
      {
        label: 'Team context',
        query: 'How did Anu collaborate with the team?',
        type: 'explore',
        context: 'Recruiter cares about teamwork'
      }
    );
  } else if (role === 'engineer') {
    suggestions.push(
      {
        label: 'Architecture',
        query: 'What was the architecture?',
        type: 'explore',
        context: 'Engineer wants system design'
      },
      {
        label: 'Tradeoffs',
        query: 'What were the technical tradeoffs?',
        type: 'explore',
        context: 'Engineer wants decision rationale'
      }
    );
  } else if (role === 'designer') {
    suggestions.push(
      {
        label: 'UX rationale',
        query: 'What was the UX rationale?',
        type: 'explore',
        context: 'Designer wants design thinking'
      },
      {
        label: 'Iterations',
        query: 'How did the design evolve?',
        type: 'explore',
        context: 'Designer wants process'
      }
    );
  } else if (role === 'founder') {
    suggestions.push(
      {
        label: 'Business impact',
        query: 'What was the business impact?',
        type: 'explore',
        context: 'Founder cares about outcomes'
      },
      {
        label: 'Speed vs quality',
        query: 'What were the speed vs quality tradeoffs?',
        type: 'explore',
        context: 'Founder cares about execution'
      }
    );
  } else {
    // Casual
    suggestions.push(
      {
        label: 'See visuals',
        query: 'Can I see some visuals?',
        type: 'explore',
        context: 'Casual user wants visual appeal'
      },
      {
        label: 'What you build',
        query: 'What else have you built?',
        type: 'explore',
        context: 'Casual user wants exploration'
      }
    );
  }
  
  return suggestions.slice(0, 2);
}

/**
 * Generate smart follow-up suggestions
 */
export function generateSmartFollowUps(
  previousQuestion: string,
  previousAnswer: string,
  detectedRole: UserRole,
  roleConfidence: number,
  mentionedProject?: ProjectKnowledge,
  conversationLength: number = 0
): FollowUpSuggestion[] {
  const context: SuggestionContext = {
    previousQuestion,
    previousAnswer,
    detectedRole,
    roleConfidence,
    mentionedProject,
    conversationLength,
    answerType: detectAnswerType(previousAnswer, previousQuestion)
  };
  
  const allSuggestions: FollowUpSuggestion[] = [];
  
  // Generate different types of suggestions based on context
  if (context.answerType === 'project' && context.mentionedProject) {
    // Project-specific suggestions
    allSuggestions.push(...generateProofVsStorySuggestions(context, detectedRole));
    allSuggestions.push(...generatePerspectiveSuggestions(context, detectedRole));
    allSuggestions.push(...generateCompareSuggestions(context));
  } else if (context.answerType === 'technical') {
    // Technical depth suggestions
    allSuggestions.push(...generateDepthControlSuggestions(context, detectedRole));
  } else if (context.answerType === 'comparison') {
    // Comparison follow-ups
    allSuggestions.push(...generateCompareSuggestions(context));
  }
  
  // Always include role-adaptive suggestions as fallback
  if (allSuggestions.length < 2) {
    allSuggestions.push(...generateRoleAdaptiveSuggestions(context, detectedRole));
  }
  
  // If still not enough, add depth control
  if (allSuggestions.length < 2) {
    allSuggestions.push(...generateDepthControlSuggestions(context, detectedRole));
  }
  
  // Ensure mutually exclusive options (no overlap in intent)
  const uniqueSuggestions: FollowUpSuggestion[] = [];
  const seenIntents = new Set<string>();
  
  for (const suggestion of allSuggestions) {
    const intent = suggestion.type + '-' + suggestion.label.toLowerCase();
    if (!seenIntents.has(intent)) {
      seenIntents.add(intent);
      uniqueSuggestions.push(suggestion);
    }
  }
  
  // Return 2-3 suggestions max, prioritizing by relevance
  return uniqueSuggestions.slice(0, 3);
}

/**
 * Check if suggestions should be shown
 */
export function shouldShowSuggestions(
  isTyping: boolean,
  isLoading: boolean,
  lastMessageTime: number,
  conversationLength: number
): boolean {
  // Don't show if user is typing
  if (isTyping) return false;
  
  // Don't show if bot is loading
  if (isLoading) return false;
  
  // Don't show if conversation just started (first message)
  if (conversationLength <= 1) return false;
  
  // Show after 1-2 seconds of idle time
  const timeSinceLastMessage = Date.now() - lastMessageTime;
  if (timeSinceLastMessage < 1000) return false;
  
  return true;
}

