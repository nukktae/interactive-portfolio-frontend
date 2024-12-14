"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import { ChatInterface } from '../../components/ChatInterface';

export default function ChatPage() {
  const [initialPrompt, setInitialPrompt] = useState('');
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    const storedPrompt = localStorage.getItem('chatPrompt');
    
    if (storedUserType) setUserType(storedUserType);
    if (storedPrompt) setInitialPrompt(storedPrompt);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />
      <div className="h-[calc(100vh-64px)]">
        <ChatInterface />
      </div>
    </div>
  );
} 