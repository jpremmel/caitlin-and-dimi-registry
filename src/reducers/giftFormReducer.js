import { initialGiftFormState } from '../constants/initialGiftFormState';

const giftFormReducer = (state = initialGiftFormState, action) => {
  switch (action.type) {
    case 'UPDATE_FUND_CHECKBOX': 
      if (action.event.target.checked) {
        return {
          ...action.gift,
          'funds': {
            ...action.gift.funds,
            [action.event.target.name]: {
              ...action.gift.funds[action.event.target.name],
              'checkbox': action.event.target.checked,
              'style': {}
            }
          }
        };
       } else {
        return {
          ...action.gift,
        'funds': {
          ...action.gift.funds,
          [action.event.target.name]: {
            ...action.gift.funds[action.event.target.name],
            'checkbox': action.event.target.checked,
            'amount': '',
            'style': {
              display: 'none'
            }
          }
        }
        };
       }
    case 'UPDATE_FUND_AMOUNT':
      return {
        ...action.gift,
        'funds': {
          ...action.gift.funds,
          [action.event.target.name]: {
            ...action.gift.funds[action.event.target.name],
            'amount': action.event.target.value
          }
        }
      };
    case 'UPDATE_TEXT':
      return {
        ...action.gift,
        [action.event.target.id]: action.event.target.value
      };
    case 'UPDATE_CHECKBOX':
      return {
        ...action.gift,
        [action.event.target.id]: action.event.target.checked
      };
    case 'RESET_FORM':
      return initialGiftFormState;
    default:
      return state;
  }
};

export default giftFormReducer;