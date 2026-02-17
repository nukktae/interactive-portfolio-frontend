interface Card {
  icon: string;
  title: string;
  description: string;
}

interface CaseStudyPhase01Props {
  label: string;
  title: string;
  subtitle: string;
  cards: Card[];
}

export function CaseStudyPhase01({
  label,
  title,
  subtitle,
  cards,
}: CaseStudyPhase01Props) {
  return (
    <section className="bg-gray-50 py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16 md:mb-20">
          <span className="text-[#6C6FF2] font-bold uppercase tracking-widest text-sm">
            {label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 md:mb-8 text-[#111111] whitespace-pre-line">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-[700px]">
            {subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white p-8 md:p-10 shadow-sm border border-gray-100"
            >
              <i
                className={`${card.icon} text-3xl mb-6 text-[#6C6FF2] block`}
                aria-hidden
              />
              <h4 className="text-lg md:text-xl font-bold mb-4 text-[#111111]">
                {card.title}
              </h4>
              <p className="text-gray-500 text-sm md:text-base">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
