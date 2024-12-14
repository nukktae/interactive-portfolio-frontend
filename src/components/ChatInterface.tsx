"use client";

import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { motion, AnimatePresence } from 'framer-motion';
import { chatService } from '../services/api';
import { ChatMessage } from './ChatMessage';
import type { ChatMessage as ChatMessageType } from '../types/chat';

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
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [selectedEmoji, setSelectedEmoji] = useState('🤖');
  const [selectedBg, setSelectedBg] = useState('bg-blue-500');
  const [storedPrompt, setStoredPrompt] = useState('');
  
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
    }
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm">
      <motion.div 
        className="flex items-center gap-4 p-6 border-b border-gray-800/50 backdrop-blur-md"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.div 
          className={`w-12 h-12 ${selectedBg} rounded-2xl flex items-center justify-center text-2xl`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          {selectedEmoji}
        </motion.div>
        <div>
          <h1 className="text-xl font-semibold text-white">Interactive Portfolio Chat</h1>
          <p className="text-sm text-gray-400">Ask me anything about Anu's experience</p>
        </div>
      </motion.div>

      <div className="flex-1 overflow-y-auto p-6">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: index * 0.1 }}
            >
              <ChatMessage 
                message={message} 
                avatar={selectedEmoji}
                avatarBg={selectedBg}
              />
            </motion.div>
          ))}
        </AnimatePresence>

        {showSuggestions && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {INITIAL_QUESTIONS.map((question, index) => (
              <motion.button
                key={index}
                className="p-4 text-left rounded-xl bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700/30 text-gray-300"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: 'rgba(75, 85, 99, 0.4)',
                  transition: { type: "spring", stiffness: 400 }
                }}
                onClick={() => {
                  setInput(question);
                  setShowSuggestions(false);
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

      <motion.form 
        onSubmit={handleSubmit}
        className="p-6 border-t border-gray-800/50 backdrop-blur-md"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything..."
            className="w-full px-6 py-4 bg-gray-800/30 rounded-xl border border-gray-700/30 text-white focus:ring-2 focus:ring-purple-500/20 transition-all"
          />
          <motion.button
            type="submit"
            disabled={loading}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? "⟳" : "↑"}
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
}; 