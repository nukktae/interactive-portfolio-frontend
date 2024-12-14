import Link from 'next/link';
import ProjectCards from '../../components/ProjectCards';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation Bar */}
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-white mb-8">
          Featured <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
        </h1>
        <ProjectCards />
      </main>
    </div>
  );
} 