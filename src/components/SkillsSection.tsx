interface SkillsSectionProps {
  title: string;
  skills?: string[];
  className?: string;
}

export default function SkillsSection({ title, skills, className = "" }: SkillsSectionProps) {
  if (!skills?.length) return null;

  return (
    <div className={`rounded-xl p-6 ${className}`}>
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 text-gray-300"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 