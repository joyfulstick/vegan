import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div>
        <Burger ingredients={props.ingredients} />
        <div className={classes.CheckoutOptions}>
          <Button
            btnType="Danger"
            clicked={props.checkoutCancelled}>CANCEL</Button>
          <Button
            disabled={props.disabled}
            btnType="Success"
            clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
      </div>
    </div>
  );
};

export default checkoutSummary;