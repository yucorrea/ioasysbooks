
import { PayloadAction } from '@reduxjs/toolkit';
import { runSaga, Saga } from 'redux-saga';
import api, { setTokenAPI } from '../../../src/config/api';

import { Credentials, signIn } from '../../../src/store/sagas/userSaga';
import {LOGIN_FAILURE, LOGIN_SUCCESS } from '../../../src/store/slices/userSlice';

describe('userSaga', () => {

  const credentials = {
    email: 'desafio@ioasys.com.br',
    password: '12341234'
  };

  setTokenAPI('123456789');

    it('signIn with valid credentials', async () => {
      const dispatched: PayloadAction<string>[] = [];

      const apiReturnSuccessMock = {
        headers: {
          authorization: 'bearer-token'
        },
        data: {
          id: "5f41b92c7460b9337660427e",
          name: "Henrique da Silva",
          birthdate: "1990-10-25",
          gender: "M"
        }
      };

      (api.post as jest.Mock).mockResolvedValueOnce(apiReturnSuccessMock);
      await runSaga(
        {
          dispatch: (action: PayloadAction<string>) => dispatched.push(action),
        },
        signIn as unknown as Saga<[{ payload: Credentials }]>,
       {payload: credentials}
      ).toPromise();

      expect(api.post).toHaveBeenCalledWith('/auth/sign-in', credentials);
      expect(dispatched).toContainEqual(
        LOGIN_SUCCESS({token: "bearer-token", user: apiReturnSuccessMock.data})
      );

    })

    it('signIn with invalid credentials', async () => {
      const dispatched: PayloadAction<string>[] = [];
      const error = 'Falha na autenticação';

      (api.post as jest.Mock).mockRejectedValueOnce(error);
      await runSaga(
        {
          dispatch: (action: PayloadAction<string>) => dispatched.push(action),
        },
        signIn as unknown as Saga<[{ payload: Credentials }]>,
       {payload: credentials}
      ).toPromise();

      expect(api.post).toHaveBeenCalledWith('/auth/sign-in', credentials);
      expect(dispatched).toContainEqual( LOGIN_FAILURE(error) );

    })

})
