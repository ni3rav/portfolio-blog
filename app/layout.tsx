import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import FooterWrapper from "@/components/footer-wrapper";

const geistMono = Geist_Mono({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "😺",
  description: "my part of the internet (ugh so cliched)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistMono.className} bg-[#1e2126] text-white min-h-screen overflow-x-hidden`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
        <FooterWrapper />
      </body>
    </html>
  );
}
