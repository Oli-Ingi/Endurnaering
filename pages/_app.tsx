import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import '../styles/globals.css'
import { mainTheme } from "../styles/themes";
import Header from '../comps/Entities/Header/Header'
import HeaderContent from '../content/Header'
import Footer from '../comps/Entities/Footer/Footer'
import FooterContent from '../content/Footer'

function Endurnaering({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={mainTheme}>
    <>
      <Header {...HeaderContent} shadow />
      <Component {...pageProps} />
      <Footer {...FooterContent} smallOrgInfo />
    </>
  </ThemeProvider>
}

export default Endurnaering
