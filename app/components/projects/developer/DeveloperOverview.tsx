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
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-t border-gray-50">
      <div className="lg:col-span-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#111111]">
          {title}
        </h2>
      </div>
      <div className="lg:col-span-8 space-y-8">
        {useSections ? (
          sections!.map((s, i) => (
            <div key={i}>
              <h3 className="text-lg md:text-xl font-semibold text-[#111111] mb-2">
                {s.heading}
              </h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                {s.body}
              </p>
            </div>
          ))
        ) : (
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {paragraph ?? ""}
          </p>
        )}
      </div>
    </section>
  );
}
