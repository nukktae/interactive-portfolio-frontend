import { ProjectKnowledge, KnowledgeBase, ProjectScorecard } from '@/types/knowledge';
import { UserRole } from '@/types/role';

/**
 * Recommendation Engine
 * 
 * Ranks and recommends projects based on visitor's goal, role, and constraints.
 * Uses structured project scorecards for evidence-based recommendations.
 */

export interface RecommendationResult {
  primary: ProjectKnowledge;
  score: number;
  reasons: string[];
  evidence: string[];
  runnerUp?: ProjectKnowledge;
  runnerUpScore?: number;
  followUpOptions: string[];
}

export interface RecommendationWeights {
  leadership?: number;
  productThinking?: number;
  systemDesign?: number;
  uiCraft?: number;
  aiMlIntegration?: number;
  reliabilitySecurity?: number;
  collaboration?: number;
  productionLevel?: number;
  ownership?: number;
  depth?: number;
}

/**
 * Generate project scorecard from project knowledge
 */
export function generateProjectScorecard(project: ProjectKnowledge): ProjectKnowledge['scorecard'] {
  const techStack = project.techStack.map(t => t.toLowerCase()).join(' ');
  const allText = (project.problem + ' ' + project.approach + ' ' + techStack).toLowerCase();
  
  // Determine production level
  let productionLevel: 'prototype' | 'internal-tool' | 'production' | 'deployed' = 'prototype';
  if (allText.includes('production') || allText.includes('deployed') || allText.includes('live')) {
    productionLevel = 'deployed';
  } else if (allText.includes('internal') || allText.includes('tool')) {
    productionLevel = 'internal-tool';
  } else if (allText.includes('github') || allText.includes('repository')) {
    productionLevel = 'production';
  }
  
  // Determine ownership
  let ownership: 'contributor' | 'lead' | 'solo' = 'contributor';
  if (project.roleFocus.frontend >= 80 || project.roleFocus.backend >= 80) {
    ownership = 'solo';
  } else if (project.roleFocus.frontend >= 50 || project.roleFocus.backend >= 50 || 
             project.roleFocus.design >= 50 || project.roleFocus.architecture >= 50) {
    ownership = 'lead';
  }
  
  // Calculate demonstration scores
  const demonstrates = {
    leadership: ownership === 'solo' ? 0.9 : ownership === 'lead' ? 0.7 : 0.4,
    productThinking: project.roleFocus.design > 40 ? 0.8 : 0.5,
    systemDesign: project.roleFocus.architecture > 50 ? 0.9 : project.complexity === 'high' || project.complexity === 'very-high' ? 0.7 : 0.4,
    uiCraft: project.roleFocus.design > 50 ? 0.9 : project.roleFocus.frontend > 60 ? 0.7 : 0.4,
    aiMlIntegration: project.domain.includes('ai/ml') ? 0.9 : allText.includes('ai') || allText.includes('ml') || allText.includes('gpt') ? 0.7 : 0.1,
    reliabilitySecurity: allText.includes('security') || allText.includes('reliable') || allText.includes('testing') ? 0.8 : 0.5,
    collaboration: ownership === 'contributor' ? 0.8 : ownership === 'lead' ? 0.7 : 0.4
  };
  
  // Depth signals
  const depthSignals = {
    hasAuth: allText.includes('auth') || allText.includes('jwt') || allText.includes('firebase auth'),
    hasPayments: allText.includes('payment') || allText.includes('stripe') || allText.includes('billing'),
    hasRealtime: allText.includes('realtime') || allText.includes('websocket') || allText.includes('firebase realtime'),
    hasRLS: allText.includes('rls') || allText.includes('row-level security'),
    hasQueues: allText.includes('queue') || allText.includes('kafka') || allText.includes('rabbitmq'),
    tradeoffsExplained: project.approach.length > 200, // Longer approach suggests tradeoffs discussed
    hasTesting: allText.includes('test') || allText.includes('jest') || allText.includes('cypress'),
    hasObservability: allText.includes('monitoring') || allText.includes('logging') || allText.includes('cloudwatch'),
    edgeCasesHandled: project.complexity === 'high' || project.complexity === 'very-high'
  };
  
  // Story strength
  const storyStrength: ProjectScorecard['storyStrength'] = {
    clearProblem: project.problem.length > 50,
    measurableOutcome: project.impact.metrics.length > 0,
    hasLearnings: project.approach.includes('learned') || project.approach.includes('iteration'),
    hasIteration: project.approach.includes('iterat') || project.approach.includes('refine')
  };
  
  // Assets
  const assets: ProjectScorecard['assets'] = {
    screenshots: project.screenshots.length > 0,
    demoLink: allText.includes('demo') || allText.includes('live') || allText.includes('deployed'),
    architectureDiagram: allText.includes('architecture') || allText.includes('diagram'),
    figma: allText.includes('figma'),
    repoExcerpts: allText.includes('github') || allText.includes('repository'),
    metrics: project.impact.metrics.length > 0
  };
  
  return {
    productionLevel,
    hasRealUsers: productionLevel === 'deployed' || productionLevel === 'production',
    hasRealData: productionLevel !== 'prototype',
    isDeployed: productionLevel === 'deployed',
    isMaintained: productionLevel === 'deployed' || productionLevel === 'production',
    demonstrates,
    depthSignals,
    storyStrength,
    assets,
    ownership
  };
}

