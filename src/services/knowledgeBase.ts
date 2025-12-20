import { Project } from '@/types/project';
import { 
  ProjectKnowledge, 
  SkillKnowledge, 
  WorkExperienceKnowledge,
  CaseStudy,
  KnowledgeBase,
  SkillDepthLevel
} from '@/types/knowledge';
import { ProjectDetailContent } from '@/types/projectDetail';
import { projectSummaries } from '@/data/projectSummaries';
import { RESUME_DATA } from '@/data/resume-data';
import { workExperience } from '@/data/workExperience';
import { designPhilosophy } from '@/data/designPhilosophy';
import { personalityLayer } from '@/data/personalityLayer';
import { allProjectContent, getProjectDetailContent } from '@/content/projects';

/**
 * Knowledge Base Service
 * 
 * Transforms existing data sources into structured knowledge that enables
 * reasoning, comparison, and contextual recommendations.
 */

// Helper to determine project complexity
function determineComplexity(project: Project): 'low' | 'medium' | 'high' | 'very-high' {
  const techCount = project.technologies.length;
  const featuresCount = project.features.length;
  const hasAI = project.technologies.some(t => 
    t.toLowerCase().includes('ai') || 
    t.toLowerCase().includes('ml') || 
    t.toLowerCase().includes('gpt') ||
    t.toLowerCase().includes('tensorflow') ||
    t.toLowerCase().includes('openai')
  );
  const hasBackend = project.technologies.some(t => 
    t.toLowerCase().includes('backend') ||
    t.toLowerCase().includes('api') ||
    t.toLowerCase().includes('database') ||
    t.toLowerCase().includes('postgresql') ||
    t.toLowerCase().includes('firebase') ||
    t.toLowerCase().includes('aws')
  );
  const hasFrontend = project.technologies.some(t => 
    t.toLowerCase().includes('frontend') ||
    t.toLowerCase().includes('react') ||
    t.toLowerCase().includes('flutter') ||
    t.toLowerCase().includes('next.js') ||
    t.toLowerCase().includes('ui')
  );

  const score = techCount + featuresCount + (hasAI ? 3 : 0) + (hasBackend && hasFrontend ? 2 : 0);
  
  if (score >= 30) return 'very-high';
  if (score >= 20) return 'high';
  if (score >= 10) return 'medium';
  return 'low';
}

// Helper to determine domain focus
function determineDomain(project: Project): string[] {
  const domains: string[] = [];
  
  const tech = project.technologies.map(t => t.toLowerCase()).join(' ');
  const skills = project.hardSkills.map(s => s.toLowerCase()).join(' ');
  const all = (tech + ' ' + skills).toLowerCase();
  
  if (all.includes('react') || all.includes('next.js') || all.includes('frontend') || 
      all.includes('flutter') || all.includes('ui/ux') || all.includes('tailwind')) {
    domains.push('frontend');
  }
  
  if (all.includes('backend') || all.includes('api') || all.includes('postgresql') || 
      all.includes('node.js') || all.includes('nestjs') || all.includes('express') ||
      all.includes('firebase') || all.includes('database')) {
    domains.push('backend');
  }
  
  if (all.includes('flutter') || all.includes('react native') || all.includes('mobile') ||
      all.includes('ios') || all.includes('android')) {
    domains.push('mobile');
  }
  
  if (all.includes('ai') || all.includes('ml') || all.includes('gpt') || 
      all.includes('openai') || all.includes('tensorflow') || all.includes('machine learning')) {
    domains.push('ai/ml');
  }
  
  if (domains.length >= 2) {
    domains.push('full-stack');
  }
  
  if (all.includes('aws') || all.includes('cloud') || all.includes('infrastructure')) {
    domains.push('cloud');
  }
  
  return domains.length > 0 ? domains : ['full-stack'];
}

