export interface CaseStudyCard {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  offset?: boolean;
}

export interface CaseStudyDetailContent {
  tags: string[];
  title: string;
  titleHighlight?: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  overview: {
    challenge: string;
    role: string[];
    metrics: { value: string; label: string }[];
  };
  phase01?: {
    label: string;
    title: string;
    subtitle: string;
    cards: { icon: string; title: string; description: string }[];
  };
  phase02?: {
    label: string;
    title: string;
    steps: { title: string; description: string }[];
    image: string;
    imageAlt: string;
  };
  phase03?: {
    label: string;
    title: string;
    subtitle: string;
    images: { src: string; alt: string }[];
  };
  phase04?: {
    label: string;
    title: string;
    stack: { label: string; value: string }[];
    crawlerTitle?: string;
    crawlerDescription?: string;
    crawlerTags?: string[];
  };
  nextTitle?: string;
  nextSlug?: string;
}
