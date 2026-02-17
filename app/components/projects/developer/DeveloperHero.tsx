interface DeveloperHeroProps {
  tag: string;
  title: string;
  subtitle: string;
  /** Who it's for (Overview) — optional */
  audience?: string;
}

export function DeveloperHero({ tag, title, subtitle, audience }: DeveloperHeroProps) {
  return (
    <section className="px-6 md:px-12 lg:px-20 pt-12 md:pt-24 pb-10 md:pb-16">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6C6FF2]/10 text-[#6C6FF2] text-xs font-bold uppercase tracking-wider mb-6">
          <i className="fa-solid fa-bolt-lightning" aria-hidden />
          {tag}
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 md:mb-8 text-[#111111]">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mb-4 md:mb-6">
          {subtitle}
        </p>
        {audience && (
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mb-8 md:mb-12">
            <span className="font-medium text-gray-600">Who it's for:</span> {audience}
          </p>
        )}
        {!audience && <div className="mb-8 md:mb-12" />}
      </div>
    </section>
  );
}
