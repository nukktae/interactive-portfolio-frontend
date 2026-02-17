import Image from "next/image";

interface CaseStudyPhase03Props {
  label: string;
  title: string;
  subtitle: string;
  images: { src: string; alt: string }[];
}

export function CaseStudyPhase03({
  label,
  title,
  subtitle,
  images,
}: CaseStudyPhase03Props) {
  if (images.length < 3) return null;
  const [main, ...side] = images;

  return (
    <section className="bg-black py-20 md:py-32 px-6 md:px-12 lg:px-20 text-white">
      <div className="text-center mb-16 md:mb-24">
        <span className="text-[#6C6FF2] font-bold uppercase tracking-widest text-sm">
          {label}
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-white">
          {title}
        </h2>
        <p className="text-gray-400 max-w-[600px] mx-auto text-base md:text-lg">
          {subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 max-w-[1200px] mx-auto">
        <div className="lg:col-span-8 relative w-full h-[320px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden">
          <Image
            src={main.src}
            alt={main.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
        </div>
        <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8">
          {side.slice(0, 2).map((img, i) => (
            <div
              key={i}
              className="relative w-full h-[200px] md:h-[284px] rounded-xl overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
