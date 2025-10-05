'use client';
import Link from 'next/link';

export default function AnalyticsHome() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Analytics Header */}
      <header className="bg-blue-700 py-6 text-white shadow">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
          <nav className="space-x-6">
            <Link href="/admin" className="hover:underline">Admin</Link>
            <Link href="/" className="hover:underline">Home</Link>
          </nav>
        </div>
      </header>

      {/* Main BI/Analytics Section */}
      <section className="max-w-6xl mx-auto mt-12 px-6 py-8">
        <h2 className="text-3xl font-bold mb-4">Business Intelligence Overview</h2>
        <p className="mb-8 text-gray-700">
          Visualize key logistics KPIs, live shipment status, and tenant system metrics. Access custom analytics and explore platform utilities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BIUCard
            title="Freight Analytics"
            desc="Revenue, carrier load distribution, and route insights."
            link="/freight/analytics"
          />
          <BIUCard
            title="Courier Performance"
            desc="Delivery speed, cost comparison, and trending routes."
            link="/courier/analytics"
          />
          <BIUCard
            title="Warehouse Metrics"
            desc="Capacity, inventory turnover, and booking history."
            link="/warehouse/analytics"
          />
          <BIUCard
            title="Customs BI"
            desc="Clearance speed, import/export trends, and rate analytics."
            link="/customs/analytics"
          />
          <BIUCard
            title="RFQ Insights"
            desc="Quotation requests, conversion rates, provider stats."
            link="/rfq/analytics"
          />
          <BIUCard
            title="Live Tracking"
            desc="Real-time shipment status and location heatmaps."
            link="/tracking"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 mt-16 py-6 text-white text-center">
        <div>© {new Date().getFullYear()} SaaS Logistics Platform Analytics. All rights reserved.</div>
      </footer>
    </main>
  );
}

type BIUProps = {
  title: string;
  desc: string;
  link: string;
};

function BIUCard({ title, desc, link }: BIUProps) {
  return (
    <Link href={link} className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-xl border border-blue-100 transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-3">{desc}</p>
      <span className="text-blue-700 font-semibold">Open Analytics →</span>
    </Link>
  );
}
