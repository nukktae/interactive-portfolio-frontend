"use client";

import { motion } from 'framer-motion';
import BackgroundAnimation from './shared/BackgroundAnimation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-white">
      <div className="fixed inset-0 z-0">
        <BackgroundAnimation />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 