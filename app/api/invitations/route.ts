import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { randomBytes } from 'crypto';

export async function GET() {
  const invites = await prisma.invitation.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json(invites);
}

export async function POST(request) {
  const body = await request.json();
  const { email, tenantId, role = 'USER', ttlHours = 72 } = body;
  if (!email || !tenantId) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  const token = randomBytes(20).toString('hex');
  const expiresAt = new Date(Date.now() + ttlHours * 3600 * 1000);
  const invite = await prisma.invitation.create({
    data: { email, tenantId, role, token, expiresAt, accepted: false },
  });
  const inviteUrl = `${process.env.NEXTAUTH_URL}/auth/invite?token=${token}`;
  return NextResponse.json({ invite, inviteUrl });
}

export async function DELETE(request) {
  const { token } = await request.json();
  if (!token) return NextResponse.json({ error: 'Missing token' }, { status: 400 });
  await prisma.invitation.deleteMany({ where: { token } });
  return NextResponse.json({ ok: true });
}
