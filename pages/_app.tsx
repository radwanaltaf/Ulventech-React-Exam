import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import Head from "next/head";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component className="pe-5" {...pageProps} />
    </>
  ) 
}

export default MyApp
