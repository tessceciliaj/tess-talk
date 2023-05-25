import React, { useState } from 'react';
import styles from '../bonding.module.css';
import games from '../../../gamesData';
import SwiperCard from '@/components/SwiperCard';
import { motion } from 'framer-motion';

export default function bonding() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const bondingCards = games.find((game) => game.id === '6');
  const cards = bondingCards.strangerCards;

  if (!bondingCards) {
    return <p>No more bonding cards found!</p>;
  }

  const handleNextCard = () => {
    setCurrentCardIndex(currentCardIndex + 1);
  };

  return (
    <>
      <>
        <div className={styles.cardContainer}>
          {cards.length > 0 && currentCardIndex < cards.length && (
            <SwiperCard
              game={'BONDING'}
              cardcontent={cards[currentCardIndex]}
              key={cards[currentCardIndex]}
              handleNextCard={handleNextCard}
            />
          )}
          {currentCardIndex < cards.length - 1 && (
            <motion.button
              onClick={handleNextCard}
              className={styles.btnNext}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              NEXT
            </motion.button>
          )}
        </div>
      </>
    </>
  );
}
