'use client';
import Link from 'next/link';
export default function Page(){ return (
  <main>
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-semibold mb-2">Chat</h1>
      <p className="text-gray-600 mb-4">Chat module placeholder.</p>
      <div className="space-x-2"><Link href="/">Home</Link></div>
    </div>
  </main>
)}
