import Navbar from "@/components/navbar"
import Image from "next/image"
import Link from "next/link"

export default function AboutMe() {
  const skills = [
    { category: "Languages", items: ["HTML", "CSS", "JavaScript", "TypeScript", "Python"] },
    { category: "Frameworks", items: ["React", "Next.js", "Vue", "Express", "Tailwind CSS"] },
    { category: "Tools", items: ["Git", "Figma", "VS Code", "Docker", "AWS"] },
    { category: "Other", items: ["Responsive Design", "SEO", "Accessibility", "Performance Optimization"] },
  ]

  return (
    <main>
      <Navbar />

      {/* About Header */}
      <section className="py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-purple-500">#</span>about-me
        </h1>
        <p className="text-gray-400">Get to know me and my work</p>
      </section>

      {/* About Content */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Who am I?</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Hello! I'm Elias, a web designer and front-end developer based in [Your Location]. I specialize in
              creating responsive, user-friendly websites that combine aesthetic appeal with functional design.
            </p>
            <p>
              With over 5 years of experience in the industry, I've worked on a variety of projects ranging from small
              business websites to complex web applications. My approach focuses on clean code, intuitive user
              interfaces, and performance optimization.
            </p>
            <p>
              When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or
              hiking in the mountains. I believe in continuous learning and staying updated with the latest technologies
              in the ever-evolving web development landscape.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block border border-purple-500 text-white px-6 py-3 hover:bg-purple-500/10 transition-colors"
            >
              Contact ME =&gt;
            </Link>
          </div>
        </div>

        <div>
          <div className="relative max-w-[300px] mx-auto md:mx-0">
            <div className="border-2 border-purple-500 absolute top-[-20px] right-[-20px] w-full h-full"></div>
            <Image
              src="/placeholder.svg?height=400&width=300"
              alt="Elias profile"
              width={300}
              height={400}
              className="relative z-10"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-purple-500">#</span>skills
          </h2>
          <div className="flex-grow mx-4 h-px bg-gray-700"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="border border-gray-700 p-4">
              <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="border border-gray-700 px-3 py-1 mb-2">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-purple-500">#</span>experience
          </h2>
          <div className="flex-grow mx-4 h-px bg-gray-700"></div>
        </div>

        <div className="space-y-8">
          <div className="border-l-2 border-purple-500 pl-6 relative">
            <div className="absolute w-3 h-3 bg-purple-500 rounded-full left-[-7px] top-1"></div>
            <h3 className="text-xl font-bold">Senior Front-end Developer</h3>
            <p className="text-purple-500">Tech Solutions Inc. | 2022 - Present</p>
            <p className="text-gray-300 mt-2">
              Leading front-end development for enterprise clients, implementing modern web technologies and mentoring
              junior developers.
            </p>
          </div>

          <div className="border-l-2 border-gray-700 pl-6 relative">
            <div className="absolute w-3 h-3 bg-gray-700 rounded-full left-[-7px] top-1"></div>
            <h3 className="text-xl font-bold">Web Designer</h3>
            <p className="text-purple-500">Creative Agency | 2020 - 2022</p>
            <p className="text-gray-300 mt-2">
              Designed and developed responsive websites for clients across various industries, focusing on user
              experience and brand consistency.
            </p>
          </div>

          <div className="border-l-2 border-gray-700 pl-6 relative">
            <div className="absolute w-3 h-3 bg-gray-700 rounded-full left-[-7px] top-1"></div>
            <h3 className="text-xl font-bold">Junior Developer</h3>
            <p className="text-purple-500">Web Innovations | 2018 - 2020</p>
            <p className="text-gray-300 mt-2">
              Collaborated with the development team to build and maintain client websites, gaining experience in
              front-end technologies.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

