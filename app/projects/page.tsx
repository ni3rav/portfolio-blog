import Navbar from "@/components/navbar"
import ProjectCard from "@/components/project-card"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Deplois",
      description: "deploy your dream",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 2,
      title: "Pixel Battle",
      description: "Interactive pixel game",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 3,
      title: "Feedcrush",
      description: "українська блогінгова платформа для розробників",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Personal portfolio with blog",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 5,
      title: "E-commerce Platform",
      description: "Modern shopping experience",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 6,
      title: "Weather App",
      description: "Real-time weather forecasts",
      image: "/placeholder.svg?height=200&width=350",
    },
  ]

  return (
    <main>
      <Navbar />

      {/* Projects Header */}
      <section className="py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-purple-500">#</span>projects
        </h1>
        <p className="text-gray-400">A selection of my recent work and personal projects</p>
      </section>

      {/* Filter by Category */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Filter by category:</h2>
        <div className="flex flex-wrap gap-2">
          {["all", "web", "mobile", "design", "frontend", "backend"].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 border ${category === "all" ? "border-purple-500 bg-purple-500/10" : "border-gray-700"} hover:border-purple-500 hover:bg-purple-500/10 transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  )
}

