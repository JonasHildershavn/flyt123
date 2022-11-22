import NextAuth from "next-auth"
import AzureADProvider from "next-auth/providers/azure-ad";

export default NextAuth({
    callbacks: {
      session({ session, token, user }) {
        return session // The return type will match the one returned in `useSession()`
      },
    },
    providers: [
        AzureADProvider({
          clientId: process.env.AZURE_AD_CLIENT_ID ?? '',
          clientSecret: process.env.AZURE_AD_CLIENT_SECRET ?? '',
          tenantId: process.env.AZURE_AD_TENANT_ID,
        }),
      ]
  })
