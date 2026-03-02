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

  // Make description scannable: split on ": " for intro + list, or ", " for bullet list
  const colonIdx = description.indexOf(": ");
  const intro = colonIdx >= 0 ? description.slice(0, colonIdx).trim() : null;
  const afterColon = colonIdx >= 0 ? description.slice(colonIdx + 2).trim() : description;
  const points = afterColon.split(/,\s*/).map((s) => s.trim()).filter(Boolean);
  const maxChipLength = 36; // only show short items as chips; long sentences stay as text
  const chipPoints = points.filter((p) => p.length <= maxChipLength);
  const longPoints = points.filter((p) => p.length > maxChipLength);
  const useList = points.length >= 2 && (points.length > 3 || colonIdx >= 0);

  return (
    <section className="py-6 md:py-16 lg:py-20 -mx-4 sm:-mx-6 md:mx-0 px-4 sm:px-6 md:px-6 lg:px-10 bg-[#fafafa] text-neutral-900 rounded-xl md:rounded-[3rem] mb-8 md:mb-24">
      <div className="mb-4 md:mb-12">
        <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#6C6FF2] mb-1.5 md:mb-3">
          {title}
        </p>
        {useList ? (
          <div className="space-y-1.5 md:space-y-3">
            {intro && (
              <p className="text-sm md:text-lg text-neutral-800 leading-snug font-medium max-w-2xl">
                {intro}
              </p>
            )}
            {chipPoints.length > 0 && (
              <ul className="flex flex-wrap gap-1.5 md:gap-2.5 list-none pl-0">
                {chipPoints.map((point, i) => (
                  <li
                    key={i}
                    className="text-[11px] md:text-sm text-neutral-600 bg-neutral-100/80 rounded-full px-2.5 py-1 md:px-3.5 md:py-2"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            )}
            {longPoints.length > 0 && (
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed pt-1 w-full">
                {longPoints.join(". ")}
              </p>
            )}
          </div>
        ) : (
          <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>
      <div className={`grid grid-cols-1 gap-3 md:gap-6 ${hasImages ? "lg:grid-cols-12" : ""}`}>
        <div className={hasImages ? "lg:col-span-4 space-y-3 md:space-y-6" : "space-y-3 md:space-y-6"}>
          <div className="p-3 md:p-6 bg-white rounded-xl md:rounded-2xl border border-neutral-200">
            <h4 className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-neutral-500 mb-3 md:mb-4">
              Typography
            </h4>
            <div className="space-y-2 md:space-y-3">
              {typographyList.map((t, i) => (
                <p
                  key={i}
                  className={
                    t.weight === "bold"
                      ? "text-xl md:text-4xl font-bold text-neutral-900"
                      : t.weight === "medium"
                        ? "text-lg md:text-2xl font-medium text-neutral-900"
                        : "text-sm md:text-lg font-normal text-neutral-600"
                  }
                >
                  {t.name}
                </p>
              ))}
            </div>
          </div>
          <div className="p-3 md:p-6 bg-white rounded-xl md:rounded-2xl border border-neutral-200">
            <h4 className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-neutral-500 mb-3 md:mb-4">
              Colors
            </h4>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2 md:gap-x-4 md:gap-y-3">
              {colorList.map((c, i) => (
                <div key={i} className="flex gap-2 md:gap-3 items-center min-w-0">
                  <div
                    className="w-6 h-6 md:w-9 md:h-9 rounded-full shrink-0 border border-neutral-200"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div className="min-w-0">
                    <p className="font-bold text-xs md:text-sm text-neutral-900 truncate">
                      {c.name}
                    </p>
                    <p className="text-neutral-500 text-[10px] md:text-xs mt-0.5 font-mono truncate">
                      {c.hex}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {hasImages && (
        <div className="lg:col-span-8">
          <div className="grid grid-cols-2 gap-2 md:gap-0">
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
        </div>
        )}
      </div>
    </section>
  );
}
