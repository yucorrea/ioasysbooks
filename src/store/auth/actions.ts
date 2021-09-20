import {
  AUTH_LOGIN_REQUESTED,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGOUT_REQUESTED,
} from './types';

interface User {}

export function signIn(email: string, password: string) {
  return {
    type: AUTH_LOGIN_REQUESTED,
    payload: {
      email,
      password,
    },
  };
}

export function logout() {
  return {
    type: AUTH_LOGOUT_REQUESTED,
  };
}

export function signInSuccess(user: User, token: string) {
  return {
    type: AUTH_LOGIN_SUCCESS,
    payload: {
      user,
      token,
    },
  };
}

export function signInFailure() {
  return { type: AUTH_LOGIN_FAILURE };
}
