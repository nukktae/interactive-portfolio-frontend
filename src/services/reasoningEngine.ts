import { 
  ProjectKnowledge, 
  SkillKnowledge, 
  KnowledgeBase 
} from '@/types/knowledge';
import { getKnowledgeBase, getProjectDetailByTitle } from './knowledgeBase';

/**
 * Reasoning Engine
 * 
 * Provides functions for comparing projects, recommending based on context,
 * analyzing skill depth, and matching projects to roles.
 */

export interface ProjectComparison {
  project1: string;
  project2: string;
  similarities: string[];
  differences: {
    tech: string[];
    complexity: string;
    domain: string[];
    impact: string[];
  };
  recommendation: string;
}

export interface ProjectRecommendation {
  project: ProjectKnowledge;
  score: number;
  reasons: string[];
  matchFactors: {
    techStack: number;
    domain: number;
    complexity: number;
    roleFocus: number;
  };
}

export interface SkillAnalysis {
  skill: SkillKnowledge;
  depthLevel: string;
  proficiency: string;
  bestShowcase: {
    project: string;
    context: string;
  } | null;
  relatedSkills: string[];
}

/**
 * Compare two projects by various dimensions
 */
export function compareProjects(
  project1Title: string,
  project2Title: string,
  knowledgeBase: KnowledgeBase
): ProjectComparison | null {
  const proj1 = knowledgeBase.projects.find(p => 
    p.title.toLowerCase() === project1Title.toLowerCase()
  );
  const proj2 = knowledgeBase.projects.find(p => 
    p.title.toLowerCase() === project2Title.toLowerCase()
  );
  
  if (!proj1 || !proj2) {
    return null;
  }
  
  // Find similarities
  const similarities: string[] = [];
  const commonTech = proj1.techStack.filter(t => proj2.techStack.includes(t));
  if (commonTech.length > 0) {
    similarities.push(`Both use: ${commonTech.join(', ')}`);
  }
  
  const commonDomains = proj1.domain.filter(d => proj2.domain.includes(d));
  if (commonDomains.length > 0) {
    similarities.push(`Both are ${commonDomains.join(' and ')} projects`);
  }
  
  if (proj1.complexity === proj2.complexity) {
    similarities.push(`Similar complexity level: ${proj1.complexity}`);
  }
  
  // Find differences
  const techDiff1 = proj1.techStack.filter(t => !proj2.techStack.includes(t));
  const techDiff2 = proj2.techStack.filter(t => !proj1.techStack.includes(t));
  
  const complexityDiff = proj1.complexity !== proj2.complexity
    ? `${proj1.title} is ${proj1.complexity}, while ${proj2.title} is ${proj2.complexity}`
    : 'Same complexity level';
  
  const domainDiff1 = proj1.domain.filter(d => !proj2.domain.includes(d));
  const domainDiff2 = proj2.domain.filter(d => !proj1.domain.includes(d));
  
  const impactDiff: string[] = [];
  if (proj1.impact.metrics.length !== proj2.impact.metrics.length) {
    impactDiff.push(`${proj1.title} has ${proj1.impact.metrics.length} metrics, ${proj2.title} has ${proj2.impact.metrics.length}`);
  }
  
  // Generate recommendation
  let recommendation = '';
  if (proj1.roleFocus.frontend > proj2.roleFocus.frontend) {
    recommendation += `${proj1.title} shows stronger frontend focus (${proj1.roleFocus.frontend}% vs ${proj2.roleFocus.frontend}%). `;
  } else if (proj2.roleFocus.frontend > proj1.roleFocus.frontend) {
    recommendation += `${proj2.title} shows stronger frontend focus (${proj2.roleFocus.frontend}% vs ${proj1.roleFocus.frontend}%). `;
  }
  
  if (proj1.roleFocus.backend > proj2.roleFocus.backend) {
    recommendation += `${proj1.title} demonstrates more backend depth (${proj1.roleFocus.backend}% vs ${proj2.roleFocus.backend}%). `;
  } else if (proj2.roleFocus.backend > proj1.roleFocus.backend) {
    recommendation += `${proj2.title} demonstrates more backend depth (${proj2.roleFocus.backend}% vs ${proj1.roleFocus.backend}%). `;
  }
  
  if (!recommendation) {
    recommendation = 'Both projects demonstrate balanced full-stack capabilities.';
  }
  
  return {
    project1: proj1.title,
    project2: proj2.title,
    similarities,
    differences: {
      tech: [
        ...techDiff1.map(t => `${proj1.title} uses ${t}`),
        ...techDiff2.map(t => `${proj2.title} uses ${t}`)
      ],
      complexity: complexityDiff,
      domain: [
        ...domainDiff1.map(d => `${proj1.title} focuses on ${d}`),
        ...domainDiff2.map(d => `${proj2.title} focuses on ${d}`)
      ],
      impact: impactDiff
    },
    recommendation
  };
}

