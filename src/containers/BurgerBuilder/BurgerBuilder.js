import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    igredients: {
      salad: 1,
      smartBacon: 1,
      tofu: 2,
      falafel: 2
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