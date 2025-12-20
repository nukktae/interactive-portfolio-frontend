"use client";

import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { motion, AnimatePresence } from 'framer-motion';
import { chatService } from '@/services/api';
import { ChatMessage } from './ChatMessage';
import type { ChatMessage as ChatMessageType } from '@/types/chat';
import { IoSend } from 'react-icons/io5';
import { generateSmartFollowUps, shouldShowSuggestions } from '@/services/followUpSuggestions';
import type { FollowUpSuggestion } from '@/services/followUpSuggestions';
import { getKnowledgeBase } from '@/services/knowledgeBase';
import { detectProjectMentions } from '@/services/reasoningEngine';
import type { UserRole } from '@/types/role';
import { createDefaultContext, updateContextAfterInteraction, type SessionContext } from '@/services/contextMemory';
import { ContextPanel } from './ContextPanel';
import { ProjectKnowledge } from '@/types/knowledge';

const FOLLOW_UP_QUESTIONS = {
  technical: [
    "How did Anu implement real-time data processing in Rootin?",
    "What's Anu's experience with cloud architecture?",
    "How does Anu approach system scalability?",
    "What's Anu's expertise in Flutter development?",
    "How does Anu handle API optimization?"
  ],
  professional: [
    "What type of development environment does Anu prefer?",
    "How does Anu approach technical challenges?",
    "What's Anu's experience with agile development?",
    "How does Anu handle project deadlines?",
    "What's Anu's approach to code quality?"
  ],
  projects: [
    "What metrics did Anu achieve with the Rootin project?",
    "How did Anu implement the IoT sensor integration in Rootin?",
    "What were the key technical decisions in Rootin?",
    "How did Anu improve system performance in Rootin?",
    "What was Anu's role in the Rootin project?"
  ]
};

const isIrrelevantQuestion = (question: string): boolean => {
  const irrelevantKeywords = [
    'personal', 'private', 'salary', 'age', 'relationship',
    'family', 'address', 'phone', 'social media', 'hobby'
  ];
  return irrelevantKeywords.some(keyword => 
    question.toLowerCase().includes(keyword)
  );
};

const isLanguageQuestion = (question: string): boolean => {
  const languageKeywords = [
    'language', 'speak', 'linguistic', 'multilingual',
    'communication', 'fluent', 'proficient'
  ];
  return languageKeywords.some(keyword => 
    question.toLowerCase().includes(keyword)
  );
};

const getFollowUpQuestions = (previousQuestion: string, previousAnswer: string): string[] => {
  const userType = localStorage.getItem('userType') || 'visitor';
  
  // Reference to existing follow-up questions
  const allQuestions = userType === 'recruiter' ? 
    [...FOLLOW_UP_QUESTIONS.technical, ...FOLLOW_UP_QUESTIONS.professional] :
    [...FOLLOW_UP_QUESTIONS.projects, ...FOLLOW_UP_QUESTIONS.technical];

  // Return only 2 random questions
  return allQuestions
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);
};

const getPersonalizedGreeting = (userType: string) => {
  const greetings = {
    recruiter: {
      message: `Hello! Ask about technical expertise, project impact, or team collaboration.`
    },
    visitor: {
      message: `Hello! Ask about solutions built, tech stack, or development experience.`
    },
    friend: {
      message: `Hey! Ask about projects, journey, or innovation.`
    }
  };

  return greetings[userType as keyof typeof greetings] || greetings.visitor;
};

const getInitialQuestions = (userType: string) => {
  const questions = {
    recruiter: [
      "What are Anu's key achievements in full-stack development?",
      "How does Anu approach complex technical challenges?",
      "What's Anu's experience with scalable system architecture?"
    ],
    visitor: [
      "What innovative solutions has Anu developed?",
      "Tell me about the Rootin project architecture",
      "How does Anu handle system optimization?"
    ],
    friend: [
      "What's Anu's most impactful project?",
      "How does Anu approach technical leadership?",
      "What's Anu's expertise in cloud solutions?"
    ]
  };

  return questions[userType as keyof typeof questions] || questions.visitor;
};

