import "./globals.css";
import DarkModeToggle from "@/components/DarkModeToggle";

export const metadata = {
  title: "SaaS Platform",
  description: "Tailwind dark mode toggle example",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <body className="min-h-screen">
        <header className="p-4 flex justify-end border-b border-gray-300 dark:border-gray-700">
          <DarkModeToggle />
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
