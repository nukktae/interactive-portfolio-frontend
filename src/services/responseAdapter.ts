import { UserRole, RoleAdaptationConfig } from '@/types/role';

/**
 * Response Adapter Service
 * 
 * Adapts responses to different roles while maintaining the same facts.
 * Same truth, different framing.
 */

export interface RoleStyle {
  tone: string;
  focus: string[];
  avoid: string[];
  offers: string[];
  example: string;
}

const ROLE_STYLES: Record<UserRole, RoleStyle> = {
  recruiter: {
    tone: 'Clear, structured, outcome-first, minimal jargon',
    focus: [
      'Ownership and scope',
      'Team collaboration context',
      'Quantifiable outcomes',
      'Delivery timeline',
      'Communication skills'
    ],
    avoid: [
      'Deep technical implementation details',
      'Code-level specifics',
      'Architecture diagrams',
      'Tradeoff discussions'
    ],
    offers: [
      'Quick overview',
      'Impact metrics',
      'Team context',
      'Timeline and delivery'
    ],
    example: 'I led the end-to-end development of this feature, from initial design to production deployment. I worked closely with one designer and two backend engineers, and we shipped it in three weeks. The result was a 28% increase in user engagement.'
  },
  engineer: {
    tone: 'Precise, honest, slightly nerdy, tradeoff-aware',
    focus: [
      'Architecture decisions',
      'Technical tradeoffs',
      'Why-not-X reasoning',
      'Constraints and challenges',
      'Performance considerations'
    ],
    avoid: [
      'Business metrics without technical context',
      'Vague descriptions',
      'Marketing language'
    ],
    offers: [
      'High-level or code-level details',
      'Architecture explanations',
      'Tradeoff discussions',
      'Performance metrics',
      'Technical decisions rationale'
    ],
    example: 'I chose Next.js with server components because SEO and initial load time mattered for this use case. For state management, I avoided Redux since the complexity wasn\'t justified and used server actions instead. The main tradeoff was less client-side flexibility, which was acceptable for this product.'
  },
  designer: {
    tone: 'Reflective, process-oriented, user-centered',
    focus: [
      'Design rationale',
      'Iteration process',
      'User empathy and constraints',
      'Tradeoffs between options',
      'Failed ideas and learnings'
    ],
    avoid: [
      'Pure technical implementation',
      'Business metrics without UX context',
      'Final designs without process'
    ],
    offers: [
      'Early versions and iterations',
      'UX rationale behind decisions',
      'User testing insights',
      'Design process',
      'Failed ideas and why they were removed'
    ],
    example: 'The biggest challenge was reducing cognitive load. Early versions had too many options, so through testing I simplified the flow into three clear actions. That decision slightly reduced flexibility but improved completion rates significantly.'
  },
  founder: {
    tone: 'Outcome-driven, pragmatic, slightly bold',
    focus: [
      'Speed and execution',
      'Autonomy and ownership',
      'Business impact',
      'ROI and metrics',
      'Decisions under pressure'
    ],
    avoid: [
      'Academic explanations',
      'Over-engineering discussions',
      'Perfect solutions without context'
    ],
    offers: [
      'Speed vs quality tradeoffs',
      'User adoption metrics',
      'Business reasoning',
      'Decisions made under pressure',
      'Growth and scale considerations'
    ],
    example: 'This was built with speed in mind. I intentionally avoided over-engineering and focused on validating the core user flow first. Once usage increased, I refactored the backend to handle scale.'
  },
  casual: {
    tone: 'Friendly, lightweight, inviting',
    focus: [
      'High-level overview',
      'Visual appeal',
      'Interesting aspects',
      'Easy exploration'
    ],
    avoid: [
      'Heavy technical details',
      'Business metrics',
      'Deep dives'
    ],
    offers: [
      'Visual or technical focus',
      'Quick overview',
      'Interesting highlights',
      'Easy next steps'
    ],
    example: 'I build products that mix design and engineering. Want to see something visual or something technical?'
  }
};

/**
 * Get role adaptation configuration
 */
export function getRoleAdaptationConfig(role: UserRole, confidence: number): RoleAdaptationConfig {
  const style = ROLE_STYLES[role];
  
  return {
    targetRole: role,
    confidence,
    style: {
      tone: style.tone,
      focus: style.focus,
      avoid: style.avoid,
      offers: style.offers
    }
  };
}

