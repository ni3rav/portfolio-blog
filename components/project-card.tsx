import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    image?: string;
    tags?: string[];
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="block group">
      <div className="border border-gray-700 hover:border-purple-500 transition-colors h-full">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="p-4 flex flex-col h-full">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-500 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-2">{project.description}</p>
          {project.tags && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-gray-400 border border-gray-700 px-2 py-1"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
