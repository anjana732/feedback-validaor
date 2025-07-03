import { Button } from "@/components/ui/button";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Homepage from "./components/pages/homepage";

function App() {

  return (
    <>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Homepage />
      </NextThemesProvider>
    </>
  )
}

export default App
