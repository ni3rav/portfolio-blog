import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import ProjectCard from "@/components/project-card";
import AchievementCard from "@/components/achievement-card";
import ExperienceCard from "@/components/experience-card";
import BlogCard from "@/components/blog-card";
import { achievements, experiences } from "@/content/about-me";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Helper to get project previews from MDX files
function getProjectPreviews() {
  const dir = path.join(process.cwd(), "content/projects");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => {
      const id = file.replace(/\.mdx?$/, "");
      const { data } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
      return { id, ...data };
    })
    .slice(0, 3); // Show only first 3
}

// Helper to get blog previews from MDX files
function getBlogPreviews() {
  const dir = path.join(process.cwd(), "content/blogs");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => {
      const id = file.replace(/\.mdx?$/, "");
      const { data } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
      return { id, ...data };
    })
    .slice(0, 3); // Show only first 3
}

export default function Home() {
  const projectsPrev = getProjectPreviews();
  const blogsPrev = getBlogPreviews();
  const achievementsPrev = achievements.slice(0, 3); // Show only first 3
  const experiencePrev = experiences.slice(0, 3); // Show only first 3

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2 cursor-default">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in">
            Hi there! <br />
            {"I'm "}
            <span className="text-purple-500 hover:text-purple-400 transition-colors">
              Nirav
            </span>
            <br />a{" "}
            <span className="text-purple-500 hover:text-purple-400 transition-colors">
              fullstack
            </span>{" "}
            developer and
            <span className="text-purple-500 hover:text-purple-400 transition-colors">
              {" "}
              Computer Science
            </span>{" "}
            junior
          </h1>
          <Link
            href="/about"
            className="inline-block border border-purple-500 text-white px-6 py-3 hover:bg-purple-500/10 transition-colors"
          >
            About Me =&gt;
          </Link>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="relative max-w-[300px] mx-auto md:mx-0 md:ml-auto">
            <div className="border-2 border-purple-500 absolute top-[-20px] right-[-20px] w-full h-full"></div>
            <Image
              src="/hero.jpeg"
              alt="Nirav profile"
              width={300}
              height={400}
              className="relative z-10"
            />
            <div className="absolute top-0 right-0 w-[150px] h-[150px] grid grid-cols-5 gap-2">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-gray-500 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Preview Section */}
      <section className="py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-purple-500">#</span>achievements
          </h2>
          <div className="flex-grow mx-4 h-px bg-gray-700"></div>
          <Link
            href="/about#achievements"
            className="text-gray-400 hover:text-white whitespace-nowrap"
          >
            View all --&gt;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsPrev.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-purple-500">#</span>projects
          </h2>
          <div className="flex-grow mx-4 h-px bg-gray-700"></div>
          <Link
            href="/projects"
            className="text-gray-400 hover:text-white whitespace-nowrap"
          >
            View all --&gt;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsPrev.map((project: any) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Experience Preview Section */}
      <section className="py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-purple-500">#</span>experience
          </h2>
          <div className="flex-grow mx-4 h-px bg-gray-700"></div>
          <Link
            href="/about#experience"
            className="text-gray-400 hover:text-white whitespace-nowrap"
          >
            View all --&gt;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiencePrev.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-purple-500">#</span>blog
          </h2>
          <div className="flex-grow mx-4 h-px bg-gray-700"></div>
          <Link
            href="/blogs"
            className="text-gray-400 hover:text-white whitespace-nowrap"
          >
            View all --&gt;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogsPrev.map((blog: any) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
    </main>
  );
}
