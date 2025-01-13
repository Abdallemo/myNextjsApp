import Link from 'next/link'
import Image from 'next/image'
import { auth, signIn, signOut } from "@/auth"
import { redirect } from 'next/dist/server/api-utils';
import Profile from './profile';
import {Github} from "lucide-react"
 
import { Button } from "@/components/ui/button"

const Navbar = async () => {
  const session = await auth();
  return (
    <header className='px-5 py-3 bg-gray-300 shadow-lg shadow-inherit font-serif '>
      <nav className=' flex justify-between text-2xl items-center'>
        <Link href="/">
          {/* <Image src='/logo.png' alt='logo' width={90} height={24}></Image> */}
          Logo
        </Link>
        <div className='flex items-center gap-5'>
          {session && session?.user ? (
            <>
              <form
                action={async () => {
                  "use server"
                  await signOut({redirectTo:'/'})
                }}
                >
                <div>
                <Profile username={session?.user.name } avatar={session?.user.image}/>
                </div>
                <button type="submit">Logout</button>
              </form>
            </>
          ) : (
            <>
            <form
                action={async () => {
                  "use server"
                  await signIn("github")
                }}
              >
                <Button type="submit" >
                <Github /> Login with Gitub
                </Button>
              </form>
            </>
          )}
        </div>

      </nav>

    </header>
  )
}
export default Navbar