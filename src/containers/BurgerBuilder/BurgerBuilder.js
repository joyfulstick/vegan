import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    igredients: {
      salad: 0,
      smartBacon: 0,
      tofu: 0,
      falafel: 0
    }
  }
  render() {
    return (
      <Aux>
        <Burger igredients={this.state.igredients}/>
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;