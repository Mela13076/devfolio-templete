// src/app/ThemeProviderWrapper.tsx
"use client";
import { ThemeProvider } from "./ThemeContext";

export default function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
