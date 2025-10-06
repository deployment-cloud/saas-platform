import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request) {
  const url = new URL(request.url);
  const token = url.searchParams.get('token');
  if (!token) return NextResponse.json({ error: 'Missing token' }, { status: 400 });
  const invite = await prisma.invitation.findFirst({ where: { token } });
  if (!invite) return NextResponse.json({ error: 'Invalid token' }, { status: 404 });
  return NextResponse.json({ email: invite.email, tenantId: invite.tenantId, role: invite.role, expiresAt: invite.expiresAt });
}
