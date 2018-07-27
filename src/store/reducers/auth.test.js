import * as actionsTypes from '../actions/actionsTypes'
import reducer from './auth'

describe('auth reducer', () => {
  let intialState
  beforeEach(() => {
    intialState = {
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/',
    }
  })
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(intialState)
  })

  it('should store the token upon login', () => {
    expect(
      reducer(intialState, {
        type: actionsTypes.AUTH_SUCCESS,
        token: 'some-token',
        userId: 'some-user-id',
      }),
    ).toEqual({
      token: 'some-token',
      userId: 'some-user-id',
      error: null,
      loading: false,
      authRedirectPath: '/',
    })
  })
})
