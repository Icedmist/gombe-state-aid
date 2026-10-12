import { createClient } from '@supabase/supabase-js'

// Server-only service client (bypasses RLS). NEVER import from client components.
// Requires SUPABASE_URL + SUPABASE_SERVICE_KEY in the server environment.
let client: ReturnType<typeof createClient> | null = null

export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_KEY
  if (!url || !key) return null
  if (!client) {
    client = createClient(url, key, { auth: { persistSession: false } })
  }
  return client
}

export const ABSTRACTS_BUCKET = 'abstracts'
export const EMAIL_ATTACHMENTS_BUCKET = 'email-attachments'
export const ABSTRACT_MAX_BYTES = 10 * 1024 * 1024
export const ABSTRACT_MIME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

export async function getEmailAttachmentsBucketName(supabase: ReturnType<typeof getSupabaseAdmin>): Promise<string> {
  if (!supabase) return EMAIL_ATTACHMENTS_BUCKET
  try {
    const { data: bucket, error: getErr } = await supabase.storage.getBucket(EMAIL_ATTACHMENTS_BUCKET)
    if (bucket && !getErr) return EMAIL_ATTACHMENTS_BUCKET
    const { error: createErr } = await supabase.storage.createBucket(EMAIL_ATTACHMENTS_BUCKET, { public: false })
    if (!createErr || (createErr as { message?: string }).message?.includes('already exists')) {
      return EMAIL_ATTACHMENTS_BUCKET
    }
  } catch (err) {
    console.warn('Could not ensure email-attachments bucket, falling back to abstracts:', err)
  }
  return ABSTRACTS_BUCKET
}

