import type { DeveloperArchitectureSection } from "@/lib/projects/developer-content";

interface DeveloperArchitectureProps {
  data: DeveloperArchitectureSection;
}

export function DeveloperArchitecture({ data }: DeveloperArchitectureProps) {
  return (
    <section className="py-10 md:py-20 lg:py-24 -mx-4 sm:-mx-6 md:mx-0 px-4 sm:px-6 md:px-0 bg-[#fafafa] rounded-2xl md:rounded-none">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4 md:gap-6 mb-8 md:mb-16">
        <div>
          <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 text-[#111111] tracking-tight">
            {data.title}
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-md">{data.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2 md:gap-4">
          {data.tabs.map((tab) => (
            <div
              key={tab.label}
              className="px-3 md:px-6 py-2.5 md:py-3 bg-white border border-gray-200 rounded-xl flex items-center gap-2 md:gap-3 shadow-sm"
            >
              <i className={`${tab.icon} text-[#6C6FF2] text-sm`} aria-hidden />
              <span className="font-medium text-xs md:text-base">{tab.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {data.cards.map((card) => (
          <div
            key={card.title}
            className="p-5 md:p-10 bg-white rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm"
          >
            <h3 className="text-base md:text-xl font-bold mb-4 md:mb-6 text-[#111111]">
              {card.title}
            </h3>
            <ul className="space-y-3 md:space-y-4 text-gray-600">
              {card.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 md:gap-3">
                  <i
                    className="fa-solid fa-check text-[#6C6FF2] mt-0.5 md:mt-1 shrink-0 text-xs md:text-sm"
                    aria-hidden
                  />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
