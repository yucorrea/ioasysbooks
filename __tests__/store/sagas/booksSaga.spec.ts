import { PayloadAction } from '@reduxjs/toolkit';
import { runSaga, Saga} from 'redux-saga';
import api from '@config/api';
import { FilterData, getAllBooks } from '@store/sagas/booksSaga';
import { GET_BOOKS_SUCCESS, GET_BOOKS_FAILURE } from '@store/slices/booksSlice';

describe('booksSaga', () => {

  const apiReturnSuccessMock = {
    data: {
      data: [],
      totalPages: 1,
    },
    page: 1,
  };

  const mockFilterData = {
    page: 1,
    category: undefined,
    search: '',
    published: undefined,
  }

  const mockRequestValues = {
    headers: { Authorization: `Bearer 123456` },
    params: {
      page: 1,
      amount: 25,
      title: "",
      category: undefined,
      published: undefined,
    },
  };

  it('get all books', async () => {
    const dispatched : PayloadAction<FilterData>[] = [];

    (api.get as jest.Mock).mockReturnValueOnce(apiReturnSuccessMock);

    await runSaga(
      {
      dispatch: (action: PayloadAction<FilterData>) => dispatched.push(action),
      getState: () => ({
        user: { token: '123456' },
        books: {  amount: 25 }
      })
      },
      getAllBooks as unknown as Saga<[{ payload: FilterData}]>,
      {payload: mockFilterData}
    ).toPromise();

    expect(api.get).toHaveBeenCalledWith('/books', mockRequestValues);
    expect(dispatched).toContainEqual(GET_BOOKS_SUCCESS({books: [], page: 1, totalPages: 1}));
  })

  it('get all books failure', async () => {
    const dispatched : PayloadAction<FilterData>[] = [];
    const error = 'Não foi possível buscar os livros.';

    (api.get as jest.Mock).mockRejectedValue(error);

    await runSaga(
      {
      dispatch: (action: PayloadAction<FilterData>) => dispatched.push(action),
      getState: () => ({
        user: { token: '123456' },
        books: {  amount: 25 }
      })
      },
      getAllBooks as unknown as Saga<[{ payload: FilterData}]>,
      {payload: mockFilterData}
    ).toPromise();

    expect(api.get).toHaveBeenCalledWith('/books', mockRequestValues);
    expect(dispatched).toContainEqual(GET_BOOKS_FAILURE(error));
  })
})
