import * as actionTypes from './actionsTypes';
import axios from '../../axios-orders';

export const puchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const puchaseBurgerFail = error => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  };
};

export const puchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  };
};

export const puchaseBurger = orderData => {
  return dispatch => {
    dispatch(puchaseBurgerStart());
    axios.post('/orders.json', orderData)
      .then(response => {
        dispatch(puchaseBurgerSuccess(response.data, orderData));
      })
      .catch(error => {
        dispatch(puchaseBurgerFail(error));
      });
  };
};