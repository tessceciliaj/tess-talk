import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './bonding.module.css';
import games from '../../gamesData';

export default function bonding() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const bondingCards = games.find((game) => game.id === '6');
  const cards = bondingCards.cards;

  if (!bondingCards) {
    return <p>No more bonding cards found!</p>;
  }

  const handleNextCard = () => {
    setCurrentCardIndex(currentCardIndex + 1);
  };

  return (
    <>
      {cards.length > 0 && currentCardIndex < cards.length && (
        <div key={cards[currentCardIndex]} className={styles.card}>
          <h3>BONDING</h3>
          <h2>{cards[currentCardIndex]}</h2>
        </div>
      )}
      {currentCardIndex < cards.length - 1 && (
        <button onClick={handleNextCard} className={styles.btnNext}>
          NEXT
        </button>
      )}
    </>
  );
}
