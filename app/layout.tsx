import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'SaaS Logistics Platform',
  description: 'Unified logistics platform for freight, courier, warehouse and customs',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <div className="max-w-7xl mx-auto p-6">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

function Nav() {
  return (
    <header className="bg-gradient-to-r from-primary to-accent text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">Logistics SaaS</Link>
        <nav className="space-x-4">
          <Link href="/freight">Freight</Link>
          <Link href="/courier">Courier</Link>
          <Link href="/warehouse">Warehouse</Link>
          <Link href="/customs">Customs</Link>
          <Link href="/rfq">RFQ</Link>
          <Link href="/admin">Admin</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer(){ return (<footer className="mt-12 py-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} SaaS Logistics Platform</footer>); }
