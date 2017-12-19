import * as actionTypes from './actions';

const initalState = {
  ingredients: {
    beetroot: 0,
    falafel: 0,
    salad: 0,
    tofu: 0
  },
  totalPrice: 4
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
  case actionTypes.ADD_INGREDIENT:
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ingredientName]: state.igredients[action.ingredientName] + 1
      }
    };
  case actionTypes.REMOVE_INGREDIENT:
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ingredientName]: state.igredients[action.ingredientName] - 1
      }
    };
  default: state;
  }

};

export default reducer;