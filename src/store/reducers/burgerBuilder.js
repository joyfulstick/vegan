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

const INGREDIENT_PRICES = {
  beetroot: 1.5,
  falafel: 6.3,
  salad: .7,
  tofu: 2.5
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
  case actionTypes.ADD_INGREDIENT:
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ingredientName]: state.ingredients[action.ingredientName] + 1
      },
      totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    };
  case actionTypes.REMOVE_INGREDIENT:
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ingredientName]: state.ingredients[action.ingredientName] - 1
      },
      totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
    };
  default: 
    return state;
  }
};

export default reducer;