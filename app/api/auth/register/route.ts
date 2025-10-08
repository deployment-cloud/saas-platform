import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const { email, password, name } = await req.json();
  if (!email || !password) return NextResponse.json({ error: 'Missing' }, { status: 400 });
  const hashed = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({ data: { email, password: hashed, name } });
  return NextResponse.json({ id: user.id, email: user.email });
}