// Extract text content from ReactNode
function extractTextFromReactNode(node: any): string {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (!node) return '';
  
  if (Array.isArray(node)) {
    return node.map(extractTextFromReactNode).join(' ');
  }
  
  if (node.props && node.props.children) {
    return extractTextFromReactNode(node.props.children);
  }
  
  return '';
}

// Get project detail content by matching title
export function getProjectDetailByTitle(title: string): ProjectDetailContent | null {
  // Try to match by slug first
  const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  let detail = getProjectDetailContent(slug);
  
  if (!detail) {
    // Try matching by title in all content
    detail = allProjectContent.find(content => {
      const contentTitle = content.slug?.replace(/-/g, ' ') || '';
      return title.toLowerCase().includes(contentTitle.toLowerCase()) ||
             contentTitle.toLowerCase().includes(title.toLowerCase());
    }) || null;
  }
  
  return detail;
}

// Extract problem from project detail content or fallback to project data
function extractProblem(project: Project, detailContent?: ProjectDetailContent | null): string {
  // Try to get from detail content first
  if (detailContent) {
    const problemSection = detailContent.sections.find(s => s.id === 'problem');
    if (problemSection && problemSection.type === 'problem') {
      const problem = problemSection as any;
      if (problem.summary) {
        let problemText = problem.summary;
        if (problem.content) {
          const contentText = extractTextFromReactNode(problem.content);
          if (contentText && contentText !== problem.summary) {
            problemText += ' ' + contentText;
          }
        }
        if (problem.painPoints && problem.painPoints.length > 0) {
          problemText += ' Key pain points: ' + problem.painPoints.map((p: any) => p.description).join('; ');
        }
        return problemText;
      }
    }
  }
  
  // Fallback to project data
  if (project.challenges && project.challenges.length > 0) {
    return project.challenges[0] + (project.challenges.length > 1 ? 
      ` Additional challenges included: ${project.challenges.slice(1).join(', ')}.` : '');
  }
  
  // Infer from description
  if (project.description.includes('help') || project.description.includes('solve')) {
    return project.description;
  }
  
  return `Building ${project.title}: ${project.description}`;
}

// Extract approach from project detail content or fallback to project data
function extractApproach(project: Project, detailContent?: ProjectDetailContent | null): string {
  // Try to get from detail content - look for architecture, research, or role sections
  if (detailContent) {
    const approachParts: string[] = [];
    
    // Get approach from role section (responsibilities)
    const roleSection = detailContent.sections.find(s => s.id === 'my-role');
    if (roleSection && roleSection.type === 'role') {
      const roles = (roleSection as any).roles || [];
      roles.forEach((role: any) => {
        if (role.responsibilities && role.responsibilities.length > 0) {
          approachParts.push(`${role.title}: ${role.responsibilities.slice(0, 2).join('; ')}`);
        }
      });
    }
    
    // Get approach from architecture section
    const archSection = detailContent.sections.find(s => s.id === 'architecture' || s.id === 'system-architecture');
    if (archSection && (archSection as any).items) {
      const items = (archSection as any).items;
      if (items.length > 0) {
        const firstItem = items[0];
        if (firstItem.description) {
          approachParts.push(extractTextFromReactNode(firstItem.description));
        }
      }
    }
    
    if (approachParts.length > 0) {
      return approachParts.join('. ');
    }
  }
  
  // Fallback to project data
  if (project.solutions && project.solutions.length > 0) {
    return project.solutions.join(' Additionally, ' + project.title + ' addressed this by: ');
  }
  
  // Infer from highlights and features
  const approachParts: string[] = [];
  if (project.highlights && project.highlights.length > 0) {
    approachParts.push(project.highlights[0]);
  }
  if (project.features && project.features.length > 0) {
    approachParts.push(`Key features include: ${project.features.slice(0, 3).join(', ')}`);
  }
  
  return approachParts.length > 0 ? approachParts.join('. ') : project.detailedDescription;
}

