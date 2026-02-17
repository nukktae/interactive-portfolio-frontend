import type { DeveloperMeta } from "@/lib/projects/developer-content";

interface DeveloperMetaBarProps {
  meta: DeveloperMeta;
}

export function DeveloperMetaBar({ meta }: DeveloperMetaBarProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 py-8 md:py-10 border-t border-gray-100">
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
          My Role
        </p>
        <p className="text-base md:text-lg font-medium">{meta.role}</p>
      </div>
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
          Core Stack
        </p>
        <p className="text-base md:text-lg font-medium">{meta.stack}</p>
      </div>
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
          Timeline
        </p>
        <p className="text-base md:text-lg font-medium">{meta.timeline}</p>
      </div>
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
          Live Project
        </p>
        {meta.liveUrl ? (
          <a
            href={meta.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base md:text-lg font-medium flex items-center gap-2 w-fit hover:text-[#6C6FF2] transition-colors"
          >
            {meta.liveLabel ?? meta.liveUrl}
            <i
              className="fa-solid fa-arrow-up-right-from-square text-sm"
              aria-hidden
            />
          </a>
        ) : (
          <p className="text-base md:text-lg font-medium text-gray-400">
            —
          </p>
        )}
      </div>
    </div>
  );
}
