import React, { useState, useEffect } from 'react';
import styles from '../dealbreaker/dealbreaker.module.css';
import games from '../../gamesData';
import SwiperCard from '@/components/SwiperCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';

export default function Tesstalk() {
  
  const card = games.find((game) => game.id === '4');
  const [cards, setCards] = useState (card.cards);
  const [isSwedish, setIsSwedish] = useState(true);
  const shuffle = (array) => {
		return array.sort(() => 0.5 - Math.random())
	}

  const toggleLanguage = () => {
    setIsSwedish((prevState) => !prevState);
    setCards((prevState) =>
      isSwedish ? shuffle(card.cardsEng) : shuffle(card.cards)
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

      <button styles={styles.globe} onClick={toggleLanguage}><Globe  /></button>
    </>
  );
}
