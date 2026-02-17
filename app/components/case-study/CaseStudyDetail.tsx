import type { CaseStudyCard } from "@/lib/case-studies";
import type { CaseStudyDetailContent } from "@/lib/case-studies/types";
import { getCaseStudyContent } from "@/lib/case-studies/content";
import {
  CaseStudyHero,
  CaseStudyHeroImage,
  CaseStudyOverview,
  CaseStudyPhase01,
  CaseStudyPhase02,
  CaseStudyPhase03,
  CaseStudyPhase04,
  CaseStudyFooter,
} from "./index";

interface CaseStudyDetailProps {
  caseStudy: CaseStudyCard;
}

export function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  const c = getCaseStudyContent(
    caseStudy.slug,
    caseStudy.title,
    caseStudy.image,
    caseStudy.imageAlt
  );

  return (
    <article className="min-h-screen bg-white text-[#111111]">
      <CaseStudyHero
        tags={c.tags}
        title={c.title}
        titleHighlight={c.titleHighlight}
        subtitle={c.subtitle}
      />
      <CaseStudyHeroImage src={c.heroImage} alt={c.heroImageAlt} />
      <CaseStudyOverview
        challenge={c.overview.challenge}
        role={c.overview.role}
        metrics={c.overview.metrics}
      />
      {c.phase01 && (
        <CaseStudyPhase01
          label={c.phase01.label}
          title={c.phase01.title}
          subtitle={c.phase01.subtitle}
          cards={c.phase01.cards}
        />
      )}
      {c.phase02 && (
        <CaseStudyPhase02
          label={c.phase02.label}
          title={c.phase02.title}
          steps={c.phase02.steps}
          image={c.phase02.image}
          imageAlt={c.phase02.imageAlt}
        />
      )}
      {c.phase03 && (
        <CaseStudyPhase03
          label={c.phase03.label}
          title={c.phase03.title}
          subtitle={c.phase03.subtitle}
          images={c.phase03.images}
        />
      )}
      {c.phase04 && c.phase04.stack.length > 0 && (
        <CaseStudyPhase04
          label={c.phase04.label}
          title={c.phase04.title}
          stack={c.phase04.stack}
          crawlerTitle={c.phase04.crawlerTitle}
          crawlerDescription={c.phase04.crawlerDescription}
          crawlerTags={c.phase04.crawlerTags}
        />
      )}
      <CaseStudyFooter nextTitle={c.nextTitle} nextSlug={c.nextSlug} />
    </article>
  );
}
