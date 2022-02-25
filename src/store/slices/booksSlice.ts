import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '@routes/AppStack';

interface INITIAL_STATE {
  loading: boolean;
  error: string;
  books: Array<any>;
  page: number;
  amount: number;
  totalPages: number;
  filter: {
    search?: string;
    year?: string;
    category?: string;
  }
}

const initialState: INITIAL_STATE = {
  loading: false,
  error: '',
  books: [],
  page: 1,
  amount: 25,
  totalPages: 0,
  filter: {
    category: undefined,
    year: undefined,
    search: '',
  }
};

interface FilterData {
  search?: string;
  year?: string;
  category?: string;
  page: number;
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    GET_BOOKS: (state, { payload } : PayloadAction<FilterData>) => {
      state.loading = true;
      state.filter.search = payload.search;
      state.filter.category = payload.category;
      state.filter.year  = payload.year;
    },
    GET_BOOKS_SUCCESS: (state, { payload }: PayloadAction<{books: Book[], totalPages: number, page: number}>) => {
      state.loading = false;
      state.page = payload.page;
      state.totalPages = payload.totalPages;
      state.books = state.page === 1 ? payload.books : [...state.books, ...payload.books];
    },
    GET_BOOKS_FAILURE: (state, { payload }: PayloadAction<any>) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

const { actions, reducer } = booksSlice;

export const booksState = initialState;
export const { GET_BOOKS, GET_BOOKS_FAILURE, GET_BOOKS_SUCCESS } = actions;
export default reducer;
