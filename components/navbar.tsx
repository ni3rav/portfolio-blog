"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-6">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold flex items-center">
          <span className="mr-2">⬛</span> Nirav
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-purple-500 transition-colors">
            <span className="text-purple-500">#</span>home
          </Link>
          <Link
            href="/projects"
            className="hover:text-purple-500 transition-colors"
          >
            <span className="text-purple-500">#</span>projects
          </Link>
          <Link
            href="/blogs"
            className="hover:text-purple-500 transition-colors"
          >
            <span className="text-purple-500">#</span>blogs
          </Link>

          <Link
            href="/about-me"
            className="hover:text-purple-500 transition-colors"
          >
            <span className="text-purple-500">#</span>about-me
          </Link>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-gray-700 pt-4">
          <Link
            href="/"
            className="hover:text-purple-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-purple-500">#</span>home
          </Link>
          <Link
            href="/projects"
            className="hover:text-purple-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-purple-500">#</span>projects
          </Link>

          <Link
            href="/about-me"
            className="hover:text-purple-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-purple-500">#</span>about-me
          </Link>
        </div>
      )}
    </nav>
  );
}
