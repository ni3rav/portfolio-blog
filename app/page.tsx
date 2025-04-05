import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import ProjectCard from "@/components/project-card"

export default function Home() {
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
  ]

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Elias is a <span className="text-purple-500">web designer</span>
            <br />
            and <span className="text-purple-500">front-end</span> developer
          </h1>
          <p className="text-gray-400 mb-8">
            He crafts responsive websites where technologies
            <br className="hidden sm:block" />
            meet creativity
          </p>
          <Link
            href="/contact"
            className="inline-block border border-purple-500 text-white px-6 py-3 hover:bg-purple-500/10 transition-colors"
          >
            Contact ME =&gt;
          </Link>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="relative max-w-[300px] mx-auto md:mx-0 md:ml-auto">
            <div className="border-2 border-purple-500 absolute top-[-20px] right-[-20px] w-full h-full"></div>
            <Image
              src="/placeholder.svg?height=400&width=300"
              alt="Elias profile"
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
          <div className="mt-4 border border-gray-700 p-2 inline-block mx-auto md:mx-0 md:ml-auto">
            <span className="flex items-center">
              <span className="w-3 h-3 bg-purple-500 inline-block mr-2"></span>
              Open for new opportunities
            </span>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 flex justify-center">
        <div className="max-w-3xl w-full border-t border-b border-gray-700 py-8 px-4 relative">
          <div className="text-4xl absolute top-8 left-0">"</div>
          <p className="text-xl md:text-2xl text-center px-8">With great power comes great electricity bill</p>
          <div className="text-4xl absolute bottom-8 right-0">"</div>
          <p className="text-right mt-4">- Dr. Who</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-purple-500">#</span>projects
          </h2>
          <div className="flex-grow mx-4 h-px bg-gray-700"></div>
          <Link href="/projects" className="text-gray-400 hover:text-white whitespace-nowrap">
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
          <Link href="/blog" className="text-gray-400 hover:text-white whitespace-nowrap">
            View all --&gt;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/blog/web-design-trends" className="block group">
            <div className="border border-gray-700 hover:border-purple-500 transition-colors h-full">
              <div className="p-4">
                <p className="text-gray-400 mb-2">April 22, 2025</p>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-500 transition-colors">
                  Web Design Trends in 2025
                </h3>
                <p className="text-gray-400">
                  Exploring the latest trends in web design and how they're shaping the digital landscape.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/blog/frontend-frameworks" className="block group">
            <div className="border border-gray-700 hover:border-purple-500 transition-colors h-full">
              <div className="p-4">
                <p className="text-gray-400 mb-2">March 15, 2025</p>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-500 transition-colors">
                  Comparing Modern Frontend Frameworks
                </h3>
                <p className="text-gray-400">
                  A deep dive into React, Vue, and Svelte - which one should you choose for your next project?
                </p>
              </div>
            </div>
          </Link>

          <Link href="/blog/responsive-design" className="block group">
            <div className="border border-gray-700 hover:border-purple-500 transition-colors h-full">
              <div className="p-4">
                <p className="text-gray-400 mb-2">February 28, 2025</p>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-500 transition-colors">
                  The Art of Responsive Design
                </h3>
                <p className="text-gray-400">
                  Creating websites that look great on any device - techniques and best practices.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  )
}

