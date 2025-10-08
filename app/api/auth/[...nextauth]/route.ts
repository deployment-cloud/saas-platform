import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: { email: { label: 'Email', type: 'text' }, password: { label: 'Password', type: 'password' } },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({ where: { email: credentials?.email } });
        if (!user) throw new Error('No user');
        const ok = await bcrypt.compare(credentials!.password, user.password);
        if (!ok) throw new Error('Invalid');
        return { id: user.id, email: user.email, name: user.name, role: user.role, tenantId: user.tenantId };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) token.role = user.role, token.tenantId = user.tenantId;
      return token;
    },
    async session({ session, token }: any) {
      session.user = session.user || {};
      session.user.role = token.role;
      session.user.tenantId = token.tenantId;
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };
