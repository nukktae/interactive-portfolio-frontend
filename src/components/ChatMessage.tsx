"use client";

import type { ChatMessage as ChatMessageType } from '../types/chat';
import { motion } from 'framer-motion';

interface ChatMessageProps {
  message: ChatMessageType;
  avatar: string;
  avatarBg: string;
}

export const ChatMessage = ({ message, avatar, avatarBg }: ChatMessageProps) => {
  const isBot = message.sender === 'bot';
  
  const formatMessage = (content: string) => {
    // Split by bullet points or numbered lists
    const sections = content.split(/(?=- |\d+\. )/);
    
    return sections.map((section, index) => {
      if (section.trim().startsWith('- ')) {
        // Bullet point formatting
        return (
          <div key={index} className="flex items-start gap-2 my-2">
            <span className="text-gray-400 mt-1">•</span>
            <span>{section.substring(2)}</span>
          </div>
        );
      } else if (/^\d+\. /.test(section.trim())) {
        // Numbered list formatting
        return (
          <div key={index} className="flex items-start gap-2 my-2">
            <span className="text-gray-400 min-w-[20px]">{section.match(/^\d+/)?.[0]}.</span>
            <span>{section.replace(/^\d+\. /, '')}</span>
          </div>
        );
      } else if (section.includes(':')) {
        // Section with heading
        const [heading, ...content] = section.split(':');
        return (
          <div key={index} className="my-3">
            <div className="text-gray-300 font-medium mb-1">{heading.trim()}:</div>
            <div className="pl-3 text-gray-100">{content.join(':').trim()}</div>
          </div>
        );
      }
      // Regular text
      return <p key={index} className="my-2">{section.trim()}</p>;
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-start gap-4 mb-6 ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      {isBot && (
        <div className={`w-10 h-10 rounded-xl ${avatarBg} flex items-center justify-center text-xl shrink-0 shadow-lg`}>
          {avatar}
        </div>
      )}
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className={`px-6 py-4 rounded-2xl max-w-[85%] ${
          isBot 
            ? 'bg-gradient-to-r from-gray-800/80 to-gray-800/50 backdrop-blur-sm border border-gray-700/30' 
            : `${avatarBg} shadow-lg`
        }`}
      >
        <div className="text-[15px] leading-relaxed text-white space-y-1">
          {formatMessage(message.content)}
        </div>
        <div 
          className={`text-[11px] mt-3 ${
            isBot ? 'text-gray-500' : 'text-white/70'
          }`}
        >
          {new Date(message.timestamp).toLocaleTimeString()}
        </div>
      </motion.div>
    </motion.div>
  );
}; 