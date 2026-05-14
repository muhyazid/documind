import { UserButton, SignOutButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import { supabase } from '@/lib/supabase'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  // Ambil data user dari Clerk
  const user = await currentUser()
  if (!user) redirect('/sign-in')

  // Cek apakah user sudah ada di Supabase
  const { data: existingUser } = await supabase
    .from('users')
    .select('*')
    .eq('clerk_id', user.id)
    .single()

  // Kalau belum ada, simpan sekarang
  if (!existingUser) {
    await supabase.from('users').insert({
      clerk_id: user.id,
      email: user.emailAddresses[0]?.emailAddress,
      name: user.firstName || 'User',
      plan: 'free',
    })
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard DocuMind</h1>
        <div className="flex gap-4 items-center">
          <UserButton />
          <SignOutButton>
            <button className="text-sm text-red-500">Logout</button>
          </SignOutButton>
        </div>
      </div>
      <p className="mt-4 text-gray-500">
        Selamat datang, {user.firstName}! 👋
      </p>
    </div>
  )
}