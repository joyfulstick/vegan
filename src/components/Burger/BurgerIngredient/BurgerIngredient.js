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
    case ('falafel'):
      ingredient = <div className={classes.Falafel}></div >;
      break;
    case ('tofu'):
      ingredient = <div className={classes.Tofu}></div >;
      break;
    case ('beetRoot'):
      ingredient = <div className={classes.BeetRoot}></div >;
      break;
    case ('salad'):
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