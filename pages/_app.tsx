import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Head from 'next/head';
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
      <Head>
        <title>Endurnæring - Næringarráðgjöf</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700;900&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="description" content="Sérniðin næringarráðgjöf" />
        <meta name="keywords" content="næringarráðgjöf, næringarfræðingur, næring" />
      </Head>
      <Header />
        <Component {...pageProps} />
      <Footer />
  </ThemeProvider>
}

export default Endurnaering
