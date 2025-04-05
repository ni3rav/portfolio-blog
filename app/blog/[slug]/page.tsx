import Navbar from "@/components/navbar";
import Link from "next/link";
import { ArrowLeft, Share2, Calendar, User } from "lucide-react";

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  const posts = {
    "web-design-trends": {
      title: "Web Design Trends in 2025",
      date: "April 22, 2025",
      author: "Nirav",
      content: `
        <p>The world of web design is constantly evolving, with new trends emerging every year. In 2025, we're seeing a shift towards more immersive and interactive experiences, with a focus on accessibility and performance.</p>
        
        <h2>1. Immersive 3D Elements</h2>
        <p>With the advancement of WebGL and Three.js, more websites are incorporating 3D elements to create engaging user experiences. These aren't just flashy gimmicks anymore – they're being used to showcase products, tell stories, and guide users through digital experiences in meaningful ways.</p>
        
        <h2>2. Micro-interactions</h2>
        <p>Small, subtle animations that respond to user actions are becoming more sophisticated. These micro-interactions provide immediate feedback, guide users through tasks, and add personality to websites.</p>
        
        <h2>3. Dark Mode by Default</h2>
        <p>Dark mode isn't just a preference anymore – many sites are now designing for dark mode first, with light mode as an option. This shift acknowledges both aesthetic preferences and the energy-saving benefits of darker interfaces.</p>
        
        <h2>4. Voice User Interfaces</h2>
        <p>As voice assistants become more prevalent, websites are incorporating voice commands and responses. This trend is making the web more accessible and convenient for users in various contexts.</p>
        
        <h2>5. Ethical Design</h2>
        <p>There's a growing emphasis on designing websites that respect user privacy, avoid dark patterns, and consider the environmental impact of digital products. Ethical design is becoming a competitive advantage as users become more conscious of these issues.</p>
        
        <p>As we move through 2025, these trends will continue to evolve. The most successful websites will be those that adopt these innovations while maintaining a focus on usability, accessibility, and performance.</p>
      `,
      tags: ["design", "trends", "web"],
    },
    "frontend-frameworks": {
      title: "Comparing Modern Frontend Frameworks",
      date: "March 15, 2025",
      author: "Nirav",
      content: `
        <p>Choosing the right frontend framework for your project can be challenging with so many options available. Let's compare three of the most popular frameworks in 2025: React, Vue, and Svelte.</p>
        
        <h2>React</h2>
        <p>React continues to dominate the market with its robust ecosystem and strong community support. The introduction of React Server Components and improvements to the Suspense API have made it even more powerful for building complex applications.</p>
        <p>Pros:</p>
        <ul>
          <li>Mature ecosystem with extensive libraries and tools</li>
          <li>Strong community support and regular updates</li>
          <li>Great for large-scale applications</li>
        </ul>
        <p>Cons:</p>
        <ul>
          <li>Steeper learning curve for beginners</li>
          <li>Requires additional libraries for state management in complex apps</li>
        </ul>
        
        <h2>Vue</h2>
        <p>Vue has gained significant popularity for its gentle learning curve and flexible architecture. Vue 4 has brought performance improvements and better TypeScript integration.</p>
        <p>Pros:</p>
        <ul>
          <li>Easy to learn and integrate into existing projects</li>
          <li>Comprehensive documentation</li>
          <li>Built-in state management and routing solutions</li>
        </ul>
        <p>Cons:</p>
        <ul>
          <li>Smaller ecosystem compared to React</li>
          <li>Fewer job opportunities in some markets</li>
        </ul>
        
        <h2>Svelte</h2>
        <p>Svelte has revolutionized frontend development with its compile-time approach. Svelte 5 has introduced even more optimizations and developer experience improvements.</p>
        <p>Pros:</p>
        <ul>
          <li>Minimal boilerplate code</li>
          <li>Excellent performance with smaller bundle sizes</li>
          <li>No virtual DOM overhead</li>
        </ul>
        <p>Cons:</p>
        <ul>
          <li>Smaller ecosystem and community</li>
          <li>Fewer advanced patterns for complex applications</li>
        </ul>
        
        <h2>Which One Should You Choose?</h2>
        <p>The best framework depends on your specific needs:</p>
        <ul>
          <li><strong>Choose React</strong> if you're building a large-scale application or need access to a vast ecosystem of libraries.</li>
          <li><strong>Choose Vue</strong> if you want a gentle learning curve or need to integrate with existing projects.</li>
          <li><strong>Choose Svelte</strong> if performance is critical or you want to write less code.</li>
        </ul>
        
        <p>Remember that the best tool is the one that solves your specific problems and fits your team's expertise.</p>
      `,
      tags: ["react", "vue", "svelte", "frameworks"],
    },
    "responsive-design": {
      title: "The Art of Responsive Design",
      date: "February 28, 2025",
      author: "Nirav",
      content: `
        <p>Responsive design has evolved from a nice-to-have to an absolute necessity. With users accessing websites from an ever-growing variety of devices, creating interfaces that adapt seamlessly is crucial for success.</p>
        
        <h2>Core Principles of Responsive Design</h2>
        <p>At its heart, responsive design is built on three fundamental principles:</p>
        <ul>
          <li><strong>Fluid Grids:</strong> Using relative units like percentages instead of fixed pixels</li>
          <li><strong>Flexible Images:</strong> Ensuring images scale appropriately within their containers</li>
          <li><strong>Media Queries:</strong> Applying different styles based on device characteristics</li>
        </ul>
        
        <h2>Modern Approaches</h2>
        <p>In 2025, responsive design has evolved beyond these basics:</p>
        
        <h3>Container Queries</h3>
        <p>Unlike media queries that look at the viewport size, container queries allow components to respond to their parent container's size. This enables truly modular responsive components that work anywhere.</p>
        
        <h3>Fluid Typography</h3>
        <p>Using CSS clamp() and viewport units to create typography that scales smoothly between minimum and maximum sizes without breakpoints.</p>
        
        <h3>Responsive Spacing</h3>
        <p>Applying the same fluid principles to margins and padding ensures that spacing scales proportionally across different screen sizes.</p>
        
        <h2>Testing Responsive Designs</h2>
        <p>Thorough testing is essential for responsive websites:</p>
        <ul>
          <li>Use browser developer tools to simulate different devices</li>
          <li>Test on actual devices when possible</li>
          <li>Consider automated testing tools that check layouts across multiple viewports</li>
        </ul>
        
        <h2>Common Pitfalls to Avoid</h2>
        <ul>
          <li>Hiding content on mobile devices instead of adapting it</li>
          <li>Not optimizing images for different screen sizes</li>
          <li>Neglecting touch interactions on mobile devices</li>
          <li>Forgetting to test unusual viewport sizes</li>
        </ul>
        
        <p>Mastering responsive design is an ongoing journey. As new devices and screen sizes emerge, our approaches must evolve. The most successful responsive designs prioritize user experience across all contexts, ensuring that content is accessible and usable regardless of how it's accessed.</p>
      `,
      tags: ["responsive", "design", "css"],
    },
  };

  return posts[slug as keyof typeof posts];
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return (
      <main>
        <Navbar />
        <div className="py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <Link href="/blog" className="text-purple-500 hover:underline">
            Back to blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />

      <article className="py-16 max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="flex items-center text-gray-400 hover:text-purple-500 mb-8 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:translate-x-[-2px] transition-transform" />
          Back to all posts
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center text-gray-400 gap-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>By {post.author}</span>
            </div>
          </div>
        </div>

        <div
          className="prose prose-invert prose-purple max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="border-t border-gray-700 pt-6 mt-12">
          <h3 className="text-lg font-semibold mb-3">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm text-gray-400 border border-gray-700 px-3 py-1"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-12">
          <h3 className="text-lg font-semibold mb-4">Share this post:</h3>
          <div className="flex gap-4">
            <button className="text-gray-400 hover:text-purple-500 flex items-center gap-1">
              <Share2 className="h-4 w-4" /> Twitter
            </button>
            <button className="text-gray-400 hover:text-purple-500 flex items-center gap-1">
              <Share2 className="h-4 w-4" /> LinkedIn
            </button>
            <button className="text-gray-400 hover:text-purple-500 flex items-center gap-1">
              <Share2 className="h-4 w-4" /> Facebook
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}
