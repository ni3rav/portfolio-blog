import Navbar from "@/components/navbar";
import Link from "next/link";
import { getAllBlogs } from "@/lib/getBlogs";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Blog",
  description:
    "Technical articles and insights on web development, React, Next.js, design patterns, and modern JavaScript. Learn from my experiences building web applications.",
  url: "/blogs",
});

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <main>
      <Navbar />

      {/* Blog Header */}
      <section className="pt-12 md:pt-16 pb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-mauve">#</span>blog
        </h1>
        <p className="text-subtext0">
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
            <article className="border border-surface1 hover:border-mauve transition-colors h-full">
              <div className="p-6 flex flex-col h-full">
                <p className="text-subtext0 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-mauve transition-colors">
                  {post.title}
                </h3>
                <p className="text-subtext0 mb-4 flex-grow">
                  {post.description || "No excerpt available."}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {post.tags?.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-sm text-subtext0 border border-surface1 px-2 py-1"
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
