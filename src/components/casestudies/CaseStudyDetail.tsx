"use client";

import { motion } from 'framer-motion';
import { CaseStudyContent } from '@/content/casestudies';

interface CaseStudyDetailProps {
  content: CaseStudyContent;
}

// Consistent animation configuration for all sections
const sectionAnimation = {
  initial: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px" },
  transition: {
    duration: 0.4,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  },
};

export default function CaseStudyDetail({ content }: CaseStudyDetailProps) {
  const renderSection = (section: CaseStudyContent['sections'][0]) => {
    switch (section.type) {
      case 'overview':
        return (
          <motion.section 
            id={section.id} 
            className="relative z-10 scroll-mt-24"
            {...sectionAnimation}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-8 scroll-mt-24 relative z-20 text-foreground">
              {section.title || 'Overview'}
            </h2>
            <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
              {typeof section.content === 'string' ? <p>{section.content}</p> : section.content}
            </div>
          </motion.section>
        );

      case 'problem':
        return (
          <motion.section 
            id={section.id} 
            className="relative z-10 scroll-mt-24"
            {...sectionAnimation}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-8 scroll-mt-24 relative z-20 text-foreground">
              {section.title || 'Problem'}
            </h2>
            <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
              {typeof section.content === 'string' ? <p>{section.content}</p> : section.content}
            </div>
          </motion.section>
        );

      case 'solution':
        return (
          <motion.section 
            id={section.id} 
            className="relative z-10 scroll-mt-24"
            {...sectionAnimation}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-8 scroll-mt-24 relative z-20 text-foreground">
              {section.title || 'Solution'}
            </h2>
            <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
              {typeof section.content === 'string' ? <p>{section.content}</p> : section.content}
            </div>
          </motion.section>
        );

      case 'process':
        return (
          <motion.section 
            id={section.id} 
            className="relative z-10 scroll-mt-24"
            {...sectionAnimation}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-8 scroll-mt-24 relative z-20 text-foreground">
              {section.title || 'Process'}
            </h2>
            <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
              {typeof section.content === 'string' ? <p>{section.content}</p> : section.content}
            </div>
          </motion.section>
        );

      case 'results':
        return (
          <motion.section 
            id={section.id} 
            className="relative z-10 scroll-mt-24"
            {...sectionAnimation}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-8 scroll-mt-24 relative z-20 text-foreground">
              {section.title || 'Results'}
            </h2>
            <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
              {typeof section.content === 'string' ? <p>{section.content}</p> : section.content}
            </div>
          </motion.section>
        );

      case 'learnings':
        return (
          <motion.section 
            id={section.id} 
            className="relative z-10 scroll-mt-24"
            {...sectionAnimation}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-8 scroll-mt-24 relative z-20 text-foreground">
              {section.title || 'Learnings'}
            </h2>
            <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
              {typeof section.content === 'string' ? <p>{section.content}</p> : section.content}
            </div>
          </motion.section>
        );

      case 'custom':
        return (
          <motion.section 
            id={section.id} 
            className="relative z-10 scroll-mt-24"
            {...sectionAnimation}
          >
            {section.title && (
              <h2 className="text-3xl md:text-4xl font-black mb-8 scroll-mt-24 relative z-20 text-foreground">
                {section.title}
              </h2>
            )}
            {typeof section.content === 'string' ? (
              <div className="text-foreground/80 text-lg leading-relaxed">{section.content}</div>
            ) : (
              section.content
            )}
          </motion.section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-24">
      {content.sections.map((section) => (
        <div key={section.id}>{renderSection(section)}</div>
      ))}
    </div>
  );
}
