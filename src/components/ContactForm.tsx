'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section id="contact" className="bg-yellow-400 text-black py-24 md:py-32" ref={ref}>
      <div className="px-6 md:px-12 lg:px-20 xl:px-32 max-w-[1800px] mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="text-sm font-bold tracking-widest text-black/60 mb-6 uppercase">
              LET'S TALK
            </div>
            <h2 className="text-6xl md:text-8xl font-black leading-none mb-8">
              READY TO<br />
              CREATE?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <p className="text-xl max-w-2xl mx-auto text-black/80">
              Have a project in mind? Let's discuss how we can bring your ideas to life.
              I'm always excited to work on new challenges.
            </p>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <a
                href="mailto:anu.bn@yahoo.com"
                className="group inline-flex items-center gap-4 text-2xl md:text-3xl font-black uppercase tracking-tight hover:text-black/80 transition-colors duration-300"
              >
                <span>anu.bn@yahoo.com</span>
                <ArrowUpRight className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
              </a>
            </div>

            <div className="pt-8 space-y-4">
              <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-black/60">
                <a
                  href="https://github.com/nukktae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold tracking-widest uppercase hover:text-black transition-colors duration-300"
                >
                  GITHUB
                </a>
                <a
                  href="https://www.linkedin.com/in/anu-bilegdemberel-445366318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold tracking-widest uppercase hover:text-black transition-colors duration-300"
                >
                  LINKEDIN
                </a>
                <div className="text-sm font-bold tracking-widest uppercase">
                  AVAILABLE FOR WORK
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 