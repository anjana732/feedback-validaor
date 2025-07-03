import { Button } from "@/components/ui/button";
import { ThemeProvider as NextThemesProvider } from "next-themes";

function App() {

return(
  <>
      <NextThemesProvider attribute="class" defaultTheme="dark">

    <h3 className='text-red-600'>Hello</h3>
    {/* <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div> */}
    </NextThemesProvider>
  </>
)
}

export default App
