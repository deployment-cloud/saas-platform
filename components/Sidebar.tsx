'use client';
import Link from 'next/link';
export default function Sidebar(){return (<aside className="w-64 bg-white border-r hidden md:flex flex-col p-4"><h2 className="text-xl font-semibold mb-6">🚚 LogiSaaS</h2><nav className="space-y-2"><Link href='/dashboard' className='block px-3 py-2 rounded hover:bg-gray-100'>Dashboard</Link><Link href='/freight' className='block px-3 py-2 rounded hover:bg-gray-100'>Freight</Link><Link href='/warehouse' className='block px-3 py-2 rounded hover:bg-gray-100'>Warehouse</Link></nav></aside>) }
