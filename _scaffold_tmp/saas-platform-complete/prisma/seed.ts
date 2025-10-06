import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.plan.upsert({
    where: { stripePriceId: 'price_basic' },
    update: {},
    create: {
      stripePriceId: 'price_basic',
      name: 'Starter',
      price: 29,
      currency: 'usd',
      features: { warehouse: false, realtimeTracking: false, rfq: true }
    }
  });
  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      password: '$2b$10$CwTycUXWue0Thq9StjUM0uJ8x6b0hZEt6j1oY6Zxq2Z2QK6f0w1G6',
      name: 'Admin User'
    }
  });
  console.log('seed complete');
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
