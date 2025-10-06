'use client';
import Link from 'next/link';
export default function Admin(){ return (<main><div className="bg-white p-6 rounded shadow"><h1 className="text-2xl font-semibold">Admin Console</h1><p className="text-gray-600">Manage tenants, users and bookings</p><div className="mt-4"><Link href='/'>Back</Link></div></div></main>); }
