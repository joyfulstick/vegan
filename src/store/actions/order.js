import * as actionTypes from './actionsTypes'
import axios from '../../axios-orders'

export const puchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData,
  }
}

export const puchaseBurgerFail = error => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error,
  }
}

export const puchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START,
  }
}

export const puchaseBurger = orderData => {
  return dispatch => {
    dispatch(puchaseBurgerStart())
    axios
      .post('/orders.json', orderData)
      .then(response => {
        dispatch(puchaseBurgerSuccess(response.data.name, orderData))
      })
      .catch(error => {
        dispatch(puchaseBurgerFail(error))
      })
  }
}

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  }
}

export const fetchOrderSuccsess = orders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders,
  }
}

export const fetchOrderFail = error => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error,
  }
}

export const fetchOrderStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  }
}

export const fetchOrders = () => {
  return dispatch => {
    dispatch(fetchOrderStart())
    axios
      .get('/orders.json')
      .then(res => {
        const fetchedOrders = []
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          })
        }
        dispatch(fetchOrderSuccsess(fetchedOrders))
      })
      .catch(err => {
        dispatch(fetchOrderFail(err))
      })
  }
}
