"use client";

import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import HeroSection from './HeroSection';
import ProjectsSection from '../projects/ProjectsSection';
import TechStackSection from '../about/TechStackSection';
import AboutSection from '../about/AboutSection';
import ContactForm from './ContactForm';
import SpaceBackground from '../visuals/SpaceBackground';
import LightBackground from '../visuals/LightBackground';
import { useTheme } from '@/contexts/ThemeContext';
// import AIChatButton from '../chat/AIChatButton';

export default function LandingPage() {
  const containerRef = useRef(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Background - switches based on theme (only after mount to prevent hydration mismatch) */}
      {mounted && (theme === 'dark' ? <SpaceBackground /> : <LightBackground />)}
      {!mounted && <SpaceBackground />}
      
      <Navbar />
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-white/30 via-white/50 to-white/30 origin-left z-50"
        style={{ scaleX }}
      />

      <motion.div
        initial={false}
        className="relative z-10"
      >
        <section id="hero">
          <HeroSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="tech-stack">
          <TechStackSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <ContactForm />
      </motion.div>
      
      {/* <AIChatButton /> */}
    </div>
  );
}