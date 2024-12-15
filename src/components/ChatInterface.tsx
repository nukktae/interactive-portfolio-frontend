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

const INITIAL_QUESTIONS = [
  "What are Anu's main technical skills?",
  "Tell me about the Rootin plant care system project",
  "What experience does Anu have with AWS?",
  "What's Anu's approach to software development?",
  "Can you highlight Anu's key achievements?"
];

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
  // Rootin project-specific follow-ups
  if (previousQuestion.toLowerCase().includes('rootin') || 
      previousQuestion.toLowerCase().includes('plant care')) {
    return [
      "What technologies were used in the Rootin project?",
      "Can you explain the IoT integration in Rootin?",
      "What were the key performance metrics achieved?",
      "How was the user experience designed?",
      "Tell me about the technical architecture"
    ];
  }

  // Technical skills follow-ups
  if (previousQuestion.toLowerCase().includes('technical skills') || 
      previousQuestion.toLowerCase().includes('experience')) {
    return [
      "Tell me about your Flutter development experience",
      "What AWS services have you worked with?",
      "How do you approach IoT development?",
      "What's your experience with real-time data processing?",
      "How do you handle system architecture?"
    ];
  }

  // Project metrics follow-ups
  if (previousQuestion.toLowerCase().includes('metrics') || 
      previousQuestion.toLowerCase().includes('achievements')) {
    return [
      "How did you achieve 90% user satisfaction?",
      "What led to the 30% improvement in notifications?",
      "Can you explain the API optimization results?",
      "What other performance improvements did you achieve?",
      "How do you measure project success?"
    ];
  }

  // Development process follow-ups
  if (previousQuestion.toLowerCase().includes('development') || 
      previousQuestion.toLowerCase().includes('process')) {
    return [
      "How did you handle the IoT integration process?",
      "What was your approach to mobile app development?",
      "How did you manage the project timeline?",
      "What development challenges did you overcome?",
      "How did you ensure code quality?"
    ];
  }

  // Default follow-ups
  return [
    "Would you like to hear about the Rootin project?",
    "What aspects of my technical skills interest you?",
    "Should we discuss project metrics and achievements?",
    "Would you like to know about my development process?",
    "What specific area would you like to explore?"
  ];
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
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSelectedEmoji(localStorage.getItem('selectedAvatar') || '🤖');
      setSelectedBg(localStorage.getItem('selectedAvatarBg') || 'bg-blue-500');
      setStoredPrompt(localStorage.getItem('chatPrompt') || '');
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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
    <div className="h-full flex flex-col bg-gradient-to-br from-gray-900 via-purple-900/10 to-black">
      <motion.div 
        className="flex items-center gap-4 p-4 backdrop-blur-lg border-b border-white/5"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <motion.div 
          className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center text-xl shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <RiRobot2Line className="text-white" />
        </motion.div>
        <div>
          <h1 className="text-xl font-semibold text-white">AI Portfolio Assistant</h1>
          <p className="text-sm text-gray-400">Powered by OpenAI</p>
        </div>
      </motion.div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              avatar={message.sender === 'bot' ? selectedEmoji : '👤'}
              avatarBg={message.sender === 'bot' ? selectedBg : 'bg-gradient-to-r from-violet-500 to-purple-600'}
            />
          ))}
        </AnimatePresence>

        {showSuggestions && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {INITIAL_QUESTIONS.map((question, index) => (
              <motion.button
                key={index}
                className="p-4 text-left rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10"
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  setInput(question);
                  handleSubmit(new Event('submit') as any);
                }}
              >
                {question}
              </motion.button>
            ))}
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {followUpQuestions.length > 0 && (
        <motion.div 
          className="p-4 space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm text-gray-400">Follow-up questions:</p>
          <div className="flex flex-wrap gap-2">
            {followUpQuestions.map((question, index) => (
              <motion.button
                key={index}
                className="p-2 text-sm rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10"
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
        className="p-4 backdrop-blur-lg border-t border-white/5"
      >
        <div className="relative max-w-4xl mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about Anu's experience..."
            className="w-full px-6 py-3 bg-white/5 rounded-full border border-white/10 text-white focus:ring-2 focus:ring-violet-500/50 transition-all pr-14"
          />
          <motion.button
            type="submit"
            disabled={loading}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full text-white hover:shadow-lg"
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