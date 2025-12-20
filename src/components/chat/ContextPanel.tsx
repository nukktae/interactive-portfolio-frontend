"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { ProjectKnowledge } from '@/types/knowledge';

interface ContextPanelProps {
  project?: ProjectKnowledge | null;
  viewType?: 'overview' | 'ui' | 'architecture' | 'code' | 'metrics' | 'deep-dive';
  isVisible: boolean;
}

export const ContextPanel = ({ project, viewType, isVisible }: ContextPanelProps) => {
  if (!isVisible || !project) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex-1 bg-gray-50 border-l border-gray-200 overflow-y-auto"
        >
          <div className="px-4 py-6 space-y-4">
            {/* Visual Content */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div className="space-y-4">
                {project.screenshots.slice(0, 3).map((screenshot, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.2 }}
                    className="relative w-full aspect-video bg-white rounded-lg overflow-hidden border border-gray-200"
                  >
                    <img
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            )}

            {/* One-line context label */}
            <div className="pt-2 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 mb-1">{project.title}</h3>
              <p className="text-xs text-gray-600">{project.problem}</p>
            </div>

            {/* Supporting info (only if needed) */}
            {viewType === 'metrics' && project.impact.metrics.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-medium text-gray-700 uppercase tracking-wide">Impact</h4>
                <ul className="space-y-1">
                  {project.impact.metrics.slice(0, 3).map((metric, index) => (
                    <li key={index} className="text-sm text-gray-600">• {metric}</li>
                  ))}
                </ul>
              </div>
            )}

            {viewType === 'architecture' && (
              <div className="space-y-2">
                <h4 className="text-xs font-medium text-gray-700 uppercase tracking-wide">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 6).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-white border border-gray-200 rounded text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

