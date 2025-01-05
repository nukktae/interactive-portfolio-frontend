"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8">
      <form className="space-y-6">
        <div>
          <label 
            className="text-lg font-medium bg-gradient-to-r from-[#498FD8] to-[#D86089] bg-clip-text text-transparent"
          >
            Name
          </label>
          <input
            type="text"
            className="w-full mt-2 p-4 rounded-2xl bg-white/80 backdrop-blur-sm 
                     border border-[#498FD8]/20 hover:border-[#498FD8]/40
                     focus:border-[#498FD8]/60 focus:ring-2 focus:ring-[#498FD8]/20
                     transition-all duration-200"
          />
        </div>
        
        <div>
          <label 
            className="text-lg font-medium bg-gradient-to-r from-[#498FD8] to-[#D86089] bg-clip-text text-transparent"
          >
            Email
          </label>
          <input
            type="email"
            className="w-full mt-2 p-4 rounded-2xl bg-white/80 backdrop-blur-sm 
                     border border-[#498FD8]/20 hover:border-[#498FD8]/40
                     focus:border-[#498FD8]/60 focus:ring-2 focus:ring-[#498FD8]/20
                     transition-all duration-200"
          />
        </div>

        <div>
          <label 
            className="text-lg font-medium bg-gradient-to-r from-[#498FD8] to-[#D86089] bg-clip-text text-transparent"
          >
            Message
          </label>
          <textarea
            rows={6}
            className="w-full mt-2 p-4 rounded-2xl bg-white/80 backdrop-blur-sm 
                     border border-[#498FD8]/20 hover:border-[#498FD8]/40
                     focus:border-[#498FD8]/60 focus:ring-2 focus:ring-[#498FD8]/20
                     transition-all duration-200"
          />
        </div>

        <button
          type="submit"
          className="w-full p-4 rounded-2xl text-white text-lg font-medium
                   bg-gradient-to-r from-[#498FD8] to-[#D86089] 
                   hover:from-[#498FD8]/90 hover:to-[#D86089]/90
                   transform hover:scale-[1.02] active:scale-[0.98]
                   transition-all duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
} 