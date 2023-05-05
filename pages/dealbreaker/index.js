import React from 'react';
import dynamic from 'next/dynamic';
import styles from './dealbreaker.module.css';
import games from '../../gamesData';

const TinderCard = dynamic(() => import('react-tinder-card'), { ssr: false });

const onSwipe = (direction) => {
  console.log('You swiped: ' + direction);
};

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + ' left the screen');
};

export default function dealbreaker() {
  // Get the dealbreakerCards object with an id of 5
  const dealbreakerCards = games.find((game) => game.id === '5');

  if (!dealbreakerCards) {
    return <p>No more dealbreaker cards found!</p>;
  }

  // Map over the cards array and create a TinderCard component for each card
  return (
    <>
      {dealbreakerCards.cards.map((card, index) => (
        <TinderCard
          key={index}
          className={styles.card}
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen('fooBar')}
          preventSwipe={['right', 'left']}
        >
          <h3 styles={styles.dealbreaker}>{card}</h3>
        </TinderCard>
      ))}
    </>
  );
}
