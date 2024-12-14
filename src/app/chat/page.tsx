"use client";

import { Suspense } from 'react';
import { ChatInterface } from '../../components/ChatInterface';
import Navbar from '../../components/Navbar';

function ChatPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-pulse text-gray-400">Loading chat...</div>
        </div>
      }>
        <ChatInterface />
      </Suspense>
    </div>
  );
}

export default ChatPage; 