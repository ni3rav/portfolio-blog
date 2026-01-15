import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { skills, experiences, achievements } from "@/content/about-me";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "About",
  description:
    "Get to know Nirav Mehta - fullstack developer, computer science student at Adani University. Learn about my skills, experience, achievements, and journey in web development.",
  url: "/about",
});

export default function AboutMe() {
  return (
    <main>
      <Navbar />

      {/* About Header */}
      <section className="py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-mauve">#</span>about
        </h1>
        <p className="text-subtext0">Get to know me and my work</p>
      </section>

      {/* About Content */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Who am I?</h2>
          <div className="space-y-4 text-subtext1">
            <p>
              Hello! I'm Nirav, a fullstack developer and computer science
              junior at Adani University. I specialize in building modern web
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
              className="inline-block border border-mauve text-foreground px-6 py-3 hover:bg-mauve/10 transition-colors"
            >
              My Resume =&gt;
            </Link>
          </div>
        </div>
        <div>
          <div className="relative max-w-[300px] mx-auto md:mx-0">
            <div className="border-2 border-mauve absolute top-[-20px] right-[-20px] w-full h-full"></div>
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
            <span className="text-mauve">#</span>skills
          </h2>
          <div className="flex-grow mx-4 h-px bg-surface1"></div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="border border-surface1 p-4"
            >
              <h3 className="text-xl font-semibold mb-4">
                {skillGroup.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="border border-surface1 px-3 py-1 mb-2"
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
      <section className="mb-16" id="achievements">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-mauve">#</span>achievements
          </h2>
          <div className="flex-grow mx-4 h-px bg-surface1"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="border border-surface1 p-6 hover:border-mauve/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-mauve mb-2">
                {achievement.organization} <br />
                <span className="text-sm font-light text-subtext1">
                  {achievement.year}
                </span>
              </p>
              <p className="text-subtext1">{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16" id="experience">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-mauve">#</span>experience
          </h2>
          <div className="flex-grow mx-4 h-px bg-surface1"></div>
        </div>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="border-l-2 border-mauve pl-6 relative"
            >
              <div className="absolute w-3 h-3 bg-mauve rounded-full left-[-7px] top-1"></div>
              <h3 className="text-xl font-bold">{experience.title}</h3>
              <p className="text-mauve mb-2">
                {experience.company} | {experience.period}
              </p>
              <p className="text-subtext1 mb-3">{experience.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-mauve">#</span>education
          </h2>
          <div className="flex-grow mx-4 h-px bg-surface1"></div>
        </div>
        <div className="space-y-8">
          <div className="border-l-2 border-mauve pl-6 relative">
            <div className="absolute w-3 h-3 bg-mauve rounded-full left-[-7px] top-1"></div>
            <h3 className="text-xl font-bold">
              Computer Science and Engineering (AI &amp; ML)
            </h3>
            <p className="text-mauve">Adani University | 2023 - 2027</p>
            <p className="text-subtext1">
              <b>CGPA: </b> 7.73 (As of Semester 4)
            </p>
            <p className="text-subtext1">
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
