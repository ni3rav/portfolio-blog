import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/nirav-mht",
    icon: Linkedin,
  },
  {
    label: "Twitter",
    href: "https://x.com/ni3rav",
    icon: Twitter,
  },
  {
    label: "GitHub",
    href: "https://github.com/ni3rav",
    icon: Github,
  },
  {
    label: "Email",
    href: "mailto:niravv1405@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-700 bg-[#1c1c1e]/50 backdrop-blur-sm w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <TooltipProvider>
            <div className="flex gap-6">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Tooltip key={label}>
                  <TooltipTrigger asChild>
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-500 transition-colors p-2 rounded-full hover:bg-purple-500/10"
                      aria-label={label}
                    >
                      <Icon className="h-6 w-6" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#2c2c2e] text-white border-none text-sm">
                    {label}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p className="mt-1">crafted with 😻 by nirav (duhh)</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
