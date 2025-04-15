import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Navbar from "@/components/navbar";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function ProjectDetail({
  params,
}: {
  params: { id: string };
}) {
  const projectPath = path.join(
    process.cwd(),
    "content/projects",
    `${params.id}.mdx`
  );
  if (!fs.existsSync(projectPath)) {
    notFound();
  }

  const file = fs.readFileSync(projectPath, "utf8");
  const { data, content } = matter(file);

  return (
    <main>
      <Navbar />

      <article className="py-16">
        <Link
          href="/projects"
          className="flex items-center text-gray-400 hover:text-purple-500 mb-8 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:translate-x-[-2px] transition-transform" />
          Back to all projects
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h1>
          <p className="text-gray-400 text-lg">{data.description}</p>
        </div>

        <div className="mb-12">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden border border-gray-700">
            <Image
              src={data.image || "/placeholder.svg"}
              alt={data.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <article className="prose prose-invert max-w-none text-gray-300 mb-6">
              <MDXRemote source={content} />
            </article>

            <div className="flex flex-wrap gap-4 mb-8">
              {data.demoUrl && (
                <a
                  href={data.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-purple-500 px-4 py-2 hover:bg-purple-500/10 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              )}
              {data.githubUrl && (
                <a
                  href={data.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-gray-700 px-4 py-2 hover:border-white hover:text-white transition-colors"
                >
                  <Github className="h-4 w-4" />
                  View Code
                </a>
              )}
            </div>
          </div>

          <div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-xl font-bold mb-4">Project Details</h3>

              <div className="mb-4">
                <h4 className="text-gray-400 mb-2">Year</h4>
                <p>{data.year}</p>
              </div>

              <div>
                <h4 className="text-gray-400 mb-2">Technologies</h4>
                <ul className="flex flex-wrap gap-2">
                  {data.technologies?.map((tech: string) => (
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
  );
}
