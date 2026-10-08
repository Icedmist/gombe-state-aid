import { prisma } from '@/lib/prisma'
import PartnerManager from './PartnerManager'

export const dynamic = 'force-dynamic'

export default async function AdminPartners() {
  const [partners, sponsors] = await Promise.all([
    prisma.partner.findMany({ orderBy: [{ order: 'asc' }, { createdAt: 'desc' }] }),
    prisma.sponsor.findMany({ orderBy: [{ order: 'asc' }, { createdAt: 'desc' }] }),
  ])
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Partners & Sponsors</h2>
      <PartnerManager kind="partner" title="Partners" initial={partners} />
      <PartnerManager kind="sponsor" title="Sponsors" initial={sponsors} />
    </div>
  )
}
