import { blogs } from "@/lib/blogs";
import Navbar from "@/components/navbar";
import { notFound } from "next/navigation";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = blogs[params.slug as keyof typeof blogs];

  if (!blog) return notFound();

  return (
    <main>
      <Navbar />
      <section className="max-w-3xl mx-auto pt-12 pb-20 px-4">
        <p className="text-gray-400 mb-2">{blog.date}</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm text-gray-400 border border-gray-700 px-2 py-1"
            >
              #{tag}
            </span>
          ))}
        </div>

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full mb-8 rounded-xl border border-gray-700"
        />

        {/* Blog content as HTML string (you can switch to MDX later) */}
        <article
          className="prose prose-invert max-w-none text-gray-300"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        <p className="text-sm mt-8 text-right text-gray-500">
          Written by {blog.author}
        </p>
      </section>
    </main>
  );
}
