import React from 'react';
import classes from './BurgerIngredient.js';

const burgerIngredient = props => {
  let ingredient = null;
  switch (props.type) {
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
  case ('smart-becon'):
    ingredient = <div className={classes.SmartBecon}></div >;
    break;
  case ('salad'):
    ingredient = <div className={classes.Salad}></div >;
    break;
  default:
    ingredient = null;
  }
  return ingredient;
};

export default burgerIngredient;