/**
 * Calculate recommendation score for a project
 */
export function calculateRecommendationScore(
  project: ProjectKnowledge,
  weights: RecommendationWeights
): number {
  // Ensure scorecard exists - always generate if missing
  if (!project.scorecard) {
    project.scorecard = generateProjectScorecard(project);
  }
  // TypeScript assertion: we know scorecard is defined after the check above
  const scorecard = project.scorecard!;
  
  let score = 0;
  let totalWeight = 0;
  
  // Production level weight
  if (weights.productionLevel) {
    const productionScores = {
      'deployed': 1.0,
      'production': 0.8,
      'internal-tool': 0.6,
      'prototype': 0.4
    };
    score += productionScores[scorecard.productionLevel] * weights.productionLevel;
    totalWeight += weights.productionLevel;
  }
  
  // Ownership weight
  if (weights.ownership) {
    const ownershipScores = {
      'solo': 1.0,
      'lead': 0.7,
      'contributor': 0.4
    };
    score += ownershipScores[scorecard.ownership] * weights.ownership;
    totalWeight += weights.ownership;
  }
  
  // Demonstration weights
  if (weights.leadership) {
    score += scorecard.demonstrates.leadership * weights.leadership;
    totalWeight += weights.leadership;
  }
  if (weights.productThinking) {
    score += scorecard.demonstrates.productThinking * weights.productThinking;
    totalWeight += weights.productThinking;
  }
  if (weights.systemDesign) {
    score += scorecard.demonstrates.systemDesign * weights.systemDesign;
    totalWeight += weights.systemDesign;
  }
  if (weights.uiCraft) {
    score += scorecard.demonstrates.uiCraft * weights.uiCraft;
    totalWeight += weights.uiCraft;
  }
  if (weights.aiMlIntegration) {
    score += scorecard.demonstrates.aiMlIntegration * weights.aiMlIntegration;
    totalWeight += weights.aiMlIntegration;
  }
  if (weights.reliabilitySecurity) {
    score += scorecard.demonstrates.reliabilitySecurity * weights.reliabilitySecurity;
    totalWeight += weights.reliabilitySecurity;
  }
  if (weights.collaboration) {
    score += scorecard.demonstrates.collaboration * weights.collaboration;
    totalWeight += weights.collaboration;
  }
  
  // Depth weight
  if (weights.depth) {
    const depthScore = (
      (scorecard.depthSignals.hasAuth ? 0.1 : 0) +
      (scorecard.depthSignals.hasRealtime ? 0.15 : 0) +
      (scorecard.depthSignals.hasRLS ? 0.2 : 0) +
      (scorecard.depthSignals.tradeoffsExplained ? 0.15 : 0) +
      (scorecard.depthSignals.hasTesting ? 0.15 : 0) +
      (scorecard.depthSignals.hasObservability ? 0.1 : 0) +
      (scorecard.depthSignals.edgeCasesHandled ? 0.15 : 0)
    );
    score += depthScore * weights.depth;
    totalWeight += weights.depth;
  }
  
  // Normalize to 0-1
  return totalWeight > 0 ? score / totalWeight : 0;
}

/**
 * Get weights for recommendation type
 */
