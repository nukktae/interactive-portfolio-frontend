import Image from "next/image";

interface DesignerHeroImageProps {
  src: string;
  alt: string;
}

export function DesignerHeroImage({ src, alt }: DesignerHeroImageProps) {
  return (
    <div className="px-6 md:px-12 lg:px-20 mb-16 md:mb-32">
      <div className="relative w-full h-[320px] sm:h-[480px] md:h-[600px] lg:h-[720px] bg-neutral-100 rounded-3xl overflow-hidden">
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
