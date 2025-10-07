import { prisma } from '@/lib/prisma';

export default async function DashboardPage() {
  const shipments = await prisma.shipment.count();
  const drivers = await prisma.driver.count();
  const vehicles = await prisma.vehicle.count();

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="p-4 bg-white rounded shadow"><h3>Shipments</h3><p>{shipments}</p></div>
      <div className="p-4 bg-white rounded shadow"><h3>Drivers</h3><p>{drivers}</p></div>
      <div className="p-4 bg-white rounded shadow"><h3>Vehicles</h3><p>{vehicles}</p></div>
    </div>
  );
}
