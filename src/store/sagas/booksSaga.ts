import { PayloadAction } from '@reduxjs/toolkit';
import { call, takeLatest, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import {
  GET_BOOKS,
  GET_BOOKS_FAILURE,
  GET_BOOKS_SUCCESS,
} from '../slices/booksSlice';
import { RootState } from '../store';

interface FilterData {
    search?: string;
    year?: string;
    category?: string;
    loadMore?: boolean;
}

function* getAllBooks({payload} : PayloadAction<FilterData>) {
  try {

    const { search, year, category, loadMore } = payload;

    //@ts-ignore
    const { user, books } = yield select((state: RootState) => state);
    const { token } = user;
    const { page, amount } = books;

    let currentPage = 1;

    if(loadMore) {
      currentPage = page + 1;
    }

    //@ts-ignore
    const response = yield call(api.get, '/books', {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        page: currentPage,
        amount,
        title: search,
        category,
        published: year,
      },
    });


    if(loadMore) {
      yield put(
        GET_BOOKS_SUCCESS({
          books: [...books.books, ...response.data.data],
          totalPages: response.data.totalPages,
          page: currentPage
        }),
      );

      return
    }

    yield put(
      GET_BOOKS_SUCCESS({
        books: response.data.data,
        totalPages: response.data.totalPages,
        page: currentPage,
      }),
    );

  } catch (err) {
    yield put(GET_BOOKS_FAILURE('Não foi possível buscar os livros.'));
  }
}

export default function* watchAllBooks() {
  yield takeLatest(GET_BOOKS, getAllBooks);
}

