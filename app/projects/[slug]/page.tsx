import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/projects";
import { Header } from "@/app/components/Header";
import { DesignerDetail } from "@/app/components/projects/DesignerDetail";
import { DeveloperDetail } from "@/app/components/projects/DeveloperDetail";
import { FullstackDetail } from "@/app/components/projects/FullstackDetail";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {project.detailType === "designer" && (
        <DesignerDetail project={project} />
      )}
      {project.detailType === "developer" && (
        <DeveloperDetail project={project} />
      )}
      {project.detailType === "fullstack" && (
        <FullstackDetail project={project} />
      )}
    </div>
  );
}
