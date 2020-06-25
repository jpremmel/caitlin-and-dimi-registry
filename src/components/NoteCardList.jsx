import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import NoteCard from './NoteCard';
import moment from 'moment';

const NoteCardList = ({ giftList }) => {
  
  const backgroundColors = ['#a6e8e6', '#e6d7f4', '#ffe6b3' ];
  let currentColor = 0;
  const getCurrentColor = () => {
    if (currentColor < backgroundColors.length - 1) {
      currentColor++;
    } else {
      currentColor = 0;
    }
    return currentColor;
  }

  const sortCards = (unsortedCards) => {
    const recentCards = [];
    const randomlySortedCards = [];
    const oneHourAgo = moment().subtract(1, 'hours');
    Object.keys(unsortedCards).map(cardId => {
      if (unsortedCards[cardId].public) {
        if (moment(unsortedCards[cardId].timestamp).isAfter(oneHourAgo)) {
          recentCards.push(unsortedCards[cardId]);
        } else {
          randomlySortedCards.push(unsortedCards[cardId]); //otherwise add it to the randomlySortedCards array
        }
      }
    });
    let i, j, k;  //Fisher Yates Method to randomly sort cards
    for (i = randomlySortedCards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * i);
      k = randomlySortedCards[i];
      randomlySortedCards[i] = randomlySortedCards[j];
      randomlySortedCards[j] = k;
    }
    return recentCards.concat(randomlySortedCards);
  };

  if (giftList) {
    const sortedCards = sortCards(giftList);
    return (
      <div className='container row'>
        <div className='col s12 m6 offset-m3'>
          {sortedCards.map((card, index) => {
            return (
              <NoteCard
                key={index}
                gift={card}
                color={backgroundColors[getCurrentColor()]}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default compose(
  firestoreConnect(() => ['gifts']),
  connect((state) => ({
    giftList: state.firestore.data['gifts']
  }))
)(NoteCardList);