/**
 * Recommend projects based on role requirements
 */
export function recommendProjects(
  roleRequirements: {
    frontend?: number;
    backend?: number;
    design?: number;
    complexity?: 'low' | 'medium' | 'high' | 'very-high';
    domains?: string[];
    skills?: string[];
  },
  knowledgeBase: KnowledgeBase
): ProjectRecommendation[] {
  const recommendations: ProjectRecommendation[] = [];
  
  knowledgeBase.projects.forEach(project => {
    let score = 0;
    const reasons: string[] = [];
    const matchFactors = {
      techStack: 0,
      domain: 0,
      complexity: 0,
      roleFocus: 0
    };
    
    // Match role focus
    if (roleRequirements.frontend !== undefined) {
      const frontendMatch = Math.abs(project.roleFocus.frontend - roleRequirements.frontend);
      const frontendScore = 100 - (frontendMatch * 2);
      matchFactors.roleFocus += frontendScore;
      score += frontendScore * 0.3;
      if (project.roleFocus.frontend >= roleRequirements.frontend * 0.8) {
        reasons.push(`Strong frontend focus (${project.roleFocus.frontend}%)`);
      }
    }
    
    if (roleRequirements.backend !== undefined) {
      const backendMatch = Math.abs(project.roleFocus.backend - roleRequirements.backend);
      const backendScore = 100 - (backendMatch * 2);
      matchFactors.roleFocus += backendScore;
      score += backendScore * 0.3;
      if (project.roleFocus.backend >= roleRequirements.backend * 0.8) {
        reasons.push(`Strong backend focus (${project.roleFocus.backend}%)`);
      }
    }
    
    if (roleRequirements.design !== undefined) {
      const designMatch = Math.abs(project.roleFocus.design - roleRequirements.design);
      const designScore = 100 - (designMatch * 2);
      matchFactors.roleFocus += designScore;
      score += designScore * 0.2;
      if (project.roleFocus.design >= roleRequirements.design * 0.8) {
        reasons.push(`Strong design focus (${project.roleFocus.design}%)`);
      }
    }
    
    // Match complexity
    if (roleRequirements.complexity) {
      const complexityLevels = ['low', 'medium', 'high', 'very-high'];
      const reqIndex = complexityLevels.indexOf(roleRequirements.complexity);
      const projIndex = complexityLevels.indexOf(project.complexity);
      const complexityScore = 100 - Math.abs(reqIndex - projIndex) * 25;
      matchFactors.complexity = complexityScore;
      score += complexityScore * 0.2;
      if (complexityScore >= 75) {
        reasons.push(`Appropriate complexity level (${project.complexity})`);
      }
    }
    
    // Match domains
    if (roleRequirements.domains && roleRequirements.domains.length > 0) {
      const domainMatches = roleRequirements.domains.filter(d => 
        project.domain.includes(d.toLowerCase())
      ).length;
      const domainScore = (domainMatches / roleRequirements.domains.length) * 100;
      matchFactors.domain = domainScore;
      score += domainScore * 0.15;
      if (domainScore >= 50) {
        reasons.push(`Matches domain requirements: ${domainMatches}/${roleRequirements.domains.length}`);
      }
    }
    
    // Match skills
    if (roleRequirements.skills && roleRequirements.skills.length > 0) {
      const skillMatches = roleRequirements.skills.filter(skill => 
        project.techStack.some(tech => 
          tech.toLowerCase().includes(skill.toLowerCase()) ||
          skill.toLowerCase().includes(tech.toLowerCase())
        )
      ).length;
      const skillScore = (skillMatches / roleRequirements.skills.length) * 100;
      matchFactors.techStack = skillScore;
      score += skillScore * 0.15;
      if (skillScore >= 50) {
        reasons.push(`Uses required skills: ${skillMatches}/${roleRequirements.skills.length}`);
      }
    }
    
    if (score > 0) {
      recommendations.push({
        project,
        score: Math.min(100, Math.round(score)),
        reasons,
        matchFactors
      });
    }
  });
  
  // Sort by score descending
  return recommendations.sort((a, b) => b.score - a.score);
}

