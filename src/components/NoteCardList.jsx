import React from 'react';
import { connect, useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import NoteCard from './NoteCard';

const NoteCardList = () => {
  useFirestoreConnect('gifts');
  const giftList = useSelector(state => state.firestore.data['gifts']);
  
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

  if (giftList) {
    return (
      <div className='container row'>
        <div className='col s12 m6 offset-m3'>
          {Object.keys(giftList).map(giftId => {
            if (giftList[giftId] && giftList[giftId].public) {
              return (
                <NoteCard
                  key={giftId}
                  gift={giftList[giftId]}
                  color={backgroundColors[getCurrentColor()]}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default compose(connect())(NoteCardList);