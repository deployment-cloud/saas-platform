import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getTenantIdFromReq } from '@/lib/tenant';

export async function POST(req: Request, { params }: { params: { id: string } }) {
  try {
    const tenantId = await getTenantIdFromReq(req);
    const { driverId, vehicleId } = await req.json();
    await prisma.shipment.updateMany({
      where: { id: params.id, tenantId },
      data: { assignedDriverId: driverId, vehicleId, status: 'ASSIGNED' }
    });
    await prisma.trackingLog.create({ data: { shipmentId: params.id, status: 'ASSIGNED', location: 'Warehouse' } });
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 400 });
  }
}
