interface CaseStudyHeroProps {
  tags: string[];
  title: string;
  titleHighlight?: string;
  subtitle: string;
}

export function CaseStudyHero({
  tags,
  title,
  titleHighlight,
  subtitle,
}: CaseStudyHeroProps) {
  return (
    <header className="pt-16 md:pt-24 pb-12 md:pb-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1000px]">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 border border-black text-[10px] font-bold uppercase tracking-widest"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[84px] font-bold leading-[1.05] tracking-tighter mb-8 md:mb-10 text-[#111111]">
          {title}
          {titleHighlight && (
            <>
              {" "}
              <span className="text-[#6C6FF2]">{titleHighlight}</span>
            </>
          )}
        </h1>
        <p className="text-lg md:text-2xl text-gray-500 leading-relaxed max-w-[800px]">
          {subtitle}
        </p>
      </div>
    </header>
  );
}
