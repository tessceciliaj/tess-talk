import React, { useState } from 'react';
import styles from './dealbreaker.module.css';
import games from '../../gamesData';
import SwiperCard from '@/components/SwiperCard';
import { AnimatePresence, motion } from 'framer-motion';

export default function Dealbreaker() {
  const dealbreakerCards = games.find((game) => game.id === '5');
  const cards = dealbreakerCards.cards;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextCard = () => {
    activeIndex(setActiveIndex + 1);
  };

  return (
    <div className={styles.cardContainer}>
      <AnimatePresence>
        {cards.map((card, index) => (
          <SwiperCard
            game={'DEALBREAKER'}
            key={card.id}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            card={card}
            index={index}
          />
        ))}
      </AnimatePresence>

      {cards.length > 1 && (
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
  );
}
