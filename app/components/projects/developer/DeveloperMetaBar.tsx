import type { DeveloperMeta } from "@/lib/projects/developer-content";

interface DeveloperMetaBarProps {
  meta: DeveloperMeta;
}

export function DeveloperMetaBar({ meta }: DeveloperMetaBarProps) {
  const rows = [
    { label: "My Role", value: meta.role },
    { label: "Core Stack", value: meta.stack },
    { label: "Timeline", value: meta.timeline },
  ];

  return (
    <div className="py-6 md:py-10 border-t border-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        {rows.map(({ label, value }) => (
          <div
            key={label}
            className="flex flex-col sm:block gap-0.5 py-3 sm:py-0 border-b border-gray-100 sm:border-none last:border-none"
          >
            <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5 sm:mb-2">
              {label}
            </p>
            <span className="text-sm sm:text-base md:text-lg font-medium text-[#111111] block">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
