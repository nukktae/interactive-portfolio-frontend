import { ThreeDMarquee } from "@/app/components/ui/3d-marquee";

// 16 unique project images so the marquee never repeats the same image
const MARQUEE_IMAGES = [
  { src: "/assets/images/projects/bestia/bestiacover.png", alt: "Bestia", href: "/projects/bestia", target: "_self" as const },
  { src: "/assets/images/projects/handiers/handiers.png", alt: "Handiers", href: "/projects/handiers-inc", target: "_self" as const },
  { src: "/assets/images/projects/shinhan/shinhan.png", alt: "Shinhan", href: "/projects/shinhan-scholarship-foundation", target: "_self" as const },
  { src: "/assets/images/projects/friendly/coverfriendly.png", alt: "Friendly", href: "/projects/friendly", target: "_self" as const },
  { src: "/assets/images/projects/rivalq/rivalqcover.png", alt: "RivalQ", href: "/projects/rivalq", target: "_self" as const },
  { src: "/assets/images/projects/jobja/jobjacover.png", alt: "Jobja", href: "/projects/jobja", target: "_self" as const },
  { src: "/assets/images/projects/rootin/rootin.jpeg", alt: "Rootin", href: "/projects/rootin", target: "_self" as const },
  { src: "/assets/images/projects/onward/onwardcover.png", alt: "Onward", href: "/projects/onward", target: "_self" as const },
  { src: "/assets/images/projects/coco/cococover2.png", alt: "COCO", href: "/projects/coco", target: "_self" as const },
  { src: "/assets/images/projects/aws/awscover1.png", alt: "AWS Content Moderation", href: "/projects/aws-content-moderation", target: "_self" as const },
  { src: "/assets/images/projects/friendly/friendly1.png", alt: "Friendly app", href: "/projects/friendly", target: "_self" as const },
  { src: "/assets/images/projects/rivalq/rivalqdashboard.png", alt: "RivalQ dashboard", href: "/projects/rivalq", target: "_self" as const },
  { src: "/assets/images/projects/rootin/home.png", alt: "Rootin home", href: "/projects/rootin", target: "_self" as const },
  { src: "/assets/images/projects/bestia/leadslist.png", alt: "Bestia leads", href: "/projects/bestia", target: "_self" as const },
  { src: "/assets/images/projects/shinhan/ybhome.png", alt: "Shinhan YB home", href: "/projects/shinhan-scholarship-foundation", target: "_self" as const },
  { src: "/assets/images/projects/onward/setplan.png", alt: "Onward set plan", href: "/projects/onward", target: "_self" as const },
];

export function Hero() {

  return (
    <section
      id="hero"
      className="w-full px-6 md:px-12 pt-20 md:pt-32 pb-16 md:pb-20 flex flex-col items-start"
    >
      <div className="w-full max-w-[965px] grid grid-cols-1 lg:grid-cols-[1fr,minmax(320px,520px)] gap-12 lg:gap-16 items-start">
        {/* Left: copy */}
        <div className="flex flex-col items-start min-w-0 max-w-[939px]">
          <div className="inline-block px-4 py-1 border border-black rounded-full text-xs font-bold mb-6 md:mb-8">
            SOFTWARE ENGINEERING & MARKETING DOUBLE MAJOR
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[120px] font-black leading-[0.9] tracking-tighter mb-4 md:mb-6">
            ARCHITECTING
            <br />
            <span className="text-[#6C6FF2]">DIGITAL</span> LOGIC.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium mb-8 md:mb-12">
            From Idea to Live Product in Hours.
          </p>
          <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-end gap-8">
            <p className="max-w-2xl text-lg md:text-xl text-gray-500 leading-relaxed">
              Product-driven Software Engineer blending AI, UI/UX, and Full-Stack
              development to turn ideas into shipped experiences—delivering
              production-ready products in hours, not weeks.
            </p>
          </div>
        </div>

        {/* Right: 3D Marquee */}
        <div className="relative w-full max-w-[520px] mx-auto lg:mx-0 flex flex-col justify-start items-start gap-6 lg:pt-8">
          <ThreeDMarquee
            images={MARQUEE_IMAGES}
            cols={4}
            className="h-[480px] max-sm:h-[360px] lg:h-[420px]"
          />
        </div>
      </div>

      {/* Global Experience Banner */}
      <div className="w-full mt-12 md:mt-16 py-8 md:py-12 border-y border-gray-100 flex flex-wrap justify-around items-center gap-8">
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
