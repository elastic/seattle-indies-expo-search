import Head from 'next/head';
import App from './App';

const IndexPage = () => (
  <>
    <Head>
      <title>Seattle Indies Expo - Game Search</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
        crossOrigin=""
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Rubik:300,400,400i,500,700,900&display=fallback"
      />
      <link
        rel="icon"
        type="image/png"
        href="./static/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="icon"
        type="image/png"
        href="./static/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="./static/favicon-96x96.png"
        sizes="96x96"
      />
    </Head>

    <App />
  </>
);

export default IndexPage;
