import Link from "next/link";

interface DeveloperFooterProps {
  nextProjectTitle?: string;
  nextProjectSlug?: string;
  /** Tech stack for this project (e.g. "Next.js, React, Supabase"); shown as tags in the footer. */
  stack?: string;
}

export function DeveloperFooter({
  nextProjectTitle,
  nextProjectSlug,
  stack,
}: DeveloperFooterProps) {
  const stackItems = stack
    ? stack.split(",").map((s) => s.trim()).filter(Boolean)
    : [];

  return (
    <footer className="py-12 md:py-24 border-t border-gray-100">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-8">
        <div className="min-w-0">
          <p className="text-gray-400 mb-1.5 text-xs md:text-sm">Next Project</p>
          {nextProjectSlug ? (
            <Link
              href={`/projects/${nextProjectSlug}`}
              className="group inline-flex items-center gap-2 md:gap-4 flex-wrap"
            >
              <h3 className="text-2xl md:text-4xl font-bold hover:text-[#6C6FF2] transition-colors tracking-tight">
                {nextProjectTitle ?? "Next Project"}
              </h3>
              <i className="fa-solid fa-arrow-right text-sm md:text-base" aria-hidden />
            </Link>
          ) : (
            <Link href="/#projects" className="group inline-flex items-center gap-2 md:gap-4">
              <h3 className="text-2xl md:text-4xl font-bold hover:text-[#6C6FF2] transition-colors tracking-tight">
                View all projects
              </h3>
              <i className="fa-solid fa-arrow-right text-sm md:text-base" aria-hidden />
            </Link>
          )}
        </div>
        {stackItems.length > 0 && (
          <div className="flex flex-wrap gap-2 md:gap-3 justify-start">
            {stackItems.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 md:py-2 bg-gray-100 text-gray-700 text-xs md:text-sm font-medium rounded-lg"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
