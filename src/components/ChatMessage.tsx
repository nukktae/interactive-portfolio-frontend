"use client";

import type { ChatMessage as ChatMessageType } from '../types/chat';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

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
          <div key={index} className="mb-4">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {header.replace('## ', '')}
            </h2>
            <div className="space-y-2">
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
          <div key={index} className="mb-3">
            <h3 className="text-base font-semibold text-gray-800 mb-2">
              {subheader.replace('### ', '')}
            </h3>
            <div className="pl-3 border-l-2 border-gray-200">
              {formatContent(content.join('\n'))}
            </div>
          </div>
        );
      }
      return formatContent(part);
    });
  };

  const getProjectSlug = (line: string): string | null => {
    // Remove any markdown formatting and check the content
    const cleanText = line.replace(/[*_]/g, '').trim();
    
    if (cleanText.includes('IoT-Based Plant Care System') || 
        cleanText.includes('Rootin')) {
      return 'rootin';
    }
    if (cleanText.includes('LLM-Powered Recipe Generator') || 
        cleanText.includes('Recipe Generator')) {
      return 'llm-recipe-generator';
    }
    if (cleanText.includes('Real-Time Content Moderation System') || 
        cleanText.includes('Content Moderation')) {
      return 'aws-content-moderation-system';
    }
    return null;
  };

  let lastProjectSlug = '';
  
  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      // Check if this is a numbered list item with a project name
      const projectSlug = getProjectSlug(line);
      const isNumberedListItem = /^\d+\.\s/.test(line);
      
      // Handle bold text formatting by replacing **text** with proper styling
      const formattedLine = line.replace(
        /\*\*(.*?)\*\*/g,
        '<span class="font-semibold">$1</span>'
      );
      
      if (projectSlug && projectSlug !== lastProjectSlug) {
        lastProjectSlug = projectSlug;
        return (
          <div key={index} className="my-3">
            <p className="my-1.5 text-gray-700" dangerouslySetInnerHTML={{ __html: formattedLine }} />
            <Link 
              href={`/projects/${projectSlug}`}
              className="inline-flex items-center gap-2 px-3 py-1.5 mt-2 bg-black text-white hover:bg-yellow-400 hover:text-black rounded-md text-xs font-medium transition-all duration-300"
            >
              <span>View Details</span>
              <FaExternalLinkAlt className="w-3 h-3" />
            </Link>
          </div>
        );
      }

      // Regular formatting for other lines
      if (line.trim().startsWith('* ')) {
        return (
          <div key={index} className="flex items-start gap-2 my-1.5">
            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
            <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: formattedLine.substring(2) }} />
          </div>
        );
      }
      
      if (isNumberedListItem) {
        const [num, ...text] = line.trim().split('. ');
        return (
          <div key={index} className="flex items-start gap-2 my-1.5">
            <span className="text-gray-900 font-medium min-w-[20px]">{num}.</span>
            <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: text.join('. ') }} />
          </div>
        );
      }
      
      return line.trim() && (
        <p key={index} className="my-1.5 text-gray-700" dangerouslySetInnerHTML={{ __html: formattedLine }} />
      );
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-start gap-3 mb-6 ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      {isBot && (
        <div className={`w-8 h-8 rounded-full ${avatarBg} flex items-center justify-center flex-shrink-0`}>
          <span className="text-white text-xs font-bold">{avatar}</span>
        </div>
      )}
      
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className={`px-4 py-3 rounded-lg max-w-[85%] ${
          isBot 
            ? 'bg-white border border-gray-200 shadow-sm' 
            : 'bg-black text-white shadow-sm'
        }`}
      >
        <div className={`text-sm leading-relaxed ${isBot ? 'text-gray-700' : 'text-white'}`}>
          {formatMessage(message.content)}
        </div>
        <div className={`text-[10px] mt-2 ${isBot ? 'text-gray-400' : 'text-white/70'}`}>
          {new Date(message.timestamp).toLocaleTimeString()}
        </div>
      </motion.div>
      
      {!isBot && (
        <div className={`w-8 h-8 rounded-full ${avatarBg} flex items-center justify-center flex-shrink-0`}>
          <span className="text-black text-xs font-bold">{avatar}</span>
        </div>
      )}
    </motion.div>
  );
}; 