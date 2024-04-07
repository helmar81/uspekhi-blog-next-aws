import "nextra-theme-blog/style.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/main.css";

import { GoogleTagManager } from '@next/third-parties/google'
 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
<<<<<<< HEAD
    
      <GoogleTagManager gtmId="GTM-54C2PTQJ" />
=======

          <GoogleAnalytics trackPageViews />

<GoogleAnalytics gtagUrl="https://www.googletagmanager.com/gtag/js?id=G-GMBT9699CL/gtag.js"/>

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GMBT9699CL"></script>

>>>>>>> e5011c4aa618a075f5595c485ea8182c5b440df5
        
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
    </>
  );
}
