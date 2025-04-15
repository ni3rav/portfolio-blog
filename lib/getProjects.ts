import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export type ProjectMeta = {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  [key: string]: any;
};

export function getAllProjects(): ProjectMeta[] {
  const files = fs.readdirSync(projectsDirectory);

  return files
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => {
      const id = file.replace(/\.mdx?$/, "");
      const fullPath = path.join(projectsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        id,
        ...data,
      } as ProjectMeta;
    });
}
