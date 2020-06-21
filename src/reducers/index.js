import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import giftFormReducer from './giftFormReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  gift: giftFormReducer,
  modal: modalReducer
});

export default rootReducer;