import { prisma } from '@/lib/prisma'
import SessionManager from './SessionManager'

export const dynamic = 'force-dynamic'

export default async function AdminProgramme() {
  const [sessions, speakers] = await Promise.all([
    prisma.session.findMany({
      orderBy: [{ startTime: 'asc' }],
      include: { speakers: { select: { speakerId: true } } },
    }),
    prisma.speaker.findMany({ select: { id: true, name: true }, orderBy: { name: 'asc' } }),
  ])
  const rows = sessions.map((s) => ({
    id: s.id,
    title: s.title,
    description: s.description,
    startTime: s.startTime ? s.startTime.toISOString() : null,
    endTime: s.endTime ? s.endTime.toISOString() : null,
    room: s.room,
    sessionType: s.sessionType,
    track: s.track,
    moderator: s.moderator,
    published: s.published,
    speakerIds: s.speakers.map((l) => l.speakerId),
  }))
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Manage Programme</h2>
      <SessionManager initial={rows} speakers={speakers} />
    </div>
  )
}
