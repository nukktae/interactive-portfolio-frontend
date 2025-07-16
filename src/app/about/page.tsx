"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import { useRouter } from 'next/navigation';

export default function AboutPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [activeSection, setActiveSection] = useState<'journey' | 'hobbies' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-20">
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
              Me
            </span>
          </motion.h1>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Crafting digital experiences through code and design
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <motion.div
            className="group relative"
            onMouseEnter={() => setActiveSection('journey')}
            onMouseLeave={() => setActiveSection(null)}
            onClick={() => router.push('/journey')}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 rounded-3xl blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-gray-900/50 rounded-3xl p-8 border border-gray-800/50 backdrop-blur-sm hover:border-violet-500/30 transition-all duration-300">
              <motion.div 
                className="flex items-center gap-4 mb-6"
                whileHover={{ x: 5 }}
              >
                <span className="text-4xl">🚀</span>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  My Journey
                </h2>
              </motion.div>
              <p className="text-gray-400 leading-relaxed mb-6">
                From UX Engineering student to full-stack developer, exploring the intersection of design and technology.
              </p>
              <motion.span 
                className="text-violet-400 group-hover:text-violet-300 transition-colors inline-flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                Explore journey →
              </motion.span>
            </div>
          </motion.div>

          <motion.div
            className="group cursor-pointer"
            onClick={() => router.push('/hobbies')}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-gradient-to-br from-green-500/10 to-yellow-500/10 rounded-3xl p-8 border border-gray-800/50 backdrop-blur-sm hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">🎨</span>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                  Hobbies & Interests
                </h2>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                When I'm not coding, you'll find me exploring digital art, practicing 
                photography, and staying up-to-date with UX trends.
              </p>
              <span className="text-green-400 group-hover:text-green-300 transition-colors">
                Discover more →
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-indigo-500/10 to-purple-500/10 rounded-3xl blur-3xl" />
          <div className="relative bg-gray-900/30 rounded-3xl p-12 border border-gray-800/50 backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h3 className="text-2xl font-semibold mb-6">Find me on</h3>
                <div className="flex gap-6">
                  <motion.a
                    href="https://github.com/nukktae"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/anu-bilegdemberel-445366318/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="mailto:anu.bnda@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEnvelope className="w-6 h-6" />
                  </motion.a>
                </div>
                <p className="text-gray-400 mt-6">
                  Feel free to reach out for collaborations or just a friendly chat!
                </p>
              </motion.div>

              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-800/50 rounded-xl border border-gray-700/30 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-800/50 rounded-xl border border-gray-700/30 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-800/50 rounded-xl border border-gray-700/30 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all h-32"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-medium text-white hover:opacity-90 transition-opacity disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
                
                {submitStatus === 'success' && (
                  <p className="text-green-400 text-sm">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-sm">Failed to send message. Please try again.</p>
                )}
              </motion.form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 