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
import { useLanguage } from '@/contexts/LanguageContext';

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

const getPersonalizedGreeting = (userType: string, lang: 'en' | 'ko' = 'en') => {
  const greetings = {
    recruiter: {
      en: `Hello! Ask about technical expertise, project impact, or team collaboration.`,
      ko: `안녕하세요! 기술 전문성, 프로젝트 영향력 또는 팀 협업에 대해 물어보세요.`
    },
    visitor: {
      en: `Hello! Ask about solutions built, tech stack, or development experience.`,
      ko: `안녕하세요! 구축한 솔루션, 기술 스택 또는 개발 경험에 대해 물어보세요.`
    },
    friend: {
      en: `Hey! Ask about projects, journey, or innovation.`,
      ko: `안녕! 프로젝트, 여정 또는 혁신에 대해 물어보세요.`
    }
  };

  const greetingSet = greetings[userType as keyof typeof greetings] || greetings.visitor;
  return { message: greetingSet[lang] };
};

const getInitialQuestions = (userType: string, lang: 'en' | 'ko' = 'en') => {
  const questions = {
    recruiter: {
      en: [
        "What are Anu's key achievements in full-stack development?",
        "How does Anu approach complex technical challenges?",
        "What's Anu's experience with scalable system architecture?"
      ],
      ko: [
        "아노의 풀스택 개발 주요 성과는 무엇인가요?",
        "아노는 복잡한 기술적 도전을 어떻게 접근하나요?",
        "아노의 확장 가능한 시스템 아키텍처 경험은 무엇인가요?"
      ]
    },
    visitor: {
      en: [
        "What innovative solutions has Anu developed?",
        "Tell me about the Rootin project architecture",
        "How does Anu handle system optimization?"
      ],
      ko: [
        "아노가 개발한 혁신적인 솔루션은 무엇인가요?",
        "Rootin 프로젝트 아키텍처에 대해 알려주세요",
        "아노는 시스템 최적화를 어떻게 처리하나요?"
      ]
    },
    friend: {
      en: [
        "What's Anu's most impactful project?",
        "How does Anu approach technical leadership?",
        "What's Anu's expertise in cloud solutions?"
      ],
      ko: [
        "아노의 가장 영향력 있는 프로젝트는 무엇인가요?",
        "아노는 기술 리더십을 어떻게 접근하나요?",
        "아노의 클라우드 솔루션 전문성은 무엇인가요?"
      ]
    }
  };

  const questionSet = questions[userType as keyof typeof questions] || questions.visitor;
  return questionSet[lang];
};

interface ChatInterfaceProps {
  onClose?: () => void;
}

export const ChatInterface = ({ onClose }: ChatInterfaceProps = {}) => {
  const { language, t } = useLanguage();
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
      const questions = getInitialQuestions(userType, language);
      setInitialQuestions(questions);
      window.scrollTo(0, 0);
    }
  }, [language]);

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
    
    // Create a user message based on intent and language
    const promptMessages = {
      hire: language === 'ko' ? "채용을 고려 중이신가요?" : "Looking to hire?",
      explore: language === 'ko' ? "제 작업을 탐색해보시겠어요?" : "Want to explore my work?",
      browse: language === 'ko' ? "그냥 둘러보는 중이신가요?" : "Just browsing?"
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
        sessionContext,
        language
      );
      
      const replyContent = typeof response === 'string' 
        ? response 
        : (response.reply || (language === 'ko' 
          ? "죄송합니다. 빈 응답을 받았습니다. 다시 시도해주세요." 
          : "I apologize, but I received an empty response. Please try again."));
      
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
      
      // Generate follow-up suggestions based on intent and language
      const followUpChips = {
        hire: {
          en: [
            { label: 'Quick overview', query: 'Give me a quick overview of your experience' },
            { label: 'Relevant projects', query: 'Show me projects relevant for frontend roles' },
            { label: 'Role fit', query: 'What roles are you best suited for?' }
          ],
          ko: [
            { label: '빠른 개요', query: '경험에 대한 빠른 개요를 알려주세요' },
            { label: '관련 프로젝트', query: '프론트엔드 역할에 관련된 프로젝트를 보여주세요' },
            { label: '역할 적합성', query: '어떤 역할에 가장 적합한가요?' }
          ]
        },
        explore: {
          en: [
            { label: 'Visual projects', query: 'Show me your visual design work' },
            { label: 'Technical depth', query: 'Show me your most technical project' },
            { label: 'Case studies', query: 'Show me a detailed case study' }
          ],
          ko: [
            { label: '시각적 프로젝트', query: '시각 디자인 작업을 보여주세요' },
            { label: '기술적 깊이', query: '가장 기술적인 프로젝트를 보여주세요' },
            { label: '사례 연구', query: '상세한 사례 연구를 보여주세요' }
          ]
        },
        browse: {
          en: [
            { label: 'Show highlights', query: 'Show me your best work' },
            { label: 'What I do', query: 'What do you do?' },
            { label: 'Surprise me', query: 'Show me something interesting' }
          ],
          ko: [
            { label: '하이라이트 보기', query: '최고의 작업을 보여주세요' },
            { label: '무엇을 하나요', query: '무엇을 하시나요?' },
            { label: '놀라워해요', query: '흥미로운 것을 보여주세요' }
          ]
        }
      };
      
      const chips = followUpChips[intent][language];
      
      // Convert to follow-up suggestions format
      const smartSuggestions = chips.map((item) => ({
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
        content: error.message || (language === 'ko' 
          ? "죄송합니다. 지금 연결에 문제가 있습니다. 잠시 후 다시 시도해주세요." 
          : "I apologize, but I'm having trouble connecting right now. Please try again in a moment."),
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
        sessionContext,
        language
      );
      console.log('Chat response:', response);
      
      // Handle both old format (string) and new format (object with reply property)
      const replyContent = typeof response === 'string' 
        ? response 
        : (response.reply || (language === 'ko' 
          ? "죄송합니다. 빈 응답을 받았습니다. 다시 시도해주세요." 
          : "I apologize, but I received an empty response. Please try again."));
      
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
        content: error.message || (language === 'ko' 
          ? "죄송합니다. 지금 연결에 문제가 있습니다. 잠시 후 다시 시도해주세요." 
          : "I apologize, but I'm having trouble connecting right now. Please try again in a moment."),
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
        <div className="h-12 px-4 flex items-center justify-between bg-white relative z-20">
          <span className="text-sm font-medium text-gray-700">Anu — Portfolio Assistant</span>
          {onClose && (
            <button
              onClick={onClose}
              className="md:hidden p-2 -mr-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close chat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
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
                  {language === 'ko' ? "채용을 고려 중이신가요?" : "Looking to hire?"}
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
                  {language === 'ko' ? "제 작업을 탐색해보시겠어요?" : "Want to explore my work?"}
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
                  {language === 'ko' ? "그냥 둘러보는 중이신가요?" : "Just browsing?"}
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
              placeholder={language === 'ko' ? "프로젝트에 대해 물어보세요" : "Ask about a project"}
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