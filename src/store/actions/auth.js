import * as actionTypes from './actionsTypes'
import axios from 'axios'

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  }
}

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
    userId,
  }
}

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error,
  }
}

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart())
    const authData = {
      email,
      password,
      returnSecureToken: true,
    }
    let url =
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBv9KdBd_xzmJnrXD3kN8keWYwhvMB7dPo'
    if (!isSignup)
      url =
        'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBv9KdBd_xzmJnrXD3kN8keWYwhvMB7dPo'
    axios
      .post(url, authData)
      .then(response => {
        dispatch(authSuccess(response.data.idToken, response.data.localId))
      })
      .catch(err => {
        dispatch(authFail(err))
      })
  }
}
