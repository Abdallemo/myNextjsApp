import db from './models/drizzle/client.drizle'
import { UserTable,} from './models/drizzle/schema'
import { eq } from 'drizzle-orm'
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
    clientId: process.env.AUTH_GITHUB_ID as string,
    clientSecret: process.env.AUTH_GITHUB_SECRET as string
  }),
  

],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async signIn({ profile ,account}) {
      if(account?.provider==='github'){
        if (!profile?.email) {
          return false; 
        }
        const existingUser = await db.select().from(UserTable).where(eq(UserTable.email,profile.email));
        if(existingUser.length>0)return true
        try {
          await db.insert(UserTable).values({
            email:profile.email,
            name:profile.name ?? 'Unknown',
            githubId:profile.id!.toString()
            
          })
          return true; 
        } catch (error) {
          console.error("Error inserting user:", error);
          return false
        }
      }

      if(account?.provider==='email'){
        if(profile?.email_verified){
          return true
          
        }
        return false;
      }







      return false;
    },
    
  }
})