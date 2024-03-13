// pages/_app.js or pages/_app.jsx

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Other meta tags, links, and scripts can be added here */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
