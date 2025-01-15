import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({children}:Readonly<{children:React.ReactNode}>){
    return(
        <SidebarProvider>
      <AppSidebar />

        <main className="font-serif w-full">
            <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            
            >
                  <SidebarTrigger />
              <Navbar/>
            {children}
          </ThemeProvider>
        </main>
        </SidebarProvider>
    )
}