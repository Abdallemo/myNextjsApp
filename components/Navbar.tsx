import Link from 'next/link'
import { auth } from "@/auth"
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
import { singOutAction } from '@/lib/authActions/auth_actions';
// import { SidebarTrigger } from './ui/sidebar';

const Navbar = async () => {
  const session = await auth();
  return (
    <header className='px-5 py-3  shadow-xl  font-serif fixed top-0 w-full z-10 bg-background/95'>
      <nav className=' flex justify-between text-2xl items-center container '>
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
                    onClick={singOutAction}
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
              <Link href="#pricing"> Pricing</Link>
            </div>


            <div className='flex flex-row items-center'>
              <Link href="/login">
                <Button >
                  Login
                </Button></Link>


              <ModeToggle />
            </div>


          </>
        )}


      </nav>

    </header>
  )
}
export default Navbar