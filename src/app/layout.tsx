import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProviderWrapper from "@/context/ThemeProviderWrapper"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Lines from "@/components/lines";
import ScrollToTop from "@/components/ScrollToTop";
import siteConfig from "@/config/siteConfig";
import { themes, ThemeName  } from "@/config/themePresets";

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
  description: siteConfig.siteDescription,
  icons:{
    icon: siteConfig.tabIcon
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const theme = themes[siteConfig.siteColorTheme as ThemeName] || themes.blue;

  return (
    <html lang="en">
    <body 
      style={
          {
            "--color-primary": theme.primary,
            "--color-secondary": theme.secondary,
            "--color-dark": theme.dark,
            "--color-light": theme.light,
            "--color-text": theme.text,
            "--color-bg": theme.bg,
            "--color-stroke": theme.stroke,
            "--color-strokedark": theme.strokeDark,
          } as React.CSSProperties
        }
      className={`min-h-screen flex flex-col bg-bg transition-colors dark:bg-[#1c1c1c] dark:text-white ${geistSans.variable} ${geistMono.variable}`}>
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
