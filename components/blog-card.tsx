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
      <div className="border border-surface1 hover:border-mauve transition-colors h-full">
        <div className="p-4">
          <p className="text-subtext0 mb-2">{blog.date}</p>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-mauve transition-colors">
            {blog.title}
          </h3>
          <p className="text-subtext0">{blog.description}</p>
        </div>
      </div>
    </Link>
  );
}
