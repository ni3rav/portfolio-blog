import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    image: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="block group">
      <div className="border border-gray-700 hover:border-purple-500 transition-colors h-full">
        <div className="relative h-48 overflow-hidden">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-500 transition-colors">{project.title}</h3>
          <p className="text-gray-400">{project.description}</p>
        </div>
      </div>
    </Link>
  )
}

