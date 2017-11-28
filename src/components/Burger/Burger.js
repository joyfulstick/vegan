import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = () => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="tofu" />
      <BurgerIngredient type="falafel" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;