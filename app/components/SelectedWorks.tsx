"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getProjects } from "@/lib/projects";

const PROJECTS = getProjects();

const FILTERS = [
  { id: "all", label: "All Projects" },
  { id: "ui", label: "UI/UX & Frontend" },
  { id: "fullstack", label: "Fullstack" },
  { id: "backend-hardware", label: "Backend & Hardware" },
  { id: "other", label: "Other" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

function isBackendOrHardware(
  filter: string | string[]
): boolean {
  if (Array.isArray(filter)) {
    return filter.some((f) => f === "backend" || f === "hardware");
  }
  return filter === "backend" || filter === "hardware";
}

export function SelectedWorks() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : activeFilter === "backend-hardware"
        ? PROJECTS.filter((p) => isBackendOrHardware(p.filter))
        : PROJECTS.filter((p) =>
            Array.isArray(p.filter)
              ? p.filter.includes(activeFilter)
              : p.filter === activeFilter
          );

  return (
    <section
      id="projects"
      className="w-full py-16 md:py-24 px-6 md:px-20"
    >
      <div className="flex flex-col items-center mb-12 md:mb-16">
        <span className="text-[#6C6FF2] font-semibold tracking-widest uppercase text-sm mb-4">
          Portfolio
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8">
          Selected Works
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-gray-100 pb-4">
          {FILTERS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveFilter(id)}
              className={
                activeFilter === id
                  ? "text-black font-bold border-b-2 border-black pb-4 -mb-[18px]"
                  : "text-gray-400 font-medium hover:text-black transition-colors pb-4 -mb-[18px]"
              }
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="group cursor-pointer block"
          >
            <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden mb-4 rounded-lg">
              {project.badge && (
                <span className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-md bg-white/95 text-[10px] font-semibold uppercase tracking-wider text-gray-700 shadow-sm">
                  {project.badge}
                </span>
              )}
              <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-105">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div
                className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-lg"
                aria-hidden
              />
            </div>
            <div className="flex justify-between items-start gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#6C6FF2] mb-2 block">
                  {project.category} • {project.date}
                </span>
                <h3 className="text-xl md:text-2xl font-bold group-hover:underline decoration-2 underline-offset-4">
                  {project.title}
                </h3>
              </div>
              <i
                className="fa-solid fa-arrow-up-right-from-square text-xl shrink-0 mt-1"
                aria-hidden
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
