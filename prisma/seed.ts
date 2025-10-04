import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main(){
  const t = await prisma.tenant.upsert({ where:{ slug:'demo-tenant' }, update:{}, create:{ name:'Demo Tenant', slug:'demo-tenant' } });
  const u = await prisma.user.upsert({ where:{ email:'admin@example.com' }, update:{}, create:{ email:'admin@example.com', name:'Admin', password:'$2a$10$demo', role:'ADMIN', tenantId: t.id } });
  console.log('Seeded demo tenant and admin');
}
main().catch(e=>{ console.error(e); process.exit(1); }).finally(()=>prisma.$disconnect());
