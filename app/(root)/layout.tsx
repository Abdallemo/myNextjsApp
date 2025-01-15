import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider"
export default function Layout({children}:Readonly<{children:React.ReactNode}>){
    return(
        <main className="font-serif">
            <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
              <Navbar/>
            {children}
          </ThemeProvider>
        </main>
    )
}