export function getRecommendationWeights(
  recommendationType: 'role' | 'proof' | 'narrative' | 'leadership' | 'credibility' | 'fit' | 'risk',
  role?: UserRole,
  specificCriteria?: string
): RecommendationWeights {
  const weights: RecommendationWeights = {};
  
  if (recommendationType === 'role') {
    if (role === 'recruiter') {
      weights.leadership = 0.3;
      weights.collaboration = 0.3;
      weights.productionLevel = 0.2;
      weights.ownership = 0.2;
    } else if (role === 'engineer') {
      weights.systemDesign = 0.3;
      weights.depth = 0.3;
      weights.reliabilitySecurity = 0.2;
      weights.productionLevel = 0.2;
    } else if (role === 'designer') {
      weights.uiCraft = 0.4;
      weights.productThinking = 0.3;
      weights.collaboration = 0.3;
    } else if (role === 'founder') {
      weights.leadership = 0.3;
      weights.productThinking = 0.3;
      weights.productionLevel = 0.2;
      weights.ownership = 0.2;
    }
  } else if (recommendationType === 'proof') {
    weights.productionLevel = 0.4;
    weights.reliabilitySecurity = 0.3;
    weights.depth = 0.3;
  } else if (recommendationType === 'narrative' || recommendationType === 'leadership') {
    weights.leadership = 0.4;
    weights.ownership = 0.3;
    weights.collaboration = 0.3;
  } else if (recommendationType === 'credibility') {
    weights.productionLevel = 0.3;
    weights.depth = 0.3;
    weights.reliabilitySecurity = 0.2;
    weights.ownership = 0.2;
  } else if (recommendationType === 'fit') {
    if (specificCriteria?.includes('frontend')) {
      weights.uiCraft = 0.5;
      weights.systemDesign = 0.3;
      weights.productionLevel = 0.2;
    } else if (specificCriteria?.includes('backend')) {
      weights.systemDesign = 0.5;
      weights.depth = 0.3;
      weights.reliabilitySecurity = 0.2;
    } else if (specificCriteria?.includes('ai')) {
      weights.aiMlIntegration = 0.5;
      weights.productThinking = 0.3;
      weights.productionLevel = 0.2;
    }
  } else if (recommendationType === 'risk') {
    weights.productionLevel = 0.4;
    weights.depth = 0.3;
    weights.reliabilitySecurity = 0.3;
  }
  
  return weights;
}

/**
 * Recommend projects based on criteria
 */
export function recommendProjects(
  knowledgeBase: KnowledgeBase,
  recommendationType: 'role' | 'proof' | 'narrative' | 'leadership' | 'credibility' | 'fit' | 'risk',
  role?: UserRole,
  specificCriteria?: string
): RecommendationResult | null {
  const weights = getRecommendationWeights(recommendationType, role, specificCriteria);
  
  // Generate scorecards for all projects
  const projectsWithScores = knowledgeBase.projects.map(project => {
    if (!project.scorecard) {
      project.scorecard = generateProjectScorecard(project);
    }
    const score = calculateRecommendationScore(project, weights);
    return { project, score };
  });
  
  // Sort by score descending
  projectsWithScores.sort((a, b) => b.score - a.score);
  
  if (projectsWithScores.length === 0) {
    return null;
  }
  
  const primary = projectsWithScores[0].project;
  const primaryScore = projectsWithScores[0].score;
  const runnerUp = projectsWithScores.length > 1 ? projectsWithScores[1].project : undefined;
  const runnerUpScore = projectsWithScores.length > 1 ? projectsWithScores[1].score : undefined;
  
  // Generate reasons
  const reasons = generateReasons(primary, weights, recommendationType);
  
  // Generate evidence
  const evidence = generateEvidence(primary);
  
  // Generate follow-up options
  const followUpOptions = generateFollowUpOptions(recommendationType, role);
  
  return {
    primary,
    score: primaryScore,
    reasons,
    evidence,
    runnerUp,
    runnerUpScore,
    followUpOptions
  };
}

/**
 * Generate reasons for recommendation
 */
function generateReasons(
  project: ProjectKnowledge,
  weights: RecommendationWeights,
  type: string
): string[] {
  const reasons: string[] = [];
  // Ensure scorecard exists - always generate if missing
  if (!project.scorecard) {
    project.scorecard = generateProjectScorecard(project);
  }
  // TypeScript assertion: we know scorecard is defined after the check above
  const scorecard = project.scorecard!;
  
  if (weights.leadership && scorecard.demonstrates.leadership > 0.7) {
    reasons.push(`Strong leadership signal: ${scorecard.ownership} ownership with end-to-end responsibility`);
  }
  
  if (weights.productionLevel && scorecard.productionLevel === 'deployed') {
    reasons.push(`Production-ready: deployed and maintained with real users`);
  }
  
  if (weights.systemDesign && scorecard.demonstrates.systemDesign > 0.7) {
    reasons.push(`Strong system design: ${project.complexity} complexity with ${project.roleFocus.architecture}% architecture focus`);
  }
  
  if (weights.uiCraft && scorecard.demonstrates.uiCraft > 0.7) {
    reasons.push(`Excellent UI craft: ${project.roleFocus.design}% design focus with ${project.screenshots.length} screenshots available`);
  }
  
  if (weights.aiMlIntegration && scorecard.demonstrates.aiMlIntegration > 0.7) {
    reasons.push(`AI/ML integration: demonstrates practical AI application in ${project.domain.join(' and ')} domain`);
  }
  
  if (weights.depth && scorecard.depthSignals.tradeoffsExplained) {
    reasons.push(`Technical depth: tradeoffs explained, edge cases handled, ${scorecard.depthSignals.hasTesting ? 'with testing' : 'production-ready'}`);
  }
  
  // Fallback: if no specific reasons match, provide general relevance reasons
  if (reasons.length === 0) {
    if (weights.uiCraft && project.roleFocus.frontend > 30) {
      reasons.push(`Frontend focus: ${project.roleFocus.frontend}% frontend involvement`);
    }
    if (weights.systemDesign && project.roleFocus.backend > 30) {
      reasons.push(`Backend focus: ${project.roleFocus.backend}% backend involvement`);
    }
    if (project.roleFocus.design > 30) {
      reasons.push(`Design focus: ${project.roleFocus.design}% design involvement`);
    }
    // Generic fallback
    if (reasons.length === 0) {
      reasons.push(`Relevant project in ${project.domain.join(', ')} domain`);
      reasons.push(`${project.complexity} complexity level`);
    }
  }
  
  return reasons.slice(0, 3);
}

