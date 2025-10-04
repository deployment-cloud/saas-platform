# SaaS Logistics Platform (GitHub-ready, PostgreSQL)

This is a GitHub-ready, DigitalOcean-ready scaffold for a Next.js (15.x) multi-tenant SaaS logistics platform.
- Database: PostgreSQL (see docker-compose.yml)
- Run locally with Docker Compose or deploy using the included Dockerfile.

Quick start:
```bash
cp .env.example .env
# if using docker-compose:
docker compose up -d --build
# generate prisma client and migrate
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed
npm run build
npm start
```

Push to GitHub and connect to DigitalOcean App Platform (Dockerfile present).
"# saas-platform" 
