'use client'

import { useEffect, useRef, useState } from 'react'
import tagTemplate from '@/assets/tag-template.jpg'
import { attendeeRole } from '@/lib/event'
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

/**
 * The tag artwork is the official summit badge, imported as a module asset
 * (src/assets/tag-template.jpg, 724 x 1080) so a missing file fails the build
 * instead of silently 404-ing in production. The name, role and ID were erased
 * from that artwork, so generating a tag only swaps those three fields in
 * exactly the spots they occupied on the original design.
 *
 * Coordinates below are in the image's own pixel space and are applied to an
 * SVG overlay with the same viewBox, so they scale with the tag at any width
 * (screen preview or 4in x 6in print).
 */
const ART_WIDTH = 724
const ART_HEIGHT = 1080
const CENTER_X = ART_WIDTH / 2

const ROLE_BASELINE = 583
const ROLE_FONT_SIZE = 116.3
const ROLE_LETTER_SPACING = 1.9
const ROLE_MAX_WIDTH = 500

const NAME_BASELINE = 788
const NAME_FONT_SIZE = 62.8
const NAME_MAX_WIDTH = 604
const NAME_MIN_FONT_SIZE = 40
// Long names first shrink a little, then get squeezed horizontally, but never
// more than this much distortion so they stay readable on the printed card.
const NAME_MAX_SQUEEZE = 0.9

const ID_BASELINE = 953
const ID_FONT_SIZE = 39
const ID_WIDTH = 380

const DISPLAY_FONT = 'var(--font-anton), Impact, "Arial Narrow", sans-serif'

// Average advance width of an Anton uppercase glyph, as a fraction of the font
// size. Only used for the first (pre-measurement) render so the tag is already
// laid out correctly on the server and before fonts finish loading.
const ANTON_AVG_ADVANCE = 0.47
type Fit = { fontSize: number; textLength: number | null }

/**
 * Fit a line of text into `maxWidth` image-pixels: step the font size down
 * until squeezing it would cost no more than `maxSqueeze`, then squeeze.
 */
function fitLine(
  naturalWidth: number,
  baseSize: number,
  minSize: number,
  maxWidth: number,
  maxSqueeze: number
): Fit {
  if (naturalWidth <= maxWidth) return { fontSize: baseSize, textLength: null }

  const ratio = maxWidth / naturalWidth
  const size = Math.max(minSize, Math.min(baseSize, (baseSize * ratio) / maxSqueeze))
  const scaled = naturalWidth * (size / baseSize)

  return { fontSize: Math.round(size * 10) / 10, textLength: scaled > maxWidth ? maxWidth : null }
}

const estimateWidth = (text: string, fontSize: number) => text.length * fontSize * ANTON_AVG_ADVANCE

export default function AttendeeTag({ attendee }: { attendee: TagAttendee }) {
  const role = attendeeRole(attendee.participantCategory)
  const name = `${attendee.firstName} ${attendee.lastName}`.replace(/\s+/g, ' ').trim().toUpperCase()
  const code = attendeeCode(attendee.id)

  const svgRef = useRef<SVGSVGElement>(null)
  const [measured, setMeasured] = useState<{ name: string; role: string; nameFit: Fit; roleFit: Fit } | null>(null)

  // Measurement results are only trusted for the attendee currently rendered.
  const fresh = measured && measured.name === name && measured.role === role ? measured : null

  const nameFit: Fit =
    fresh?.nameFit ??
    fitLine(estimateWidth(name, NAME_FONT_SIZE), NAME_FONT_SIZE, NAME_MIN_FONT_SIZE, NAME_MAX_WIDTH, NAME_MAX_SQUEEZE)

  const roleFit: Fit =
    fresh?.roleFit ??
    fitLine(estimateWidth(role, ROLE_FONT_SIZE), ROLE_FONT_SIZE, ROLE_FONT_SIZE, ROLE_MAX_WIDTH, 1)

  // Measure the real text in a throwaway node and store the fitted size/width.
  useEffect(() => {
    let cancelled = false

    const measure = () => {
      const svg = svgRef.current
      if (cancelled || !svg) return

      const widthOf = (content: string, fontSize: number, letterSpacing?: number) => {
        const probe = document.createElementNS('http://www.w3.org/2000/svg', 'text')
        probe.setAttribute('font-size', String(fontSize))
        probe.setAttribute('text-anchor', 'middle')
        probe.setAttribute('style', `font-family: ${DISPLAY_FONT}`)
        if (letterSpacing) probe.setAttribute('letter-spacing', String(letterSpacing))
        probe.textContent = content
        svg.appendChild(probe)
        const width = probe.getComputedTextLength()
        probe.remove()
        return width
      }

      setMeasured({
        name,
        role,
        nameFit: fitLine(
          widthOf(name, NAME_FONT_SIZE),
          NAME_FONT_SIZE,
          NAME_MIN_FONT_SIZE,
          NAME_MAX_WIDTH,
          NAME_MAX_SQUEEZE
        ),
        roleFit: fitLine(
          widthOf(role, ROLE_FONT_SIZE, ROLE_LETTER_SPACING),
          ROLE_FONT_SIZE,
          ROLE_FONT_SIZE,
          ROLE_MAX_WIDTH,
          1
        ),
      })
    }

    measure()
    // Re-measure once the display font has actually loaded.
    document.fonts?.ready.then(measure).catch(() => undefined)

    return () => {
      cancelled = true
    }
  }, [name, role])

  return (
    <article className="attendee-tag relative mx-auto w-full max-w-[380px] overflow-hidden bg-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={tagTemplate.src}
        alt=""
        aria-hidden
        draggable={false}
        className="block h-auto w-full select-none"
      />

      <svg
        ref={svgRef}
        viewBox={`0 0 ${ART_WIDTH} ${ART_HEIGHT}`}
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label={`${name}, ${role}, ID ${code}`}
      >
        <text
          x={CENTER_X + ROLE_LETTER_SPACING / 2}
          y={ROLE_BASELINE}
          textAnchor="middle"
          fontSize={roleFit.fontSize}
          letterSpacing={ROLE_LETTER_SPACING}
          fill="#ffffff"
          style={{ fontFamily: DISPLAY_FONT }}
          textLength={roleFit.textLength ?? undefined}
          lengthAdjust="spacingAndGlyphs"
        >
          {role}
        </text>

        <text
          x={CENTER_X}
          y={NAME_BASELINE}
          textAnchor="middle"
          fontSize={nameFit.fontSize}
          fill="#010147"
          style={{ fontFamily: DISPLAY_FONT }}
          textLength={nameFit.textLength ?? undefined}
          lengthAdjust="spacingAndGlyphs"
        >
          {name}
        </text>

        <text
          x={CENTER_X}
          y={ID_BASELINE}
          textAnchor="middle"
          fontSize={ID_FONT_SIZE}
          fontWeight={700}
          fill="#000000"
          textLength={ID_WIDTH}
          lengthAdjust="spacingAndGlyphs"
        >
          ID: {code}
        </text>
      </svg>
    </article>
  )
}
