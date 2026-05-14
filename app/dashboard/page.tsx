import { UserButton, SignOutButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import { supabase } from '@/lib/supabase'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function Dashboard() {
  const user = await currentUser()
  if (!user) redirect('/sign-in')

  const { data: existingUser } = await supabase
    .from('users')
    .select('*')
    .eq('clerk_id', user.id)
    .single()

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

      {/* Menu */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        <Link href="/dashboard/documents"
          className="p-6 border rounded-xl hover:border-blue-400 transition-colors">
          <div className="text-3xl mb-2">📄</div>
          <h3 className="font-semibold">Dokumen Saya</h3>
          <p className="text-sm text-gray-500">Upload dan kelola dokumen</p>
        </Link>
      </div>
    </div>
  )
}