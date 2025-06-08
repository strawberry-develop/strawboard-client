import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
    })
  ],
  callbacks: {
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      return `${baseUrl}/board`
    }
  }
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
