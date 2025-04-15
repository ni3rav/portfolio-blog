import Navbar from "@/components/navbar";
import ProjectCard from "@/components/project-card";
import { getAllProjects } from "@/lib/getProjects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | by Nirav",
  description: "A selection of my recent work and personal projects.",
  openGraph: {
    title: "Projects | by Nirav",
    description: "A selection of my recent work and personal projects.",
    url: "/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | by Nirav",
    description: "A selection of my recent work and personal projects.",
  },
};

export default function Projects() {
  const projects = getAllProjects();

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
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  );
}
