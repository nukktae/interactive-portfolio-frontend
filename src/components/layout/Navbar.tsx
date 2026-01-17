'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

export default function Navbar() {
  const router = useRouter();
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const navItems = [
    { href: '#projects', labelKey: 'nav.work' },
    { href: '#tech-stack', labelKey: 'nav.about' },
    { href: '#case-studies', labelKey: 'nav.caseStudies' },
    { href: '#contact', labelKey: 'nav.contact' }
  ];

  useEffect(() => {
    setMounted(true);
    
    // Force fixed positioning using direct DOM manipulation
    if (navRef.current) {
      navRef.current.style.position = 'fixed';
      navRef.current.style.top = '0';
      navRef.current.style.left = '0';
      navRef.current.style.right = '0';
      navRef.current.style.width = '100%';
      navRef.current.style.zIndex = '40';
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle hash navigation on page load
  useEffect(() => {
    if (window.location.hash && window.location.pathname === '/') {
      const hash = window.location.hash;
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page, then scroll to section
      router.push('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'backdrop-blur-xl bg-background/80 shadow-[0_1px_6px_rgba(0,0,0,0.06)]'
            : 'bg-transparent backdrop-blur-none shadow-none'
        }`}
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 40,
          borderBottom: 'none'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="px-6 lg:px-10 max-w-[1800px] mx-auto">
          <div className="flex items-center justify-between h-[64px]">
            {/* Logo */}
            <motion.div
              className={`relative text-[20px] font-semibold tracking-tight text-foreground cursor-pointer ${isScrolled ? 'drop-shadow-[0_2px_6px_rgba(59,130,246,0.12)]' : ''}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => router.push('/')}
            >
              ANU
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="px-1 text-sm font-medium transition-all duration-200 text-foreground/75 hover:text-[#1E40AF]"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    {t(item.labelKey)}
                  </motion.button>
                ))}
              </div>

              <div className="flex items-center gap-2 ml-4">
                {/* Theme Toggle */}
                <motion.button
                  onClick={toggleTheme}
                  className="relative h-8 w-8 rounded-full flex items-center justify-center text-foreground/60 hover:text-foreground transition-all duration-300 group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  aria-label="Toggle theme"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 rounded-full bg-foreground/5 dark:bg-white/5 group-hover:bg-foreground/10 dark:group-hover:bg-white/10 transition-all duration-300 backdrop-blur-sm" />
                  <div className="relative z-10">
                    {mounted ? (theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />) : <Sun className="w-4 h-4" />}
                  </div>
                </motion.button>
                
                {/* Language Toggle */}
                <motion.button
                  onClick={toggleLanguage}
                  className="relative h-8 w-8 rounded-full flex items-center justify-center text-foreground/60 hover:text-foreground transition-all duration-300 group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.55 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 rounded-full bg-foreground/5 dark:bg-white/5 group-hover:bg-foreground/10 dark:group-hover:bg-white/10 transition-all duration-300 backdrop-blur-sm" />
                  <span className="relative z-10 text-lg leading-none">
                    {language === 'en' ? '🇰🇷' : '🇺🇸'}
                  </span>
                </motion.button>
                
                <motion.button
                  onClick={() => router.push('/book-a-call')}
                  className={`ml-4 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    !mounted 
                      ? 'bg-white text-[#0F0F12] hover:bg-white/90 shadow-[0_8px_20px_-10px_rgba(255,255,255,0.3)]'
                      : theme === 'dark'
                      ? 'bg-white text-[#0F0F12] hover:bg-white/90 shadow-[0_8px_20px_-10px_rgba(255,255,255,0.3)]'
                      : 'bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 text-white hover:brightness-105 shadow-[0_8px_20px_-10px_rgba(59,130,246,0.8)]'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {t('nav.bookCall')}
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative p-2.5 rounded-lg transition-all duration-200 hover:bg-foreground/10 dark:hover:bg-white/10 active:bg-foreground/20 dark:active:bg-white/20"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
        </motion.div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop with blur */}
            <motion.div
              className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="absolute inset-0 bg-gray-900/95 dark:bg-gray-950/98 backdrop-blur-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-800/50 dark:border-gray-700/50">
                  <motion.div
                    className="text-2xl font-bold text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    ANU
                  </motion.div>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.button>
                </div>
                
                {/* Navigation Items */}
                <div className="flex-1 px-6 py-8 space-y-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="w-full text-left px-4 py-4 text-lg font-medium text-white/90 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/5 active:bg-white/10"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + index * 0.1, type: 'spring', damping: 20 }}
                    >
                      {t(item.labelKey)}
                    </motion.button>
                  ))}
                </div>
                
                {/* Settings & Actions */}
                <motion.div
                  className="px-6 pb-8 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {/* Theme Toggle */}
                  <button
                    onClick={toggleTheme}
                    className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/90 hover:text-white transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-center w-5 h-5">
                      {mounted ? (theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />) : <Sun className="w-5 h-5" />}
                    </div>
                    <span className="text-sm font-medium">
                      {mounted ? (theme === 'dark' ? 'Light Mode' : 'Dark Mode') : 'Light Mode'}
                    </span>
                  </button>
                  
                  {/* Language Toggle */}
                  <button
                    onClick={toggleLanguage}
                    className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/90 hover:text-white transition-all duration-200"
                  >
                    <span className="text-xl leading-none">{language === 'en' ? '🇰🇷' : '🇺🇸'}</span>
                    <span className="text-sm font-medium">
                      {language === 'en' ? '한국어' : 'English'}
                    </span>
                  </button>
                  
                  {/* Book a Call Button */}
                  <motion.button
                    onClick={() => {
                      router.push('/book-a-call');
                      setIsOpen(false);
                    }}
                    className="w-full px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-black/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('nav.bookCall')}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 