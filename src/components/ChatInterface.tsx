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
      message: `## Hi! 🚀
Let's explore:
* 💻 Technical expertise
* 🎯 Project impact
* 🤝 Team collaboration

What would you like to know?`,
      bg: 'from-[#498FD8]/20 to-[#D86089]/20'
    },
    visitor: {
      message: `## Hello! ✨
Let's discuss:
* 🔮 Solutions built
* 🌟 Tech stack
* 🎨 Development

What interests you?`,
      bg: 'from-[#498FD8]/20 to-[#FB9D5B]/20'
    },
    friend: {
      message: `## Hey! 💫
Let's chat about:
* 🌈 Projects
* 🚀 Journey
* 💡 Innovation

What's up?`,
      bg: 'from-[#D86089]/20 to-[#FB9D5B]/20'
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
    <div className="h-full flex flex-col bg-gradient-to-br from-[#498FD8]/5 via-[#D86089]/5 to-[#FB9D5B]/5">
      <div 
        ref={messagesContainerRef}
        className="flex-1 px-6 py-6 space-y-6 relative overflow-y-auto scrollbar-thin scrollbar-thumb-[#498FD8]/20 scrollbar-track-transparent"
      >
        <AnimatePresence>
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              avatar={message.sender === 'bot' ? selectedEmoji : '👤'}
              avatarBg={message.sender === 'bot' ? 'bg-gradient-to-r from-[#498FD8] to-[#D86089]' : 'bg-gradient-to-r from-[#D86089] to-[#FB9D5B]'}
            />
          ))}
        </AnimatePresence>

        {showSuggestions && (
          <motion.div 
            className="grid grid-cols-1 gap-3 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {initialQuestions.map((question, index) => (
              <motion.button
                key={index}
                className="p-4 text-left rounded-2xl bg-white/80 hover:bg-white 
                         border border-[#498FD8]/10 hover:border-[#498FD8]/30
                         text-gray-600 hover:text-gray-800 shadow-sm hover:shadow-md
                         transition-all duration-200"
                whileHover={{ scale: 1.01, y: -2 }}
                onClick={() => {
                  setInput(question);
                  handleSubmit(new Event('submit') as any);
                }}
              >
                <span className="text-sm font-medium">{question}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {followUpQuestions.length > 0 && (
        <motion.div 
          className="px-6 py-4 bg-white/80 border-t border-[#498FD8]/10 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-xs font-medium text-gray-500 mb-3">Follow-up questions</p>
          <div className="flex flex-wrap gap-2">
            {followUpQuestions.map((question, index) => (
              <motion.button
                key={index}
                className="px-4 py-2 text-sm rounded-xl bg-white hover:bg-[#498FD8]/5
                         border border-[#498FD8]/20 text-gray-600 hover:text-[#498FD8]
                         transition-all duration-200 shadow-sm"
                whileHover={{ scale: 1.02, y: -1 }}
                onClick={() => {
                  setInput(question);
                  handleSubmit(new Event('submit') as any);
                }}
              >
                {question}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      <motion.form 
        onSubmit={handleSubmit}
        className="p-6 bg-white/90 border-t border-[#498FD8]/10 backdrop-blur-md"
      >
        <div className="relative flex items-center max-w-3xl mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Anu's experience..."
            className="w-full px-5 py-3 bg-white rounded-2xl border border-[#498FD8]/20 
                     text-gray-700 text-sm focus:ring-2 focus:ring-[#D86089]/20 
                     focus:border-[#D86089]/30 shadow-sm
                     transition-all duration-200 placeholder:text-gray-400"
          />
          <motion.button
            type="submit"
            disabled={loading}
            className="absolute right-3 p-2.5 bg-gradient-to-r from-[#498FD8] to-[#D86089] 
                     rounded-xl text-white shadow-md disabled:opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? (
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 flex items-center justify-center"
              >
                ⟳
              </motion.div>
            ) : (
              <IoSend className="w-5 h-5" />
            )}
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
}; 