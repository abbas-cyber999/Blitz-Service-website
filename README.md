# Lingoria

Phase 1 foundation for a premium global language-learning platform, starting with Arabic speakers learning English.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase
- PostgreSQL

## Phase 1 scope

- Premium landing page
- Login and signup flows
- Onboarding skeleton
- Dashboard skeleton
- Reusable UI and layout primitives
- Light and dark theme foundation
- RTL and LTR support from the beginning
- Supabase auth integration structure

## Environment

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `DATABASE_URL`
- `DIRECT_URL` (optional reference only, not used by default Prisma sync)

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run typecheck`
- `npm run prisma:generate`
- `npm run prisma:sync`
- `npm run prisma:sync:reset`
- `npm run prisma:setup`
- `npm run prisma:seed`

## Prisma workflow

Use the Supabase pooled `DATABASE_URL` for local development.

- `npm run prisma:sync` uses `prisma db push`
- `npm run prisma:setup` syncs the schema and then seeds the initial Lingoria course
- `npm run prisma:migrate` and `npm run prisma:migrate:deploy` intentionally route to the same sync workflow in this environment because direct-host migrations are not reliable from this machine
- The active Prisma datasource reads only `DATABASE_URL`, so local schema sync stays on the Supabase pooler

## Structure highlights

- `src/app/(marketing)` for the landing experience
- `src/app/(auth)` for login and signup
- `src/app/(app)` for product-area shells like onboarding and dashboard
- `src/components/ui` for reusable design-system building blocks
- `src/components/marketing`, `src/components/auth`, `src/components/dashboard` for feature-facing UI
- `src/features/auth` for auth server actions
- `src/lib/supabase` for browser/server client setup