/**
 * Generate evidence list
 */
function generateEvidence(project: ProjectKnowledge): string[] {
  const evidence: string[] = [];
  // Ensure scorecard exists - always generate if missing
  if (!project.scorecard) {
    project.scorecard = generateProjectScorecard(project);
  }
  // TypeScript assertion: we know scorecard is defined after the check above
  const scorecard = project.scorecard!;
  
  if (scorecard.assets.screenshots) {
    evidence.push(`${project.screenshots.length} screenshots available`);
  }
  if (scorecard.assets.demoLink) {
    evidence.push('Live demo link');
  }
  if (scorecard.assets.metrics) {
    evidence.push(`${project.impact.metrics.length} impact metrics`);
  }
  if (scorecard.assets.repoExcerpts) {
    evidence.push('Code repository available');
  }
  if (scorecard.assets.architectureDiagram) {
    evidence.push('Architecture documentation');
  }
  
  return evidence;
}

/**
 * Generate follow-up options
 */
function generateFollowUpOptions(
  type: string,
  role?: UserRole
): string[] {
  const options: string[] = [];
  
  if (type === 'role' && role === 'engineer') {
    options.push('Show architecture', 'See code structure', 'Technical deep dive');
  } else if (type === 'role' && role === 'designer') {
    options.push('See UI', 'Design rationale', 'Iteration process');
  } else if (type === 'role' && role === 'recruiter') {
    options.push('Impact metrics', 'Team context', 'Quick overview');
  } else if (type === 'proof') {
    options.push('Show metrics', 'See deployment', 'Production details');
  } else if (type === 'leadership' || type === 'narrative') {
    options.push('Ownership details', 'Decision-making', 'Outcomes');
  } else {
    options.push('Quick overview', 'Deep dive', 'See evidence');
  }
  
  return options.slice(0, 3);
}

/**
 * Answer recommendation question
 */
export function answerRecommendationQuestion(
  question: string,
  knowledgeBase: KnowledgeBase,
  detectedRole?: UserRole
): RecommendationResult | null {
  const questionLower = question.toLowerCase();
  
  // Detect recommendation type
  let recommendationType: 'role' | 'proof' | 'narrative' | 'leadership' | 'credibility' | 'fit' | 'risk' = 'role';
  let specificCriteria: string | undefined;
  
  if (questionLower.includes('best for') || questionLower.includes('hiring for')) {
    recommendationType = 'fit';
    if (questionLower.includes('frontend')) specificCriteria = 'frontend';
    else if (questionLower.includes('backend')) specificCriteria = 'backend';
    else if (questionLower.includes('ai') || questionLower.includes('ml')) specificCriteria = 'ai';
  } else if (questionLower.includes('production') || questionLower.includes('proof') || questionLower.includes('realistic')) {
    recommendationType = 'proof';
  } else if (questionLower.includes('leadership') || questionLower.includes('ownership')) {
    recommendationType = 'leadership';
  } else if (questionLower.includes('credibility') || questionLower.includes('senior') || questionLower.includes('judgment')) {
    recommendationType = 'credibility';
  } else if (questionLower.includes('constraint') || questionLower.includes('hardest')) {
    recommendationType = 'risk';
  } else if (questionLower.includes('narrative') || questionLower.includes('story')) {
    recommendationType = 'narrative';
  }
  
  return recommendProjects(knowledgeBase, recommendationType, detectedRole, specificCriteria);
}

