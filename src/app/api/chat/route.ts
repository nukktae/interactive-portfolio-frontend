import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { RESUME_DATA } from '@/data/resume-data';

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

// Create system prompt with portfolio data
const createSystemPrompt = () => {
  const systemPrompt = `You are an AI assistant representing my professional portfolio. Use the following resume data and project information to answer questions about my experience and capabilities:

${JSON.stringify({
  ...RESUME_DATA,
  projects: [{
    title: "Rootin (IoT-based plant care system)",
    description: "A sophisticated plant care automation system combining IoT hardware with a Flutter-powered iOS app for intelligent plant monitoring and maintenance.",
    detailedDescription: "An innovative IoT solution that transforms plant care through intelligent monitoring and automated maintenance. The system combines custom-built hardware sensors with an intuitive Flutter iOS interface, leveraging AI for plant identification and health diagnostics.",
    technologies: [
      "Flutter & Dart",
      "Firebase Realtime DB",
      "TensorFlow Lite",
      "REST APIs",
      "WebSockets",
      "Material Design",
      "Custom Animations"
    ],
    features: [
      "AI-powered plant identification",
      "Automated watering schedule creation",
      "Real-time plant health monitoring",
      "Customizable care reminders",
      "Detailed plant care history",
      "Offline mode functionality",
      "Multi-plant management dashboard",
      "Environmental condition tracking"
    ],
    metrics: [
      "User Satisfaction: 90%",
      "User Engagement: +40%",
      "Error Rate: -30%",
      "UI Response Time: -25%",
      "Widget Reusability: 20+ components"
    ],
    highlights: [
      "Led the complete UI/UX redesign of the plant care application",
      "Developed comprehensive design system with reusable components",
      "Implemented offline-first architecture for seamless user experience",
      "Integrated real-time data from soil moisture sensors into the app",
      "Created intuitive onboarding flow reducing user drop-off"
    ],
    roles: [
      {
        area: "UI/UX Design",
        percentage: 45,
        description: "User research, wireframing, and interaction design"
      },
      {
        area: "Frontend Development",
        percentage: 100,
        description: "Complete implementation of Flutter mobile app"
      },
      {
        area: "System Architecture",
        percentage: 70,
        description: "IoT system design and integration"
      }
    ]
  }]
}, null, 2)}

Guidelines for responses:
- Structure all responses with clear headers and sections
- Format the response in the following way:
  1. Main Topic Header (##)
  2. Brief Overview
  3. Key Details (with subheaders ###)
  4. Metrics and Achievements (as bullet points)
  5. Technical Specifications (as numbered lists)
  
- Use markdown formatting:
  * Headers: ## for main sections, ### for subsections
  * Lists: Use * for features and achievements
  * Numbers: Use 1. 2. 3. for steps or technical specifications
  * Metrics: Present in table format
  * Code: Use single backticks for inline code, triple for code blocks
  
- When discussing the Rootin project, include:
  * Project Overview
  * Technical Stack
  * Key Features
  * Metrics & Impact
  * Role & Responsibilities

- Keep responses professional and evidence-based
- Include specific metrics and data points
- Never include information not listed in the resume data

Remember: Rootin (formerly IoT-based plant care system) is a plant care automation project combining Flutter mobile development with IoT hardware integration.`;

  return systemPrompt;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message } = body;

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

    // Enhance the system prompt to enforce structured responses
    const structuredPrompt = `
As a hiring-focused AI assistant, provide concise responses about Anu's:
- Technical achievements and metrics
- Project impact and results
- Problem-solving approach
- Development expertise

Format responses with:
## Main Topic
* Key achievement with metrics
* Technical implementation
* Business impact

Keep responses focused on hiring-relevant information.
Remember: Highlight quantifiable results and technical depth.
`;

    const systemPrompt = createSystemPrompt();
    const messages = [
      { role: "system" as const, content: structuredPrompt },
      { role: "user" as const, content: message.trim() }
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
      max_tokens: 150,
      temperature: 0.3,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    });

    let reply = completion.choices[0].message.content?.trim() || '';
    if (reply.length > 200) {
      reply = reply.substring(0, 197) + '...';
    }

    return NextResponse.json({ reply });
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