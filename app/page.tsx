'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [search, setSearch] = useState('');

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">SaaS Logistics Platform</h1>
          <nav className="space-x-6">
            <Link href="/auth/login" className="hover:underline">Login</Link>
            <Link href="/auth/register" className="hover:underline">Sign Up</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">End-to-End Logistics Management</h2>
        <p className="text-gray-600 mb-8">
          Manage freight, courier, warehouse, and customs in one unified SaaS platform.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard" className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700">Launch Dashboard</Link>
          <Link href="/rfq" className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-300">Request a Quote</Link>
        </div>
      </section>

      {/* Search + Quick RFQ */}
      <section className="max-w-5xl mx-auto py-8 px-6 bg-white shadow rounded-md mt-10">
        <h3 className="text-xl font-semibold mb-4">Track or Get Instant Rates</h3>
        <form className="flex space-x-4">
          <input
            type="text"
            placeholder="Enter tracking number or shipment ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-gray-300 p-3 rounded-md"
          />
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            Search
          </button>
        </form>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <FeatureCard
          title="Freight Management"
          desc="Book air, sea, or road freight with automated carrier integrations."
          link="/freight"
        />
        <FeatureCard
          title="Courier Shipping"
          desc="Create express courier shipments with instant rate comparison."
          link="/courier"
        />
        <FeatureCard
          title="Warehouse Booking"
          desc="Reserve warehouse space and manage storage availability."
          link="/warehouse"
        />
        <FeatureCard
          title="Customs Brokerage"
          desc="Submit clearance requests and track customs status."
          link="/customs"
        />
        <FeatureCard
          title="Tracking & Notifications"
          desc="Get live tracking updates and multi-channel alerts."
          link="/tracking"
        />
        <FeatureCard
          title="Admin & Analytics"
          desc="Manage tenants, invoices, users, and view system-wide metrics."
          link="/admin"
        />
      </section>

      {/* Chat + RFQ Integration */}
      <section className="bg-gray-100 py-12 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Have a Question?</h3>
          <p className="text-gray-600 mb-6">Chat live with support or send us a custom RFQ.</p>
          <div className="flex justify-center space-x-4">
            <Link href="/chat" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              Open Chat
            </Link>
            <Link href="/rfq" className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-300">
              Submit RFQ
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm">
          <p>© {new Date().getFullYear()} SaaS Logistics Platform. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="underline">Privacy Policy</Link> · <Link href="/terms" className="underline">Terms of Service</Link>
          </p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ title, desc, link }: { title: string; desc: string; link: string }) {
  return (
    <Link href={link} className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 mb-3">{desc}</p>
      <span className="text-blue-600 font-semibold">Explore →</span>
    </Link>
  );
}
