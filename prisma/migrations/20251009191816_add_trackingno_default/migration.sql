/*
  Warnings:

  - You are about to drop the `Driver` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vehicle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Shipment" DROP CONSTRAINT "Shipment_assignedDriverId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Shipment" DROP CONSTRAINT "Shipment_tenantId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Shipment" DROP CONSTRAINT "Shipment_vehicleId_fkey";

-- DropTable
DROP TABLE "public"."Driver";

-- DropTable
DROP TABLE "public"."Vehicle";

-- AddForeignKey
ALTER TABLE "Shipment" ADD CONSTRAINT "Shipment_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
