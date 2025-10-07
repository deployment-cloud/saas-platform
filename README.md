# LogiSaaS - Scaffolded Platform (Phases 1-6)

This repository is a scaffold implementing core functionality across all 6 phases described earlier:
1. Authentication & Authorization
2. Frontend UI/UX (dashboard layout + pages)
3. SaaS Features (multi-tenancy + Stripe integration scaffolding)
4. Logistics Core (shipments, drivers, vehicles, warehouses, tracking)
5. DevOps & Production (Dockerfile, docker-compose, CI workflow)
6. Marketing & Growth (landing page + marketing assets)

> This is a starting implementation. After pulling the files you must:
> - Install dependencies: `npm ci`
> - Create `.env` from `.env.example` and set secrets
> - Run `npx prisma generate` and `npx prisma migrate dev`
> - Start local stack (Postgres) or use `docker-compose up --build`

## What's included
- Next.js app (App Router) with example pages and API routes
- Prisma schema with tenant, user, plan, shipment, driver, vehicle, warehouse, tracking models
- Stripe webhook handler stub
- Pusher-based tracking endpoint example
- Dockerfile & docker-compose for local testing
- GitHub Actions workflow (CI / migration)
- Seed script for initial plans and admin user

# Fleet Map Update Instructions

1. Copy all folders (app, components, lib, scripts) into your project root.
2. Run: npm install react-leaflet leaflet framer-motion
3. Add "node": ">=18.17.0" to package.json "engines" if not already present.
4. Run Prisma migration to add coordinates:
   npx prisma migrate dev --name add_coordinates_to_shipments
5. Start simulation in one terminal:
   npm run simulate:tracking
6. Start app in another terminal:
   npm run dev
7. Visit http://localhost:3000/dashboard to see live animated trucks.

## Important
This scaffold is intentionally concise to be easy to review and extend. Treat it as the canonical starting point — add production hardening, testing, and complete UI as needed.
