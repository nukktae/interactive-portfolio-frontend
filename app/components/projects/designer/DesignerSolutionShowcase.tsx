import Image from "next/image";

interface SolutionItem {
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
}

interface DesignerSolutionShowcaseProps {
  title: string;
  subtitle?: string;
  items: SolutionItem[];
  usePhoneFrame?: boolean;
}

function PhoneFrame({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto flex justify-center ${className}`}
      style={{ maxWidth: "min(100%, 320px)" }}
    >
      <div className="relative w-full rounded-4xl border-2 border-neutral-200 bg-white p-1 shadow-sm">
        <div className="relative overflow-hidden rounded-3xl bg-white aspect-9/19">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="320px"
          />
        </div>
      </div>
    </div>
  );
}

export function DesignerSolutionShowcase({
  title,
  subtitle,
  items,
  usePhoneFrame = false,
}: DesignerSolutionShowcaseProps) {
  if (items.length === 0) return null;

  const [first, ...rest] = items;
  const showTwoInOneRow = usePhoneFrame && items.length >= 2;

  return (
    <section className="px-6 md:px-12 lg:px-20 mb-20 md:mb-40">
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-12 md:gap-20">
        {showTwoInOneRow ? (
          /* Both items in one row: 2-col grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div className="space-y-6 md:space-y-8">
              <PhoneFrame src={first.image} alt={first.imageAlt} />
              <div>
                <h3 className="text-xl md:text-2xl font-bold">{first.title}</h3>
                {first.description && (
                  <p className="text-base text-neutral-500 mt-2 max-w-xl">
                    {first.description}
                  </p>
                )}
              </div>
            </div>
            {rest[0] && (
              <div className="space-y-6 md:space-y-8">
                <PhoneFrame src={rest[0].image} alt={rest[0].imageAlt} />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">{rest[0].title}</h3>
                  {rest[0].description && (
                    <p className="text-base text-neutral-500 mt-2 max-w-xl">
                      {rest[0].description}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* First item: full width or phone frame + optional description */}
            <div className="space-y-6 md:space-y-8">
              {usePhoneFrame ? (
                <PhoneFrame src={first.image} alt={first.imageAlt} />
              ) : (
                <div className="relative w-full aspect-video bg-neutral-100 rounded-3xl overflow-hidden">
                  <Image
                    src={first.image}
                    alt={first.imageAlt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              )}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 max-w-4xl">
                <h3 className="text-xl md:text-2xl font-bold">{first.title}</h3>
                {first.description && (
                  <p className="text-base md:text-lg text-neutral-500 max-w-xl">
                    {first.description}
                  </p>
                )}
              </div>
            </div>

            {/* Next items: 2-col grid (phone frames or squares) */}
            {rest.length >= 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {rest.slice(0, 2).map((item, i) => (
                  <div key={i} className="space-y-6 md:space-y-8">
                    {usePhoneFrame ? (
                      <PhoneFrame src={item.image} alt={item.imageAlt} />
                    ) : (
                      <div className="relative w-full aspect-square bg-neutral-100 rounded-3xl overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
                      {item.description && (
                        <p className="text-base text-neutral-500 mt-2 max-w-xl">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
