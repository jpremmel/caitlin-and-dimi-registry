export const submitGiftForm = ({ firestore }, gift) => {
  Object.keys(gift.funds).map(fund => {
    delete gift.funds[fund].style;
    delete gift.funds[fund].label;
  });
  const timestampedGift = {
    ...gift,
    timestamp: new Date().toUTCString()
  }
  console.log('Adding gift to firestore: ', timestampedGift);
  return (dispatch, getState) => {
    firestore
      .collection('gifts')
      .add(timestampedGift);

      // .then(() => {
      //   dispatch({ type: 'ADD_GIFT' });
      // })
      // .catch(err => {
      //   console.log('Error: ', err);
      //   dispatch({ type: 'ADD_GIFT_ERROR', err });
      // });
      
  };
};