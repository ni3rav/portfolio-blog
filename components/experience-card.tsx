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
    <div className="border border-gray-700 hover:border-purple-500 transition-colors h-full">
      <div className="p-4">
        <p className="text-gray-400 mb-2">{experience.period}</p>
        <h3 className="text-xl font-semibold mb-2 hover:text-purple-500 transition-colors">
          {experience.title}
        </h3>
        <p className="text-purple-500 text-sm mb-2">{experience.company}</p>
        <p className="text-gray-400 mb-3">{experience.description}</p>
        {experience.technologies && (
          <div className="flex flex-wrap gap-1">
            {experience.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs border border-gray-700 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
            {experience.technologies.length > 3 && (
              <span className="text-xs text-gray-500">
                +{experience.technologies.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
