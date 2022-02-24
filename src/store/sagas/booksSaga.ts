import { PayloadAction } from '@reduxjs/toolkit';
import { call, takeLatest, put, select } from 'redux-saga/effects';
import api from '../../config/api';

import {
  GET_BOOKS,
  GET_BOOKS_FAILURE,
  GET_BOOKS_SUCCESS,
} from '../slices/booksSlice';
import { RootState } from '../store';

export interface FilterData {
    search?: string;
    year?: string;
    category?: string;
    page: number;
}

export function* getAllBooks({payload} : PayloadAction<FilterData>) {
  try {

    const { search, year, category, page = 1 } = payload;

    //@ts-ignore
    const { user, books } = yield select((state: RootState) => state);
    const { token } = user;
    const { amount } = books;

    //@ts-ignore
    const response = yield call(api.get, '/books', {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        page,
        amount,
        title: search,
        category,
        published: year,
      },
    });

    yield put(
      GET_BOOKS_SUCCESS({
        books: response.data.data,
        totalPages: response.data.totalPages,
        page,
      }),
    );

  } catch (err) {
    console.log(err)
    yield put(GET_BOOKS_FAILURE('Não foi possível buscar os livros.'));
  }
}

export default function* watchAllBooks() {
  yield takeLatest(GET_BOOKS, getAllBooks);
}

