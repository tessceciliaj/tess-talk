import Layout from "../components/layout.jsx";
import "@/styles/globals.css";
import Link from "next/link";
import styles from "../components/layout.module.css";
import { NextIntlClientProvider } from "next-intl";

export default function App({ Component, pageProps }) {
  return (
    <NextIntlClientProvider messages={pageProps.messages}>
      <Layout>
        <Link href="/">
          <h1 className={styles.title}>
            TESS
            <br />
            TALK
          </h1>
        </Link>
        <Component {...pageProps} />
      </Layout>
    </NextIntlClientProvider>
  );
}
