import "../styles/site.scss";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { ProtectedComponent } from "../components/ProtectedComponent";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <link rel="shortcut icon" href="/flyt_logo.ico" />
      </Head>
      <ProtectedComponent>
        <Component {...pageProps} />
      </ProtectedComponent>
    </SessionProvider>
  );
}
