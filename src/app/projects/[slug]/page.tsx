"use client";

import { motion } from 'framer-motion';
import Navbar from '../../../components/Navbar';
import ProjectDetailHero from '../../../components/ProjectDetailHero';
import { projects } from '../../../data/projects';
import AwsProjectDetail from '../../../components/projects/AwsProjectDetail';
import RootinProjectDetail from '../../../components/projects/RootinProjectDetail';
import MakeEatProjectDetail from '../../../components/projects/MakeEatProjectDetail';
import HandiersProjectDetail from '../../../components/projects/HandiersProjectDetail';
import KmuProjectDetail from '../../../components/projects/KmuProjectDetail';
import VoriProjectDetail from '../../../components/projects/VoriProjectDetail';
import MajorMatchProjectDetail from '../../../components/projects/MajorMatchProjectDetail';
import JobParserProjectDetail from '../../../components/projects/JobParserProjectDetail';
import BestiaProjectDetail from '../../../components/projects/BestiaProjectDetail';
import EncarProjectDetail from '../../../components/projects/EncarProjectDetail';
import FriendlyProjectDetail from '../../../components/projects/FriendlyProjectDetail';
import ClearGuideProjectDetail from '../../../components/projects/ClearGuideProjectDetail';

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') === params.slug
  );

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <a 
            href="/#work" 
            className="bg-black text-white px-6 py-3 hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            Back to Work
          </a>
        </div>
      </div>
    );
  }

  const getProjectContent = () => {
    switch (project.title) {
      case "Handiers Inc":
        return <HandiersProjectDetail project={project} />;
      case "AWS Content Moderation":
        return <AwsProjectDetail project={project} />;
      case "Rootin":
        return <RootinProjectDetail project={project} />;
      case "MakeEat":
        return <MakeEatProjectDetail project={project} />;
      case "KMU Global Campus":
        return <KmuProjectDetail project={project} />;
      case "VORI":
        return <VoriProjectDetail project={project} />;
      case "MajorMatch":
        return <MajorMatchProjectDetail project={project} />;
      case "AI Job Parser":
        return <JobParserProjectDetail project={project} />;
      case "Bestia":
        return <BestiaProjectDetail project={project} />;
      case "Encar Track 1":
        return <EncarProjectDetail project={project} />;
      case "Friendly":
        return <FriendlyProjectDetail project={project} />;
      case "ClearGuide":
        return <ClearGuideProjectDetail project={project} />;
      default:
        return (
          <div className="py-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-gray-600">This project detail page is being crafted.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ProjectDetailHero project={project} />
      <main className="max-w-7xl mx-auto py-12 px-4">
        <div className="space-y-16">
          {getProjectContent()}
        </div>
      </main>
    </div>
  );
} 