/**
 * Analyze skill depth and proficiency
 */
export function analyzeSkillDepth(
  skillName: string,
  knowledgeBase: KnowledgeBase
): SkillAnalysis | null {
  const skill = knowledgeBase.skills.find(s => 
    s.name.toLowerCase() === skillName.toLowerCase()
  );
  
  if (!skill) {
    return null;
  }
  
  // Find best showcase project
  const bestShowcase = skill.whereUsed
    .sort((a, b) => {
      const complexityOrder = { 'high': 3, 'medium': 2, 'low': 1 };
      return complexityOrder[b.complexity] - complexityOrder[a.complexity];
    })[0] || null;
  
  // Find related skills (used in same projects)
  const relatedSkills = knowledgeBase.skills
    .filter(s => {
      if (s.name === skill.name) return false;
      const skillProjects = new Set(skill.whereUsed.map(w => w.project));
      const sProjects = new Set(s.whereUsed.map(w => w.project));
      const intersection = Array.from(skillProjects).filter(p => sProjects.has(p));
      return intersection.length > 0;
    })
    .map(s => s.name)
    .slice(0, 5);
  
  // Determine proficiency description
  let proficiency = '';
  if (skill.depthLevel === 'expert') {
    proficiency = `Expert level with ${skill.proficiencyMetrics.projectsCount} projects and ${skill.proficiencyMetrics.advancedUsageCount} advanced implementations`;
  } else if (skill.depthLevel === 'advanced') {
    proficiency = `Advanced proficiency demonstrated across ${skill.proficiencyMetrics.projectsCount} projects`;
  } else if (skill.depthLevel === 'intermediate') {
    proficiency = `Intermediate level with experience in ${skill.proficiencyMetrics.projectsCount} projects`;
  } else {
    proficiency = `Beginner level with basic experience`;
  }
  
  return {
    skill,
    depthLevel: skill.depthLevel,
    proficiency,
    bestShowcase: bestShowcase ? {
      project: bestShowcase.project,
      context: bestShowcase.context
    } : null,
    relatedSkills
  };
}

/**
 * Match projects to job requirements/roles
 */
