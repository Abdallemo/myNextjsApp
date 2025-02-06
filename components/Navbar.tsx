import Link from 'next/link'
import { auth} from "@/auth"
import ModeToggle from './toggle-mod';
import Profile from './profile';

import { CommandDialogDemo } from './mycommand';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
// import { SidebarTrigger } from './ui/sidebar';

const Navbar = async () => {
  const session = await auth();
  return (
    <header className='px-5 py-3  shadow-lg shadow-inherit font-serif '>
      <nav className=' flex justify-between text-2xl items-center '>
        <div>
          {/* <SidebarTrigger /> */}
          <Link href="/">
            {/* <Image src='/logo.png' alt='logo' width={90} height={24}></Image> */}
            Logo
          </Link>
        </div>
        {session && session?.user ? (
          <>
            <div className='flex gap-4'>
              <Link href="/posts/newpost"> Create</Link>
              <Link href="/posts"> All Post</Link>
            </div>
            <div className='flex items-center gap-3 '>

              <CommandDialogDemo />

              <DropdownMenu >
                <DropdownMenuTrigger >
                  <Profile username={session?.user.name} avatar={session?.user.image} />
                </DropdownMenuTrigger>

                <DropdownMenuContent className='w-32'>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link href="/profile">
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <Separator />
                  <DropdownMenuItem

                  >
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <ModeToggle />




            </div>


          </>
        ) : (
          <>
            <div className='flex gap-4'>
              <Link href="/"> Features</Link>
              <Link href="/"> Pricing</Link>
            </div>
            {/* 
            <form className='flex items-center gap-1'
              action={async () => {
                "use server"
                await signIn("github")
              }}
            >
              <Button type="submit" >
                <Github /> Login with Gitub
              </Button>
            </form> */}
            <Link href="/login">
              <Button >
                Login
              </Button></Link>

            <ModeToggle />


          </>
        )}


      </nav>

    </header>
  )
}
export default Navbar