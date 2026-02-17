import type { Project } from "@/lib/projects";
import { getDeveloperContent } from "@/lib/projects/developer-content";
import {
  DeveloperHero,
  DeveloperMetaBar,
  DeveloperOverview,
  DeveloperArchitecture,
  DeveloperFeatureBlock,
  DeveloperImpact,
  DeveloperFooter,
} from "./developer";

interface DeveloperDetailProps {
  project: Project;
}

/**
 * Developer-type project detail page (engineering / technical).
 * Used for: Frontend, Backend, Hardware, Fullstack, Product Engineering Manager, etc.
 */
export function DeveloperDetail({ project }: DeveloperDetailProps) {
  const c = getDeveloperContent(project.slug, project);

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

      {/* The Challenge */}
      {(c.challengeSections?.length ? c.challengeSections : null) ? (
        <DeveloperOverview sections={c.challengeSections!} />
      ) : c.challengeParagraph ? (
        <DeveloperOverview paragraph={c.challengeParagraph} />
      ) : null}

      {/* System Architecture */}
      {c.architecture && (
        <DeveloperArchitecture data={c.architecture} />
      )}

      {/* Key Features */}
      {c.features && c.features.length > 0 && (
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-32">
          {c.features.map((feature) => (
            <DeveloperFeatureBlock key={feature.id} feature={feature} />
          ))}
        </section>
      )}

      {/* Impact */}
      {c.impactStats && c.impactStats.length > 0 && (
        <DeveloperImpact
          title={c.impactTitle ?? "Project Impact"}
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