// Calculate role focus percentages
function calculateRoleFocus(project: Project): ProjectKnowledge['roleFocus'] {
  const roles = project.roles || [];
  let frontend = 0;
  let backend = 0;
  let design = 0;
  let architecture = 0;
  let ai = 0;
  
  roles.forEach(role => {
    const area = role.area.toLowerCase();
    const percentage = role.percentage;
    
    if (area.includes('frontend') || area.includes('ui') || area.includes('mobile')) {
      frontend += percentage;
    }
    if (area.includes('backend') || area.includes('api') || area.includes('database')) {
      backend += percentage;
    }
    if (area.includes('design') || area.includes('ux')) {
      design += percentage;
    }
    if (area.includes('architecture') || area.includes('system') || area.includes('infrastructure')) {
      architecture += percentage;
    }
    if (area.includes('ai') || area.includes('ml')) {
      ai += percentage;
    }
  });
  
  // Normalize to 100%
  const total = frontend + backend + design + architecture + ai;
  if (total > 0) {
    const factor = 100 / total;
    frontend *= factor;
    backend *= factor;
    design *= factor;
    architecture *= factor;
    ai *= factor;
  }
  
  return { frontend, backend, design, architecture, ai };
}

/**
 * Extract structured project knowledge from Project data
 */
export function extractProjectKnowledge(project: Project): ProjectKnowledge {
  // Get detailed project content if available
  const detailContent = getProjectDetailByTitle(project.title);
  
  const problem = extractProblem(project, detailContent);
  const approach = extractApproach(project, detailContent);
  const complexity = determineComplexity(project);
  const domain = determineDomain(project);
  
  // Enhanced role focus calculation using detail content
  let roleFocus = calculateRoleFocus(project);
  if (detailContent) {
    const roleSection = detailContent.sections.find(s => s.id === 'my-role');
    if (roleSection && roleSection.type === 'role') {
      const roles = (roleSection as any).roles || [];
      // Recalculate based on detailed role information
      let frontend = 0, backend = 0, design = 0, architecture = 0, ai = 0;
      
      roles.forEach((role: any) => {
        const title = role.title.toLowerCase();
        const responsibilities = (role.responsibilities || []).join(' ').toLowerCase();
        const impacts = (role.impacts || []).join(' ').toLowerCase();
        const allText = title + ' ' + responsibilities + ' ' + impacts;
        
        // Count based on role title and content
        if (title.includes('frontend') || title.includes('ui') || title.includes('mobile') ||
            allText.includes('react') || allText.includes('next.js') || allText.includes('flutter')) {
          frontend += 50;
        }
        if (title.includes('backend') || title.includes('api') || title.includes('database') ||
            allText.includes('express') || allText.includes('nestjs') || allText.includes('postgresql')) {
          backend += 50;
        }
        if (title.includes('design') || title.includes('ux') || allText.includes('figma')) {
          design += 50;
        }
        if (title.includes('architecture') || title.includes('system') || title.includes('infrastructure')) {
          architecture += 50;
        }
        if (title.includes('ai') || title.includes('ml') || allText.includes('openai') || allText.includes('gpt')) {
          ai += 50;
        }
      });
      
      // Normalize if we have new data
      const total = frontend + backend + design + architecture + ai;
      if (total > 0) {
        const factor = 100 / total;
        roleFocus = {
          frontend: Math.round(frontend * factor),
          backend: Math.round(backend * factor),
          design: Math.round(design * factor),
          architecture: Math.round(architecture * factor),
          ai: Math.round(ai * factor)
        };
      }
    }
  }
  
  // Extract impact metrics
  const metrics = project.metrics || [];
  const businessOutcomes = metrics.filter(m => 
    m.toLowerCase().includes('user') || 
    m.toLowerCase().includes('satisfaction') ||
    m.toLowerCase().includes('engagement') ||
    m.toLowerCase().includes('conversion') ||
    m.toLowerCase().includes('reduction') ||
    m.toLowerCase().includes('increase') ||
    m.toLowerCase().includes('saves') ||
    m.toLowerCase().includes('handling')
  );
  
  const technicalAchievements = metrics.filter(m => 
    m.toLowerCase().includes('accuracy') ||
    m.toLowerCase().includes('latency') ||
    m.toLowerCase().includes('performance') ||
    m.toLowerCase().includes('response time') ||
    m.toLowerCase().includes('uptime') ||
    m.toLowerCase().includes('policies') ||
    m.toLowerCase().includes('endpoints')
  );
  
  return {
    title: project.title,
    problem,
    approach,
    techStack: project.technologies || [],
    impact: {
      metrics,
      businessOutcomes,
      technicalAchievements
    },
    screenshots: project.images || [],
    useCases: project.features || [],
    complexity,
    domain,
    roleFocus
  };
}

