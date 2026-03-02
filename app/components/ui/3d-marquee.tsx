"use client";

import { motion } from "framer-motion";
import React from "react";

export interface MarqueeImage {
  src: string;
  alt: string;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export interface ThreeDMarqueeProps {
  images: MarqueeImage[];
  className?: string;
  cols?: number;
  onImageClick?: (image: MarqueeImage, index: number) => void;
}

export const ThreeDMarquee: React.FC<ThreeDMarqueeProps> = ({
  images,
  className = "",
  cols = 4,
  onImageClick,
}) => {
  // Use images once only — no duplication; animation uses repeatType: "reverse" (bounce)
  const groupSize = Math.ceil(images.length / cols);
  const imageGroups = Array.from({ length: cols }, (_, index) =>
    images.slice(index * groupSize, (index + 1) * groupSize)
  );

  const handleImageClick = (image: MarqueeImage, globalIndex: number) => {
    if (onImageClick) {
      onImageClick(image, globalIndex);
    } else if (image.href) {
      window.open(image.href, image.target || "_self");
    }
  };

  return (
    <section
      className={`relative left-0 top-0 lg:absolute lg:left-[1068px] lg:top-[-495px] w-[90vw] max-w-[95vw] sm:w-[480px] md:w-[648px] lg:w-[948px] mx-auto block h-[600px] max-sm:h-[400px] overflow-hidden rounded-2xl bg-white ${className}`}
    >
      <div
        className="flex w-full h-full items-center justify-center"
        style={{
          transform: "rotateX(55deg) rotateY(0deg) rotateZ(45deg)",
        }}
      >
        <div className="w-full overflow-hidden scale-90 sm:scale-100">
          <div
            className="relative grid h-full w-full origin-center gap-4 transform"
            style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
          >
            {imageGroups.map((imagesInGroup, idx) => (
              <motion.div
                key={`column-${idx}`}
                animate={{ y: idx % 2 === 0 ? 100 : -100 }}
                transition={{
                  duration: idx % 2 === 0 ? 10 : 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="flex flex-col items-center gap-6 relative"
              >
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200" />
                {imagesInGroup.map((image, imgIdx) => {
                  const globalIndex = idx * groupSize + imgIdx;
                  const isClickable = image.href || onImageClick;

                  return (
                    <div key={`img-${imgIdx}`} className="relative">
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-200" />
                      <motion.img
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        src={image.src}
                        alt={image.alt}
                        width={970}
                        height={700}
                        className={`aspect-970/700 w-full max-w-[200px] rounded-lg object-cover ring ring-gray-300/30 shadow-xl hover:shadow-2xl transition-shadow duration-300 ${
                          isClickable ? "cursor-pointer" : ""
                        }`}
                        onClick={() => handleImageClick(image, globalIndex)}
                      />
                    </div>
                  );
                })}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
