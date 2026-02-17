import Image from "next/image";

interface Step {
  title: string;
  description: string;
}

interface CaseStudyPhase02Props {
  label: string;
  title: string;
  steps: Step[];
  image: string;
  imageAlt: string;
}

export function CaseStudyPhase02({
  label,
  title,
  steps,
  image,
  imageAlt,
}: CaseStudyPhase02Props) {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <span className="text-[#6C6FF2] font-bold uppercase tracking-widest text-sm">
            {label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-8 text-[#111111] whitespace-pre-line">
            {title}
          </h2>
          <div className="space-y-8 md:space-y-10">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black text-white flex items-center justify-center shrink-0 font-bold text-sm md:text-base">
                  {i + 1}
                </div>
                <div>
                  <h5 className="text-lg md:text-xl font-bold mb-2 text-[#111111]">
                    {step.title}
                  </h5>
                  <p className="text-gray-500 text-sm md:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
