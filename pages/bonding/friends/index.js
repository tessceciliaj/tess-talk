import React, { useState } from 'react';
import styles from '../bonding.module.css';
import games from '../../../gamesData';
import { motion } from 'framer-motion';

export default function bonding() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const bondingCards = games.find((game) => game.id === '6');
  const cards = bondingCards.friendCards;

  if (!bondingCards) {
    return <p>No more bonding cards found!</p>;
  }

  const handleNextCard = () => {
    setCurrentCardIndex(currentCardIndex + 1);
  };

  return (
    <>
      {cards.length > 0 && currentCardIndex < cards.length && (
        <motion.div
          key={cards[currentCardIndex]}
          className={styles.card}
          drag
          whileDrag={{ scale: 1.05 }}
          dragConstraints={{
            top: 0,
            bottom: 0,
          }}
          dragElastic={0.8}
          onDragEnd={(event, info) => {
            if (info.offset.y || info.offset.x > 200) {
              handleNextCard();
            }
          }}
        >
          <h3>BONDING</h3>
          <h2>{cards[currentCardIndex]}</h2>
        </motion.div>
      )}
      {currentCardIndex < cards.length - 1 && (
        <button onClick={handleNextCard} className={styles.btnNext}>
          NEXT
        </button>
      )}
    </>
  );
}
