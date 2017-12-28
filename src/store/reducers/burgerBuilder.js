import * as actionTypes from '../actions/actionsTypes';

const initalState = {
  ingredients: null,
  totalPrice: 4,
  error: false
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
  case actionTypes.SET_INGREDIENTS:
    return {
      ...state,
      ingredients: {
        salad: action.ingredients.salad,
        beetroot: action.ingredients.beetroot,
        tofu: action.ingredients.tofu,
        falafel: action.ingredients.falafel
      },
      totalPrice: 4,
      error: false
    };
  case actionTypes.FETCH_INGREDIENT_FAILED:
    return {
      ...state,
      error: true
    };
  default: 
    return state;
  }
};

export default reducer;