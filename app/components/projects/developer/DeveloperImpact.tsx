import type { DeveloperImpactStat } from "@/lib/projects/developer-content";

interface DeveloperImpactProps {
  title: string;
  subtitle: string;
  stats: DeveloperImpactStat[];
}

export function DeveloperImpact({
  title,
  subtitle,
  stats,
}: DeveloperImpactProps) {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-[#111111] text-white rounded-3xl md:rounded-[3rem] mx-4 md:mx-6 lg:mx-10 mb-16 md:mb-24">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
          {title}
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl bg-white/6 border border-white/8 p-6 md:p-8 text-center transition-colors hover:bg-white/8"
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#6C6FF2] mb-3">
              {stat.value}
            </p>
            <p className="text-gray-400 text-xs md:text-sm font-medium uppercase tracking-widest leading-snug">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
