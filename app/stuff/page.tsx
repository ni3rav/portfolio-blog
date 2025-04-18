import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { marked } from "marked";
import Navbar from "@/components/navbar";

export default function StuffPage() {
  const filePath = path.join(process.cwd(), "app/stuff/content.mdx");
  let content = "";

  try {
    content = fs.readFileSync(filePath, "utf8");
  } catch (e) {
    notFound();
  }

  const html = marked.parse(content);

  return (
    <>
      <Navbar />
      <main className="prose prose-invert mx-auto py-12">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </>
  );
}
