// import the Head component for appending elements to the head of the page
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.css';
import { FC } from 'react';
import '../styles/globals.css';

interface IMyApp {
  Component: FC;
  pageProps: any;
}
function MyApp({ Component, pageProps }: IMyApp) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
