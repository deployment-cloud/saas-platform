'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function InviteAccept() {
  const params = useSearchParams();
  const token = params.get('token');
  const [invite, setInvite] = useState(null);

  useEffect(()=>{
    if (!token) return;
    fetch(`/api/invitations/verify?token=${token}`).then(r=>r.json()).then(setInvite).catch(()=>setInvite(null));
  },[token]);

  if (!token) return <div>Missing token</div>;
  if (!invite) return <div>Loading or invalid invite</div>;

  return (
    <main className='max-w-md mx-auto p-6 bg-white rounded shadow'>
      <h2 className='text-xl font-bold mb-2'>You're invited</h2>
      <p className='mb-4'>Invite for: <strong>{invite.email}</strong></p>
      <a href='/api/auth/signin' className='px-4 py-2 bg-blue-600 text-white rounded'>Sign in to accept</a>
    </main>
  );
}
