import { EVENT_NAME, EVENT_SUBTITLE, EVENT_WEBSITE, attendeeRole } from '@/lib/event'
import { attendeeCode } from '@/lib/ticket'

export type TagAttendee = {
  id: string
  firstName: string
  lastName: string
  email?: string | null
  organization?: string | null
  participantCategory?: string | null
  status?: string | null
}

export default function AttendeeTag({ attendee }: { attendee: TagAttendee }) {
  const role = attendeeRole(attendee.participantCategory)
  const name = `${attendee.firstName} ${attendee.lastName}`.replace(/\s+/g, ' ').trim().toUpperCase()
  const code = attendeeCode(attendee.id)

  return (
    <article className="attendee-tag relative mx-auto w-full max-w-[380px] overflow-hidden bg-white font-sans text-center shadow-[0_18px_45px_rgba(2,44,34,0.18)] [container-type:inline-size]">
      <span aria-hidden className="tag-ribbon absolute inset-y-0 left-0 z-20 w-[4.2cqw]" />
      <span aria-hidden className="tag-ribbon absolute inset-y-0 right-0 z-20 w-[4.2cqw]" />

      <div className="relative flex aspect-[2/3] flex-col">
        <div className="relative flex-[0_0_45%] px-[7.5cqw] pt-[3cqw]">
          <span
            aria-hidden
            className="absolute left-1/2 top-[2.4cqw] h-[3.2cqw] w-[3.2cqw] -translate-x-1/2 rounded-full border-[0.35cqw] border-slate-700 bg-white"
          />
          <div className="mt-[7cqw] flex items-start justify-between">
            <img
              src="/brand/gomsaca-logo.png"
              alt="Gombe State Agency for the Control of AIDS"
              className="h-[19cqw] w-[19cqw] object-contain"
            />
            <img
              src="/brand/gombe-state-seal.svg"
              alt="Gombe State coat of arms"
              className="h-[20cqw] w-[18cqw] object-contain"
            />
          </div>

          <h2 className="mt-[3.5cqw] font-black uppercase leading-[0.92] tracking-tight">
            <span className="block text-[8.6cqw] text-[#0b5a2b]">{EVENT_NAME}</span>
            <span className="block text-[8.6cqw] text-[#111c5c]">{EVENT_SUBTITLE}</span>
          </h2>
        </div>

        <div className="relative z-10 flex-[0_0_13%]">
          <div className="absolute inset-x-0 top-[1.2cqw] h-[9.5cqw] bg-[#c81e2b] [clip-path:polygon(5%_0,100%_0,95%_100%,0_100%)]" />
          <div className="absolute inset-x-0 top-0 flex h-[9.5cqw] items-center justify-center bg-[#0f7a3d] [clip-path:polygon(5%_0,100%_0,95%_100%,0_100%)]">
            <span className="text-[10.5cqw] font-black uppercase leading-none tracking-tight text-white">
              {role}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col px-[6.5cqw] pb-[2cqw] pt-[2cqw]">
          <div className="flex flex-1 items-center justify-center border border-slate-200 bg-white px-[3cqw] py-[3cqw] shadow-[0_0.6cqw_2cqw_rgba(15,23,42,0.08)]">
            <span className="break-words text-[7.1cqw] font-black uppercase leading-[1.05] tracking-tight text-[#111c5c]">
              {name}
            </span>
          </div>
          <div className="mt-[3cqw] pb-[1cqw]">
            <span className="text-[5.4cqw] font-black tracking-wide text-[#111827]">ID: {code}</span>
          </div>
        </div>

        <div className="flex flex-[0_0_9%] items-center justify-center bg-[#0b4d26]">
          <span className="text-[4.4cqw] font-bold tracking-wide text-white">{EVENT_WEBSITE}</span>
        </div>
      </div>
    </article>
  )
}
