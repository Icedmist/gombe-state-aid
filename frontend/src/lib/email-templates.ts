const BRAND = {
  deep: '#0A2518',
  green: '#059669',
  accent: '#E11D48',
  milk: '#FFFEF7',
  gray: '#64748B',
}

export const VERIFIED_SENDER_DOMAIN = 'gombestateaidsummit.ng'

export function esc(text: string) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export function buildSender(fromName?: string, localPart?: string) {
  const name = (fromName || 'Gombe Summit').trim() || 'Gombe Summit'
  const local = (localPart || 'updates').trim().toLowerCase().replace(/[^a-z0-9._-]/g, '') || 'updates'
  return `${name} <${local}@${VERIFIED_SENDER_DOMAIN}>`
}

export function summitEmailShell(opts: { subject: string; heading: string; bodyHtml: string }) {
  const heading = esc(opts.heading)
  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background-color:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:600px;margin:0 auto;padding:24px;">
      <div style="background-color:${BRAND.accent};border-radius:16px 16px 0 0;height:8px;line-height:8px;">&nbsp;</div>
      <div style="background-color:${BRAND.deep};padding:28px 32px;text-align:center;">
        <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 14px;">
          <tr>
            <td style="background-color:${BRAND.green};border-radius:12px;width:52px;height:52px;text-align:center;vertical-align:middle;font-size:30px;font-weight:bold;color:#ffffff;">+</td>
          </tr>
        </table>
        <div style="color:#ffffff;font-size:22px;font-weight:900;letter-spacing:-0.5px;">GOMBE STATE 2026 HIV-TB SUMMIT</div>
        <div style="color:#6ee7b7;font-size:12px;letter-spacing:2px;margin-top:6px;">1 DECEMBER 2026 &bull; WORLD AIDS DAY</div>
      </div>
      <div style="background-color:#ffffff;padding:32px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">
        <h1 style="color:${BRAND.deep};font-size:20px;margin:0 0 8px;">${heading}</h1>
        <div style="background-color:${BRAND.accent};height:4px;width:64px;border-radius:2px;margin:0 0 16px;">&nbsp;</div>
        <div style="color:#334155;font-size:15px;line-height:1.7;">${opts.bodyHtml}</div>
      </div>
      <div style="background-color:${BRAND.milk};border:1px solid #e2e8f0;border-radius:0 0 16px 16px;padding:20px 32px;text-align:center;">
        <p style="color:${BRAND.gray};font-size:12px;margin:0;">Gombe State Ministry of Health &bull; TB-HIV Summit Secretariat</p>
        <p style="color:${BRAND.gray};font-size:12px;margin:8px 0 0;">Stronger Partnerships for a Healthier, HIV &amp; TB Free Gombe State</p>
      </div>
    </div>
  </body>
</html>`
}

export function plainToHtml(text: string) {
  return esc(text)
    .split(/\n{2,}/)
    .map((p) => `<p style="margin:0 0 12px;">${p.replace(/\n/g, '<br/>')}</p>`)
    .join('')
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function parseCustomRecipients(raw: string): { valid: string[]; invalid: string[] } {
  const parts = raw.split(/[\s,;]+/).map((s) => s.trim().toLowerCase()).filter(Boolean)
  const seen = new Set<string>()
  const valid: string[] = []
  const invalid: string[] = []
  for (const p of parts) {
    if (seen.has(p)) continue
    seen.add(p)
    if (EMAIL_RE.test(p)) valid.push(p)
    else invalid.push(p)
  }
  return { valid, invalid }
}
