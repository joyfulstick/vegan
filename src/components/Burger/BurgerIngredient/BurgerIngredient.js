import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
    case ('bread-bottom'):
      ingredient = <div className={classes.BreadBottom}></div>;
      break;
    case ('bread-top'):
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case ('1falafel'):
      ingredient = <div className={classes.Falafel}></div >;
      break;
    case ('3tofu'):
      ingredient = <div className={classes.Tofu}></div >;
      break;
    case ('2beetroot'):
      ingredient = <div className={classes.Beetroot}></div >;
      break;
    case ('4salad'):
      ingredient = <div className={classes.Salad}></div >;
      break;
    default:
      ingredient = null;
    }
    return ingredient;
  }
}

BurgerIngredient.PropTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;