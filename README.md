# SaaS Platform - Final (Postgres, Node 20, Prisma fixes)

This package is ready to push to GitHub and deploy on DigitalOcean App Platform.

Quick start:

```bash
cp .env.example .env
npm install
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed
npm run build
npm start
```
