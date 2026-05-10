import { supabase } from './supabase'

export async function uploadDocument(file: File, userId: string) {
  const fileExt = file.name.split('.').pop()
  const fileName = `${userId}/${Date.now()}.${fileExt}`

  const { error } = await supabase.storage
    .from('documents')
    .upload(fileName, file)

  if (error) throw error

  // Ambil public URL
  const { data } = supabase.storage
    .from('documents')
    .getPublicUrl(fileName)

  return {
    path: fileName,
    url: data.publicUrl,
  }
}