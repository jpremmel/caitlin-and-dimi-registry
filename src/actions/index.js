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

    const fundTotals = getState().firestore.data.totals;

    const newHoneyMoonTotal = fundTotals.funds.honeymoon + parseInt(timestampedGift.funds.honeymoon.amount);
    const newLoansTotal = fundTotals.funds.loans + parseInt(timestampedGift.funds.loan.amount);
    const newHomeTotal = fundTotals.funds.home + parseInt(timestampedGift.funds.home.amount);
    const newTherapyTotal = fundTotals.funds.therapy + parseInt(timestampedGift.funds.therapy.amount);

    if (newHoneyMoonTotal) {
      firestore
        .collection('totals')
        .doc('funds')
        .set({ honeymoon: newHoneyMoonTotal }, { merge: true })
        .then(() => {
          console.log('Honeymoon amount updated in firestore.');
        })
        .catch((err) => {
          console.log('Error updating honeymoon amount in firestore: ', err);
        })
    }

    if (newLoansTotal) {
      firestore
      .collection('totals')
      .doc('funds')
      .set({ loans: newLoansTotal }, { merge: true })
      .then(() => {
        console.log('Loans amount updated in firestore.');
      })
      .catch((err) => {
        console.log('Error updating loans amount in firestore: ', err);
      })
    }

    if (newHomeTotal) {
      firestore
      .collection('totals')
      .doc('funds')
      .set({ home: newHomeTotal }, { merge: true })
      .then(() => {
        console.log('Home amount updated in firestore.');
      })
      .catch((err) => {
        console.log('Error updating home amount in firestore: ', err);
      })
    }

    if (newTherapyTotal) {
      firestore
      .collection('totals')
      .doc('funds')
      .set({ therapy: newTherapyTotal }, { merge: true })
      .then(() => {
        console.log('Therapy amount updated in firestore.');
      })
      .catch((err) => {
        console.log('Error updating therapy amount in firestore: ', err);
      })
    }

    firestore
      .collection('gifts')
      .add(timestampedGift)
      .then(() => {
        console.log('Added gift to firestore.');
      })
      .catch(err => {
        console.log('Error: ', err);
      });
  };
};