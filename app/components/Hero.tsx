"use client";

import { TypingAnimation } from "@/app/components/ui/typing-animation";
import { SplineScene } from "@/app/components/SplineScene";

export function Hero() {
  return (
    <section
      id="hero"
      className="w-full px-6 md:px-12 pt-20 md:pt-32 pb-16 md:pb-20 flex flex-col items-start"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col items-start order-2 lg:order-1">
          <div className="inline-block px-4 py-1 border border-black rounded-full text-xs font-bold mb-6 md:mb-8">
            SOFTWARE ENGINEERING & MARKETING DOUBLE MAJOR
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tighter mb-4 md:mb-6">
            <TypingAnimation
              words={[
                "Architecting digital logic.",
                "From idea to live product.",
                "Building what actually ships.",
              ]}
              as="span"
              className="block"
              typeSpeed={80}
              deleteSpeed={40}
              pauseDelay={1800}
              loop
              startOnView
              showCursor
              blinkCursor
              cursorStyle="block"
            />
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium mb-8 md:mb-12">
            AI, UI/UX & full-stack—shipped.
          </p>
          <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-end gap-8">
            <p className="max-w-2xl text-lg md:text-xl text-gray-500 leading-relaxed">
              Product-driven Software Engineer blending AI, UI/UX, and Full-Stack
              development—turning ideas into shipped experiences in hours, not
              weeks.
            </p>
          </div>
        </div>
        <div className="w-full h-[320px] sm:h-[380px] lg:h-[420px] order-1 lg:order-2">
          <SplineScene embedded />
        </div>
      </div>

      {/* Global Experience Banner */}
      <div className="w-full mt-12 md:mt-[204px] py-8 md:py-12 border-y border-gray-100 flex flex-wrap justify-around items-center gap-8">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-black">04</div>
          <div className="text-xs text-gray-400 uppercase tracking-widest mt-2">
            Countries Lived
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-black">03+</div>
          <div className="text-xs text-gray-400 uppercase tracking-widest mt-2">
            Core Disciplines
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-black">30+</div>
          <div className="text-xs text-gray-400 uppercase tracking-widest mt-2">
            Projects Shipped
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-black text-[#6C6FF2]">∞</div>
          <div className="text-xs text-gray-400 uppercase tracking-widest mt-2">
            Curiosity
          </div>
        </div>
      </div>
    </section>
  );
}
