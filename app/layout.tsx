// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata = {
  title: "LogiSaaS",
  description: "Logistics SaaS platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Inline script ensures theme loads BEFORE React hydration */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (() => {
              try {
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = stored || (prefersDark ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
              } catch (_) {}
            })();
          `,
        }}
      />
      <body className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <header className="flex justify-between items-center p-4 border-b border-border">
          <h1 className="text-xl font-semibold">LogiSaaS</h1>
          <ThemeToggle />
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
