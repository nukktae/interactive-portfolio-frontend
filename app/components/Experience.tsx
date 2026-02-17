export interface ExperienceItem {
  period: string;
  location: string;
  title: string;
  description: string;
  tags: string[];
  company: string;
}

const EXPERIENCE: ExperienceItem[] = [
  {
    period: "2025.03 — Present",
    location: "Torrance, CA",
    title: "Full Stack Developer",
    description:
      "Designed and developed the frontend for two mobile apps and a marketing website, delivering consistent UI across platforms. Led major UX redesigns (chat, booking, and quote request), enhancing clarity and conversion through data-backed decisions. Built intuitive, responsive interfaces using Figma and Flutter, collaborating with backend and CEO to ship real-time features like camera input and AI estimation.",
    tags: ["Figma", "Flutter", "React", "TypeScript"],
    company: "Handiers Inc.",
  },
  {
    period: "2024 — 2025",
    location: "Los Angeles, CA",
    title: "UI/UX Designer & Frontend Developer",
    description:
      "Designed and developed a CRM platform for real estate agents; led design and frontend integration with weekly agent feedback sessions. Showcased at LA Tech Week, generating 300 agents on the waiting list through design and seamless frontend integration. Automated workflows and eliminated manual data entry to improve agent productivity.",
    tags: ["Figma", "React", "TypeScript", "CRM"],
    company: "Bestia Group LLC",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="w-full py-16 md:py-24 px-6 md:px-20 bg-gray-50"
    >
      <div className="flex flex-col sm:flex-row justify-between items-end gap-4 mb-12 md:mb-16">
        <div>
          <span className="text-[#6C6FF2] font-semibold tracking-widest uppercase text-sm">
            Professional Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Experience</h2>
        </div>
        <div className="text-gray-400 text-sm">2024 — Present</div>
      </div>

      <div className="space-y-0">
        {EXPERIENCE.map((item, index) => (
          <div
            key={item.company + item.period}
            className={`group flex flex-col lg:flex-row items-start py-8 md:py-12 border-t border-gray-200 hover:bg-white transition-all px-4 md:px-8 -mx-4 md:-mx-8 rounded-lg ${index === EXPERIENCE.length - 1 ? "border-b border-gray-200" : ""}`}
          >
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
              <span className="text-base md:text-lg font-semibold">
                {item.period}
              </span>
              <p className="text-gray-400 mt-1 text-sm md:text-base">
                {item.location}
              </p>
            </div>
            <div className="w-full lg:w-2/4 lg:px-4">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/4 text-left lg:text-right mt-4 lg:mt-0 lg:pl-4">
              <span className="text-black font-bold">{item.company}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
