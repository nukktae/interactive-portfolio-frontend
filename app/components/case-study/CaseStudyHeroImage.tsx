import Image from "next/image";

interface CaseStudyHeroImageProps {
  src: string;
  alt: string;
}

export function CaseStudyHeroImage({ src, alt }: CaseStudyHeroImageProps) {
  return (
    <div className="px-6 md:px-12 lg:px-20 mb-16 md:mb-24">
      <div className="relative w-full h-[320px] sm:h-[480px] md:h-[600px] lg:h-[720px] rounded-2xl overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
    </div>
  );
}
