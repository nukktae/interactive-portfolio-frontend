"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "text-white" : "text-gray-400 hover:text-white";
  };

  return (
    <nav className="border-b border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-white text-xl font-semibold">
            Anu's Portfolio
          </Link>
          <div className="hidden sm:flex items-center gap-2 border-l border-gray-700/50 pl-2 ml-2">
            <SiTypescript className="w-5 h-5 text-blue-400" />
            <FaReact className="w-5 h-5 text-cyan-400" />
            <SiTailwindcss className="w-5 h-5 text-teal-400" />
            <FaNodeJs className="w-5 h-5 text-green-400" />
            <FaDatabase className="w-5 h-5 text-yellow-400" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link 
            href="/chat" 
            className={`${isActive('/chat')} transition-colors`}
          >
            AI Portfolio
          </Link>
          <Link 
            href="/projects" 
            className={`${isActive('/projects')} transition-colors`}
          >
            Projects
          </Link>
          <Link 
            href="/about" 
            className={`${isActive('/about')} transition-colors`}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
} 