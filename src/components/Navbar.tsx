"use client";

import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState('Home');
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'tech-stack', 'about'];
      let currentSection = 'Home';

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section === 'hero' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1);
          }
        }
      });

      setActiveItem(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.5)", "rgba(255, 255, 255, 0.95)"]
  );

  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ["none", "0 4px 6px -1px rgba(0, 0, 0, 0.1)"]
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
  ];

  const handleNavClick = (e: React.MouseEvent, item: { name: string; href: string }) => {
    e.preventDefault();
    setActiveItem(item.name);
    
    if (item.name === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scrollToSection(item.name.toLowerCase());
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 w-full z-[9999]"
      style={{
        backgroundColor,
        boxShadow,
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-4">
        <div className="relative flex justify-center items-center">
          <div className="absolute inset-0 rounded-full border border-gray-200/20" />
          
          <div className="relative flex items-center gap-4 p-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                className="relative"
                onHoverStart={() => setActiveItem(item.name)}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`px-6 py-2 rounded-full relative z-10 transition-colors duration-200 text-sm font-medium
                    ${activeItem === item.name ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  {item.name}
                </a>
                {activeItem === item.name && (
                  <motion.div
                    className="absolute inset-0 bg-gray-100 rounded-full -z-10"
                    layoutId="navbar-active"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
} 