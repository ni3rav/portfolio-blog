import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import ProjectCard from "@/components/project-card";
import { blogs, projects } from "@/lib/homePageContent";

export default function Home() {


  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2 cursor-default">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in">
            Hi there! <br />{"I'm "}
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
            sophomore
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

      {/* Projects Section */}
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
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Blog Section Preview */}
      <section className="py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-purple-500">#</span>blog
          </h2>
          <div className="flex-grow mx-4 h-px bg-gray-700"></div>
          <Link
            href="/blog"
            className="text-gray-400 hover:text-white whitespace-nowrap"
          >
            View all --&gt;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link key={blog.href} href={blog.href} className="block group">
              <div className="border border-gray-700 hover:border-purple-500 transition-colors h-full">
          <div className="p-4">
            <p className="text-gray-400 mb-2">{blog.date}</p>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-500 transition-colors">
              {blog.title}
            </h3>
            <p className="text-gray-400">{blog.description}</p>
          </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
