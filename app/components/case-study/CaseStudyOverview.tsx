interface CaseStudyOverviewProps {
  challenge: string;
  role: string[];
  metrics: { value: string; label: string }[];
}

export function CaseStudyOverview({
  challenge,
  role,
  metrics,
}: CaseStudyOverviewProps) {
  return (
    <section className="px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 mb-20 md:mb-32">
      <div className="md:col-span-4 border-t-2 border-black pt-6 md:pt-8">
        <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
          The Challenge
        </h3>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          {challenge}
        </p>
      </div>
      <div className="md:col-span-4 border-t-2 border-black pt-6 md:pt-8">
        <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
          My Role
        </h3>
        <ul className="text-base md:text-lg text-gray-600 space-y-2">
          {role.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>
      <div className="md:col-span-4 border-t-2 border-black pt-6 md:pt-8">
        <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
          Key Metrics
        </h3>
        <div className="flex flex-col gap-4">
          {metrics.map((m) => (
            <div key={m.label}>
              <span className="text-3xl md:text-4xl font-bold text-[#6C6FF2]">
                {m.value}
              </span>
              <p className="text-sm text-gray-500 uppercase">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
