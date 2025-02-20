import Link from 'next/link'
import { auth } from "@/auth"
import ModeToggle from '@/components/toggle-mod';
import Profile from '@/components/profile';

import { CommandDialogDemo } from '@/components/mycommand';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { singOutAction } from '@/lib/authActions/auth_actions';


const Navbar = async () => {
    const session = await auth();
    return (
        <header className='px-5 py-3  shadow-xl  font-serif fixed top-0 w-full z-10 bg-background/95'>
            <nav className=' flex justify-between text-2xl items-center container '>
                <div>
                    {/* <SidebarTrigger /> */}
                    <Link href="/">

                        Logo
                    </Link>
                </div>

                <>
                    <div className='flex gap-4'>
                        <Link href="/posts/newpost"> Create New Post</Link>
                        <Link href="/posts"> Posts</Link>
                        <Link href="#pricing"> Analytics </Link>
                    </div>
                    <div className='flex items-center gap-3 '>

                        <CommandDialogDemo />

                        <DropdownMenu >
                            <DropdownMenuTrigger >
                                <Profile username={session?.user!.name ?? 'Guest'} avatar={session?.user!.image} />
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className='w-32'>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <Link href="/profile">
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                </Link>
                                <Link href="/posts">
                                    <DropdownMenuItem>Dashbard</DropdownMenuItem>
                                </Link>

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






            </nav>

        </header>
    )
}
export default Navbar