import {
  ALL_BOOKS_SUCCESS,
  ALL_BOOKS_REQUESTED,
  SET_FILTER_REQUESTED,
} from './types';

const initialState = {
  books: [],
  page: 1,
  amount: 10,
  totalPages: 0,
  isLoading: false,
  search: null,
  year: null,
  category: null,
};

interface Action {
  type: string;
  payload?: any;
}

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case ALL_BOOKS_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case SET_FILTER_REQUESTED:
      return {
        ...state,
        search: action.payload.search,
        year: action.payload.year,
        category: action.payload.category,
        page: 1,
      };
    case ALL_BOOKS_SUCCESS:
      return {
        ...state,
        books:
          state.page === 1
            ? action.payload.books
            : [...state.books, ...action.payload.books],
        totalPages: action.payload.totalPages,
        search: action.payload.search,
        isLoading: false,
        page: state.page + 1,
      };

    default:
      return state;
  }
}

export default reducer;
