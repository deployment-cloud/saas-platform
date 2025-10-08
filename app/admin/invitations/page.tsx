'use client';
import React, { useEffect, useState } from 'react';


export default function AdminInvites() {
  const [email, setEmail] = useState('');
  const [tenant, setTenant] = useState('demo-tenant');
  const [invites, setInvites] = useState([]);

  useEffect(()=>{ fetch('/api/invitations').then(r=>r.json()).then(setInvites); },[]);

 async function createInvite(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
    const res = await fetch('/api/invitations', { method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ email, tenantId: tenant }) });
    const data = await res.json();
    setInvites(prev => [data.invite, ...prev]);
    setEmail('');
  }

  return (
    <main>
      <h1 className='text-2xl font-bold mb-4'>Invitations</h1>
      <form onSubmit={createInvite} className='flex gap-2 mb-4'>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder='email' className='border p-2' />
        <input value={tenant} onChange={e=>setTenant(e.target.value)} placeholder='tenantId' className='border p-2' />
        <button className='px-4 py-2 bg-blue-600 text-white rounded'>Create</button>
      </form>
      <div>
        {invites.map(inv => (
          <div key={inv.id} className='p-3 bg-white rounded shadow mb-2'>
            <div><strong>{inv.email}</strong> — {inv.role}</div>
            <div className='text-sm text-gray-500'>Expires: {new Date(inv.expiresAt).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
