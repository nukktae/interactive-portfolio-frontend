"use client";

import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ProjectsSection from './ProjectsSection';
import TechStackSection from './TechStackSection';
import AboutSection from './AboutSection';
import ContactForm from './ContactForm';
import Footer from './Footer';
import AIChatButton from './AIChatButton';
import ResumeSection from './ResumeSection';

export default function LandingPage() {
  const containerRef = useRef(null);
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
    <div ref={containerRef} className="relative bg-white">
      <Navbar />
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-gray-600 to-black origin-left z-50"
        style={{ scaleX }}
      />

      <motion.div
        initial={false}
        className="relative"
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

        <section id="resume">
          <ResumeSection />
        </section>

        <ContactForm />
      </motion.div>

      <Footer />
      
      <AIChatButton />
    </div>
  );
}