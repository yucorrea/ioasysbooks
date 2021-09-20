import {
  ALL_BOOKS_REQUESTED,
  ALL_BOOKS_SUCCESS,
  ALL_BOOKS_FAILURE,
  SET_FILTER_REQUESTED,
} from './types';

export function allBooks() {
  return { type: ALL_BOOKS_REQUESTED };
}

export function allBooksSuccess(books, totalPages) {
  return {
    type: ALL_BOOKS_SUCCESS,
    payload: {
      books,
      totalPages,
    },
  };
}

export function setFilters(payload) {
  return {
    type: SET_FILTER_REQUESTED,
    payload,
  };
}

export function allBooksFailure() {
  return { type: ALL_BOOKS_FAILURE };
}
