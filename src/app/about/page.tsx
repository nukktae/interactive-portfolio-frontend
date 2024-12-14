"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Navbar from '../../components/Navbar';

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="max-w-5xl mx-auto py-16 px-4">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.h1 
            className="text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hello, I'm Anu <motion.span animate={{ rotate: [0, 14, 0] }} transition={{ repeat: Infinity, duration: 2 }}>👋</motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            UX Engineering Student & Creative Developer
          </motion.p>
        </motion.div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          <motion.div
            className="bg-[#0A0A0F] rounded-3xl p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl font-bold mb-4">My Journey 🚀</h2>
            <p className="text-gray-400 leading-relaxed">
              As a UX Engineering student, I blend creativity with technical expertise. 
              My passion lies in creating intuitive, user-centered applications that make 
              a real difference in people's lives.
            </p>
          </motion.div>

          <motion.div
            className="bg-[#0A0A0F] rounded-3xl p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl font-bold mb-4">Hobbies & Interests 🎨</h2>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, you'll find me exploring digital art, practicing 
              photography, and staying up-to-date with the latest UX trends.
            </p>
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.div
          className="bg-[#0A0A0F] rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Let's <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Connect</span>
          </h2>

          <div className="grid md:grid-cols-[2fr,1fr] gap-12">
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 bg-[#12121A] rounded-2xl border-none focus:ring-2 focus:ring-purple-500 transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 bg-[#12121A] rounded-2xl border-none focus:ring-2 focus:ring-purple-500 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full p-4 bg-[#12121A] rounded-2xl border-none focus:ring-2 focus:ring-purple-500 transition-all"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <motion.button
                type="submit"
                className="w-full p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl font-semibold text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>

            <div className="flex flex-col justify-center items-center gap-6">
              <div className="flex gap-4">
                <SocialLink href="https://github.com/nukktae" icon={<FaGithub size={24} />} />
                <SocialLink href="https://linkedin.com/in/yourusername" icon={<FaLinkedin size={24} />} />
                <SocialLink href="mailto:anu.bnda@gmail.com" icon={<FaEnvelope size={24} />} />
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 bg-[#12121A] rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all"
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
} 