import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import clsx from "clsx";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ni3rav",
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

export default function SocialSidebar() {
  return (
    <TooltipProvider>
      <div
        className={clsx(
          "fixed z-10 p-4 md:p-5",
          "bg-[#1c1c1e]/90 backdrop-blur-md shadow-xl rounded-3xl",
          "flex gap-8 md:gap-6",
          "md:flex-col md:left-0 md:top-1/2 md:-translate-y-1/2",
          "bottom-5 left-1/2 -translate-x-1/2 md:translate-x-0 md:bottom-auto"
        )}
      >
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <Tooltip key={label}>
            <TooltipTrigger asChild>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
                aria-label={label}
              >
                <Icon className="h-6 w-6 md:h-7 md:w-7" />
              </Link>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              className="bg-[#2c2c2e] text-white border-none text-sm"
            >
              {label}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
