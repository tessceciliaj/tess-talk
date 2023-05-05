import Layout from '../components/Layout';
import '@/styles/globals.css';
import Link from 'next/link';
import styles from '../components/layout.module.css'
import { K2D } from 'next/font/google';

const k2d = K2D({ subsets: ['latin'], weight: '500' });

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Link href="/">
        <h1 className={`${styles.title} ${k2d.className}`}>
          PRE<br />PARTY
        </h1>
      </Link>
      <Component {...pageProps} />
    </Layout>
  );
}