/**
 * Extract skill knowledge from all projects
 */
export function extractSkillKnowledge(projects: Project[]): SkillKnowledge[] {
  const skillMap = new Map<string, SkillKnowledge>();
  
  // Collect all skills from all projects
  projects.forEach(project => {
    const complexity = determineComplexity(project);
    const roleFocus = calculateRoleFocus(project);
    
    // Process technologies
    (project.technologies || []).forEach(tech => {
      if (!skillMap.has(tech)) {
        skillMap.set(tech, {
          name: tech,
          category: categorizeSkill(tech),
          depthLevel: 'intermediate',
          whereUsed: [],
          proficiencyMetrics: {
            projectsCount: 0,
            advancedUsageCount: 0
          }
        });
      }
      
      const skill = skillMap.get(tech)!;
      skill.proficiencyMetrics.projectsCount++;
      
      const usageComplexity = complexity === 'high' || complexity === 'very-high' ? 'high' :
                              complexity === 'medium' ? 'medium' : 'low';
      
      const rolePercentage = getSkillRolePercentage(tech, roleFocus);
      
      skill.whereUsed.push({
        project: project.title,
        context: `Used in ${project.title} for ${project.description}`,
        complexity: usageComplexity,
        rolePercentage
      });
      
      if (usageComplexity === 'high') {
        skill.proficiencyMetrics.advancedUsageCount++;
      }
    });
    
    // Process hard skills
    (project.hardSkills || []).forEach(skillName => {
      if (!skillMap.has(skillName)) {
        skillMap.set(skillName, {
          name: skillName,
          category: categorizeSkill(skillName),
          depthLevel: 'intermediate',
          whereUsed: [],
          proficiencyMetrics: {
            projectsCount: 0,
            advancedUsageCount: 0
          }
        });
      }
      
      const skill = skillMap.get(skillName)!;
      skill.proficiencyMetrics.projectsCount++;
      
      const usageComplexity = complexity === 'high' || complexity === 'very-high' ? 'high' :
                              complexity === 'medium' ? 'medium' : 'low';
      
      const rolePercentage = getSkillRolePercentage(skillName, roleFocus);
      
      skill.whereUsed.push({
        project: project.title,
        context: `Applied ${skillName} in ${project.title}`,
        complexity: usageComplexity,
        rolePercentage
      });
      
      if (usageComplexity === 'high') {
        skill.proficiencyMetrics.advancedUsageCount++;
      }
    });
  });
  
  // Calculate depth levels
  skillMap.forEach((skill, name) => {
    skill.depthLevel = calculateSkillDepth(skill);
  });
  
  return Array.from(skillMap.values());
}

function categorizeSkill(skill: string): SkillKnowledge['category'] {
  const s = skill.toLowerCase();
  if (s.includes('react') || s.includes('next.js') || s.includes('flutter') || 
      s.includes('html') || s.includes('css') || s.includes('tailwind') ||
      s.includes('frontend') || s.includes('ui')) {
    return 'frontend';
  }
  if (s.includes('postgresql') || s.includes('database') || s.includes('node.js') ||
      s.includes('nestjs') || s.includes('express') || s.includes('api') ||
      s.includes('backend')) {
    return 'backend';
  }
  if (s.includes('aws') || s.includes('cloud') || s.includes('firebase')) {
    return 'cloud';
  }
  if (s.includes('figma') || s.includes('design') || s.includes('ux') || 
      s.includes('framer') || s.includes('procreate')) {
    return 'design';
  }
  if (s.includes('python') || s.includes('javascript') || s.includes('typescript') ||
      s.includes('dart') || s.includes('c++')) {
    return 'programming';
  }
  return 'tool';
}

