import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { getKnowledgeBase } from '@/services/knowledgeBase';
import { 
  getReasoningContext, 
  compareProjects, 
  analyzeSkillDepth,
  matchProjectsToRoles,
  explainProjectPurpose,
  generateProjectOverview,
  generateProjectDeepDive,
  generateProjectFollowUps
} from '@/services/reasoningEngine';
import {
  updateRoleConfidence,
  initializeRoleDetection
} from '@/services/roleDetection';
import {
  generateRoleGuidelines,
  generateRoleFollowUps
} from '@/services/responseAdapter';
import {
  answerRecommendationQuestion,
  recommendProjects
} from '@/services/recommendationEngine';
import {
  generatePersonalityRecommendation,
  defaultPersonalityDials
} from '@/data/personalityLayer';
import {
  getContextHints,
  getPrimaryRoleAffinity,
  hasSeenProject,
  getMissingViews,
  createDefaultContext,
  updateContextAfterInteraction,
  type SessionContext
} from '@/services/contextMemory';
import { RESUME_DATA } from '@/data/resume-data';
import type { ConversationHistory } from '@/types/chat';

// Initialize OpenAI client
const getOpenAIClient = () => {
  const apiKey = process.env.OPENAI_API_KEY;
  
  if (!apiKey) {
    console.error('⚠️  WARNING: OPENAI_API_KEY is not set in environment variables!');
    return null;
  }
  
  return new OpenAI({
    apiKey: apiKey,
  });
};

