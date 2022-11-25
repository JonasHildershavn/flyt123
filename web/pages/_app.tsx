import "../styles/site.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: any) {
  return (
    <SessionProvider session={session}>
      <Head>
        <link rel="shortcut icon" href="/flyt_logo.ico" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
