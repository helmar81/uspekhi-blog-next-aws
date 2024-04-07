import "nextra-theme-blog/style.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/main.css";

import { GoogleTagManager } from '@next/third-parties/google'
 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>

   

    
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GMBT9699CL"></script>
     
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Philippines"
          href="https://uspekhi.web.app"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />

      <GoogleTagManager gtmId="GTM-54C2PTQJ" />

     


    </>
  );
}
