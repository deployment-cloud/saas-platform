import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  const url = req.nextUrl.clone();
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) { url.pathname = '/auth/login'; return NextResponse.redirect(url); }
    if (token.role !== 'ADMIN') return new NextResponse('Unauthorized', { status: 403 });
  }

  if (pathname.startsWith('/api/tenant')) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) return new NextResponse('Unauthorized', { status: 401 });
  }

  return NextResponse.next();
}

export const config = { matcher: ['/admin/:path*', '/api/admin/:path*', '/api/tenant/:path*'] };
