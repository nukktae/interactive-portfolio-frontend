/**
 * Context Memory Service
 * 
 * Remembers preferences, not phrases.
 * Session-only memory (not persistent across sessions).
 */

export interface RoleAffinity {
  engineer: number;
  recruiter: number;
  designer: number;
  founder_pm: number;
  casual: number;
}

export interface SeenProject {
  projectTitle: string;
  views: ('overview' | 'ui' | 'architecture' | 'code' | 'metrics' | 'deep-dive')[];
  timestamp: number;
}

export type DepthPreference = 'high' | 'medium' | 'low';

export interface SessionContext {
  roleAffinity: RoleAffinity;
  seenProjects: SeenProject[];
  depthPreference: DepthPreference;
  lastInteractionTime: number;
  totalInteractions: number;
}

/**
 * Initialize default session context
 */
export function createDefaultContext(): SessionContext {
  return {
    roleAffinity: {
      engineer: 0.2,
      recruiter: 0.2,
      designer: 0.2,
      founder_pm: 0.2,
      casual: 0.2
    },
    seenProjects: [],
    depthPreference: 'medium',
    lastInteractionTime: Date.now(),
    totalInteractions: 0
  };
}

/**
 * Update role affinity based on user behavior
 */
export function updateRoleAffinity(
  context: SessionContext,
  signals: {
    questionType?: 'technical' | 'design' | 'business' | 'general';
    depthRequested?: 'high' | 'medium' | 'low';
    followUpChosen?: 'code' | 'ui' | 'architecture' | 'metrics' | 'overview';
    projectClicked?: string;
  }
): SessionContext {
  const updated = { ...context };
  const { roleAffinity } = updated;

  // Update based on question type
  if (signals.questionType === 'technical') {
    roleAffinity.engineer += 0.1;
    roleAffinity.recruiter -= 0.05;
    roleAffinity.designer -= 0.05;
  } else if (signals.questionType === 'design') {
    roleAffinity.designer += 0.1;
    roleAffinity.engineer -= 0.05;
    roleAffinity.recruiter -= 0.05;
  } else if (signals.questionType === 'business') {
    roleAffinity.founder_pm += 0.1;
    roleAffinity.engineer -= 0.05;
    roleAffinity.designer -= 0.05;
  }

  // Update based on depth requested
  if (signals.depthRequested === 'high') {
    roleAffinity.engineer += 0.05;
  } else if (signals.depthRequested === 'low') {
    roleAffinity.recruiter += 0.05;
    roleAffinity.casual += 0.05;
  }

  // Update based on follow-up chosen
  if (signals.followUpChosen === 'code' || signals.followUpChosen === 'architecture') {
    roleAffinity.engineer += 0.1;
  } else if (signals.followUpChosen === 'ui') {
    roleAffinity.designer += 0.1;
  } else if (signals.followUpChosen === 'metrics') {
    roleAffinity.recruiter += 0.1;
    roleAffinity.founder_pm += 0.05;
  } else if (signals.followUpChosen === 'overview') {
    roleAffinity.recruiter += 0.05;
    roleAffinity.casual += 0.05;
  }

  // Normalize to keep values between 0 and 1
  const total = Object.values(roleAffinity).reduce((sum, val) => sum + val, 0);
  if (total > 0) {
    Object.keys(roleAffinity).forEach(key => {
      roleAffinity[key as keyof RoleAffinity] = Math.max(0, Math.min(1, roleAffinity[key as keyof RoleAffinity] / total));
    });
  }

  return updated;
}

/**
 * Update depth preference based on user choices
 */
export function updateDepthPreference(
  context: SessionContext,
  choice: 'overview' | 'deep-dive' | 'code-level' | 'conceptual' | 'high-level' | 'detailed'
): SessionContext {
  const updated = { ...context };

  if (choice === 'deep-dive' || choice === 'code-level' || choice === 'detailed') {
    updated.depthPreference = 'high';
  } else if (choice === 'overview' || choice === 'high-level' || choice === 'conceptual') {
    updated.depthPreference = 'low';
  } else {
    updated.depthPreference = 'medium';
  }

  return updated;
}

/**
 * Track that a project was viewed
 */
export function trackProjectView(
  context: SessionContext,
  projectTitle: string,
  viewType: 'overview' | 'ui' | 'architecture' | 'code' | 'metrics' | 'deep-dive'
): SessionContext {
  const updated = { ...context };
  const existing = updated.seenProjects.find(p => p.projectTitle === projectTitle);

  if (existing) {
    if (!existing.views.includes(viewType)) {
      existing.views.push(viewType);
    }
    existing.timestamp = Date.now();
  } else {
    updated.seenProjects.push({
      projectTitle,
      views: [viewType],
      timestamp: Date.now()
    });
  }

  return updated;
}

/**
 * Check if project was already seen
 */
export function hasSeenProject(
  context: SessionContext,
  projectTitle: string,
  viewType?: 'overview' | 'ui' | 'architecture' | 'code' | 'metrics' | 'deep-dive'
): boolean {
  const project = context.seenProjects.find(p => p.projectTitle === projectTitle);
  if (!project) return false;
  
  if (viewType) {
    return project.views.includes(viewType);
  }
  
  return true;
}

/**
 * Get what views are missing for a project
 */
