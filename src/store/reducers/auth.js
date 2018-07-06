import * as actionTypes from '../actions/actionsTypes'
import { updatedObject } from '../utility'

const intialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
}

const authStart = state => updatedObject(state, { error: null, loading: true })

const authSuccess = (state, action) =>
  updatedObject(state, {
    token: action.token,
    userId: action.userId,
    error: null,
    loading: false,
  })

const authFail = (state, action) =>
  updatedObject(state, { error: action.error, loading: false })

const authLogout = state => {
  return updatedObject(state, { token: null, userId: null })
}

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state)
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action)
    case actionTypes.AUTH_FAIL:
      return authFail(state, action)
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state)
    default:
      return state
  }
}
export default reducer
