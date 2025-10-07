export default function AdminLayout({ children }) {
  return (
    <div className='min-h-screen p-4 bg-gray-50'>
      <header className='text-xl font-bold mb-4'>Admin Panel</header>
      <main>{children}</main>
    </div>
  );
}
