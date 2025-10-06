import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { prisma } from '@/lib/prisma';

export async function GET(request) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const tenantId = token.tenantId;
  if (!tenantId && token.role !== 'ADMIN') return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const freightCount = await prisma.freightBooking.count();
  const courierCount = await prisma.courierBooking.count();
  const warehouseBookings = await prisma.warehouseBooking.count();
  return NextResponse.json({ freightCount, courierCount, warehouseBookings });
}
