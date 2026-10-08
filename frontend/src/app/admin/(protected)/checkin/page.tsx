import { prisma } from '@/lib/prisma'
import CheckInManager from './CheckInManager'

export const dynamic = 'force-dynamic'

export default async function CheckInScanner() {
  const regs = await prisma.registration.findMany({
    where: { checkInStatus: true },
    orderBy: { checkInTime: 'desc' },
    include: { _count: { select: { checkIns: true } } },
  })

  const checkedIn = regs.map((reg) => ({
    id: reg.id,
    firstName: reg.firstName,
    lastName: reg.lastName,
    email: reg.email,
    phoneNumber: reg.phoneNumber,
    organization: reg.organization,
    participantCategory: reg.participantCategory,
    status: reg.status,
    checkInStatus: reg.checkInStatus,
    checkInTime: reg.checkInTime ? reg.checkInTime.toISOString() : null,
    checkInCount: reg._count.checkIns,
  }))

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Check-in / Check-out</h2>
      <CheckInManager checkedIn={checkedIn} />
    </div>
  )
}
