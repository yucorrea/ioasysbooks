import { call, takeLatest, all, put, select } from 'redux-saga/effects';
import api from '../../config/api';

import { allBooksSuccess, allBooksFailure } from './actions';
import { ALL_BOOKS_REQUESTED, SET_FILTER_REQUESTED } from './types';

function* getAllBooks() {
  try {
    //@ts-ignore
    const { auth, allBooks } = yield select(state => state);

    const { token } = auth;
    const { page, amount, search, year, category } = allBooks;

    //@ts-ignore
    const response = yield call(api.get, '/books', {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        page: page,
        amount,
        title: search ? search : null,
        category: category ? category : null,
        published: year ? year : null,
      },
    });

    yield put(
      allBooksSuccess([...response.data.data], response.data.totalPages),
    );
  } catch (err) {
    yield put(allBooksFailure());
  }
}

function* watchSetFilters() {
  yield takeLatest(SET_FILTER_REQUESTED, getAllBooks);
}

function* watchAllBooks() {
  yield takeLatest(ALL_BOOKS_REQUESTED, getAllBooks);
}

function* root() {
  yield all([watchAllBooks(), watchSetFilters()]);
}

export default root;
