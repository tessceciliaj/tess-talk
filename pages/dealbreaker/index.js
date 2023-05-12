import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './dealbreaker.module.css';
import games from '../../gamesData';

const TinderCard = dynamic(() => import('react-tinder-card'), { ssr: false });

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + ' left the screen');
};

export default function dealbreaker() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const dealbreakerCards = games.find((game) => game.id === '5');
  const cards = dealbreakerCards.cards;

  if (!dealbreakerCards) {
    return <p>No more dealbreaker cards found!</p>;
  }

    const handleSwipe = (direction, index) => {
      console.log(`Card ID: ${cards.index}, Direction: ${direction}`);

      if (direction == 'up') {
        console.log('up if works');
      }

      setCurrentCardIndex(currentCardIndex + 1);
    };

  const handleNextCard = () => {
      setCurrentCardIndex(currentCardIndex + 1);
  };


  // Map over the cards array and create a TinderCard component for each card
  return (
    <>
      {dealbreakerCards.cards.map((card) => (
        <TinderCard
          key={card}
          className={styles.card}
          onSwipe={handleSwipe}
          onCardLeftScreen={() => onCardLeftScreen('fooBar')}
        >
          <h3>DEALBREAKER</h3>
          <h2>{card}</h2>
        </TinderCard>
      ))}
     {/*<button onClick={handleNextCard} className={styles.btnNext}>NEXT</button> */} 
    </>
  );
}
