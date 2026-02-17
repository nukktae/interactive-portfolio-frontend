interface DesignerHeroProps {
  tag: string;
  date: string;
  title: string;
  subtitle: string;
}

export function DesignerHero({
  tag,
  date,
  title,
  subtitle,
}: DesignerHeroProps) {
  return (
    <section className="px-6 md:px-12 lg:px-20 pt-12 md:pt-20 pb-16 md:pb-32">
      <div className="max-w-4xl">
        <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6">
          <span className="px-4 py-1.5 bg-[#6C6FF2]/10 text-[#6C6FF2] text-xs font-bold uppercase tracking-widest rounded-full">
            {tag}
          </span>
          <span className="text-neutral-400 text-sm font-medium">{date}</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-8 md:mb-12">
          {title}
        </h1>
        <p className="text-lg md:text-2xl text-neutral-500 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
