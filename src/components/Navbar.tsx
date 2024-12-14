import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-semibold">Anu's Portfolio</Link>
        <div className="flex items-center gap-4 text-gray-400">
          <Link href="/projects" className="text-white transition-colors">Projects</Link>
          <Link href="/chat" className="hover:text-white transition-colors">AI Portfolio</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
} 