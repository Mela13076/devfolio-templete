import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProviderWrapper from "@/context/ThemeProviderWrapper"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Lines from "@/components/lines";
import ScrollToTop from "@/components/ScrollToTop";
import siteConfig from "@/config/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.siteName} | ${siteConfig.metadataTitle}`,
  description: siteConfig.siteDescription
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`min-h-screen flex flex-col bg-white transition-colors dark:bg-gray-900 dark:text-white ${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProviderWrapper>
          <Lines />
          <Navbar />
          <main className="flex-1 pt-24">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
