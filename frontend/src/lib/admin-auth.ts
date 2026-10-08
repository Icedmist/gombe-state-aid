import { createHmac, timingSafeEqual } from 'node:crypto'
import { cookies } from 'next/headers'

const COOKIE_NAME = 'gss_admin'

function expectedToken(): string | null {
  const pw = process.env.ADMIN_PASSWORD
  if (!pw) return null
  return createHmac('sha256', pw).update('gombe-admin-session').digest('hex')
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const expected = expectedToken()
  if (!expected) return false
  const token = (await cookies()).get(COOKIE_NAME)?.value
  if (!token) return false
  const a = Buffer.from(token)
  const b = Buffer.from(expected)
  return a.length === b.length && timingSafeEqual(a, b)
}

export async function setAdminCookie(): Promise<void> {
  const expected = expectedToken()
  if (!expected) return
  ;(await cookies()).set(COOKIE_NAME, expected, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })
}

export async function clearAdminCookie(): Promise<void> {
  ;(await cookies()).delete(COOKIE_NAME)
}
