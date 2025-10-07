import { NextResponse } from 'next/server';
import Pusher from 'pusher';
import { prisma } from '@/lib/prisma';

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID || '',
  key: process.env.PUSHER_KEY || '',
  secret: process.env.PUSHER_SECRET || '',
  cluster: process.env.PUSHER_CLUSTER || '',
  useTLS: true
});

export async function POST(req: Request) {
  const { shipmentId, latitude, longitude, location, note } = await req.json();
  const log = await prisma.trackingLog.create({
    data: { shipmentId, latitude, longitude, location: location || 'unknown', note, status: 'IN_TRANSIT' }
  });
  try {
    await pusher.trigger(`shipment-${shipmentId}`, 'update', log);
  } catch (e) {
    console.error('pusher error', e);
  }
  return NextResponse.json(log);
}
