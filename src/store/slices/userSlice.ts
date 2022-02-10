import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface INITIAL_STATE {
  loading: boolean;
  error: string;
  token: string;
  user: any;
}

const initialState: INITIAL_STATE = {
  loading: false,
  error: '',
  token: '',
  user: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    LOGIN: (state, { payload }: PayloadAction<{email: string; password: string}>) => {
      state.loading = true;
    },
    LOGOUT: (state) => {
      state.token = '';
      state.user = {};
    },
    LOGIN_SUCCESS: (state, { payload }: PayloadAction<{token: string; user: any}>) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
    },
    LOGIN_FAILURE: (state, { payload }: PayloadAction<any>) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

const { actions, reducer } = userSlice;

export const { LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE } = actions;
export default reducer;
