import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  const skills = [
    {
      category: "Languages",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "Java", "C"],
    },
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
        "Astro",
        "ShadCN",
      ],
    },
    {
      category: "Backend",
      items: ["mongoDB", "ExpressJS", "NodeJS", "Flask", "FastAPI"],
    },
    {
      category: "Tools",
      items: ["VS Code", "Z-Shell", "Powershell", "Postman", "Git"],
    },
  ];

  return (
    <main>
      <Navbar />
      {/* About Header */}
      <section className="py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-purple-500">#</span>about
        </h1>
        <p className="text-gray-400">Get to know me and my work</p>
      </section>

      {/* About Content */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Who am I?</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Hello! I'm Nirav, a fullstack developer and computer science
              sophomore at Adani University. I specialize in building modern web
              applications using React, Next.js, and TypeScript. My passion lies
              in creating efficient, scalable solutions and learning new
              technologies.
            </p>
            <p>
              Having been exposed to computers from a young age, I stumbled upon
              coding which sparked my curiosity. After exploring various
              programming domains, I discovered my true passion in web
              development. The ability to create interactive and impactful user
              experiences through code continues to drive my enthusiasm.
            </p>
            <p>
              When I'm not coding, you can find me watching cat videos because{" "}
              <i>i like cats</i>
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/resume.pdf"
              className="inline-block border border-purple-500 text-white px-6 py-3 hover:bg-purple-500/10 transition-colors"
            >
              My Resume =&gt;
            </Link>
          </div>
        </div>

        <div>
          <div className="relative max-w-[300px] mx-auto md:mx-0">
            <div className="border-2 border-purple-500 absolute top-[-20px] right-[-20px] w-full h-full"></div>
            <Image
              src="/hero.jpeg"
              alt="Nirav profile"
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

        <div className="grid grid-cols-1 gap-6">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="border border-gray-700 p-4"
            >
              <h3 className="text-xl font-semibold mb-4">
                {skillGroup.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="border border-gray-700 px-3 py-1 mb-2"
                  >
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
            <span className="text-purple-500">#</span>education
          </h2>
          <div className="flex-grow mx-4 h-px bg-gray-700"></div>
        </div>

        <div className="space-y-8">
          <div className="border-l-2 border-purple-500 pl-6 relative">
            <div className="absolute w-3 h-3 bg-purple-500 rounded-full left-[-7px] top-1"></div>
            <h3 className="text-xl font-bold">
              Computer Science and Engineering (AI & ML)
            </h3>
            <p className="text-purple-500">Adani University | 2023 - 2027</p>
            <p className="text-gray-300">
              <b>Coursework: </b> Data Structures, Analysis and Design of
              Algorithms, Database Management Systems, Computer Networks,
              Operating Systems
            </p>
          </div>

          {/* <div className="border-l-2 border-gray-700 pl-6 relative">
            <div className="absolute w-3 h-3 bg-gray-700 rounded-full left-[-7px] top-1"></div>
            <h3 className="text-xl font-bold">Web Designer</h3>
            <p className="text-purple-500">Creative Agency | 2020 - 2022</p>
            <p className="text-gray-300 mt-2">
              Designed and developed responsive websites for clients across
              various industries, focusing on user experience and brand
              consistency.
            </p>
          </div> */}
        </div>
      </section>
    </main>
  );
}
