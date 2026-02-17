interface CaseStudyPhase04Props {
  label: string;
  title: string;
  stack: { label: string; value: string }[];
  crawlerTitle?: string;
  crawlerDescription?: string;
  crawlerTags?: string[];
}

export function CaseStudyPhase04({
  label,
  title,
  stack,
  crawlerTitle,
  crawlerDescription,
  crawlerTags,
}: CaseStudyPhase04Props) {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="text-[#6C6FF2] font-bold uppercase tracking-widest text-sm">
            {label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-[#111111]">
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stack.map((s) => (
            <div
              key={s.label}
              className="border border-gray-200 p-6 md:p-8 rounded-lg text-center"
            >
              <p className="text-xs font-bold uppercase text-gray-400 mb-4 tracking-tighter">
                {s.label}
              </p>
              <p className="text-lg md:text-xl font-bold text-[#111111]">
                {s.value}
              </p>
            </div>
          ))}
        </div>
        {crawlerTitle && crawlerDescription && (
          <div className="mt-16 md:mt-20 bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
            <h4 className="text-xl md:text-2xl font-bold mb-6 text-[#111111]">
              {crawlerTitle}
            </h4>
            <p className="text-gray-600 leading-relaxed mb-6 md:mb-8">
              {crawlerDescription}
            </p>
            {crawlerTags && crawlerTags.length > 0 && (
              <div className="flex flex-wrap gap-3 md:gap-4">
                {crawlerTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
