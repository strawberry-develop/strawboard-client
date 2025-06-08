'use client'

import Logo from '@/components/common/Logo'
import Navigation from '@/components/home/Navigation'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import ArrowRightIcon from '../../public/images/arrow-right.svg'
import GoogleIcon from '../../public/logos/google.svg'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navigation />

      <main className="flex flex-col items-center justify-center px-4 py-16 md:py-24 bg-gradient-to-b from-indigo-50 via-blue-50 to-slate-50 flex-grow relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-60 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-blue-200 to-purple-200 opacity-50 blur-3xl"></div>
          <div className="absolute -top-24 -right-24 w-[300px] h-[300px] rounded-full bg-blue-200 opacity-20 blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-[200px] h-[200px] rounded-full bg-indigo-200 opacity-20 blur-xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center z-10">
          <div className="flex justify-center mb-8 relative">
            <Logo width={80} height={80} />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text tracking-tight">
            할 일을 <br className="sm:hidden" />
            <span className="text-blue-400 relative inline-block">
              스마트하게
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-500 rounded-full"></span>
            </span>
            <span className="block mt-1">관리하세요</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            StrawBoard로 업무와 일상의 모든 할 일을 효율적으로 정리하고 관리하세요. 어디서나 쉽고 편하게.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button
              className="flex items-center justify-center gap-3 px-7 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium"
              onClick={() => signIn('google')}
            >
              <span className="transform transition-transform">
                <GoogleIcon width={20} height={20} />
              </span>
              <span className="transform transition-transform">무료로 시작하기</span>
            </button>

            <Link
              href="/features"
              className="flex items-center justify-center px-7 py-4 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full shadow-md hover:shadow-lg hover:bg-white text-slate-700 font-medium"
            >
              <span>기능 살펴보기</span>
              <ArrowRightIcon className="h-5 w-5 ml-2 transform" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
export default Home
