import type { Project } from "@/lib/projects";
import { getFullstackContent } from "@/lib/projects/fullstack-content";
import { DeveloperHero } from "./developer/DeveloperHero";
import { DeveloperMetaBar } from "./developer/DeveloperMetaBar";
import { DeveloperOverview } from "./developer/DeveloperOverview";
import { DesignerDesignSystem } from "./designer/DesignerDesignSystem";
import { DeveloperArchitecture } from "./developer/DeveloperArchitecture";
import { DeveloperFeatureBlock } from "./developer/DeveloperFeatureBlock";
import { DeveloperImpact } from "./developer/DeveloperImpact";
import { DeveloperFooter } from "./developer/DeveloperFooter";

interface FullstackDetailProps {
  project: Project;
}

/**
 * Fullstack project detail: combines UI/UX (design) and engineering (backend + frontend) sections.
 * Used for projects where you did both design and fullstack development.
 */
export function FullstackDetail({ project }: FullstackDetailProps) {
  const c = getFullstackContent(project.slug, project);

  return (
    <article className="min-h-screen bg-white text-[#111111]">
      <DeveloperHero
        tag={c.tag ?? project.category}
        title={project.title}
        subtitle={c.subtitle ?? ""}
      />

      {c.meta && (
        <div className="px-6 md:px-12 lg:px-20">
          <DeveloperMetaBar meta={c.meta} />
        </div>
      )}

      {(c.challengeSections?.length ? c.challengeSections : null) ? (
        <DeveloperOverview sections={c.challengeSections!} />
      ) : c.challengeParagraph ? (
        <DeveloperOverview paragraph={c.challengeParagraph} />
      ) : null}

      {(c.designSystemTitle || c.designSystemColors?.length) && (
        <DesignerDesignSystem
          title={c.designSystemTitle ?? "Design system"}
          description={c.designSystemDescription ?? ""}
          colors={c.designSystemColors}
        />
      )}

      {c.architecture && (
        <DeveloperArchitecture data={c.architecture} />
      )}

      {c.features && c.features.length > 0 && (
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-32">
          {c.features.map((feature) => (
            <DeveloperFeatureBlock key={feature.id} feature={feature} />
          ))}
        </section>
      )}

      {c.impactStats && c.impactStats.length > 0 && (
        <DeveloperImpact
          title={c.impactTitle ?? "Impact & results"}
          subtitle={c.impactSubtitle ?? ""}
          stats={c.impactStats}
        />
      )}

      {c.reflection && (
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-t border-gray-50">
          <div className="lg:col-span-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#111111]">
              Reflection
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {c.reflection}
            </p>
          </div>
        </section>
      )}

      <DeveloperFooter
        nextProjectTitle={c.nextProjectTitle}
        nextProjectSlug={c.nextProjectSlug}
      />
    </article>
  );
}
