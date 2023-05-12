import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './dealbreaker.module.css';
import games from '../../gamesData';

export default function dealbreaker() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const dealbreakerCards = games.find((game) => game.id === '5');
  const cards = dealbreakerCards.cards;

  if (!dealbreakerCards) {
    return <p>No more dealbreaker cards found!</p>;
  }

  const handleNextCard = () => {
      setCurrentCardIndex(currentCardIndex + 1);
  };


  return (
    <>
      {cards.length > 0 && currentCardIndex < cards.length && (
        <div key={cards[currentCardIndex]} className={styles.card}>
          <h3>DEALBREAKER</h3>
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






