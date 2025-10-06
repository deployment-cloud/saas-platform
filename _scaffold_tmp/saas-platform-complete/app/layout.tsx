// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import { ThemeToggle } from '../components/ThemeToggle'


export const metadata = {
  title: 'LogiSaaS',
  description: 'Logistics SaaS platform',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl font-semibold">LogiSaaS</h1>
          <ThemeToggle />
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  )
}
