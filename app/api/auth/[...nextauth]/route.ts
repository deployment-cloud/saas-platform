import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/email';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '@/lib/prisma';

const options = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    EmailProvider({
      server: process.env.SMTP_URL,
      from: process.env.SMTP_FROM,
    }),
  ],
  session: { strategy: 'jwt' as const },
  callbacks: {
    async signIn({ user }) {
      const invited = await prisma.invitation.findFirst({
        where: { email: user.email, accepted: false, expiresAt: { gt: new Date() } },
      });
      const existing = await prisma.user.findUnique({ where: { email: user.email } });
      if (existing) return true;
      if (!invited) return false;
      await prisma.user.create({
        data: { email: user.email, name: user.name || undefined, role: invited.role, tenantId: invited.tenantId },
      });
      await prisma.invitation.update({ where: { id: invited.id }, data: { accepted: true } });
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role || 'USER';
        token.tenantId = user.tenantId || null;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      session.user.tenantId = token.tenantId;
      return session;
    },
  },
  pages: { signIn: '/auth/login' },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(options);
export { handler as GET, handler as POST };
