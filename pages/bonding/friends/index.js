import React, { useState } from 'react';
import styles from '../bonding.module.css';
import games from '../../../gamesData';
import SwiperCard from '@/components/SwiperCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function bonding() {
  const bondingCards = games.find((game) => game.id === '6');
  const cards = bondingCards.friendCards;
  let [card, setCard] = useState(cards);

  const activeIndex = cards.length - 1;

  const removeCard = (oldCard) => {
    let card = cards.find((card) => card.id === oldCard.id);

    if (!card) {
      console.log('no card found');
    }

    const newData = cards.filter((card) => card.id !== oldCard.id);
    setCard(newData);
  };

  return (
    <>
      <div className={styles.cardContainer}>
        <AnimatePresence>
          {cards.map((cards, index) => (
            <SwiperCard
              game={'DEALBREAKER'}
              key={cards.id}
              active={index === activeIndex}
              removeCard={removeCard}
              card={cards}
              cardcontent={cards.text}
              index={index}
            />
          ))}
        </AnimatePresence>

        {cards.length - 1 && (
          <motion.button
            onClick={removeCard}
            className={styles.btnNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            NEXT
          </motion.button>
        )}
      </div>
    </>
  );
}
