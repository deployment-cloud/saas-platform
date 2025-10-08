import { prisma } from '@/lib/prisma';
export default async function TenantsPage() {
  const tenants = await prisma.tenant.findMany();
  return (
    <div style={{ padding: 10 }}>
      <h2>Tenants</h2>
      {tenants.map(t => (
  <div key={t.id}>
    <strong>{t.name}</strong>
  </div>
))}

    </div>
  );
}
