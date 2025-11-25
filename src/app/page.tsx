"use client";

import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Work } from '../components/Work';
import { Contact } from '../components/Contact';
import Footer from '../components/Footer';
// import AIChatButton from '../components/AIChatButton';

export default function App() {
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
    <div ref={containerRef} className="min-h-screen bg-background text-foreground relative">
      <Navigation />
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-gray-600 to-black origin-left z-50"
        style={{ scaleX }}
      />

      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="work">
          <Work />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
      {/* <AIChatButton /> */}
    </div>
  );
}
