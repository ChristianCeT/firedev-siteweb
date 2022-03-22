import "../styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Head from 'next/head'
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>FireDev</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* windows phone */}
        <meta name="msapplication-navbutton-color" content="#009879" />
        {/* safari */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
