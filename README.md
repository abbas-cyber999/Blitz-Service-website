# Blitz Service GmbH Website

Next.js website for Blitz Service GmbH with a clear focus on cleaning services, an optional PostgreSQL-backed contact form, and a simple protected admin area.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- Zod
- Nodemailer

## Environment variables

Only variables relevant to Blitz Service remain:

- `DATABASE_URL`
- `EMAIL_SERVER`
- `EMAIL_FROM`
- `COMPANY_NOTIFICATION_EMAIL`
- `ADMIN_PASSWORD`
- `ADMIN_SESSION_SECRET`

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run typecheck`
- `npm run prisma:generate`
- `npm run prisma:migrate`
- `npm run prisma:migrate:deploy`

## Deployment

The public website builds without unrelated learning-platform code.  
Set the required environment variables in Vercel before enabling persisted contact storage or admin login.

## Notes

- Legal pages are still placeholders and must be completed later.
- Business content can still be refined later.
- Homepage media can be replaced later in `public/images/homepage/`.
