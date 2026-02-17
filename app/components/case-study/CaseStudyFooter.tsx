import Link from "next/link";

interface CaseStudyFooterProps {
  nextTitle?: string;
  nextSlug?: string;
}

export function CaseStudyFooter({
  nextTitle,
  nextSlug,
}: CaseStudyFooterProps) {
  return (
    <footer className="border-t border-gray-100 px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-white">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
            Next Project
          </p>
          {nextSlug ? (
            <Link
              href={`/case-studies/${nextSlug}`}
              className="group inline-flex items-center"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold group-hover:text-[#6C6FF2] transition-colors text-[#111111]">
                {nextTitle ?? "Next"}
              </h3>
              <i
                className="fa-solid fa-arrow-right ml-4 text-2xl md:text-4xl"
                aria-hidden
              />
            </Link>
          ) : (
            <Link
              href="/#case-studies"
              className="group inline-flex items-center"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold group-hover:text-[#6C6FF2] transition-colors text-[#111111]">
                View all case studies
              </h3>
              <i
                className="fa-solid fa-arrow-right ml-4 text-2xl md:text-4xl"
                aria-hidden
              />
            </Link>
          )}
        </div>
        <div className="text-left md:text-right">
          <div className="flex flex-wrap gap-6 md:gap-8 mb-6 md:mb-8 justify-start md:justify-end">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold uppercase hover:text-[#6C6FF2]"
            >
              LinkedIn
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold uppercase hover:text-[#6C6FF2]"
            >
              Dribbble
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold uppercase hover:text-[#6C6FF2]"
            >
              Github
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 ANU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
