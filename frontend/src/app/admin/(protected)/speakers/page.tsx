import { prisma } from '@/lib/prisma'
import SpeakerManager from './SpeakerManager'

export const dynamic = 'force-dynamic'

export default async function AdminSpeakers() {
  const speakers = await prisma.speaker.findMany({ orderBy: [{ order: 'asc' }, { createdAt: 'desc' }] })
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Manage Speakers</h2>
      <SpeakerManager initialSpeakers={speakers} />
    </div>
  )
}
