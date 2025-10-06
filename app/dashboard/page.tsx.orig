'use client';
import { useEffect, useState } from 'react';
export default function Dashboard() {
  const [stats, setStats] = useState(null);
  useEffect(()=>{ fetch('/api/tenant/stats').then(r=>r.json()).then(setStats).catch(()=>setStats(null)) },[]);
  if (!stats) return <div className='p-6'>Loading...</div>;
  return (
    <main>
      <h1 className='text-2xl font-bold mb-4'>Tenant Dashboard</h1>
      <div className='grid grid-cols-3 gap-4'>
        <div className='bg-white p-4 rounded shadow'>Freight: <strong>{stats.freightCount}</strong></div>
        <div className='bg-white p-4 rounded shadow'>Courier: <strong>{stats.courierCount}</strong></div>
        <div className='bg-white p-4 rounded shadow'>Warehouse: <strong>{stats.warehouseBookings}</strong></div>
      </div>
    </main>
  );
}
