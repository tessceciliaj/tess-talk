import React from 'react'
import { motion, useDragControls } from "framer-motion"
import styles from './swiperCard.module.css'
import { useState } from "react";

const SwiperCard = ({
  card,
  game,
  index,
  activeIndex={activeIndex},
  setActiveIndex={setActiveIndex}
}) => {

  return (
    <>
      <motion.div
        className={styles.card}
        drag={true}
        initial={{ scale: 0, translateX: -500 }}
        whileDrag={{ scale: 1.05 }}
        animate={{
          translateX: 0,
          scale: 1,
          rotate: `${card.text.length % 2 === 0 ? 4 : -4}deg`,
        }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
      >
        <h3>{game}</h3>
        <h2>{card.text}</h2>
      </motion.div>
    </>
  );
};

export default SwiperCard;

