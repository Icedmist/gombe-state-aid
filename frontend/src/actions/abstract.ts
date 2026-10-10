'use server'

import { prisma } from '@/lib/prisma'
import {
  ABSTRACT_MAX_BYTES,
  ABSTRACT_MIME_TYPES,
  ABSTRACTS_BUCKET,
  getSupabaseAdmin,
} from '@/lib/supabase-admin'

function safeFileName(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 120)
}

export async function submitAbstract(formData: FormData) {
  try {
    const title = (formData.get('title') as string || '').trim();
    const authorName = (formData.get('authorName') as string || '').trim();
    const email = (formData.get('email') as string || '').trim();
    const organization = (formData.get('organization') as string || '').trim();
    const themeId = (formData.get('themeId') as string || '').trim();
    const content = (formData.get('text') as string || '').trim();
    const coAuthors = ((formData.get('coAuthors') as string) || '').trim() || null;
    const phone = ((formData.get('phone') as string) || '').trim() || null;
    const presentationType = ((formData.get('presentationType') as string) || '').trim() || null;
    const keywords = ((formData.get('keywords') as string) || '').trim() || null;
    const declaration = formData.get('declaration') === 'on';

    if (!title || !authorName || !email || !organization || !themeId || !content) {
      return { success: false, error: 'Please complete all required fields.' };
    }
    if (!declaration) {
      return { success: false, error: 'Please accept the declaration to submit.' };
    }

    const file = formData.get('file') as File | null;
    let filePath: string | null = null;
    if (file && file.size > 0) {
      if (!ABSTRACT_MIME_TYPES.includes(file.type)) {
        return { success: false, error: 'Only PDF or Word documents are accepted.' };
      }
      if (file.size > ABSTRACT_MAX_BYTES) {
        return { success: false, error: 'File must be smaller than 10 MB.' };
      }
      const supabase = getSupabaseAdmin();
      if (!supabase) {
        return { success: false, error: 'File upload is not configured. Please try again later.' };
      }
      const record = await prisma.abstract.create({
        data: { title, authorName, email, organization, themeId, text: content, coAuthors, phone, presentationType, keywords, declaration, status: 'SUBMITTED' },
      });
      filePath = `${record.id}/${safeFileName(file.name)}`;
      const { error: uploadError } = await supabase.storage
        .from(ABSTRACTS_BUCKET)
        .upload(filePath, Buffer.from(await file.arrayBuffer()), { contentType: file.type, upsert: true });
      if (uploadError) {
        console.error('Abstract upload error:', uploadError);
        await prisma.abstract.delete({ where: { id: record.id } });
        return { success: false, error: 'File upload failed. Please try again.' };
      }
      await prisma.abstract.update({ where: { id: record.id }, data: { fileUrl: filePath } });
      return { success: true };
    }

    await prisma.abstract.create({
      data: { title, authorName, email, organization, themeId, text: content, coAuthors, phone, presentationType, keywords, declaration, status: 'SUBMITTED' }
    });

    return { success: true };
  } catch (error) {
    console.error('Abstract submission error:', error);
    return { success: false, error: 'Abstract submission failed.' };
  }
}

export async function getAbstractFileUrl(path: string | null): Promise<string | null> {
  if (!path) return null;
  const supabase = getSupabaseAdmin();
  if (!supabase) return null;
  const { data, error } = await supabase.storage.from(ABSTRACTS_BUCKET).createSignedUrl(path, 3600);
  if (error) {
    console.error('Signed URL error:', error);
    return null;
  }
  return data.signedUrl;
}

export type AbstractSummary = {
  id: string
  title: string
  authorName: string
  email: string
  organization: string
  themeId: string | null
  status: string
  coAuthors: string | null
  phone: string | null
  presentationType: string | null
  keywords: string | null
  text: string
  fileUrl: string | null
  createdAt: string
}

function toSummary(a: {
  id: string; title: string; authorName: string; email: string; organization: string;
  themeId: string | null; status: string; coAuthors: string | null; phone: string | null;
  presentationType: string | null; keywords: string | null; text: string;
  fileUrl: string | null; createdAt: Date
}): AbstractSummary {
  return { ...a, createdAt: a.createdAt.toISOString() }
}

export async function lookupAbstracts(query: string): Promise<{ success: boolean; results?: AbstractSummary[]; error?: string }> {
  const q = query.trim()
  if (!q) return { success: false, error: 'Enter your abstract ID or submission email.' }
  try {
    const rows = await prisma.abstract.findMany({
      where: { OR: [{ id: q }, { email: q.toLowerCase() }] },
      orderBy: { createdAt: 'desc' },
    })
    if (rows.length === 0) return { success: false, error: 'No abstract found.' }
    return { success: true, results: rows.map(toSummary) }
  } catch (error) {
    console.error('Abstract lookup error:', error)
    return { success: false, error: 'Lookup failed. Try again.' }
  }
}

export async function updateAbstractSubmission(id: string, formData: FormData) {
  try {
    const existing = await prisma.abstract.findUnique({ where: { id } })
    if (!existing) return { success: false, error: 'Abstract not found.' }
    if (existing.status !== 'SUBMITTED' && existing.status !== 'UNDER_REVIEW') {
      return { success: false, error: 'This abstract can no longer be edited (already decided).' }
    }
    const data = {
      title: ((formData.get('title') as string) || '').trim() || existing.title,
      authorName: ((formData.get('authorName') as string) || '').trim() || existing.authorName,
      organization: ((formData.get('organization') as string) || '').trim() || existing.organization,
      themeId: ((formData.get('themeId') as string) || '').trim() || existing.themeId,
      text: ((formData.get('text') as string) || '').trim() || existing.text,
      coAuthors: ((formData.get('coAuthors') as string) || '').trim() || null,
      phone: ((formData.get('phone') as string) || '').trim() || null,
      presentationType: ((formData.get('presentationType') as string) || '').trim() || null,
      keywords: ((formData.get('keywords') as string) || '').trim() || null,
    }
    let fileUrl = existing.fileUrl
    const file = formData.get('file') as File | null
    if (file && file.size > 0) {
      if (!ABSTRACT_MIME_TYPES.includes(file.type)) {
        return { success: false, error: 'Only PDF or Word documents are accepted.' }
      }
      if (file.size > ABSTRACT_MAX_BYTES) {
        return { success: false, error: 'File must be smaller than 10 MB.' }
      }
      const supabase = getSupabaseAdmin()
      if (!supabase) return { success: false, error: 'File upload is not configured.' }
      const path = `${id}/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 100)}`
      const { error: uploadError } = await supabase.storage
        .from(ABSTRACTS_BUCKET)
        .upload(path, Buffer.from(await file.arrayBuffer()), { contentType: file.type, upsert: true })
      if (uploadError) {
        console.error('Abstract re-upload error:', uploadError)
        return { success: false, error: 'File upload failed. Details were still saved.' }
      }
      if (existing.fileUrl) {
        await supabase.storage.from(ABSTRACTS_BUCKET).remove([existing.fileUrl])
      }
      fileUrl = path
    }
    const updated = await prisma.abstract.update({ where: { id }, data: { ...data, fileUrl } })
    return { success: true, result: toSummary(updated) }
  } catch (error) {
    console.error('Abstract update error:', error)
    return { success: false, error: 'Update failed. Try again.' }
  }
}
