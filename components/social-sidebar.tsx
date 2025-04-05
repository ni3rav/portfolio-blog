import Link from "next/link"
import { Github, MessageSquare, Mail } from "lucide-react"

export default function SocialSidebar() {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 p-4 z-10">
      <Link
        href="https://discord.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-purple-500 transition-colors"
        aria-label="Discord"
      >
        <MessageSquare className="h-5 w-5" />
        <span className="sr-only">Discord</span>
      </Link>
      <Link
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-purple-500 transition-colors"
        aria-label="GitHub"
      >
        <Github className="h-5 w-5" />
        <span className="sr-only">GitHub</span>
      </Link>
      <Link
        href="mailto:contact@example.com"
        className="text-gray-400 hover:text-purple-500 transition-colors"
        aria-label="Email"
      >
        <Mail className="h-5 w-5" />
        <span className="sr-only">Email</span>
      </Link>
    </div>
  )
}