export function matchProjectsToRoles(
  roleDescription: string,
  knowledgeBase: KnowledgeBase
): ProjectRecommendation[] {
  const roleLower = roleDescription.toLowerCase();
  
  // Extract requirements from role description
  const requirements: {
    frontend?: number;
    backend?: number;
    design?: number;
    complexity?: 'low' | 'medium' | 'high' | 'very-high';
    domains?: string[];
    skills?: string[];
  } = {};
  
  // Detect frontend/backend/design focus
  if (roleLower.includes('frontend') || roleLower.includes('ui') || 
      roleLower.includes('react') || roleLower.includes('next.js')) {
    requirements.frontend = 70;
  }
  
  if (roleLower.includes('backend') || roleLower.includes('api') || 
      roleLower.includes('server') || roleLower.includes('database')) {
    requirements.backend = 70;
  }
  
  if (roleLower.includes('design') || roleLower.includes('ux') || 
      roleLower.includes('figma')) {
    requirements.design = 60;
  }
  
  if (roleLower.includes('full-stack') || roleLower.includes('full stack')) {
    requirements.frontend = 50;
    requirements.backend = 50;
  }
  
  // Detect complexity
  if (roleLower.includes('senior') || roleLower.includes('lead') || 
      roleLower.includes('architect')) {
    requirements.complexity = 'high';
  } else if (roleLower.includes('junior') || roleLower.includes('entry')) {
    requirements.complexity = 'medium';
  }
  
  // Detect domains
  const domains: string[] = [];
  if (roleLower.includes('mobile') || roleLower.includes('ios') || 
      roleLower.includes('android') || roleLower.includes('flutter')) {
    domains.push('mobile');
  }
  if (roleLower.includes('web') || roleLower.includes('react') || 
      roleLower.includes('next.js')) {
    domains.push('frontend');
  }
  if (roleLower.includes('ai') || roleLower.includes('ml') || 
      roleLower.includes('machine learning')) {
    domains.push('ai/ml');
  }
  if (domains.length > 0) {
    requirements.domains = domains;
  }
  
  // Extract skills mentioned
  const mentionedSkills: string[] = [];
  knowledgeBase.skills.forEach(skill => {
    if (roleLower.includes(skill.name.toLowerCase())) {
      mentionedSkills.push(skill.name);
    }
  });
  if (mentionedSkills.length > 0) {
    requirements.skills = mentionedSkills;
  }
  
  return recommendProjects(requirements, knowledgeBase);
}

/**
 * Extract insights from knowledge base
 */
export function extractInsights(
  query: string,
  knowledgeBase: KnowledgeBase
): string[] {
  const insights: string[] = [];
  const queryLower = query.toLowerCase();
  
  // Project count insights
  if (queryLower.includes('how many') || queryLower.includes('number of')) {
    insights.push(`Anu has ${knowledgeBase.projects.length} major projects in the portfolio`);
    insights.push(`Skills demonstrated across ${knowledgeBase.skills.length} different technologies`);
  }
  
  // Domain expertise
  const allDomains = new Set<string>();
  knowledgeBase.projects.forEach(p => p.domain.forEach(d => allDomains.add(d)));
  if (queryLower.includes('expertise') || queryLower.includes('domain')) {
    insights.push(`Expertise spans: ${Array.from(allDomains).join(', ')}`);
  }
  
  // Most complex projects
  const complexProjects = knowledgeBase.projects
    .filter(p => p.complexity === 'very-high' || p.complexity === 'high')
    .map(p => p.title);
  if (queryLower.includes('complex') || queryLower.includes('challenging')) {
    insights.push(`Most complex projects: ${complexProjects.join(', ')}`);
  }
  
  // Skill depth insights
  const expertSkills = knowledgeBase.skills
    .filter(s => s.depthLevel === 'expert')
    .map(s => s.name)
    .slice(0, 5);
  if (queryLower.includes('expert') || queryLower.includes('proficiency')) {
    insights.push(`Expert-level skills: ${expertSkills.join(', ')}`);
  }
  
  return insights;
}

/**
 * Detect project mentions in query
 */
