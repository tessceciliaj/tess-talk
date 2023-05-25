import React, { useState } from 'react';
import styles from './dealbreaker.module.css';
import games from '../../gamesData';
import SwiperCard from '@/components/SwiperCard';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

export default function dealbreaker() {
  const dealbreakerCards = games.find((game) => game.id === '5');
  let cards = dealbreakerCards.cards;
  let [card, setCard] = useState(cards);

  const activeIndex = cards.length - 1;

   const removeCard = (oldCard) => {
     let card = cards.find((card) => card.id === oldCard.id);

     if (!card) {
      console.log("no card found")
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

