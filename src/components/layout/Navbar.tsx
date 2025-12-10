'use client';

import { useState, useEffect } from 'react';
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

  const navItems = [
    { href: '#projects', labelKey: 'nav.work' },
    { href: '#about', labelKey: 'nav.about' },
    { href: '#contact', labelKey: 'nav.contact' }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'backdrop-blur-xl bg-background/80 shadow-[0_1px_6px_rgba(0,0,0,0.06)] border-b border-border'
            : 'bg-transparent backdrop-blur-none border-b border-transparent shadow-none'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
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

              <div className="flex items-center gap-3 ml-4">
                {/* Theme Toggle */}
                <motion.button
                  onClick={toggleTheme}
                  className="h-9 px-3 rounded-lg border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 text-foreground text-sm font-medium hover:border-[#1E40AF] hover:text-[#1E40AF] transition-all duration-200"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  aria-label="Toggle theme"
                >
                  {mounted ? (theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />) : <Sun className="w-4 h-4" />}
                </motion.button>
                
                {/* Language Toggle */}
                <motion.button
                  onClick={toggleLanguage}
                  className="h-9 px-3 rounded-lg border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 text-foreground text-sm font-medium hover:border-[#1E40AF] hover:text-[#1E40AF] transition-all duration-200"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.55 }}
                >
                  {language === 'en' ? '한' : 'EN'}
                </motion.button>
                
                <motion.button
                  onClick={() => router.push('/book-a-call')}
                  className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 text-white text-sm font-medium hover:brightness-105 transition-all duration-200 shadow-[0_8px_20px_-10px_rgba(59,130,246,0.8)]"
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
              className="md:hidden p-3 hover:bg-foreground/10 dark:hover:bg-white/10 rounded-lg transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            <motion.div
              className="absolute right-0 top-0 h-full w-80 bg-card dark:bg-[#1a1f3a] border-l border-border shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <div className="text-xl font-bold text-foreground">ANU</div>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-foreground/10 dark:hover:bg-white/10 rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-6 h-6 text-foreground" />
                  </motion.button>
                </div>
                
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="px-6 py-4 text-left text-lg font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/10 dark:hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {t(item.labelKey)}
                  </motion.button>
                ))}
                
                <motion.div
                  className="pt-8 px-6 space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <button
                    onClick={toggleTheme}
                    className="w-full px-4 py-2 rounded-lg bg-black/10 dark:bg-white/10 text-foreground text-sm font-medium hover:bg-black/20 dark:hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {mounted ? (theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />) : <Sun className="w-4 h-4" />}
                    <span>{mounted ? (theme === 'dark' ? 'Light Mode' : 'Dark Mode') : 'Light Mode'}</span>
                  </button>
                  <button
                    onClick={toggleLanguage}
                    className="w-full px-4 py-2 rounded-lg bg-black/10 dark:bg-white/10 text-foreground text-sm font-medium hover:bg-black/20 dark:hover:bg-white/20 transition-all duration-300"
                  >
                    {language === 'en' ? '한국어' : 'English'}
                  </button>
                  <button
                    onClick={() => {
                      router.push('/book-a-call');
                      setIsOpen(false);
                    }}
                    className="w-full px-4 py-2 rounded-lg bg-black/10 dark:bg-white/10 text-foreground text-sm font-medium hover:bg-black/20 dark:hover:bg-white/20 transition-all duration-300"
                  >
                    {t('nav.bookCall')}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 