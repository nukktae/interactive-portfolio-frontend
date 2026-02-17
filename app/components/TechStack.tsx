"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faFigma,
  faFlutter,
  faTypescript,
  faNodeJs,
  faPython,
  faPostgresql,
  faDocker,
  faAws,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faWind,
  faDatabase,
  faFire,
  faPaperPlane,
  faChartLine,
  faMagnifyingGlass,
  faDiagramProject,
  faCode,
  faMicrochip,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";

const ACCENT = "#6C6FF2";
const iconCls = "w-4 h-4 shrink-0";

const categories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: faCode,
    accent: "#61DAFB",
    items: [
      { icon: faReact, label: "React", color: "#61DAFB" },
      { icon: faJs, label: "JavaScript", color: "#F7DF1E" },
      { icon: faWind, label: "Tailwind", color: "#06B6D4" },
      { icon: faFlutter, label: "Flutter", color: "#02569B" },
      { icon: faTypescript, label: "TypeScript", color: "#3178C6" },
    ],
  },
  {
    id: "ui-product",
    label: "UI/UX & Product",
    icon: faDiagramProject,
    accent: ACCENT,
    items: [
      { icon: faFigma, label: "Figma", color: "#F24E1E" },
      { icon: faDiagramProject, label: "Product", color: ACCENT },
      { icon: faMagnifyingGlass, label: "Research", color: "#64748b" },
      { icon: faChartLine, label: "Data viz", color: "#06B6D4" },
      { label: "User Personas" },
      { label: "User Journeys" },
    ],
  },
  {
    id: "backend",
    label: "Backend & Core",
    icon: faDatabase,
    accent: "#339933",
    items: [
      { icon: faNodeJs, label: "Node.js", color: "#339933" },
      { icon: faPython, label: "Python", color: "#3776AB" },
      { icon: faDatabase, label: "Databases", color: "#4479A1" },
      { icon: faPostgresql, label: "PostgreSQL", color: "#336791" },
    ],
  },
  {
    id: "hardware",
    label: "Hardware & Engineering",
    icon: faMicrochip,
    accent: "#0ea5e9",
    items: [
      "Arduino",
      "Raspberry Pi",
      "Embedded C",
      "C++",
      "IoT Sensors",
      "PCB Design",
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Tools",
    icon: faCloud,
    accent: "#FF9900",
    items: [
      { icon: faAws, label: "AWS", color: "#FF9900" },
      { icon: faDocker, label: "Docker", color: "#2496ED" },
      { icon: faGithub, label: "GitHub", color: "#181717" },
      { icon: faFire, label: "Firebase", color: "#FFCA28" },
      { icon: faPaperPlane, label: "Postman", color: "#FF6C37" },
    ],
  },
];

function ToolChip({
  icon,
  label,
  color,
}: {
  icon?: typeof faReact;
  label: string;
  color?: string;
}) {
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
      title={label}
    >
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className={iconCls}
          style={color ? { color } : undefined}
        />
      )}
      <span>{label}</span>
    </span>
  );
}

function TextChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
      {label}
    </span>
  );
}

export function TechStack() {
  return (
    <section
      id="tech-stack"
      className="w-full py-16 md:py-24 px-6 md:px-20 bg-gray-50"
    >
      <div className="flex flex-col sm:flex-row justify-between items-end gap-4 mb-12 md:mb-16">
        <div>
          <span className="text-[#6C6FF2] font-semibold tracking-widest uppercase text-sm">
            Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            The toolkit
          </h2>
        </div>
        <p className="text-gray-400 text-sm md:text-base">
          Technologies I use to ship products.
        </p>
      </div>

      <div className="space-y-0">
        {categories.map((cat, index) => (
          <div
            key={cat.id}
            className={`group flex flex-col lg:flex-row items-start py-8 md:py-12 border-t border-gray-200 hover:bg-white transition-all px-4 md:px-8 -mx-4 md:-mx-8 rounded-lg ${index === categories.length - 1 ? "border-b border-gray-200" : ""}`}
          >
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0 flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white shrink-0"
                style={{ backgroundColor: cat.accent }}
              >
                <FontAwesomeIcon icon={cat.icon} className="w-4 h-4" />
              </div>
              <span className="text-base md:text-lg font-semibold">
                {cat.label}
              </span>
            </div>
            <div className="w-full lg:w-3/4 flex flex-wrap gap-2 md:gap-3">
              {cat.items.map((item) =>
                typeof item === "string" ? (
                  <TextChip key={item} label={item} />
                ) : "icon" in item && item.icon ? (
                  <ToolChip
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                    color={item.color}
                  />
                ) : (
                  <TextChip key={item.label} label={item.label} />
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
