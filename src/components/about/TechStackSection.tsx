'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Code, Database, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  const { t } = useLanguage();

  const services = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: t('techStack.productManagement'),
      description: t('techStack.productManagementDesc')
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: t('techStack.design'),
      description: t('techStack.designDesc')
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: t('techStack.development'),
      description: t('techStack.developmentDesc')
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('techStack.globalExpansion'),
      description: t('techStack.globalExpansionDesc')
    }
  ];

  return (
    <section id="tech-stack" className="relative z-10 py-24 md:py-32" ref={ref}>
      <div className="px-6 md:px-12 lg:px-20 xl:px-32 max-w-[1800px] mx-auto">
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            {/* Left Side - Title & Stats */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-12"
            >
              <div>
                <div className="text-sm font-bold tracking-widest text-foreground/60 mb-6 uppercase">
                  {t('techStack.services')}
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-foreground leading-none whitespace-pre-line">
                  {t('techStack.title')}
                </h2>
              </div>
              
              {/* Stats */}
              <div className="flex flex-col sm:flex-row gap-8 md:gap-12 pt-8 border-t border-border/50">
                <div className="flex-1">
                  <div className="text-5xl md:text-6xl font-black text-foreground mb-2">3+</div>
                  <div className="text-xs md:text-sm font-bold tracking-widest text-foreground/60 uppercase">{t('about.yearsExperience')}</div>
                </div>
                
                <div className="flex-1">
                  <div className="text-5xl md:text-6xl font-black text-foreground mb-2">2+</div>
                  <div className="text-xs md:text-sm font-bold tracking-widest text-foreground/60 uppercase">{t('about.companiesWorked')}</div>
                </div>
                
                <div className="flex-1">
                  <div className="text-5xl md:text-6xl font-black text-foreground mb-2">20+</div>
                  <div className="text-xs md:text-sm font-bold tracking-widest text-foreground/60 uppercase">{t('about.projectsCompleted')}</div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="border border-border bg-card/50 backdrop-blur-sm p-8 h-full hover:border-foreground/40 hover:bg-card transition-all duration-500 rounded-lg">
                    <div className="text-foreground mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-foreground transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 