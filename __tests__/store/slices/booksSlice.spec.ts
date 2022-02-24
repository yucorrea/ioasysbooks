
import { AnyAction } from '@reduxjs/toolkit';
import { Book } from '../../../src/routes/AppStack';
import reducer, {GET_BOOKS, GET_BOOKS_FAILURE, GET_BOOKS_SUCCESS} from '../../../src/store/slices/booksSlice';

describe('booksSlice', () => {

  const initialState = {
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
  }

  const books : Book[] = [
      {
        id:  new Date().getTime().toString(),
        title: 'Book Example',
        description: 'An description example',
        category: 'category-example',
        authors: ['Author 1', 'Author 2'],
        imageUrl: 'image.png',
        isbn10: '',
        isbn13: '',
        language: 'ptBR',
        pageCount: 10,
        published: 9999,
        publisher: '',
      },
  ];

  it('should return initialState', () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual(initialState);
  });

  it('should request GET_BOOKS', () => {
    expect(reducer(undefined, GET_BOOKS({page: 1, category: undefined, search: '', year: undefined}))).toEqual({
     ...initialState,
     loading: true
    });
  });

  it('should request GET_BOOKS with filter by search', () => {
    expect(reducer(undefined, GET_BOOKS({page: 1, category: undefined, search: 'Book Example', year: undefined}))).toEqual({
     ...initialState,
     loading: true,
      filter: {
        ...initialState.filter,
        search: 'Book Example'
      }
    });
  });

  it('should request GET_BOOKS with filter by category', () => {
    expect(reducer(undefined, GET_BOOKS({page: 1, category: 'category-example', search: '', year: undefined}))).toEqual({
     ...initialState,
     loading: true,
      filter: {
        ...initialState.filter,
        category: 'category-example'
      }
    });
  });

  it('should request GET_BOOKS with filter by year', () => {
    expect(reducer(undefined, GET_BOOKS({page: 1, category: undefined, search: '', year: '2022'}))).toEqual({
     ...initialState,
     loading: true,
      filter: {
        ...initialState.filter,
       year: '2022'
      }
    })
  });

  it('should returns books when call GET_BOOKS_SUCCESS', () => {
    expect(reducer(undefined, GET_BOOKS_SUCCESS({ books: books, totalPages: 1, page: 1 }))).toEqual({
      ...initialState,
      loading: false,
      books: books,
      page: 1,
      totalPages: 1,
    });
  });

  it('should return array concact when page greater than one', () => {
    expect(reducer(undefined, GET_BOOKS_SUCCESS({ books: books, totalPages: 2, page: 2 }))).toEqual({
      ...initialState,
      loading: false,
      books: books,
      page: 2,
      totalPages: 2,
    });
  });

  it('should error when call GET_BOOKS_FAILURE', () => {
    expect(reducer(undefined, GET_BOOKS_FAILURE('An error ocurred'))).toEqual({
      ...initialState,
      error: 'An error ocurred'
    });
  });

});
