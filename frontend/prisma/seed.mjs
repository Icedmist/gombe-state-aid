// Seed the initial SUPER_ADMIN user. Run with:
//   SEED_ADMIN_EMAIL="you@example.com" SEED_ADMIN_NAME="Your Name" npx prisma db seed
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const email = process.env.SEED_ADMIN_EMAIL || 'admin@gombe-summit.ng'
const name = process.env.SEED_ADMIN_NAME || 'Summit Administrator'

const user = await prisma.user.upsert({
  where: { email },
  update: { role: 'SUPER_ADMIN' },
  create: { name, email, role: 'SUPER_ADMIN' },
})

console.log(`Seeded admin user: ${user.email} (${user.role})`)
await prisma.$disconnect()
