export function Hero() {
  return (
    <section
      id="hero"
      className="w-full px-6 md:px-12 pt-20 md:pt-32 pb-16 md:pb-20 flex flex-col items-start"
    >
      <div className="inline-block px-4 py-1 border border-black rounded-full text-xs font-bold mb-6 md:mb-8">
        SOFTWARE ENGINEERING & MARKETING DOUBLE MAJOR
      </div>
      <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[120px] font-black leading-[0.9] tracking-tighter mb-8 md:mb-12">
        ARCHITECTING
        <br />
        <span className="text-[#6C6FF2]">DIGITAL</span> LOGIC.
      </h1>
      <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-end gap-8">
        <p className="max-w-xl text-lg md:text-xl text-gray-500 leading-relaxed">
          A multi-disciplinary creator blending the precision of software
          engineering with the strategic psychology of marketing. Lived in 4
          countries, building global solutions.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/nukktae"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#6C6FF2] hover:text-white transition-all"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github text-xl" aria-hidden />
          </a>
          <a
            href="https://www.linkedin.com/in/anu-bilegdemberel-445366318/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#6C6FF2] hover:text-white transition-all"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in text-xl" aria-hidden />
          </a>
        </div>
      </div>

      {/* Global Experience Banner */}
      <div className="w-full mt-12 md:mt-16 py-8 md:py-12 border-y border-gray-100 flex flex-wrap justify-around items-center gap-8">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-black">04</div>
          <div className="text-xs text-gray-400 uppercase tracking-widest mt-2">
            Countries Lived
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-black">03+</div>
          <div className="text-xs text-gray-400 uppercase tracking-widest mt-2">
            Core Disciplines
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-black">30+</div>
          <div className="text-xs text-gray-400 uppercase tracking-widest mt-2">
            Projects Shipped
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-black text-[#6C6FF2]">∞</div>
          <div className="text-xs text-gray-400 uppercase tracking-widest mt-2">
            Curiosity
          </div>
        </div>
      </div>
    </section>
  );
}
