import Link from "next/link";

interface DesignerFooterProps {
  nextProjectTitle?: string;
  nextProjectSlug?: string;
}

export function DesignerFooter({
  nextProjectTitle,
  nextProjectSlug,
}: DesignerFooterProps) {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-16 md:py-32 border-t border-neutral-100">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-4 md:mb-6">
            Next Project
          </p>
          {nextProjectSlug ? (
            <Link
              href={`/projects/${nextProjectSlug}`}
              className="group inline-flex items-center"
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter group-hover:text-[#6C6FF2] transition-colors">
                {nextProjectTitle ?? "Next Project"}
              </h2>
              <i
                className="fa-solid fa-arrow-right-long ml-4 text-2xl opacity-0 group-hover:opacity-100 transition-all"
                aria-hidden
              />
            </Link>
          ) : (
            <Link href="/#projects" className="group inline-flex items-center">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter group-hover:text-[#6C6FF2] transition-colors">
                View all projects
              </h2>
              <i
                className="fa-solid fa-arrow-right-long ml-4 text-2xl opacity-0 group-hover:opacity-100 transition-all"
                aria-hidden
              />
            </Link>
          )}
        </div>
        <div className="text-left md:text-right">
          <p className="text-base md:text-lg font-medium mb-2">
            anu.bn@yahoo.com
          </p>
          <p className="text-neutral-400 text-sm">
            © 2025 ANU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
