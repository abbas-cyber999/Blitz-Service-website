# Blitz Service GmbH Website

Production-ready Next.js website for a German service company with a clear focus on cleaning services, optional PostgreSQL-backed contact storage, and a simple protected admin area.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- Zod validation
- Nodemailer for optional email notifications
- Vercel-ready deployment

## Project structure

```text
.
|-- prisma/
|   `-- schema.prisma
|-- public/
|   |-- images/
|   `-- logos/
|-- src/
|   |-- app/
|   |-- components/
|   |-- config/
|   |-- data/
|   `-- lib/
|-- .env.example
|-- eslint.config.mjs
|-- next.config.ts
|-- package.json
|-- postcss.config.js
|-- tailwind.config.mjs
`-- tsconfig.json
```

## Installation

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```powershell
Copy-Item .env.example .env
```

3. Update `.env` with your real values.

4. Generate Prisma client:

```bash
npm run prisma:generate
```

5. If you already have a PostgreSQL database, run the first migration:

```bash
npm run prisma:migrate
```

6. Start development:

```bash
npm run dev
```

## Scripts

- `npm run dev`: local development with stable webpack mode
- `npm run build`: Prisma generate + production build
- `npm run start`: start production server
- `npm run lint`: ESLint
- `npm run typecheck`: TypeScript validation
- `npm run prisma:generate`: generate Prisma client
- `npm run prisma:migrate`: run local development migration
- `npm run prisma:migrate:deploy`: run production migrations

## Environment variables

### Required for the public website

None strictly required for the static/public pages to build.

### Required for database-backed contact storage and admin message management

- `DATABASE_URL`

### Required for email forwarding from the contact form

- `EMAIL_SERVER`
- `EMAIL_FROM`
- `COMPANY_NOTIFICATION_EMAIL`

### Required for the admin login

- `ADMIN_PASSWORD`
- `ADMIN_SESSION_SECRET`

## How the contact form behaves

- If `DATABASE_URL` is configured, contact requests are stored in PostgreSQL via Prisma.
- If the mail variables are configured, contact requests are also forwarded by email.
- If neither database nor email is configured, the public site still builds and deploys, but the contact form returns a controlled setup error instead of crashing.

## Database setup

The Prisma schema includes a `ContactMessage` model:

- `id`
- `name`
- `email`
- `phone`
- `subject`
- `service`
- `message`
- `privacyAccepted`
- `createdAt`
- `updatedAt`
- `status`

Supported status values:

- `NEW`
- `IN_PROGRESS`
- `DONE`

## Local development

- Public content is in German.
- Central business placeholders are managed in `src/config/business.ts`.
- Reviews, services, and content blocks are managed in `src/data/site-content.ts`.
- Replace local placeholder visuals in `public/images/`.
- Logo placeholders can be added to `public/logos/`.

## Deployment to Vercel

1. Push the project to a Git provider.
2. Import the repository into Vercel.
3. Set the framework preset to Next.js.
4. Add environment variables in Vercel:
   - `DATABASE_URL` if you want persisted contact messages and admin message management
   - `EMAIL_SERVER`, `EMAIL_FROM`, `COMPANY_NOTIFICATION_EMAIL` if you want contact form email forwarding
   - `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET` if you want the admin login enabled
5. If `DATABASE_URL` is configured, run production migrations:

```bash
npm run prisma:migrate:deploy
```

6. Keep the Vercel build command as:

```bash
npm run build
```

## Production notes

- `Impressum` and `Datenschutz` are structured drafts with placeholders and still need legal review.
- The admin area is intentionally simple and should be replaced later if you need multi-user auth, audit logging, or role management.
- Final logo files and legal/business content can be added later without changing the technical setup.

## Was ich noch von dir brauche

- vollständige rechtliche Unternehmensangaben
- finale Handelsregisterdaten
- finale Umsatzsteuer-ID
- echte Kundenbewertungen
- finale Logo-Dateien
- optionale Social-Media-Links
