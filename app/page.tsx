import { supabase } from '@/lib/supabase'

export default async function Home() {
  const { data, error } = await supabase.from('users').select('*')

  return (
    <main>
      <h1>DocuMind AI</h1>
      <p>Status koneksi Supabase:</p>

      {error ? (
        <p style={{ color: 'red' }}>❌ Gagal konek: {error.message}</p>
      ) : (
        <p style={{ color: 'green' }}>✅ Supabase berhasil terkoneksi!</p>
      )}
    </main>
  )
}