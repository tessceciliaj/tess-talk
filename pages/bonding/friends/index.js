import React, { useState } from 'react';
import styles from '../bonding.module.css';
import games from '../../../gamesData';
import SwiperCard from '@/components/SwiperCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function bonding() {
 const dealbreakerCards = games.find((game) => game.id === '6');
 let dataCards = dealbreakerCards.friendCards;

 let [cards, setCard] = useState(dataCards);

 const removeCard = () => {
   setCard((prevState) => prevState.slice(0, -1));
 };

 const manualSwipe = () => {
   removeCard();
 };

 return (
   <>
     <div className={styles.cardContainer}>
       <AnimatePresence>
         {cards.map((cards, index) => (
           <SwiperCard
             game={'BONDING QUESTIONS'}
             key={cards.id}
             card={cards}
             cardcontent={cards.text}
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
   </>
 );
}
