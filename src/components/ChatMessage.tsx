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
    // Split content into sections based on headers
    const sections = content.split(/(?=## )/);
    
    return sections.map((section, index) => {
      // Handle main headers (##)
      if (section.startsWith('## ')) {
        const [header, ...content] = section.split('\n');
        return (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold text-violet-300 mb-3">
              {header.replace('## ', '')}
            </h2>
            <div className="pl-4 border-l-2 border-violet-500/20">
              {formatSection(content.join('\n'))}
            </div>
          </div>
        );
      }
      return formatSection(section);
    });
  };

  const formatSection = (content: string) => {
    // Split by subheaders (###)
    const parts = content.split(/(?=### )/);
    
    return parts.map((part, index) => {
      if (part.startsWith('### ')) {
        const [subheader, ...content] = part.split('\n');
        return (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-medium text-violet-200 mb-2">
              {subheader.replace('### ', '')}
            </h3>
            <div className="pl-4">
              {formatContent(content.join('\n'))}
            </div>
          </div>
        );
      }
      return formatContent(part);
    });
  };

  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      // Handle bullet points
      if (line.trim().startsWith('* ')) {
        return (
          <div key={index} className="flex items-start gap-2 my-1.5">
            <span className="text-violet-400 mt-1">•</span>
            <span>{line.substring(2)}</span>
          </div>
        );
      }
      // Handle numbered lists
      if (/^\d+\. /.test(line.trim())) {
        const [num, ...text] = line.trim().split('. ');
        return (
          <div key={index} className="flex items-start gap-2 my-1.5">
            <span className="text-violet-400 min-w-[20px]">{num}.</span>
            <span>{text.join('. ')}</span>
          </div>
        );
      }
      // Regular text
      return line.trim() && <p key={index} className="my-1.5">{line}</p>;
    });
  };

  const messageStyles = {
    container: "px-6 py-4 rounded-2xl max-w-[85%] space-y-4",
    header: "text-xl font-semibold text-violet-300 mb-3",
    subheader: "text-lg font-medium text-violet-200 mb-2",
    bulletPoint: "flex items-start gap-2 my-1.5 text-gray-200",
    numberedList: "flex items-start gap-2 my-1.5 text-gray-200",
    table: "min-w-full divide-y divide-gray-700 my-4",
    tableHeader: "px-4 py-2 text-left text-violet-300 font-medium",
    tableCell: "px-4 py-2 text-gray-300",
    codeBlock: "bg-gray-800/50 rounded-lg p-4 font-mono text-sm my-4"
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-start gap-4 mb-6 ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      {isBot && (
        <div className={`w-10 h-10 rounded-xl ${avatarBg} flex items-center justify-center text-xl shrink-0`}>
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
        <div className="text-[15px] leading-relaxed text-white">
          {formatMessage(message.content)}
        </div>
        <div className={`text-[11px] mt-3 ${isBot ? 'text-gray-500' : 'text-white/70'}`}>
          {new Date(message.timestamp).toLocaleTimeString()}
        </div>
      </motion.div>
    </motion.div>
  );
}; 