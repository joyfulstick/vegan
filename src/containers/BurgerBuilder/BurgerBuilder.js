import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
  state = {
    igredients: {
      salad: 0,
      beetRoot: 0,
      tofu: 0,
      falafel: 0
    }
  }
  render() {
    return (
      <Aux>
        <Burger igredients={this.state.igredients}/>
        <BuildControls />
      </Aux>
    );
  }
}

export default BurgerBuilder;