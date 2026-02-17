interface DesignerMetaBarProps {
  role: string;
  timeline: string;
  tools: string;
  deliverables: string;
}

export function DesignerMetaBar({
  role,
  timeline,
  tools,
  deliverables,
}: DesignerMetaBarProps) {
  const items = [
    { label: "Role", value: role },
    { label: "Timeline", value: timeline },
    { label: "Tools", value: tools },
    { label: "Deliverables", value: deliverables },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-20 mb-20 md:mb-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-neutral-100 py-8 md:py-12 gap-8">
        {items.map(({ label, value }) => (
          <div key={label}>
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
              {label}
            </h4>
            <p className="text-base md:text-lg font-medium whitespace-pre-line">
              {value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
