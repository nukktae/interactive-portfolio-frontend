"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, animate, useInView, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import { Project } from '@/types/project';
import { ProjectDetailContent } from '@/types/projectDetail';
import { Github, ExternalLink, Figma, FileText, Award, BarChart3, Mail, Users, Layers, Database, Zap, Shield, Sparkles, Activity, Lock, Palette, AlertCircle, MessageSquareOff, EyeOff, RefreshCcw, TrendingDown, ArrowRight, Layout, Server, Plug, Plus, Minus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectDetailProps {
  project: Project;
  content: ProjectDetailContent;
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

const AnimatedNumber = ({ value, duration = 0.8 }: { value: number; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsub = motionValue.on('change', (v) => setDisplayValue(Number(v.toFixed(0))));
    return () => unsub();
  }, [motionValue]);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration,
        ease: [0.22, 1, 0.36, 1],
      });
      return () => controls.stop();
    }
  }, [isInView, motionValue, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
    </span>
  );
};

const renderMetric = (metric: string) => {
  const match = metric.match(/(-?\\d+(?:\\.\\d+)?)/);

  if (!match || match.index === undefined) {
    return metric;
  }

  const numericValue = parseFloat(match[1]);
  const prefix = metric.slice(0, match.index);
  const suffix = metric.slice(match.index + match[1].length);

  return (
    <>
      {prefix}
      <AnimatedNumber value={numericValue} />
      {suffix}
    </>
  );
};

