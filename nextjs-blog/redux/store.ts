import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {createWrapper} from 'next-redux-wrapper';
import reducer from './reducers/index';
import rootSaga from './actions/index';
import {composeWithDevTools} from 'redux-devtools-extension'

const makeStore = (context) => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();

  const makeConfiguredStore = (reducer) => {
    // 2: Add an extra parameter for applying middleware:
    // const middlewares = process.env.NODE_ENV === 'development'
    //   ?  applyMiddleware(sagaMiddleware, logger) : applyMiddleware(sagaMiddleware);

    // * original code for setting stores!
    // const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));


    // * using composeWithDevTools allows you to see
    // * all the states stored in redux in google chrome!
    // ! don't forget to install redux devtools extension!
    const store = createStore(
      reducer,
      composeWithDevTools(
        applyMiddleware(sagaMiddleware, logger)
      )
    );
    // 3: Run your sagas on server
    (store as any).sagaTask = sagaMiddleware.run(rootSaga);
    return store
  };

  const isServer = typeof window === 'undefined';

  // if (isServer) {
  //   return makeConfiguredStore(reducer);
  // } else 
  {
    const {persistStore, persistReducer} = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;

    const persistConfig = {
      key: 'nextjs',
      whitelist: ['storage', 'insurCalc', 'user'], // make sure it does not clash with server keys
      storage
    };

    const persistedReducer = persistReducer(persistConfig, reducer);
    const store = makeConfiguredStore(persistedReducer);

    (store as any).__persistor = persistStore(store); // Nasty hack * 2 stores--> 1) store 2) store.__persistor

    return store;
  }

  // 4: now return the store:
};

export const wrapper = createWrapper(makeStore);
