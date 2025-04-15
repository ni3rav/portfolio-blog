import Navbar from "@/components/navbar";
import Link from "next/link";
import { getAllBlogs } from "@/lib/getBlogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | by Nirav",
  description: "Thoughts, ideas, and insights on web design and development.",
  openGraph: {
    title: "Blogs | by Nirav",
    description: "Thoughts, ideas, and insights on web design and development.",
    url: "/blogs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs | by Nirav",
    description: "Thoughts, ideas, and insights on web design and development.",
  },
};

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <main>
      <Navbar />

      {/* Blog Header */}
      <section className="pt-12 md:pt-16 pb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-purple-500">#</span>blog
        </h1>
        <p className="text-gray-400">
          Thoughts, ideas, and insights on web design and development
        </p>
      </section>

      {/* Blog Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {blogs.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="block group h-full"
            aria-label={`Read blog post: ${post.title}`}
          >
            <article className="border border-gray-700 hover:border-purple-500 transition-colors h-full">
              <div className="p-6 flex flex-col h-full">
                <p className="text-gray-400 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {post.description || "No excerpt available."}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {post.tags?.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-sm text-gray-400 border border-gray-700 px-2 py-1"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}
