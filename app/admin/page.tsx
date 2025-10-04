import { prisma } from '@/lib/prisma';
import Link from 'next/link';
export default async function AdminDashboard(){ const tenants = await prisma.tenant.findMany({take:8}); return (<div style={{padding:10}}><h2>Admin Dashboard</h2><p>Tenants: {tenants.length}</p><Link href="/admin/tenants">Manage Tenants</Link></div>); }
