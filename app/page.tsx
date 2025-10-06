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

      <section className="grid md:grid-cols-3 gap-6 mt-6">
        <Card title="Freight" desc="Air, Sea, Road - LCL/FCL" href="/freight" />
        <Card title="Courier" desc="Express door-to-door" href="/courier" />
        <Card title="Warehouse" desc="Book storage & manage inventory" href="/warehouse" />
      </section>
    </main>
  );
}

function Card({title,desc,href}:{title:string;desc:string;href:string}){
  return (
    <Link href={href} className="block bg-white p-6 rounded shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </Link>
  );
}
