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
  
  const followUps = {
    recruiter: {
      technical: [
        "What's the technical architecture of your most complex project?",
        "How do you approach system scalability?",
        "Tell me about your experience with cloud services",
        "What's your approach to code quality and testing?",
        "How do you handle technical debt?"
      ],
      project: [
        "What metrics demonstrate your project's success?",
        "How did you overcome technical challenges?",
        "What was your role in team collaboration?",
        "How did you ensure project deliverables?",
        "What improvements did you implement?"
      ]
    },
    visitor: {
      technical: [
        "What innovative technologies did you use?",
        "How did you make the user experience engaging?",
        "What's unique about your development approach?",
        "Tell me about your creative solutions",
        "How do you stay current with tech trends?"
      ],
      project: [
        "What inspired this project idea?",
        "How does it solve real-world problems?",
        "What makes your solution unique?",
        "How did users respond to the project?",
        "What's next for this project?"
      ]
    },
    friend: {
      technical: [
        "What was the most exciting part to build?",
        "What did you learn from this project?",
        "What would you do differently now?",
        "What technologies do you want to explore next?",
        "How did this project help you grow?"
      ],
      project: [
        "What's the story behind this project?",
        "What was your biggest 'aha' moment?",
        "How did you come up with the solution?",
        "What are you most proud of?",
        "What inspired the design choices?"
      ]
    }
  };

  // Get the appropriate question set based on user type and context
  const questions = followUps[userType as keyof typeof followUps] || followUps.visitor;

  if (previousQuestion.toLowerCase().includes('technical') || 
      previousQuestion.toLowerCase().includes('skills') ||
      previousQuestion.toLowerCase().includes('development')) {
    return questions.technical;
  }

  if (previousQuestion.toLowerCase().includes('project') || 
      previousQuestion.toLowerCase().includes('rootin') ||
      previousQuestion.toLowerCase().includes('achievement')) {
    return questions.project;
  }

  // Default questions based on user type
  return [
    ...questions.technical.slice(0, 2),
    ...questions.project.slice(0, 3)
  ];
};

const getPersonalizedGreeting = (userType: string) => {
  const greetings = {
    recruiter: {
      message: `## Welcome to Anu's Professional Portfolio! 🚀

Let's dive into what makes Anu stand out in the tech world. I can help you explore:

* 💻 Technical expertise and project highlights
* 🌱 Growth trajectory and learning mindset
* 🎯 Impact-driven development approach
* 🤝 Collaborative work style

What would you like to know more about?`,
      bg: 'from-blue-500/20 to-cyan-500/20'
    },
    visitor: {
      message: `## Hey there, tech enthusiast! ✨

Ready to explore some exciting projects? Here's what we can discover:

* 🔮 Innovative solutions and creative approaches
* 🛠️ Full-stack development journey
* 🌟 Cutting-edge technologies
* 🎨 User-centered design philosophy

What catches your interest?`,
      bg: 'from-violet-500/20 to-fuchsia-500/20'
    },
    friend: {
      message: `## Hi there! Great to see you! 💫

Let's have an engaging chat about Anu's journey:

* 🌈 Passion projects and inspirations
* 🚀 Learning adventures and experiences
* 💡 Creative problem-solving approaches
* 🌱 Personal growth and aspirations

What would you like to hear about?`,
      bg: 'from-emerald-500/20 to-teal-500/20'
    }
  };

  return greetings[userType as keyof typeof greetings] || greetings.visitor;
};

const getInitialQuestions = (userType: string) => {
  const questions = {
    recruiter: [
      "What are Anu's core technical competencies?",
      "Can you detail Anu's most significant project achievements?",
      "What's Anu's experience with enterprise-scale systems?",
      "How does Anu approach technical leadership?",
      "What methodologies does Anu use for project delivery?"
    ],
    visitor: [
      "What innovative projects has Anu worked on?",
      "Tell me about the Rootin plant care system project",
      "What creative solutions has Anu developed?",
      "How does Anu approach user experience?",
      "What's unique about Anu's development style?"
    ],
    friend: [
      "What's the coolest project Anu has built?",
      "How did Anu get into tech?",
      "What's Anu's favorite tech stack to work with?",
      "Tell me about Anu's learning journey",
      "What inspired the Rootin project?"
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
    <div className="h-full flex flex-col bg-gradient-to-br from-gray-900 via-gray-900 to-black">
      <div 
        ref={messagesContainerRef}
        className="flex-1 px-4 py-6 space-y-6 relative overflow-y-auto"
      >
        <AnimatePresence>
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              avatar={message.sender === 'bot' ? selectedEmoji : '👤'}
              avatarBg={message.sender === 'bot' ? selectedBg : 'bg-gradient-to-r from-indigo-500 to-purple-600'}
            />
          ))}
        </AnimatePresence>

        {showSuggestions && (
          <motion.div 
            className="grid grid-cols-1 gap-2 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {initialQuestions.map((question, index) => (
              <motion.button
                key={index}
                className="p-3 text-left rounded-lg bg-gray-800/50 hover:bg-gray-700/50 
                         border border-gray-700 text-gray-300 hover:text-white
                         transition-all duration-200"
                whileHover={{ scale: 1.01 }}
                onClick={() => {
                  setInput(question);
                  handleSubmit(new Event('submit') as any);
                }}
              >
                <span className="text-sm">{question}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {followUpQuestions.length > 0 && (
        <motion.div 
          className="px-6 py-4 bg-black/20 border-t border-white/5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-xs text-gray-400 mb-3">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {followUpQuestions.map((question, index) => (
              <motion.button
                key={index}
                className="px-4 py-2 text-sm rounded-lg bg-gray-800/50 hover:bg-gray-700/50 
                         border border-gray-700 text-gray-300 hover:text-white
                         transition-all duration-200"
                whileHover={{ scale: 1.02 }}
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
        className="p-6 backdrop-blur-lg border-t border-white/5 bg-black/20"
      >
        <div className="relative flex items-center max-w-3xl mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about Anu's experience..."
            className="w-full px-6 py-3 bg-white/5 rounded-full border border-white/10 
                     text-white text-sm focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500/50 
                     transition-all placeholder:text-gray-500"
          />
          <motion.button
            type="submit"
            disabled={loading}
            className="absolute right-2 p-2 bg-gradient-to-r from-indigo-500 to-purple-600 
                     rounded-full text-white shadow-lg disabled:opacity-50"
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
              <IoSend className="w-4 h-4" />
            )}
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
}; 