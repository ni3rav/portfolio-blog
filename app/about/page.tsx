import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { skills, experiences, achievements } from "@/content/about-me";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Nirav",
  description: "Get to know Nirav and his work as a fullstack developer.",
  openGraph: {
    title: "About | Nirav",
    description: "Get to know Nirav and his work as a fullstack developer.",
    url: "/about",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Nirav",
    description: "Get to know Nirav and his work as a fullstack developer.",
  },
};

export default function AboutMe() {
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

      {/* Achievements Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-purple-500">#</span>achievements
          </h2>
          <div className="flex-grow mx-4 h-px bg-gray-700"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="border border-gray-700 p-6 hover:border-purple-500/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-purple-500 mb-2">
                {achievement.organization} <br />
                <span className="text-sm font-light text-gray-300">
                  {achievement.year}
                </span>
              </p>
              <p className="text-gray-300">{achievement.description}</p>
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
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="border-l-2 border-purple-500 pl-6 relative"
            >
              <div className="absolute w-3 h-3 bg-purple-500 rounded-full left-[-7px] top-1"></div>
              <h3 className="text-xl font-bold">{experience.title}</h3>
              <p className="text-purple-500 mb-2">
                {experience.company} | {experience.period}
              </p>
              <p className="text-gray-300 mb-3">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies &&
                  experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm border border-gray-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
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
              <b>CGPA: </b> 7.73 (As of Semester 4)
            </p>
            <p className="text-gray-300">
              <b>Coursework: </b> Data Structures, Analysis and Design of
              Algorithms, Database Management Systems, Computer Networks,
              Operating Systems
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
