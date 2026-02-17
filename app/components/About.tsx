import Image from "next/image";

const FISHING_IMAGE =
  "https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-18839399-5b84-49a1-ba3e-5a36ffe52b6d.jpg";
const CITIES_IMAGE =
  "https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-7fe66716-9202-46bf-9db9-b09f47f6eac0.jpg";
const BOOKS_IMAGE =
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80";
const LANGUAGES_IMAGE =
  "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80";
const PHOTOGRAPHY_IMAGE =
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80";

const CARDS = [
  {
    id: "patience",
    image: FISHING_IMAGE,
    imageAlt: "Calm lake at dawn with a minimalist fishing setup",
    title: "The Art of Patience",
    description:
      "Fishing trains patience and timing—skills I apply to product decisions and long-term building.",
  },
  {
    id: "countries",
    image: CITIES_IMAGE,
    imageAlt: "Cityscapes representing global living",
    title: "Living Across Continents",
    description:
      "A cross-cultural lens that shapes how I design for diverse users and contexts.",
  },
  {
    id: "books",
    image: BOOKS_IMAGE,
    imageAlt: "Books and reading",
    title: "Reading & Book Notes",
    description:
      "Design, product, and philosophy—I use reading to sharpen judgment and long-term thinking.",
  },
  {
    id: "languages",
    image: LANGUAGES_IMAGE,
    imageAlt: "Learning languages and study",
    title: "Learning Languages",
    description:
      "New languages rewire how I think and communicate—useful for product and collaboration.",
  },
  {
    id: "photography",
    image: PHOTOGRAPHY_IMAGE,
    imageAlt: "Street photography",
    title: "Street Photography",
    description:
      "Composition and narrative in chaos—skills that transfer to layout, hierarchy, and storytelling in design.",
  },
] as const;

export function About() {
  return (
    <section
      id="about"
      className="w-full py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-gray-100"
    >
      {/* Section header — same style as Selected Works (centered, label + title) */}
      <div className="flex flex-col items-center mb-12 md:mb-16">
        <span className="text-[#6C6FF2] font-semibold tracking-widest uppercase text-sm mb-4">
          Beyond the pixels
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-[#111111]">
          Offline Flow
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto">
          Where patience meets precision. Beyond the pixels across 4 continents.
        </p>
      </div>

      {/* Horizontal scrollable cards — Instagram / Discover briefings style */}
      <div className="overflow-x-auto overflow-y-hidden pb-4 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-20 lg:px-20">
        <div className="flex gap-6 md:gap-8 min-w-max lg:min-w-0 lg:grid lg:grid-cols-5 lg:max-w-7xl lg:mx-auto">
          {CARDS.map((card) => (
            <article
              key={card.id}
              className="w-[280px] md:w-[320px] shrink-0 rounded-2xl bg-white shadow-lg overflow-hidden snap-center snap-always group lg:shrink lg:w-full"
            >
              {/* Image with title overlay */}
              <div className="relative w-full aspect-4/5 min-h-[280px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 280px, 320px"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity group-hover:bg-black/40">
                  <h3 className="text-white text-xl md:text-2xl font-bold text-center px-4">
                    {card.title}
                  </h3>
                </div>
              </div>
              {/* Why I love it — short description */}
              <div className="bg-white px-5 py-4 border-t border-gray-100">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
