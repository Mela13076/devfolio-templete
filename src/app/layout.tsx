import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProviderWrapper from "@/context/ThemeProviderWrapper"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Lines from "@/components/lines";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amelia Treviño | Full-Stack Developer & Software Engineer Portfolio",
  description:
    "The portfolio of Amelia Treviño — a full-stack developer and computer science graduate passionate about building secure, scalable, and user-focused web applications. Explore projects in Next.js, React, Django, AWS, and more.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`bg-white transition-colors dark:bg-gray-900 dark:text-white ${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProviderWrapper>
          <Lines />
          <Navbar />
          <main className="min-h-screen pt-24">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
