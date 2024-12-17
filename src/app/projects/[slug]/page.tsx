"use client";

import { motion } from 'framer-motion';
import Navbar from '../../../components/Navbar';
import ProjectDetailHero from '../../../components/ProjectDetailHero';
import { projects } from '../../../data/projects';
import Image from 'next/image';
import AwsProjectDetail from '../../../components/projects/AwsProjectDetail';
import RootinProjectDetail from '../../../components/projects/RootinProjectDetail';
import MakeEatProjectDetail from '../../../components/projects/MakeEatProjectDetail';

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  );

  if (!project) return <div>Project not found</div>;

  const getProjectContent = () => {
    switch (project.title) {
      case "AWS Content Moderation":
        return <AwsProjectDetail project={project} />;
      case "Rootin":
        return <RootinProjectDetail project={project} />;
      case "MakeEat":
        return <MakeEatProjectDetail project={project} />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
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