export const blogsPrev = [
  {
    id: "web-design-trends",
    title: "Web Design Trends in 2025",
    excerpt:
      "Exploring the latest trends in web design and how they're shaping the digital landscape.",
    date: "April 22, 2025",
    image: "/placeholder.svg?height=200&width=350",
    tags: ["design", "trends", "web"],
  },
  {
    id: "frontend-frameworks",
    title: "Comparing Modern Frontend Frameworks",
    excerpt:
      "React, Vue, Svelte – which one should you choose for your next project?",
    date: "March 15, 2025",
    image: "/placeholder.svg?height=200&width=350",
    tags: ["react", "vue", "svelte", "frameworks"],
  },
  {
    id: "responsive-design",
    title: "The Art of Responsive Design",
    excerpt:
      "Creating websites that look great on any device - techniques and best practices.",
    date: "Feb 28, 2025",
    image: "/placeholder.svg?height=200&width=350",
    tags: ["responsive", "css"],
  },
];

export const blogs = {
  "web-design-trends": {
    id: "web-design-trends",
    title: "Web Design Trends in 2025",
    date: "April 22, 2025",
    image: "/placeholder.svg?height=600&width=800",
    content: `
        <p>In 2025, web design is leaning more into minimalism, glassmorphism, and native dark mode support.</p>
        <p>Designers are focusing on performance, accessibility, and immersive UX. Think: scroll-based animations, subtle 3D, and context-aware UIs.</p>
        <h3>Key Trends:</h3>
        <ul>
          <li>Neumorphism + Glassmorphism hybrid styles</li>
          <li>Microinteractions everywhere</li>
          <li>Component-driven design systems</li>
        </ul>
      `,
    tags: ["design", "trends", "web"],
    author: "Nirav",
  },
  "frontend-frameworks": {
    id: "frontend-frameworks",
    title: "Comparing Modern Frontend Frameworks",
    date: "March 15, 2025",
    image: "/placeholder.svg?height=600&width=800",
    content: `
        <p>React, Vue, and Svelte are three leading frameworks in frontend development. But which one suits your project best?</p>
        <h3>React</h3>
        <p>Popular, powerful, with a huge ecosystem – ideal for complex apps.</p>
        <h3>Vue</h3>
        <p>Beginner-friendly, progressive, and loved for its simplicity and performance.</p>
        <h3>Svelte</h3>
        <p>Compiles to vanilla JS, blazing fast and ultra-lightweight.</p>
      `,
    tags: ["react", "vue", "svelte", "frameworks"],
    author: "Nirav",
  },
};
