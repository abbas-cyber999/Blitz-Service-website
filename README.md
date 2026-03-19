# DeutschHero

DeutschHero is being rebuilt as a serious German learning platform with a modern full-stack architecture.

## Current status

Phase 1 establishes the production foundation:

- Next.js full-stack app
- Prisma schema for users, lessons, content blocks, placement, progress, and imports
- PostgreSQL integration scaffolding
- Auth.js credentials foundation
- safe staging area for legacy lesson JSON

## Stack

- Next.js
- TypeScript
- PostgreSQL
- Prisma
- Auth.js
- Tailwind CSS
- Zod

## Environment

Copy `.env.example` to `.env` and set:

- `DATABASE_URL`
- `AUTH_SECRET`
- `NEXTAUTH_URL`
- `SEED_ADMIN_EMAIL`
- `SEED_ADMIN_PASSWORD`

## Useful commands

```bash
npm install
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

## Legacy content

The original static-site content is staged under `content-import/legacy-data` so it can be validated and imported in later phases without rewriting lesson material by hand.
