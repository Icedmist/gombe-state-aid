export type TicketData = {
  id: string
  firstName: string
  lastName: string
  email: string
  organization: string | null
  participantCategory: string | null
  status: string
}

export function ticketCode(id: string) {
  return `GSS-${id.replace(/[^a-zA-Z0-9]/g, '').slice(-6).toUpperCase()}`
}
