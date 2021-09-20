import { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT_REQUESTED } from './types';

const initialState = {
  user: {},
  token: null,
};

interface Action {
  type: string;
  payload?: any;
}

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case AUTH_LOGOUT_REQUESTED:
      return {
        ...state,
        user: {},
        token: null,
      };
    default:
      return state;
  }
}

export default reducer;
