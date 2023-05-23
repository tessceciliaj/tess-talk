import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './dealbreaker.module.css';
import games from '../../gamesData';
import { motion } from "framer-motion"

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
        <motion.div
        drag
        whileDrag={{ scale: 1.1}}
        dragConstraints={{
          top: 0,
          bottom: 0
        }}
        dragElastic={1.1}
        onDragEnd={(event, info) => {
          if(info.offset.y || info.offset.x > 200) {
            handleNextCard()
          }
        }}
        key={cards[currentCardIndex]} 
        className={styles.card}>
          <h3>DEALBREAKER</h3>
          <h2>{cards[currentCardIndex]}</h2>
        </motion.div>
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






