interface ImpactStat {
  value: string;
  label: string;
}

interface DesignerImpactProps {
  title: string;
  subtitle: string;
  cta?: string;
  stats: ImpactStat[];
}

export function DesignerImpact({
  title,
  subtitle,
  cta,
  stats,
}: DesignerImpactProps) {
  return (
    <section className="px-6 md:px-12 lg:px-20 mb-20 md:mb-40">
      <div className="p-8 md:p-16 lg:p-20 bg-neutral-50 rounded-4xl md:rounded-[3rem] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
        <div className="max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            {title}
          </h2>
          <p className="text-base md:text-lg text-neutral-600 leading-relaxed mb-6 md:mb-8">
            {subtitle}
          </p>
          {cta && (
            <div className="flex items-center gap-4">
              <i
                className="fa-solid fa-arrow-right text-[#6C6FF2] text-xl"
                aria-hidden
              />
              <span className="font-bold">{cta}</span>
            </div>
          )}
        </div>
        {stats.length > 0 && (
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl md:text-6xl font-bold text-[#6C6FF2] mb-2">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-neutral-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
