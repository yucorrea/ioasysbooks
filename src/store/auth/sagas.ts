import { Alert } from 'react-native';
import { call, takeLatest, all, put } from 'redux-saga/effects';
import api from '../../services/api';

import { signInFailure, signInSuccess } from './actions';
import { AUTH_LOGIN_REQUESTED } from './types';

interface Credentials {
  payload: {
    email: string;
    password: string;
  };
}

function* signIn({ payload }: Credentials) {
  try {
    const { email, password } = payload;

    //@ts-ignore
    const response = yield call(api.post, '/auth/sign-in', {
      email,
      password,
    });

    const { authorization } = response.headers;

    api.defaults.headers.Authorization = `Bearer ${authorization}`;

    yield put(signInSuccess(response.data, authorization));
  } catch (err) {
    Alert.alert('Falha na autenticação', 'Verique suas credenciais');
    yield put(signInFailure());
  }
}

function* watchSignIn() {
  yield takeLatest(AUTH_LOGIN_REQUESTED, signIn);
}

function* root() {
  yield all([watchSignIn()]);
}

export default root;
