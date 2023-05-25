import React from 'react'
import { motion, useDragControls } from "framer-motion"
import styles from './swiperCard.module.css'
import { useState } from "react";

const SwiperCard = ({
  card,
  removeCard,
  active,
  game,
  cardcontent,
  index
}) => {
  const [leaveX, setLeaveX] = useState(0);
  const [leaveY, setLeaveY] = useState(0);

  const onDragEnd = (e, info) => {
    if (info.offset.y < -100) {
      setLeaveY(-2000);
      removeCard(card);
      return;
    }
    if (info.offset.x > 100 ) {
      setLeaveX(1000);
      removeCard(card);
    }
    if (info.offset.x < -100) {
      setLeaveX(-1000);
      removeCard(card);
    }
  };

  return (
    <>
      {/* {active ? ( */}
      <motion.div
        className={styles.card}
        drag={true}
        //dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        onDragEnd={onDragEnd}
        initial={{ scale: 0, translateX: -500 }}
        whileDrag={{ scale: 1.05 }}
        animate={{
          translateX: 0,
          scale: 1,
          rotate: `${card.text.length % 2 === 0 ? 4 : -4}deg`,
        }}
        exit={{
          x: leaveX,
          y: leaveY,
          opacity: 0,
          scale: 0.5,
          transition: { duration: 0.5 },
        }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
      >
        <h3>{game}</h3>
        <h2>{cardcontent}</h2>
      </motion.div>
      {/* ) : (
        <div
          className={`${styles.card} ${card.text.length % 2 === 0 ? 'rotate-6' : '-rotate-6'}`}
        >
          <h3>{game}</h3>
          <h2>{cardcontent}</h2>
        </div>
      )} */}
    </>
  );
};

export default SwiperCard;

