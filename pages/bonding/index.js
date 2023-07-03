import React from 'react';
import Link from 'next/link';
import styles from './bonding.module.css';

export default function Bonding() {


  return (
    <div className={styles.gamesList}>
      <h2 className={styles.subTitle}>How well do we know eachother?</h2>
      <div className={styles.gamesContainer}>
        <Link href="/bonding/strangers">
          <button className={styles.games}>We Are Strangers</button>
        </Link>
        <Link href="/bonding/friends">
          <button className={styles.games}>We are not really strangers</button>
        </Link>
        <Link href="/bonding/bestfriends">
          <button className={styles.games}>We are best friends</button>
        </Link>
        <Link href="/bonding/couples">
          <button className={styles.games}>We are in love.</button>
        </Link>
      </div>
    </div>
  );
}
