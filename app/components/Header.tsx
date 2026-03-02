import Link from "next/link";

export function Header() {
  return (
    <header
      id="header"
      className="sticky top-0 z-50 w-full h-[80px] bg-white/80 backdrop-blur-md flex items-center justify-between px-6 md:px-[80px] border-b border-gray-100"
    >
      <Link href="/" className="text-[24px] font-black tracking-tighter">
        ANU<span className="text-[#6C6FF2]">.</span>
      </Link>
      <nav className="flex gap-4 md:gap-8 lg:gap-[40px] text-[14px] md:text-[15px] font-medium flex-wrap justify-end">
        <Link href="/#hero" className="hover:text-[#6C6FF2] transition-colors">
          Home
        </Link>
        <Link href="/#experience" className="hover:text-[#6C6FF2] transition-colors">
          Experience
        </Link>
        <Link href="/#projects" className="hover:text-[#6C6FF2] transition-colors">
          Projects
        </Link>
        <Link href="/#about" className="hover:text-[#6C6FF2] transition-colors">
          About
        </Link>
        <Link href="/#tech-stack" className="hover:text-[#6C6FF2] transition-colors">
          Stack
        </Link>
        <Link href="/#contact" className="hover:text-[#6C6FF2] transition-colors">
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-3 md:gap-4">
        <a
          href="https://github.com/nukktae"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#6C6FF2] hover:text-white transition-all"
          aria-label="GitHub"
        >
          <i className="fa-brands fa-github text-lg" aria-hidden />
        </a>
        <a
          href="https://www.linkedin.com/in/anu-bilegdemberel-445366318/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#6C6FF2] hover:text-white transition-all"
          aria-label="LinkedIn"
        >
          <i className="fa-brands fa-linkedin-in text-lg" aria-hidden />
        </a>
        <Link
          href="/#contact"
          className="bg-black text-white px-5 py-3 md:px-[24px] md:py-[12px] rounded-full text-[14px] font-semibold hover:bg-[#6C6FF2] transition-all"
        >
          Let&apos;s Talk
        </Link>
      </div>
    </header>
  );
}
