import Layout from '../components/layout.jsx';
import '@/styles/globals.css';
import Link from 'next/link';
import styles from '../components/layout.module.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Link href="/">
        <h1 className={styles.title}>
          PRE<br />PARTY
        </h1>
      </Link>
      <Component {...pageProps} />
    </Layout>
  );
}
