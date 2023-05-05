import Head from 'next/head'
import { K2D } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import background from '../public/maxim-berg-ENIaPZytqzE-unsplash.jpg'
import games from '../gamesData.js'

const k2d = K2D({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <>
      <Head>
        <title>Pre-party</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${styles.main} ${k2d.className}`}
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <h1 className={styles.title}>
          PRE
          <br/>PARTY
        </h1>
        <ul className={styles.gamesList}>
          {games.map(game => (
            <li key={game.id} className={styles.games}>{game.name}</li>
          ))}
        </ul>
      </main>
    </>
  );
}