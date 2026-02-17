import Image from "next/image";

interface TypographyEntry {
  name: string;
  weight?: "bold" | "medium" | "normal";
}

interface ColorEntry {
  name: string;
  hex: string;
  description?: string;
}

interface DesignerDesignSystemProps {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  image2?: string;
  imageAlt2?: string;
  image3?: string;
  imageAlt3?: string;
  typography?: TypographyEntry[];
  colors?: ColorEntry[];
}

export function DesignerDesignSystem({
  title,
  description,
  image,
  imageAlt,
  image2,
  imageAlt2,
  image3,
  imageAlt3,
  typography,
  colors,
}: DesignerDesignSystemProps) {
  const defaultTypography = [
    { name: "Inter Bold", weight: "bold" as const },
    { name: "Inter Medium", weight: "medium" as const },
    { name: "Inter Regular", weight: "normal" as const },
  ];
  const typographyList = typography ?? defaultTypography;

  const defaultColors = [
    { name: "Primary", hex: "#6C6FF2" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Gray", hex: "#525252" },
    { name: "Border", hex: "transparent", description: "Border" },
  ];
  const colorList = colors ?? defaultColors;

  const hasImages = image || image2 || image3;

  return (
    <section className="px-4 md:px-6 lg:px-10 py-10 md:py-20 bg-[#fafafa] text-neutral-900 rounded-[2rem] md:rounded-[3rem] mx-4 md:mx-10 mb-12 md:mb-24">
      <div className="max-w-4xl mb-8 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 md:mb-6 text-neutral-900">
          {title}
        </h2>
        <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
        <div className="lg:col-span-4 space-y-4 md:space-y-6">
          <div className="p-4 md:p-6 bg-white rounded-2xl border border-neutral-200">
            <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4">
              Typography
            </h4>
            <div className="space-y-3">
              {typographyList.map((t, i) => (
                <p
                  key={i}
                  className={
                    t.weight === "bold"
                      ? "text-2xl md:text-4xl font-bold text-neutral-900"
                      : t.weight === "medium"
                        ? "text-xl md:text-2xl font-medium text-neutral-900"
                        : "text-base md:text-lg font-normal text-neutral-600"
                  }
                >
                  {t.name}
                </p>
              ))}
            </div>
          </div>
          <div className="p-4 md:p-6 bg-white rounded-2xl border border-neutral-200">
            <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4">
              Colors
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {colorList.map((c, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <div
                    className="w-8 h-8 md:w-9 md:h-9 rounded-full shrink-0 border border-neutral-200"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div className="min-w-0">
                    <p className="font-bold text-sm text-neutral-900">
                      {c.name}
                    </p>
                    <p className="text-neutral-500 text-xs mt-0.5 font-mono">
                      {c.hex}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-8">
          {hasImages ? (
            <div className="grid grid-cols-2 gap-0">
              {image && (
                <Image
                  src={image}
                  alt={imageAlt ?? "Design system overview"}
                  width={400}
                  height={300}
                  className="w-full max-w-[260px] md:max-w-[320px] h-auto object-contain shadow-lg rounded-xl"
                  sizes="(max-width: 1024px) 50vw, 320px"
                />
              )}
              {image2 && (
                <Image
                  src={image2}
                  alt={imageAlt2 ?? "Design system visual"}
                  width={400}
                  height={300}
                  className="w-full max-w-[260px] md:max-w-[320px] h-auto object-contain shadow-lg rounded-xl"
                  sizes="(max-width: 1024px) 50vw, 320px"
                />
              )}
              {image3 && (
                <Image
                  src={image3}
                  alt={imageAlt3 ?? "Design system visual"}
                  width={400}
                  height={300}
                  className="w-full max-w-[260px] md:max-w-[320px] h-auto object-contain shadow-lg rounded-xl"
                  sizes="(max-width: 1024px) 50vw, 320px"
                />
              )}
            </div>
          ) : (
            <div className="w-full min-h-[300px] md:min-h-[400px] flex items-center justify-center py-12">
              <span className="text-neutral-400 text-sm">
                Design system visual
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
