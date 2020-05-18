import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import NoteCard from './NoteCard';

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

export default compose(
  firestoreConnect(() => ['gifts']),
  connect((state) => ({
    giftList: state.firestore.data['gifts']
  }))
)(NoteCardList);