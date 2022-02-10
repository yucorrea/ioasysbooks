import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    loadMore: false
  }
}

const initialState: INITIAL_STATE = {
  loading: false,
  error: '',
  books: [],
  page: 1,
  amount: 10,
  totalPages: 0,
  filter: {
    category: undefined,
    year: undefined,
    search: '',
    loadMore: false
  }
};

interface FilterData {
  search?: string;
  year?: string;
  category?: string;
  loadMore?: boolean;
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
    GET_BOOKS_SUCCESS: (state, { payload }: PayloadAction<any>) => {
      state.loading = false;
      state.books = payload.books;
      state.totalPages = payload.totalPages;
      state.page = payload.page;
    },
    GET_BOOKS_FAILURE: (state, { payload }: PayloadAction<any>) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

const { actions, reducer } = booksSlice;

export const { GET_BOOKS, GET_BOOKS_FAILURE, GET_BOOKS_SUCCESS } = actions;
export default reducer;
