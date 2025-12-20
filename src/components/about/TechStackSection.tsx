'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Code, Database, Sparkles } from 'lucide-react';

export default function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "BRANDING",
      description: "Unique identity that makes brands memorable"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "DESIGN",
      description: "Beautiful interfaces that work perfectly"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "DEVELOPMENT",
      description: "Concepts into powerful digital experiences"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "INNOVATION",
      description: "Interactive elements that engage users"
    }
  ];

  return (
    <section id="tech-stack" className="relative z-10 py-24 md:py-32" ref={ref}>
      <div className="px-6 md:px-12 lg:px-20 xl:px-32 max-w-[1800px] mx-auto">
        {/* Large Background Text */}
        <div className="relative">
          <motion.div
            className="text-[3rem] md:text-[5rem] lg:text-[7rem] font-black text-foreground/5 text-center mb-16 overflow-hidden leading-none"
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            ANU
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            {/* Left Side - Title */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-sm font-bold tracking-widest text-foreground/60 mb-6 uppercase">
                MY SERVICES
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-foreground leading-none">
                I CAN HELP<br />
                YOU WITH
              </h2>
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