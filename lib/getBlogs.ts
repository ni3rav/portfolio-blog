import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "content/blogs");

export type BlogMeta = {
  slug: string;
  title: string;
  date: string;
  tags?: string[];
  description?: string;
  [key: string]: any;
};

export function getAllBlogs(): BlogMeta[] {
  const files = fs.readdirSync(blogsDirectory);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const fullPath = path.join(blogsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        ...data,
      } as BlogMeta;
    });
}
