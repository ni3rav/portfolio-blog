import Navbar from "@/components/navbar";
import ProjectCard from "@/components/project-card";
import { projectsPrev } from "@/lib/projects";

export default function Projects() {
  return (
    <main>
      <Navbar />

      {/* Projects Header */}
      <section className="py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-purple-500">#</span>projects
        </h1>
        <p className="text-gray-400">
          A selection of my recent work and personal projects
        </p>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {projectsPrev.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  );
}
