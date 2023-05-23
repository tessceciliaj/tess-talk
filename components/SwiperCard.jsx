import React from 'react'
import { motion } from "framer-motion"
import styles from './swiperCard.module.css'

const SwiperCard = ({game, cardcontent, handleNextCard}) => {

  return (
    <motion.div
    drag
    whileDrag={{ scale: 1.1}}
    dragConstraints={{
      top: 0,
      bottom: 0
    }}
    dragElastic={1}
    onDragEnd={(event, info) => {
      if(info.offset.y > 10 || info.offset.x > 10) {
        handleNextCard()
      }
    }} 
    className={styles.card}>
      <h3>{game}</h3>
      <h2>{cardcontent}</h2>
    </motion.div>
  )
}

export default SwiperCard
