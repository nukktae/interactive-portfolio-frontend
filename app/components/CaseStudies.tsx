import Image from "next/image";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/case-studies";

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="w-full px-6 md:px-20 pt-16 md:pt-32 pb-20 md:pb-40"
    >
      {/* Intro — same style as Selected Works (centered) */}
      <div className="flex flex-col items-center mb-12 md:mb-16">
        <span className="text-[#6C6FF2] font-semibold tracking-widest uppercase text-sm mb-4">
          Case Studies
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8">
          Crafting digital experiences that matter.
        </h2>
      </div>

      {/* Cards grid — 2nd & 4th cards get mt-24 for staggered layout */}
      <div
        id="case-studies-grid"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto pb-20 md:pb-40"
      >
        {CASE_STUDIES.map((card) => (
          <Link
            key={card.id}
            href={`/case-studies/${card.slug}`}
            className={`group cursor-pointer block ${card.offset ? "md:mt-24" : ""}`}
          >
            <div className="overflow-hidden rounded-2xl bg-[#F8F8F8] mb-4">
              <div className="relative w-full aspect-16/10 group-hover:scale-105 transition-transform duration-700">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-base md:text-lg">
                  {card.subtitle}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-all">
                <i className="fa-solid fa-arrow-up-right text-sm md:text-base" aria-hidden />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
