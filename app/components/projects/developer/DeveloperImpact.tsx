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
    <section className="py-12 md:py-20 lg:py-28 -mx-4 sm:-mx-6 md:mx-0 px-4 sm:px-6 md:px-0 bg-[#111111] text-white rounded-2xl md:rounded-[3rem] mb-12 md:mb-24">
      <div className="text-center mb-10 md:mb-20">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 md:mb-5">
          {title}
        </h2>
        <p className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl md:rounded-2xl bg-white/6 border border-white/8 p-4 md:p-8 text-center transition-colors hover:bg-white/8"
          >
            <p className="text-lg md:text-2xl lg:text-3xl font-bold text-[#6C6FF2] mb-1.5 md:mb-3">
              {stat.value}
            </p>
            <p className="text-gray-400 text-[10px] md:text-sm font-medium uppercase tracking-widest leading-snug">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
