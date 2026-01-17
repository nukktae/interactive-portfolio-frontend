"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Mail } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import SpaceBackground from '@/components/visuals/SpaceBackground';
import LightBackground from '@/components/visuals/LightBackground';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

// Calendly event URL with customization options
// IMPORTANT: Make sure your Calendly calendar is published and accessible
// If you see "calendar unavailable", try using a specific event type URL like:
// 'https://calendly.com/amis9n/30min?hide_gdpr_banner=1'
// Or check your Calendly account settings to ensure the calendar is published
const CALENDLY_EVENT_URL = 'https://calendly.com/amis9n?hide_gdpr_banner=1';

export default function BookACallPage() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Custom styling for Calendly to match portfolio theme
    const style = document.createElement('style');
    style.textContent = `
      .calendly-inline-widget {
        border: none !important;
        border-radius: 0.75rem;
        overflow: hidden;
      }
      .calendly-inline-widget iframe {
        border: none !important;
        border-radius: 0.75rem;
        background: transparent !important;
      }
      /* Remove any white borders or containers */
      .calendly-inline-widget * {
        border: none !important;
      }
      /* Customize Calendly colors to match theme */
      .calendly-inline-widget .calendly-popup-content {
        background: transparent !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup on unmount
      const existingLink = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]');
      if (existingLink) {
        document.head.removeChild(existingLink);
      }
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      const existingStyle = document.querySelector('style');
      if (existingStyle && existingStyle.textContent?.includes('calendly-inline-widget')) {
        document.head.removeChild(existingStyle);
      }
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {mounted && (theme === 'dark' ? <SpaceBackground /> : <LightBackground />)}
      {!mounted && <SpaceBackground />}
      <Navbar />
      
      <div className="relative z-10 pt-32 pb-24 px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="text-sm font-bold tracking-widest text-foreground/60 mb-4 uppercase">{t('bookCall.contact')}</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-8">
              {t('bookCall.title')}{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                {t('bookCall.titleHighlight')}
              </span>
            </h1>
            
            <div className="flex items-center justify-center gap-2 mb-6">
              <Mail className="w-5 h-5 text-foreground/70" />
              <a href="mailto:anu.bn@yahoo.com" className="text-lg text-foreground/90 hover:text-foreground transition-colors">
                anu.bn@yahoo.com
              </a>
            </div>
          </motion.div>

          {/* Calendly Embed */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <div 
              className="calendly-inline-widget w-full"
              data-url={CALENDLY_EVENT_URL}
              style={{ 
                minWidth: '320px', 
                height: '700px',
                background: 'transparent'
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

