import { PayloadAction } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { call, takeEvery, put } from 'redux-saga/effects';
import api from '../../config/api';

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../slices/userSlice';

interface Credentials {
    email: string;
    password: string;
}

function* signIn({ payload }: PayloadAction<Credentials>) {
  try {
    const { email, password } = payload;

    //@ts-ignore
    const response = yield call(api.post, '/auth/sign-in', {
      email,
      password,
    });

    const { authorization } = response.headers;

    api.defaults.headers.Authorization = `Bearer ${authorization}`;


    yield put(LOGIN_SUCCESS({
      user: response.data,
      token: authorization
    }));
  } catch (err) {
    Alert.alert('Falha na autenticação', 'Verique suas credenciais');
    yield put(LOGIN_FAILURE('Falha na autenticação'));
  }
}

export default function* watchSignIn() {
  yield takeEvery(LOGIN, signIn);
}



