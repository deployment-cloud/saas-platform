'use client';
import Link from 'next/link';
export default function Page(){ return (
  <main>
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-semibold mb-2">Customs</h1>
      <p className="text-gray-600 mb-4">Customs brokerage requests and tracking.</p>
      <div className="space-x-2"><Link href="/">Home</Link></div>
    </div>
  </main>
)}
