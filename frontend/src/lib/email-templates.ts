const BRAND = {
  deep: '#0A2518',
  green: '#059669',
  accent: '#E11D48',
  milk: '#FFFEF7',
  gray: '#64748B',
}

export function summitEmailShell(opts: { subject: string; heading: string; bodyHtml: string }) {
  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background-color:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:600px;margin:0 auto;padding:24px;">
      <div style="background-color:${BRAND.deep};border-radius:16px 16px 0 0;padding:28px 32px;text-align:center;">
        <div style="color:#ffffff;font-size:22px;font-weight:900;letter-spacing:-0.5px;">GOMBE STATE 2026 HIV-TB SUMMIT</div>
        <div style="color:#6ee7b7;font-size:12px;letter-spacing:2px;margin-top:6px;">1 DECEMBER 2026 &bull; WORLD AIDS DAY</div>
      </div>
      <div style="background-color:#ffffff;padding:32px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">
        <h1 style="color:${BRAND.deep};font-size:20px;margin:0 0 16px;">${opts.heading}</h1>
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
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .split(/\n{2,}/)
    .map((p) => `<p style="margin:0 0 12px;">${p.replace(/\n/g, '<br/>')}</p>`)
    .join('')
}
