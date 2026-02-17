"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { DeveloperFeature } from "@/lib/projects/developer-content";

interface DeveloperFeatureBlockProps {
  feature: DeveloperFeature;
}

function PhoneFrame({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto flex justify-center ${className}`}
      style={{ maxWidth: "min(100%, 320px)" }}
    >
      <div className="relative w-full rounded-4xl border border-gray-200 bg-white p-2 shadow-sm">
        <div className="relative overflow-hidden rounded-3xl bg-white aspect-9/19">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="320px"
          />
        </div>
      </div>
    </div>
  );
}

export function DeveloperFeatureBlock({ feature }: DeveloperFeatureBlockProps) {
  const isImageRight = feature.imageRight ?? false;
  const usePhoneFrame = feature.usePhoneFrame ?? false;
  const multiImages = feature.images && feature.images.length > 0;
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  useEffect(() => {
    if (modalIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalIndex(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [modalIndex]);

  const alts = feature.imageAlts ?? feature.images?.map((_, i) => `${feature.imageAlt} ${i + 1}`) ?? [];

  const imageContent =
    multiImages && feature.images ? (
      <div className="relative w-full rounded-3xl overflow-hidden bg-gray-100">
        <div className={`grid gap-2 md:gap-4 p-2 md:p-4 aspect-16/10 min-h-[200px] ${feature.images.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
          {feature.images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setModalIndex(i)}
              className="relative w-full h-full min-h-[120px] rounded-xl overflow-hidden bg-gray-200 hover:ring-2 hover:ring-[#6C6FF2] focus:outline-none focus:ring-2 focus:ring-[#6C6FF2] transition-all"
            >
              <Image
                src={src}
                alt={alts[i] ?? feature.imageAlt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 33vw, 16vw"
              />
            </button>
          ))}
        </div>
        {modalIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setModalIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Enlarge image"
          >
            <button
              type="button"
              onClick={() => setModalIndex(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-gray-800 hover:bg-white"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div
              className="relative max-w-4xl max-h-[90vh] w-full aspect-video bg-gray-900 rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={feature.images[modalIndex]}
                alt={alts[modalIndex] ?? feature.imageAlt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
          </div>
        )}
      </div>
    ) : usePhoneFrame ? (
      <PhoneFrame src={feature.image} alt={feature.imageAlt} />
    ) : (
      <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gray-100">
        <Image
          src={feature.image}
          alt={feature.imageAlt}
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center mb-24 md:mb-32 last:mb-0">
      <div className={isImageRight ? "order-2" : "order-1"}>{imageContent}</div>
      <div className={isImageRight ? "order-1" : "order-2"}>
        <span className="text-[#6C6FF2] font-bold text-sm tracking-widest uppercase mb-4 block">
          {feature.label}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#111111]">
          {feature.title}
        </h2>
        <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-6 md:mb-8">
          {feature.description}
        </p>
        <div className="flex flex-wrap gap-3 md:gap-4">
          {feature.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
