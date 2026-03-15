# Blitz Service GmbH Website

Production-ready Next.js website for a German service company with a clear focus on cleaning services, a PostgreSQL-backed contact form, and a simple protected admin area.

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
|   `-- logos/
|-- src/
|   |-- app/
|   |   |-- admin/
|   |   |-- api/
|   |   |-- bewertungen/
|   |   |-- contact/
|   |   |-- datenschutz/
|   |   |-- impressum/
|   |   |-- services/
|   |   |-- ueber-uns/
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   |-- not-found.tsx
|   |   `-- page.tsx
|   |-- components/
|   |-- config/
|   |-- data/
|   `-- lib/
|-- .env.example
|-- next.config.ts
|-- package.json
|-- postcss.config.js
|-- tailwind.config.ts
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

3. Update `.env` with real project values.

4. Generate Prisma client:

```bash
npx prisma generate
```

5. Run the initial migration:

```bash
npx prisma migrate dev --name init
```

6. Start development:

```bash
npm run dev
```

## Environment variables

- `DATABASE_URL`: PostgreSQL connection string
- `EMAIL_SERVER`: SMTP connection string for outgoing notification emails
- `EMAIL_FROM`: sender used for contact form notifications
- `COMPANY_NOTIFICATION_EMAIL`: inbox that receives submitted contact requests
- `ADMIN_PASSWORD`: password for the simple admin login
- `ADMIN_SESSION_SECRET`: secret used to sign the admin session cookie

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
- Logo placeholders can be added to `public/logos/`.
- The contact form stores submissions in PostgreSQL and can optionally forward them by email.

## Deployment to Vercel

1. Push the project to a Git provider.
2. Import the repository in Vercel.
3. Add the environment variables from `.env.example`.
4. Provision a PostgreSQL database, then set `DATABASE_URL`.
5. Run Prisma migrations against production:

```bash
npx prisma migrate deploy
```

6. Ensure the build command remains:

```bash
npm run build
```

## Notes

- `Impressum` and `Datenschutz` are drafts with placeholders and must be legally reviewed before production use.
- The admin area is intentionally simple and should be replaced with a stronger auth solution if multiple users or stricter auditing is required.
- `favicon.ico` and final logo assets still need to be added.

## Was ich noch von dir brauche

- company address
- phone number
- email
- managing director
- commercial register
- VAT ID
- opening hours
- service areas
- real customer reviews
- logo files
- social media links
