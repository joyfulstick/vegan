import * as actionTypes from './actionsTypes'

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  }
}

export const authSuccess = authData => {
  return {
    type: actionTypes.AUTH_START,
    authData,
  }
}

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error,
  }
}

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart())
  }
}
