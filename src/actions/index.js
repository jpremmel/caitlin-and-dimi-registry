export const submitGiftForm = ({ firestore }, gift) => {
  console.log('Adding gift to firestore: ', gift);
  Object.keys(gift.funds).map(fund => {
    delete gift.funds[fund].style;
    delete gift.funds[fund].label;
  });
  return (dispatch, getState) => {
    firestore
      .collection('gifts')
      .add(gift);

      // .then(() => {
      //   dispatch({ type: 'ADD_GIFT' });
      // })
      // .catch(err => {
      //   console.log('Error: ', err);
      //   dispatch({ type: 'ADD_GIFT_ERROR', err });
      // });
      
  };
};