import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  description: string;
  date: string;
}

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blogs/${blog.id}`} className="block group">
      <div className="border border-gray-700 hover:border-purple-500 transition-colors h-full">
        <div className="p-4">
          <p className="text-gray-400 mb-2">{blog.date}</p>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-500 transition-colors">
            {blog.title}
          </h3>
          <p className="text-gray-400">{blog.description}</p>
        </div>
      </div>
    </Link>
  );
}
