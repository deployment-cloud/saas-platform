import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// ✅ Assign driver and vehicle to a shipment
export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const { driverId, vehicleId, tenantId } = body;

    // Basic input validation
    if (!driverId || !vehicleId || !tenantId) {
      return NextResponse.json(
        { error: 'Missing required fields: driverId, vehicleId, tenantId' },
        { status: 400 }
      );
    }

    // ✅ Update the shipment
    const shipment = await prisma.shipment.update({
      where: { id: params.id },
      data: {
        assignedDriverId: driverId,
        vehicleId,
        status: 'ASSIGNED',
      },
    });

    // ✅ Log the tracking event
    await prisma.trackingEvent.create({
      data: {
        shipmentId: shipment.id,
        status: 'ASSIGNED',
        location: 'Warehouse',
        remarks: `Driver and vehicle assigned`,
      },
    });

    return NextResponse.json({ ok: true, shipment });
  } catch (error: any) {
    console.error('Error assigning driver/vehicle:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
