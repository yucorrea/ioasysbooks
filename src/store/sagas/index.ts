import { all } from 'redux-saga/effects';

import userSaga from '@store/sagas/userSaga';
import booksSaga from '@store/sagas/booksSaga';

function* rootSagas() {
  yield all([userSaga(), booksSaga()]);
}

export default rootSagas;

