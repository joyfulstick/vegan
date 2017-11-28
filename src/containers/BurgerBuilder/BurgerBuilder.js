import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  tofu: 0.4,
  falafel: 1.3,
  beetRoot: 0.7
};

class BurgerBuilder extends Component {
  state = {
    igredients: {
      salad: 0,
      beetRoot: 0,
      tofu: 0,
      falafel: 0
    },
    totalPrice: 4
  }

  addIngredientHandler = type => {
    const oldCount = this.state.igredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.igredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, igredients: updatedIngredients });
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.igredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.igredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, igredients: updatedIngredients });
  };

  render() {
    const disabledInfo = {
      ...this.state.igredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <=0;
    }
    return (
      <Aux>
        <Burger igredients={this.state.igredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemove={this.removeIngredientHandler}
          displayed={disabledInfo} />
      </Aux>
    );
  }
}

export default BurgerBuilder;