"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import AboutExpandedView from './AboutExpandedView';
import SectionWrapper from './SectionWrapper';

type ExpandedSection = 'journey' | 'hobbies' | null;

export default function AboutSection() {
  const [expandedSection, setExpandedSection] = useState<ExpandedSection>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Intro Section */}
        <motion.div 
          className="text-center space-y-4 mb-24"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-7xl font-bold tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#498FD8] via-[#D86089] to-[#FB9D5B]">
              Me
            </span>
          </motion.h1>
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Crafting digital experiences through code and design
          </motion.p>
          
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#498FD8]/5 via-[#D86089]/5 to-[#FB9D5B]/5 rounded-3xl blur-xl" />
            <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/20">
              <p className="text-gray-600 leading-relaxed">
                From UX Engineering student to full-stack developer, I'm passionate about creating intuitive and impactful digital 
                solutions. My journey spans across different cultures and technologies, shaping my unique approach to problem-solving.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {/* Journey Card */}
          <motion.div
            className="group cursor-pointer"
            onClick={() => setExpandedSection('journey')}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-gradient-to-br from-[#498FD8]/10 via-[#D86089]/10 to-[#FB9D5B]/10 rounded-3xl p-8 border border-[#DDCCD0]/20 backdrop-blur-sm hover:shadow-xl hover:shadow-[#498FD8]/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">🎨</span>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-[#498FD8] via-[#D86089] to-[#FB9D5B] bg-clip-text text-transparent">
                  My Journey
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                From UX Engineering student to full-stack developer, exploring the intersection of design and technology.
              </p>
              <span className="text-[#498FD8] group-hover:text-[#D86089] transition-colors font-medium">
                Discover more →
              </span>
            </div>
          </motion.div>

          {/* Hobbies Card */}
          <motion.div
            className="group cursor-pointer"
            onClick={() => setExpandedSection('hobbies')}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-gradient-to-br from-[#498FD8]/10 via-[#D86089]/10 to-[#FB9D5B]/10 rounded-3xl p-8 border border-[#DDCCD0]/20 backdrop-blur-sm hover:shadow-xl hover:shadow-[#498FD8]/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">🎨</span>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-[#498FD8] via-[#D86089] to-[#FB9D5B] bg-clip-text text-transparent">
                  Hobbies & Interests
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                When I'm not coding, you'll find me exploring digital art, practicing 
                photography, and staying up-to-date with UX trends.
              </p>
              <span className="text-[#498FD8] group-hover:text-[#D86089] transition-colors font-medium">
                Discover more →
              </span>
            </div>
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#498FD8]/10 via-[#D86089]/10 to-[#FB9D5B]/10 rounded-3xl blur-3xl" />
          <div className="relative bg-[#DDCCD0]/5 rounded-3xl p-12 border border-[#DDCCD0]/20 backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#498FD8] via-[#D86089] to-[#FB9D5B] bg-clip-text text-transparent">
              Let's Connect
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Find me on</h3>
                <div className="flex gap-6">
                  <motion.a
                    href="https://github.com/nukktae"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#498FD8] transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaGithub className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/anu-bilegdemberel-445366318"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#D86089] transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="mailto:anu.bnda@gmail.com"
                    className="text-gray-600 hover:text-[#FB9D5B] transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaEnvelope className="w-6 h-6" />
                  </motion.a>
                </div>
                <p className="text-gray-700">
                  Feel free to reach out for collaborations or just a friendly chat!
                </p>
              </div>

              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/50 rounded-xl border border-gray-200 
                             focus:border-[#498FD8] focus:outline-none focus:ring-2 
                             focus:ring-[#498FD8]/20 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/50 rounded-xl border border-gray-200 
                             focus:border-[#498FD8] focus:outline-none focus:ring-2 
                             focus:ring-[#498FD8]/20 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/50 rounded-xl border border-gray-200 
                             focus:border-[#498FD8] focus:outline-none focus:ring-2 
                             focus:ring-[#498FD8]/20 transition-all resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl text-white font-medium
                           bg-gradient-to-r from-[#498FD8] to-[#D86089] 
                           hover:from-[#498FD8]/90 hover:to-[#D86089]/90
                           transform hover:scale-[1.02] active:scale-[0.98]
                           transition-all duration-200"
                >
                  Send Message
                </button>
              </motion.form>
            </div>
          </div>
        </motion.div>

        {/* Expanded Views */}
        {expandedSection && (
          <AboutExpandedView 
            section={expandedSection} 
            onClose={() => setExpandedSection(null)} 
          />
        )}
      </div>
    </SectionWrapper>
  );
} 