import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  // NextAuth JWT 토큰 가져오기
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET
  })

  if (request.nextUrl.pathname === '/') {
    if (token) {
      return NextResponse.redirect(new URL('/app', request.url))
    }
  }

  if (request.nextUrl.pathname.startsWith('/app')) {
    if (!token) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * 다음 경로들을 제외한 모든 요청에 매치:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - 기타 정적 파일들
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|_next).*)'
  ]
}
