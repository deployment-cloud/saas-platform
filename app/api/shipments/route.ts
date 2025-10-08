import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getTenantIdFromReq } from '@/lib/tenant';

export async function GET(req: Request) {
  try {
    const tenantId = await getTenantIdFromReq(req);
    const shipments = await prisma.shipment.findMany({ where: { tenantId } });
    return NextResponse.json(shipments);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 400 });
  }
}

export async function POST(req: Request) {
  try {
    const tenantId = await getTenantIdFromReq(req);
    const data = await req.json();

    const s = await prisma.shipment.create({
      data: {
        tenantId,
        origin: data.origin || 'Unknown',
        destination: data.destination || 'Unknown',
        weight: data.weight || 0,
        cost: data.cost || 0,
      },
    });

    return NextResponse.json(s, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 400 });
  }
}
