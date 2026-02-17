interface KeyObjective {
  label: string;
  description: string;
}

interface DesignerChallengeProps {
  paragraphs: string[];
  keyObjectives: KeyObjective[];
}

export function DesignerChallenge({
  paragraphs,
  keyObjectives,
}: DesignerChallengeProps) {
  return (
    <section className="px-6 md:px-12 lg:px-20 mb-20 md:mb-40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-5">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 md:mb-8">
            The Challenge
          </h2>
          <div className="space-y-6 text-base md:text-lg text-neutral-600 leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="p-8 md:p-12 bg-neutral-50 rounded-3xl">
            <h3 className="text-lg md:text-xl font-bold mb-6">
              Key Objectives
            </h3>
            <ul className="space-y-6">
              {keyObjectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#6C6FF2] shrink-0" />
                  <p className="text-neutral-600">
                    <span className="text-black font-semibold">
                      {obj.label}{" "}
                    </span>
                    {obj.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
