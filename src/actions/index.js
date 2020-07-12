import emailjs from 'emailjs-com';

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
  const timestampedGift = {
    ...gift,
    timestamp: new Date().toUTCString()
  }
  return (dispatch, getState) => {
    const fundTotals = getState().firestore.data.totals;

    if (timestampedGift.funds.honeymoon.amount) {
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

    if (timestampedGift.funds.loan.amount) {
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

    if (timestampedGift.funds.home.amount) {
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

    if (timestampedGift.funds.therapy.amount) {
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

    if (timestampedGift.funds.honeymoon.amount || timestampedGift.funds.loan.amount || timestampedGift.funds.home.amount || timestampedGift.funds.therapy.amount) {
      Object.keys(timestampedGift.funds).map(fund => {
        if (!timestampedGift.funds[fund].checkbox || !timestampedGift.funds[fund].amount) {
          //delete the fund and all its subfields from the timestampedGift
          delete timestampedGift.funds[fund];
        } else {
          delete timestampedGift.funds[fund].checkbox;
          delete timestampedGift.funds[fund].style;
          delete timestampedGift.funds[fund].label;
        }
      });
      firestore
        .collection('gifts')
        .add(timestampedGift)
        .then(() => {
          console.log('Added gift to firestore.');
          sendEmail(timestampedGift);
          dispatch({ type: 'RESET_FORM' });
        })
        .catch(err => {
          console.log('Error: ', err);
        });
      dispatch({ type: 'SHOW_MODAL' });
    }
  };
};

export const sendEmail = (gift) => {
  let name, note, honeymoon, loans, home, therapy;
  (gift.name)
    ? name = `Name: ${gift.name}`
    : name = '';
  (gift.note)
    ? note = `Note: ${gift.note}`
    : note = '';
  (gift && gift.funds && gift.funds.honeymoon && gift.funds.honeymoon.amount)
    ? honeymoon = `Honeymoon: $${gift.funds.honeymoon.amount}`
    : honeymoon = '';
  (gift && gift.funds && gift.funds.loan && gift.funds.loan.amount)
    ? loans = `Student Loans: $${gift.funds.loan.amount}`
    : loans = '';
  (gift && gift.funds && gift.funds.home && gift.funds.home.amount)
    ? home = `Our First Home: $${gift.funds.home.amount}`
    : home = '';
  (gift && gift.funds && gift.funds.therapy && gift.funds.therapy.amount)
    ? therapy = `Therapy for Our Future Kids: $${gift.funds.therapy.amount}`
    : therapy = '';
  const templateParams = {
    public: `${gift.public}`,
    name: `${name}`,
    note: `${note}`,
    honeymoon: `${honeymoon}`,
    loans: `${loans}`,
    home: `${home}`,
    therapy: `${therapy}`
  };

  emailjs.send('default_service', process.env.EMAIL_TEMPLATE_ID, templateParams, process.env.USER_ID)
    .then((response) => {
      console.log('Success!', response.status, response.text);
    }, (error) => {
      console.log('Failed:', error);
    });
};