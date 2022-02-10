import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'ioasys',
  storage: AsyncStorage,
  whiteList: ['token'],
};

import user from './userSlice';
import books from './booksSlice';

export default combineReducers({
  user: persistReducer(persistConfig, user),
  books,
});
