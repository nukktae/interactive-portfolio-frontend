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
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              {header.replace('## ', '')}
            </h2>
            <div className="pl-4 border-l-2 border-[#498FD8]/20">
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
            <h3 className="text-lg font-medium text-gray-700 mb-2">
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

  const formatContent = (content: string) => {
    let lastProjectSlug: string | null = null;
    
    return content.split('\n').map((line, index) => {
      // Check if this is a numbered list item with a project name
      const projectSlug = getProjectSlug(line);
      const isNumberedListItem = /^\d+\.\s/.test(line);
      
      // Handle bold text formatting by replacing **text** with proper styling
      const formattedLine = line.replace(
        /\*\*(.*?)\*\*/g,
        '<span class="font-bold">$1</span>'
      );
      
      if (projectSlug && projectSlug !== lastProjectSlug) {
        lastProjectSlug = projectSlug;
        return (
          <div key={index} className="my-4">
            <p className="my-1.5" dangerouslySetInnerHTML={{ __html: formattedLine }} />
            <Link 
              href={`/projects/${projectSlug}`}
              className="inline-flex items-center gap-2 px-4 py-2 mt-2 bg-violet-500/20 hover:bg-violet-500/30 rounded-full text-sm text-violet-300 transition-all"
            >
              <span>View Project Details</span>
              <FaExternalLinkAlt className="w-3 h-3" />
            </Link>
          </div>
        );
      }

      // Regular formatting for other lines
      if (line.trim().startsWith('* ')) {
        return (
          <div key={index} className="flex items-start gap-2 my-1.5">
            <span className="text-violet-400 mt-1">•</span>
            <span dangerouslySetInnerHTML={{ __html: formattedLine.substring(2) }} />
          </div>
        );
      }
      
      if (isNumberedListItem) {
        const [num, ...text] = line.trim().split('. ');
        return (
          <div key={index} className="flex items-start gap-2 my-1.5">
            <span className="text-violet-400 min-w-[20px]">{num}.</span>
            <span dangerouslySetInnerHTML={{ __html: text.join('. ') }} />
          </div>
        );
      }
      
      return line.trim() && (
        <p key={index} className="my-1.5" dangerouslySetInnerHTML={{ __html: formattedLine }} />
      );
    });
  };

  const messageStyles = {
    container: "px-6 py-4 rounded-2xl max-w-[95%] space-y-4",
    header: "text-2xl font-bold bg-gradient-to-r from-[#498FD8] to-[#D86089] bg-clip-text text-transparent mb-3",
    subheader: "text-lg font-medium text-gray-700 mb-2",
    bulletPoint: "flex items-start gap-2 my-2 text-gray-700",
    numberedList: "flex items-start gap-2 my-2 text-gray-700",
    table: "min-w-full divide-y divide-[#498FD8]/20 my-4",
    tableHeader: "px-4 py-2 text-left font-medium bg-gradient-to-r from-[#498FD8] to-[#D86089] bg-clip-text text-transparent",
    tableCell: "px-4 py-2 text-gray-700",
    codeBlock: "bg-white/80 rounded-xl p-4 font-mono text-sm text-gray-700 my-4 border border-[#498FD8]/10"
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-start gap-4 mb-6 ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className={`px-6 py-4 rounded-2xl max-w-[95%] ${
          isBot 
            ? 'bg-white/90 backdrop-blur-sm border border-[#498FD8]/10 shadow-sm' 
            : 'bg-gradient-to-r from-[#498FD8] to-[#D86089] text-white shadow-md'
        }`}
      >
        <div className={`text-sm leading-relaxed ${isBot ? 'text-gray-700' : 'text-white'}`}>
          {formatMessage(message.content)}
        </div>
        <div className={`text-[10px] mt-2 ${isBot ? 'text-gray-400' : 'text-white/70'}`}>
          {new Date(message.timestamp).toLocaleTimeString()}
        </div>
      </motion.div>
    </motion.div>
  );
}; 