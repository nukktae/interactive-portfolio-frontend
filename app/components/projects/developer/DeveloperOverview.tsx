export interface DeveloperOverviewSection {
  heading: string;
  body: string;
}

interface DeveloperOverviewProps {
  /** Section title (default: "The Challenge") */
  title?: string;
  /** Single paragraph (used by fullstack/developer and designer fallback) */
  paragraph?: string;
  /** Structured sections with subheads (e.g. problem, vision, ownership, results) */
  sections?: DeveloperOverviewSection[];
}

export function DeveloperOverview({ title = "The Challenge", paragraph, sections }: DeveloperOverviewProps) {
  const useSections = sections && sections.length > 0;

  return (
    <section className="py-10 md:py-20 lg:py-24 border-t border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
      <div className="lg:col-span-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#111111] tracking-tight">
          {title}
        </h2>
      </div>
      <div className="lg:col-span-8 space-y-4 md:space-y-6">
        {useSections ? (
          sections!.map((s, i) => (
            <div
              key={i}
              className="pl-4 md:pl-5 border-l-2 border-gray-200 border-l-[#6C6FF2]"
            >
              <h3 className="text-sm font-bold text-[#111111] uppercase tracking-wider mb-1.5">
                {s.heading}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {s.body}
              </p>
            </div>
          ))
        ) : (
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            {paragraph ?? ""}
          </p>
        )}
      </div>
    </section>
  );
}
