'use client';
export default function Login() {
  return (
    <main className='max-w-md mx-auto p-6 bg-white rounded shadow'>
      <h2 className='text-2xl font-bold mb-4'>Sign in</h2>
      <p className='mb-4'>Use SSO or email to sign in (invite-only)</p>
      <a href='/api/auth/signin' className='px-4 py-2 bg-blue-600 text-white rounded'>Sign in</a>
    </main>
  );
}
