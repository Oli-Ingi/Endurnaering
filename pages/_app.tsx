import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import '../styles/globals.css'
import { mainTheme } from "../styles/themes";
import MainLayout from "../components/layouts/mainLayout/MainLayout";

function Endurnaering({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={mainTheme}>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </ThemeProvider>
}

export default Endurnaering
