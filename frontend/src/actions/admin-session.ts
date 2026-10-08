'use server'

import { createHash, timingSafeEqual } from 'node:crypto'
import { redirect } from 'next/navigation'
import { clearAdminCookie, setAdminCookie } from '@/lib/admin-auth'

export async function loginAdmin(password: string): Promise<{ success: boolean; error?: string }> {
  const expected = process.env.ADMIN_PASSWORD
  if (!expected) {
    return { success: false, error: 'Admin login is not configured (ADMIN_PASSWORD missing).' }
  }
  const a = createHash('sha256').update(password).digest()
  const b = createHash('sha256').update(expected).digest()
  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    return { success: false, error: 'Incorrect password.' }
  }
  await setAdminCookie()
  return { success: true }
}

export async function logoutAdmin(): Promise<void> {
  await clearAdminCookie()
  redirect('/admin/login')
}
