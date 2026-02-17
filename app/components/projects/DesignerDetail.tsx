import type { Project } from "@/lib/projects";
import { getDesignerContent } from "@/lib/projects/designer-content";
import { DeveloperHero } from "./developer/DeveloperHero";
import { DeveloperMetaBar } from "./developer/DeveloperMetaBar";
import { DeveloperOverview } from "./developer/DeveloperOverview";
import { DesignerDesignSystem } from "./designer/DesignerDesignSystem";
import { DeveloperFeatureBlock } from "./developer/DeveloperFeatureBlock";
import { DeveloperImpact } from "./developer/DeveloperImpact";
import { DeveloperFooter } from "./developer/DeveloperFooter";

interface DesignerDetailProps {
  project: Project;
}

/** Build meta for DeveloperMetaBar from designer role/tools/timeline/deliverables */
function buildMeta(
  c: ReturnType<typeof getDesignerContent>,
  project: Project
) {
  const role = (c.role ?? "").replace(/\n/g, " ").trim();
  const stack = (c.tools ?? "").replace(/\n/g, " ").trim();
  const timeline = (c.timeline ?? project.date).replace(/\n/g, " ").trim();
  return { role, stack, timeline };
}

/** Combine challenge paragraphs and key objectives into one overview paragraph */
function buildChallengeParagraph(
  c: ReturnType<typeof getDesignerContent>
): string {
  const paras = c.challengeParagraphs ?? [];
  const objectives = c.keyObjectives ?? [];
  let text = paras.join(" ");
  if (objectives.length > 0) {
    const objText = objectives
      .map((o) => `${o.label} ${o.description}`)
      .join(". ");
    text = text ? `${text} Key objectives: ${objText}` : objText;
  }
  return text;
}

/** Derive feature blocks: use c.features if set, else map solutionItems to feature shape */
function getFeatureBlocks(
  c: ReturnType<typeof getDesignerContent>
): Array<{
  id: string;
  label: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  imageRight?: boolean;
  usePhoneFrame?: boolean;
  images?: string[];
  imageAlts?: string[];
}> {
  if (c.features && c.features.length > 0) {
    return c.features;
  }
  const items = c.solutionItems ?? [];
  return items.map((item, i) => ({
    id: String(i + 1),
    label: `Feature ${String(i + 1).padStart(2, "0")}`,
    title: item.title,
    description: item.description ?? "",
    tags: [],
    image: item.image,
    imageAlt: item.imageAlt,
    imageRight: i % 2 === 1,
    usePhoneFrame: c.solutionUsePhoneFrame ?? false,
  }));
}

/**
 * Designer-type project detail page — same structure as Fullstack/Developer.
 * Uses DeveloperHero, DeveloperMetaBar, DeveloperOverview, DesignerDesignSystem,
 * DeveloperFeatureBlock (from features or solutionItems), DeveloperImpact, DeveloperFooter.
 */
export function DesignerDetail({ project }: DesignerDetailProps) {
  const c = getDesignerContent(project.slug, project);
  const meta = buildMeta(c, project);
  const challengeParagraph = buildChallengeParagraph(c);
  const featureBlocks = getFeatureBlocks(c);

  return (
    <article className="min-h-screen bg-white text-[#111111]">
      <DeveloperHero
        tag={c.tag ?? project.category}
        title={project.title}
        subtitle={c.subtitle ?? ""}
        audience={c.audience}
      />

      <div className="px-6 md:px-12 lg:px-20">
        <DeveloperMetaBar meta={meta} />
      </div>

      {(c.challengeSections?.length ? c.challengeSections : null) ? (
        <DeveloperOverview sections={c.challengeSections!} />
      ) : challengeParagraph ? (
        <DeveloperOverview paragraph={challengeParagraph} />
      ) : null}

      {(c.designSystemTitle || c.designSystemColors?.length || c.designSystemImage) && (
        <DesignerDesignSystem
          title={c.designSystemTitle ?? "Design system"}
          description={c.designSystemDescription ?? ""}
          image={c.designSystemImage}
          imageAlt={c.designSystemImageAlt}
          image2={c.designSystemImage2}
          imageAlt2={c.designSystemImageAlt2}
          image3={c.designSystemImage3}
          imageAlt3={c.designSystemImageAlt3}
          typography={c.designSystemTypography}
          colors={c.designSystemColors}
        />
      )}

      {featureBlocks.length > 0 && (
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-32">
          {featureBlocks.map((feature) => (
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
