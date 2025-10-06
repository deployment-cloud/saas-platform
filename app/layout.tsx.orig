import '../styles/globals.css';
import Link from 'next/link';
export const metadata = { title: 'SaaS Logistics Platform' };
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <header className='bg-gradient-to-r from-primary to-accent text-white p-4'>
          <div className='max-w-7xl mx-auto flex justify-between'>
            <Link href='/' className='font-bold'>SaaS Logistics</Link>
            <nav className='space-x-4'>
              <Link href='/dashboard'>Dashboard</Link>
              <Link href='/freight'>Freight</Link>
              <Link href='/courier'>Courier</Link>
              <Link href='/admin'>Admin</Link>
            </nav>
          </div>
        </header>
        <main className='max-w-7xl mx-auto p-6'>{children}</main>
      </body>
    </html>
  );
}
