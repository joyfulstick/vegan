import axios from 'axios'
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
    const authData = {
      email,
      password,
      returnSecureToken: true,
    }
    axios
      .post(
        'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBv9KdBd_xzmJnrXD3kN8keWYwhvMB7dPo',
        authData,
      )
      .then(response => {
        console.log(response)
        dispatch(authSuccess(response.data))
      })
      .catch(err => {
        console.log(err)
        dispatch(authFail(err))
      })
  }
}
