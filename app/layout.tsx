import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import SocialSidebar from "@/components/social-sidebar";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Nirav",
  description: "Yup this is the part I'd call mine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceMono.variable} font-mono bg-[#1e2126] text-white min-h-screen`}
      >
        <SocialSidebar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </body>
    </html>
  );
}

import "./globals.css";
