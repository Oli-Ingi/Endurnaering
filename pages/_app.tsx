import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import '../styles/globals.css'
import { mainTheme } from "../styles/themes";
// import Header from '../components/entities/Header/Header'
// import HeaderContent from '../content/Header'
// import Footer from '../components/entities/Footer/Footer'
// import FooterContent from '../content/Footer'
import Header from '../domain/Header/Header-is'
import Footer from '../domain/Footer/Footer-is'


function Endurnaering({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={mainTheme}>
    <>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </>
  </ThemeProvider>
}

export default Endurnaering
