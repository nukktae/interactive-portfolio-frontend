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
            <h2 className="text-2xl font-bold text-white mb-3">
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

  const AIIndicator = () => {
    return (
      <div className="flex items-center gap-1">
        <motion.div
          className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-400 to-violet-600"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-600"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 1.5,
            delay: 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="w-2 h-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-fuchsia-600"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 1.5,
            delay: 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-start gap-4 mb-6 ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      {isBot && (
        <div className="flex flex-col items-center gap-2">
          <AIIndicator />
        </div>
      )}
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className={`px-6 py-4 rounded-2xl max-w-[85%] ${
          isBot 
            ? 'bg-gradient-to-r from-gray-800/80 to-gray-800/50 backdrop-blur-sm border border-gray-700/30' 
            : 'bg-gradient-to-r from-violet-500 to-purple-600 shadow-lg'
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