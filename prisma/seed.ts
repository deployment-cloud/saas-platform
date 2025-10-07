import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding initial data...");

  const tenant = await prisma.tenant.upsert({
    where: { name: "Demo Logistics" },
    update: {},
    create: {
      name: "Demo Logistics",
      domain: "demo-logistics",
    },
  });

  const drivers = await prisma.driver.createMany({
    data: [
      { name: "Ali Khan", phone: "03001234567", tenantId: tenant.id },
      { name: "Sara Ahmed", phone: "03011234567", tenantId: tenant.id },
      { name: "Bilal Malik", phone: "03021234567", tenantId: tenant.id },
    ],
  });

  const customers = await prisma.customer.createMany({
    data: [
      { name: "Pak Electronics", email: "info@pakel.com", tenantId: tenant.id },
      { name: "Swift Mart", email: "orders@swiftmart.com", tenantId: tenant.id },
    ],
  });

  const createdDrivers = await prisma.driver.findMany();
  const createdCustomers = await prisma.customer.findMany();

  for (let i = 0; i < 5; i++) {
    await prisma.shipment.create({
      data: {
        reference: `SHIP-${1000 + i}`,
        origin: "Karachi",
        destination: i % 2 === 0 ? "Lahore" : "Islamabad",
        status: "IN_TRANSIT",
        currentLocation: "Warehouse",
        customerId: createdCustomers[i % 2].id,
        driverId: createdDrivers[i % 3].id,
        tenantId: tenant.id,
      },
    });
  }

  console.log("✅ Seeding complete!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
