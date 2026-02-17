import { notFound } from "next/navigation";
import { getCaseStudyBySlug } from "@/lib/case-studies";
import { Header } from "@/app/components/Header";
import { CaseStudyDetail } from "@/app/components/case-study/CaseStudyDetail";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CaseStudyDetail caseStudy={caseStudy} />
    </div>
  );
}
