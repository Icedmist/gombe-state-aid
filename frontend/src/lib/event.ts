export const EVENT_NAME = 'Gombe State 2026'
export const EVENT_SUBTITLE = 'HIV-TB Summit'
export const EVENT_ONE_LINER = `${EVENT_NAME} ${EVENT_SUBTITLE}`
export const EVENT_DATE = '1 December 2026'
export const EVENT_WEBSITE = 'gombestateaidsummit.ng'
export const EVENT_VENUE = 'Medical College Auditorium, Federal Teaching Hospital, Gombe'

/**
 * The role printed on an attendee tag. Registration stores vendors under
 * VENDOR, but the wearable uses the public-facing EXHIBITOR label.
 */
export function attendeeRole(category: string | null | undefined) {
  switch ((category || '').trim().toUpperCase()) {
    case 'VENDOR':
    case 'EXHIBITOR':
      return 'EXHIBITOR'
    case 'SPEAKER':
      return 'SPEAKER'
    case 'VOLUNTEER':
      return 'VOLUNTEER'
    case 'MEDIA':
      return 'MEDIA'
    case 'DELEGATE':
    default:
      return 'DELEGATE'
  }
}
