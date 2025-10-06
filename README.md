SaaS Logistics - Complete package (invite-only SSO + multi-tenant)

Generated: 2025-10-06T13:25:40.698779Z

Quick start:

1. copy .env.example to .env and fill DATABASE_URL & NEXTAUTH_SECRET & provider keys
2. npm ci
3. npx prisma generate
4. npx prisma migrate dev --name init
5. npx prisma db seed
6. npm run build
7. npm start

Notes:
- Invite-only SSO uses NextAuth (Google + Email). Invitations API issues tokens for tenant invites.
- Middleware protects /admin and tenant APIs.
- Adjust mail provider in /api/invitations to send emails (nodemailer or an external service).
