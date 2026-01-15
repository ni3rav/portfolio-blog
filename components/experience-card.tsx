interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
}

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="border border-surface1 hover:border-mauve transition-colors h-full">
      <div className="p-4">
        <p className="text-subtext0 mb-2">{experience.period}</p>
        <h3 className="text-xl font-semibold mb-2 hover:text-mauve transition-colors">
          {experience.title}
        </h3>
        <p className="text-mauve text-sm mb-2">{experience.company}</p>
        <p className="text-subtext0 mb-3">{experience.description}</p>
        {experience.technologies && (
          <div className="flex flex-wrap gap-1">
            {experience.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs border border-surface1 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
            {experience.technologies.length > 3 && (
              <span className="text-xs text-overlay0">
                +{experience.technologies.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
