import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './dealbreaker.module.css';
import games from '../../gamesData';
import SwiperCard from '@/components/SwiperCard';
import { motion } from 'framer-motion';

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
    <div className={styles.cardContainer}>
      {cards.length > 0 && currentCardIndex < cards.length && (
        <SwiperCard 
        game={"DEALBREAKER"} 
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
        whileTap={{ scale: 0.9 }}>
          NEXT
        </motion.button>
      )}
      </div>
    </>
  );
}






