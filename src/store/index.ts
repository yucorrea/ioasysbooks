import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { persistStore, persistReducer } from 'redux-persist';

import AsyncStorage from '@react-native-community/async-storage';

import authReducer from './auth/reducer';
import authSaga from './auth/sagas';

import booksReducer from './books/reducer';
import booksSaga from './books/sagas';

const persistConfig = {
  key: 'ioasys',
  storage: AsyncStorage,
  whiteList: ['token'],
};

const sagaMiddleware = createSagaMiddleware();

const rootReducers = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  allBooks: booksReducer,
});

function* rootSagas() {
  yield all([authSaga(), booksSaga()]);
}

const store = createStore(
  rootReducers,
  compose(applyMiddleware(sagaMiddleware)),
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);

export { store, persistor };
