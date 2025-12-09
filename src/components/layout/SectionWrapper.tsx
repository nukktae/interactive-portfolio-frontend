interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ children, className = "" }: SectionWrapperProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
} 