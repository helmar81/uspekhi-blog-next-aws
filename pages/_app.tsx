import "nextra-theme-blog/style.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/main.css";

import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>

          <GoogleAnalytics trackPageViews />

<GoogleAnalytics gtagUrl="https://www.googletagmanager.com/gtag/js?id=G-GMBT9699CL/gtag.js"/>

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
    </>
  );
}
