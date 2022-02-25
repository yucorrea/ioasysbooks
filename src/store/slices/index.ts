import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'ioasys',
  storage: AsyncStorage,
  whiteList: ['token'],
};

import user, { userState } from '@store/slices/userSlice';
import books, { booksState } from '@store/slices/booksSlice';

export const globalState = {
  user: userState,
  books: booksState
}

export default combineReducers({
  user: persistReducer(persistConfig, user),
  books,
});
