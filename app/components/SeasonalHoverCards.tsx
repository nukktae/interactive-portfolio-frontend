"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface SeasonCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
}

interface SeasonalHoverCardsProps {
  cards: SeasonCardProps[];
  className?: string;
}

const SeasonCard = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  className,
}: SeasonCardProps) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-end p-4 md:p-6 w-[82vw] min-w-[240px] max-w-[340px] md:w-1/3 md:min-w-0 md:max-w-none h-[280px] md:h-[350px] lg:h-[450px] bg-black rounded-xl md:rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:w-2/3 shrink-0 snap-start",
        className
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt || title}
        fill
        sizes="(max-width: 768px) 85vw, 33vw"
        className="object-cover object-center z-0"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 z-1 bg-black/60" />
      {/* Single content stack at bottom — fixed heights so title/subtitle align across all cards */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col p-4 md:p-6">
        <div className="space-y-0.5 md:space-y-1">
          <div className="min-h-10 md:min-h-12 flex items-end">
            <h2 className="text-base md:text-xl font-bold text-white leading-tight line-clamp-2">{title}</h2>
          </div>
          <p className="text-xs md:text-sm text-gray-300">{subtitle}</p>
        </div>
        <div className="mt-2 md:mt-3 min-h-14 md:min-h-18 overflow-hidden">
          <p className="text-xs md:text-sm text-white/95 leading-relaxed transition-all duration-500 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export function SeasonalHoverCards({
  cards,
  className,
}: SeasonalHoverCardsProps) {
  return (
    <div
      className={cn(
        "flex flex-nowrap gap-3 md:gap-4 w-full px-0 md:px-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 snap-x snap-mandatory min-h-0",
        className
      )}
      style={{ WebkitOverflowScrolling: "touch" } as React.CSSProperties}
    >
      {cards.map((card, index) => (
        <SeasonCard
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          description={card.description}
          imageSrc={card.imageSrc}
          imageAlt={card.imageAlt}
        />
      ))}
    </div>
  );
}
