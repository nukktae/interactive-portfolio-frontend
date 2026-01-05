"use client";

import type { ChatMessage as ChatMessageType } from '@/types/chat';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { RiRobot2Line } from 'react-icons/ri';
import { projectSummaries } from '@/data/projectSummaries';
import { generateSlug } from '@/content/projects';

interface ChatMessageProps {
  message: ChatMessageType;
  avatarBg: string;
}

export const ChatMessage = ({ message, avatarBg }: ChatMessageProps) => {
  const isBot = message.sender === 'bot';
  
  // Premium styling: no hard borders, linear comment thread style
  const textColor = isBot ? 'text-gray-900' : 'text-gray-900';
  const textColorLight = isBot ? 'text-gray-700' : 'text-gray-700';
  const textColorHeader = isBot ? 'text-gray-900' : 'text-gray-900';
  const textColorSubheader = isBot ? 'text-gray-800' : 'text-gray-800';
  const borderColor = isBot ? 'border-gray-200' : 'border-gray-300';
  
  // Comprehensive HTML and markdown processor
  const processHtmlAndMarkdown = (text: string): string => {
    if (!text) return text;
    
    // First decode HTML entities
    let processed = text
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, ' ');
    
    // Process markdown first (before HTML tags)
    // Bold markdown **text**
    processed = processed.replace(/\*\*([^*]+?)\*\*/g, '<strong>$1</strong>');
    // Italic markdown *text* (not part of **)
    processed = processed.replace(/(?<!\*)\*([^*\s][^*]*?[^*\s]|[^*\s])\*(?!\*)/g, '<em>$1</em>');
    // Code markdown `code`
    processed = processed.replace(/`([^`]+?)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs font-mono">$1</code>');
    // Strikethrough markdown ~~text~~
    processed = processed.replace(/~~([^~]+?)~~/g, '<del>$1</del>');
    
    // If the text already contains HTML tags, preserve them
    // This allows both markdown and HTML to work together
    // HTML tags are already in the string, so we just need to ensure they're not escaped
    
    return processed;
  };
  
  const formatMessage = (content: string) => {
    // Split content into sections based on headers
    const sections = content.split(/(?=## )/);
    
    return sections.map((section, index) => {
      // Handle main headers (##)
      if (section.startsWith('## ')) {
        const [header, ...content] = section.split('\n');
        const headerText = header.replace('## ', '').trim();
        return (
          <div key={index} className="mb-4">
            <h2 
              className={`text-lg font-semibold ${textColorHeader} mb-2`} 
              style={{ lineHeight: '1.5' }}
              dangerouslySetInnerHTML={{ __html: processHtmlAndMarkdown(headerText) }}
            />
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
        const subheaderText = subheader.replace('### ', '').trim();
        return (
          <div key={index} className="mb-3">
            <h3 
              className={`text-sm font-medium ${textColorSubheader} mb-1.5`} 
              style={{ lineHeight: '1.5' }}
              dangerouslySetInnerHTML={{ __html: processHtmlAndMarkdown(subheaderText) }}
            />
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
    // Remove markdown and HTML formatting to get clean text
    const cleanText = line
      .replace(/[*_`~]/g, '') // Remove markdown chars
      .replace(/<[^>]+>/g, '') // Remove HTML tags
      .replace(/&[^;]+;/g, '') // Remove HTML entities
      .trim();
    
    // Check if the line contains any project title from projectSummaries
    // Use a more lenient matching approach
    for (const project of projectSummaries) {
      const title = project.title;
      const titleLower = title.toLowerCase();
      const cleanTextLower = cleanText.toLowerCase();
      
      // Check for exact match, partial match, or if title is contained in text
      if (cleanTextLower === titleLower || 
          cleanTextLower.includes(titleLower) || 
          titleLower.includes(cleanTextLower) ||
          // Also check for slug match
          cleanTextLower.includes(generateSlug(title).toLowerCase())) {
        return generateSlug(title);
      }
    }
    
    return null;
  };

  let lastProjectSlug = '';
  let projectSlugsInMessage = new Set<string>();
  
  const formatContent = (content: string) => {
    // Reset project tracking for new content
    projectSlugsInMessage.clear();
    lastProjectSlug = '';
    
    return content.split('\n').map((line, index) => {
      const isNumberedListItem = /^\d+\.\s/.test(line);
      const isBulletListItem = line.trim().startsWith('* ') || line.trim().startsWith('- ');
      
      // Process HTML and markdown
      const formattedLine = processHtmlAndMarkdown(line);
      
      // Check for project (use original line for better matching)
      const projectSlug = getProjectSlug(line);
      
      // Show View Details button if project is detected and not already shown
      if (projectSlug && !projectSlugsInMessage.has(projectSlug)) {
        projectSlugsInMessage.add(projectSlug);
        lastProjectSlug = projectSlug;
        
        // Extract text content for display (remove markdown/HTML for the paragraph)
        const displayText = line
          .replace(/^\d+\.\s*/, '') // Remove number prefix
          .replace(/^[*\-]\s*/, '') // Remove bullet prefix
          .trim();
        
        return (
          <div key={index} className="my-3">
            <p className={`my-1.5 ${textColorLight}`} dangerouslySetInnerHTML={{ __html: processHtmlAndMarkdown(displayText) }} />
            <Link 
              href={`/projects/${projectSlug}`}
              className={`inline-flex items-center gap-2 px-3 py-1.5 mt-2 ${isBot ? 'bg-black text-white hover:bg-gray-800 border border-black' : 'bg-white text-black hover:bg-gray-100 border border-gray-300'} rounded-md text-xs font-medium transition-all duration-300`}
            >
              <span>View Details</span>
              <FaExternalLinkAlt className="w-3 h-3" />
            </Link>
          </div>
        );
      }

      // Bullet list items
      if (isBulletListItem) {
        const bulletText = line.replace(/^[*\-]\s*/, '').trim();
        return (
          <div key={index} className="flex items-start gap-2 my-1.5">
            <span className={`w-1.5 h-1.5 ${isBot ? 'bg-gray-600' : 'bg-gray-400'} rounded-full mt-2 flex-shrink-0`}></span>
            <span className={textColorLight} dangerouslySetInnerHTML={{ __html: processHtmlAndMarkdown(bulletText) }} />
          </div>
        );
      }
      
      // Numbered list items
      if (isNumberedListItem) {
        const [num, ...textParts] = line.trim().split(/\.\s+/);
        const text = textParts.join('. ');
        return (
          <div key={index} className="flex items-start gap-2 my-1.5">
            <span className={`${textColorHeader} font-medium min-w-[20px]`}>{num}.</span>
            <span className={textColorLight} dangerouslySetInnerHTML={{ __html: processHtmlAndMarkdown(text) }} />
          </div>
        );
      }
      
      // Regular lines - render with all HTML support
      if (line.trim()) {
        return (
          <p key={index} className={`my-1.5 ${textColorLight}`} dangerouslySetInnerHTML={{ __html: formattedLine }} />
        );
      }
      
      return null;
    }).filter(Boolean);
  };

  return (
    <div 
      className={`flex items-start gap-3 ${isBot ? 'justify-start' : 'justify-end'} w-full`}
    >
      {isBot && (
        <div className="w-4 h-4 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-0.5">
          <RiRobot2Line className="w-2.5 h-2.5 text-white" />
        </div>
      )}
      
      {/* Premium: No bubbles, no borders, just text on white */}
      <div
        className={`flex-1 min-w-0 ${isBot ? '' : 'text-right'}`}
      >
        <div 
          className={`text-sm ${isBot ? 'text-gray-900' : 'text-gray-700'}`} 
          style={{ 
            lineHeight: '1.65',
            fontWeight: isBot ? '400' : '400',
            fontSize: isBot ? '14px' : '13px',
            maxWidth: '100%'
          }}
        >
          {formatMessage(message.content)}
        </div>
      </div>
      
      {!isBot && (
        <div className="w-4 h-4 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0 mt-0.5">
          <FiUser className="w-2.5 h-2.5 text-white" />
        </div>
      )}
    </div>
  );
}; 