export default function ProjectDetail({ project, content }: ProjectDetailProps) {
  const { t } = useLanguage();
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [expandedFeatureGroups, setExpandedFeatureGroups] = useState<Record<string, boolean>>({});
  const [expandedLearnings, setExpandedLearnings] = useState<Record<string, boolean>>({});
  const [allFeaturesExpanded, setAllFeaturesExpanded] = useState<boolean>(false);

  const toggleCategory = (key: string) => {
    setExpandedCategories((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const SectionTitle = ({ children, id }: { children: React.ReactNode; id: string }) => (
    <h2
      id={id}
      className="text-3xl md:text-4xl font-black mb-8 scroll-mt-24 relative z-20"
      style={{ 
        color: 'var(--foreground)',
        opacity: 1,
        visibility: 'visible',
        display: 'block'
      }}
    >
      {children}
    </h2>
  );

  const renderSection = (section: ProjectDetailContent['sections'][0]) => {
    switch (section.type) {
      case 'overview':
        return (
          <motion.section 
            id={section.id} 
            className="relative z-10 scroll-mt-24"
            {...sectionAnimation}
          >
            <SectionTitle id={section.id}>Overview</SectionTitle>
            <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
              {typeof section.content === 'string' ? <p>{section.content}</p> : section.content}
            </div>
          </motion.section>
        );

      case 'role':
        return (
          <motion.section 
            id={section.id} 
            className="relative z-10 scroll-mt-24 overflow-hidden"
            {...sectionAnimation}
          >
            <SectionTitle id={section.id}>My Role</SectionTitle>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10">
              {section.roles.map((role, index) => {
                const IconComponent = role.icon || Award;
                return (
                  <motion.div
                    key={role.title}
                    {...sectionAnimation}
                    transition={{
                      ...sectionAnimation.transition,
                      delay: index * 0.1,
                    }}
                    className="relative overflow-hidden rounded-2xl bg-card/20 dark:bg-card/30 p-6 md:p-7 shadow-[0_18px_50px_-32px_rgba(15,23,42,0.35)] dark:shadow-[0_18px_50px_-32px_rgba(0,0,0,0.5)] backdrop-blur"
                  >
                    <span className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-indigo-500 via-blue-500 to-sky-400" />
                    <div className="flex items-center gap-3 mb-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 shadow-inner">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.18em] text-foreground/60">My Role</p>
                        <h3 className="text-xl font-semibold text-foreground leading-tight">{role.title}</h3>
                        {role.subtitle && <p className="text-sm text-foreground/70">{role.subtitle}</p>}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-foreground">Responsibilities</p>
                        <ul className="space-y-2 text-foreground/80">
                          {role.responsibilities.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-foreground">Impact Highlights</p>
                        <ul className="space-y-2 text-foreground/80">
                          {role.impacts.map((impact) => (
                            <li key={impact} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500/80" />
                              <span className="leading-relaxed">{impact}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        );

      case 'problem':
        return (
          <section 
            id={section.id} 
            className="relative z-10 scroll-mt-24 overflow-hidden"
            style={{ opacity: 1, visibility: 'visible' }}
          >
            <SectionTitle id={section.id}>Problem</SectionTitle>

            <div className="relative overflow-hidden rounded-2xl bg-card dark:bg-card/80 shadow-[0_4px_16px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.3)] ring-1 ring-border/50">
              <div className="absolute left-0 top-6 bottom-6 w-[5px] rounded-full bg-gradient-to-b from-blue-500 to-sky-400" />
              <div className="relative grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr] gap-8 md:gap-10 px-6 md:px-10 py-10 md:py-12">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-foreground/50">The Industry Problem</p>
                    {section.summary ? (
                      <p className="text-lg text-foreground/80 leading-relaxed">{section.summary}</p>
                    ) : typeof section.content === 'string' ? (
                      <p className="text-lg text-foreground/80 leading-relaxed">{section.content}</p>
                    ) : (
                      <div className="text-lg text-foreground/80 leading-relaxed space-y-4">{section.content}</div>
                    )}
                  </div>

                  {section.whyItMatters && (
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.18em] text-foreground/50">Why it matters</p>
                      <p className="text-base text-foreground/80 leading-relaxed font-medium">{section.whyItMatters}</p>
                    </div>
                  )}
                </div>

                {section.painPoints && section.painPoints.length > 0 && (
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-foreground/50">Pain Points</p>
                    <div className="space-y-3.5">
                      {section.painPoints.map((point, idx) => {
                        const iconSet = [AlertCircle, MessageSquareOff, EyeOff, RefreshCcw, TrendingDown];
                        const IconComponent = (point.icon as React.ElementType) || iconSet[idx % iconSet.length];
                        return (
                          <div key={idx} className="group flex items-start gap-3 rounded-xl bg-card/60 dark:bg-card/40 px-3.5 py-3 shadow-[0_1px_6px_rgba(0,0,0,0.04)] dark:shadow-[0_1px_6px_rgba(0,0,0,0.2)] ring-1 ring-border/50">
                            <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-muted dark:bg-muted/80 text-muted-foreground shadow-inner">
                              <IconComponent className="h-4 w-4" />
                            </div>
                            <div className="space-y-1">
                              {point.title && <p className="text-sm font-semibold text-foreground leading-tight">{point.title}</p>}
                              <p className="text-sm text-foreground/75 leading-snug">{point.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        );

      case 'goals':
        return (
          <motion.section 
            id={section.id} 
            className="relative z-10 scroll-mt-24"
            {...sectionAnimation}
          >
            <SectionTitle id={section.id}>Goals & Success Metrics</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.goals.map((goal, index) => {
                const IconComponent = goal.icon || Award;
                return (
                  <motion.div
                    key={index}
                    {...sectionAnimation}
                    transition={{
                      ...sectionAnimation.transition,
                      delay: index * 0.1,
                    }}
                    className="bg-card dark:bg-card/90 shadow-md dark:shadow-lg rounded-lg p-6"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-foreground">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{goal.title}</h3>
                    </div>
                    <p className="text-foreground/70">{goal.metric}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        );

      case 'research':
        return (
          <section 
            id={section.id} 
            className="relative z-10 scroll-mt-24 overflow-hidden"
            style={{ opacity: 1, visibility: 'visible' }}
          >
            <SectionTitle id={section.id}>Research</SectionTitle>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
              {section.insights.map((insight, index) => (
                <motion.div
                  key={index}
                  {...sectionAnimation}
                  transition={{
                    ...sectionAnimation.transition,
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-2xl bg-card dark:bg-card/80 shadow-[0_4px_16px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.3)] ring-1 ring-border/50 px-9 py-8"
                  style={{ maxWidth: '420px' }}
                >
                  <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-[#3B82F6]" />
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-foreground/55">User Research</p>
                      <h3 className="text-xl font-semibold text-foreground leading-tight">{insight.title}</h3>
                    </div>
                    <div className="h-px bg-foreground/5" />
                    <ul className="space-y-2.5 text-foreground/80">
                      {insight.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2.5 leading-relaxed">
                          <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-foreground/[0.05] text-foreground/60">
                            <ArrowRight className="h-3.5 w-3.5" />
                          </span>
                          <span className="text-[15px] leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        );

      case 'architecture':
        return (
          <motion.section 
            id={section.id} 
            className="relative z-10 scroll-mt-24 overflow-hidden"
            {...sectionAnimation}
          >
            <SectionTitle id={section.id}>Architecture &amp; User Flows</SectionTitle>

            <div className="relative space-y-10">
              {section.items.map((item, index) => {
                if (item.features) {
                  return (
                    <motion.div
                      key={item.title}
                      {...sectionAnimation}
                      transition={{ ...sectionAnimation.transition, delay: index * 0.1 }}
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <p className="text-sm uppercase tracking-[0.18em] text-foreground/60">Architecture</p>
                        <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
                        {item.description && (
                          <p className="text-foreground/80 leading-relaxed">{item.description}</p>
                        )}
                      </div>
                      <div className="h-px bg-foreground/10" />
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {item.features.map((feature) => (
                          <div
                            key={feature}
                            className="rounded-full bg-foreground/[0.03] px-4 py-3 text-sm font-medium text-foreground/80 shadow-[0_6px_20px_-12px_rgba(15,23,42,0.4)]"
                          >
                            {feature}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                }

                if (item.userFlows) {
                  return (
                    <motion.div
                      key={item.title}
                      {...sectionAnimation}
                      transition={{ ...sectionAnimation.transition, delay: index * 0.1 }}
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <p className="text-sm uppercase tracking-[0.18em] text-foreground/60">User Flows</p>
                        <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {item.userFlows.map((flow, flowIndex) => {
                          const IconComponent = flow.icon || Award;
                          return (
                            <motion.div
                              key={flow.name}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: '-50px' }}
                              transition={{
                                duration: 0.5,
                                delay: flowIndex * 0.1,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                            className="rounded-xl bg-card/75 dark:bg-card/65 backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.2)] py-6 px-7 border border-border/60"
                            >
                              {/* Icon + Flow Title */}
                              <div className="flex items-start gap-3 mb-5">
                                <div className="relative">
                                  <div className="absolute inset-0 flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-500 blur-sm opacity-40" />
                                  <div className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-500 text-white shadow-sm">
                                    <IconComponent className="h-5 w-5" />
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <p className="text-base font-semibold text-foreground leading-tight mb-1">{flow.name}</p>
                                  {flow.description && (
                                    <p className="text-xs text-foreground/60 leading-relaxed">{flow.description}</p>
                                  )}
                                </div>
                              </div>
                              
                              {/* Horizontal Timeline */}
                              <div className="overflow-x-auto pb-2 -mx-2 px-2">
                                <div className="flex items-center gap-0 min-w-max">
                                  {flow.steps.map((step, stepIndex) => (
                                    <React.Fragment key={step}>
                                      <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                          duration: 0.3,
                                          delay: flowIndex * 0.1 + stepIndex * 0.05,
                                          ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="px-3 py-1 rounded-full bg-foreground/5 dark:bg-foreground/10 text-sm font-medium text-foreground/85 border border-border/60 dark:border-border/40 whitespace-nowrap shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]"
                                      >
                                        {step}
                                      </motion.div>
                                      {stepIndex < flow.steps.length - 1 && (
                                        <div className="h-px w-6 bg-[#D0D7FF] dark:bg-[rgba(79,70,229,0.4)] mx-2 flex-shrink-0" />
                                      )}
                                    </React.Fragment>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  );
                }

                return null;
              })}
            </div>
          </motion.section>
        );

      case 'design-system': {
        const fadeInUp = {
          hidden: { opacity: 0, y: 12 },
          visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.08 * i,
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            },
          }),
        };

        return (
          <motion.section
            id={section.id}
            className="relative z-10 scroll-mt-24 overflow-hidden"
            {...sectionAnimation}
          >
            <SectionTitle id={section.id}>Design System</SectionTitle>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              {section.items.map((item) => {
                if (item.type === 'colors' && item.content.colors) {
                  return (
                    <div key={item.title} className="space-y-4">
                      <motion.p
                        className="text-sm uppercase tracking-[0.2em] text-foreground/60"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                      >
                        Color System
                      </motion.p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {item.content.colors.map((color, colorIndex) => (
                          <motion.div
                            key={`${color.hex}-${colorIndex}`}
                            custom={colorIndex}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                            className="group space-y-2"
                          >
                            {/* Square Swatch */}
                            <div
                              className="relative w-full aspect-square rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)] border border-black/5 dark:border-white/5 transition-transform duration-300 group-hover:scale-[1.02] cursor-pointer"
                              style={{ backgroundColor: color.hex }}
                              onClick={() => {
                                // Copy hex to clipboard
                                navigator.clipboard.writeText(color.hex);
                              }}
                              title={`Click to copy ${color.hex}`}
                            >
                              {/* Check if color is light or dark for border visibility */}
                              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/5" />
                            </div>
                            {/* Label and Hex */}
                            <div className="space-y-1">
                              <p className="text-sm font-semibold text-foreground leading-tight">
                                {color.name}
                              </p>
                              <p className="text-xs text-foreground/60 font-mono">
                                {color.hex}
                              </p>
                              {color.usage && (
                                <p className="text-xs text-foreground/50 leading-tight">
                                  {color.usage}
                                </p>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  );
                }

                if (item.type === 'components' && item.content.components) {
                  return (
                    <div key={item.title} className="space-y-4">
                      <motion.p
                        className="text-sm uppercase tracking-[0.2em] text-foreground/60"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        custom={0.5}
                      >
                        Component Structure
                      </motion.p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {item.content.components.map((component, compIndex) => {
                          const IconComponent = component.icon || Award;
                          return (
                            <motion.div
                              key={component.title}
                              custom={compIndex}
                              variants={fadeInUp}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, margin: '-60px' }}
                              className="flex items-start gap-3 rounded-2xl bg-card/40 dark:bg-card/30 p-4 shadow-[0_10px_36px_-20px_rgba(59,130,246,0.6)] dark:shadow-[0_10px_36px_-20px_rgba(59,130,246,0.3)] backdrop-blur"
                            >
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 shadow-inner">
                                <IconComponent className="h-5 w-5" />
                              </div>
                              <div className="space-y-1">
                                <p className="text-base font-semibold text-foreground">{component.title}</p>
                                <p className="text-sm text-foreground/70 leading-relaxed">{component.description}</p>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </motion.section>
        );
      }

      case 'system-architecture':
        return (
          <section 
            id={section.id} 
            className="relative z-10 scroll-mt-24 overflow-hidden"
            style={{ opacity: 1, visibility: 'visible' }}
          >
            <SectionTitle id={section.id}>System Architecture</SectionTitle>
            <p className="text-sm md:text-base text-foreground/60 mb-8">Three-column architecture snapshot with expandable details.</p>

            <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-6">
              {section.categories.map((category, index) => {
                const visibleItems = expandedCategories[category.title] ? category.items : category.items.slice(0, 5);
                const showToggle = category.items.length > 5;
                const iconMap: Record<string, React.ElementType> = {
                  'Frontend': Layout,
                  'Frontend Architecture': Layout,
                  'Backend': Server,
                  'Backend & API': Server,
                  'Integrations': Plug,
                  'Services': Plug,
                };
                const IconComponent = iconMap[category.title] || category.icon || Layout;

                return (
                  <motion.div
                    key={category.title}
                    {...sectionAnimation}
                    transition={{ ...sectionAnimation.transition, delay: index * 0.06 }}
                    className="group relative overflow-hidden rounded-2xl bg-card dark:bg-card/90 shadow-[0_4px_14px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_14px_rgba(0,0,0,0.3)] ring-1 ring-border/50 px-7 py-6"
                    style={{ maxWidth: '520px' }}
                  >
                    <div className="absolute left-0 top-5 bottom-5 w-[3px] rounded-full bg-[#3B82F6]" />
                    <div className="relative space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/[0.05] text-foreground shadow-inner">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.18em] text-foreground/55">Architecture</p>
                          <h3 className="text-lg font-semibold text-foreground leading-tight">{category.title}</h3>
                        </div>
                      </div>

                      <div className="space-y-2 text-foreground/70">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/50">Key Highlights</p>
                        <ul className="space-y-1.5">
                          {visibleItems.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 leading-snug">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground/35" />
                              <span className="text-[15px] text-foreground/80">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {showToggle && (
                        <button
                          type="button"
                          onClick={() => toggleCategory(category.title)}
                          className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors inline-flex items-center gap-1"
                        >
                          {expandedCategories[category.title] ? 'Hide details' : 'View full architecture details'}
                          <ArrowRight className={`h-4 w-4 transition-transform ${expandedCategories[category.title] ? 'rotate-90' : ''}`} />
                        </button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        );

      case 'key-features':
        return (
          <motion.section
            id={section.id}
            className="relative z-10 scroll-mt-24 overflow-hidden"
            {...sectionAnimation}
          >
            <SectionTitle id={section.id}>Key Features</SectionTitle>

            {section.metrics && section.metrics.length > 0 && (
              <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {section.metrics.map((metric, index) => {
                  const MetricIcon = metric.icon || Sparkles;
                  return (
                    <motion.div
                      key={metric.title}
                      {...sectionAnimation}
                      transition={{ ...sectionAnimation.transition, delay: index * 0.05 }}
                      className="rounded-2xl bg-card/55 dark:bg-card/40 backdrop-blur shadow-[0_14px_36px_-24px_rgba(15,23,42,0.45)] dark:shadow-[0_14px_36px_-24px_rgba(0,0,0,0.5)] border border-border/50 p-4"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 shadow-inner">
                          <MetricIcon className="h-4 w-4" />
                        </div>
                        <p className="text-base font-semibold text-foreground leading-tight">{metric.title}</p>
                      </div>
                      <p className="text-sm text-foreground/75 leading-relaxed">{metric.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            )}

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10">
              {section.userFeatures && (
                <motion.div
                  {...sectionAnimation}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.18em] text-foreground/60">User Features</p>
                    <h3 className="text-2xl font-semibold text-foreground leading-tight">UI/UX Impact</h3>
                  </div>
                  <div className="space-y-6">
                    {section.userFeatures.map((group) => {
                      const IconComponent = group.icon || Mail;
                      const shouldTruncate = group.items.length > 2;
                      const displayItems = shouldTruncate && !allFeaturesExpanded ? group.items.slice(0, 2) : group.items;
                      
                      return (
                        <div key={group.title} className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 shadow-inner">
                              <IconComponent className="h-4 w-4" />
                            </div>
                            <p className="text-lg font-semibold text-foreground">{group.title}</p>
                          </div>
                          <ul className="space-y-2 text-foreground/80">
                            {displayItems.map((item) => (
                              <li key={item} className="flex gap-2">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40 flex-shrink-0" />
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {section.engineeringFeatures && (
                <motion.div
                  {...sectionAnimation}
                  transition={{
                    ...sectionAnimation.transition,
                    delay: 0.05,
                  }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.18em] text-foreground/60">Engineering</p>
                    <h3 className="text-2xl font-semibold text-foreground leading-tight">Tech Complexity</h3>
                  </div>
                  <div className="space-y-6">
                    {section.engineeringFeatures.map((group) => {
                      const IconComponent = group.icon || Layers;
                      const shouldTruncate = group.items.length > 2;
                      const displayItems = shouldTruncate && !allFeaturesExpanded ? group.items.slice(0, 2) : group.items;
                      
                      return (
                        <div key={group.title} className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted dark:bg-muted/80 text-muted-foreground shadow-inner">
                              <IconComponent className="h-4 w-4" />
                            </div>
                            <p className="text-lg font-semibold text-foreground">{group.title}</p>
                          </div>
                          <ul className="space-y-2 text-foreground/80">
                            {displayItems.map((item) => (
                              <li key={item} className="flex gap-2">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40 flex-shrink-0" />
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Single "View More" button for all feature groups */}
              {((section.userFeatures && section.userFeatures.some(g => g.items.length > 2)) || 
                (section.engineeringFeatures && section.engineeringFeatures.some(g => g.items.length > 2))) && (
                <div className="col-span-1 md:col-span-2 flex justify-center pt-4">
                  <button
                    onClick={() => setAllFeaturesExpanded(!allFeaturesExpanded)}
                    className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-foreground/5 dark:hover:bg-foreground/10"
                  >
                    {allFeaturesExpanded ? 'View Less' : 'View More'}
                    <ArrowRight className={`h-4 w-4 transition-transform ${allFeaturesExpanded ? 'rotate-90' : ''}`} />
                  </button>
                </div>
              )}

              {section.features && !section.userFeatures && !section.engineeringFeatures && (
                <motion.div
                  {...sectionAnimation}
                  className="space-y-3 text-foreground/80"
                >
                  <ul className="space-y-2">
                    {section.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </motion.section>
        );

      case 'challenges':
        return (
          <motion.section 
            id={section.id} 
            className="relative z-10 scroll-mt-24 overflow-hidden"
            {...sectionAnimation}
          >
            <SectionTitle id={section.id}>Engineering Challenges</SectionTitle>
            <p className="text-sm md:text-base text-foreground/60 mb-8">
              Key technical problems I solved to scale and stabilize the platform.
            </p>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.challenges.map((item, index) => {
                const iconOptions = [Activity, Lock, Palette, Database];
                const IconComponent = iconOptions[index % iconOptions.length];
                const impactLabels = ['Global sync', '99%+ reliability', 'Dynamic logic', '10k+ records'];
                const impactLabel = impactLabels[index % impactLabels.length];
                const solutionLines = item.solution
                  .split(/(?<=[.!?])\s+/)
                  .filter(Boolean)
                  .slice(0, 3);

                return (
                  <motion.div
                    key={index}
                    {...sectionAnimation}
                    transition={{ ...sectionAnimation.transition, delay: index * 0.05 }}
                    className="relative overflow-hidden rounded-2xl bg-card/85 dark:bg-card/70 backdrop-blur shadow-[0_14px_40px_-32px_rgba(15,23,42,0.45)] dark:shadow-[0_14px_40px_-32px_rgba(0,0,0,0.5)] ring-1 ring-transparent"
                  >
                    <div className="relative flex h-full flex-col gap-5 p-6">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted dark:bg-muted/80 text-muted-foreground shadow-inner">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs uppercase tracking-[0.16em] text-foreground/50">Challenge</p>
                          <h3 className="text-lg font-semibold text-foreground leading-tight">{item.challenge}</h3>
                        </div>
                      </div>

                      <ul className="space-y-2 text-sm text-foreground/75 leading-relaxed">
                        {(solutionLines.length ? solutionLines : [item.solution]).map((line, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/35" />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto flex items-center justify-end">
                        <span className="inline-flex items-center gap-2 rounded-full bg-foreground/[0.04] px-3 py-1 text-xs font-medium text-foreground/80 shadow-inner">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
                          {impactLabel}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
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
            <SectionTitle id={section.id}>Results & Impact</SectionTitle>
            <p className="text-foreground/65 text-base mt-1">Quantifiable improvements delivered through engineering, UX, and system design.</p>

            <div className="relative mt-6">
              {/* Gradient dots for subtle premium effect */}
              <div className="pointer-events-none absolute -top-8 -left-6 h-28 w-28 rounded-full bg-gradient-to-br from-indigo-200/60 via-sky-200/50 to-purple-200/40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-8 right-0 h-24 w-24 rounded-full bg-gradient-to-br from-amber-200/50 via-pink-200/45 to-indigo-200/40 blur-3xl" />

              {section.metrics && section.metrics.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7">
                  {section.metrics.slice(0, 6).map((metric, index) => {
                    const parseMetric = (value: string) => {
                      const match = value.match(/\((.*?)\)/);
                      const detail = match ? match[1] : '';
                      const title = value.replace(/\s*\(.*\)/, '').trim();
                      return { title, detail };
                    };
                    const { title, detail } = parseMetric(metric);

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                        className="rounded-xl bg-card/80 dark:bg-card/65 backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.2)] p-5 flex flex-col items-center text-center gap-2 border border-border/60"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-500 text-white shadow-sm">
                          <Award className="h-6 w-6" />
                        </div>
                        <p className="text-base font-semibold text-foreground leading-tight">{renderMetric(title)}</p>
                        {detail && (
                          <p className="text-xs text-foreground/60 leading-snug">{detail}</p>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {section.description && (
                <div className="mt-10 space-y-6">
                  <div className="h-px bg-foreground/5" />
                  <div className="bg-card/80 dark:bg-card/65 rounded-xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.2)] border border-border/60 leading-relaxed text-[15px] text-foreground/80">
                    {typeof section.description === 'string' ? (
                      <p className="space-y-1">
                        {section.description.split(/(\d[\d.,-]*\s*(?:[–-]\s*\d[\d.,-]*)?\s*(?:minutes?|minute|min|s|ms|agents|clicks|waiting list|waitlist|%)?)/gi).map((part, idx) => {
                          const isNumber = /\d/.test(part.trim());
                          return isNumber ? (
                            <span key={idx} className="font-semibold text-[#1E40AF]">{part}</span>
                          ) : (
                            <span key={idx}>{part}</span>
                          );
                        })}
                      </p>
                    ) : (
                      <div className="text-foreground/80 leading-relaxed">{section.description}</div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.section>
        );

      case 'learnings':
        return (
          <motion.section
            id={section.id}
            className="relative z-10 scroll-mt-24 overflow-hidden"
            {...sectionAnimation}
          >
            <SectionTitle id={section.id}>Learnings</SectionTitle>

            {section.cards && section.cards.length > 0 ? (
              <div className="space-y-2">
                {section.cards.map((card, index) => {
                  const cardKey = `learning-${card.title}`;
                  const isExpanded = expandedLearnings[cardKey] || false;
                  
                  return (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group border-b border-border/50 dark:border-border/30 last:border-b-0"
                    >
                      <button
                        onClick={() => setExpandedLearnings(prev => ({ ...prev, [cardKey]: !isExpanded }))}
                        className="w-full flex items-center justify-between py-4 px-2 hover:bg-foreground/5 dark:hover:bg-foreground/10 rounded-lg transition-colors text-left"
                      >
                        <span className="text-base font-semibold text-foreground pr-4">
                          {card.title}
                        </span>
                        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-foreground/5 dark:bg-foreground/10 group-hover:bg-foreground/10 dark:group-hover:bg-foreground/20 transition-colors">
                          {isExpanded ? (
                            <Minus className="w-4 h-4 text-foreground/70" />
                          ) : (
                            <Plus className="w-4 h-4 text-foreground/70" />
                          )}
                        </div>
                      </button>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-4 px-2">
                            <p className="text-sm text-foreground/75 leading-relaxed">
                              {card.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-2">
                {section.learnings?.map((learning, index) => {
                  const learningKey = `learning-${index}`;
                  const isExpanded = expandedLearnings[learningKey] || false;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group border-b border-border/50 dark:border-border/30 last:border-b-0"
                    >
                      <button
                        onClick={() => setExpandedLearnings(prev => ({ ...prev, [learningKey]: !isExpanded }))}
                        className="w-full flex items-center justify-between py-4 px-2 hover:bg-foreground/5 dark:hover:bg-foreground/10 rounded-lg transition-colors text-left"
                      >
                        <span className="text-base font-semibold text-foreground pr-4">
                          {learning.split('.')[0] || learning.substring(0, 60) + '...'}
                        </span>
                        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-foreground/5 dark:bg-foreground/10 group-hover:bg-foreground/10 dark:group-hover:bg-foreground/20 transition-colors">
                          {isExpanded ? (
                            <Minus className="w-4 h-4 text-foreground/70" />
                          ) : (
                            <Plus className="w-4 h-4 text-foreground/70" />
                          )}
                        </div>
                      </button>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-4 px-2">
                            <p className="text-sm text-foreground/75 leading-relaxed">
                              {learning}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.section>
        );

      case 'tech-stack': {
        const fadeInUp = {
          hidden: { opacity: 0, y: 10 },
          visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.08 * i,
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            },
          }),
        };

        const [core, comms, infra, ...rest] = section.categories || [];

        // Split Core Architecture items into Runtime & Rendering and Language & API
        const runtimeItems = core?.items?.filter(item => 
          item && item.name && (
            item.name.includes('Next.js') || 
            item.name.includes('React') || 
            item.name.includes('Node.js runtime')
          )
        ) || [];
        
        const languageItems = core?.items?.filter(item => 
          item && item.name && (
            item.name.includes('TypeScript') || 
            item.name.includes('API Routes')
          )
        ) || [];

        return (
          <motion.section
            id={section.id}
            className="relative z-10 scroll-mt-24 overflow-hidden"
            {...sectionAnimation}
          >
            <SectionTitle id={section.id}>Tech Stack</SectionTitle>

            <div className="relative">
              {/* 3-Column Grid: Core Architecture | Communication & AI | Infrastructure & DevOps */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-7">
                {/* Core Architecture Column */}
                {core && (
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                        className="rounded-2xl backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.2)] py-6 px-7 bg-card/80 dark:bg-card/65 border border-border/60"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 shadow-inner">
                        <Layers className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.18em] text-foreground/60">Core Architecture</p>
                        <h3 className="text-xl font-semibold text-foreground leading-tight">{core.category}</h3>
                        <p className="text-sm text-foreground/60 mt-1">Foundation of the application's runtime and rendering strategy.</p>
                      </div>
                    </div>
                    
                    {/* Section Divider */}
                    <div className="h-px bg-black/5 dark:bg-white/5 my-3"></div>

                    {/* Runtime & Rendering Group */}
                    <div className="mb-4">
                      <p className="text-xs uppercase tracking-wider text-foreground/50 mb-3 font-medium">Runtime & Rendering</p>
                      <div className="flex flex-col gap-y-3">
                        {runtimeItems.map((item, idx) => {
                          if (!item || !item.name) return null;
                          const IconComponent = item.icon || Layers;
                          return (
                            <motion.div
                              key={item.name}
                              variants={fadeInUp}
                              custom={idx}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, margin: '-60px' }}
                              className="flex items-center gap-2 rounded-lg bg-foreground/5 dark:bg-foreground/10 px-3 py-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] text-foreground/85 text-sm border border-border/60 dark:border-border/40"
                            >
                              <div className="flex h-6 w-6 items-center justify-center flex-shrink-0">
                                <IconComponent className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                              </div>
                              <span className="leading-snug">{item.name}</span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Language & API Group */}
                    <div>
                      <p className="text-xs uppercase tracking-wider text-foreground/50 mb-3 font-medium">Language & API</p>
                      <div className="flex flex-col gap-y-3">
                        {languageItems.map((item, idx) => {
                          if (!item || !item.name) return null;
                          const IconComponent = item.icon || Layers;
                          return (
                            <motion.div
                              key={item.name}
                              variants={fadeInUp}
                              custom={idx + runtimeItems.length}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, margin: '-60px' }}
                              className="flex items-center gap-2 rounded-lg bg-foreground/5 dark:bg-foreground/10 px-3 py-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] text-foreground/85 text-sm border border-border/60 dark:border-border/40"
                            >
                              <div className="flex h-6 w-6 items-center justify-center flex-shrink-0">
                                <IconComponent className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                              </div>
                              <span className="leading-snug">{item.name}</span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Communication & Infrastructure Columns */}
                {[comms, infra].map((group, groupIndex) => {
                  if (!group) return null;
                  const IconComponent = group.category.toLowerCase().includes('communication') ? Mail : Shield;
                  const description = group.category.toLowerCase().includes('communication')
                    ? 'Handles multi-channel communication and AI-powered workflows.'
                    : 'Ensures deployment stability, automation, and scalable performance.';
                  return (
                    <motion.div
                      key={group.category}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-80px' }}
                      custom={groupIndex + 1}
                        className="rounded-2xl backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.2)] py-6 px-7 bg-card/80 dark:bg-card/65 border border-border/60"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted dark:bg-muted/80 text-muted-foreground shadow-inner">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm uppercase tracking-[0.18em] text-foreground/60">Focus Area</p>
                          <h3 className="text-xl font-semibold text-foreground leading-tight">{group.category}</h3>
                          <p className="text-sm text-foreground/60 mt-1">{description}</p>
                        </div>
                      </div>
                      
                      {/* Section Divider */}
                      <div className="h-px bg-black/5 dark:bg-white/5 my-3"></div>
                      
                      <div className="flex flex-col gap-y-3">
                        {(group.items || []).map((item, idx) => {
                          if (!item || !item.name) return null;
                          const ItemIcon = item.icon || Layers;
                          return (
                            <motion.div
                              key={item.name}
                              variants={fadeInUp}
                              custom={idx}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, margin: '-60px' }}
                              className="flex items-center gap-2 rounded-lg bg-foreground/5 dark:bg-foreground/10 px-3 py-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] text-foreground/85 text-sm border border-border/60 dark:border-border/40"
                            >
                              <div className="flex h-6 w-6 items-center justify-center flex-shrink-0">
                                <ItemIcon className="h-4 w-4 text-foreground/70" />
                              </div>
                              <span className="leading-snug">{item.name}</span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {rest.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {rest.map((stack, index) => (
                    <motion.div
                      key={stack.category}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-60px' }}
                      custom={index + 2}
                        className="rounded-2xl backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.2)] py-6 px-7 bg-card/80 dark:bg-card/65 border border-border/60"
                    >
                      <h3 className="text-lg font-semibold text-foreground mb-3">{stack.category}</h3>
                      <div className="flex flex-col gap-y-3">
                        {(stack.items || []).map((item) => {
                          if (!item || !item.name) return null;
                          const IconComponent = item.icon || Layers;
                          return (
                            <div key={item.name} className="flex items-center gap-2 rounded-lg bg-[#f9f9f9] dark:bg-foreground/[0.05] px-3 py-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] text-foreground/80 text-sm">
                              <div className="flex h-6 w-6 items-center justify-center flex-shrink-0">
                                <IconComponent className="h-4 w-4 text-foreground/70" />
                              </div>
                              <span>{item.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.section>
        );
      }

      case 'custom':
        return (
          <motion.section 
            id={section.id} 
            className="relative z-10 scroll-mt-24"
            {...sectionAnimation}
          >
            <SectionTitle id={section.id}>{section.title}</SectionTitle>
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

  // Get caption for image based on filename and path
  const getImageCaption = (imagePath: string): string => {
    const filename = imagePath.split('/').pop()?.toLowerCase() || '';
    const pathLower = imagePath.toLowerCase();
    
    // AMORE Agent 05 captions
    if (pathLower.includes('amora-agent') || pathLower.includes('amore')) {
      if (filename.includes('dashboard')) return 'Dashboard — Review Metrics, Distribution & Trends';
      if (filename.includes('insight')) return 'AI Insight Report — Sentiment, Trends, VOC Clusters';
      if (filename.includes('ingestion')) return 'Ingestion Modes — Scrape, JSON Import, Sample Data';
      if (filename.includes('review') || filename.includes('explorer')) return 'Review Explorer — Filters, Search, Pagination';
      if (filename.includes('settings')) return 'Settings — Scraping Behavior, Monitoring, Alerts';
    }
    
    // MajorMatch AI captions
    if (pathLower.includes('majorai')) {
      if (filename.includes('cover')) return 'Platform Overview — Career Guidance Dashboard';
      if (filename.includes('assessment')) return 'Assessment — AI-Powered Career Assessment Questions';
      if (filename.includes('challenges')) return 'Career Challenges — Interactive Field Exploration';
      if (filename.includes('result')) return 'Career Results — Personalized Major Recommendations';
      if (filename.includes('mentors')) return 'Mentors — Professional Mentorship Booking System';
      if (filename.includes('questions')) return 'Questions — Assessment Interface';
    }
    
    // KSPO Sports Platform captions
    if (pathLower.includes('sports')) {
      if (filename.includes('programs')) return 'Programs — Fitness Program Discovery & Recommendations';
      if (filename.includes('dashboard')) return 'Dashboard — Facility Overview & Daily Recommendations';
      if (filename.includes('airesult')) return 'AI Results — Personalized Facility Recommendations';
      if (filename.includes('mapscreen') || filename.includes('map')) return 'Map Screen — Interactive Facility Discovery';
      if (filename.includes('graph') || filename.includes('exercise')) return 'Activity Graph — Weekly Exercise Tracking';
    }
    
    // MovePARK captions
    if (pathLower.includes('movepark')) {
      if (filename.includes('map')) return 'Map View — Interactive Route Planning & Navigation';
      if (filename.includes('dashboard')) return 'Dashboard — Event Planning & Journey Overview';
      if (filename.includes('route')) return 'Route Details — Multi-Modal Transit Comparison';
    }
    
    return 'Screenshot';
  };

  // Categorize images by workflow
  const categorizeImages = (images: string[]) => {
    const categories: Record<string, { images: string[], label: string }> = {
      // AMORE Agent 05 categories
      dashboard: { images: [], label: 'Dashboard' },
      insights: { images: [], label: 'Insights' },
      ingestion: { images: [], label: 'Ingestion' },
      reviews: { images: [], label: 'Reviews' },
      settings: { images: [], label: 'Settings' },
      // MajorMatch AI categories
      assessment: { images: [], label: 'Assessment' },
      challenges: { images: [], label: 'Challenges' },
      results: { images: [], label: 'Results' },
      mentorship: { images: [], label: 'Mentorship' }
    };

    images.forEach(img => {
      const filename = img.toLowerCase();
      // AMORE Agent 05 categorization
      if (filename.includes('dashboard')) {
        categories.dashboard.images.push(img);
      } else if (filename.includes('insight')) {
        categories.insights.images.push(img);
      } else if (filename.includes('ingestion')) {
        categories.ingestion.images.push(img);
      } else if (filename.includes('review') || filename.includes('explorer')) {
        categories.reviews.images.push(img);
      } else if (filename.includes('settings')) {
        categories.settings.images.push(img);
      } 
      // MajorMatch AI categorization
      else if (filename.includes('assessment') || filename.includes('questions')) {
        categories.assessment.images.push(img);
      } else if (filename.includes('challenges')) {
        categories.challenges.images.push(img);
      } else if (filename.includes('result')) {
        categories.results.images.push(img);
      } else if (filename.includes('mentors')) {
        categories.mentorship.images.push(img);
      } 
      // KSPO Sports Platform categorization
      else if (img.toLowerCase().includes('sports')) {
        if (filename.includes('programs')) {
          categories.dashboard.images.push(img);
        } else if (filename.includes('dashboard')) {
          categories.dashboard.images.push(img);
        } else if (filename.includes('airesult')) {
          categories.insights.images.push(img);
        } else if (filename.includes('mapscreen') || filename.includes('map')) {
          categories.dashboard.images.push(img);
        } else if (filename.includes('graph') || filename.includes('exercise')) {
          categories.insights.images.push(img);
        }
      }
      // MovePARK categorization
      else if (img.toLowerCase().includes('movepark')) {
        if (filename.includes('map')) {
          categories.dashboard.images.push(img); // Map as main feature
        } else if (filename.includes('dashboard')) {
          categories.dashboard.images.push(img);
        } else if (filename.includes('route')) {
          categories.insights.images.push(img); // Route as insights
        }
      } else {
        // Default to first available category if can't categorize
        if (categories.dashboard.images.length === 0 && !filename.includes('cover')) {
          categories.dashboard.images.push(img);
        }
      }
    });

    return Object.entries(categories).filter(([_, cat]) => cat.images.length > 0);
  };

  // Render image gallery if project has images
  const renderImageGallery = () => {
    if (!project.images || project.images.length === 0) return null;

    const [activeTab, setActiveTab] = useState<string>('all');
    const categorized = categorizeImages(project.images);
    const hasMultipleCategories = categorized.length > 1;
    
    // Get images to display based on active tab
    const getDisplayImages = () => {
      if (!hasMultipleCategories || activeTab === 'all') return project.images;
      const category = categorized.find(([key]) => key === activeTab);
      return category ? category[1].images : project.images;
    };

    const displayImages = getDisplayImages();
    
    // Structure: hero image (first), then two rows of 2 images each
    const heroImage = displayImages[0];
    const row1Images = displayImages.slice(1, 3);
    const row2Images = displayImages.slice(3, 5);

    return (
      <motion.section 
        id="gallery"
        className="relative z-10 scroll-mt-24 py-16 md:py-24"
        {...sectionAnimation}
      >
        <div className="relative max-w-[1300px] mx-auto px-6 md:px-10">
          {/* Section Header */}
          <div className="mb-12 md:mb-16">
            <h2 
              id="gallery"
              className="text-2xl md:text-3xl font-black mb-2 scroll-mt-24 text-foreground"
            >
              Project Screenshots
            </h2>
            <p className="text-sm md:text-base text-foreground/60">
              A snapshot of core workflows and system capabilities
            </p>
          </div>

          {/* Tabs (if multiple categories) */}
          {hasMultipleCategories && (
            <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-border/50">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'all'
                    ? 'bg-foreground text-background'
                    : 'text-foreground/70 hover:text-foreground hover:bg-foreground/10'
                }`}
              >
                All
              </button>
              {categorized.map(([key, { label }]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === key
                      ? 'bg-foreground text-background'
                      : 'text-foreground/70 hover:text-foreground hover:bg-foreground/10'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          )}

          {/* Gallery Layout */}
          <div className="space-y-6">
            {/* Hero Image */}
            {heroImage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className="group relative w-full aspect-[16/9] min-h-[200px] md:min-h-[400px] rounded-2xl overflow-hidden cursor-zoom-in shadow-[0_8px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.3)] border border-black/5 dark:border-white/5"
                whileHover={{ scale: 1.01 }}
                onClick={() => {
                  const index = project.images.indexOf(heroImage);
                  if (index !== -1) setSelectedImage(index);
                }}
                style={{ position: 'relative' }}
              >
                <Image
                  src={heroImage}
                  alt={getImageCaption(heroImage)}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            )}

            {/* Row 1: Two medium-width screenshots */}
            {row1Images.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {row1Images.map((image, index) => {
                  const imgIndex = project.images.indexOf(image);
                  return (
                    <div key={index} className="space-y-3">
                      <motion.div
                        className="group relative w-full aspect-[16/10] min-h-[180px] md:min-h-[300px] rounded-2xl overflow-hidden cursor-zoom-in shadow-[0_8px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.3)] border border-black/5 dark:border-white/5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)]"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => imgIndex !== -1 && setSelectedImage(imgIndex)}
                        style={{ position: 'relative' }}
                      >
                        <Image
                          src={image}
                          alt={getImageCaption(image)}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 600px"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                      <p className="text-xs text-foreground/60 text-center">
                        {getImageCaption(image)}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            )}

            {/* Row 2: Two medium-width screenshots */}
            {row2Images.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {row2Images.map((image, index) => {
                  const imgIndex = project.images.indexOf(image);
                  return (
                    <div key={index} className="space-y-3">
                      <motion.div
                        className="group relative w-full aspect-[16/10] min-h-[180px] md:min-h-[300px] rounded-2xl overflow-hidden cursor-zoom-in shadow-[0_8px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.3)] border border-black/5 dark:border-white/5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)]"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => imgIndex !== -1 && setSelectedImage(imgIndex)}
                        style={{ position: 'relative' }}
                      >
                        <Image
                          src={image}
                          alt={getImageCaption(image)}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 600px"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                      <p className="text-xs text-foreground/60 text-center">
                        {getImageCaption(image)}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            )}

            {/* Remaining images in a grid (if more than 5) */}
            {displayImages.length > 5 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
              >
                {displayImages.slice(5).map((image, index) => {
                  const imgIndex = project.images.indexOf(image);
                  return (
                    <div key={index} className="space-y-3">
                      <motion.div
                        className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-zoom-in shadow-[0_8px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.3)] border border-black/5 dark:border-white/5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)]"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => imgIndex !== -1 && setSelectedImage(imgIndex)}
                      >
                        <Image
                          src={image}
                          alt={getImageCaption(image)}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                      <p className="text-xs text-foreground/60 text-center">
                        {getImageCaption(image)}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </div>
        </div>

        {/* Fullscreen Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl w-full max-h-[90vh] rounded-xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={project.images[selectedImage]}
                alt={`${project.title} screenshot ${selectedImage + 1}`}
                width={1920}
                height={1080}
                className="w-full h-auto object-contain rounded-xl"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg text-sm">
                {getImageCaption(project.images[selectedImage])}
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/70 hover:bg-black/90 p-3 rounded-full transition-colors backdrop-blur-sm"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </motion.section>
    );
  };

  // Render gallery if sections array is empty (meaning we're only rendering the gallery)
  // Exclude gallery for makeeat, aws-content-moderation, and encar-track1 projects
  const shouldRenderGallery = content.sections.length === 0 && project.images && project.images.length > 0 && content.slug !== 'makeeat' && content.slug !== 'aws-content-moderation' && content.slug !== 'encar-track1';

  return (
    <div className="space-y-24">
      {content.sections.map((section) => (
        <div key={section.id}>{renderSection(section)}</div>
      ))}
      {/* Render gallery only when sections array is empty (explicit gallery-only render) */}
      {shouldRenderGallery && (
        <div>{renderImageGallery()}</div>
      )}
    </div>
  );
}