export const ChatInterface = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [storedPrompt, setStoredPrompt] = useState('');
  const [followUpSuggestions, setFollowUpSuggestions] = useState<FollowUpSuggestion[]>([]);
  const [initialQuestions, setInitialQuestions] = useState<string[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [lastMessageTime, setLastMessageTime] = useState(0);
  const [detectedRole, setDetectedRole] = useState<UserRole>('casual');
  const [roleConfidence, setRoleConfidence] = useState(0);
  const [sessionContext, setSessionContext] = useState<SessionContext>(createDefaultContext());
  const [contextProject, setContextProject] = useState<ProjectKnowledge | null>(null);
  const [contextViewType, setContextViewType] = useState<'overview' | 'ui' | 'architecture' | 'code' | 'metrics' | 'deep-dive' | undefined>(undefined);
  const [isTyping, setIsTyping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [entryIntent, setEntryIntent] = useState<'hire' | 'explore' | 'browse' | null>(null);
  const [inputFocused, setInputFocused] = useState(false);
  
  useEffect(() => {
    // Don't show initial greeting - entry prompts will be shown instead
    // This allows entry prompts to be the first thing users see
    if (typeof window !== 'undefined') {
      const userType = localStorage.getItem('userType') || 'visitor';
      const questions = getInitialQuestions(userType);
      setInitialQuestions(questions);
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    if (storedPrompt) {
      const initialMessage: ChatMessageType = {
        id: uuidv4(),
        content: storedPrompt,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([initialMessage]);
    }
  }, [storedPrompt]);

  useEffect(() => {
    if (!isInitialLoad && messagesEndRef.current) {
      // Only auto-scroll for new messages after initial load
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (isInitialLoad) {
      setIsInitialLoad(false);
    }
  }, [messages, isInitialLoad]);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setShowScrollTop(container.scrollTop > 500);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide suggestions when user starts typing
  useEffect(() => {
    if (input.trim().length > 0 && followUpSuggestions.length > 0) {
      setFollowUpSuggestions([]);
    }
  }, [input]);

  const scrollToTop = () => {
    messagesContainerRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleEntryPrompt = async (intent: 'hire' | 'explore' | 'browse') => {
    setEntryIntent(intent);
    setHasInteracted(true);
    setShowSuggestions(false);
    
    // Create a user message based on intent
    const promptMessages = {
      hire: "Looking to hire?",
      explore: "Want to explore my work?",
      browse: "Just browsing?"
    };
    
    const userMessage: ChatMessageType = {
      id: uuidv4(),
      content: promptMessages[intent],
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setLoading(true);
    setIsTyping(true);
    
    // Build conversation history
    const conversationHistory = {
      messages: messages.map(msg => ({
        role: msg.sender,
        content: msg.content,
        timestamp: msg.timestamp
      }))
    };
    
    // Enhance message based on intent
    let enhancedMessage = promptMessages[intent];
    if (intent === 'hire') {
      enhancedMessage += '\n\n[ENTRY INTENT: RECRUITER] Prioritize outcomes, ownership, clarity. Avoid deep technical jargon unless asked. First response should be max 2 short paragraphs or 3 lines.';
    } else if (intent === 'explore') {
      enhancedMessage += '\n\n[ENTRY INTENT: EXPLORE] Neutral tone, visual-first, encourage "show, don\'t tell". First response should be max 2 lines.';
    } else if (intent === 'browse') {
      enhancedMessage += '\n\n[ENTRY INTENT: BROWSE] Friendly, lightweight, zero assumptions. First response should be max 1-2 lines.';
    }
    
    try {
      const response = await chatService.sendMessage(
        enhancedMessage,
        conversationHistory,
        {
          recruiter: intent === 'hire' ? 0.8 : 0.2,
          engineer: 0.2,
          designer: 0.2,
          founder_pm: 0.2,
          casual: intent === 'browse' ? 0.8 : 0.2
        },
        sessionContext
      );
      
      const replyContent = typeof response === 'string' 
        ? response 
        : (response.reply || "I apologize, but I received an empty response. Please try again.");
      
      const botMessage: ChatMessageType = {
        id: uuidv4(),
        content: replyContent,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setLastMessageTime(Date.now());
      
      // Update session context
      if (typeof response === 'object' && response.sessionContext) {
        setSessionContext(response.sessionContext);
      }
      
      // Generate follow-up suggestions based on intent
      const followUpChips = {
        hire: [
          { label: 'Quick overview', query: 'Give me a quick overview of your experience' },
          { label: 'Relevant projects', query: 'Show me projects relevant for frontend roles' },
          { label: 'Role fit', query: 'What roles are you best suited for?' }
        ],
        explore: [
          { label: 'Visual projects', query: 'Show me your visual design work' },
          { label: 'Technical depth', query: 'Show me your most technical project' },
          { label: 'Case studies', query: 'Show me a detailed case study' }
        ],
        browse: [
          { label: 'Show highlights', query: 'Show me your best work' },
          { label: 'What I do', query: 'What do you do?' },
          { label: 'Surprise me', query: 'Show me something interesting' }
        ]
      };
      
      // Convert to follow-up suggestions format
      const smartSuggestions = followUpChips[intent].map((item) => ({
        label: item.label,
        query: item.query,
        type: 'explore' as const,
        context: `Entry prompt follow-up for ${intent}`
      }));
      setFollowUpSuggestions(smartSuggestions);
      
    } catch (error: any) {
      console.error('Chat error:', error);
      const errorMessage: ChatMessageType = {
        id: uuidv4(),
        content: error.message || "I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
      setIsTyping(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage: ChatMessageType = {
      id: uuidv4(),
      content: input.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    setShowSuggestions(false);
    setHasInteracted(true); // Mark as interacted when user types directly
    setIsTyping(true);
    
    // Small delay to show typing indicator
    setTimeout(() => setIsTyping(false), 500);

    try {
      // Build conversation history for role detection
      const conversationHistory = {
        messages: messages.map(msg => ({
          role: msg.sender,
          content: msg.content,
          timestamp: msg.timestamp
        }))
      };
      
      const response = await chatService.sendMessage(
        userMessage.content, 
        conversationHistory,
        {
          recruiter: roleConfidence,
          engineer: roleConfidence,
          designer: roleConfidence,
          founder_pm: roleConfidence,
          casual: roleConfidence
        },
        sessionContext
      );
      console.log('Chat response:', response);
      
      // Handle both old format (string) and new format (object with reply property)
      const replyContent = typeof response === 'string' 
        ? response 
        : (response.reply || "I apologize, but I received an empty response. Please try again.");
      
      // Update role detection if available
      if (typeof response === 'object' && response.roleDetection) {
        setDetectedRole(response.roleDetection.primaryRole as UserRole);
        setRoleConfidence(response.roleDetection.confidenceScores[response.roleDetection.primaryRole] || 0);
      }
      
      const botMessage: ChatMessageType = {
        id: uuidv4(),
        content: replyContent,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setLastMessageTime(Date.now());
      
      // Update session context after interaction
      // Update context if response includes it, otherwise update manually
      if (typeof response === 'object' && response.sessionContext) {
        setSessionContext(response.sessionContext);
      } else {
        const knowledgeBaseForContext = getKnowledgeBase();
        const projectMentionsForContext = detectProjectMentions(userMessage.content, knowledgeBaseForContext);
        const mentionedProjectForContext = projectMentionsForContext.primaryProject || undefined;
        
        const updatedContext = updateContextAfterInteraction(sessionContext, {
          question: userMessage.content,
          responseType: typeof response === 'object' && response.responseType 
            ? response.responseType as any 
            : undefined,
          projectMentioned: mentionedProjectForContext?.title,
          followUpChosen: typeof response === 'object' && response.followUpChosen 
            ? response.followUpChosen 
            : undefined
        });
        setSessionContext(updatedContext);
      }
      
      // Update context panel if project is mentioned
      const knowledgeBase = getKnowledgeBase();
      const projectMentions = detectProjectMentions(userMessage.content, knowledgeBase);
      const mentionedProject = projectMentions.primaryProject || undefined;
      
      if (mentionedProject) {
        // Determine view type from response
        const responseLower = replyContent.toLowerCase();
        let viewType: 'overview' | 'ui' | 'architecture' | 'code' | 'metrics' | 'deep-dive' | undefined = 'overview';
        
        if (responseLower.includes('architecture') || responseLower.includes('system design')) {
          viewType = 'architecture';
        } else if (responseLower.includes('ui') || responseLower.includes('design') || responseLower.includes('screenshot')) {
          viewType = 'ui';
        } else if (responseLower.includes('code') || responseLower.includes('implementation')) {
          viewType = 'code';
        } else if (responseLower.includes('metric') || responseLower.includes('impact')) {
          viewType = 'metrics';
        } else if (responseLower.includes('deep dive') || responseLower.includes('technical details')) {
          viewType = 'deep-dive';
        }
        
        setContextProject(mentionedProject);
        setContextViewType(viewType);
      }
      
      // Generate smart follow-up suggestions
      const smartSuggestions = generateSmartFollowUps(
        userMessage.content,
        replyContent,
        detectedRole,
        roleConfidence,
        mentionedProject,
        messages.length
      );
      setFollowUpSuggestions(smartSuggestions);
      
    } catch (error: any) {
      console.error('Chat error:', error);
      const errorMessage: ChatMessageType = {
        id: uuidv4(),
        content: error.message || "I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      setFollowUpSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex bg-white min-h-0 relative">
      {/* Left: Chat Column (Control Layer) - Redesigned minimal */}
      <div className={`flex flex-col min-h-0 bg-white relative z-10 ${contextProject ? 'w-full md:w-[400px] border-r border-gray-200' : 'w-full'}`}>
        {/* Zone A - Identity: Very small, no border, whitespace only */}
        <div className="h-12 px-4 flex items-center bg-white relative z-20">
          <span className="text-sm font-medium text-gray-700">Anu — Portfolio Assistant</span>
        </div>
        
        {/* Message Area */}
        <div 
          ref={messagesContainerRef}
          className="flex-1 px-4 py-6 space-y-6 relative overflow-y-auto min-h-0 bg-white"
        >
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: index === messages.length - 1 ? 0.1 : 0 }}
            >
              <ChatMessage
                message={message}
                avatarBg={message.sender === 'bot' ? 'bg-gray-900' : 'bg-gray-700'}
              />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Zone B - Entry Prompts: Primary action, borderless, larger text, more spacing */}
        {!hasInteracted && messages.length === 0 && (
          <div className="flex-1 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="w-full max-w-xs space-y-4"
            >
              <button
                onClick={() => handleEntryPrompt('hire')}
                className="w-full px-0 py-2 text-left text-base font-normal text-gray-900
                         hover:bg-gray-50 transition-all duration-200
                         focus:outline-none relative group"
              >
                <span className="relative">
                  Looking to hire?
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-200"></span>
                </span>
              </button>
              <button
                onClick={() => handleEntryPrompt('explore')}
                className="w-full px-0 py-2 text-left text-base font-normal text-gray-900
                         hover:bg-gray-50 transition-all duration-200
                         focus:outline-none relative group"
              >
                <span className="relative">
                  Want to explore my work?
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-200"></span>
                </span>
              </button>
              <button
                onClick={() => handleEntryPrompt('browse')}
                className="w-full px-0 py-2 text-left text-base font-normal text-gray-900
                         hover:bg-gray-50 transition-all duration-200
                         focus:outline-none relative group"
              >
                <span className="relative">
                  Just browsing?
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-200"></span>
                </span>
              </button>
            </motion.div>
          </div>
        )}

        {/* Zone C - Example Questions: Secondary, quieter, hidden until interaction or input focus */}
        {((hasInteracted || inputFocused) && messages.length === 0 && initialQuestions.length > 0 && !loading) && (
          <motion.div 
            className="px-4 mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="space-y-2 pl-4">
              {initialQuestions.map((question, index) => (
                <button
                  key={index}
                  type="button"
                  className="w-full px-0 py-1.5 text-left text-sm text-gray-400 hover:text-gray-600
                           hover:bg-gray-50/30 transition-colors duration-150"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    // Set the input value and trigger submit
                    setInput(question);
                    setHasInteracted(true);
                    // Use a small delay to ensure state is updated before submit
                    setTimeout(() => {
                      const form = document.querySelector('form');
                      if (form) {
                        const formEvent = new Event('submit', { bubbles: true, cancelable: true });
                        form.dispatchEvent(formEvent);
                      }
                    }, 50);
                  }}
                >
                  {question}
                </button>
              ))}
            </div>
          </motion.div>
        )}
          <div ref={messagesEndRef} />
        </div>

        {/* Typing Indicator - Minimal, mature, part of message flow */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="px-4 py-2"
          >
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0ms', animationDuration: '1.4s' }} />
                <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '200ms', animationDuration: '1.4s' }} />
                <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '400ms', animationDuration: '1.4s' }} />
              </div>
            </div>
          </motion.div>
        )}

        {/* Contextual Suggestions - Borderless, quieter design */}
        {hasInteracted && followUpSuggestions.length > 0 && shouldShowSuggestions(
          input.trim().length > 0,
          loading,
          lastMessageTime,
          messages.length
        ) && (
          <motion.div 
            className="px-4 py-2 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <div className="flex flex-wrap gap-2">
              {followUpSuggestions.slice(0, 3).map((suggestion, index) => (
                <button
                  key={index}
                  className="px-3 py-1.5 text-xs text-gray-500 hover:text-gray-700
                           hover:bg-gray-50 transition-all duration-150 font-normal
                           focus:outline-none"
                  onClick={() => {
                    setInput(suggestion.query);
                    setFollowUpSuggestions([]);
                    handleSubmit(new Event('submit') as any);
                  }}
                >
                  {suggestion.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Input Field - Always visible, visually stronger, subtle border */}
        <form 
          onSubmit={handleSubmit}
          className="p-4 bg-white relative z-10"
        >
          <div className="relative flex items-end">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e as any);
                }
              }}
              placeholder="Ask about a project"
              rows={1}
              className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200
                       text-gray-900 text-sm focus:outline-none focus:border-gray-400
                       transition-all duration-150 placeholder:text-gray-400
                       resize-none overflow-hidden"
              style={{
                minHeight: '48px',
                maxHeight: '120px',
                lineHeight: '1.5'
              }}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = 'auto';
                target.style.height = `${Math.min(target.scrollHeight, 120)}px`;
              }}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="absolute right-3 bottom-3 p-2 bg-gray-900 hover:bg-gray-800 
                       rounded-md text-white disabled:opacity-30 disabled:cursor-not-allowed
                       transition-opacity duration-150"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <IoSend className="w-4 h-4" />
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Right: Context Panel (Proof Layer) */}
      <ContextPanel 
        project={contextProject}
        viewType={contextViewType}
        isVisible={!!contextProject}
      />
    </div>
  );
}; 