export function getMissingViews(
  context: SessionContext,
  projectTitle: string
): ('overview' | 'ui' | 'architecture' | 'code' | 'metrics' | 'deep-dive')[] {
  const project = context.seenProjects.find(p => p.projectTitle === projectTitle);
  if (!project) {
    return ['overview', 'ui', 'architecture', 'code', 'metrics', 'deep-dive'];
  }
  
  const allViews: ('overview' | 'ui' | 'architecture' | 'code' | 'metrics' | 'deep-dive')[] = 
    ['overview', 'ui', 'architecture', 'code', 'metrics', 'deep-dive'];
  
  return allViews.filter(view => !project.views.includes(view));
}

/**
 * Get primary role affinity (for natural language)
 */
export function getPrimaryRoleAffinity(context: SessionContext): {
  role: 'engineer' | 'recruiter' | 'designer' | 'founder_pm' | 'casual';
  confidence: number;
  naturalPhrase: string;
} {
  const { roleAffinity } = context;
  const entries = Object.entries(roleAffinity) as [keyof RoleAffinity, number][];
  const sorted = entries.sort((a, b) => b[1] - a[1]);
  const [role, confidence] = sorted[0];

  const naturalPhrases = {
    engineer: confidence > 0.5 ? 'more backend-focused' : 'interested in technical details',
    recruiter: confidence > 0.5 ? 'more outcome-focused' : 'interested in impact',
    designer: confidence > 0.5 ? 'more design-focused' : 'interested in UX',
    founder_pm: confidence > 0.5 ? 'more business-focused' : 'interested in outcomes',
    casual: 'exploring'
  };

  return {
    role,
    confidence,
    naturalPhrase: naturalPhrases[role]
  };
}

/**
 * Generate context-aware response hints
 */
export function getContextHints(context: SessionContext): {
  skipOverview?: boolean;
  defaultDepth?: 'high' | 'medium' | 'low';
  focusArea?: 'technical' | 'design' | 'business' | 'general';
  avoidRepetition?: string[];
} {
  const hints: ReturnType<typeof getContextHints> = {};
  const primaryRole = getPrimaryRoleAffinity(context);

  // Set default depth based on preference
  hints.defaultDepth = context.depthPreference;

  // Set focus area based on role affinity
  if (primaryRole.role === 'engineer' && primaryRole.confidence > 0.4) {
    hints.focusArea = 'technical';
  } else if (primaryRole.role === 'designer' && primaryRole.confidence > 0.4) {
    hints.focusArea = 'design';
  } else if (primaryRole.role === 'founder_pm' && primaryRole.confidence > 0.4) {
    hints.focusArea = 'business';
  }

  // Track projects to avoid repeating
  if (context.seenProjects.length > 0) {
    hints.avoidRepetition = context.seenProjects.map(p => p.projectTitle);
  }

  return hints;
}

/**
 * Update context after interaction
 */
export function updateContextAfterInteraction(
  context: SessionContext,
  interaction: {
    question?: string;
    responseType?: 'overview' | 'deep-dive' | 'code' | 'ui' | 'metrics';
    projectMentioned?: string;
    followUpChosen?: string;
  }
): SessionContext {
  let updated = { ...context };
  
  updated.lastInteractionTime = Date.now();
  updated.totalInteractions += 1;

  // Detect question type
  if (interaction.question) {
    const questionLower = interaction.question.toLowerCase();
    let questionType: 'technical' | 'design' | 'business' | 'general' = 'general';
    
    if (questionLower.includes('architecture') || questionLower.includes('code') || 
        questionLower.includes('technical') || questionLower.includes('stack')) {
      questionType = 'technical';
    } else if (questionLower.includes('design') || questionLower.includes('ux') || 
               questionLower.includes('user flow') || questionLower.includes('ui')) {
      questionType = 'design';
    } else if (questionLower.includes('impact') || questionLower.includes('business') || 
               questionLower.includes('metrics') || questionLower.includes('roi')) {
      questionType = 'business';
    }

    updated = updateRoleAffinity(updated, { questionType });
  }

  // Track depth preference
  if (interaction.responseType) {
    if (interaction.responseType === 'deep-dive' || interaction.responseType === 'code') {
      updated = updateDepthPreference(updated, 'deep-dive');
    } else if (interaction.responseType === 'overview') {
      updated = updateDepthPreference(updated, 'overview');
    }
  }

  // Track project views
  if (interaction.projectMentioned) {
    const viewType = interaction.responseType === 'deep-dive' ? 'deep-dive' :
                     interaction.responseType === 'code' ? 'code' :
                     interaction.responseType === 'ui' ? 'ui' :
                     interaction.responseType === 'metrics' ? 'metrics' :
                     'overview';
    updated = trackProjectView(updated, interaction.projectMentioned, viewType);
  }

  // Update based on follow-up
  if (interaction.followUpChosen) {
    const followUpLower = interaction.followUpChosen.toLowerCase();
    let followUpType: 'code' | 'ui' | 'architecture' | 'metrics' | 'overview' | undefined;
    
    if (followUpLower.includes('code') || followUpLower.includes('technical')) {
      followUpType = 'code';
    } else if (followUpLower.includes('ui') || followUpLower.includes('design')) {
      followUpType = 'ui';
    } else if (followUpLower.includes('architecture')) {
      followUpType = 'architecture';
    } else if (followUpLower.includes('metrics') || followUpLower.includes('impact')) {
      followUpType = 'metrics';
    } else if (followUpLower.includes('overview')) {
      followUpType = 'overview';
    }

    if (followUpType) {
      updated = updateRoleAffinity(updated, { followUpChosen: followUpType });
    }
  }

  return updated;
}

