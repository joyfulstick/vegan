import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  const transformedIgredients = Object.keys(props.igredients)
    .map(igKey => {
      return [...Array(props.igredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    });
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIgredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;