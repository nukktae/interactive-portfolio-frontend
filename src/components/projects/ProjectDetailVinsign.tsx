"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";
import { ProjectDetailContent } from "@/types/projectDetail";
import { competitionsProjects } from "@/data/competitionsProjects";
import { generateSlug } from "@/content/projects";
import {
  Zap,
  ArrowUpRight,
  Check,
  Code2,
  Server,
  Cloud,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const accent = "#6C6FF2";

interface ProjectDetailVinsignProps {
  project: Project;
  content: ProjectDetailContent;
  language: "en" | "ko";
  allProjects: Project[];
}

export default function ProjectDetailVinsign({
  project,
  content,
  language,
  allProjects,
}: ProjectDetailVinsignProps) {
  const comp = competitionsProjects.find(
    (c) => c.title === project.title || c.titleKo === project.titleKo
  );
  const roleSummary =
    project.roles?.map((r) => r.area).join(" & ") ||
    comp?.role ||
    "Full Stack & Product Management";
  const timeline = comp?.period
    ? (language === "ko" ? comp.period.replace(/Present/g, "현재") : comp.period)
    : "2025";
  const coreStack =
    project.technologies?.slice(0, 3).join(", ") || "Next.js, TypeScript";
  const title =
    (language === "ko" && project.titleKo ? project.titleKo : project.title) ||
    project.title;
  const description =
    (language === "ko" && project.descriptionKo
      ? project.descriptionKo
      : project.description) || project.detailedDescription?.slice(0, 200) + ".";

  const overviewSection = content.sections.find(
    (s) => s.id === "overview" || s.id === "problem"
  );
  const overviewText =
    overviewSection?.type === "overview" && typeof overviewSection.content === "string"
      ? overviewSection.content
      : overviewSection?.type === "problem" && "content" in overviewSection
        ? (overviewSection.content as string)
        : (language === "ko" && project.descriptionKo
            ? project.descriptionKo
            : project.description) ||
          project.detailedDescription?.slice(0, 400) + ".";

  const systemArch =
    content.sections.find((s) => s.id === "system-architecture") as
      | { categories?: { title: string; items: string[] }[] }
      | undefined;
  const archCategories = systemArch?.categories || [];
  const featureSections = content.sections.filter((s) => s.id === "key-features");
  const keyFeatures =
    featureSections[0] && featureSections[0].type === "key-features"
      ? (featureSections[0].userFeatures || featureSections[0].engineeringFeatures || [])
      : [];
  const resultsSection = content.sections.find((s) => s.id === "results");
  const metrics =
    (resultsSection?.type === "results" && resultsSection.metrics) ||
    project.metrics ||
    [];
  const displayMetrics = metrics.slice(0, 3);

  const currentIndex = allProjects.findIndex(
    (p) => generateSlug(p.title) === generateSlug(project.title)
  );
  const nextProject =
    currentIndex >= 0 && currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : null;
  const nextTitle =
    nextProject &&
    (language === "ko" && nextProject.titleKo
      ? nextProject.titleKo
      : nextProject.title);

  const coverImage = project.image || (project.images && project.images[0]) || "";
  const featureImages = (project.images || []).filter((_, i) => i > 0);

  return (
    <div className="bg-white text-[#111111] min-h-screen">
      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-20 pt-24 pb-16">
        <div className="max-w-4xl">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
            style={{ backgroundColor: `${accent}20`, color: accent }}
          >
            <Zap className="w-3.5 h-3.5" />
            {roleSummary}
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mb-12">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-10 border-t border-gray-100">
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
              {language === "ko" ? "역할" : "My Role"}
            </p>
            <p className="text-base md:text-lg font-medium">
              {comp?.role || project.roles?.[0]?.area || "Lead Engineer"}
            </p>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
              {language === "ko" ? "기술 스택" : "Core Stack"}
            </p>
            <p className="text-base md:text-lg font-medium">{coreStack}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
              {language === "ko" ? "기간" : "Timeline"}
            </p>
            <p className="text-base md:text-lg font-medium">{timeline}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
              {language === "ko" ? "프로젝트" : "Live Project"}
            </p>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base md:text-lg font-medium flex items-center gap-2 hover:opacity-80 transition-colors"
                style={{ color: accent }}
              >
                {new URL(project.liveUrl).hostname.replace(/^www\./, "")}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ) : (
              <span className="text-base md:text-lg font-medium text-gray-400">
                —
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Cover Image */}
      {coverImage && (
        <section className="px-6 md:px-12 lg:px-20 pb-24">
          <div className="w-full h-[480px] md:h-[600px] lg:h-[720px] rounded-3xl overflow-hidden bg-gray-50 relative">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1280px"
              priority
            />
          </div>
        </section>
      )}

      {/* The Challenge / Overview */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-gray-50">
        <div className="md:col-span-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            {language === "ko" ? "도전 과제" : "The Challenge"}
          </h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {overviewText}
          </p>
        </div>
      </section>

      {/* System Architecture */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-[#fafafa]">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 mb-12 md:mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {language === "ko" ? "시스템 아키텍처" : "System Architecture"}
            </h2>
            <p className="text-gray-500 max-w-md">
              {language === "ko"
                ? "고성능 백엔드와 직관적인 인터페이스 사이의 간극을 줄입니다."
                : "Bridging the gap between high-performance backend systems and intuitive user interfaces."}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="px-5 py-3 bg-white border border-gray-200 rounded-xl flex items-center gap-3 shadow-sm">
              <Code2 className="w-5 h-5" style={{ color: accent }} />
              <span className="font-medium">
                {language === "ko" ? "프론트엔드" : "Frontend"}
              </span>
            </div>
            <div className="px-5 py-3 bg-white border border-gray-200 rounded-xl flex items-center gap-3 shadow-sm">
              <Server className="w-5 h-5" style={{ color: accent }} />
              <span className="font-medium">
                {language === "ko" ? "백엔드" : "Backend"}
              </span>
            </div>
            <div className="px-5 py-3 bg-white border border-gray-200 rounded-xl flex items-center gap-3 shadow-sm">
              <Cloud className="w-5 h-5" style={{ color: accent }} />
              <span className="font-medium">DevOps</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {(archCategories.length >= 3
            ? archCategories.slice(0, 3)
            : [
                {
                  title: language === "ko" ? "프론트엔드" : "Frontend Engineering",
                  items:
                    project.technologies?.filter((t) =>
                      /react|next|vue|typescript|tailwind/i.test(t)
                    )?.slice(0, 3) || ["React", "TypeScript", "Tailwind"],
                },
                {
                  title: language === "ko" ? "백엔드" : "Backend Infrastructure",
                  items:
                    project.technologies?.filter((t) =>
                      /node|go|python|fastapi|postgres|redis/i.test(t)
                    )?.slice(0, 3) || ["Node.js", "PostgreSQL", "API"],
                },
                {
                  title: language === "ko" ? "제품 전략" : "Product Strategy",
                  items:
                    project.highlights?.slice(0, 3) ||
                    project.features?.slice(0, 3) ||
                    ["Stakeholder alignment", "Roadmap", "UX iteration"],
                },
              ]
          ).map((cat, i) => (
            <div
              key={i}
              className="p-8 md:p-10 bg-white rounded-3xl border border-gray-100 shadow-sm"
            >
              <h3 className="text-lg md:text-xl font-bold mb-6">{cat.title}</h3>
              <ul className="space-y-4 text-gray-600">
                {(cat.items || []).map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: accent }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Key Features */}
      {(keyFeatures.length > 0 || featureImages.length > 0) && (
        <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
          {(keyFeatures.length > 0 ? keyFeatures : [{ title: title, items: project.features?.slice(0, 4) || [] }])
            .slice(0, 2)
            .map((feat, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-24 md:mb-32 first:mb-24 md:first:mb-32 ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={
                    idx % 2 === 1
                      ? "md:order-2 rounded-3xl overflow-hidden bg-gray-100 aspect-square relative"
                      : "rounded-3xl overflow-hidden bg-gray-100 aspect-square relative"
                  }
                >
                  {featureImages[idx] ? (
                    <Image
                      src={featureImages[idx]}
                      alt={feat.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center text-gray-400"
                      style={{ backgroundColor: "#f3f4f6" }}
                    >
                      <span className="text-sm">
                        {language === "ko" ? "이미지" : "Image"}
                      </span>
                    </div>
                  )}
                </div>
                <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                  <span
                    className="font-bold text-sm tracking-widest uppercase mb-4 block"
                    style={{ color: accent }}
                  >
                    {language === "ko" ? "기능" : "Feature"} {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {feat.title}
                  </h2>
                  <p className="text-lg text-gray-500 leading-relaxed mb-8">
                    {Array.isArray(feat.items) && feat.items.length > 0
                      ? feat.items[0]
                      : project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {(project.technologies?.slice(0, 4) || []).map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </section>
      )}

      {/* Impact */}
      {displayMetrics.length > 0 && (
        <section className="px-6 md:px-12 lg:px-20 py-20 md:py-24 mx-4 md:mx-10 mb-24 bg-[#111111] text-white rounded-[48px]">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "ko" ? "프로젝트 임팩트" : "Project Impact"}
            </h2>
            <p className="text-gray-400">
              {language === "ko"
                ? "엔지니어링으로 달성한 측정 가능한 결과."
                : "Measurable results delivered through engineering excellence."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center">
            {displayMetrics.map((metric, i) => (
              <div key={i}>
                <p
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                  style={{ color: accent }}
                >
                  {metric}
                </p>
                <p className="text-gray-400 uppercase tracking-widest text-sm">
                  {language === "ko" ? "성과" : "Result"}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer / Next Project */}
      <footer className="px-6 md:px-12 lg:px-20 py-16 md:py-24 border-t border-gray-100">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          <div>
            <p className="text-gray-400 mb-2">
              {language === "ko" ? "다음 프로젝트" : "Next Project"}
            </p>
            {nextProject ? (
              <Link
                href={`/projects/${generateSlug(nextProject.title)}`}
                className="text-2xl md:text-4xl font-bold hover:opacity-80 transition-colors flex items-center gap-4"
                style={{ color: accent }}
              >
                {nextTitle}
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
              </Link>
            ) : (
              <Link
                href="/#projects"
                className="text-2xl md:text-4xl font-bold hover:opacity-80 transition-colors flex items-center gap-4"
                style={{ color: accent }}
              >
                {language === "ko" ? "모든 프로젝트" : "All Projects"}
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
              </Link>
            )}
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/nukktae"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#6C6FF2] hover:text-white hover:border-[#6C6FF2] transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/anubileg-demberel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#6C6FF2] hover:text-white hover:border-[#6C6FF2] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#6C6FF2] hover:text-white hover:border-[#6C6FF2] transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between gap-4 text-gray-400 text-sm">
          <p>© 2025 Portfolio. Built with precision.</p>
          <p>{language === "ko" ? "탁월함을 위해 설계" : "Designed for Excellence"}</p>
        </div>
      </footer>
    </div>
  );
}
