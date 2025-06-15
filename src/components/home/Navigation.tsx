import Logo from '@/components/common/Logo'
import Link from 'next/link'
import { signIn } from 'next-auth/react'

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-500/90 to-indigo-600/90 backdrop-blur-sm border-b border-indigo-700/20 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 lg:px-8">
        <div className="flex items-center">
          <Logo width={32} height={32} />
          <span className="ml-2 text-xl font-medium text-white">StrawBoard</span>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/pricing" className="text-white/90 hover:text-white font-medium text-sm">
            가격 정책
          </Link>
          <Link href="/features" className="text-white/90 hover:text-white font-medium text-sm">
            주요 기능
          </Link>
          <button
            type="button"
            className="bg-white text-blue-600 px-5 py-2 rounded-full hover:bg-blue-50 font-medium text-sm shadow hover:shadow-md"
            onClick={() => signIn('google')}
          >
            로그인
          </button>
        </div>
      </div>
    </nav>
  )
}
