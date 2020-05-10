import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import NoteCard from './NoteCard';

const NoteCardList = () => {

  useFirestoreConnect('gifts');
  const giftList = useSelector(state => state.firestore.data['gifts']);

  const lavendar = '#e6d7f4';
  const gold = '#ffd480';
  const teal = '#a6e8e6';
  const backgroundColors = [lavendar, gold, teal];
  // const [currentColor, setCurrentColor] = useState(0);
  // const nextColor = () => {
  //   let nextColor;
  //   console.log(backgroundColors.length);
  //   if (currentColor < backgroundColors.length - 1) {
  //     nextColor = currentColor + 1;
  //   } else {
  //     nextColor = 0;
  //   }
  //   console.log(nextColor);
  //   setCurrentColor(nextColorIndex);
  // }

  if (giftList) {
    return (
      <div className='container row'>
        <div className='col s12 m6 offset-m3'>
          {Object.keys(giftList).map(gift => {
            if (giftList[gift] && giftList[gift].public) {
              return (
                <NoteCard
                  key={gift}
                  color={lavendar}
                  note={giftList[gift].note}
                  name={giftList[gift].name}
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