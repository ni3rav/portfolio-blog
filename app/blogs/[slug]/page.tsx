import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Navbar from "@/components/navbar";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { BlogPostStructuredData } from "@/components/structured-data";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // @ts-ignore
  if (typeof params.then === "function") {
    params = await params;
  }
  const blogPath = path.join(
    process.cwd(),
    "content/blogs",
    `${params.slug}.mdx`
  );
  if (!fs.existsSync(blogPath)) {
    return {};
  }
  const file = fs.readFileSync(blogPath, "utf8");
  const { data } = matter(file);
  return constructMetadata({
    title: data.title || params.slug,
    description: data.description || "Read this article by Nirav Mehta",
    image: data.image || "/opengraph-image",
    url: `/blogs/${params.slug}`,
  });
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  // @ts-ignore
  if (typeof params.then === "function") {
    params = await params;
  }

  const blogPath = path.join(
    process.cwd(),
    "content/blogs",
    `${params.slug}.mdx`
  );
  if (!fs.existsSync(blogPath)) {
    notFound();
  }

  const file = fs.readFileSync(blogPath, "utf8");
  const { data, content } = matter(file);

  return (
    <>
      <BlogPostStructuredData
        title={data.title}
        description={data.description || ""}
        datePublished={data.date}
        author={data.author || "Nirav Mehta"}
        image={data.image}
        url={`/blogs/${params.slug}`}
      />
      <main>
        <Navbar />

        <section className="py-16 px-4 max-w-4xl mx-auto">
          <Link
            href="/blogs"
            className="flex items-center text-gray-400 hover:text-purple-500 mb-8 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:translate-x-[-2px] transition-transform" />
            Back to all blogs
          </Link>

          <p className="text-gray-400 mb-2">{data.date}</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {data.tags?.map((tag: string) => (
              <span
                key={tag}
                className="text-sm text-gray-400 border border-gray-700 px-3 py-1"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] mb-12 overflow-hidden border border-gray-700 rounded-xl">
            <Image
              src={data.image || "/placeholder.svg"}
              alt={data.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <article className="prose prose-invert max-w-none text-gray-300">
            <MDXRemote source={content} />
          </article>

          <p className="text-sm mt-12 text-right text-gray-500">
            Written by <span className="text-white">{data.author}</span>
          </p>
        </section>
      </main>
    </>
  );
}