// Create enhanced system prompt with structured knowledge base
const createSystemPrompt = (
  knowledgeBase: any, 
  reasoningContext?: any, 
  roleContext?: any,
  contextHints?: any,
  primaryRoleAffinity?: any
) => {
  const { projects, skills, designPhilosophy, workExperience, caseStudies, personality } = knowledgeBase;
  
  // Build project summaries for the prompt
  const projectSummaries = projects.map((p: any) => ({
    title: p.title,
    problem: p.problem,
    approach: p.approach,
    techStack: p.techStack,
    impact: p.impact,
    domain: p.domain,
    complexity: p.complexity,
    roleFocus: p.roleFocus
  }));
  
  // Build skill summaries
  const skillSummaries = skills.map((s: any) => ({
    name: s.name,
    depthLevel: s.depthLevel,
    category: s.category,
    projectsUsed: s.whereUsed.map((w: any) => w.project),
    proficiency: s.proficiencyMetrics
  }));
  
  let reasoningInstructions = '';
  if (reasoningContext) {
    if (reasoningContext.recommendations && reasoningContext.recommendations.length > 0) {
      reasoningInstructions += `\n\nRECOMMENDATION CONTEXT:\n`;
      reasoningContext.recommendations.forEach((rec: any, i: number) => {
        reasoningInstructions += `${i + 1}. ${rec.project.title} (Score: ${rec.score}/100)\n`;
        reasoningInstructions += `   Reasons: ${rec.reasons.join(', ')}\n`;
      });
      reasoningInstructions += `\nUse this context to provide specific project recommendations based on role requirements.\n`;
    }
    
    if (reasoningContext.insights && reasoningContext.insights.length > 0) {
      reasoningInstructions += `\n\nKEY INSIGHTS:\n${reasoningContext.insights.join('\n')}\n`;
    }
  }
  
  const systemPrompt = `You are an AI assistant representing Anu Bilegdemberel's professional portfolio. You have access to a STRUCTURED KNOWLEDGE BRAIN that understands work in layers, not just raw text.

## KNOWLEDGE STRUCTURE

### Projects (${projects.length} total)
Each project is structured as: Problem → Approach → Tech Stack → Impact → Screenshots
${JSON.stringify(projectSummaries.slice(0, 10), null, 2)}
${projects.length > 10 ? `\n... and ${projects.length - 10} more projects\n` : ''}

### Skills (${skills.length} total)
Each skill includes: Name + Depth Level + Where Used + Proficiency Metrics
${JSON.stringify(skillSummaries.slice(0, 15), null, 2)}
${skills.length > 15 ? `\n... and ${skills.length - 15} more skills\n` : ''}

### Design Philosophy
${JSON.stringify(designPhilosophy, null, 2)}

### Work Experience
${JSON.stringify(workExperience, null, 2)}

### Personality Layer
${JSON.stringify(personality, null, 2)}

## REASONING CAPABILITIES

You can REASON, COMPARE, and RECOMMEND:

1. **Project Comparison**: When asked to compare projects, analyze:
   - Tech stack similarities/differences
   - Complexity levels
   - Domain focus (frontend/backend/mobile/AI)
   - Role focus percentages
   - Impact metrics

2. **Contextual Recommendations**: For role-based questions (e.g., "for frontend roles"), provide:
   - Specific project recommendations with scores
   - ALWAYS include the reasons provided in the RECOMMENDATION CONTEXT
   - Format: "1. Project Name (Score: X/100) - Reasons: [list the reasons from context]"
   - Reasoning based on role focus percentages
   - Example: "For frontend-heavy roles, X project shows more depth (80% frontend focus). For backend, Y demonstrates stronger architecture (70% backend focus)."

3. **Skill Analysis**: When discussing skills:
   - Reference depth level (beginner/intermediate/advanced/expert)
   - Mention where it was used (specific projects)
   - Provide proficiency metrics

4. **Design Philosophy Integration**: When relevant, incorporate:
   - User-centric approach
   - Data-driven decisions
   - Iterative development
   - Collaborative process

## PROJECT-AWARE CONVERSATIONS

**CRITICAL: Instead of just linking to projects, be conversational and context-aware:**

1. **Explain Why Projects Exist**: When a project is mentioned, explain:
   - The problem it solves (not just what it is)
   - Why it matters
   - The approach taken
   - The impact achieved

2. **Offer Detail Levels**: When discussing a project, offer:
   - "Want the 30-second overview or the technical deep dive?"
   - Overview: Problem + Key Tech + Impact (2-3 sentences)
   - Deep Dive: Full technical details, architecture, challenges, solutions

3. **Answer Follow-ups**: Be ready to answer:
   - "Tell me more about [aspect]"
   - "How did you handle [challenge]?"
   - "What were the key decisions?"
   - "Compare this to [other project]"

4. **Go Deep Only If Asked**: 
   - Start with overview unless explicitly asked for details
   - Offer to go deeper: "Want more technical details?"
   - That single question = instant senior-level UX

5. **Natural Comparisons**: When comparing projects:
   - Explain similarities and differences
   - Contextualize why each is relevant
   - Don't just list features

## ENTRY POINT PROMPTS (CRITICAL)

**The first interaction should reduce anxiety, not invite effort.**

### Entry Intent Detection
If the message contains "[ENTRY INTENT: RECRUITER]", "[ENTRY INTENT: EXPLORE]", or "[ENTRY INTENT: BROWSE]", follow these rules:

### For "Looking to hire?" (RECRUITER)
- **Goal**: Reduce recruiter friction immediately
- **Behavior**: Switch to recruiter-weighted reasoning, prioritize outcomes, ownership, clarity
- **First Response**: Max 2 short paragraphs OR 3 lines
- **Example**: "Great — I can help with that. I can give you a quick overview, highlight the most relevant projects, or answer specific questions about fit."
- **Tone**: Clear, structured, outcome-first, minimal jargon

### For "Want to explore my work?" (EXPLORE)
- **Goal**: Let curious users discover without pressure
- **Behavior**: Neutral tone, visual-first, encourage "show, don't tell"
- **First Response**: Max 2 lines
- **Example**: "Happy to. Do you want to start with something visual, something technical, or a full case study?"
- **Tone**: Neutral, inviting, no assumptions

### For "Just browsing?" (BROWSE)
- **Goal**: Remove intimidation entirely
- **Behavior**: Friendly, lightweight, zero assumptions
- **First Response**: Max 1-2 lines
- **Example**: "Totally fine. I can show a few highlights or you can poke around at your own pace."
- **Tone**: Friendly, calm, no pressure

### Text Limits (Hard Rules)
- First bot response: **≤ 40-50 words**
- No lists longer than 3 items
- No nested explanations
- No technical terms in the first reply
- The first answer is not about *impressing* — it's about *lowering entry cost*

### Copywriting Tone for Entry
- Calm
- Neutral
- Slightly warm
- No hype
- No emojis
- No marketing language
- Think: Smart coworker, not sales page

## RESPONSE GUIDELINES

- Use structured knowledge to provide accurate, contextual answers
- Enable reasoning: compare projects, recommend based on context, analyze skill depth
- Include specific metrics and quantifiable results
- Maintain personality-consistent tone: ${personality.tone}, ${personality.communicationStyle}
- Format with markdown: ## headers, * lists, \`code\`
- For recommendations: Use decisive format (primary + why + evidence + runner-up + follow-ups)
- For role recommendations, use the format: "For [role type], [Project X] shows [reasoning]. For [other role type], [Project Y] demonstrates [reasoning]."
- **NEVER just say "Here's a project link" - always explain why it exists and offer detail levels**
- **ADAPT your response style based on the detected role (see role guidelines below)**
- **Use personality dials: calm confidence, light warmth, self-aware restraint**
- **For entry prompts: Keep first response under 50 words, no technical jargon, calm and neutral tone**
- Never make up information not in the knowledge base

${reasoningInstructions}

${roleContext ? roleContext : ''}

Remember: You understand work in LAYERS, not just text. Use this structured knowledge to reason, compare, and provide contextual recommendations. Be conversational and project-aware.`;

  return systemPrompt;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      message, 
      conversationHistory,
      sessionContext: incomingSessionContext 
    } = body as { 
      message: string; 
      conversationHistory?: ConversationHistory; 
      userType?: string;
      sessionContext?: SessionContext;
    };

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Check if API key is set
    const openai = getOpenAIClient();
    if (!openai) {
      return NextResponse.json(
        { error: 'OpenAI API key is not configured. Please set OPENAI_API_KEY environment variable.' },
        { status: 500 }
      );
    }

    // Get structured knowledge base
    const knowledgeBase = getKnowledgeBase();
    
    // Get session context (use incoming or create default)
    const sessionContext = incomingSessionContext || createDefaultContext();
    const contextHints = getContextHints(sessionContext);
    const primaryRoleAffinity = getPrimaryRoleAffinity(sessionContext);
    
    // Initialize or update role detection
    // Build conversation context from history
    const previousMessages = conversationHistory?.messages || [];
    const conversationContext = {
      messages: previousMessages,
      roleHistory: [],
      detectedRole: previousMessages.length > 0 
        ? initializeRoleDetection() // Will be updated below
        : initializeRoleDetection()
    };
    
    // Update role detection based on current query and conversation
    const roleDetection = updateRoleConfidence(message.trim(), conversationContext);
    
    // Generate role-specific guidelines
    const roleGuidelines = generateRoleGuidelines(
      roleDetection.primaryRole,
      roleDetection.confidenceScores[roleDetection.primaryRole]
    );
    
    // Get reasoning context for the query
    const reasoningContext = getReasoningContext(message.trim(), knowledgeBase);
    
    // Check for specific query types that need reasoning
    const queryLower = message.trim().toLowerCase();
    let enhancedMessage = message.trim();
    let projectContext = '';
    
    // PROJECT-AWARE: Handle project mentions with context memory
    if (reasoningContext.projectMentions && reasoningContext.projectMentions.primaryProject) {
      const project = reasoningContext.projectMentions.primaryProject;
      const detailLevel = reasoningContext.detailLevel || { level: 'auto', explicit: false };
      
      // Check if project was already seen
      const alreadySeen = hasSeenProject(sessionContext, project.title);
      const missingViews = getMissingViews(sessionContext, project.title);
      
      // Generate project explanation
      const projectExplanation = explainProjectPurpose(project, knowledgeBase);
      projectContext += `\n\n[PROJECT CONTEXT: ${project.title}]\n`;
      
      if (alreadySeen) {
        projectContext += `[CONTEXT MEMORY]: User has already seen this project. Avoid repeating overview. Focus on new angles: ${missingViews.join(', ')}.\n`;
      }
      
      projectContext += `${projectExplanation}\n`;
      
      // Use context hints for depth preference
      const preferredDepth = contextHints.defaultDepth || 'medium';
      const shouldSkipOverview = contextHints.skipOverview || alreadySeen;
      
      // If detail level is auto and not explicit, use context to decide
      if (detailLevel.level === 'auto' && !detailLevel.explicit) {
        if (preferredDepth === 'high' && !shouldSkipOverview) {
          // User prefers depth, but hasn't seen overview - offer choice
          const overview = generateProjectOverview(project);
          const deepDive = generateProjectDeepDive(project, knowledgeBase);
          projectContext += `\n[OVERVIEW]: ${overview}\n`;
          projectContext += `[DEEP DIVE AVAILABLE]: ${deepDive.substring(0, 500)}...\n`;
          projectContext += `\n[INSTRUCTION]: Since user prefers depth, offer: "Want the 30-second overview or the technical deep dive?"\n`;
        } else if (preferredDepth === 'high' && shouldSkipOverview) {
          // User prefers depth and has seen overview - go deeper
          const deepDive = generateProjectDeepDive(project, knowledgeBase);
          projectContext += `\n[DEEP DIVE]: ${deepDive}\n`;
          projectContext += `\n[INSTRUCTION]: User prefers depth and has seen overview. Provide deeper technical details. Skip overview.\n`;
        } else {
          // Default: offer choice
          const overview = generateProjectOverview(project);
          projectContext += `\n[OVERVIEW]: ${overview}\n`;
          projectContext += `\n[INSTRUCTION]: Offer user choice: "Want the 30-second overview or the technical deep dive?"\n`;
        }
      } else if (detailLevel.level === 'overview') {
        projectContext += `\n[OVERVIEW]: ${generateProjectOverview(project)}\n`;
        projectContext += `[INSTRUCTION]: Provide brief overview, offer deep dive if they want more\n`;
      } else if (detailLevel.level === 'deep-dive') {
        projectContext += `\n[DEEP DIVE]: ${generateProjectDeepDive(project, knowledgeBase)}\n`;
        projectContext += `[INSTRUCTION]: Provide full technical details\n`;
      }
      
      // Generate follow-up questions
      const followUps = generateProjectFollowUps(project, detailLevel.level);
      if (followUps.length > 0) {
        projectContext += `\n[FOLLOW-UP QUESTIONS TO OFFER]: ${followUps.join(' | ')}\n`;
      }
      
      enhancedMessage += projectContext;
    }
    
    // Handle comparison queries
    if (queryLower.includes('compare') && (queryLower.includes('project') || queryLower.includes('vs'))) {
      const projectNames = knowledgeBase.projects.map((p: any) => p.title);
      const mentionedProjects = projectNames.filter((name: string) => 
        queryLower.includes(name.toLowerCase())
      );
      
      if (mentionedProjects.length >= 2) {
        const comparison = compareProjects(mentionedProjects[0], mentionedProjects[1], knowledgeBase);
        if (comparison) {
          enhancedMessage += `\n\n[Comparison Context: ${JSON.stringify(comparison, null, 2)}]`;
        }
      }
    }
    
    // Handle skill analysis queries
    if (queryLower.includes('skill') || queryLower.includes('proficiency') || queryLower.includes('expertise')) {
      const mentionedSkills = knowledgeBase.skills.filter((s: any) =>
        queryLower.includes(s.name.toLowerCase())
      );
      
      if (mentionedSkills.length > 0) {
        const skillAnalysis = analyzeSkillDepth(mentionedSkills[0].name, knowledgeBase);
        if (skillAnalysis) {
          enhancedMessage += `\n\n[Skill Analysis: ${JSON.stringify({
            depthLevel: skillAnalysis.depthLevel,
            proficiency: skillAnalysis.proficiency,
            bestShowcase: skillAnalysis.bestShowcase
          }, null, 2)}]`;
        }
      }
    }
    
    // Handle role recommendation queries
    if (queryLower.includes('recommend') || queryLower.includes('for') && 
        (queryLower.includes('role') || queryLower.includes('hiring') || 
         queryLower.includes('frontend') || queryLower.includes('backend'))) {
      if (reasoningContext.recommendations) {
        enhancedMessage += `\n\n[Recommendations: ${JSON.stringify(
          reasoningContext.recommendations.map((r: any) => ({
            project: r.project.title,
            score: r.score,
            reasons: r.reasons
          })), null, 2)}]`;
      }
    }

    // Create enhanced system prompt with knowledge base, reasoning context, role adaptation, and context memory
    const systemPrompt = createSystemPrompt(
      knowledgeBase, 
      reasoningContext, 
      roleGuidelines,
      contextHints,
      primaryRoleAffinity
    );
    
    const messages = [
      { role: "system" as const, content: systemPrompt },
      { role: "user" as const, content: enhancedMessage }
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
      max_tokens: 800, // Increased for more detailed responses
      temperature: 0.3,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    });

    const reply = completion.choices[0].message.content?.trim() || '';

    // Update session context after interaction
    const updatedSessionContext = updateContextAfterInteraction(sessionContext, {
      question: message.trim(),
      responseType: reasoningContext.detailLevel?.level === 'deep-dive' ? 'deep-dive' :
                    reasoningContext.detailLevel?.level === 'overview' ? 'overview' :
                    contextHints.defaultDepth === 'high' ? 'deep-dive' :
                    'overview',
      projectMentioned: reasoningContext.projectMentions?.primaryProject?.title,
    });

    // Determine response type for context memory
    const responseType = reasoningContext.detailLevel?.level === 'deep-dive' ? 'deep-dive' :
                        reasoningContext.detailLevel?.level === 'overview' ? 'overview' :
                        contextHints.defaultDepth === 'high' ? 'deep-dive' :
                        'overview';

    // Return response with role detection metadata and session context
    return NextResponse.json({
      reply,
      roleDetection: {
        primaryRole: roleDetection.primaryRole,
        confidenceScores: roleDetection.confidenceScores
      },
      sessionContext: updatedSessionContext, // Return updated context
      responseType,
      followUpSuggestions: [] // Can be populated from reasoning context if needed
    });
  } catch (error: any) {
    console.error('Chat error:', error);
    console.error('Error details:', {
      message: error.message,
      status: error.status,
      statusCode: error.statusCode,
      response: error.response?.data,
      errorString: String(error)
    });
    
    // Check for OpenAI API key organization access issues
    const errorMessage = error.message || String(error) || '';
    const errorResponse = error.response?.data || {};
    const errorString = JSON.stringify(errorResponse);
    
    // Check for quota/billing errors (429)
    if (errorMessage.includes('429') || errorMessage.includes('quota') || errorMessage.includes('exceeded') ||
        error.statusCode === 429 || error.status === 429) {
      console.error('OpenAI API Error - Quota exceeded');
      return NextResponse.json(
        { error: 'The AI chat service is temporarily unavailable due to API quota limits. Please check your OpenAI account billing and quota settings at https://platform.openai.com/account/billing' },
        { status: 503 }
      );
    } else if (errorMessage.includes('organization') || errorString.includes('organization') || 
        errorMessage.includes('401') || error.statusCode === 401 || error.status === 401) {
      console.error('OpenAI API Key Error - Organization access issue');
      return NextResponse.json(
        { error: 'OpenAI API key error: The API key is tied to an organization you don\'t have access to. Please use a personal API key instead. You can create one at https://platform.openai.com/api-keys' },
        { status: 500 }
      );
    } else if (errorMessage.includes('401') || error.statusCode === 401 || error.status === 401) {
      console.error('OpenAI API Key Error - Authentication failed');
      return NextResponse.json(
        { error: 'OpenAI API authentication failed. Please verify the API key is correct and has proper permissions.' },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { error: error.message || errorString || 'Internal server error' },
        { status: 500 }
      );
    }
  }
} 