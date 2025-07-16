'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { href: '#projects', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#tech-stack', label: 'Services' },
    { href: '#contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md border-b border-gray-200' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="px-6 md:px-12 lg:px-20 xl:px-32 max-w-[1800px] mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="text-2xl font-black text-gray-900"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              ANU
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              <div className="flex items-center gap-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-300 uppercase tracking-wider"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <motion.div
                  className="text-sm font-bold tracking-widest text-gray-500 uppercase"
                  whileHover={{ color: '#111827' }}
                >
                  anu.bnda@gmail.com
                </motion.div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors duration-300 touch-manipulation"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            <motion.div
              className="absolute right-0 top-0 h-full w-[min(80vw,320px)] bg-white shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <div className="text-xl font-black text-gray-900">ANU</div>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300 touch-manipulation"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
                
                <div className="flex-1 py-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="w-full px-4 py-4 text-left text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 uppercase tracking-wider touch-manipulation"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      whileHover={{ x: 10 }}
                      whileTap={{ backgroundColor: '#f9fafb' }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>
                
                <div className="p-4 border-t border-gray-200">
                  <motion.div
                    className="text-xs font-bold tracking-wider text-gray-500 uppercase text-center"
                    whileHover={{ color: '#111827' }}
                  >
                    anu.bnda@gmail.com
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 