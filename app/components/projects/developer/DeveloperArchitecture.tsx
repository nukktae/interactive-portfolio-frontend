import type { DeveloperArchitectureSection } from "@/lib/projects/developer-content";

interface DeveloperArchitectureProps {
  data: DeveloperArchitectureSection;
}

export function DeveloperArchitecture({ data }: DeveloperArchitectureProps) {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-[#fafafa]">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-12 md:mb-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#111111]">
            {data.title}
          </h2>
          <p className="text-gray-500 max-w-md">{data.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3 md:gap-4">
          {data.tabs.map((tab) => (
            <div
              key={tab.label}
              className="px-4 md:px-6 py-3 bg-white border border-gray-200 rounded-xl flex items-center gap-3 shadow-sm"
            >
              <i
                className={`${tab.icon} text-[#6C6FF2]`}
                aria-hidden
              />
              <span className="font-medium text-sm md:text-base">
                {tab.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {data.cards.map((card) => (
          <div
            key={card.title}
            className="p-8 md:p-10 bg-white rounded-3xl border border-gray-100 shadow-sm"
          >
            <h3 className="text-lg md:text-xl font-bold mb-6 text-[#111111]">
              {card.title}
            </h3>
            <ul className="space-y-4 text-gray-600">
              {card.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <i
                    className="fa-solid fa-check text-[#6C6FF2] mt-1 shrink-0"
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
