"use client";

import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { motion, AnimatePresence } from 'framer-motion';
import { chatService } from '../services/api';
import { ChatMessage } from './ChatMessage';
import type { ChatMessage as ChatMessageType } from '../types/chat';
import { IoSend } from 'react-icons/io5';
import { RiRobot2Line } from 'react-icons/ri';
import { FiUser } from 'react-icons/fi';
import { IoIosArrowUp } from 'react-icons/io';

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
      message: `Hello! Ask about technical expertise, project impact, or team collaboration.`,
      bg: 'bg-gray-50'
    },
    visitor: {
      message: `Hello! Ask about solutions built, tech stack, or development experience.`,
      bg: 'bg-gray-50'
    },
    friend: {
      message: `Hey! Ask about projects, journey, or innovation.`,
      bg: 'bg-gray-50'
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
  const [selectedEmoji, setSelectedEmoji] = useState('🤖');
  const [selectedBg, setSelectedBg] = useState('bg-blue-500');
  const [storedPrompt, setStoredPrompt] = useState('');
  const [followUpQuestions, setFollowUpQuestions] = useState<string[]>([]);
  const [initialQuestions, setInitialQuestions] = useState<string[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userType = localStorage.getItem('userType') || 'visitor';
      const { message, bg } = getPersonalizedGreeting(userType);
      const questions = getInitialQuestions(userType);
      
      const initialMessage: ChatMessageType = {
        id: uuidv4(),
        content: message,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages([initialMessage]);
      setSelectedBg(bg);
      setInitialQuestions(questions);

      // Reset scroll position of the entire window
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

  const scrollToTop = () => {
    messagesContainerRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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

    try {
      const response = await chatService.sendMessage(userMessage.content);
      console.log('Chat response:', response);
      
      const botMessage: ChatMessageType = {
        id: uuidv4(),
        content: response || "I apologize, but I received an empty response. Please try again.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      
      const newFollowUps = getFollowUpQuestions(userMessage.content, response);
      setFollowUpQuestions(newFollowUps);
      
    } catch (error: any) {
      console.error('Chat error:', error);
      const errorMessage: ChatMessageType = {
        id: uuidv4(),
        content: error.message || "I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      setFollowUpQuestions([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col bg-white min-h-0">
      <div 
        ref={messagesContainerRef}
        className="flex-1 px-4 py-4 space-y-4 relative overflow-y-auto min-h-0"
      >
        <AnimatePresence>
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              avatarBg={message.sender === 'bot' ? 'bg-black' : 'bg-yellow-400'}
            />
          ))}
        </AnimatePresence>

        {showSuggestions && (
          <motion.div 
            className="grid grid-cols-1 gap-2 mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {initialQuestions.map((question, index) => (
              <button
                key={index}
                className="p-3 text-left rounded-lg bg-gray-50 hover:bg-gray-100 
                         text-gray-700 hover:text-gray-900
                         transition-colors duration-150 text-sm"
                onClick={() => {
                  setInput(question);
                  handleSubmit(new Event('submit') as any);
                }}
              >
                {question}
              </button>
            ))}
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {followUpQuestions.length > 0 && (
        <motion.div 
          className="px-4 py-3 border-t border-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex flex-wrap gap-2">
            {followUpQuestions.map((question, index) => (
              <button
                key={index}
                className="px-3 py-1.5 text-xs rounded-md bg-gray-50 hover:bg-black
                         text-gray-600 hover:text-white
                         transition-colors duration-150"
                onClick={() => {
                  setInput(question);
                  handleSubmit(new Event('submit') as any);
                }}
              >
                {question}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      <form 
        onSubmit={handleSubmit}
        className="p-4 border-t border-gray-100"
      >
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Anu's experience..."
            className="w-full px-4 py-2.5 bg-black rounded-lg border-0
                     text-white text-sm focus:outline-none
                     transition-all duration-200 placeholder:text-gray-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="absolute right-2 p-2 bg-black hover:bg-gray-800 
                     rounded-md text-white disabled:opacity-50
                     transition-colors duration-200"
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
  );
}; 