import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
//import { AppContainer } from 'react-hot-loader';
import { firebaseConfig } from './constants/firebaseConfig';
import { createStore, applyMiddleware, compose } from 'redux';
import { getFirestore, createFirestoreInstance, reduxFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
//import 'firebase/analytics';

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware.withExtraArgument({ getFirebase, getFirestore })), //TO DO: try removing these methods and see if everything still works, I don't think I need them
    reduxFirestore(firebase)
  )
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('react-app-root')
);

/*eslint-disable */
// if (module.hot) {
//   module.hot.accept('./components/App', () => {
//     render(App);
//   });
// }
/*eslint-enable */