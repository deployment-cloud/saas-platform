'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold mb-2">Welcome to your Logistics Platform</h1>
        <p className="text-gray-600 mb-4">Manage freight, courier, warehouse, customs and RFQs from one place.</p>
        <div className="flex gap-4">
          <Link href="/dashboard" className="px-4 py-2 bg-primary text-white rounded">Launch Dashboard</Link>
          <Link href="/rfq" className="px-4 py-2 border rounded">Request Quote</Link>
        </div>
      </section>
    </main>
  );
}
