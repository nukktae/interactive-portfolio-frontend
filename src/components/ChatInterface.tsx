"use client";

import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { chatService } from '../services/api';
import { ChatMessage } from './ChatMessage';
import type { ChatMessage as ChatMessageType } from '../types/chat';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

const INITIAL_QUESTIONS = [
  "What are Anu's main technical skills?",
  "Tell me about Anu's IoT plant care system project",
  "What experience does Anu have with AWS?",
  "What's Anu's approach to software development?",
  "What kind of role is Anu looking for?",
  "Can you highlight Anu's key achievements?"
];

const FOLLOW_UP_QUESTIONS = {
  technical: [
    "How did Anu implement real-time data processing in projects?",
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
    "What metrics did Anu use to measure success in the IoT project?",
    "How did Anu implement the AWS backend architecture?",
    "What were the key technical decisions in Anu's projects?",
    "How did Anu improve system performance?",
    "What was Anu's role in team projects?"
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

export const ChatInterface = () => {
  const searchParams = useSearchParams();
  const selectedAvatar = searchParams.get('avatar');
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const selectedEmoji = localStorage.getItem('selectedAvatar') || '🤖';
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [questionSet, setQuestionSet] = useState<'initial' | 'technical' | 'professional' | 'projects'>('initial');

  useEffect(() => {
    const avatarType = searchParams.get('avatar') || 'visitor';
    const initialMessages = {
      recruiter: "Hello! I'd be happy to tell you about Anu's professional experience, technical skills, and achievements. What would you like to know?",
      visitor: "Welcome! Feel free to explore Anu's projects and experiences. What interests you the most?",
      friend: "Hey there! I'd love to tell you about Anu's journey, interests, and what he's been working on. What would you like to know?"
    };

    const initialMessage: ChatMessageType = {
      id: uuidv4(),
      content: initialMessages[avatarType as keyof typeof initialMessages] || initialMessages.visitor,
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages([initialMessage]);
  }, [searchParams]);

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

    try {
      console.log('Sending message:', userMessage.content);
      const response = await chatService.sendMessage(userMessage.content);
      console.log('Received response:', response);
      
      const botMessage: ChatMessageType = {
        id: uuidv4(),
        content: response,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: ChatMessageType = {
        id: uuidv4(),
        content: error instanceof Error ? error.message : 'Sorry, there was an error. Please try again.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
      setShowSuggestions(true);
    }
  };

  const handleSuggestionClick = (question: string) => {
    setInput(question);
    setShowSuggestions(false);
  };

  const getCurrentQuestions = () => {
    switch (questionSet) {
      case 'initial':
        return INITIAL_QUESTIONS;
      case 'technical':
        return FOLLOW_UP_QUESTIONS.technical;
      case 'professional':
        return FOLLOW_UP_QUESTIONS.professional;
      case 'projects':
        return FOLLOW_UP_QUESTIONS.projects;
    }
  };

  return (
    <div className="h-screen max-h-screen flex flex-col p-4 md:p-8">
      <div className="flex-1 bg-gradient-to-b from-gray-900/95 to-black text-white rounded-3xl shadow-2xl overflow-hidden border border-gray-800/50 backdrop-blur-sm flex flex-col">
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 md:p-8 border-b border-gray-800/50 bg-gradient-to-r from-gray-900 to-gray-900/95"
        >
          <div className="flex items-center gap-6">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`w-14 h-14 rounded-2xl ${localStorage.getItem('selectedAvatarBg') || 'bg-blue-500'} flex items-center justify-center text-2xl shadow-lg`}
            >
              {selectedEmoji}
            </motion.div>
            <div>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              >
                Interactive Portfolio Chat
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm text-gray-400 mt-1"
              >
                Ask me anything about Anu's experience and projects
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Chat Area with Scrolling and Glass Morphism */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-md scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ChatMessage 
                  message={message} 
                  avatar={selectedEmoji}
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Enhanced Suggestions */}
          {showSuggestions && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 space-y-3"
            >
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-400 text-sm font-medium ml-1"
              >
                {questionSet === 'initial' 
                  ? "Here are some questions you can ask:"
                  : "You might also want to know:"}
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {getCurrentQuestions().map((question, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: 'rgba(75, 85, 99, 0.3)'
                    }}
                    onClick={() => handleSuggestionClick(question)}
                    className="text-left px-5 py-3 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 hover:from-gray-800 hover:to-gray-800 border border-gray-700/30 text-gray-300 hover:text-white transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl"
                  >
                    {question}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Enhanced Input Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 border-t border-gray-800/50 bg-gradient-to-r from-gray-900 to-gray-900/95"
        >
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about skills, projects, or experience..."
              className="w-full px-6 py-4 bg-gray-800/50 text-white rounded-xl border border-gray-700/30 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 pr-12 placeholder:text-gray-500"
            />
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  ⟳
                </motion.div>
              ) : (
                "↑"
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}; 