"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "text-white" : "text-gray-400 hover:text-white";
  };

  return (
    <nav className="border-b border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-semibold">
          Anu's Portfolio
        </Link>
        <div className="flex items-center gap-4">
          <Link 
            href="/about" 
            className={`${isActive('/about')} transition-colors`}
          >
            About
          </Link>
          <Link 
            href="/projects" 
            className={`${isActive('/projects')} transition-colors`}
          >
            Projects
          </Link>
          <Link 
            href="/chat" 
            className={`${isActive('/chat')} transition-colors`}
          >
            AI Portfolio
          </Link>
        </div>
      </div>
    </nav>
  );
} 