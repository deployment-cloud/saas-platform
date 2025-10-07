import AdminLayout from '@/components/admin/AdminLayout';

export default function Home() {
  return (
    <AdminLayout>
      <div className='min-h-screen flex items-center justify-center'>
        <h1 className='text-4xl font-bold'>LogiSaaS — Logistics Platform</h1>
      </div>
    </AdminLayout>
  );
}
