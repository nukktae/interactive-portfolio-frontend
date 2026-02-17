import Link from "next/link";

interface DeveloperFooterProps {
  nextProjectTitle?: string;
  nextProjectSlug?: string;
}

export function DeveloperFooter({
  nextProjectTitle,
  nextProjectSlug,
}: DeveloperFooterProps) {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-16 md:py-24 border-t border-gray-100">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
        <div>
          <p className="text-gray-400 mb-2 text-sm">Next Project</p>
          {nextProjectSlug ? (
            <Link
              href={`/projects/${nextProjectSlug}`}
              className="group inline-flex items-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold hover:text-[#6C6FF2] transition-colors">
                {nextProjectTitle ?? "Next Project"}
              </h3>
              <i
                className="fa-solid fa-arrow-right ml-4"
                aria-hidden
              />
            </Link>
          ) : (
            <Link href="/#projects" className="group inline-flex items-center">
              <h3 className="text-3xl md:text-4xl font-bold hover:text-[#6C6FF2] transition-colors">
                View all projects
              </h3>
              <i className="fa-solid fa-arrow-right ml-4" aria-hidden />
            </Link>
          )}
        </div>
        <div className="flex gap-4 md:gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#6C6FF2] hover:text-white hover:border-[#6C6FF2] transition-all"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github" aria-hidden />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#6C6FF2] hover:text-white hover:border-[#6C6FF2] transition-all"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in" aria-hidden />
          </a>
          <a
            href="mailto:anu.bn@yahoo.com"
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#6C6FF2] hover:text-white hover:border-[#6C6FF2] transition-all"
            aria-label="Email"
          >
            <i className="fa-regular fa-envelope" aria-hidden />
          </a>
        </div>
      </div>
      <div className="mt-16 md:mt-24 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between gap-4 text-gray-400 text-sm">
        <p>© 2025 ANU. Built with precision.</p>
        <p>Designed for Excellence</p>
      </div>
    </footer>
  );
}
