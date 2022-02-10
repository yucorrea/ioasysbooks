import { all } from 'redux-saga/effects';

import userSaga from './userSaga';
import booksSaga from './booksSaga';

function* rootSagas() {
  yield all([userSaga(), booksSaga()]);
}

export default rootSagas;

