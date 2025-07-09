import { Button } from "@/components/ui/button";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Homepage from "./components/pages/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SentimentAnalyser } from "./components/layouts/SentimentAnalyser";

function App() {

  return (
    <>
      <NextThemesProvider attribute="class" defaultTheme="dark">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/feedback" element={<SentimentAnalyser data="I am good" />} />
        </Routes>
      </Router>
    </NextThemesProvider>
  </>
  )
}

export default App
