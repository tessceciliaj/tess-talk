import React, { useState } from 'react';
import styles from './dealbreaker.module.css';
import games from '../../gamesData';
import SwiperCard from '@/components/SwiperCard';
import { AnimatePresence, motion } from 'framer-motion';

export default function dealbreaker() {
  const dealbreakerCards = games.find((game) => game.id === '5');
  let cards = dealbreakerCards.cards;
  let [card, setCard] = useState(cards);
  const [leaveX, setLeaveX] = useState(0);
  const [leaveY, setLeaveY] = useState(0);
  const [moveRight, setMoveRight] = useState(0)

  const activeIndex = cards.length - 1;

//   const defaultAnimation = {
//     "point": {
//         "x": 465.27777099609375,
//         "y": 11.11111068725586
//     },
//     "delta": {
//         "x": 0,
//         "y": 0
//     },
//     "offset": {
//         "x": 268.05555725097656,
//         "y": -333.3333168029785
//     },
//     "velocity": {
//         "x": 523.911341363062,
//         "y": -619.1678745568937
//     }
// }

   const removeCard = (oldCard) => {
     let card = cards.find((card) => card.id === oldCard.id);
    

     if (!card) {
      console.log("no card found")
     }

     const newData = cards.filter((card) => card.id !== oldCard.id);
     setCard(newData);
     console.log(oldCard)
   };

   const manualSwipe = () => {
    setMoveRight(1000)
    //removeCard(cards[activeIndex])
   }

  //  const onDragEnd = (e, info) => {
  //   console.log(info)
  //   if (info.offset.y < -100) {
  //     setLeaveY(-2000);
  //     removeCard(cards[activeIndex]);
  //     return;
  //   }
  //   if (info.offset.x > 100 ) {
  //     setLeaveX(1000);
  //     removeCard(cards[activeIndex]);
  //   }
  //   if (info.offset.x < -100) {
  //     setLeaveX(-1000);
  //     removeCard(cards[activeIndex]);
  //   }
  // };
 
  return (
    <>
      <div className={styles.cardContainer}>
        
          <AnimatePresence>
            {cards.map((cards, index) => (
              <SwiperCard
              moveRight={moveRight}
                game={'DEALBREAKER'}
                key={cards.id}
                card={cards}
                cardcontent={cards.text}
                index={index}
                // onDragEnd={onDragEnd}
                leaveX={leaveX}
                leaveY={leaveY}
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

