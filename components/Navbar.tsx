import Link from 'next/link'
import { auth, signIn, signOut } from "@/auth"
// import { redirect } from 'next/dist/server/api-utils';
import Profile from './profile';
import { Github } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const Navbar = async () => {
  const session = await auth();
  return (
    <header className='px-5 py-3 bg-gray-900 shadow-lg shadow-inherit font-serif '>
      <nav className=' flex justify-between text-2xl items-center text-white'>
        <Link href="/">
          {/* <Image src='/logo.png' alt='logo' width={90} height={24}></Image> */}
          Logo
        </Link>
        {session && session?.user ? (
          <>
            <div className='flex gap-4'>
              <Link href="/"> Dashboard</Link>
              <Link href="/"> Settings</Link>
            </div>
            <div>
                <DropdownMenu >
                  <DropdownMenuTrigger >
                    <Profile username={session?.user.name} avatar={session?.user.image} />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className='w-32'>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem
                    onClick={async () => {
                      "use server"
                      await signOut({ redirectTo: '/' });
                    }}
                  >
                    Log out
                  </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>


                
              

            </div>


          </>
        ) : (
          <>
            <div className='flex gap-4'>
              <Link href="/"> Features</Link>
              <Link href="/"> Pricing</Link>
            </div>

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


      </nav>

    </header>
  )
}
export default Navbar