function getSkillRolePercentage(skillName: string, roleFocus: ProjectKnowledge['roleFocus']): number {
  const s = skillName.toLowerCase();
  if (s.includes('react') || s.includes('next.js') || s.includes('flutter') || 
      s.includes('frontend') || s.includes('ui')) {
    return roleFocus.frontend;
  }
  if (s.includes('backend') || s.includes('api') || s.includes('database') ||
      s.includes('postgresql') || s.includes('node.js')) {
    return roleFocus.backend;
  }
  if (s.includes('design') || s.includes('ux') || s.includes('figma')) {
    return roleFocus.design;
  }
  if (s.includes('aws') || s.includes('cloud') || s.includes('architecture')) {
    return roleFocus.architecture;
  }
  if (s.includes('ai') || s.includes('ml') || s.includes('gpt')) {
    return roleFocus.ai;
  }
  return 50; // Default
}

function calculateSkillDepth(skill: SkillKnowledge): SkillDepthLevel {
  const { projectsCount, advancedUsageCount } = skill.proficiencyMetrics;
  
  if (projectsCount >= 5 && advancedUsageCount >= 3) {
    return 'expert';
  }
  if (projectsCount >= 3 && advancedUsageCount >= 1) {
    return 'advanced';
  }
  if (projectsCount >= 2) {
    return 'intermediate';
  }
  return 'beginner';
}

/**
 * Extract work experience knowledge
 */
export function extractWorkExperienceKnowledge(): WorkExperienceKnowledge[] {
  return RESUME_DATA.experience.map(exp => {
    const ownershipAreas = exp.highlights.map((highlight, index) => ({
      area: highlight.split('.')[0] || `Area ${index + 1}`,
      description: highlight,
      percentage: 100 / exp.highlights.length
    }));
    
    const quantifiableOutcomes = exp.highlights
      .filter(h => /\d+%|\d+\s*(hours|days|times|more|less|increase|decrease|reduction)/i.test(h))
      .map(highlight => {
        const match = highlight.match(/(\d+[%]?)\s*(.*?)(?:\.|$)/i);
        return {
          metric: match ? match[2].trim() : highlight,
          value: match ? match[1] : 'N/A',
          impact: highlight
        };
      });
    
    // Find related projects
    const relatedProjects = projectSummaries
      .filter(p => {
        const projectLower = p.title.toLowerCase();
        const expLower = exp.company.toLowerCase();
        return projectLower.includes(expLower) || 
               exp.highlights.some(h => h.toLowerCase().includes(projectLower));
      })
      .map(p => p.title);
    
    return {
      company: exp.company,
      position: exp.position,
      duration: exp.duration,
      location: exp.location,
      ownershipAreas,
      quantifiableOutcomes,
      keyDecisions: [], // Can be enhanced with more data
      relatedProjects,
      skillsDeveloped: extractSkillsFromExperience(exp)
    };
  });
}

function extractSkillsFromExperience(exp: any): string[] {
  const skills: string[] = [];
  const allText = JSON.stringify(exp).toLowerCase();
  
  const skillKeywords = [
    'flutter', 'react', 'next.js', 'typescript', 'javascript',
    'figma', 'ui/ux', 'design', 'aws', 'firebase', 'postgresql',
    'node.js', 'python', 'api', 'rest', 'iot', 'ai', 'ml'
  ];
  
  skillKeywords.forEach(keyword => {
    if (allText.includes(keyword)) {
      skills.push(keyword);
    }
  });
  
  return skills;
}

