"use client";

import type { ChatMessage as ChatMessageType } from '../types/chat';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { RiRobot2Line } from 'react-icons/ri';

interface ChatMessageProps {
  message: ChatMessageType;
  avatarBg: string;
}

export const ChatMessage = ({ message, avatarBg }: ChatMessageProps) => {
  const isBot = message.sender === 'bot';
  const textColor = isBot ? 'text-gray-900' : 'text-white';
  const textColorLight = isBot ? 'text-gray-700' : 'text-white';
  const textColorHeader = isBot ? 'text-gray-900' : 'text-white';
  const textColorSubheader = isBot ? 'text-gray-800' : 'text-white';
  const borderColor = isBot ? 'border-gray-200' : 'border-gray-700';
  
  const formatMessage = (content: string) => {
    // Split content into sections based on headers
    const sections = content.split(/(?=## )/);
    
    return sections.map((section, index) => {
      // Handle main headers (##)
      if (section.startsWith('## ')) {
        const [header, ...content] = section.split('\n');
        return (
          <div key={index} className="mb-4">
            <h2 className={`text-xl font-bold ${textColorHeader} mb-3`}>
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
            <h3 className={`text-base font-semibold ${textColorSubheader} mb-2`}>
              {subheader.replace('### ', '')}
            </h3>
            <div className={`pl-3 border-l-2 ${borderColor}`}>
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
            <p className={`my-1.5 ${textColorLight}`} dangerouslySetInnerHTML={{ __html: formattedLine }} />
            <Link 
              href={`/projects/${projectSlug}`}
              className={`inline-flex items-center gap-2 px-3 py-1.5 mt-2 ${isBot ? 'bg-black text-white hover:bg-yellow-400 hover:text-black' : 'bg-white text-black hover:bg-yellow-400 hover:text-black'} rounded-md text-xs font-medium transition-all duration-300`}
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
            <span className={`w-1.5 h-1.5 ${isBot ? 'bg-yellow-400' : 'bg-yellow-400'} rounded-full mt-2 flex-shrink-0`}></span>
            <span className={textColorLight} dangerouslySetInnerHTML={{ __html: formattedLine.substring(2) }} />
          </div>
        );
      }
      
      if (isNumberedListItem) {
        const [num, ...text] = line.trim().split('. ');
        return (
          <div key={index} className="flex items-start gap-2 my-1.5">
            <span className={`${textColorHeader} font-medium min-w-[20px]`}>{num}.</span>
            <span className={textColorLight} dangerouslySetInnerHTML={{ __html: text.join('. ') }} />
          </div>
        );
      }
      
      return line.trim() && (
        <p key={index} className={`my-1.5 ${textColorLight}`} dangerouslySetInnerHTML={{ __html: formattedLine }} />
      );
    });
  };

  return (
    <div 
      className={`flex items-start gap-2.5 ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      {isBot && (
        <div className={`w-6 h-6 rounded-full ${avatarBg} flex items-center justify-center flex-shrink-0`}>
          <RiRobot2Line className="w-3.5 h-3.5 text-white" />
        </div>
      )}
      
      <div
        className={`px-3 py-2 rounded-lg max-w-[80%] ${
          isBot 
            ? 'bg-gray-50' 
            : 'bg-black'
        }`}
      >
        <div className={`text-sm leading-relaxed ${isBot ? 'text-gray-900' : 'text-white'}`}>
          {formatMessage(message.content)}
        </div>
      </div>
      
      {!isBot && (
        <div className={`w-6 h-6 rounded-full ${avatarBg} flex items-center justify-center flex-shrink-0`}>
          <FiUser className="w-3.5 h-3.5 text-black" />
        </div>
      )}
    </div>
  );
}; 