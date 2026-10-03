# Gombe State 2026 AIDS Summit Platform

This is the official digital platform for the Gombe State 2026 AIDS Summit.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL
- **ORM**: Prisma
- **UI Components**: shadcn/ui-inspired custom Tailwind components

## Getting Started

1. Install dependencies
```bash
npm install
```

2. Setup environment variables
Create a `.env` file with your database connection:
```
DATABASE_URL="postgresql://user:password@localhost:5432/gombe_summit?schema=public"
```

3. Initialize the database
```bash
npx prisma generate
npx prisma db push
```

4. Run the development server
```bash
npm run dev
```

## Features Implemented
- **Public Website**: Homepage, About, Themes, Programme, Speakers, Partners.
- **Registration System**: Fully functional registration form connected to Prisma.
- **Abstract System**: Abstract submission and review portal.
- **Admin Dashboard**: Secure CMS layout to manage registrations, abstracts, and settings.
- **QR Check-in**: Point-of-entry check-in system with server actions.
- **Role-based Access**: Prisma schema supports Super Admin, Reviewers, etc.

## Next Steps
- Connect NextAuth.js for robust authentication.
- Integrate a mailing service (Resend or SendGrid) for registration confirmations.
- Expand all placeholder CMS pages with full CRUD API routes.