export function detectProjectMentions(
  query: string,
  knowledgeBase: KnowledgeBase
): {
  mentionedProjects: ProjectKnowledge[];
  primaryProject: ProjectKnowledge | null;
  confidence: 'high' | 'medium' | 'low';
} {
  const queryLower = query.toLowerCase();
  const mentionedProjects: ProjectKnowledge[] = [];
  
  // Check for exact project name matches
  knowledgeBase.projects.forEach(project => {
    const projectTitleLower = project.title.toLowerCase();
    const projectSlug = project.slug || projectTitleLower.replace(/\s+/g, '-');
    
    if (queryLower.includes(projectTitleLower) || 
        queryLower.includes(projectSlug) ||
        projectTitleLower.split(' ').some(word => 
          word.length > 3 && queryLower.includes(word)
        )) {
      mentionedProjects.push(project);
    }
  });
  
  // Determine primary project (most likely match)
  let primaryProject: ProjectKnowledge | null = null;
  let confidence: 'high' | 'medium' | 'low' = 'low';
  
  if (mentionedProjects.length > 0) {
    // If exact title match, high confidence
    const exactMatch = mentionedProjects.find(p => 
      queryLower.includes(p.title.toLowerCase())
    );
    if (exactMatch) {
      primaryProject = exactMatch;
      confidence = 'high';
    } else {
      primaryProject = mentionedProjects[0];
      confidence = 'medium';
    }
  }
  
  return {
    mentionedProjects,
    primaryProject,
    confidence
  };
}

/**
 * Detect detail level preference from query
 */
export function detectDetailLevel(query: string): {
  level: 'overview' | 'deep-dive' | 'auto';
  explicit: boolean;
} {
  const queryLower = query.toLowerCase();
  
  // Explicit requests for overview
  if (queryLower.includes('overview') || 
      queryLower.includes('summary') ||
      queryLower.includes('brief') ||
      queryLower.includes('quick') ||
      queryLower.includes('30-second') ||
      queryLower.includes('30 second') ||
      queryLower.includes('short')) {
    return { level: 'overview', explicit: true };
  }
  
  // Explicit requests for deep dive
  if (queryLower.includes('deep') ||
      queryLower.includes('detailed') ||
      queryLower.includes('technical') ||
      queryLower.includes('architecture') ||
      queryLower.includes('how') ||
      queryLower.includes('implementation') ||
      queryLower.includes('explain')) {
    return { level: 'deep-dive', explicit: true };
  }
  
  // Auto-detect based on question type
  if (queryLower.includes('what') || queryLower.includes('tell me about')) {
    return { level: 'auto', explicit: false };
  }
  
  return { level: 'auto', explicit: false };
}

/**
 * Generate project explanation (why it exists)
 */
export function explainProjectPurpose(
  project: ProjectKnowledge,
  knowledgeBase: KnowledgeBase
): string {
  const explanation = `**Why ${project.title} exists:**\n\n` +
    `**Problem:** ${project.problem}\n\n` +
    `**Approach:** ${project.approach}\n\n` +
    `**Impact:** ${project.impact.businessOutcomes.slice(0, 3).join('. ')}`;
  
  return explanation;
}

/**
 * Generate project overview (30-second version)
 */
export function generateProjectOverview(project: ProjectKnowledge): string {
  return `**${project.title}** - ${project.domain.join(' & ')} project\n\n` +
    `**Problem solved:** ${project.problem.split('.')[0]}\n` +
    `**Key tech:** ${project.techStack.slice(0, 5).join(', ')}\n` +
    `**Impact:** ${project.impact.metrics.slice(0, 2).join('; ')}`;
}

/**
 * Generate project deep dive (technical details)
 */