/**
 * Generate case studies from project data
 */
export function generateCaseStudies(projects: Project[]): CaseStudy[] {
  return projects.map(project => {
    const detailContent = getProjectDetailByTitle(project.title);
    const situation = extractProblem(project, detailContent);
    const task = `Build ${project.title}: ${project.description}`;
    const action = extractApproach(project, detailContent);
    
    // Enhanced result extraction from detail content
    let result = '';
    if (detailContent) {
      const roleSection = detailContent.sections.find(s => s.id === 'my-role');
      if (roleSection && roleSection.type === 'role') {
        const roles = (roleSection as any).roles || [];
        const impacts = roles.flatMap((role: any) => role.impacts || []);
        if (impacts.length > 0) {
          result = impacts.map((i: any) => extractTextFromReactNode(i)).join('. ');
        }
      }
    }
    
    if (!result) {
      result = project.metrics && project.metrics.length > 0 
        ? project.metrics.join('. ')
        : project.highlights && project.highlights.length > 0
        ? project.highlights.join('. ')
        : `Successfully delivered ${project.title}`;
    }
    
    // Enhanced key learnings from detail content
    const keyLearnings: string[] = [];
    if (detailContent) {
      const researchSection = detailContent.sections.find(s => s.id === 'research');
      if (researchSection && researchSection.type === 'research') {
        const insights = (researchSection as any).insights || [];
        insights.forEach((insight: any) => {
          if (insight.items && insight.items.length > 0) {
            keyLearnings.push(`${insight.title}: ${insight.items.slice(0, 2).join('; ')}`);
          }
        });
      }
      
      const learningsSection = detailContent.sections.find(s => s.id === 'learnings');
      if (learningsSection && (learningsSection as any).items) {
        const items = (learningsSection as any).items;
        items.forEach((item: any) => {
          if (typeof item === 'string') {
            keyLearnings.push(item);
          } else if (item.learning) {
            keyLearnings.push(item.learning);
          }
        });
      }
    }
    
    // Fallback to project data
    if (keyLearnings.length === 0 && project.challenges && project.solutions) {
      project.challenges.forEach((challenge, i) => {
        if (project.solutions && project.solutions[i]) {
          keyLearnings.push(`Challenge: ${challenge}. Solution: ${project.solutions[i]}`);
        }
      });
    }
    
    const tags = determineDomain(project);
    if (project.roles && project.roles.some(r => r.area.toLowerCase().includes('lead'))) {
      tags.push('leadership');
    }
    if (project.technologies.some(t => t.toLowerCase().includes('ai') || t.toLowerCase().includes('ml'))) {
      tags.push('ai');
    }
    
    return {
      projectTitle: project.title,
      situation,
      task,
      action,
      result,
      keyLearnings: keyLearnings.slice(0, 5), // Limit to 5 key learnings
      interviewReady: true,
      tags
    };
  });
}

/**
 * Build complete knowledge base
 */
export function buildKnowledgeBase(): KnowledgeBase {
  const projects = projectSummaries.map(extractProjectKnowledge);
  
  // Generate scorecards for all projects
  const { generateProjectScorecard } = require('./recommendationEngine');
  projects.forEach(project => {
    if (!project.scorecard) {
      project.scorecard = generateProjectScorecard(project);
    }
  });
  
  const skills = extractSkillKnowledge(projectSummaries);
  const workExp = extractWorkExperienceKnowledge();
  const caseStudies = generateCaseStudies(projectSummaries);
  
  return {
    projects,
    skills,
    designPhilosophy,
    workExperience: workExp,
    caseStudies,
    personality: personalityLayer
  };
}

// Export singleton instance
let knowledgeBaseInstance: KnowledgeBase | null = null;

export function getKnowledgeBase(): KnowledgeBase {
  if (!knowledgeBaseInstance) {
    knowledgeBaseInstance = buildKnowledgeBase();
  }
  return knowledgeBaseInstance;
}