/**
 * Generate role-specific response guidelines for system prompt
 */
export function generateRoleGuidelines(role: UserRole, confidence: number): string {
  const style = ROLE_STYLES[role];
  const confidenceLevel = confidence > 0.7 ? 'high' : confidence > 0.4 ? 'medium' : 'low';
  
  return `
## ROLE-ADAPTIVE RESPONSE MODE: ${role.toUpperCase()} (${confidenceLevel} confidence: ${(confidence * 100).toFixed(0)}%)

**Goal**: ${getRoleGoal(role)}

**Response Style**:
- Tone: ${style.tone}
- Focus on: ${style.focus.join(', ')}
- Avoid: ${style.avoid.join(', ')}
- Offer: ${style.offers.join(', ')}

**Example Response Style**:
"${style.example}"

**Key Principles**:
${getRolePrinciples(role)}

**Remember**: Same facts, different framing. Never change the truth, only how you present it.
`;
}

function getRoleGoal(role: UserRole): string {
  const goals = {
    recruiter: 'Can I trust this person to perform, collaborate, and deliver?',
    engineer: 'Is this person technically strong and thoughtful?',
    designer: 'Does this person understand users and design thinking—not just visuals?',
    founder: 'Can this person ship, own, and think like a business partner?',
    casual: 'Make them curious enough to stay.'
  };
  return goals[role];
}

function getRolePrinciples(role: UserRole): string {
  const principles = {
    recruiter: [
      '- Use bullet-like structure in text',
      '- Lead with outcomes and impact',
      '- Mention team collaboration context',
      '- Keep technical details minimal unless asked',
      '- Emphasize delivery and reliability'
    ],
    engineer: [
      '- Explain technical decisions with rationale',
      '- Discuss tradeoffs honestly',
      '- Admit uncertainty or evolution when appropriate',
      '- Offer architecture-level or code-level details',
      '- Use precise technical language'
    ],
    designer: [
      '- Reference design process and iterations',
      '- Explain UX rationale behind decisions',
      '- Talk about user testing and feedback',
      '- Mention failed ideas and why they were removed',
      '- Focus on user empathy and constraints'
    ],
    founder: [
      '- Highlight speed and execution',
      '- Discuss tradeoffs between speed vs quality',
      '- Emphasize business impact and metrics',
      '- Show autonomy and ownership',
      '- Avoid academic explanations'
    ],
    casual: [
      '- Keep responses friendly and lightweight',
      '- Use suggestions heavily',
      '- Offer visual or technical focus',
      '- Make exploration easy',
      '- Avoid overwhelming with details'
    ]
  };
  return principles[role].join('\n');
}

/**
 * Adapt a response based on role
 * This is used to guide the LLM, not to transform text directly
 */
export function adaptResponseForRole(
  baseContent: string,
  role: UserRole,
  confidence: number
): string {
  // This function provides guidance to the LLM rather than transforming text
  // The actual adaptation happens in the system prompt
  const config = getRoleAdaptationConfig(role, confidence);
  
  return `[ADAPT FOR ${role.toUpperCase()} ROLE - Confidence: ${(confidence * 100).toFixed(0)}%]
Focus: ${config.style.focus.join(', ')}
Avoid: ${config.style.avoid.join(', ')}
${baseContent}`;
}

/**
 * Generate role-specific follow-up questions
 */
export function generateRoleFollowUps(role: UserRole): string[] {
  const followUps = {
    recruiter: [
      'Want a quick overview?',
      'Want to see impact metrics?',
      'Want to know about team collaboration?'
    ],
    engineer: [
      'Want high-level or code-level details?',
      'Want to discuss architecture decisions?',
      'Want to see performance considerations?'
    ],
    designer: [
      'Want to see early versions?',
      'Want the UX rationale behind this?',
      'Want to know about the iteration process?'
    ],
    founder: [
      'Want to know about speed vs quality tradeoffs?',
      'Want to see user adoption metrics?',
      'Want to discuss business impact?'
    ],
    casual: [
      'Want to see something visual?',
      'Want to see something technical?',
      'Want a quick overview?'
    ]
  };
  
  return followUps[role] || followUps.casual;
}

