import * as actionTypes from './actions';

const initalState = {
  ingredients: null,
  totalPrice: 4
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
  case actionTypes.ADD_INGREDIENT:
    return {

    };
  case actionTypes.REMOVE_INGREDIENT:
    return {

    };
  default: state;
  }

};

export default reducer;