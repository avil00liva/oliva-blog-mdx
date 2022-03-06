import "../styles/globals.css"
import { ThemeProvider } from "next-themes"
import Headernav from "../src/components/Header"
import Footer from "../src/components/Footer"

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider enableSystem={true} attribute="class">
        <Headernav />  
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
  )
}

export default MyApp
