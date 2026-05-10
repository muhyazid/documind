import { UserButton } from '@clerk/nextjs'
import { SignOutButton } from '@clerk/nextjs'

export default function Dashboard() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard DocuMind</h1>
        <div className="flex gap-4">
          <UserButton />
          <SignOutButton />
        </div>
      </div>
      <p className="mt-4 text-gray-500">Selamat datang! 👋</p>
    </div>
  )
}