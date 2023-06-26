import React, { useState } from 'react';
import styles from '../dealbreaker/dealbreaker.module.css';
import games from '../../gamesData';
import SwiperCard from '@/components/SwiperCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function Bonding() {
  const dealbreakerCards = games.find((game) => game.id === '4');
  const [cards, setCards] = useState(dealbreakerCards.cards);
  const [isSwedish, setIsSwedish] = useState(true);

  const toggleLanguage = () => {
    setIsSwedish((prevState) => !prevState);
    setCards((prevState) =>
      isSwedish ? dealbreakerCards.cardsEng : dealbreakerCards.cards
    );
  };

  const removeCard = () => {
    setCards((prevState) => prevState.slice(0, -1));
  };

  const manualSwipe = () => {
    removeCard();
  };

  return (
    <>
      <div className={styles.cardContainer}>
        <AnimatePresence>
          {cards.map((card, index) => (
            <SwiperCard
              game={'TESS TALK'}
              key={card.id}
              card={card}
              cardcontent={card.text}
              index={index}
              onDragEnd={removeCard}
            />
          ))}
        </AnimatePresence>

        {cards.length - 1 && (
          <motion.button
            onClick={manualSwipe}
            className={styles.btnNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            NEXT
          </motion.button>
        )}
      </div>

      <button onClick={toggleLanguage}>Toggle Language</button>
    </>
  );
}