export function generateProjectDeepDive(
  project: ProjectKnowledge,
  knowledgeBase: KnowledgeBase
): string {
  const detailContent = getProjectDetailByTitle(project.title);
  
  let deepDive = `**${project.title} - Technical Deep Dive**\n\n`;
  deepDive += `**Problem:** ${project.problem}\n\n`;
  deepDive += `**Approach:** ${project.approach}\n\n`;
  deepDive += `**Tech Stack:** ${project.techStack.join(', ')}\n\n`;
  deepDive += `**Complexity:** ${project.complexity}\n\n`;
  deepDive += `**Role Focus:** Frontend ${project.roleFocus.frontend}%, Backend ${project.roleFocus.backend}%, Design ${project.roleFocus.design}%\n\n`;
  deepDive += `**Impact Metrics:**\n${project.impact.metrics.map(m => `- ${m}`).join('\n')}\n\n`;
  
  if (project.impact.technicalAchievements.length > 0) {
    deepDive += `**Technical Achievements:**\n${project.impact.technicalAchievements.map(a => `- ${a}`).join('\n')}\n\n`;
  }
  
  return deepDive;
}

/**
 * Generate follow-up questions for a project
 */
export function generateProjectFollowUps(
  project: ProjectKnowledge,
  detailLevel: 'overview' | 'deep-dive' | 'auto'
): string[] {
  const followUps: string[] = [];
  
  if (detailLevel === 'overview' || detailLevel === 'auto') {
    followUps.push(`Want a technical deep dive on ${project.title}?`);
    followUps.push(`How does ${project.title} compare to other projects?`);
  }
  
  if (project.roleFocus.frontend > 50) {
    followUps.push(`What frontend challenges did you solve in ${project.title}?`);
  }
  
  if (project.roleFocus.backend > 50) {
    followUps.push(`What backend architecture decisions were made in ${project.title}?`);
  }
  
  if (project.domain.includes('ai/ml')) {
    followUps.push(`How did you integrate AI/ML in ${project.title}?`);
  }
  
  followUps.push(`What were the key learnings from ${project.title}?`);
  
  return followUps.slice(0, 3);
}

/**
 * Get reasoning context for chatbot
 */
export function getReasoningContext(
  query: string,
  knowledgeBase: KnowledgeBase
): {
  relevantProjects: ProjectKnowledge[];
  relevantSkills: SkillKnowledge[];
  insights: string[];
  recommendations?: ProjectRecommendation[];
  projectMentions?: {
    mentionedProjects: ProjectKnowledge[];
    primaryProject: ProjectKnowledge | null;
    confidence: 'high' | 'medium' | 'low';
  };
  detailLevel?: {
    level: 'overview' | 'deep-dive' | 'auto';
    explicit: boolean;
  };
} {
  const queryLower = query.toLowerCase();
  
  // Detect project mentions
  const projectMentions = detectProjectMentions(query, knowledgeBase);
  
  // Detect detail level
  const detailLevel = detectDetailLevel(query);
  
  // Find relevant projects
  const relevantProjects = projectMentions.mentionedProjects.length > 0
    ? projectMentions.mentionedProjects
    : knowledgeBase.projects.filter(p => 
        queryLower.includes(p.title.toLowerCase()) ||
        p.domain.some(d => queryLower.includes(d)) ||
        p.techStack.some(t => queryLower.includes(t.toLowerCase()))
      );
  
  // Find relevant skills
  const relevantSkills = knowledgeBase.skills.filter(s =>
    queryLower.includes(s.name.toLowerCase()) ||
    s.whereUsed.some(w => queryLower.includes(w.project.toLowerCase()))
  );
  
  // Get insights
  const insights = extractInsights(query, knowledgeBase);
  
  // Check if role matching is needed
  let recommendations: ProjectRecommendation[] | undefined;
  if (queryLower.includes('role') || queryLower.includes('hiring') || 
      queryLower.includes('frontend') || queryLower.includes('backend') ||
      queryLower.includes('recommend')) {
    recommendations = matchProjectsToRoles(query, knowledgeBase).slice(0, 3);
  }
  
  return {
    relevantProjects: relevantProjects.length > 0 ? relevantProjects : knowledgeBase.projects.slice(0, 3),
    relevantSkills,
    insights,
    recommendations,
    projectMentions,
    detailLevel
  };
}

