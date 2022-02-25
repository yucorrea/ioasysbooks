
import { AnyAction } from '@reduxjs/toolkit';
import reducer, { LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE } from '@store/slices/userSlice';

describe('userSlice', () => {
  it('should return initialState', () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual({
      loading: false,
      error: '',
      token: '',
      user: {},
    })
  })

  it('should request LOGIN', () => {
    expect(reducer(undefined, LOGIN({email: 'johndoe@example.com', password: 'any-password'}))).toEqual({
      loading: true,
      error: '',
      token: '',
      user: {},
    })
  })

  it('should return data when has LOGIN_SUCCESS', () => {

    expect(reducer(undefined, LOGIN_SUCCESS({ token: 'any-token', user: { name: 'John Doe'}}))).toEqual({
      loading: false,
      error: '',
      token: 'any-token',
      user: {
        name: 'John Doe'
      },
    })
  })

  it('should return error when call LOGIN_FAILURE', () => {

    expect(reducer(undefined, LOGIN_FAILURE('An error occured'))).toEqual({
      loading: false,
      error: 'An error occured',
      token: '',
      user: {},
    })
  })

  it('should reset initialState when call LOGOUT', () => {

    expect(reducer(undefined, LOGOUT())).toEqual({
      loading: false,
      error: '',
      token: '',
      user: {},
    })
  })
})
