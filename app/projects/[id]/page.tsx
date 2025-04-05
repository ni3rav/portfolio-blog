import Navbar from "@/components/navbar"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

// This would typically come from a CMS or database
const getProject = (id: string) => {
  const projects = {
    "1": {
      id: 1,
      title: "Deplois",
      description: "deploy your dream",
      fullDescription:
        "A platform that simplifies the deployment process for developers, allowing them to focus on coding rather than infrastructure management.",
      technologies: ["React", "Node.js", "Docker", "AWS"],
      image: "/placeholder.svg?height=600&width=800",
      demoUrl: "https://example.com/demo",
      githubUrl: "https://github.com/example/deplois",
      year: "2024",
    },
    "2": {
      id: 2,
      title: "Pixel Battle",
      description: "Interactive pixel game",
      fullDescription:
        "A collaborative pixel art canvas where users can place colored pixels to create artwork together in real-time.",
      technologies: ["Vue.js", "WebSockets", "Express", "MongoDB"],
      image: "/placeholder.svg?height=600&width=800",
      demoUrl: "https://example.com/demo",
      githubUrl: "https://github.com/example/pixel-battle",
      year: "2023",
    },
    "3": {
      id: 3,
      title: "Feedcrush",
      description: "українська блогінгова платформа для розробників",
      fullDescription:
        "A Ukrainian blogging platform specifically designed for developers to share knowledge, tutorials, and experiences.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      image: "/placeholder.svg?height=600&width=800",
      demoUrl: "https://example.com/demo",
      githubUrl: "https://github.com/example/feedcrush",
      year: "2023",
    },
  }

  return projects[id as keyof typeof projects]
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = getProject(params.id)

  if (!project) {
    return (
      <main>
        <Navbar />
        <div className="py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <Link href="/projects" className="text-purple-500 hover:underline">
            Back to projects
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Navbar />

      <article className="py-16">
        <Link href="/projects" className="flex items-center text-gray-400 hover:text-purple-500 mb-8 group">
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:translate-x-[-2px] transition-transform" />
          Back to all projects
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-gray-400 text-lg">{project.description}</p>
        </div>

        <div className="mb-12">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden border border-gray-700">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-gray-300 mb-6">{project.fullDescription}</p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-purple-500 px-4 py-2 hover:bg-purple-500/10 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-700 px-4 py-2 hover:border-white hover:text-white transition-colors"
              >
                <Github className="h-4 w-4" />
                View Code
              </a>
            </div>
          </div>

          <div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-xl font-bold mb-4">Project Details</h3>

              <div className="mb-4">
                <h4 className="text-gray-400 mb-2">Year</h4>
                <p>{project.year}</p>
              </div>

              <div>
                <h4 className="text-gray-400 mb-2">Technologies</h4>
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="border border-gray-700 px-3 py-1">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}

