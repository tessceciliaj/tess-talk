import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./swiperCard.module.css";

const SwiperCard = ({ card, game, cardcontent, index, onDragEnd }) => {
  const [exitDirection, setExitDirection] = useState(1);

  const [dragControls, setDragControls] = useState({ x: 0, y: 0 });

  const handleDragEnd = (event, info) => {
    setExitDirection(Math.sign(info.velocity.x));
    setDragControls({
      x: info.velocity.x,
      y: info.velocity.y,
    });

    if (onDragEnd) {
      onDragEnd();
    }
  };

  return (
    <>
      <motion.div
        className={styles.card}
        drag={true}
        onDragEnd={handleDragEnd}
        initial={{ scale: 0, translateX: -500 }}
        whileDrag={{ scale: 1.05 }}
        animate={{
          translateX: 0,
          scale: 1,
          rotate: `${card.text.length % 2 === 0 ? 4 : -4}deg`,
        }}
        exit={{
          x: dragControls.x,
          y: dragControls.y,
          opacity: 0,
          scale: 0.5,
          transition: { duration: 1 },
          translateX: 500 * exitDirection,
        }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
      >
        <h3>{game}</h3>
        <h2>{cardcontent}</h2>
      </motion.div>
    </>
  );
};

export default SwiperCard;
