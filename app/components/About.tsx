import type { SeasonCardProps } from "./SeasonalHoverCards";
import { SeasonalHoverCards } from "./SeasonalHoverCards";

const FISHING_IMAGE = "/assets/images/other/fish.jpg";
const TRAVEL_IMAGE = "/assets/images/other/travel.jpg";
const BOOKS_IMAGE = "/assets/images/other/book.jpg";
const LANGUAGES_IMAGE = "/assets/images/other/language.jpg";
const PHOTOGRAPHY_IMAGE = "/assets/images/other/photo.jpg";

const CARDS: SeasonCardProps[] = [
  {
    title: "The Art of Patience",
    subtitle: "Timing + Long-term",
    description:
      "Fishing trains patience and timing—skills I apply to product decisions and long-term building.",
    imageSrc: FISHING_IMAGE,
    imageAlt: "Calm lake at dawn with a minimalist fishing setup",
  },
  {
    title: "Travelling",
    subtitle: "Hot Envo + Vacations",
    description:
      "A cross-cultural lens that shapes how I design for diverse users and contexts.",
    imageSrc: TRAVEL_IMAGE,
    imageAlt: "Cityscapes representing global living",
  },
  {
    title: "Reading books",
    subtitle: "Design + Philosophy",
    description:
      "Design, product, and philosophy—I use reading to sharpen judgment and long-term thinking.",
    imageSrc: BOOKS_IMAGE,
    imageAlt: "Books and reading",
  },
  {
    title: "Learning Languages",
    subtitle: "Thinking + Communication",
    description:
      "New languages rewire how I think and communicate—useful for product and collaboration.",
    imageSrc: LANGUAGES_IMAGE,
    imageAlt: "Learning languages and study",
  },
  {
    title: "Street Photography",
    subtitle: "Composition + Storytelling",
    description:
      "Composition and narrative in chaos—skills that transfer to layout, hierarchy, and storytelling in design.",
    imageSrc: PHOTOGRAPHY_IMAGE,
    imageAlt: "Street photography",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-12 lg:px-20 bg-gray-100"
    >
      {/* Section header — same style as Selected Works (centered, label + title) */}
      <div className="flex flex-col items-center mb-8 md:mb-16">
        <span className="text-[#6C6FF2] font-semibold tracking-widest uppercase text-xs md:text-sm mb-2 md:mb-4">
          Beyond the pixels
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8 text-[#111111]">
          Offline Flow
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto text-sm md:text-base px-1">
          Where patience meets precision. Beyond the pixels across 4 continents.
        </p>
      </div>

      {/* Seasonal hover cards — expand on hover, description reveals */}
      <div className="overflow-x-auto overflow-y-hidden pb-4 -mx-4 px-4 md:-mx-12 md:px-12 lg:-mx-20 lg:px-20">
        <div className="min-w-max lg:min-w-0 lg:max-w-7xl lg:mx-auto">
          <SeasonalHoverCards cards={CARDS} className="px-0!" />
        </div>
      </div>
    </section>
  );
}
