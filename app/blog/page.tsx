import Navbar from "@/components/navbar"
import Link from "next/link"

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Web Design Trends in 2025",
      date: "April 22, 2025",
      slug: "web-design-trends",
      excerpt: "Exploring the latest trends in web design and how they're shaping the digital landscape.",
      tags: ["design", "trends", "web"],
    },
    {
      id: 2,
      title: "Comparing Modern Frontend Frameworks",
      date: "March 15, 2025",
      slug: "frontend-frameworks",
      excerpt: "A deep dive into React, Vue, and Svelte - which one should you choose for your next project?",
      tags: ["react", "vue", "svelte", "frameworks"],
    },
    {
      id: 3,
      title: "The Art of Responsive Design",
      date: "February 28, 2025",
      slug: "responsive-design",
      excerpt: "Creating websites that look great on any device - techniques and best practices.",
      tags: ["responsive", "design", "css"],
    },
    {
      id: 4,
      title: "Optimizing Website Performance",
      date: "February 10, 2025",
      slug: "website-performance",
      excerpt: "Tips and tricks to make your website load faster and provide a better user experience.",
      tags: ["performance", "optimization", "speed"],
    },
    {
      id: 5,
      title: "The Future of CSS: What's Coming in 2025",
      date: "January 25, 2025",
      slug: "future-of-css",
      excerpt: "New CSS features on the horizon and how they will change the way we style websites.",
      tags: ["css", "future", "web standards"],
    },
    {
      id: 6,
      title: "Building Accessible Websites",
      date: "January 12, 2025",
      slug: "accessible-websites",
      excerpt: "Why accessibility matters and how to ensure your websites can be used by everyone.",
      tags: ["accessibility", "a11y", "inclusive design"],
    },
  ]

  return (
    <main>
      <Navbar />

      {/* Blog Header */}
      <section className="py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-purple-500">#</span>blog
        </h1>
        <p className="text-gray-400">Thoughts, ideas, and insights on web design and development</p>
      </section>

      {/* Filter by Tags */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Filter by tag:</h2>
        <div className="flex flex-wrap gap-2">
          {["all", "design", "development", "css", "frameworks", "performance", "accessibility"].map((tag) => (
            <button
              key={tag}
              className={`px-4 py-2 border ${tag === "all" ? "border-purple-500 bg-purple-500/10" : "border-gray-700"} hover:border-purple-500 hover:bg-purple-500/10 transition-colors`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Posts */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
            <div className="border border-gray-700 hover:border-purple-500 transition-colors h-full">
              <div className="p-6 flex flex-col h-full">
                <p className="text-gray-400 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 flex-grow">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-sm text-gray-400 border border-gray-700 px-2 py-1">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}

