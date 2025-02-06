import Navbar from "./_component/Navbar";

export default function DashboardLayout({children}:Readonly<{children:React.ReactNode}>)
{
    return(
       <>
        <Navbar/>
        {children}
       </>
    )
}