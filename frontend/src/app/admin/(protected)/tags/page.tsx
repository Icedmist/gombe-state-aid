import { prisma } from '@/lib/prisma'
import TagGenerator from './TagGenerator'

export const dynamic = 'force-dynamic'

export default async function AdminTags() {
  const registrations = await prisma.registration.findMany({
    orderBy: [{ lastName: 'asc' }, { firstName: 'asc' }],
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      organization: true,
      participantCategory: true,
      status: true,
    },
  })

  return <TagGenerator attendees={registrations} />
}
