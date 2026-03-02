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
        "group relative flex flex-col justify-end p-6 w-full md:w-1/3 h-[350px] lg:h-[450px] bg-black rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:w-2/3",
        className
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt || title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover object-center z-0"
      />
      <div className="absolute inset-0 z-1 bg-black/60" />
      {/* Single content stack at bottom — fixed heights so title/subtitle align across all cards */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col p-6">
        <div className="space-y-1">
          <div className="min-h-12 flex items-end">
            <h2 className="text-xl font-bold text-white leading-tight line-clamp-2">{title}</h2>
          </div>
          <p className="text-sm text-gray-300">{subtitle}</p>
        </div>
        <div className="mt-3 min-h-18 overflow-hidden">
          <p className="text-sm text-white/95 leading-relaxed transition-all duration-500 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
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
        "flex flex-wrap md:flex-nowrap gap-4 w-full px-4",
        className
      )}
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
