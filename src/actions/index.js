export const updateFundCheckbox = (event, gift) => ({
  type: 'UPDATE_FUND_CHECKBOX',
  event,
  gift
});

export const updateFundAmountInput = (event, gift) => ({
  type: 'UPDATE_FUND_AMOUNT',
  event,
  gift
});

export const updateTextInput = (event, gift) => ({
  type: 'UPDATE_TEXT',
  event,
  gift
});

export const updateCheckbox = (event, gift) => ({
  type: 'UPDATE_CHECKBOX',
  event,
  gift
});

export const submitGiftForm = ({ firestore }, gift) => {
  Object.keys(gift.funds).map(fund => {
    if (!gift.funds[fund].checkbox || !gift.funds[fund].amount) {
      //delete the fund and all its subfields from the gift
      delete gift.funds[fund];
    } else {
      delete gift.funds[fund].checkbox;
      delete gift.funds[fund].style;
      delete gift.funds[fund].label;
    }
  });
  const timestampedGift = {
    ...gift,
    timestamp: new Date().toUTCString()
  }
  console.log('Adding gift to firestore: ', timestampedGift);

  return (dispatch, getState) => {

    const fundTotals = getState().firestore.data.totals;

    //Promise.all([promise1, promise2, promise3]); --> bundles lots of promises into one big one. Do I want to use this?

    if (timestampedGift.funds.honeymoon) {
      const newHoneyMoonTotal = fundTotals.funds.honeymoon + parseFloat(timestampedGift.funds.honeymoon.amount);
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

    if (timestampedGift.funds.loan) {
      const newLoansTotal = fundTotals.funds.loans + parseFloat(timestampedGift.funds.loan.amount);
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

    if (timestampedGift.funds.home) {
      const newHomeTotal = fundTotals.funds.home + parseFloat(timestampedGift.funds.home.amount);
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

    if (timestampedGift.funds.therapy) {
      const newTherapyTotal = fundTotals.funds.therapy + parseFloat(timestampedGift.funds.therapy.amount);
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
        dispatch({ type: 'RESET_FORM' });
      })
      .catch(err => {
        console.log('Error: ', err);
      });
  };
};