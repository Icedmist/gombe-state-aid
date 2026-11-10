export type TicketData = {
  id: string
  firstName: string
  lastName: string
  email: string
  organization: string | null
  participantCategory: string | null
  status: string
}

/**
 * Stable attendee ID in the official badge format, e.g. GSA-2026-00842.
 * Derived from the registration id so tickets, emails and tags always match.
 */
export function ticketCode(id: string) {
  let hash = 0
  for (let i = 0; i < id.length; i += 1) {
    hash = (hash * 31 + id.charCodeAt(i)) >>> 0
  }
  return `GSA-2026-${String(hash % 100000).padStart(5, '0')}`
}

export const attendeeCode = ticketCode
