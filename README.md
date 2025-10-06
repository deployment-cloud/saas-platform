# saas-platform (Fixed for DigitalOcean App Platform)

This project was adjusted to be App Platform friendly.

## Changes made
- Updated `package.json` start script to use dynamic PORT: `sh -c 'next start -p ${PORT:-8080}'`
- Ensured `engines.node` is set to `>=18.0.0`
- Added `.env.example` with `DATABASE_URL` placeholder
- Ensured Prisma `schema.prisma` uses `provider = "postgresql"` and `url = env("DATABASE_URL")` (if schema present)
- Added `next.config.js` and `tsconfig.json` (if TypeScript used)

## Redeploy (manual ZIP upload)
1. Download the fixed ZIP from this chat.
2. In DigitalOcean Cloud -> Apps -> Your App -> Components, choose **Edit** and **Upload** the new ZIP (or create a new component).
3. Set environment variables:
   - `DATABASE_URL` — your PostgreSQL connection string.
   - Any other `NEXT_PUBLIC_*` ENV variables you need.
4. Deploy. The App Platform will use the `engines.node` value and run `npm run build` then `npm start`.

## Redeploy (from Git)
1. Commit the fixed `package.json` and other files to your repo.
2. Push to Git and redeploy from DigitalOcean.

## Notes
- The `.env.example` is for reference; do **not** commit real secrets.
- If you use Prisma migrations, run them separately or configure migration step in App Platform build commands.
