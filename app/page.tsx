import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground grid place-items-center">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-[40px] sm:text-[60px] md:text-[80px] font-bold tracking-[0.002em] leading-[0.90] mb-6 text-balance reveal-up">
          hi, i'm <span className="text-purple-500">nirav</span>
        </h1>

        <div className="text-[20px] sm:text-[22px] md:text-[24px] tracking-[0.009em] mb-12 leading-relaxed space-y-1">
          <div className="opacity-90 reveal-up reveal-delay-1">
            fullstack <span className="text-purple-500">developer</span> and{" "}
            <span className="text-purple-500">computer science junior</span>
          </div>
          <div className="opacity-80 reveal-up reveal-delay-2">
            paving my way through fafo
          </div>
          <div className="opacity-80 italic reveal-up reveal-delay-3">
            i like cats
          </div>
        </div>

        <div className="mt-20 space-y-4 text-[18px] sm:text-[20px] tracking-[-0.005em] text-muted-foreground">
          <p className="reveal-up reveal-delay-3">
            <Link
              href="/projects"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              <span className="bg-purple-500/10 text-purple-300 px-1 rounded">
                projects
              </span>
            </Link>
            <span className="mx-2">—</span>
            things i've built and shipped so far{" "}
          </p>
          <p className="reveal-up reveal-delay-4">
            <Link
              href="/blogs"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              <span className="bg-purple-500/10 text-purple-300 px-1 rounded">
                blogs
              </span>
            </Link>
            <span className="mx-2">—</span>
            some writeups to share what my learnings
          </p>
          <p className="reveal-up reveal-delay-5">
            <Link
              href="/about"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              <span className="bg-purple-500/10 text-purple-300 px-1 rounded">
                about
              </span>
            </Link>
            <span className="mx-2">—</span>a bit more context and where i’m
            headed
          </p>
          <p className="reveal-up reveal-delay-6">
            <Link
              href="/resume.pdf"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              <span className="bg-purple-500/10 text-purple-300 px-1 rounded">
                resume
              </span>
            </Link>
            <span className="mx-2">—</span>
            one‑page pdf with the highlights
          </p>
          <p className="reveal-up reveal-delay-7">
            <Link
              href="/stuff"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              <span className="bg-purple-500/10 text-purple-300 px-1 rounded">
                misc
              </span>
            </Link>
            <span className="mx-2">—</span>
            some extra experiments and stuff
          </p>

          <p className="pt-16 text-[18px] sm:text-[20px] tracking-[0.09em] reveal-up reveal-delay-8">
            <Link
              href="https://github.com/ni3rav"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 underline decoration-dashed underline-offset-4 decoration-purple-500/60 hover:decoration-purple-400 transition-colors"
            >
              github <ExternalLink className="h-3 w-3 opacity-70" />
            </Link>
            <span className="mx-2">·</span>
            <Link
              href="https://x.com/ni3rav"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 underline decoration-dashed underline-offset-4 decoration-purple-500/60 hover:decoration-purple-400 transition-colors"
            >
              x (twitter) <ExternalLink className="h-3 w-3 opacity-70" />
            </Link>

            <span className="mx-2">·</span>
            <Link
              href="mailto:niravv1405@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 underline decoration-dashed underline-offset-4 decoration-purple-500/60 hover:decoration-purple-400 transition-colors"
            >
              email <ExternalLink className="h-3 w-3 opacity-70" />
            </Link>
            <span className="mx-2">·</span>
            <Link
              href="https://linkedin.com/in/nirav-mht"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 underline decoration-dashed underline-offset-4 decoration-purple-500/60 hover:decoration-purple-400 transition-colors"
            >
              linkedin <ExternalLink className="h-3 w-3 opacity-70" />
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
