import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding data...");
  await prisma.tenant.create({
    data: {
      name: "Demo Tenant",
      slug: "demo-tenant",
      users: {
        create: {
          email: "admin@demo.com",
          name: "Admin",
          role: "admin"
        }
      }
    }
  });
  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
