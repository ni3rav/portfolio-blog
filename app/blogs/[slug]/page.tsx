"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/navbar";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { blogs } from "@/lib/blogs";

const getBlog = (slug: string) => {
  return blogs[slug as keyof typeof blogs];
};

export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug as string;
  const blog = getBlog(slug);

  if (!blog) {
    return (
      <main>
        <Navbar />
        <div className="py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog not found</h1>
          <Link href="/blogs" className="text-purple-500 hover:underline">
            Back to blogs
          </Link>
        </div>
      </main>
    );
  }

  return (
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

        <p className="text-gray-400 mb-2">{blog.date}</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>

        <div className="flex flex-wrap gap-2 mb-6">
          {blog.tags.map((tag) => (
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
            src={blog.image || "/placeholder.svg"}
            alt={blog.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <article
          className="prose prose-invert max-w-none text-gray-300"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        <p className="text-sm mt-12 text-right text-gray-500">
          Written by <span className="text-white">{blog.author}</span>
        </p>
      </section>
    </main>
  );
}
