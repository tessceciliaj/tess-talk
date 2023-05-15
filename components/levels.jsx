import React from 'react'
import styles from './levels.module.css'

export default function levels() {
  return (
    <div>
      
      <ul className={styles.gamesList}>
        <h2 className={styles.subTitle}>How well do you know eachother?</h2>
        <li className={styles.games}>We Are Strangers</li>
        <li className={styles.games}>We are not really strangers.</li>
        <li className={styles.games}>We are best friends.</li>
      </ul>
    </div>
  )
}
