import Link from 'next/link';
import ProjectCards from '../../components/ProjectCards';
import Navbar from '../../components/Navbar';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

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