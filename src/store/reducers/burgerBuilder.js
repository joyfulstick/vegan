import * as actionTypes from '../actions/actionsTypes'
import { updatedObject } from '../utility'

const initalState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false,
}

const INGREDIENT_PRICES = {
  beetroot: 1.5,
  falafel: 6.3,
  salad: 0.7,
  tofu: 2.5,
}

const addIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  }
  const updatedIngredients = updatedObject(state.ingredients, updatedIngredient)
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true,
  }
  return updatedObject(state, updatedState)
}

const removeIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
  }
  const updatedIngredients = updatedObject(state.ingredients, updatedIngredient)
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building: true,
  }
  return updatedObject(state, updatedState)
}

const setIngredients = (state, action) => {
  return updatedObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      beetroot: action.ingredients.beetroot,
      tofu: action.ingredients.tofu,
      falafel: action.ingredients.falafel,
    },
    totalPrice: 4,
    error: false,
    building: false,
  })
}

const fetchIngredientFailed = state => {
  return updatedObject(state, { error: true })
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action)
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action)
    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action)
    case actionTypes.FETCH_INGREDIENT_FAILED:
      return fetchIngredientFailed(state)
    default:
      return state
  }
}

export default reducer
