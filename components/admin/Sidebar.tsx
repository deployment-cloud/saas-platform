'use client';
import Link from 'next/link';
export default function Sidebar(){ return (<aside className="w-60 bg-white border-r p-4"><div className="font-bold mb-4">Platform Admin</div><nav className="space-y-2"><Link href='/admin'>Dashboard</Link><br/><Link href='/admin/tenants'>Tenants</Link><br/><Link href='/admin/users'>Users</Link></nav></aside>); }
