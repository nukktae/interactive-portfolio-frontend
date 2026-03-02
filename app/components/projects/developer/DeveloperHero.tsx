interface DeveloperHeroProps {
  tag: string;
  title: string;
  subtitle: string;
}

export function DeveloperHero({ tag, title, subtitle }: DeveloperHeroProps) {
  return (
    <section className="pt-8 sm:pt-12 md:pt-24 pb-8 sm:pb-10 md:pb-16">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6C6FF2]/10 text-[#6C6FF2] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4 md:mb-6">
          <i className="fa-solid fa-bolt-lightning" aria-hidden />
          {tag}
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4 md:mb-8 text-[#111111] tracking-tight">
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mb-6 md:mb-12">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
